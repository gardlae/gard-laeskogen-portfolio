import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPublicProject,
  publicProjects,
  site,
  type PortfolioProject,
} from "../../content";
import { ProjectMediaView } from "../../ProjectMedia";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publicProjects.map((project) => ({ slug: project.slug }));
}

function projectDescription(project: PortfolioProject) {
  return project.outcome || project.contribution || project.context || project.title;
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
    description: projectDescription(project),
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description: projectDescription(project),
      images: [image],
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: projectDescription(project),
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
  const leadText = project.outcome || project.contribution || project.context;
  const remainingSections = [
    { label: "Context", value: project.context === leadText ? undefined : project.context },
    { label: "Gard's role", value: project.role },
    { label: "Challenge", value: project.challenge },
    { label: "Outcome", value: project.outcome === leadText ? undefined : project.outcome },
    { label: "Constraints", value: project.constraints },
  ].filter((section) => section.value);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: projectDescription(project),
    url: `${site.canonicalUrl}/projects/${project.slug}`,
    author: { "@type": "Person", name: site.name, url: site.canonicalUrl },
  };

  return (
    <main>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <article className="page-shell project-page page-top">
        <nav className="project-toolbar" aria-label="Project position">
          <Link href="/portfolio">← All projects</Link>
          <span>{String(index + 1).padStart(2, "0")} / {String(publicProjects.length).padStart(2, "0")}</span>
        </nav>

        <section className="project-hero">
          <ProjectMediaView media={project.cover} priority sizes="(max-width: 900px) 100vw, 58vw" />
          <div className="project-hero-copy">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <dl>
              <div><dt>Duration</dt><dd>{project.duration}</dd></div>
              {project.role && <div><dt>Role</dt><dd>{project.role}</dd></div>}
            </dl>
            {leadText && (
              <div className="project-lead-text">
                <h2>{project.outcome ? "Outcome" : project.contribution ? "Contribution" : "Context"}</h2>
                {leadText.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}
            {project.links && (
              <div className="project-external-links">
                {project.links.map((link) => (
                  <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label} ↗</a>
                ))}
              </div>
            )}
          </div>
        </section>

        {(remainingSections.length > 0 || project.methods.length > 0) && (
          <section className="case-details" aria-label="Case study details">
            <div className="case-copy">
              {remainingSections.map((section) => (
                <div key={section.label}>
                  <h2>{section.label}</h2>
                  {section.value?.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              ))}
            </div>
            <aside>
              <p className="eyebrow">Methods</p>
              <ul>{project.methods.map((method) => <li key={method}>{method}</li>)}</ul>
            </aside>
          </section>
        )}

        {project.media.length > 0 && (
          <section className="evidence-section" aria-labelledby="evidence-title">
            <header className="section-heading">
              <div><p className="eyebrow">Evidence</p><h2 id="evidence-title">Project media</h2></div>
            </header>
            <div className="media-strip">
              {project.media.map((media) => (
                <ProjectMediaView
                  key={media.kind === "graphic" ? media.label : media.src}
                  media={media}
                  sizes="(max-width: 768px) 82vw, 36vw"
                />
              ))}
            </div>
          </section>
        )}

        <nav className="project-pagination" aria-label="Project navigation">
          <Link href={`/projects/${previous.slug}`}>
            <span>Previous</span><strong>← {previous.title}</strong>
          </Link>
          <Link href="/portfolio"><span>Index</span><strong>All projects</strong></Link>
          <Link href={`/projects/${next.slug}`}>
            <span>Next</span><strong>{next.title} →</strong>
          </Link>
        </nav>
      </article>
    </main>
  );
}
