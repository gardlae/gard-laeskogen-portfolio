import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  education,
  featuredSkills,
  languages,
  leadershipAndActivities,
  professionalExperience,
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
          {item.evidence.find((evidence) => evidence.presentation === "mark") && (
            <Image
              alt={item.evidence.find((evidence) => evidence.presentation === "mark")!.alt}
              className="cv-entry-mark"
              height={72}
              src={item.evidence.find((evidence) => evidence.presentation === "mark")!.src}
              unoptimized
              width={72}
            />
          )}
        </div>

        {item.summary && <p className="cv-entry-summary">{item.summary}</p>}
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
      </div>

      {item.evidence.find((evidence) => evidence.presentation === "photo") && (
        <div className="cv-entry-media">
          {item.evidence.filter((evidence) => evidence.presentation === "photo").map((evidence) => (
            <figure key={evidence.src}>
              <ResponsiveImage alt={evidence.alt} sizes="(max-width: 768px) 100vw, 31vw" src={evidence.src} />
              {evidence.caption && <figcaption>{evidence.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
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
            <p className="eyebrow">Curriculum vitae / 2026</p>
            <h1>Engineering shaped by operational responsibility.</h1>
            <p className="cv-hero-summary">
              Master’s student in Cybernetics and Robotics with hands-on experience from the Norwegian Special Operations Command. Experience includes leadership, problem-solving under pressure, and strategic communication.
            </p>
            <nav className="cv-jump-links" aria-label="CV sections">
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#leadership">Leadership</a>
            </nav>
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

          <aside className="cv-contact-rail">
            <div><span>Based in</span><strong>{site.location}</strong></div>
            <div><span>Focus</span><strong>Cybernetics / Robotics / UAV systems</strong></div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
            <div className="cv-hero-actions">
              <Link className="button button-dark" href="/portfolio">View engineering work</Link>
              <Link className="button button-light" href="/request#documents">Request detailed CV</Link>
            </div>
          </aside>
        </header>

        <section className="cv-education" id="education" aria-labelledby="education-title">
          <header><p className="eyebrow">Education</p><h2 id="education-title">Academic direction</h2></header>
          <div className="cv-education-list">
            {education.map((item) => (
              <article key={item.institution}>
                <div><time>{item.period}</time>{item.status === "upcoming" && <span>Upcoming</span>}</div>
                <h3>{item.qualification}</h3>
                <p>{item.institution}</p>
                <small>{item.detail ? `${item.detail} / ` : ""}{item.location}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section" id="experience" aria-labelledby="experience-title">
          <header className="cv-section-heading">
            <div><p className="eyebrow">Professional experience</p><h2 id="experience-title">Engineering and operations</h2></div>
            <p>Selected work across computer vision, UAV development, operational environments, and a family business.</p>
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
            <section><h3>Programming and tools</h3><ul>{featuredSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>
            <section><h3>Languages</h3><ul>{languages.map((language) => <li key={language}>{language}</li>)}</ul></section>
          </div>
          <aside><p>Need the formal CV or an extended portfolio?</p><Link className="button button-dark" href="/request#documents">Request detailed documents</Link></aside>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
