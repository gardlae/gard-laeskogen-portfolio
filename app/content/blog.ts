import { blogPosts } from "./blog-posts";

// Drafts (imported with --drafts) are for the local dev server only; every build drops them.
export const visiblePosts = process.env.NODE_ENV === "production"
  ? blogPosts.filter((post) => !post.draft)
  : blogPosts;

export function getPost(slug: string) {
  return visiblePosts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  const d = new Date(`${date}T12:00:00Z`);
  return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export const blogIntro =
  "Things I learn at Berkeley and elsewhere, one finding at a time: what I saw, the evidence behind it, and a picture or a number that makes it stick.";
