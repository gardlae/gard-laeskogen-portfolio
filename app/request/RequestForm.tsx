"use client";

import { type FormEvent } from "react";
import { site } from "../content";

export function RequestForm() {
  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const organisation = data.get("organisation") || "Not provided";
    const subject = `Detailed CV and portfolio request - ${organisation}`;
    const body = [
      `Company or organisation: ${organisation}`,
      "",
      "I would like to request Gard Laeskogen's detailed CV and project portfolio.",
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="document-request-form" onSubmit={submitRequest}>
      <label>
        <span>Company or organisation</span>
        <input
          autoComplete="organization"
          name="organisation"
          placeholder="Where are you contacting me from?"
          required
          type="text"
        />
      </label>
      <button type="submit">
        Request documents <span aria-hidden="true">→</span>
      </button>
      <p>Your email app opens with the request prepared. Nothing private is published on this site.</p>
    </form>
  );
}

export function ScheduleForm() {
  function submitSchedule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const rawTime = String(data.get("time") || "");
    const proposedTime = new Date(rawTime);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedTime = Number.isNaN(proposedTime.getTime())
      ? rawTime
      : new Intl.DateTimeFormat("en-GB", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: timezone,
        }).format(proposedTime);
    const organisation = data.get("organisation") || "Not provided";
    const subject = `Conversation request - ${organisation}`;
    const body = [
      `Company or organisation: ${organisation}`,
      `Proposed time: ${formattedTime}`,
      `Time zone: ${timezone}`,
      "",
      "I would like to arrange a short conversation. Please confirm whether this time works for you.",
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="schedule-form" onSubmit={submitSchedule}>
      <label>
        <span>Company or organisation</span>
        <input autoComplete="organization" name="organisation" required type="text" />
      </label>
      <label>
        <span>Proposed date and time</span>
        <input name="time" required type="datetime-local" />
      </label>
      <button type="submit">
        Propose this time <span aria-hidden="true">→</span>
      </button>
      <p>The time is sent by email and added only after both sides confirm.</p>
    </form>
  );
}
