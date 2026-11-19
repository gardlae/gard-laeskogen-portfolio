import { site } from "./content";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-contact">
        <p className="eyebrow">Get in touch</p>
        <a className="footer-email" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-meta">
        <strong>Gard Laeskogen</strong>
        <span>{site.location}</span>
        <nav aria-label="Contact links">
          <a href={site.bookingUrl} rel="noreferrer" target="_blank">Calendar ↗</a>
          <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a>
          <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a>
        </nav>
      </div>
    </footer>
  );
}
