import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { why } from "../content";

export const metadata: Metadata = {
  title: "Principles | Gard Laeskogen",
  description: "The foundation, life rules, and quotes behind the work.",
};

export default function PhilosophyPage() {
  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page">
        <header className="page-heading philosophy-heading">
          <div><p className="kicker">Direction / Character</p><h1>Principles</h1></div>
          <p>{why.intro}</p>
        </header>

        <section className="principles-dashboard">
          <div className="principles-panel">
            <div className="panel-heading"><span>Life rules</span><span>{why.lifeRules.length}</span></div>
            {why.lifeRules.map((rule, index) => (
              <details open={index === 0} key={rule}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span> Principle</summary>
                <p>{rule}</p>
              </details>
            ))}
          </div>

          <div className="character-panel">
            <div className="panel-heading"><span>Desired character</span></div>
            {why.describedAs.map((trait, index) => (
              <div key={trait}><span>{String(index + 1).padStart(2, "0")}</span><p>{trait}</p></div>
            ))}
          </div>

          <div className="quotes-panel">
            <div className="panel-heading"><span>Reference quotes</span><span>{why.quotes.length}</span></div>
            <div>
              {why.quotes.map((quote, index) => (
                <blockquote key={quote}><span>Q{String(index + 1).padStart(2, "0")}</span><p>{quote}</p></blockquote>
              ))}
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
