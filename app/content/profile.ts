import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Gard Laeskogen",
  // Matches the CV of 2026-11-18. The previous address was gard@sundvolden.no.
  email: "gardlae@berkeley.edu",
  linkedin: "https://www.linkedin.com/in/gard-laeskogen",
  github: "https://github.com/gardlae",
  yCombinator: "https://www.startupschool.org/cofounder-matching",
  location: "California, USA",
  headline: "Visiting graduate student at UC Berkeley · MSc Cybernetics and Robotics, NTNU",
  roles: [
    "Visiting graduate student, UC Berkeley",
    "MSc Cybernetics and Robotics, NTNU",
  ],
  canonicalUrl: "https://www.gardlaeskogen.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/gard-laeskogen-s4byyh/quick-chat",
};

// Homepage introduction. Draft wording for Gard to approve; facts follow the CV of 2026-11-18.
export const intro: string[] = [
  "I'm a visiting graduate student at UC Berkeley, doing independent research on learned world models for drone control. My question is what happens when a learned controller has to run on the small computer a drone actually carries, and how much that computer decides how well the drone flies. At home I study Cybernetics and Robotics at NTNU, with autonomous systems as my main profile.",
  "Before Berkeley I co-founded a UAV unit in the Norwegian Armed Forces and coordinated its R&D branch, working on technical development with Norwegian and international partners. Across work and free time I have built or modified more than 20 drone configurations. This summer I wrote computer-vision software for a counter-UAS startup in the United Kingdom.",
  "Until I was 14, my plan was to become the world's best cross-country skier. I still race: I won my class at the Trondheim Marathon in 2:51 and won the Berkeley Trail Adventure 50 km in August 2026. I grew up working in my family's hotel, Sundvolden, and later sat on its board.",
];

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
