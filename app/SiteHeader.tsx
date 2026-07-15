"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "./content";

const navigation = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/cv", label: "CV story" },
  { href: "/sports", label: "Sports" },
  { href: "/investment", label: "Investment" },
  { href: "/philosophy", label: "The why" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${overlay ? " site-header-overlay" : ""}`}>
      <Link className="site-wordmark" href="/" aria-label="Gard Laeskogen home">
        <span>Gard</span>
        <span>Laeskogen</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-request" href="/request">
        Request documents
      </Link>

      <button
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="mobile-menu-button"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span aria-hidden="true" className="menu-symbol">{open ? "×" : "≡"}</span>
      </button>

      {open ? (
        <div className="mobile-nav-panel">
          <nav aria-label="Mobile navigation">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-nav-meta">
            <Link href="/request" onClick={() => setOpen(false)}>
              Request detailed CV &amp; portfolio
            </Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
