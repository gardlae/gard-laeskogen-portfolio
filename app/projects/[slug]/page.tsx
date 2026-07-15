import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { projects } from "../../content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found | Gard Laeskogen" };
  }

  return {
    title: `${project.title} | Gard Laeskogen`,
    description: project.description.split("\n")[0],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);

  if (index < 0) notFound();

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <SiteHeader />
      <article className="project-detail">
        <header className="project-detail-header">
          <div className="project-detail-back">
            <Link href="/portfolio">
              <span aria-hidden="true">←</span> Portfolio index
            </Link>
            <span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          </div>
          <p className="section-number">{project.category}</p>
          <h1>{project.title}</h1>
          <div className="project-detail-meta">
            <div>
              <span>Duration</span>
              <strong>{project.duration}</strong>
            </div>
            <div>
              <span>Skills</span>
              <strong>{project.skills.length} areas</strong>
            </div>
          </div>
        </header>

        <section className="project-detail-body">
          <div className="project-description-large">
            {project.description.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="project-skill-list">
            <p className="section-number">Skills and methods</p>
            <ul>
              {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
            {project.github || project.demo ? (
              <div className="project-external-links">
                {project.github ? (
                  <a href={project.github} rel="noreferrer" target="_blank">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.demo ? (
                  <a href={project.demo} rel="noreferrer" target="_blank">
                    Demo <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>

        <section className="project-gallery" aria-label={`${project.title} media`}>
          {project.video ? (
            <figure className="project-gallery-video">
              <video controls muted playsInline preload="metadata" src={project.video} />
            </figure>
          ) : null}
          {project.images.length ? project.images.map((src, imageIndex) => (
            <figure className="project-gallery-image" key={src}>
              <Image
                alt={`${project.title}, view ${imageIndex + 1}`}
                fill
                sizes="(max-width: 760px) 100vw, 76vw"
                src={src}
                unoptimized
              />
              <figcaption>{String(imageIndex + 1).padStart(2, "0")} / {project.title}</figcaption>
            </figure>
          )) : (
            <div className="project-gallery-fallback">
              <span>{project.category}</span>
              <strong>{project.visualLabel}</strong>
            </div>
          )}
        </section>
      </article>

      <nav className="project-pagination" aria-label="Project navigation">
        <Link href={`/projects/${previous.slug}`}>
          <span aria-hidden="true" className="pagination-symbol">←</span>
          <span>Previous project</span>
          <strong>{previous.title}</strong>
        </Link>
        <Link href={`/projects/${next.slug}`}>
          <span aria-hidden="true" className="pagination-symbol">→</span>
          <span>Next project</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
      <SiteFooter />
    </main>
  );
}
