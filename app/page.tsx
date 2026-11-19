import Link from "next/link";
import {
  currentProjects,
  currentWorkIntro,
  featuredProjects,
  intro,
  leadershipAndActivities,
  professionalExperience,
  research,
  site,
} from "./content";
import { ProjectCard, WorkCard } from "./ProjectCard";

type SummaryRow = { start: string; end: string; roles: string[]; place: string };

function yearSpan(period: string) {
  const years = period.match(/\b(?:19|20)\d{2}\b/g) ?? [];
  return { start: years[0] ?? "", end: /present/i.test(period) ? "present" : years.at(-1) ?? "" };
}

function formatSpan({ start, end }: SummaryRow) {
  return start === end ? start : `${start} – ${end}`;
}

// Consecutive roles at the same place share one row, e.g. the three Armed Forces roles.
function ExperienceSummary() {
  const rows: SummaryRow[] = research.map((item) => ({
    ...yearSpan(item.period),
    roles: ["Research"],
    place: `${item.place} (${item.advisor})`,
  }));

  for (const item of professionalExperience) {
    const span = yearSpan(item.period);
    const last = rows.at(-1);
    if (last && last.place === item.place) {
      last.roles.push(item.role.replace(/ \(part-time\)$/, ""));
      last.start = span.start < last.start ? span.start : last.start;
      // "present" sorts after any year
      last.end = span.end > last.end ? span.end : last.end;
    } else {
      rows.push({ ...span, roles: [item.role], place: item.place });
    }
  }

  for (const item of leadershipAndActivities.slice(0, 2)) {
    rows.push({ ...yearSpan(item.period), roles: [item.role], place: item.place.split(" - ")[0] });
  }

  // Newest first: by end year ("present" first), then by start year.
  rows.sort((a, b) => b.end.localeCompare(a.end) || b.start.localeCompare(a.start));

  return (
    <ul className="timeline measure">
      {rows.map((row) => (
        <li key={`${row.place}-${row.start}`}>
          <span className="meta">{formatSpan(row)}</span>
          <p><strong>{row.roles.join(" / ")}</strong> <span>· {row.place}</span></p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="shell">
      <section className="intro" aria-labelledby="home-title">
        <div className="intro-head">
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
        <div className="intro-text measure">
          {intro.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
        </div>
      </section>

      <section className="section" aria-labelledby="current-title">
        <div className="section-head">
          <h2 id="current-title">Current work</h2>
          <a className="more-link" href="/research">Research page →</a>
        </div>
        <p className="section-lead">{currentWorkIntro}</p>
        <div className="work-grid">
          {currentProjects.map((project) => <WorkCard key={project.slug} project={project} />)}
        </div>
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
