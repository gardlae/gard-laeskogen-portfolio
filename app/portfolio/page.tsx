import { buildPageMetadata } from "../metadata";
import { publicProjects } from "../content";
import { ProjectCard } from "../ProjectCard";

export const metadata = buildPageMetadata({
  title: "Portfolio",
  description: "Research, course projects and hardware builds by Gard Laeskogen: world models for drone control, visual-inertial odometry, UAV builds, distributed systems and analog control.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const current = publicProjects.filter((project) => project.current);
  const earlier = publicProjects.filter((project) => !project.current);

  return (
    <main className="shell page-top">
      <header className="page-head measure">
        <h1>Portfolio</h1>
        <p>Research, coursework and things I have built, at work, at school and in my free time.</p>
      </header>

      <section className="section" aria-labelledby="now-title">
        <div className="section-head"><h2 id="now-title">Now</h2></div>
        <ul className="project-grid">
          {current.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </ul>
      </section>

      <section className="section" aria-labelledby="earlier-title">
        <div className="section-head"><h2 id="earlier-title">Earlier projects</h2></div>
        <ul className="project-grid">
          {earlier.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </ul>
      </section>
    </main>
  );
}
