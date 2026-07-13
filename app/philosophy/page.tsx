/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { site, why } from "../content";

export const metadata: Metadata = {
  title: "The why | Gard Laeskogen",
  description: "The foundation, life rules, and quotes behind the work.",
};

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#151815]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-sm font-semibold uppercase tracking-[0.18em]" href="/">
          {site.name}
        </a>
        <div className="flex items-center gap-4 text-sm font-medium text-[#52615a]">
          <a href="/#portfolio">Portfolio</a>
          <a href="/sports">Sports</a>
          <a href="/investment">Investment</a>
        </div>
      </nav>

      <section className="subpage-hero philosophy-hero px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker light">The why</p>
          <h1>The why</h1>
          <p>{why.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="two-column-ledger">
          <div>
            <p className="section-kicker">Life rules</p>
            <h2>Life rules</h2>
          </div>
          <div className="stack-list">
            {why.lifeRules.map((rule) => (
              <article key={rule}>
                <p>{rule}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">What I would like to be described as</p>
          <div className="trait-cloud">
            {why.describedAs.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="section-kicker">Favorite quotes</p>
        <div className="quote-grid">
          {why.quotes.map((quote) => (
            <figure className="quote-card" key={quote}>
              <blockquote>{quote}</blockquote>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
