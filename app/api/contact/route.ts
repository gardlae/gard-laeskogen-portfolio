import { NextResponse } from "next/server";
import { site } from "../../content";

const MAX_NAME_LENGTH = 120;
const MAX_CONTACT_LENGTH = 180;
const MAX_MESSAGE_LENGTH = 2500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  contact?: unknown;
  message?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = cleanText(payload.name, MAX_NAME_LENGTH);
  const contact = cleanText(payload.contact, MAX_CONTACT_LENGTH);
  const message = cleanText(payload.message, MAX_MESSAGE_LENGTH);

  if (!name || !contact || !message) {
    return NextResponse.json({ error: "Name, contact info, and message are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "website@gardlaeskogen.com";
  const replyTo = EMAIL_PATTERN.test(contact) ? contact : undefined;

  if (!apiKey) {
    return NextResponse.json({ error: "Contact form delivery is not configured yet." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
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
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Message delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
