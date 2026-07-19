import { site } from "../../content/profile.ts";

const MAX_NAME_LENGTH = 120;
const MAX_CONTACT_LENGTH = 180;
const MAX_MESSAGE_LENGTH = 2500;
const MAX_BODY_BYTES = 12_000;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requestTimesByIp = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  contact?: unknown;
  message?: unknown;
  startedAt?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const requestOrigin = new URL(request.url).origin;
  const canonicalOrigin = new URL(site.canonicalUrl).origin;
  const apexOrigin = canonicalOrigin.replace("://www.", "://");
  return origin === requestOrigin || origin === canonicalOrigin || origin === apexOrigin;
}

function isRateLimited(request: Request) {
  const ip = request.headers.get("cf-connecting-ip")?.trim();
  if (!ip) return false;

  const now = Date.now();
  const recent = (requestTimesByIp.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestTimesByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestTimesByIp.set(ip, recent);

  if (requestTimesByIp.size > 1_000) {
    for (const [key, times] of requestTimesByIp) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) requestTimesByIp.delete(key);
    }
  }

  return false;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "Request is too large." }, { status: 413 });
  }

  if (isRateLimited(request)) {
    return Response.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = cleanText(payload.name, MAX_NAME_LENGTH);
  const contact = cleanText(payload.contact, MAX_CONTACT_LENGTH);
  const message = cleanText(payload.message, MAX_MESSAGE_LENGTH);
  const website = cleanText(payload.website, 200);
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : Number(payload.startedAt);
  const formAge = Date.now() - startedAt;

  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !contact || !message) {
    return Response.json({ error: "Name, contact info, and message are required." }, { status: 400 });
  }

  if (!Number.isFinite(startedAt) || formAge < 0 || formAge > MAX_FORM_AGE_MS) {
    return Response.json({ error: "Please refresh the page and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "website@gardlaeskogen.com";
  const replyTo = EMAIL_PATTERN.test(contact) ? contact : undefined;

  if (!apiKey) {
    return Response.json({ error: "Contact form delivery is not configured yet." }, { status: 503 });
  }

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Gard Laeskogen website <${fromEmail}>`,
        to: [toEmail],
        subject: `Website message from ${name}`,
        text: [`Name: ${name}`, `Contact: ${contact}`, "", "Message:", message].join("\n"),
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return Response.json({ error: "Message delivery is temporarily unavailable." }, { status: 502 });
  }

  if (!response.ok) {
    console.error(`Resend rejected a contact message with status ${response.status}.`);
    return Response.json({ error: "Message delivery failed." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
