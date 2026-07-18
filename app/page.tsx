import Link from "next/link";
import { featuredProjects, recruiterOverview, site } from "./content";
import { ProjectMediaView } from "./ProjectMedia";
import { ResponsiveImage } from "./ResponsiveImage";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

function projectSummary(project: (typeof featuredProjects)[number]) {
  return project.outcome || project.contribution || project.context || "";
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-media">
          {site.storyVideo ? (
            <video controls playsInline poster={site.storyPoster} preload="metadata">
              <source src={site.storyVideo} type="video/mp4" />
            </video>
          ) : (
            <ResponsiveImage
              alt="Gard Laeskogen outside Sundvolden Hotel"
              priority
              sizes="100vw"
              src={site.storyPoster}
            />
          )}
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content page-shell">
          <p className="eyebrow">Builder-operator / {site.location}</p>
          <h1 id="home-title">Gard Laeskogen</h1>
          <p className="hero-role">{site.headline}</p>
          <p className="hero-summary">{recruiterOverview.summary}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button button-light" href="/portfolio">View work</Link>
            <Link className="button button-quiet" href="/cv">Experience</Link>
            <Link className="text-action" href="/request">Set up a chat →</Link>
          </div>
        </div>
        <div className="proof-band page-shell" aria-label="Selected evidence">
          {recruiterOverview.proof.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-work page-shell" aria-labelledby="featured-title">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="featured-title">Engineering in practice</h2>
          </div>
          <Link href="/portfolio">All projects →</Link>
        </header>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <Link className="featured-project" href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectMediaView
                media={project.cover}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div>
                <p><span>0{index + 1}</span>{project.category}</p>
                <h3>{project.title}</h3>
                <p>{projectSummary(project)}</p>
                <span>Open case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
