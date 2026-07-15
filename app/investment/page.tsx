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
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page full-height-page">
        <header className="page-heading">
          <div><p className="kicker">Research / Ownership</p><h1>Investment</h1></div>
          <p>{investmentText}</p>
        </header>

        <section className="investment-dashboard">
          <article className="investment-panel accent-blue">
            <div className="panel-heading"><span>01</span><span>Research</span></div>
            <h2>Interesting statistics</h2>
            <p>This area is ready for Gard&apos;s own statistics, observations, and supporting data.</p>
            <span className="panel-state">Content in development</span>
          </article>
          <article className="investment-panel accent-green">
            <div className="panel-heading"><span>02</span><span>Approach</span></div>
            <h2>Current strategy</h2>
            <p>This area is ready for Gard&apos;s own current strategy and investment framework.</p>
            <span className="panel-state">Content in development</span>
          </article>
          <article className="investment-panel public-holdings-panel">
            <div className="panel-heading"><span>03</span><span>Public records</span></div>
            <h2>Available holdings</h2>
            <p>External shareholder records and publicly available ownership information.</p>
            <div className="holding-links">
              {investmentLinks.map((link) => <a href={link.href} key={link.href}>{link.label}<span>↗</span></a>)}
            </div>
          </article>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
