import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { RequestForm, ScheduleForm } from "./RequestForm";

export const metadata: Metadata = {
  title: "Contact | Gard Laeskogen",
  description: "Request Gard Laeskogen's detailed documents or propose a conversation.",
};

export default function RequestPage() {
  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page full-height-page">
        <header className="page-heading contact-heading">
          <div><p className="kicker">Contact</p><h1>Continue the conversation</h1></div>
          <p>Request the detailed material or propose a short conversation. Both options take less than a minute.</p>
        </header>

        <section className="contact-workspace">
          <article className="contact-card" id="documents">
            <div className="contact-card-number">01 / Private documents</div>
            <div>
              <h2>Detailed CV and portfolio</h2>
              <p>The files are shared directly with selected companies and recruiters.</p>
            </div>
            <RequestForm />
          </article>

          <article className="contact-card contact-card-dark" id="schedule">
            <div className="contact-card-number">02 / Conversation</div>
            <div>
              <h2>Schedule a short chat</h2>
              <p>Suggest a time. Gard confirms the appointment directly by email.</p>
            </div>
            <ScheduleForm />
          </article>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
