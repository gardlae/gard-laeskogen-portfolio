"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "./content";

const navigation = [
  { href: "/", label: "Overview", index: "01" },
  { href: "/portfolio", label: "Portfolio", index: "02" },
  { href: "/cv", label: "Experience", index: "03" },
  { href: "/sports", label: "Sports", index: "04" },
  { href: "/investment", label: "Investment", index: "05" },
  { href: "/philosophy", label: "Principles", index: "06" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  }

  return (
    <>
      <header className="site-rail">
        <Link className="rail-brand" href="/" aria-label="Gard Laeskogen home">
          <span className="brand-mark">GL</span>
          <span>
            <strong>Gard Laeskogen</strong>
            <small>Engineering portfolio</small>
          </span>
        </Link>

        <nav className="rail-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link aria-current={isActive(item.href) ? "page" : undefined} href={item.href} key={item.href}>
              <span>{item.index}</span>
              <strong>{item.label}</strong>
            </Link>
          ))}
        </nav>

        <div className="rail-contact">
          <div className="availability"><span /> Available for conversations</div>
          <p>{site.location}</p>
          <Link className="rail-request" href="/request">Request detailed documents</Link>
          <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <header className="mobile-header">
        <Link className="mobile-brand" href="/">
          <span className="brand-mark">GL</span>
          <strong>Gard Laeskogen</strong>
        </Link>
        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span aria-hidden="true">{open ? "×" : "≡"}</span>
        </button>
        {open && (
          <div className="mobile-nav-panel">
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                  <span>{item.index}</span>{item.label}
                </Link>
              ))}
            </nav>
            <Link href="/request" onClick={() => setOpen(false)}>Request detailed documents</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        )}
      </header>
    </>
  );
}
