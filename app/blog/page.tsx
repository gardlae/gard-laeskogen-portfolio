import { BlogCard } from "../BlogCard";
import { blogIntro, site, visiblePosts } from "../content";
import { buildPageMetadata } from "../metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  description: "Short notes by Gard Laeskogen on robotics, AI and engineering: one finding at a time, with the evidence and a picture or number that makes it stick.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="shell page-top">
      <header className="page-head measure">
        <h1>Blog</h1>
        <p>{blogIntro}</p>
      </header>

      <section className="section" aria-label="Posts">
        {visiblePosts.length > 0 ? (
          <ul className="blog-grid">
            {visiblePosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </ul>
        ) : (
          <p className="empty-note measure">
            No posts yet. The first one is being written; it will also appear on{" "}
            <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>.
          </p>
        )}
      </section>
    </main>
  );
}
