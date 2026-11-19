import type { MetadataRoute } from "next";
import { publicProjects, site } from "./content";
import { researchPage } from "./research/research-page";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-18");
  const pages = ["", "/portfolio", "/cv", ...(researchPage.publish ? ["/research"] : [])];

  return [
    ...pages.map((path, index) => ({
      url: `${site.canonicalUrl}${path}`,
      lastModified,
      changeFrequency: index === 0 ? "monthly" as const : "yearly" as const,
      priority: index === 0 ? 1 : path === "/research" ? 0.9 : 0.8,
    })),
    ...publicProjects.map((project) => ({
      url: `${site.canonicalUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
