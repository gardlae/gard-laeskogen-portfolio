"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// /research is a generated HTML page served by a route handler, so it gets a plain link
// (a full page load) rather than client-side navigation.
const navigation = [
  { href: "/research", label: "Research", match: ["/research"], plain: true },
  { href: "/portfolio", label: "Portfolio", match: ["/portfolio", "/projects"], plain: false },
  { href: "/cv", label: "CV", match: ["/cv"], plain: false },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link className="site-name" href="/">Gard Laeskogen</Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const current = item.match.some((prefix) => pathname.startsWith(prefix)) ? "page" : undefined;
            return item.plain ? (
              <a aria-current={current} href={item.href} key={item.href}>{item.label}</a>
            ) : (
              <Link aria-current={current} href={item.href} key={item.href}>{item.label}</Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
