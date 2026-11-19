import Link from "next/link";
import { formatDate, type BlogPost } from "./content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <li className="blog-card">
      {post.graphic && (
        <div className="blog-thumb">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={post.graphic.alt} height={post.graphic.height} loading="lazy" src={post.graphic.src} width={post.graphic.width} />
        </div>
      )}
      <p className="meta">{formatDate(post.date)}{post.draft ? " · draft, local only" : ""}</p>
      <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
      <p className="clamp">{post.summary}</p>
    </li>
  );
}
