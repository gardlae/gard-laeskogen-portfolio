export type SiteConfig = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  yCombinator: string;
  location: string;
  headline: string;
  canonicalUrl: string;
  bookingUrl: string;
  storyVideo?: string;
  storyPoster: string;
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
    };

export type ProjectLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
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

export type SkillGroup = {
  label: string;
  values: string[];
};
