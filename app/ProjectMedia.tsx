import type { ProjectMedia } from "./content";
import { ResponsiveImage } from "./ResponsiveImage";

type ProjectMediaViewProps = {
  media: ProjectMedia;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectMediaView({
  media,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ProjectMediaViewProps) {
  if (media.kind === "graphic") {
    return (
      <div
        aria-label={[media.label, media.detail].filter(Boolean).join(", ")}
        className={`project-graphic ${className}`}
        role="img"
      >
        <span>Project</span>
        <strong>{media.label}</strong>
        {media.detail && <small>{media.detail}</small>}
        <i aria-hidden="true" />
      </div>
    );
  }

  if (media.kind === "video") {
    return (
      <figure className={`project-media video-media ${className}`}>
        <video
          aria-label={media.alt}
          controls
          playsInline
          poster={media.poster}
          preload="none"
        >
          <source src={media.src} type="video/mp4" />
        </video>
        {media.caption && <figcaption>{media.caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className={`project-media image-media ${className}`}>
      <ResponsiveImage
        alt={media.alt}
        priority={priority}
        sizes={sizes}
        src={media.src}
      />
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}
