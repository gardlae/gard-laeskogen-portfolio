import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { projects } from "../content";

export const metadata: Metadata = {
  title: "Portfolio | Gard Laeskogen",
  description: "Projects across UAV systems, software, electronics, analysis, and prototyping.",
};

export default function PortfolioPage() {
  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page">
        <header className="page-heading">
          <div>
            <p className="kicker">Portfolio / {String(projects.length).padStart(2, "0")} projects</p>
            <h1>Selected work</h1>
          </div>
          <p>Engineering, software, electronics, analysis, and independently initiated work.</p>
        </header>

        <section className="project-card-grid" aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="project-card-image">
                {project.images[0] ? (
                  <Image alt={`${project.title} project`} fill sizes="(max-width: 700px) 100vw, 28vw" src={project.images[0]} unoptimized />
                ) : (
                  <div className="media-fallback"><span>{project.category}</span></div>
                )}
                <span className="project-card-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-card-body">
                <div><span>{project.category}</span><span>{project.duration}</span></div>
                <h2>{project.title}</h2>
                <p>{project.description.split("\n")[0]}</p>
                <span className="card-arrow">Open project →</span>
              </div>
            </Link>
          ))}
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
