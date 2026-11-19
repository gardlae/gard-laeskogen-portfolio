import { buildPageMetadata } from "../metadata";
import { publicProjects } from "../content";
import { ProjectCard } from "../ProjectCard";

export const metadata = buildPageMetadata({
  title: "Portfolio",
  description: "Projects by Gard Laeskogen: visual-inertial odometry on a compute budget, UAV builds, distributed systems, analog control and more.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main className="shell page-top">
      <header className="page-head measure">
        <h1>Portfolio</h1>
        <p>
          Things I have built at school, at work and in my free time. What I am exploring at Berkeley has its own
          page: <a href="/research">Exploration</a>.
        </p>
      </header>

      <section className="section" aria-label="Projects">
        <ul className="project-grid">
          {publicProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </ul>
      </section>
    </main>
  );
}
