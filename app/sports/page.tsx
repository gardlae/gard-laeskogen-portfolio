import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { sportsAchievements, sportsExtraLinks, sportsIntro } from "../content";

type SportSource = { title: string; label: string; href: string; image?: string };

const sourceCards: SportSource[] = [
  {
    title: "Cross-country skiing at Ringkollen",
    label: "Ringerikes Blad",
    href: "https://www.ringblad.no/sport/langrenn/ringkollen/jorgen-og-gard-knivet-hardt-pa-ringkollen/s/5-45-534443",
    image: "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_2000_2000_s_f/1518370509000/ring/2018/2/11/18/1518370506698.jpg?chk=21E80E",
  },
  {
    title: "Hytteplanmila 10 km running",
    label: "Ringerikes Blad",
    href: "https://www.ringblad.no/hytteplanmila/sport/mosjonslop/ungguttene-tar-over-lokalt/s/5-45-302578",
    image: "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_2000_2000_s_f/1477205062000/ring/2016/10/23/8/1477204067978.jpg?chk=44FF61",
  },
  { title: "Student-NM Triathlon winner", label: "Studentidrett", href: "https://studentidrett.no/nyheter/student-nm-triatlon" },
  { title: "Norwegian youth 10 km statistics", label: "Kondis", href: "https://www.kondis.no/statistikk/ungdomsstatistikk-2016-10-km-gutter/junior/1530144" },
  {
    title: "Orienteering event at Ringkollen",
    label: "Ringerikes Blad",
    href: "https://www.ringblad.no/sport/500-deltakere-pa-o-lop/s/1-97-7546535",
    image: "https://g.acdn.no/obscura/API/dynamic/r1/escenic/tr_2000_2000_s_f/1408947459000/archive/05633/4207592449_5633062a.jpg?chk=188571",
  },
];

const sports = [...new Set(sportsAchievements.map((item) => item.sport))];

export const metadata: Metadata = {
  title: "Sports Achievements | Gard Laeskogen",
  description: "Selected achievements in triathlon, running, skiing, and trail running.",
};

export default function SportsPage() {
  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page">
        <header className="page-heading">
          <div><p className="kicker">Background / Performance</p><h1>Sports</h1></div>
          <p>{sportsIntro}</p>
        </header>

        <section className="sports-dashboard">
          <figure className="sports-profile-image">
            <Image alt={sourceCards[0].title} fill priority sizes="(max-width: 900px) 100vw, 34vw" src={sourceCards[0].image!} unoptimized />
            <figcaption>Cross-country skiing / Ringkollen</figcaption>
          </figure>

          <div className="achievement-panel">
            <div className="panel-heading"><span>Selected achievements</span><span>{sportsAchievements.length} results</span></div>
            <div className="achievement-grid">
              {sportsAchievements.map((achievement) => (
                <a href={achievement.href} key={`${achievement.year}-${achievement.event}`}>
                  <div><span>{achievement.year}</span><span>{achievement.sport}</span></div>
                  <strong>{achievement.result}</strong>
                  <p>{achievement.event}</p>
                  <small>{achievement.category} ↗</small>
                </a>
              ))}
            </div>
          </div>

          <aside className="sports-discipline-panel">
            <div className="panel-heading"><span>Disciplines</span></div>
            {sports.map((sport, index) => (
              <div key={sport}><span>{String(index + 1).padStart(2, "0")}</span><strong>{sport}</strong></div>
            ))}
          </aside>
        </section>

        <section className="source-strip">
          <div className="section-title-row"><div><p className="kicker">References</p><h2>Sources &amp; coverage</h2></div></div>
          <div className="source-grid">
            {sourceCards.map((card) => (
              <a href={card.href} key={card.href}>
                {card.image ? <Image alt="" height={90} src={card.image} unoptimized width={120} /> : <span className="source-index">↗</span>}
                <span><small>{card.label}</small><strong>{card.title}</strong></span>
              </a>
            ))}
          </div>
          <details className="additional-links">
            <summary>Additional source links ({sportsExtraLinks.length})</summary>
            <div>{sportsExtraLinks.map((href) => <a href={href} key={href}>{href} ↗</a>)}</div>
          </details>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
