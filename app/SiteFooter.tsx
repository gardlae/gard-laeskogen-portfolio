import Link from "next/link";
import { site } from "./content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Gard Laeskogen</strong>
        <span>{site.location}</span>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/portfolio">Work</Link>
        <Link href="/cv">Experience</Link>
        <Link href="/about">About</Link>
        <Link href="/request">Contact</Link>
      </nav>
      <div>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a>
        <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a>
      </div>
    </footer>
  );
}
