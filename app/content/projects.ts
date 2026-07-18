import type { PortfolioProject } from "./types";

export const allProjects: PortfolioProject[] = [
  {
    slug: "fpv-drone-builds",
    title: "FPV-drone builds",
    category: "Work and free time",
    duration: "Mar 2025 - Des 2025",
    visibility: "public",
    featured: true,
    contribution:
      "Built and modified 20+ drone configurations, ranging from FPV quadcopters to fixed-wing systems, with variations in communication methods, payload capability, firmware, and operating environment. The work has focused mainly on adapting off-the-shelf products, including configurations for GNSS-denied and EW-disrupted conditions.",
    constraints:
      "Specific technical information around the different project are information I cannot share at this point.",
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
      {
        kind: "image",
        src: "/media/signal-box-exterior.jpg",
        alt: "Portable communications equipment enclosure",
      },
      {
        kind: "image",
        src: "/media/signal-box-interior.jpg",
        alt: "Electronics inside a portable communications enclosure",
      },
    ],
  },
  {
    slug: "distributed-elevator-system",
    title: "Distributed elevator system",
    category: "School",
    duration: "Jan 2026-May 2026",
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
    slug: "analog-servo-controller",
    title: "Analog servo controller",
    category: "School",
    duration: "Jan 2023-Mar 2023",
    visibility: "public",
    featured: true,
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
      src: "/media/servo-labeled-system.png",
      alt: "Analog servo motor system with English labels",
    },
    media: [
      {
        kind: "image",
        src: "/media/control-system-diagram.png",
        alt: "Analog servo control system block diagram",
      },
      {
        kind: "image",
        src: "/media/servo-breadboard-full.jpg",
        alt: "Full analog servo controller breadboard",
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
    duration: "Apr 2021-Aug 2021 (2. Year high-school)",
    visibility: "public",
    featured: false,
    context:
      "Started building a social platform, to facilitate physical meetups like social training and events when the lockdown was coming to an end during COVID. I got the company registered built an early prototype, spoke with mentors but soon realized I didn’t have the software skillset needed to build this.\n\nThis lack of knowledge motivated me to start getting into software programming. I started by taking the CS50: Introduction to Computer Science -online Harvard course and changed courses in school to pursuit this direction.",
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
    slug: "hospitality-investment-analysis",
    title: "Hospitality Investment analysis",
    category: "Free time",
    duration: "Des 2025 - Mar 2026",
    visibility: "public",
    featured: false,
    contribution:
      "Built data/drive analysis to evaluate impact of specific investment at our family business. The project combined historical room-night data, group booking demand, accounting figures, construction cost assumptions, live competitor pricing, and financial benchmarks to estimate capacity effects, revenue upside, and profitability scenarios.",
    constraints:
      "Data used for development is proprietary property so cannot share repo.",
    methods: ["data analysis", "financial modelling"],
    cover: {
      kind: "image",
      src: "/media/family-business.jpg",
      alt: "Gard Laeskogen with family outside Sundvolden Hotel",
    },
    media: [],
  },
  {
    slug: "flipper-zero-exploration",
    title: "Flipper-zero exploration",
    category: "Free time",
    duration: "Aug 2022-Sep 2023",
    visibility: "draft",
    featured: false,
    contribution:
      "Bought and set up flipper-zero with WiFi-Devboard. Experimented with different use cases like: TV controller, RFID card, WiFi disturbance, Disturbance of Bluetooth units",
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
    title: "Cutlery sorting machine -coming soon",
    category: "Free time",
    duration: "Jul 2026 - Present",
    visibility: "draft",
    featured: false,
    context: "Coming soon.",
    methods: ["mechatronics", "sensors", "mechanical layout", "prototyping"],
    cover: {
      kind: "image",
      src: "/media/cutlery-sorting-machine.png",
      alt: "Cutlery sorting machine prototype",
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
