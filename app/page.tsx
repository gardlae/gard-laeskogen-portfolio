import Link from "next/link";
import {
  featuredProjects,
  intro,
  leadershipAndActivities,
  professionalExperience,
  research,
  site,
  visiblePosts,
} from "./content";
import { BlogCard } from "./BlogCard";
import { PlannerHero } from "./PlannerHero";
import { ProjectCard, ResearchCard } from "./ProjectCard";
import { ResponsiveImage } from "./ResponsiveImage";

type SummaryRow = { start: string; end: string; role: string; place: string };

function yearSpan(period: string) {
  const years = period.match(/\b(?:19|20)\d{2}\b/g) ?? [];
  return { start: years[0] ?? "", end: /present/i.test(period) ? "present" : years.at(-1) ?? "" };
}

function formatSpan({ start, end }: SummaryRow) {
  return start === end ? start : `${start} – ${end}`;
}

// One row per role, each with its own years, newest first.
function ExperienceSummary() {
  const rows: SummaryRow[] = [
    ...research.map((item) => ({ ...yearSpan(item.period), role: "Independent research", place: item.place })),
    ...professionalExperience.map((item) => ({ ...yearSpan(item.period), role: item.role, place: item.place })),
    ...leadershipAndActivities.slice(0, 2).map((item) => ({ ...yearSpan(item.period), role: item.role, place: item.place.split(" - ")[0] })),
  ];
  // "present" sorts after any year
  rows.sort((a, b) => b.end.localeCompare(a.end) || b.start.localeCompare(a.start));

  return (
    <ul className="timeline measure">
      {rows.map((row) => (
        <li key={`${row.role}-${row.start}`}>
          <span className="meta">{formatSpan(row)}</span>
          <p><strong>{row.role}</strong> <span>· {row.place}</span></p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="shell">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-text">
          {site.portrait && (
            <div className="portrait">
              <ResponsiveImage alt={site.portrait.alt} priority sizes="160px" src={site.portrait.src} />
            </div>
          )}
          <h1 id="home-title">{site.name}</h1>
          <p className="intro-roles">
            {site.roles.map((role) => <span key={role}>{role}</span>)}
          </p>
          <ul className="contact-links" aria-label="Contact and profiles">
            <li><a href={`mailto:${site.email}`}>Email</a></li>
            <li><a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a></li>
            <li><a href={site.github} rel="noreferrer" target="_blank">GitHub</a></li>
            <li><a href="/Gard-Laeskogen-CV.pdf" rel="noreferrer" target="_blank">CV (PDF)</a></li>
          </ul>
        </div>
        <PlannerHero />
      </section>

      <div className="intro-text measure">
        {intro.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
      </div>

      <section className="section" aria-labelledby="research-title">
        <div className="section-head">
          <h2 id="research-title">Exploration</h2>
          <a className="more-link" href="/research">Read more →</a>
        </div>
        {research.map((item) => <ResearchCard item={item} key={item.title} />)}
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="section-head">
          <h2 id="projects-title">Selected projects</h2>
          <Link className="more-link" href="/portfolio">All projects →</Link>
        </div>
        <ul className="project-grid">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </ul>
      </section>

      {visiblePosts.length > 0 && (
        <section className="section" aria-labelledby="blog-title">
          <div className="section-head">
            <h2 id="blog-title">From the blog</h2>
            <Link className="more-link" href="/blog">All posts →</Link>
          </div>
          <ul className="blog-grid">
            {visiblePosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
          </ul>
        </section>
      )}

      <section className="section" aria-labelledby="experience-title">
        <div className="section-head">
          <h2 id="experience-title">Experience</h2>
          <Link className="more-link" href="/cv">Full CV →</Link>
        </div>
        <ExperienceSummary />
      </section>
    </main>
  );
}
