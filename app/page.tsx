import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { projects, recruiterOverview, site } from "./content";

const selectedProjects = [projects[0], projects[3], projects[5]];

export default function Home() {
  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content home-page">
        <section className="recruiter-home" aria-labelledby="home-title">
          <div className="recruiter-hero">
            <div className="recruiter-intro">
              <div className="status-line"><span /> {site.location} / Available for conversations</div>
              <div className="recruiter-intro-copy">
                <p className="kicker">{recruiterOverview.focus}</p>
                <h1 id="home-title">Gard Laeskogen</h1>
                <p className="recruiter-role">{site.headline}</p>
                <p className="recruiter-summary">{recruiterOverview.summary}</p>
              </div>
              <div className="recruiter-actions" aria-label="Primary actions">
                <Link className="button-primary" href="/portfolio">See selected work <span>→</span></Link>
                <Link className="button-secondary" href="/request#schedule">Schedule a chat</Link>
                <Link className="recruiter-text-link" href="/request#documents">Request detailed CV</Link>
              </div>
            </div>

            <figure className="recruiter-portrait">
            <Image
              alt="Gard Laeskogen"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 38vw"
              src="/media/profile-contactor.jpg"
              unoptimized
            />
              <figcaption>
                <span>Gard Laeskogen</span>
                <span>M. Sc. Cybernetics and Robotics / NTNU</span>
              </figcaption>
            </figure>
          </div>

          <section className="recruiter-proof" aria-label="Evidence">
            {recruiterOverview.proof.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
            <Link href="/cv">
              <span>Full experience</span>
              <strong>Open CV story →</strong>
            </Link>
          </section>

          <section className="recruiter-work" aria-labelledby="selected-work-title">
            <header>
              <div>
                <p className="kicker">Proof through work</p>
                <h2 id="selected-work-title">Selected projects</h2>
              </div>
              <Link href="/portfolio">View all {projects.length} projects →</Link>
            </header>
            <div className="recruiter-projects">
              {selectedProjects.map((project, index) => (
                <Link href={`/projects/${project.slug}`} key={project.slug}>
                  <figure>
                    <Image
                      alt=""
                      fill
                      loading="eager"
                      sizes="(max-width: 700px) 30vw, 10vw"
                      src={project.images[0]}
                      unoptimized
                    />
                  </figure>
                  <span>0{index + 1}</span>
                  <div>
                    <small>{project.category}</small>
                    <strong>{project.title}</strong>
                  </div>
                  <b aria-hidden="true">→</b>
                </Link>
              ))}
            </div>
          </section>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
