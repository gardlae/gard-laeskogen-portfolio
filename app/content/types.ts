export type SiteConfig = {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  yCombinator: string;
  location: string;
  headline: string;
  roles: string[];
  /** Portrait for the homepage, under public/media (with -640/-768/-1280 variants). Hidden when unset. */
  portrait?: { src: string; alt: string };
  canonicalUrl: string;
  bookingUrl: string;
};
export type ProjectVisibility = "public" | "draft";

export type ProjectMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      kind: "video";
      src: string;
      alt: string;
      poster?: string;
      caption?: string;
    }
  | {
      kind: "graphic";
      label: string;
      detail?: string;
      /** A small line drawing behind the label. */
      motif?: "latency" | "trajectory";
    };

export type ProjectLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  /** Plain-language line under the title. */
  subtitle?: string;
  category: string;
  duration: string;
  visibility: ProjectVisibility;
  featured: boolean;
  context?: string;
  role?: string;
  challenge?: string;
  contribution?: string;
  outcome?: string;
  constraints?: string;
  methods: string[];
  cover: ProjectMedia;
  media: ProjectMedia[];
  links?: ProjectLink[];
};

export type ExperienceEvidence = {
  src: string;
  alt: string;
  caption?: string;
  presentation?: "photo" | "mark";
};

export type ExperienceLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  place: string;
  location?: string;
  summary?: string;
  positions?: string[];
  responsibilities?: string[];
  impact?: string[];
  recommendation?: string;
  initiallyExpanded?: boolean;
  links?: ExperienceLink[];
  evidence: ExperienceEvidence[];
};

export type EducationItem = {
  period: string;
  institution: string;
  qualification: string;
  location: string;
  status?: "current" | "upcoming";
  detail?: string;
};

export type AcademicArea = {
  label: string;
  courses: string[];
};

export type SelectedCourse = {
  title: string;
  provider: string;
  period?: string;
};

export type Hackathon = {
  title: string;
  href: string;
  summary: string;
};

export type SkillGroup = {
  label: string;
  values: string[];
};

export type ResearchItem = {
  period: string;
  place: string;
  advisor: string;
  title: string;
  summary: string;
  href?: `/${string}`;
  /** Homepage card: project name, plain-language question, what is being done, and where it stands. */
  name?: string;
  question?: string;
  plain?: string;
  status?: string;
};

export type BlogPost = {
  slug: string;
  /** The Storytelling post ID, e.g. 001-rank-right-not-right. */
  id: string;
  title: string;
  /** YYYY-MM-DD: published, else approved. */
  date: string;
  status: string;
  summary: string;
  paragraphs: string[];
  graphic?: { src: string; alt: string; width: number; height: number };
  carousel?: string;
  linkedin?: string;
  /** Imported with --drafts for a local look; never shown in a production build. */
  draft?: boolean;
};

export type SportsAchievement = {
  year: string;
  sport: string;
  result: string;
  event: string;
  category?: string;
  href?: string;
};
