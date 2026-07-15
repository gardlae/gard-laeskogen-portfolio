"use client";

import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { site } from "../content";

export function RequestForm() {
  const [cv, setCv] = useState(true);
  const [portfolio, setPortfolio] = useState(true);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const requested = [cv ? "Detailed CV" : null, portfolio ? "Detailed project portfolio" : null]
      .filter(Boolean)
      .join(", ");
    const subject = `Document request from ${data.get("name") || "website visitor"}`;
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Work email: ${data.get("email") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Role / context: ${data.get("context") || ""}`,
      `Requested: ${requested}`,
      "",
      "Message:",
      `${data.get("message") || ""}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="document-request-form" onSubmit={submitRequest}>
      <fieldset>
        <legend>Documents requested</legend>
        <label className="check-row">
          <input checked={cv} onChange={(event) => setCv(event.target.checked)} type="checkbox" />
          <span>Detailed CV</span>
        </label>
        <label className="check-row">
          <input checked={portfolio} onChange={(event) => setPortfolio(event.target.checked)} type="checkbox" />
          <span>Detailed project portfolio</span>
        </label>
      </fieldset>

      <div className="request-form-grid">
        <label>
          <span>Name</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label>
          <span>Work email</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          <span>Company</span>
          <input autoComplete="organization" name="company" required type="text" />
        </label>
        <label>
          <span>Role or hiring context</span>
          <input name="context" type="text" />
        </label>
      </div>

      <label className="request-message-field">
        <span>Message</span>
        <textarea name="message" rows={5} />
      </label>

      <button disabled={!cv && !portfolio} type="submit">
        Prepare email request <Send aria-hidden="true" size={17} />
      </button>
    </form>
  );
}
