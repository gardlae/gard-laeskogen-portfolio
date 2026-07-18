import type { Metadata } from "next";
import { site } from "../content";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { BookingPanel, RequestForm } from "./RequestForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Set up a chat or request Gard Laeskogen's detailed CV and portfolio.",
  alternates: { canonical: `${site.canonicalUrl}/request` },
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell page-top contact-page">
        <header className="page-intro contact-intro">
          <p className="eyebrow">Contact</p>
          <h1>Set up a chat</h1>
          <p>Arrange a short chat or request the detailed CV and portfolio.</p>
          <div className="contact-links" aria-label="Contact links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a>
            <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a>
          </div>
        </header>

        <section className="contact-layout">
          <article id="schedule">
            <div><span>01</span><p className="eyebrow">Chat</p></div>
            <h2>Find a time to talk</h2>
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
