import type { MetadataRoute } from "next";
import { publicProjects, site } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-15");
  const pages = [""];

  return [
    ...pages.map((path, index) => ({
      url: `${site.canonicalUrl}${path}`,
      lastModified,
      changeFrequency: index === 0 ? "monthly" as const : "yearly" as const,
      priority: index === 0 ? 1 : path === "/portfolio" ? 0.9 : 0.7,
    })),
    ...publicProjects.map((project) => ({
      url: `${site.canonicalUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
