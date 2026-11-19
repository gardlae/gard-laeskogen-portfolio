import type { ProjectMedia } from "./content";
import { ResponsiveImage } from "./ResponsiveImage";

type ProjectMediaViewProps = {
  media: ProjectMedia;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Planning time per control step against the deadline (dashed); late steps in warm. Illustrative, not data.
const LATENCY_BARS = [52, 60, 48, 57, 63, 50, 92, 58, 47, 55, 61, 84, 95, 56, 49, 59, 53, 62, 50, 88, 57, 51];

export function LatencyMotif() {
  return (
    <svg aria-hidden="true" className="motif" viewBox="0 0 220 110">
      {LATENCY_BARS.map((height, i) => (
        <rect
          className={height > 75 ? "motif-late" : "motif-bar"}
          height={height}
          key={i}
          rx="1.5"
          width="6.5"
          x={4 + i * 9.8}
          y={106 - height}
        />
      ))}
      <line className="motif-deadline" x1="0" x2="220" y1="31" y2="31" />
    </svg>
  );
}

// A true flight path (dashed) and an estimate that drifts from it.
function TrajectoryMotif() {
  return (
    <svg aria-hidden="true" className="motif" viewBox="0 0 220 110">
      <path
        className="motif-truth"
        d="M10 90 C 40 20, 80 20, 100 55 S 160 100, 185 50 S 205 15, 212 20"
      />
      <path
        className="motif-estimate"
        d="M10 90 C 42 24, 84 26, 104 62 S 166 108, 192 62 S 214 30, 218 38"
      />
      {[[10, 90], [56, 34], [104, 62], [150, 92], [192, 62]].map(([x, y]) => (
        <circle className="motif-dot" cx={x} cy={y} key={x} r="3" />
      ))}
    </svg>
  );
}

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
        {media.motif === "latency" && <LatencyMotif />}
        {media.motif === "trajectory" && <TrajectoryMotif />}
        <strong>{media.label}</strong>
        {media.detail && <small>{media.detail}</small>}
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
