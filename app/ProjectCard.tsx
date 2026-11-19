import Link from "next/link";
import type { PortfolioProject } from "./content";
import { ProjectMediaView } from "./ProjectMedia";

export function projectHref(project: PortfolioProject) {
  return project.page ?? `/projects/${project.slug}`;
}

export function projectSummary(project: PortfolioProject) {
  return project.subtitle || project.outcome || project.contribution || project.context || "";
}

// /research is served by a route handler; give it a plain link (full page load).
function ProjectLink({ project }: { project: PortfolioProject }) {
  const href = projectHref(project);
  return project.page
    ? <a href={href}>{project.title}</a>
    : <Link href={href}>{project.title}</Link>;
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <li className="project-card">
      <div className="thumb">
        <ProjectMediaView media={project.cover} sizes="(max-width: 560px) 92vw, (max-width: 900px) 46vw, 340px" />
      </div>
      <p className="meta">{project.category} · {project.duration}</p>
      <h3><ProjectLink project={project} /></h3>
      <p className="clamp">{project.subtitle || project.contribution || project.context || project.outcome}</p>
    </li>
  );
}

export function WorkCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="work-card">
      <p className="meta">{project.category}</p>
      <h3><ProjectLink project={project} /></h3>
      {project.subtitle && <p className="question">{project.subtitle}</p>}
      <p className="summary">{project.contribution || project.context}</p>
      {project.status && <p className="meta">{project.status}</p>}
    </article>
  );
}
