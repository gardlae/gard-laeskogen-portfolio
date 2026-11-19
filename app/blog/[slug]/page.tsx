import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, site, visiblePosts } from "../../content";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return visiblePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  const url = `${site.canonicalUrl}/blog/${post.slug}`;
  const image = post.graphic?.src ?? "/social-card.jpg";
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: post.title, description: post.summary, images: [image] },
    twitter: { card: "summary_large_image", title: post.title, description: post.summary, images: [image] },
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    url: `${site.canonicalUrl}/blog/${post.slug}`,
    author: { "@type": "Person", name: site.name, url: site.canonicalUrl },
  };

  return (
    <main className="shell page-top">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <article className="measure blog-post">
        <Link className="back-link" href="/blog">← Blog</Link>
        <p className="meta">{formatDate(post.date)}{post.draft ? " · draft, local only" : ""}</p>
        <h1>{post.title}</h1>
        {post.graphic && (
          <figure className="blog-graphic">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={post.graphic.alt} height={post.graphic.height} src={post.graphic.src} width={post.graphic.width} />
          </figure>
        )}
        <div className="blog-body">
          {post.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
        </div>
        {(post.linkedin || post.carousel) && (
          <p className="links blog-links">
            {post.linkedin && <a href={post.linkedin} rel="noreferrer" target="_blank">Discuss on LinkedIn ↗</a>}
            {post.carousel && <a href={post.carousel} rel="noreferrer" target="_blank">Carousel (PDF)</a>}
          </p>
        )}
      </article>
    </main>
  );
}
