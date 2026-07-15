"use client";

import { type FormEvent, useState } from "react";
import { site } from "../content";
import { buildDocumentRequestMailto } from "./mailto";

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
  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const organisation = String(data.get("organisation") || "Not provided");
    window.location.href = buildDocumentRequestMailto(site.email, organisation);
  }

  return (
    <form className="document-request-form" onSubmit={submitRequest}>
      <label>
        <span>Company or organisation</span>
        <input autoComplete="organization" name="organisation" required type="text" />
      </label>
      <button className="button button-light" type="submit">Prepare request email</button>
      <div className="form-fallback">
        <span>No email app?</span>
        <CopyEmailButton />
      </div>
    </form>
  );
}

export function BookingPanel() {
  const [showBooking, setShowBooking] = useState(false);
  const bookingAvailable = Boolean(site.bookingUrl);

  return (
    <div className="booking-panel">
      {bookingAvailable && !showBooking && (
        <button className="button button-dark" onClick={() => setShowBooking(true)} type="button">
          Open booking calendar
        </button>
      )}
      {bookingAvailable && showBooking && (
        <iframe
          allow="payment"
          loading="lazy"
          src={site.bookingUrl}
          title="Book a conversation with Gard Laeskogen"
        />
      )}
      {!bookingAvailable && (
        <div className="booking-fallback">
          <a className="button button-dark" href={`mailto:${site.email}?subject=${encodeURIComponent("Conversation with Gard Laeskogen")}`}>
            Email to arrange a time
          </a>
          <CopyEmailButton className="copy-button" />
        </div>
      )}
    </div>
  );
}
