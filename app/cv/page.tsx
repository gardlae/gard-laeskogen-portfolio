import { buildPageMetadata } from "../metadata";
import {
  academicAreas,
  cvSkills,
  education,
  hackathons,
  leadershipAndActivities,
  professionalExperience,
  research,
  site,
  sportsAchievements,
  type ExperienceItem,
} from "../content";

export const metadata = buildPageMetadata({
  title: "CV",
  description: "CV of Gard Laeskogen: education at NTNU and UC Berkeley, research on world models for drone control, UAV R&D, computer vision, leadership and athletics.",
  path: "/cv",
});

function ExperienceRow({ item }: { item: ExperienceItem }) {
  const bullets = [...(item.responsibilities ?? []), ...(item.impact ?? [])];
  return (
    <div className="cv-row">
      <p className="meta">{item.period}</p>
      <div>
        <h3>{item.role}</h3>
        <p className="org">{item.place}{item.location ? `, ${item.location}` : ""}</p>
        {item.summary && <p>{item.summary}</p>}
        {bullets.length > 0 && <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        {item.recommendation && <blockquote>{item.recommendation}</blockquote>}
        {item.links && item.links.length > 0 && (
          <p className="links">
            {item.links.map((link) => (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label}</a>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CvPage() {
  const athletics = [...sportsAchievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <main className="shell page-top">
      <div className="cv">
        <header className="page-head">
          <h1>CV</h1>
          <p>{site.roles.join(" · ")}</p>
          <ul className="contact-links" aria-label="CV downloads and profiles">
            <li><a href="/Gard-Laeskogen-CV.pdf" rel="noreferrer" target="_blank">Download PDF</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a></li>
            <li><a href={site.github} rel="noreferrer" target="_blank">GitHub</a></li>
          </ul>
        </header>

        <section className="cv-section" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          {education.map((item) => (
            <div className="cv-row" key={item.institution}>
              <p className="meta">{item.period}</p>
              <div>
                <h3>{item.qualification}</h3>
                <p className="org">{item.institution}, {item.location}</p>
                {item.detail && <p>{item.detail}</p>}
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="research-title">
          <h2 id="research-title">Research</h2>
          {research.map((item) => (
            <div className="cv-row" key={item.title}>
              <p className="meta">{item.period}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="org">{item.place} · independent research · {item.credits}</p>
                <p>{item.summary}</p>
                {item.href && <p className="links"><a href={item.href}>Read more</a></p>}
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Professional experience</h2>
          {professionalExperience.map((item) => <ExperienceRow item={item} key={`${item.role}-${item.period}`} />)}
        </section>

        <section className="cv-section" aria-labelledby="leadership-title">
          <h2 id="leadership-title">Leadership and activities</h2>
          {leadershipAndActivities.map((item) => <ExperienceRow item={item} key={`${item.role}-${item.period}`} />)}
          {hackathons.map((item) => (
            <div className="cv-row" key={item.title}>
              <p className="meta">2025</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="links"><a href={item.href} rel="noreferrer" target="_blank">Team report (PDF)</a></p>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" id="athletics" aria-labelledby="athletics-title">
          <h2 id="athletics-title">Athletics</h2>
          {athletics.map((item) => (
            <div className="cv-row" key={`${item.year}-${item.event}`}>
              <p className="meta">{item.year}</p>
              <div>
                <h3>
                  {item.href
                    ? <a href={item.href} rel="noreferrer" target="_blank">{item.event}</a>
                    : item.event}
                </h3>
                <p className="org">{item.result}{item.category ? ` · ${item.category}` : ""}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="skills-title">
          <h2 id="skills-title">Skills</h2>
          <dl className="skills">
            {cvSkills.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.values.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="cv-section" aria-labelledby="courses-title">
          <h2 id="courses-title">Selected coursework at NTNU</h2>
          <dl className="skills">
            {academicAreas.map((area) => (
              <div key={area.label}>
                <dt>{area.label}</dt>
                <dd>{area.courses.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
}
