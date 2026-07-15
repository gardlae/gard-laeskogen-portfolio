import Link from "next/link";
import { site } from "./content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>Gard Laeskogen / {new Date().getFullYear()}</span>
      <div>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <Link href="/request">Private documents</Link>
        <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a>
      </div>
    </footer>
  );
}
