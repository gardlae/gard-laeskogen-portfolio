import type { Metadata } from "next";
import Link from "next/link";
import { publicProjects, site } from "../content";
import { ProjectMediaView } from "../ProjectMedia";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected work across UAV systems, software, analog electronics, and analysis.",
  alternates: { canonical: `${site.canonicalUrl}/portfolio` },
};

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
    <article className="work-row" id={project.slug}>
      <div className="work-media-strip" aria-label={`${project.title} media`}>
        {[project.cover, ...project.media].map((media, mediaIndex) => (
          <ProjectMediaView
            key={`${project.slug}-${mediaIndex}`}
            media={media}
            sizes="(max-width: 768px) 82vw, 34vw"
          />
        ))}
      </div>
      <div className="work-row-copy">
        <div className="work-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
          <span>{project.duration}</span>
        </div>
        <h2>{project.title}</h2>
        <p>{summary(project)}</p>
        <Link href={`/projects/${project.slug}`}>Open case study →</Link>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell page-top">
        <header className="page-intro work-intro">
          <p className="eyebrow">Portfolio / {String(publicProjects.length).padStart(2, "0")}</p>
          <h1>Selected technical work</h1>
        </header>

        <section className="work-list" aria-label="Projects">
          {publicProjects.map((project, index) => (
            <ProjectRow index={index} key={project.slug} project={project} />
          ))}
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
