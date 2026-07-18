import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Gard Laeskogen",
  email: "gard@sundvolden.no",
  phone: "+47 466 34 552",
  linkedin: "https://www.linkedin.com/in/gard-laeskogen",
  github: "https://github.com/gardlae",
  yCombinator: "https://www.startupschool.org/cofounder-matching/settings",
  location: "California, USA",
  headline: "Student | M. Sc. Cybernetics and Robotics | NTNU",
  canonicalUrl: "https://www.gardlaeskogen.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  storyVideo: process.env.NEXT_PUBLIC_STORY_VIDEO || undefined,
  storyPoster: "/media/family-business-portrait.jpg",
};
export const recruiterOverview = {
  focus: "Cybernetics / UAV systems / leadership",
  summary:
    "I combine engineering work with practical execution, leadership, and experience from operational environments.",
  proof: [
    { value: "20+", label: "UAV configurations built or modified" },
    { value: "5+", label: "Leadership roles across engineering and organisations" },
    { value: "Startup", label: "Computer vision internship experience" },
  ],
};
