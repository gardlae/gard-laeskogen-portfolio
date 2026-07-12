import Image from "next/image";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { StoryVideo } from "./StoryVideo";

const resumeItems = [
  {
    period: "Early work",
    role: "Family business",
    place: "Sundvolden Hotel",
    image: "/media/family-business.jpg",
    detail:
      "Grew up close to the family business and learned how operations, service, responsibility, and long-term ownership work in practice.",
  },
  {
    period: "Service",
    role: "Norwegian Armed Forces",
    place: "Field experience",
    image: "/media/military-field.jpg",
    detail:
      "Developed discipline, endurance, teamwork, and decision-making under pressure through demanding field environments.",
  },
  {
    period: "Student work",
    role: "Contactor NTNU",
    place: "Technical student organization",
    image: "/media/profile-contactor.jpg",
    detail:
      "Worked in a technical student environment that strengthened collaboration, practical engineering, and project ownership.",
  },
  {
    period: "Engineering",
    role: "Electronics and UAV projects",
    place: "Personal and academic builds",
    image: "/media/fpv-drone-build.jpg",
    detail:
      "Built hands-on systems across drones, analog electronics, RF, control systems, firmware configuration, and rapid prototyping.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1e2320]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-sm font-semibold uppercase tracking-[0.18em]" href="#">
          Tord Laeskogen
        </a>
        <div className="flex items-center gap-4 text-sm font-medium text-[#52615a]">
          <a className="transition hover:text-[#1e2320]" href="#story">
            Story
          </a>
          <a className="transition hover:text-[#1e2320]" href="#resume">
            CV
          </a>
          <a className="transition hover:text-[#1e2320]" href="#portfolio">
            Portfolio
          </a>
          <a className="transition hover:text-[#1e2320]" href="/sports">
            Sports
          </a>
          <a className="transition hover:text-[#1e2320]" href="/investment">
            Investment
          </a>
          <a className="transition hover:text-[#1e2320]" href="/philosophy">
            Philosophy
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1fr_0.9fr] lg:items-center lg:pb-20">
        <div className="max-w-3xl">
          <p className="mb-6 w-fit border-b-2 border-[#c84b31] pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#52615a]">
            Personal story and technical work
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Builder across software, electronics, drones, and operations.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52615a]">
            A portfolio and CV shaped by practical projects: UAV systems,
            analog control, real-time software, entrepreneurship, service, and
            family business experience.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center border border-[#1e2320] bg-[#1e2320] px-5 text-sm font-semibold text-white transition hover:bg-[#314139]"
              href="#portfolio"
            >
              View projects
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-[#9da89d] px-5 text-sm font-semibold text-[#1e2320] transition hover:border-[#1e2320]"
              href="#resume"
            >
              View CV
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-[#9da89d] px-5 text-sm font-semibold text-[#1e2320] transition hover:border-[#1e2320]"
              href="/sports"
            >
              Sports achievements
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-[#9da89d] px-5 text-sm font-semibold text-[#1e2320] transition hover:border-[#1e2320]"
              href="/philosophy"
            >
              Philosophy
            </a>
          </div>
        </div>

        <div className="hero-photo-frame">
          <Image
            alt="Portrait of Tord Laeskogen"
            className="h-full w-full object-cover"
            height={1600}
            unoptimized
            priority
            src="/media/profile-contactor.jpg"
            width={1200}
          />
          <div className="hero-photo-caption">
            <p>Engineering student, builder, and operator.</p>
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#1e2320] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4c6ac]">
              Story video
            </p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Your story, told in your own voice.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#d8ded8]">
              This section is reserved for a personal story video when the film
              is ready. The rest of the site already carries the CV and
              portfolio structure.
            </p>
          </div>

          <StoryVideo />
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84b31]">
            CV
          </p>
          <h2 className="text-4xl font-semibold leading-tight">
            Experience built through responsibility and practical work.
          </h2>
        </div>
        <div className="cv-timeline">
          {resumeItems.map((item) => (
            <article className="cv-item" key={item.role}>
              <div className="cv-image">
                <Image
                  alt={`${item.role} image`}
                  className="h-full w-full object-cover"
                  height={900}
                  src={item.image}
                  unoptimized
                  width={1200}
                />
              </div>
              <div className="cv-copy">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#52615a]">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm font-semibold text-[#c84b31]">
                  {item.place}
                </p>
                <p className="mt-4 leading-7 text-[#52615a]">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-[#e7efe8] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f6f5e]">
              Portfolio
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              Swipe through selected projects.
            </h2>
            <p className="mt-4 leading-7 text-[#52615a]">
              Projects are grouped by outcome, with duration, skills, links,
              and supporting media from the portfolio folder.
            </p>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84b31]">
            More
          </p>
          <h2 className="text-4xl font-semibold leading-tight">
            The parts behind the work.
          </h2>
        </div>
        <div className="personal-section-grid">
          <a className="personal-section-card" href="/sports">
            <span>Competition</span>
            <h3>Sports achievements</h3>
            <p>
              Endurance results and the competitive background behind my work ethic.
            </p>
          </a>
          <a className="personal-section-card" href="/investment">
            <span>Capital</span>
            <h3>Investment</h3>
            <p>
              A page reserved for ownership, investment thinking, and lessons learned.
            </p>
          </a>
          <a className="personal-section-card" href="/philosophy">
            <span>Principles</span>
            <h3>Philosophy and beliefs</h3>
            <p>
              Personal rules, beliefs, and quotes that explain how I try to operate.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-7 border-t border-[#d9cfbf] pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Ready for the next chapter.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#52615a]">
              Use this space for contact details, GitHub, LinkedIn, or a short
              invitation for people you want to hear from.
            </p>
          </div>
          <a
            className="inline-flex min-h-11 w-fit items-center border border-[#1e2320] px-5 text-sm font-semibold transition hover:bg-[#1e2320] hover:text-white"
            href="mailto:tml@sundvolden.no"
          >
            Contact me
          </a>
        </div>
      </section>
    </main>
  );
}
