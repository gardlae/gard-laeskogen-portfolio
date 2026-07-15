import type { Metadata } from "next";
import Link from "next/link";
import { featuredProjects, publicProjects, site } from "../content";
import { ProjectMediaView } from "../ProjectMedia";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work across UAV systems, software, analog electronics, and analysis.",
  alternates: { canonical: `${site.canonicalUrl}/portfolio` },
};

const secondaryProjects = publicProjects.filter((project) => !project.featured);

function summary(project: (typeof publicProjects)[number]) {
  return project.outcome || project.contribution || project.context || "";
}
function ProjectRow({
  project,
  index,
}: {
  project: (typeof publicProjects)[number];
  index: number;
}) {
  return (
    <Link className="work-row" href={`/projects/${project.slug}`}>
      <ProjectMediaView media={project.cover} sizes="(max-width: 768px) 100vw, 32vw" />
      <div className="work-row-copy">
        <div className="work-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
          <span>{project.duration}</span>
        </div>
        <h2>{project.title}</h2>
        <p>{summary(project)}</p>
        <strong>Open case study →</strong>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell page-top">
        <header className="page-intro work-intro">
          <p className="eyebrow">Work / {String(publicProjects.length).padStart(2, "0")}</p>
          <h1>Selected technical work</h1>
          <p>Engineering, software, electronics, analysis, and independently initiated work.</p>
        </header>

        <section className="work-list" aria-label="Featured projects">
          {featuredProjects.map((project, index) => (
            <ProjectRow index={index} key={project.slug} project={project} />
          ))}
        </section>

        <section className="secondary-work" aria-labelledby="secondary-title">
          <header>
            <p className="eyebrow">Additional work</p>
            <h2 id="secondary-title">Earlier and independent projects</h2>
          </header>
          <div>
            {secondaryProjects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <span>{String(featuredProjects.length + index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category} / {project.duration}</p>
                </div>
                <strong>View →</strong>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
