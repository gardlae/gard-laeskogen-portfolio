"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "./content";

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
          {activeProject.github || activeProject.demo ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {activeProject.github ? (
                <a className="text-link" href={activeProject.github}>
                  GitHub
                </a>
              ) : null}
              {activeProject.demo ? (
                <a className="text-link" href={activeProject.demo}>
                  Demo
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="project-media" aria-label={`${activeProject.title} images`}>
          {activeProject.video ? (
            <div className="project-image-frame">
              <video
                aria-label={`${activeProject.title} video`}
                controls
                muted
                playsInline
                preload="metadata"
                src={activeProject.video}
              />
            </div>
          ) : null}
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
