import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { projects } from "../../content";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: `${project.title} | Gard Laeskogen`, description: project.description.split("\n")[0] }
    : { title: "Project not found | Gard Laeskogen" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const leadImage = project.images[0];
  const additionalImages = project.images.slice(1);

  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page">
        <div className="project-toolbar">
          <Link href="/portfolio">← All projects</Link>
          <span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
        </div>

        <article className="project-workspace">
          <figure className="project-lead-media">
            {leadImage ? (
              <Image alt={`${project.title} project`} fill priority sizes="(max-width: 900px) 100vw, 58vw" src={leadImage} unoptimized />
            ) : (
              <div className="media-fallback"><span>{project.visualLabel || project.category}</span></div>
            )}
          </figure>

          <div className="project-summary">
            <div className="project-summary-top">
              <p className="kicker">{project.category}</p>
              <h1>{project.title}</h1>
              <dl>
                <div><dt>Duration</dt><dd>{project.duration}</dd></div>
                <div><dt>Methods</dt><dd>{project.skills.length} listed</dd></div>
              </dl>
            </div>
            <div className="project-description">
              {project.description.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="skill-chips" aria-label="Skills and methods">
              {project.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            {(project.github || project.demo) && (
              <div className="project-links">
                {project.github && <a href={project.github} rel="noreferrer" target="_blank">GitHub ↗</a>}
                {project.demo && <a href={project.demo} rel="noreferrer" target="_blank">Demo ↗</a>}
              </div>
            )}
          </div>
        </article>

        {(project.video || additionalImages.length > 0) && (
          <section className="project-media-strip" aria-label={`${project.title} media`}>
            <div className="panel-heading"><span>Additional media</span></div>
            <div>
              {project.video && <video controls muted playsInline preload="metadata" src={project.video} />}
              {additionalImages.map((src, mediaIndex) => (
                <figure key={src}>
                  <Image alt={`${project.title}, view ${mediaIndex + 2}`} fill sizes="(max-width: 700px) 78vw, 24vw" src={src} unoptimized />
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav className="compact-pagination" aria-label="Project navigation">
          <Link href={`/projects/${previous.slug}`}><span>← Previous</span><strong>{previous.title}</strong></Link>
          <Link href={`/projects/${next.slug}`}><span>Next →</span><strong>{next.title}</strong></Link>
        </nav>
        <SiteFooter />
      </div>
    </main>
  );
}
