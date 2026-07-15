import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { cvItems, homeImages, projects, site, videos } from "./content";

const selectedProjects = [projects[0], projects[3], projects[5]];

export default function Home() {
  return (
    <main>
      <div className="hero-shell">
        <SiteHeader overlay />
        <section className="editorial-hero" aria-labelledby="home-title">
          <Image
            alt="Gard Laeskogen outside Sundvolden Hotel"
            className="editorial-hero-image"
            fill
            priority
            sizes="100vw"
            src="/media/family-business-portrait.jpg"
            unoptimized
          />
          <div className="editorial-hero-shade" />
          <div className="editorial-hero-copy">
            <p className="eyebrow-light">{site.location} / Portfolio 2026</p>
            <h1 id="home-title">
              Gard
              <span>Laeskogen</span>
            </h1>
            <p className="hero-intro">{site.intro}</p>
            <div className="hero-actions">
              <Link href="/portfolio">
                Explore the work <span aria-hidden="true">→</span>
              </Link>
              <Link href="/cv">Read the CV story</Link>
            </div>
          </div>
          <div className="hero-field-index" aria-label="Areas of work">
            <span>Cybernetics</span>
            <span>UAV systems</span>
            <span>Operations</span>
            <span>Leadership</span>
          </div>
        </section>
      </div>

      <section className="home-statement">
        <p className="section-number">00 / Introduction</p>
        <p>{site.note}</p>
        <Link href="/cv">
          Follow the chronology <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="selected-work-section">
        <div className="section-heading-row">
          <div>
            <p className="section-number">01 / Selected work</p>
            <h2>Built in the field.</h2>
          </div>
          <Link className="arrow-link" href="/portfolio">
            All {projects.length} projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="selected-work-list">
          {selectedProjects.map((project, index) => (
            <Link className="selected-work-row" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="selected-work-image">
                {project.images[0] ? (
                  <Image
                    alt={`${project.title} project`}
                    fill
                    sizes="(max-width: 800px) 100vw, 44vw"
                    src={project.images[0]}
                    unoptimized
                  />
                ) : (
                  <div className="image-fallback">{project.category}</div>
                )}
              </div>
              <div className="selected-work-copy">
                <p>
                  {String(index + 1).padStart(2, "0")} / {project.category}
                </p>
                <h3>{project.title}</h3>
                <span>{project.duration}</span>
                <span aria-hidden="true" className="row-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-cv-section">
        <div className="home-cv-heading">
          <p className="section-number light">02 / CV story</p>
          <h2>Experience is easier to understand in sequence.</h2>
          <p>{site.cvIntro}</p>
          <Link className="light-arrow-link" href="/cv">
            Read the full chronology <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="home-cv-filmstrip">
          {cvItems.slice(0, 3).map((item, index) => (
            <figure key={item.role}>
              <Image
                alt={`${item.role} chapter`}
                fill
                sizes="(max-width: 760px) 82vw, 30vw"
                src={item.image}
                unoptimized
              />
              <figcaption>
                <span>Chapter {String(index + 1).padStart(2, "0")}</span>
                <strong>{item.role}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="story-reel-section">
        <div className="section-heading-row">
          <div>
            <p className="section-number">03 / Story reel</p>
            <h2>{site.storyTitle}</h2>
          </div>
          <p className="section-side-copy">{site.storyIntro}</p>
        </div>
        <div className="story-reel">
          {videos.map((video, index) => (
            <figure key={video.src}>
              <video controls muted playsInline preload="metadata" src={video.src} />
              <figcaption>
                <span aria-hidden="true">▶</span>
                {String(index + 1).padStart(2, "0")} {video.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="image-ledger" aria-label="Background in images">
        {homeImages.slice(0, 4).map((image) => (
          <figure key={image.src}>
            <Image alt={image.alt} fill sizes="(max-width: 760px) 50vw, 25vw" src={image.src} unoptimized />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="private-documents-band">
        <div>
          <p className="section-number light">Private material</p>
          <h2>Detailed CV and project portfolio.</h2>
        </div>
        <p>
          These documents are shared individually with companies and recruiters, not published on the open site.
        </p>
        <Link href="/request">
          Request access
        </Link>
      </section>

      <nav className="home-paths" aria-label="Additional pages">
        <Link href="/sports">
          <span>Sports</span>
          <small>Competition and results</small>
          <span aria-hidden="true" className="symbol-icon">→</span>
        </Link>
        <Link href="/investment">
          <span>Investment</span>
          <small>Ownership and strategy</small>
          <span aria-hidden="true" className="symbol-icon">→</span>
        </Link>
        <Link href="/philosophy">
          <span>The why</span>
          <small>Beliefs and principles</small>
          <span aria-hidden="true" className="symbol-icon">→</span>
        </Link>
      </nav>

      <SiteFooter />
    </main>
  );
}
