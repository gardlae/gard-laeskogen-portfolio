import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { why } from "../content";

export const metadata: Metadata = {
  title: "The why | Gard Laeskogen",
  description: "The foundation, life rules, and quotes behind the work.",
};

export default function PhilosophyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="subpage-hero philosophy-hero">
        <div>
          <p className="section-number light">The why</p>
          <h1>The why</h1>
          <p>{why.intro}</p>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="two-column-ledger">
          <div>
            <p className="section-number">Life rules</p>
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

      <section className="traits-section">
        <div>
          <p className="section-number">What I would like to be described as</p>
          <div className="trait-cloud">
            {why.describedAs.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="quotes-section">
        <p className="section-number">Favorite quotes</p>
        <div className="quote-grid">
          {why.quotes.map((quote) => (
            <figure className="quote-card" key={quote}>
              <blockquote>{quote}</blockquote>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
