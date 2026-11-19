import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPublicProject,
  publicProjects,
  site,
} from "../../content";
import { projectHref, projectSummary } from "../../ProjectCard";
import { ProjectMediaView } from "../../ProjectMedia";
import { TieUpDemo } from "../../TieUpDemo";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publicProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublicProject(slug);
  if (!project) return { title: "Project not found" };

  const image = project.cover.kind === "image" ? project.cover.src : "/social-card.jpg";
  const url = `${site.canonicalUrl}/projects/${project.slug}`;
  const socialTitle = `${project.title} | ${site.name}`;
  return {
    title: project.title,
    description: projectSummary(project),
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description: projectSummary(project),
      images: [image],
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: projectSummary(project),
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPublicProject(slug);
  if (!project) notFound();

  const index = publicProjects.findIndex((item) => item.slug === slug);
  const previous = publicProjects[(index - 1 + publicProjects.length) % publicProjects.length];
  const next = publicProjects[(index + 1) % publicProjects.length];
  const sections = [
    { label: "Context", value: project.context },
    { label: "Challenge", value: project.challenge },
    { label: "Contribution", value: project.contribution },
    { label: "Role", value: project.role },
    { label: "Outcome", value: project.outcome },
    { label: "Constraints", value: project.constraints },
  ].filter((section) => section.value);
  const tieUpPrototype = project.slug === "tieup-social-platform"
    ? project.links?.find((link) => link.label === "Prototype")
    : undefined;
  const externalLinks = project.links?.filter((link) => link !== tieUpPrototype) ?? [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: projectSummary(project),
    url: `${site.canonicalUrl}/projects/${project.slug}`,
    author: { "@type": "Person", name: site.name, url: site.canonicalUrl },
  };

  return (
    <main className="shell page-top">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <article className="measure">
        <Link className="back-link" href="/portfolio">← Portfolio</Link>

        <header className="project-head">
          <p className="meta">{project.category} · {project.duration}</p>
          <h1>{project.title}</h1>
          {project.subtitle && <p className="subtitle">{project.subtitle}</p>}
          {(project.page || externalLinks.length > 0) && (
            <p className="links">
              {project.page && <a href={projectHref(project)}>Read the full write-up →</a>}
              {externalLinks.map((link) => (
                <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label} ↗</a>
              ))}
            </p>
          )}
        </header>

        {project.cover.kind !== "graphic" && (
          <div className="project-cover">
            <div className="thumb">
              <ProjectMediaView media={project.cover} priority sizes="(max-width: 720px) 100vw, 680px" />
            </div>
          </div>
        )}

        <div className="case">
          {sections.map((section) => (
            <section key={section.label}>
              <h2>{section.label}</h2>
              {section.value?.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>

        {project.methods.length > 0 && (
          <section className="methods" aria-labelledby="methods-title">
            <h2 id="methods-title">Methods and tools</h2>
            <p>{project.methods.map((method, i) => (i === 0 ? method[0].toUpperCase() + method.slice(1) : method)).join(", ")}</p>
          </section>
        )}

        {tieUpPrototype && (
          <section className="project-gallery" aria-labelledby="prototype-title">
            <h2 id="prototype-title">Interactive prototype</h2>
            <TieUpDemo />
          </section>
        )}
      </article>

      {project.media.length > 0 && (
        <section className="project-gallery" aria-labelledby="media-title">
          <h2 id="media-title">Images and video</h2>
          <div className="media-grid">
            {project.media.map((media) => (
              <ProjectMediaView
                key={media.kind === "graphic" ? media.label : media.src}
                media={media}
                sizes="(max-width: 640px) 92vw, 520px"
              />
            ))}
          </div>
        </section>
      )}

      <nav className="pager" aria-label="More projects">
        <Link href={`/projects/${previous.slug}`}>
          <span>Previous</span><strong>← {previous.title}</strong>
        </Link>
        <Link href={`/projects/${next.slug}`}>
          <span>Next</span><strong>{next.title} →</strong>
        </Link>
      </nav>
    </main>
  );
}
