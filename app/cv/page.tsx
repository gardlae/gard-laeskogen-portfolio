import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  academicAreas,
  education,
  hackathons,
  languages,
  leadershipAndActivities,
  professionalExperience,
  selectedCourses,
  skillGroups,
  site,
} from "../content";
import type { ExperienceItem } from "../content/types";
import { ResponsiveImage } from "../ResponsiveImage";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export const metadata: Metadata = {
  title: "Experience",
  description: "Gard Laeskogen's engineering, operational, leadership, and academic experience.",
  alternates: { canonical: `${site.canonicalUrl}/cv` },
};

function ExperienceEntry({ item, index }: { item: ExperienceItem; index: number }) {
  const mark = item.evidence.find((evidence) => evidence.presentation === "mark");
  const photos = item.evidence.filter((evidence) => evidence.presentation === "photo");
  const hasDetails = Boolean(
    item.positions?.length ||
      item.responsibilities?.length ||
      item.impact?.length ||
      item.recommendation ||
      item.links?.length ||
      photos.length,
  );

  return (
    <article className="cv-entry">
      <div className="cv-entry-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <time>{item.period}</time>
      </div>

      <div className="cv-entry-copy">
        <div className="cv-entry-heading">
          <div>
            <p>{item.place}{item.location ? ` / ${item.location}` : ""}</p>
            <h3>{item.role}</h3>
          </div>
          {mark && (
            <Image
              alt={mark.alt}
              className="cv-entry-mark"
              height={72}
              src={mark.src}
              unoptimized
              width={72}
            />
          )}
        </div>

        {item.summary && <p className="cv-entry-summary">{item.summary}</p>}

        {hasDetails && (
          <details className="cv-entry-disclosure" open={item.initiallyExpanded}>
            <summary><span>Responsibilities and evidence</span><span aria-hidden="true">+</span></summary>
            <div className="cv-entry-expanded">
              {item.positions && <ul className="cv-positions">{item.positions.map((value) => <li key={value}>{value}</li>)}</ul>}
              {(item.responsibilities || item.impact) && (
                <div className="cv-entry-details">
                  {item.responsibilities && (
                    <div><h4>Responsibility</h4><ul>{item.responsibilities.map((value) => <li key={value}>{value}</li>)}</ul></div>
                  )}
                  {item.impact && (
                    <div><h4>Evidence</h4><ul>{item.impact.map((value) => <li key={value}>{value}</li>)}</ul></div>
                  )}
                </div>
              )}
              {item.recommendation && <blockquote>{item.recommendation}<cite>Recommendation from unit leadership</cite></blockquote>}
              {photos.length > 0 && (
                <div className="cv-entry-media">
                  {photos.map((evidence) => (
                    <figure key={evidence.src}>
                      <ResponsiveImage alt={evidence.alt} sizes="(max-width: 768px) 100vw, 38vw" src={evidence.src} />
                      {evidence.caption && <figcaption>{evidence.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
              {item.links && (
                <div className="cv-source-links">
                  {item.links.map((link) => <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label}</a>)}
                </div>
              )}
            </div>
          </details>
        )}
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell page-top cv-page">
        <header className="cv-hero">
          <div className="cv-hero-copy">
            <p className="eyebrow">Gard Laeskogen / Curriculum vitae</p>
            <h1>Cybernetics, robotics and operational experience.</h1>
            <p className="cv-hero-summary">
              Graduate student in Cybernetics and Robotics at NTNU and incoming graduate student at UC Berkeley for 2026-27. Three years of the integrated master&apos;s program are complete, with Autonomous Systems as the main profile.
            </p>
            <div className="cv-hero-actions">
              <Link className="button button-dark" href="/portfolio">View engineering work</Link>
              <Link className="button button-light" href="/request#documents">Request detailed CV</Link>
            </div>
          </div>

          <figure className="cv-portrait">
            <Image
              alt="Gard Laeskogen"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 38vw"
              src="/media/cv-portrait.jpg"
              unoptimized
            />
          </figure>

          <aside className="cv-snapshot" aria-label="CV overview">
            <div><span>Current</span><strong>MSc Cybernetics and Robotics/NTNU</strong></div>
            <div><span>2026-27</span><strong>Graduate study / UC Berkeley</strong></div>
            <div><span>Progress</span><strong>3 years</strong></div>
            <div><span>Main profile</span><strong>Autonomous Systems</strong></div>
          </aside>
        </header>

        <section className="cv-education" id="education" aria-labelledby="education-title">
          <header><p className="eyebrow">Education</p><h2 id="education-title">Academic direction</h2></header>
          <div className="cv-academic-content">
            <div className="cv-education-list">
              {education.map((item) => (
                <article key={item.institution}>
                  <div>
                    <time>{item.period}</time>
                    {item.status === "current" && <span>Current</span>}
                    {item.status === "upcoming" && <span>Upcoming</span>}
                  </div>
                  <h3>{item.qualification}</h3>
                  <p>{item.institution}</p>
                  <small>{item.detail ? `${item.detail} / ` : ""}{item.location}</small>
                </article>
              ))}
            </div>

            <details className="cv-coursework">
              <summary>
                <span>Completed coursework</span>
                <strong>23 courses across 5 academic areas</strong>
              </summary>
              <div className="cv-coursework-grid">
                {academicAreas.map((area) => (
                  <section key={area.label}>
                    <h3>{area.label}</h3>
                    <p>{area.courses.join(" / ")}</p>
                  </section>
                ))}
              </div>
            </details>

            <section className="cv-selected-courses" aria-labelledby="selected-courses-title">
              <h3 id="selected-courses-title">Selected courses</h3>
              <ul>
                {selectedCourses.map((course) => (
                  <li key={`${course.title}-${course.provider}`}>
                    <strong>{course.title}</strong>
                    <span> - {course.provider}{course.period ? ` / ${course.period}` : ""}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-selected-courses" aria-labelledby="hackathons-title">
              <h3 id="hackathons-title">Hackathons</h3>
              <ol>
                {hackathons.map((hackathon) => (
                  <li key={hackathon.title}>
                    <a href={hackathon.href} rel="noreferrer" target="_blank">
                      <strong>{hackathon.title}</strong>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </section>

        <section className="cv-section" id="experience" aria-labelledby="experience-title">
          <header className="cv-section-heading">
            <div><p className="eyebrow">Professional experience</p><h2 id="experience-title">Engineering and operations</h2></div>
            <p>Computer vision, UAV development, operational environments, and work in the family business.</p>
          </header>
          <div>{professionalExperience.map((item, index) => <ExperienceEntry index={index} item={item} key={`${item.role}-${item.period}`} />)}</div>
        </section>

        <section className="cv-section" id="leadership" aria-labelledby="leadership-title">
          <header className="cv-section-heading">
            <div><p className="eyebrow">Leadership and activities</p><h2 id="leadership-title">Responsibility beyond the role</h2></div>
          </header>
          <div>{leadershipAndActivities.map((item, index) => <ExperienceEntry index={index} item={item} key={`${item.role}-${item.period}`} />)}</div>
        </section>

        <section className="cv-capabilities" aria-labelledby="capabilities-title">
          <header><p className="eyebrow">Skills and interests</p><h2 id="capabilities-title">Working toolkit</h2></header>
          <div>
            {skillGroups.map((group) => <section key={group.label}><h3>{group.label}</h3><ul>{group.values.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>)}
            <section><h3>Languages</h3><ul>{languages.map((language) => <li key={language}>{language}</li>)}</ul></section>
          </div>
          <aside><p>Need the formal CV or an extended portfolio?</p><Link className="button button-dark" href="/request#documents">Request detailed documents</Link></aside>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
