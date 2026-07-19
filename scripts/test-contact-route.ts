import assert from "node:assert/strict";
import { POST } from "../app/api/contact/route.ts";

process.env.RESEND_API_KEY = "test-key";
process.env.CONTACT_TO_EMAIL = "gard@example.com";
process.env.CONTACT_FROM_EMAIL = "website@example.com";

const originalFetch = globalThis.fetch;
const canonicalOrigin = "https://www.gardlaeskogen.com";

function contactRequest(body: Record<string, unknown>, ip: string, origin = canonicalOrigin) {
  return new Request(`${canonicalOrigin}/api/contact`, {
    method: "POST",
    headers: {
      "cf-connecting-ip": ip,
      "content-type": "application/json",
      origin,
    },
    body: JSON.stringify(body),
  });
}

function validPayload(overrides: Record<string, unknown> = {}) {
  return {
    name: "Recruiter",
    contact: "recruiter@example.com",
    message: "I would like to discuss an engineering role.",
    startedAt: Date.now() - 2_000,
    website: "",
    ...overrides,
  };
}

try {
  let resendPayload: Record<string, unknown> | undefined;
  globalThis.fetch = async (_input, init) => {
    resendPayload = JSON.parse(String(init?.body));
    return new Response(JSON.stringify({ id: "email-test" }), { status: 200 });
  };

  const success = await POST(contactRequest(validPayload(), "test-success"));
  assert.equal(success.status, 200);
  assert.equal(resendPayload?.reply_to, "recruiter@example.com");
  assert.deepEqual(resendPayload?.to, ["gard@example.com"]);

  const invalidOrigin = await POST(
    contactRequest(validPayload(), "test-origin", "https://example.net"),
  );
  assert.equal(invalidOrigin.status, 403);

  const missingFields = await POST(
    contactRequest(validPayload({ message: "" }), "test-missing"),
  );
  assert.equal(missingFields.status, 400);

  const tooFast = await POST(
    contactRequest(validPayload({ startedAt: Date.now() }), "test-timing"),
  );
  assert.equal(tooFast.status, 400);

  let honeypotFetchCalled = false;
  globalThis.fetch = async () => {
    honeypotFetchCalled = true;
    return new Response(null, { status: 200 });
  };
  const honeypot = await POST(
    contactRequest(validPayload({ website: "https://spam.example" }), "test-honeypot"),
  );
  assert.equal(honeypot.status, 200);
  assert.equal(honeypotFetchCalled, false);

  const oversized = new Request(`${canonicalOrigin}/api/contact`, {
    method: "POST",
    headers: {
      "cf-connecting-ip": "test-oversized",
      "content-length": "13000",
      "content-type": "application/json",
      origin: canonicalOrigin,
    },
    body: JSON.stringify(validPayload()),
  });
  assert.equal((await POST(oversized)).status, 413);

  globalThis.fetch = async () => new Response(JSON.stringify({ id: "rate-test" }), { status: 200 });
  for (let attempt = 0; attempt < 5; attempt += 1) {
    assert.equal(
      (await POST(contactRequest(validPayload(), "test-rate-limit"))).status,
      200,
    );
  }
  assert.equal(
    (await POST(contactRequest(validPayload(), "test-rate-limit"))).status,
    429,
  );

  globalThis.fetch = async () => {
    throw new Error("upstream unavailable");
  };
  const upstreamFailure = await POST(
    contactRequest(validPayload(), "test-upstream"),
  );
  assert.equal(upstreamFailure.status, 502);

  console.log("Contact route tests passed.");
} finally {
  globalThis.fetch = originalFetch;
}
