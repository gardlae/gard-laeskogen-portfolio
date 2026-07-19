import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { allProjects, featuredProjects, publicProjects } from "../app/content/projects.ts";
import { leadershipAndActivities, professionalExperience } from "../app/content/experience.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors: string[] = [];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const slugs = new Set<string>();

function fail(message: string) {
  errors.push(message);
}

function checkMediaPath(src: string, projectTitle: string) {
  if (!src.startsWith("/media/")) {
    fail(`${projectTitle}: media path must begin with /media/: ${src}`);
    return;
  }

  if (!existsSync(join(root, "public", src))) {
    fail(`${projectTitle}: missing media file ${src}`);
  }
}

for (const project of allProjects) {
  if (slugs.has(project.slug)) fail(`Duplicate project slug: ${project.slug}`);
  slugs.add(project.slug);

  if (!slugPattern.test(project.slug)) fail(`${project.title}: invalid slug ${project.slug}`);
  if (!/\b(19|20)\d{2}\b/.test(project.duration)) fail(`${project.title}: duration needs a four-digit year`);
  if (project.visibility === "draft" && project.featured) fail(`${project.title}: drafts cannot be featured`);
  if (project.visibility === "public" && !(project.context || project.contribution || project.outcome)) {
    fail(`${project.title}: public project has no approved case-study text`);
  }

  const media = [project.cover, ...project.media];
  for (const item of media) {
    if (item.kind === "graphic") continue;
    checkMediaPath(item.src, project.title);
    if (item.kind === "video" && item.poster) checkMediaPath(item.poster, project.title);

    if (project.visibility === "public" && item.kind === "image") {
      const stem = item.src.slice(0, item.src.lastIndexOf("."));
      for (const width of [640, 768, 1280]) {
        for (const format of ["avif", "webp"]) {
          checkMediaPath(`${stem}-${width}.${format}`, project.title);
        }
      }
    }
  }

  for (const link of project.links ?? []) {
    try {
      new URL(link.href);
    } catch {
      fail(`${project.title}: invalid external link ${link.href}`);
    }
  }
}

for (const item of [...professionalExperience, ...leadershipAndActivities]) {
  if (!/\b(19|20)\d{2}\b/.test(item.period)) {
    fail(`${item.role}: experience period needs a four-digit year`);
  }

  for (const evidence of item.evidence) {
    checkMediaPath(evidence.src, `${item.role} experience`);
  }

  for (const link of item.links ?? []) {
    try {
      new URL(link.href);
    } catch {
      fail(`${item.role}: invalid evidence link ${link.href}`);
    }
  }
}

if (publicProjects.some((project) => project.visibility !== "public")) {
  fail("A draft project leaked into publicProjects");
}

if (featuredProjects.length !== 3) {
  fail(`Expected 3 featured projects, found ${featuredProjects.length}`);
}

const knownRoutes = new Set(["/", "/portfolio", "/cv", "/about", "/request", "/sports", "/philosophy"]);
for (const project of publicProjects) knownRoutes.add(`/projects/${project.slug}`);

const sourceFiles = [
  "app/page.tsx",
  "app/SiteHeader.tsx",
  "app/SiteFooter.tsx",
  "app/portfolio/page.tsx",
  "app/cv/page.tsx",
  "app/about/page.tsx",
  "app/request/page.tsx",
];

for (const sourceFile of sourceFiles) {
  const source = readFileSync(join(root, sourceFile), "utf8");
  for (const match of source.matchAll(/href=["'](\/[^"'#?]*)/g)) {
    if (!knownRoutes.has(match[1])) fail(`${sourceFile}: unknown internal route ${match[1]}`);
  }
}

if (errors.length > 0) {
  console.error("Content validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Content validation passed: ${publicProjects.length} public, ${allProjects.length - publicProjects.length} draft.`);
