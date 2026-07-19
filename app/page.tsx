import Link from "next/link";
import { site } from "./content";
import { ResponsiveImage } from "./ResponsiveImage";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

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
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button button-light" href="/portfolio">Portfolio</Link>
            <Link className="button button-quiet" href="/cv">CV</Link>
            <Link className="button button-quiet" href="/about">Story</Link>
            <Link className="text-action" href="/request">Set up a chat →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
