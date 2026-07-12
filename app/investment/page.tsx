import type { Metadata } from "next";
import Link from "next/link";

const sourceLinks = [
  {
    label: "Finansavisen shareholder register",
    href: "https://www.finansavisen.no/aksjonaerregister/index.php?navn=Gard+Laeskogen",
  },
  {
    label: "Proff shareholder profile",
    href: "https://www.proff.no/aksjon%C3%A6rer/person/gard-laeskogen/6213373",
  },
];

export const metadata: Metadata = {
  title: "Investment | Tord Laeskogen",
  description:
    "A reserved investment page for ownership, capital allocation, and lessons learned.",
};

export default function InvestmentPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1e2320]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="text-sm font-semibold uppercase tracking-[0.18em]" href="/">
          Tord Laeskogen
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-[#52615a]">
          <Link className="transition hover:text-[#1e2320]" href="/#portfolio">
            Portfolio
          </Link>
          <Link className="transition hover:text-[#1e2320]" href="/sports">
            Sports
          </Link>
          <Link className="transition hover:text-[#1e2320]" href="/philosophy">
            Philosophy
          </Link>
        </div>
      </nav>

      <section className="investment-hero px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 w-fit border-b-2 border-[#c84b31] pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4c6ac]">
            Investment
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">
            Ownership, judgment, and long-term thinking.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8ded8]">
            This page is reserved for investment writing, ownership history,
            public registry links, and lessons learned from allocating capital.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="investment-note">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6f5e]">
            Draft space
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight">
            Ready to fill out.
          </h2>
          <p className="mt-4 leading-7 text-[#52615a]">
            Add your investment philosophy, current focus areas, case studies,
            mistakes, and how your view on risk has developed.
          </p>
        </aside>

        <div className="investment-grid">
          <article className="investment-card">
            <span>01</span>
            <h3>Investment philosophy</h3>
            <p>
              Principles for ownership, risk, time horizon, conviction, and when
              to act or stay patient.
            </p>
          </article>
          <article className="investment-card">
            <span>02</span>
            <h3>Public sources</h3>
            <p>
              Links to public shareholder registries and ownership references.
            </p>
            <div className="mt-5 grid gap-3">
              {sourceLinks.map((link) => (
                <a className="text-link w-fit" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </article>
          <article className="investment-card">
            <span>03</span>
            <h3>Lessons learned</h3>
            <p>
              Space for notes on good decisions, bad decisions, incentives,
              patience, and compounding.
            </p>
          </article>
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
