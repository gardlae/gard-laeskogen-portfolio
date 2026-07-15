import Link from "next/link";
import { site } from "./content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-name">
        <span>Gard</span>
        <span>Laeskogen</span>
      </div>
      <div className="site-footer-links">
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/cv">CV story</Link>
        <Link href="/request">Request documents</Link>
        <a href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
      <a className="site-footer-email" href={`mailto:${site.email}`}>
        {site.email}
      </a>
    </footer>
  );
}
