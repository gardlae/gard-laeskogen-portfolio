import type { Metadata } from "next";
import Image from "next/image";
import {
  personalBackground,
  site,
  sportsAchievements,
  sportsExtraLinks,
  sportsIntro,
  why,
} from "../content";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description: "Personal background, sports discipline, and principles.",
  alternates: { canonical: `${site.canonicalUrl}/about` },
};

const sports = [...new Set(sportsAchievements.map((achievement) => achievement.sport))];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell page-top about-page">
        <header className="page-intro about-intro">
          <p className="eyebrow">About</p>
          <h1>Background, discipline, and direction</h1>
          <p>{personalBackground.intro}</p>
        </header>

        <section className="background-section" id="background">
          <div className="background-copy">
            <p className="eyebrow">01 / Personal background</p>
            <h2>Family business and operational environments</h2>
            <p>{personalBackground.familyBusiness}</p>
          </div>
          <figure className="background-main-image">
            <Image alt="Gard Laeskogen with family outside Sundvolden Hotel" fill priority sizes="(max-width: 768px) 100vw, 64vw" src="/media/family-business.jpg" unoptimized />
          </figure>
          <figure className="background-secondary-image">
            <Image alt="Field experience in the Norwegian Armed Forces" fill sizes="(max-width: 768px) 46vw, 24vw" src="/media/military-field.jpg" unoptimized />
          </figure>
        </section>

        <section className="sports-section" id="sports">
          <header className="section-heading">
            <div><p className="eyebrow">02 / Sports discipline</p><h2>Selected verified results</h2></div>
            <p>{sportsIntro}</p>
          </header>
          <div className="sports-groups">
            {sports.map((sport) => (
              <section key={sport}>
                <h3>{sport}</h3>
                {sportsAchievements.filter((achievement) => achievement.sport === sport).map((achievement) => (
                  <a href={achievement.href} key={`${achievement.year}-${achievement.event}`} rel="noreferrer" target="_blank">
                    <time>{achievement.year}</time>
                    <div><strong>{achievement.result}</strong><span>{achievement.event}</span><small>{achievement.category}</small></div>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </section>
            ))}
          </div>
          <details className="source-links">
            <summary>Additional source links</summary>
            <div>{sportsExtraLinks.map((href) => <a href={href} key={href} rel="noreferrer" target="_blank">Source ↗</a>)}</div>
          </details>
        </section>

        <section className="principles-section" id="principles">
          <header className="section-heading">
            <div><p className="eyebrow">03 / Principles</p><h2>Direction and character</h2></div>
            <p>{why.intro}</p>
          </header>
          <div className="principles-layout">
            <div className="life-rules">
              {why.lifeRules.map((rule, index) => (
                <article key={rule}><span>{String(index + 1).padStart(2, "0")}</span><p>{rule}</p></article>
              ))}
            </div>
            <aside>
              <h3>Desired character</h3>
              <ul>{why.describedAs.map((trait) => <li key={trait}>{trait}</li>)}</ul>
              <details>
                <summary>Favorite quotes</summary>
                {why.quotes.map((quote) => <blockquote key={quote}>{quote}</blockquote>)}
              </details>
            </aside>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
