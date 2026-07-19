"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/cv", label: "CV" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/request", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/portfolio") {
      return pathname.startsWith("/portfolio") || pathname.startsWith("/projects");
    }
    return pathname.startsWith(href);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-brand" href="/">
          <strong>Gard Laeskogen</strong>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className={open ? "mobile-navigation is-open" : "mobile-navigation"} id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
