"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  category: string;
  duration: string;
  description: string;
  skills: string[];
  images: string[];
  visualLabel?: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "FPV Drone Builds",
    category: "UAV systems",
    duration: "Mar 2025 - Present",
    description:
      "Built and modified 20+ drone configurations, ranging from FPV quadcopters to fixed-wing systems, with variations in communication methods, payload capability, firmware, and operating environment. The work has focused mainly on adapting off-the-shelf products, including configurations for GNSS-denied and EW-disrupted conditions.",
    skills: [
      "Analog radio",
      "Software-defined radio",
      "Mechatronics",
      "Soldering",
      "Part sourcing",
      "Firmware configuration",
      "UAV prototyping",
      "Production-oriented design",
    ],
    images: [
      "/media/fpv-drone-build.jpg",
      "/media/fpv-drone-table.jpg",
      "/media/signal-box-exterior.jpg",
      "/media/signal-box-interior.jpg",
    ],
  },
  {
    title: "Analog Servo Controller",
    category: "Analog control",
    duration: "Jan 2023 - Mar 2023",
    description:
      "Built and tested an analog servo motor control system for a DC motor, including speed and position measurement, controller tuning, and frequency-response analysis.",
    skills: [
      "Analog electronics",
      "Signal conditioning",
      "Op-amp circuits",
      "PI control",
      "Position control",
      "Oscilloscope measurements",
      "Bode plot analysis",
    ],
    images: [
      "/media/servo-labeled-system.png",
      "/media/control-system-diagram.png",
      "/media/servo-breadboard-full.jpg",
      "/media/servo-schematic.png",
    ],
  },
  {
    title: "Distributed Elevator System",
    category: "Real-time systems",
    duration: "Jan 2026 - May 2026",
    description:
      "Built software for coordinating multiple elevators with distributed call handling, button light synchronization, door logic, network fault tolerance, and recovery from elevator failures without losing active calls.",
    skills: [
      "Real-time systems",
      "Distributed systems",
      "Networking",
      "Fault tolerance",
      "Concurrency",
      "State machines",
      "Failure handling",
    ],
    images: [],
    visualLabel: "Distributed control, networking, and fault recovery",
    links: [{ label: "GitHub", href: "https://github.com/vehoug/TTK4145.git" }],
  },
  {
    title: "TieUp Social Platform",
    category: "Startup prototype",
    duration: "Apr 2021 - Aug 2021",
    description:
      "Started building a social platform for organizing physical meetups as society reopened after COVID lockdowns. The project led to company registration, grant work, mentor conversations, an early prototype, and a shift toward software development.",
    skills: [
      "Company registration",
      "Grant applications",
      "Prototyping",
      "Mentor outreach",
      "Product development",
      "CS50: Introduction to Computer Science",
    ],
    images: [],
    visualLabel: "Startup prototype and company formation",
    links: [
      {
        label: "Demo",
        href: "https://marvelapp.com/prototype/14aj7hae/screen/78212187",
      },
    ],
  },
  {
    title: "Flipper Zero and Signal Testing",
    category: "Security and RF",
    duration: "Ongoing",
    description:
      "Explored portable tools and signal setups for understanding wireless systems, testing behavior, and building practical intuition around network disturbance and RF experimentation.",
    skills: [
      "Pen testing basics",
      "Wireless systems",
      "Signal testing",
      "RF tools",
      "Experiment design",
    ],
    images: ["/media/flipper-zero.jpg", "/media/signal-box-interior.jpg"],
  },
  {
    title: "Cutlery Sorting Machine",
    category: "Mechatronics concept",
    duration: "Prototype",
    description:
      "Concept and lab setup for a sorting mechanism, combining sensing, actuation, mechanical layout, and control thinking.",
    skills: ["Mechatronics", "Sensors", "Mechanical layout", "Prototyping"],
    images: ["/media/cutlery-sorting-machine.png"],
  },
];

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const counter = useMemo(
    () => `${String(activeIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`,
    [activeIndex],
  );

  function move(delta: number) {
    setActiveIndex((current) => (current + delta + projects.length) % projects.length);
  }

  return (
    <div className="portfolio-shell">
      <div className="portfolio-controls" aria-label="Project carousel controls">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6f5e]">
          {counter}
        </p>
        <div className="flex gap-2">
          <button
            aria-label="Previous project"
            className="carousel-button"
            onClick={() => move(-1)}
            type="button"
          >
            ‹
          </button>
          <button
            aria-label="Next project"
            className="carousel-button"
            onClick={() => move(1)}
            type="button"
          >
            ›
          </button>
        </div>
      </div>

      <div className="project-stage">
        <div className="project-copy">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c84b31]">
            {activeProject.category}
          </p>
          <h3 className="mt-4 text-4xl font-semibold leading-tight">
            {activeProject.title}
          </h3>
          <dl className="mt-6 grid gap-5">
            <div>
              <dt className="project-meta-label">Duration</dt>
              <dd className="mt-1 text-lg font-semibold">{activeProject.duration}</dd>
            </div>
            <div>
              <dt className="project-meta-label">Description</dt>
              <dd className="mt-2 leading-7 text-[#52615a]">{activeProject.description}</dd>
            </div>
            <div>
              <dt className="project-meta-label">Skills</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {activeProject.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          {activeProject.links ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {activeProject.links.map((link) => (
                <a className="text-link" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="project-media" aria-label={`${activeProject.title} images`}>
          {activeProject.images.length > 0 ? (
            activeProject.images.map((image, index) => (
              <div className="project-image-frame" key={image}>
                <Image
                  alt={`${activeProject.title} image ${index + 1}`}
                  className="h-full w-full object-cover"
                  height={900}
                  priority={activeIndex === 0 && index === 0}
                  src={image}
                  unoptimized
                  width={1200}
                />
              </div>
            ))
          ) : (
            <div className="project-image-frame project-visual-fallback">
              <p>{activeProject.category}</p>
              <h4>{activeProject.title}</h4>
              <span>{activeProject.visualLabel}</span>
            </div>
          )}
        </div>
      </div>

      <div className="project-tabs" aria-label="Choose project">
        {projects.map((project, index) => (
          <button
            aria-label={`Show ${project.title}`}
            aria-pressed={activeIndex === index}
            className="project-tab"
            key={project.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{project.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
