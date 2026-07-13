/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { investmentLinks, investmentText, site } from "../content";

export const metadata: Metadata = {
  title: "Investment | Gard Laeskogen",
  description: "Investment notes, public holdings links, and strategy thinking.",
};

export default function InvestmentPage() {
  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#151815]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-sm font-semibold uppercase tracking-[0.18em]" href="/">
          {site.name}
        </a>
        <div className="flex items-center gap-4 text-sm font-medium text-[#52615a]">
          <a href="/#portfolio">Portfolio</a>
          <a href="/sports">Sports</a>
          <a href="/philosophy">The why</a>
        </div>
      </nav>

      <section className="subpage-hero investment-hero px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker light">Investment</p>
          <h1>Investment</h1>
          <p>{investmentText}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="plain-panel">
          <span>01</span>
          <h2>Interesting statistics</h2>
          <p>
            This section is intentionally ready for you to fill in with your
            own statistics.
          </p>
        </article>
        <article className="plain-panel">
          <span>02</span>
          <h2>Current strategy</h2>
          <p>
            This section is intentionally ready for you to fill in with your
            current strategy.
          </p>
        </article>
        <article className="plain-panel wide">
          <span>03</span>
          <h2>Public available holdings</h2>
          <div className="link-list">
            {investmentLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
