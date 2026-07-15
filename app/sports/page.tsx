import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { sportsAchievements, sportsExtraLinks, sportsIntro } from "../content";

type SportSource = {
  title: string;
  label: string;
  href: string;
  image?: string;
};

const sourceCards: SportSource[] = [
  {
    title: "Cross-country skiing at Ringkollen",
    label: "Ringerikes Blad",
    href: "https://www.ringblad.no/sport/langrenn/ringkollen/jorgen-og-gard-knivet-hardt-pa-ringkollen/s/5-45-534443",
    image:
      "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_2000_2000_s_f/1518370509000/ring/2018/2/11/18/1518370506698.jpg?chk=21E80E",
  },
  {
    title: "Hytteplanmila 10 km running",
    label: "Ringerikes Blad",
    href: "https://www.ringblad.no/hytteplanmila/sport/mosjonslop/ungguttene-tar-over-lokalt/s/5-45-302578",
    image:
      "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_2000_2000_s_f/1477205062000/ring/2016/10/23/8/1477204067978.jpg?chk=44FF61",
  },
  {
    title: "Student-NM Triathlon winner",
    label: "Studentidrett",
    href: "https://studentidrett.no/nyheter/student-nm-triatlon",
  },
  {
    title: "Norwegian youth 10 km statistics",
    label: "Kondis",
    href: "https://www.kondis.no/statistikk/ungdomsstatistikk-2016-10-km-gutter/junior/1530144",
  },
  {
    title: "Orienteering event at Ringkollen",
    label: "Ringerikes Blad",
    href: "https://www.ringblad.no/sport/500-deltakere-pa-o-lop/s/1-97-7546535",
    image:
      "https://g.acdn.no/obscura/API/dynamic/r1/escenic/tr_2000_2000_s_f/1408947459000/archive/05633/4207592449_5633062a.jpg?chk=188571",
  },
  {
    title: "Skating on Steinsfjorden",
    label: "RingeriksAvisa",
    href: "https://ringeriksavisa.no/arkiv/item/1688-flott-skoyteis",
    image:
      "https://ringeriksavisa.no/media/k2/items/cache/1ddeaeb1eca66be48e4bee424a1e7a40_M.jpg",
  },
];

const achievementsBySport = sportsAchievements.reduce<
  Record<string, typeof sportsAchievements>
>((groups, achievement) => {
  groups[achievement.sport] = [...(groups[achievement.sport] ?? []), achievement];
  return groups;
}, {});

export const metadata: Metadata = {
  title: "Sports Achievements | Gard Laeskogen",
  description:
    "Selected sports achievements in triathlon, running, skiing, orienteering, and skating.",
};

export default function SportsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="sports-hero">
        <div className="sports-hero-inner">
          <div>
            <p className="section-number light">Sports background</p>
            <h1>Sports</h1>
            <p>{sportsIntro}</p>
          </div>

          <div className="sports-hero-stack" aria-label="Sports photo collage">
            {sourceCards
              .filter((card) => card.image)
              .slice(0, 4)
              .map((card) => (
                <a className="sports-hero-photo" href={card.href} key={card.href}>
                  <Image
                    alt={card.title}
                    height={700}
                    src={card.image}
                    unoptimized
                    width={900}
                  />
                  <span>{card.title}</span>
                </a>
              ))}
          </div>
        </div>
      </section>

      <section className="sports-results-section">
        <div className="section-heading-row">
          <div>
            <p className="section-number">Highlights</p>
            <h2>Selected competitions.</h2>
          </div>
        </div>

        <div className="sports-category-stack">
          {Object.entries(achievementsBySport).map(([sport, achievements]) => (
            <section className="sports-category" key={sport}>
              <div className="sports-category-label">
                <span>{sport}</span>
                <small>{achievements.length} result{achievements.length === 1 ? "" : "s"}</small>
              </div>

              <div className="sports-result-list">
                {achievements.map((achievement) => (
                  <article className="sports-result" key={`${achievement.year}-${achievement.event}`}>
                    <div className="sports-result-year">{achievement.year}</div>
                    <div className="sports-result-main">
                      <p>{achievement.result}</p>
                      <h3>{achievement.event}</h3>
                    </div>
                    <div className="sports-result-meta">
                      <span>{achievement.category}</span>
                      <a href={achievement.href}>Source</a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="sports-sources-section">
        <div>
          <div className="section-heading-row">
            <div>
              <p className="section-number">Sources and photos</p>
              <h2>Articles, results, and visual references.</h2>
            </div>
          </div>

          <div className="sports-source-grid">
            {sourceCards.map((card) => (
              <a className="sports-source-card" href={card.href} key={card.href}>
                {card.image ? (
                  <Image
                    alt={card.title}
                    height={700}
                    src={card.image}
                    unoptimized
                    width={900}
                  />
                ) : (
                  <div className="sports-source-fallback">
                    <span>{card.label}</span>
                  </div>
                )}
                <div className="sports-source-copy">
                  <p>{card.label}</p>
                  <h3>{card.title}</h3>
                  <span>Open source <span aria-hidden="true">↗</span></span>
                </div>
              </a>
            ))}
          </div>

          <div className="extra-link-list">
            {sportsExtraLinks.map((href) => (
              <a href={href} key={href}>
                {href}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
