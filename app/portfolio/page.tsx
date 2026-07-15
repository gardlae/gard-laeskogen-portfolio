import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
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
    <main>
      <SiteHeader />
      <header className="index-hero">
        <p className="section-number">Portfolio / {String(projects.length).padStart(2, "0")} projects</p>
        <h1>Work, experiments, and systems.</h1>
        <p>
          Each project opens as its own page, with a direct link you can share.
        </p>
      </header>

      <section className="project-index" aria-label="Portfolio projects">
        <div className="project-index-labels" aria-hidden="true">
          <span>No.</span>
          <span>Project</span>
          <span>Context</span>
          <span>Duration</span>
        </div>
        {projects.map((project, index) => (
          <Link className="project-index-row" href={`/projects/${project.slug}`} key={project.slug}>
            <span className="project-index-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-index-image">
              {project.images[0] ? (
                <Image
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 220px"
                  src={project.images[0]}
                  unoptimized
                />
              ) : (
                <div className="image-fallback">{project.category}</div>
              )}
            </div>
            <h2>{project.title}</h2>
            <span className="project-index-category">{project.category}</span>
            <span className="project-index-duration">{project.duration}</span>
            <ArrowRight aria-hidden="true" className="project-index-arrow" size={24} />
          </Link>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
