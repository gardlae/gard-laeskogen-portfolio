import Link from "next/link";
import type { PortfolioProject, ResearchItem } from "./content";
import { ProjectMediaView } from "./ProjectMedia";

// Skills read as keywords: capitalised first letter, the project's own order.
export function skillList(project: PortfolioProject, limit?: number) {
  const skills = project.methods.map((method) => method[0].toUpperCase() + method.slice(1));
  return limit ? skills.slice(0, limit) : skills;
}

export function projectSummary(project: PortfolioProject) {
  return project.subtitle || project.outcome || project.contribution || project.context || "";
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <li className="project-card">
      <div className="thumb">
        <ProjectMediaView media={project.cover} sizes="(max-width: 560px) 92vw, (max-width: 900px) 46vw, 340px" />
      </div>
      <p className="meta">{project.category} · {project.duration}</p>
      <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p className="clamp">{project.subtitle || project.contribution || project.context || project.outcome}</p>
      {project.methods.length > 0 && <p className="card-skills">{skillList(project, 4).join(" · ")}</p>}
    </li>
  );
}

// /research is a generated page served by a route handler, so it gets a plain link (a full page load).
export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="research-card">
      <p className="meta">{[item.name, item.place].filter(Boolean).join(" · ")}</p>
      <h3>{item.href ? <a href={item.href}>{item.question ?? item.title}</a> : item.question ?? item.title}</h3>
      <p className="summary">{item.plain ?? item.summary}</p>
      {item.status && <p className="meta">{item.status}</p>}
    </article>
  );
}
