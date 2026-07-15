import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { additionalExperience, cvItems, education, featuredSkills, site } from "../content";

export const metadata: Metadata = {
  title: "CV Story | Gard Laeskogen",
  description: "Gard Laeskogen's experience, education, leadership, and technical work in sequence.",
};

export default function CvPage() {
  return (
    <main>
      <SiteHeader />
      <header className="cv-story-hero">
        <div className="cv-story-hero-copy">
          <p className="section-number light">CV / Chronology</p>
          <h1>{site.cvIntro}</h1>
          <p>{site.headline}</p>
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn profile <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="cv-story-hero-image">
          <Image
            alt="Gard Laeskogen"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
            src="/media/profile-contactor.jpg"
            unoptimized
          />
        </div>
      </header>

      <nav className="cv-chapter-nav" aria-label="CV chapters">
        {cvItems.map((item, index) => (
          <a href={`#chapter-${index + 1}`} key={item.role}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.role}
          </a>
        ))}
        <a href="#education">
          <span>{String(cvItems.length + 1).padStart(2, "0")}</span>
          Education
        </a>
      </nav>

      <section className="cv-chapters">
        {cvItems.map((item, index) => (
          <article className="cv-chapter" id={`chapter-${index + 1}`} key={item.role}>
            <div className="cv-chapter-image">
              <Image
                alt={`${item.role} experience`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                src={item.image}
                unoptimized
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="cv-chapter-copy">
              <p className="section-number">{item.period}</p>
              <h2>{item.role}</h2>
              <h3>{item.place}</h3>
              <p className="cv-chapter-detail">{item.detail}</p>
              <ul>
                {item.positions.map((position) => <li key={position}>{position}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="education-section" id="education">
        <div className="education-intro">
          <p className="section-number light">{String(cvItems.length + 1).padStart(2, "0")} / Education</p>
          <h2>Education</h2>
          <div className="featured-skills" aria-label="Featured LinkedIn skills">
            {featuredSkills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.institution}>
              <span>{item.period}</span>
              <h3>{item.institution}</h3>
              <p>{item.qualification}</p>
            </article>
          ))}
          <div className="additional-experience">
            <p className="section-number light">Additional experience</p>
            {additionalExperience.map((item) => (
              <article key={item.role}>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-request-band">
        <span aria-hidden="true" className="private-mark">Private</span>
        <div>
          <p className="section-number">Private documents</p>
          <h2>Request detailed CV and portfolio for download.</h2>
          <p>Requests are reviewed individually before any documents are shared.</p>
        </div>
        <Link href="/request">
          Request access <span aria-hidden="true">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
