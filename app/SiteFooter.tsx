import { site } from "./content";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <strong>Gard Laeskogen</strong>
      <span>{site.location}</span>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href={site.bookingUrl} rel="noreferrer" target="_blank">Calendar</a>
      <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
    </footer>
  );
}
