import type { Metadata } from "next";
import { site } from "../content";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { BookingPanel, RequestForm } from "./RequestForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a conversation or request Gard Laeskogen's detailed documents.",
  alternates: { canonical: `${site.canonicalUrl}/request` },
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell page-top contact-page">
        <header className="page-intro contact-intro">
          <p className="eyebrow">Contact</p>
          <h1>Book a conversation</h1>
          <p>Request the detailed material or arrange a short conversation.</p>
          <div className="contact-links" aria-label="Contact links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a>
            <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a>
          </div>
        </header>

        <section className="contact-layout">
          <article id="schedule">
            <div><span>01</span><p className="eyebrow">Conversation</p></div>
            <h2>Schedule a short chat</h2>
            <p>Email remains available when the booking service is blocked or unavailable.</p>
            <BookingPanel />
          </article>

          <article className="document-panel" id="documents">
            <div><span>02</span><p className="eyebrow">Private documents</p></div>
            <h2>Detailed CV and portfolio</h2>
            <p>The files are shared directly with selected companies and recruiters.</p>
            <RequestForm />
          </article>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
