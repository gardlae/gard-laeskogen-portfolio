import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Achievement = {
  title: string;
  period: string;
  detail: string;
};

type SportSource = {
  title: string;
  label: string;
  href: string;
  image?: string;
};

const achievements: Achievement[] = [
  {
    title: "Winner, Student-NM Triathlon",
    period: "2024",
    detail:
      "Won the men's Other Bikes class at Student-NM Triathlon, combining swimming, cycling, and running in Trondheim.",
  },
  {
    title: "Fastest Norwegian 10 km time",
    period: "2016",
    detail:
      "Ranked fastest in Norway for 10 km in the boys 12-13 age group, with a strong local Hytteplanmila performance.",
  },
  {
    title: "2nd place, uphill running",
    period: "2017",
    detail:
      "Placed second in the 2003 men's class in Odd-Bjorn Hjelmeset's terrain and uphill running event.",
  },
  {
    title: "Cross-country skiing and endurance base",
    period: "Youth years",
    detail:
      "Competed in cross-country skiing, running, orienteering, skating, and other endurance-focused events.",
  },
];

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

export const metadata: Metadata = {
  title: "Sports Achievements | Tord Laeskogen",
  description:
    "Selected sports achievements in triathlon, running, skiing, orienteering, and skating.",
};

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1e2320]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="text-sm font-semibold uppercase tracking-[0.18em]" href="/">
          Tord Laeskogen
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-[#52615a]">
          <Link className="transition hover:text-[#1e2320]" href="/#story">
            Story
          </Link>
          <Link className="transition hover:text-[#1e2320]" href="/#resume">
            CV
          </Link>
          <Link className="transition hover:text-[#1e2320]" href="/#portfolio">
            Portfolio
          </Link>
          <Link className="transition hover:text-[#1e2320]" href="/sports">
            Sports
          </Link>
        </div>
      </nav>

      <section className="sports-hero px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-6 w-fit border-b-2 border-[#c84b31] pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4c6ac]">
              Sports background
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">
              Endurance, competition, and discipline.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8ded8]">
              Selected results from triathlon, running, cross-country skiing,
              orienteering, and skating. Sport has been an important part of my
              discipline, competitiveness, and ability to keep working when
              things get difficult.
            </p>
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

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84b31]">
            Highlights
          </p>
          <h2 className="text-4xl font-semibold leading-tight">
            Competitive results that shaped my work ethic.
          </h2>
        </div>

        <div className="sports-achievement-grid">
          {achievements.map((achievement) => (
            <article className="sports-achievement" key={achievement.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#52615a]">
                {achievement.period}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                {achievement.title}
              </h3>
              <p className="mt-4 leading-7 text-[#52615a]">
                {achievement.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e7efe8] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f6f5e]">
              Sources and photos
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              Articles, results, and visual references.
            </h2>
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
                  <span>Open source</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Link className="text-link" href="/">
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}
