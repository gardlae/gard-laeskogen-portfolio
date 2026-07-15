import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  additionalExperience,
  education,
  experience,
  featuredSkills,
  recruiterOverview,
  site,
} from "../content";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience, education, leadership, and technical work.",
  alternates: { canonical: `${site.canonicalUrl}/cv` },
};

export default function ExperiencePage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell page-top experience-page">
        <header className="experience-intro">
          <div>
            <p className="eyebrow">Experience / CV</p>
            <h1>Technical depth.<br />Operational responsibility.</h1>
            <p>{recruiterOverview.summary}</p>
            <div className="method-list" aria-label="Selected skills">
              {featuredSkills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <figure>
            <Image
              alt="Gard Laeskogen"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 36vw"
              src="/media/profile-contactor.jpg"
              unoptimized
            />
          </figure>
          <aside>
            <span>{site.headline}</span>
            <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn profile ↗</a>
            <Link href="/request#documents">Request detailed CV →</Link>
          </aside>
        </header>

        <section className="experience-list" aria-labelledby="career-title">
          <header className="section-heading">
            <div><p className="eyebrow">Chronology</p><h2 id="career-title">Responsibility over time</h2></div>
          </header>

          {experience.map((item, index) => (
            <article className="experience-entry" key={`${item.role}-${item.period}`}>
              <div className="experience-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{item.period}</time>
              </div>
              <div className="experience-entry-copy">
                <p>{item.place}</p>
                <h3>{item.role}</h3>
                {item.summary && <p className="entry-summary">{item.summary}</p>}
                {item.responsibilities && (
                  <div className="entry-block"><h4>Responsibility</h4>{item.responsibilities.map((value) => <p key={value}>{value}</p>)}</div>
                )}
                {item.impact && (
                  <div className="entry-block"><h4>Impact</h4>{item.impact.map((value) => <p key={value}>{value}</p>)}</div>
                )}
                <ul>{item.positions.map((position) => <li key={position}>{position}</li>)}</ul>
              </div>
              {item.evidence[0] ? (
                <div className="experience-evidence">
                  <figure>
                    <Image alt={item.evidence[0].alt} fill sizes="(max-width: 768px) 100vw, 30vw" src={item.evidence[0].src} unoptimized />
                  </figure>
                  {item.evidence[1] && (
                    <figure>
                      <Image alt={item.evidence[1].alt} fill sizes="(max-width: 768px) 44vw, 15vw" src={item.evidence[1].src} unoptimized />
                      {item.evidence[1].caption && <figcaption>{item.evidence[1].caption}</figcaption>}
                    </figure>
                  )}
                </div>
              ) : <div className="experience-evidence-empty" aria-hidden="true"><span>Board responsibility</span></div>}
            </article>
          ))}
        </section>

        <section className="education-section" id="education">
          <header><p className="eyebrow">Education</p><h2>Academic foundation</h2></header>
          <div>
            {education.map((item) => (
              <article key={item.institution}>
                <time>{item.period}</time>
                <h3>{item.qualification}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
            {additionalExperience.map((item) => (
              <article key={item.role}>
                <time>{item.period}</time>
                <h3>{item.role}</h3>
                <p>{item.place}</p>
              </article>
            ))}
          </div>
          <Link className="button button-dark" href="/request#documents">Request detailed documents</Link>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
