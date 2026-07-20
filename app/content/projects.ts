import type { PortfolioProject } from "./types";

export const allProjects: PortfolioProject[] = [
  {
    slug: "fpv-drone-builds",
    title: "FPV-drone builds",
    category: "Work and free time",
    duration: "Mar 2025 - Dec 2025",
    visibility: "public",
    featured: true,
    contribution:
      "Built and modified 20+ drone configurations, ranging from FPV quadcopters to fixed-wing systems, with variations in communication methods, payload capability, firmware, and operating environment. The work has focused mainly on adapting off-the-shelf products, including configurations for GNSS-denied and EW-disrupted conditions.",
    constraints:
      "I cannot share specific technical information about the individual projects at this point.",
    methods: [
      "Analog radio",
      "software-defined radio",
      "mechatronics",
      "soldering",
      "part sourcing",
      "firmware",
      "UAV design",
      "prototyping",
      "production-oriented design",
    ],
    cover: {
      kind: "image",
      src: "/media/fpv-drone-flight.jpg",
      alt: "FPV drone flying outdoors",
    },
    media: [
      {
        kind: "video",
        src: "/media/story-clip-2.mp4",
        poster: "/media/story-clip-2-poster.jpg",
        alt: "FPV drone project video",
      },
    ],
  },
  {
    slug: "analog-servo-controller",
    title: "Analog servo controller",
    category: "School",
    duration: "Jan 2023 - Mar 2023",
    visibility: "public",
    featured: false,
    contribution:
      "Built and tested an analog servo motor control system for a DC motor, including speed and position measurement, controller tuning, and frequency-response analysis.",
    methods: [
      "Analog electronics",
      "signal conditioning",
      "op-amp circuits",
      "PI control",
      "position control",
      "oscilloscope measurements",
      "Bode plot analysis",
    ],
    cover: {
      kind: "image",
      src: "/media/servo-breadboard-full.jpg",
      alt: "Full analog servo controller breadboard",
    },
    media: [
      {
        kind: "image",
        src: "/media/servo-labeled-system.png",
        alt: "Analog servo motor system with English labels",
      },
      {
        kind: "image",
        src: "/media/control-system-diagram.png",
        alt: "Analog servo control system block diagram",
      },
      {
        kind: "image",
        src: "/media/servo-schematic.png",
        alt: "Analog servo controller schematic",
      },
    ],
  },
  {
    slug: "tieup-social-platform",
    title: "Social platform (TieUp)",
    category: "Free time",
    duration: "Apr 2021 - Aug 2021 (second year of high school)",
    visibility: "public",
    featured: true,
    context:
      "Started building a social platform to facilitate physical meetups, such as social training and events, as the COVID lockdown was coming to an end. I registered the company, built an early prototype, and spoke with mentors, but soon realized I did not yet have the software skills needed to build it.\n\nThat knowledge gap motivated me to start programming. I began with Harvard's online CS50: Introduction to Computer Science course and changed subjects at school to pursue this direction.",
    methods: [
      "Company registration",
      "grant applications",
      "prototyping",
      "mentor outreach",
      "early-stage product development",
    ],
    cover: {
      kind: "image",
      src: "/media/tieup-first-sketch.png",
      alt: "Early hand-drawn TieUp login and sign-up interface",
    },
    media: [],
    links: [
      {
        label: "Prototype",
        href: "https://marvelapp.com/prototype/14aj7hae/screen/78212187",
      },
    ],
  },
  {
    slug: "distributed-elevator-system",
    title: "Distributed elevator system",
    category: "School",
    duration: "Jan 2026 - May 2026",
    visibility: "public",
    featured: true,
    contribution:
      "Built software for coordinating multiple elevators, with distributed call handling.",
    methods: [
      "Real-time systems",
      "distributed systems",
      "networking",
      "fault tolerance",
      "concurrency",
      "state machines",
    ],
    cover: {
      kind: "image",
      src: "/media/distributed-elevator-system.jpg",
      alt: "Laboratory elevator rigs used for distributed control testing",
    },
    media: [],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/vehoug/TTK4145.git",
      },
    ],
  },
  {
    slug: "hospitality-investment-analysis",
    title: "Hospitality investment analysis",
    category: "Free time",
    duration: "Dec 2025 - Mar 2026",
    visibility: "public",
    featured: false,
    contribution:
      "Built a data-driven analysis to evaluate the impact of a specific investment in our family business. The project combined historical room-night data, group booking demand, accounting figures, construction cost assumptions, live competitor pricing, and financial benchmarks to estimate capacity effects, revenue upside, and profitability scenarios.",
    constraints:
      "The data used is proprietary, so I cannot share the repository.",
    methods: ["data analysis", "financial modelling"],
    cover: {
      kind: "graphic",
      label: "Hospitality investment analysis",
      detail: "No public image",
    },
    media: [],
    links: [
      {
        label: "Sundvolden Hotel",
        href: "https://sundvolden.no/?gad_source=1&gad_campaignid=11416463408&gbraid=0AAAAADoYwh_IsvNoIGrD1_BhEz6ykjyNw&gclid=CjwKCAjwyOzSBhBTEiwAmxvJ-r9HoEJGyJFqLg_pVHdk3OYVg2v-HwrKolfAVO-XSsxgReA5NGQFsxoC5nkQAvD_BwE",
      },
    ],
  },
  {
    slug: "flipper-zero-exploration",
    title: "Flipper Zero exploration",
    category: "Free time",
    duration: "Aug 2022 - Sep 2023",
    visibility: "public",
    featured: false,
    contribution:
      "Bought and set up a Flipper Zero with a Wi-Fi development board. Experimented with infrared remote control, RFID, Wi-Fi tooling, and Bluetooth protocol exploration.",
    methods: [
      "embedded setup",
      "wireless protocol fundamentals",
      "RF security awareness",
    ],
    cover: {
      kind: "image",
      src: "/media/flipper-zero.jpg",
      alt: "Flipper Zero device",
    },
    media: [],
  },
  {
    slug: "cutlery-sorting-machine",
    title: "Cutlery sorting machine - coming soon",
    category: "Free time",
    duration: "Jul 2026 - Present",
    visibility: "public",
    featured: false,
    context: "Coming soon.",
    methods: ["mechatronics", "sensors", "mechanical layout", "prototyping"],
    cover: {
      kind: "graphic",
      label: "Coming soon",
      detail: "Cutlery sorting machine",
    },
    media: [],
  },
  {
    slug: "sundvolden-hotel-project",
    title: "Sundvolden Hotel project",
    category: "Draft",
    duration: "Started at age 13",
    visibility: "draft",
    featured: false,
    context:
      "I started working at Sundvolden Hotel when I was 13. The rest of this story needs Gard's approval before publication.",
    methods: [],
    cover: {
      kind: "graphic",
      label: "Draft",
      detail: "Sundvolden Hotel project",
    },
    media: [],
  },
];

export const publicProjects = allProjects.filter(
  (project) => project.visibility === "public",
);

export const featuredProjects = publicProjects.filter(
  (project) => project.featured,
);

export function getPublicProject(slug: string) {
  return publicProjects.find((project) => project.slug === slug);
}
