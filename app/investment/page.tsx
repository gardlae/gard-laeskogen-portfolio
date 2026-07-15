import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { investmentLinks, investmentText } from "../content";

export const metadata: Metadata = {
  title: "Investment | Gard Laeskogen",
  description: "Investment notes, public holdings links, and strategy thinking.",
};

export default function InvestmentPage() {
  return (
    <main>
      <SiteHeader />

      <section className="subpage-hero investment-hero">
        <div>
          <p className="section-number light">Investment</p>
          <h1>Investment</h1>
          <p>{investmentText}</p>
        </div>
      </section>

      <section className="investment-ledger">
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
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
