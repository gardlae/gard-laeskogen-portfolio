import type { Metadata } from "next";
import Link from "next/link";

const principles = [
  {
    title: "Become the best version of myself",
    body:
      "I believe identity is built through action. The person I want to become has to be practiced before it feels natural.",
  },
  {
    title: "Fight for what is good",
    body:
      "Not doing wrong is not enough. I want to be willing to stand in uncomfortable situations, take responsibility, and act when something matters.",
  },
  {
    title: "Own my response",
    body:
      "I cannot control every event, but I can control how I act, how I present myself, and how I respond to pressure.",
  },
];

const traits = [
  "Disciplined",
  "Smart",
  "Kind",
  "Honest",
  "Reliable",
  "A strong leader",
  "Family-oriented",
  "Hard to compete against",
  "Someone you would trust in difficult situations",
];

const quotes = [
  { quote: "Who dares, wins.", source: "SAS" },
  { quote: "There is no alpha in consensus.", source: "Peter Thiel" },
  {
    quote: "I dream things that never were and say why not.",
    source: "John F. Kennedy",
  },
  {
    quote: "There is a price we will not pay.",
    source: "Ronald Reagan",
  },
];

export const metadata: Metadata = {
  title: "Philosophy | Tord Laeskogen",
  description:
    "Personal beliefs, operating principles, and selected quotes.",
};

export default function PhilosophyPage() {
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
          <Link className="transition hover:text-[#1e2320]" href="/investment">
            Investment
          </Link>
        </div>
      </nav>

      <section className="philosophy-hero px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="mb-6 w-fit border-b-2 border-[#d4c6ac] pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4c6ac]">
              Philosophy
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Beliefs, principles, and the standard I try to live by.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8ded8]">
              Influenced by Stoicism and compatibility between circumstance and
              choice, my philosophy is built around discipline, responsibility,
              courage, family, and useful action.
            </p>
          </div>
          <div className="philosophy-statement">
            <p>
              I have three freedoms: to act as I choose, to shape how I am
              perceived, and to decide how I respond to what happens to me.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84b31]">
            Operating principles
          </p>
          <h2 className="text-4xl font-semibold leading-tight">
            Rules I want to be measured against.
          </h2>
        </div>

        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e7efe8] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f6f5e]">
              Character
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              How I want people to describe me.
            </h2>
          </div>
          <div className="trait-cloud">
            {traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84b31]">
            Quotes
          </p>
          <h2 className="text-4xl font-semibold leading-tight">
            Short lines I return to.
          </h2>
        </div>
        <div className="quote-grid">
          {quotes.map((item) => (
            <figure className="quote-card" key={item.quote}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>{item.source}</figcaption>
            </figure>
          ))}
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
