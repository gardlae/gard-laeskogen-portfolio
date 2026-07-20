import Link from "next/link";
import {
  education,
  leadershipAndActivities,
  professionalExperience,
  publicProjects,
  site,
  sportsAchievements,
  sportsIntro,
} from "./content";
import { ProjectMediaView } from "./ProjectMedia";
import { ResponsiveImage } from "./ResponsiveImage";
import { TieUpDemo } from "./TieUpDemo";

function summary(project: (typeof publicProjects)[number]) {
  return project.outcome || project.contribution || project.context || "";
}

function PortfolioPreview({ project, index }: {
  project: (typeof publicProjects)[number];
  index: number;
}) {
  const isTieUp = project.slug === "tieup-social-platform";
  const media = project.slug === "hospitality-investment-analysis"
    ? []
    : [project.cover, ...project.media].slice(0, 2);

  return (
    <article
      className={`home-project-row${media.length === 0 ? " home-project-row-text-only" : ""}${isTieUp ? " home-project-row-prototype" : ""}`}
      id={`project-${project.slug}`}
    >
      <div className="home-project-index">{String(index + 1).padStart(2, "0")}</div>
      {isTieUp ? (
        <div className="home-project-prototype">
          <p className="eyebrow">Interactive prototype</p>
          <TieUpDemo compact />
        </div>
      ) : media.length > 0 && (
        <div className="home-project-media" aria-label={`${project.title} media`}>
          {media.map((item, mediaIndex) => (
            <ProjectMediaView
              key={`${project.slug}-${mediaIndex}`}
              media={item}
              sizes="(max-width: 768px) 48vw, 18vw"
            />
          ))}
        </div>
      )}
      <div className="home-project-copy">
        <h3>{project.title}</h3>
        <p>{summary(project)}</p>
        <Link href={`/projects/${project.slug}`}>Details</Link>
      </div>
    </article>
  );
}

function ExperienceCompact() {
  const entries = [...professionalExperience, ...leadershipAndActivities];

  return (
    <section className="home-section home-cv" id="cv" aria-labelledby="cv-title">
      <div className="page-shell">
        <header className="home-section-heading">
          <p className="eyebrow">Experience / CV</p>
          <h2 id="cv-title">Engineering, operations, leadership.</h2>
          <div className="home-cv-actions">
            <a
              className="button button-dark"
              href="/Gard-Laeskogen-CV.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Open CV as PDF
            </a>
          </div>
        </header>

        <div className="home-education-strip" aria-label="Education">
          {education.map((item) => (
            <article key={item.institution}>
              <time>{item.period}</time>
              <h3>{item.qualification}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>

        <div className="home-experience-list">
          {entries.map((item, index) => (
            <article key={`${item.role}-${item.period}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.role}</h3>
                <p>{item.place}{item.location ? ` / ${item.location}` : ""}</p>
              </div>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const featuredSports = sportsAchievements.slice(0, 4);

  return (
    <main>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-media hero-media-field">
          <ResponsiveImage
            alt="Gard Laeskogen during field experience in the Norwegian Armed Forces"
            priority
            sizes="100vw"
            src={site.storyPoster}
          />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content page-shell">
          <p className="eyebrow">Builder-operator / {site.location}</p>
          <h1 id="home-title">Gard Laeskogen</h1>
          <p className="hero-role">{site.headline}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-light" href="#portfolio">Selected Portfolio</a>
            <a
              className="button button-quiet"
              href="/Gard-Laeskogen-CV.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Open CV
            </a>
            <a className="text-action" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <a className="hero-scroll-action" href="#portfolio" aria-label="Scroll to Selected Portfolio">
          <span>Selected Portfolio</span>
          <b aria-hidden="true">↓</b>
        </a>
      </section>

      <section className="home-section home-portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="page-shell">
          <header className="home-section-heading">
            <p className="eyebrow">Selected Portfolio</p>
            <h2 id="portfolio-title">Public technical work.</h2>
          </header>
          <div className="home-project-list">
            {publicProjects.map((project, index) => (
              <PortfolioPreview index={index} key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ExperienceCompact />

      <section className="home-section home-story" id="story" aria-labelledby="story-title">
        <div className="page-shell home-story-grid">
          <header className="home-section-heading">
            <p className="eyebrow">Drive</p>
            <h2 id="story-title">What shaped the work.</h2>
            <p>{sportsIntro}</p>
          </header>

          <div className="home-story-panel">
            <section aria-labelledby="sports-title">
              <h3 id="sports-title">Sports</h3>
              {featuredSports.map((achievement) => (
                <a href={achievement.href} key={`${achievement.year}-${achievement.event}`} rel="noreferrer" target="_blank">
                  <time>{achievement.year}</time>
                  <span>{achievement.result}</span>
                  <strong>{achievement.event}</strong>
                </a>
              ))}
            </section>
            <section aria-labelledby="principles-title">
              <h3 id="principles-title">Why I do what I do</h3>
              <p className="principles-summary">
                I work to become a better version of myself, do what is right even when it is
                uncomfortable, and choose how I respond when circumstances are beyond my control.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
