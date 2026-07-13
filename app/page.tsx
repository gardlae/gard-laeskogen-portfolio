import Image from "next/image";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { cvItems, projects, site, videos } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#151815]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-sm font-semibold uppercase tracking-[0.18em]" href="#">
          {site.name}
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

      <section className="mx-auto max-w-6xl px-5 pb-14 pt-8 sm:px-8">
        <div className="hero-board">
          <div className="hero-board-copy">
            <p className="section-kicker">Personal operating system</p>
            <h1>
              {site.name}
              <span>{site.intro}</span>
            </h1>
            <p>{site.note}</p>
          </div>
          <div className="hero-board-image">
            <Image
              alt="Portrait of Gard Laeskogen"
              className="h-full w-full object-cover"
              height={1600}
              priority
              src="/media/profile-contactor.jpg"
              unoptimized
              width={1200}
            />
          </div>
        </div>

        <div className="project-index" aria-label="Project index">
          {projects.map((project, index) => (
            <a href="#portfolio" key={project.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.title}</strong>
              <small>{project.category}</small>
            </a>
          ))}
        </div>
      </section>

      <section id="story" className="story-strip px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="story-heading">
            <p className="section-kicker">Video and story</p>
            <h2>
              More video, less placeholder.
            </h2>
            <p>
              Short clips from projects and moments I want to use in the story.
            </p>
          </div>
          <div className="video-grid">
            {videos.map((video) => (
              <figure className="video-tile" key={video.src}>
                <video controls muted playsInline preload="metadata" src={video.src} />
                <figcaption>{video.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-band px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-2xl">
            <p className="section-kicker">Portfolio</p>
            <h2 className="text-4xl font-semibold leading-tight">
              Projects first, with your wording.
            </h2>
            <p className="mt-4 leading-7 text-[#52615a]">
              Duration, context, description, skills, media, and links.
            </p>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">CV</p>
          <h2 className="text-4xl font-semibold leading-tight">
            Experience built through responsibility and practical work.
          </h2>
        </div>
        <div className="cv-timeline">
          {cvItems.map((item) => (
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

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="section-kicker">More</p>
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
