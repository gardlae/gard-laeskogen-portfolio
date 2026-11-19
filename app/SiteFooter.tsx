import { site } from "./content";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell site-footer-inner">
        <p className="site-footer-name">{site.name}</p>
        <nav aria-label="Contact links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
          <a href={site.github} rel="noreferrer" target="_blank">GitHub</a>
          <a href={site.bookingUrl} rel="noreferrer" target="_blank">Book a call</a>
        </nav>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
