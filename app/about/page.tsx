import Image from "next/image";
import { sportsAchievements, sportsExtraLinks, sportsIntro, why } from "../content";
import { buildPageMetadata } from "../metadata";

export const metadata = buildPageMetadata({
  title: "Story",
  description: "Personal background, sports discipline, and principles.",
  path: "/about",
});

const sports = [...new Set(sportsAchievements.map((achievement) => achievement.sport))];

export default function AboutPage() {
  return (
    <main>
      <div className="page-shell page-top about-page">
        <h1 className="sr-only">Story</h1>
        <section className="sports-section" id="sports">
          <header className="section-heading">
            <div><p className="eyebrow">Sports</p><h2>Sports</h2></div>
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
            <div><p className="eyebrow">Principles</p><h2>Principles</h2></div>
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

        <section className="background-section background-section-images-only" id="background" aria-label="Personal background photographs">
          <figure className="background-main-image">
            <Image alt="Gard Laeskogen with family outside Sundvolden Hotel" fill priority sizes="(max-width: 768px) 100vw, 64vw" src="/media/family-business.jpg" unoptimized />
          </figure>
          <figure className="background-secondary-image">
            <Image alt="Field experience in the Norwegian Armed Forces" fill sizes="(max-width: 768px) 46vw, 24vw" src="/media/military-field.jpg" unoptimized />
          </figure>
        </section>
      </div>
    </main>
  );
}
