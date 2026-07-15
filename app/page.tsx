import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { projects, site } from "./content";

const selectedProjects = [projects[0], projects[2], projects[3], projects[5]];

export default function Home() {
  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content home-page">
        <section className="home-dashboard" aria-labelledby="home-title">
          <div className="home-profile-panel">
            <div className="status-line"><span /> Trondheim, Norway / Portfolio 2026</div>
            <div>
              <p className="kicker">Cybernetics · UAV systems · Operations</p>
              <h1 id="home-title">Gard<br />Laeskogen</h1>
              <p className="home-lead">{site.intro}</p>
            </div>
            <div className="primary-actions">
              <Link className="button-primary" href="/portfolio">View portfolio <span>→</span></Link>
              <Link className="button-secondary" href="/cv">Experience</Link>
            </div>
          </div>

          <figure className="home-portrait">
            <Image
              alt="Gard Laeskogen"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 34vw"
              src="/media/profile-contactor.jpg"
              unoptimized
            />
            <figcaption>M. Sc. Cybernetics and Robotics / NTNU</figcaption>
          </figure>

          <aside className="home-focus-panel">
            <div className="panel-heading"><span>Current profile</span><span>2026</span></div>
            <dl className="profile-facts">
              <div><dt>Education</dt><dd>Cybernetics &amp; Robotics</dd></div>
              <div><dt>Focus</dt><dd>Autonomous systems</dd></div>
              <div><dt>Experience</dt><dd>Engineering &amp; leadership</dd></div>
              <div><dt>Background</dt><dd>Family business &amp; sport</dd></div>
            </dl>
            <a className="inline-link" href={`mailto:${site.email}`}>{site.email} <span>↗</span></a>
          </aside>

          <section className="home-work-panel">
            <div className="panel-heading">
              <span>Selected work</span>
              <Link href="/portfolio">All {projects.length} projects →</Link>
            </div>
            <div className="home-project-grid">
              {selectedProjects.map((project, index) => (
                <Link href={`/projects/${project.slug}`} key={project.slug}>
                  <span className="project-code">P{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.title}</strong>
                  <small>{project.category}</small>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>

          <nav className="home-path-panel" aria-label="More about Gard Laeskogen">
            <div className="panel-heading"><span>Beyond engineering</span></div>
            <Link href="/sports"><span>Sports</span><small>Results &amp; dedication</small><b>→</b></Link>
            <Link href="/investment"><span>Investment</span><small>Strategy &amp; ownership</small><b>→</b></Link>
            <Link href="/philosophy"><span>Principles</span><small>Beliefs &amp; direction</small><b>→</b></Link>
          </nav>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
