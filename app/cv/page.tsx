import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { additionalExperience, cvItems, education, featuredSkills, site } from "../content";

export const metadata: Metadata = {
  title: "Experience | Gard Laeskogen",
  description: "Gard Laeskogen's experience, education, leadership, and technical work.",
};

export default function CvPage() {
  return (
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page cv-page">
        <header className="cv-overview">
          <figure>
            <Image alt="Gard Laeskogen" fill priority sizes="(max-width: 700px) 100vw, 28vw" src="/media/profile-contactor.jpg" unoptimized />
          </figure>
          <div className="cv-overview-copy">
            <p className="kicker">Experience / CV</p>
            <h1>Technical depth.<br />Operational responsibility.</h1>
            <p>{site.cvIntro}</p>
            <div className="skill-chips">{featuredSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
          <aside>
            <div className="panel-heading"><span>Profile</span></div>
            <p>{site.headline}</p>
            <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn profile ↗</a>
            <Link href="/request">Request detailed CV →</Link>
          </aside>
        </header>

        <section className="cv-experience-section">
          <div className="section-title-row"><div><p className="kicker">Career chronology</p><h2>Experience</h2></div><span>{cvItems.length} chapters</span></div>
          <div className="cv-experience-grid">
            {cvItems.map((item, index) => (
              <article className="experience-card" key={item.role}>
                <div className="experience-card-image">
                  <Image alt={`${item.role} experience`} fill sizes="(max-width: 700px) 100vw, 20vw" src={item.image} unoptimized />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.secondaryImage && (
                    <Image className="experience-inset" alt={item.secondaryImage.alt} height={74} src={item.secondaryImage.src} unoptimized width={88} />
                  )}
                </div>
                <div className="experience-card-body">
                  <p>{item.period}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.place}</h4>
                  <p className="experience-detail">{item.detail}</p>
                  <ul>{item.positions.map((position) => <li key={position}>{position}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-education-panel" id="education">
          <div><p className="kicker">Education</p><h2>Academic foundation</h2></div>
          <div className="education-rows">
            {education.map((item) => (
              <article key={item.institution}><span>{item.period}</span><strong>{item.qualification}</strong><p>{item.institution}</p></article>
            ))}
            {additionalExperience.map((item) => (
              <article key={item.role}><span>{item.period}</span><strong>{item.role}</strong><p>{item.place}</p></article>
            ))}
          </div>
          <Link className="button-primary" href="/request">Request detailed documents <span>→</span></Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
