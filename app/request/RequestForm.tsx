"use client";

import { type FormEvent, useState } from "react";
import { site } from "../content";

function CopyEmailButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  function legacyCopy() {
    const textarea = document.createElement("textarea");
    textarea.value = site.email;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  async function copyEmail() {
    let copiedWithClipboard = false;
    try {
      if (navigator.clipboard?.writeText) {
        await Promise.race([
          navigator.clipboard.writeText(site.email),
          new Promise((_, reject) => window.setTimeout(() => reject(new Error("Clipboard timeout")), 600)),
        ]);
        copiedWithClipboard = true;
      }
    } catch {
      copiedWithClipboard = false;
    }

    if (!copiedWithClipboard) legacyCopy();
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button className={className} onClick={copyEmail} type="button">
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}

export function RequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const contact = String(data.get("contact") || "");
    const message = String(data.get("message") || "");

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.error || "Message could not be sent.");

      form.reset();
      setStatus("sent");
    } catch (requestError) {
      setStatus("error");
      setError(requestError instanceof Error ? requestError.message : "Message could not be sent.");
    }
  }

  return (
    <form className="contact-message-form" onSubmit={submitRequest}>
      <label>
        <span>Name</span>
        <input autoComplete="name" maxLength={120} name="name" required type="text" />
      </label>
      <label>
        <span>Contact info</span>
        <input autoComplete="email" maxLength={180} name="contact" required type="text" />
      </label>
      <label>
        <span>Message</span>
        <textarea maxLength={2500} name="message" required rows={6} />
      </label>
      <button className="button button-light" disabled={status === "sending"} type="submit">
        {status === "sending" ? "Sending" : "Submit"}
      </button>
      {status === "sent" && <p className="form-status">Message sent.</p>}
      {status === "error" && <p className="form-status form-status-error">{error}</p>}
      <div className="form-fallback">
        <span>Fallback</span>
        <CopyEmailButton />
      </div>
    </form>
  );
}

export function BookingPanel() {
  const bookingAvailable = Boolean(site.bookingUrl);

  return (
    <div className="booking-panel">
      {bookingAvailable && (
        <iframe
          allow="payment"
          loading="lazy"
          src={`${site.bookingUrl}?embed=1`}
          title="Set up a chat with Gard Laeskogen"
        />
      )}
      {!bookingAvailable && (
        <div className="booking-fallback">
          <a className="button button-dark" href={`mailto:${site.email}?subject=${encodeURIComponent("Chat with Gard Laeskogen")}`}>
            Email to arrange a time
          </a>
          <CopyEmailButton className="copy-button" />
        </div>
      )}
    </div>
  );
}
