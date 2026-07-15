export const site = {
  name: "Gard Laeskogen",
  email: "gard.lae@outlook.com",
  linkedin: "https://www.linkedin.com/in/gard-laeskogen-0a246527a/",
  location: "Trondheim, Norway",
  headline: "Student | M. Sc. Cybernetics and Robotics | NTNU",
  intro:
    "Builder across software, electronics, drones, investments, sports, and operations.",
  note:
    "Portfolio, CV, sports, investment notes, and the why behind how I spend my time.",
  storyTitle: "Video and story",
  storyIntro:
    "Short clips from projects and moments I want to use in the story.",
  portfolioTitle: "Portfolio",
  portfolioIntro: "Duration, context, description, skills, media, and links.",
  cvTitle: "CV",
  cvIntro: "Experience built through responsibility and practical work.",
  moreTitle: "More",
  moreIntro: "The parts behind the work.",
  contactTitle: "Contact",
  contactIntro: "Reach out by email.",
};

// Recruiter overview: keep this short enough to understand in one screen.
export const recruiterOverview = {
  focus: "Cybernetics / UAV systems / leadership",
  summary:
    "I combine engineering work with practical execution, leadership, and experience from operational environments.",
  proof: [
    { value: "20+", label: "UAV configurations built or modified" },
    { value: "3", label: "Leadership roles in Contactor NTNU" },
    { value: "2", label: "Current board roles" },
  ],
};

export const videos = [
  { title: "Story clip 01", src: "/media/story-clip-1.mp4" },
  { title: "Story clip 02", src: "/media/story-clip-2.mp4" },
  { title: "Story clip 03", src: "/media/story-clip-3.mp4" },
  { title: "Story clip 04", src: "/media/story-clip-4.mp4" },
];

export const homeImages = [
  {
    label: "Family business",
    src: "/media/family-business.jpg",
    alt: "Gard Laeskogen with family outside Sundvolden Hotel",
  },
  {
    label: "UAV systems",
    src: "/media/fpv-drone-build.jpg",
    alt: "FPV drone build",
  },
  {
    label: "Analog electronics",
    src: "/media/servo-breadboard-full.jpg",
    alt: "Analog servo controller breadboard",
  },
  {
    label: "Field experience",
    src: "/media/military-field.jpg",
    alt: "Field experience in the Norwegian Armed Forces",
  },
  {
    label: "Student work",
    src: "/media/profile-contactor.jpg",
    alt: "Gard Laeskogen portrait in Contactor NTNU sweater",
  },
];

type CvItem = {
  period: string;
  role: string;
  place: string;
  image: string;
  detail: string;
  positions: string[];
  secondaryImage?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export const cvItems: CvItem[] = [
  {
    period: "May 2016 - Present",
    role: "Sundvolden Hotel",
    place: "Family business",
    image: "/media/family-business.jpg",
    detail:
      "Norway's oldest family hotel, running since 1648.",
    positions: [
      "Banquet Waiter | May 2016 - Sep 2023",
      "Maintenance Specialist | Apr 2017 - Aug 2023",
      "Member, Board of Directors | Aug 2025 - Present",
    ],
  },
  {
    period: "Jul 2022 - Jul 2023",
    role: "Norwegian Armed Forces",
    place: "Military service",
    image: "/media/military-field.jpg",
    detail:
      "One year of military service in the Norwegian Armed Forces.",
    positions: ["Military service | Jul 2022 - Jul 2023"],
  },
  {
    period: "Aug 2023 - Aug 2025",
    role: "Contactor NTNU",
    place: "Technical student organization at NTNU",
    image: "/media/contactor-ntnu-team.jpeg",
    detail:
      "Providing long-term relationships for companies relevant to Omega Linjeforening. Organizing company presentations, stands and workshops, and taking responsibility for major projects and collaborations involving Contactor NTNU.",
    positions: [
      "Company Contact | Aug 2023 - Jan 2024",
      "Deputy Leader | Jan 2024 - Jun 2024",
      "Leader | Jun 2024 - Aug 2025",
    ],
    secondaryImage: {
      src: "/media/contactor-ntnu-leadership.jpeg",
      alt: "Gard Laeskogen with the deputy leader of Contactor NTNU",
      caption: "Leadership team, Contactor NTNU",
    },
  },
  {
    period: "Feb 2024 - Present",
    role: "Board member",
    place: "NFEA - Norwegian Association for Electrical and Automation Engineering",
    image: "/media/servo-breadboard-full.jpg",
    detail:
      "A politically independent, non-profit membership organization focused on electrical engineering and automation, representing around 270 member companies.",
    positions: ["Member, Board of Directors | Feb 2024 - Present"],
  },
  {
    period: "Apr 2025 - Dec 2025",
    role: "UAV Engineer",
    place: "Norwegian Armed Forces",
    image: "/media/fpv-drone-build.jpg",
    detail:
      "Coordinating an R&D department, instructing and mentoring, and working as a specialist in technical development.",
    positions: ["UAV Engineer | Apr 2025 - Dec 2025"],
  },
];

export const education = [
  {
    period: "Aug 2023 - Jun 2028",
    institution: "Norwegian University of Science and Technology (NTNU)",
    qualification: "M. Sc. Cybernetics and Robotics",
  },
  {
    period: "May 2024 - Aug 2024",
    institution: "Jönköping International Business School",
    qualification: "Family Business for Next Generation",
  },
];

export const featuredSkills = ["Statistics", "Programming", "Machine vision"];

export const additionalExperience = [
  {
    period: "Sep 2019 - Mar 2021",
    role: "Cross-country coach",
    place: "Idrettslaget Holevaeringen",
  },
];

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  skills: string[];
  images: string[];
  demo?: string;
  github?: string;
  video?: string;
  visualLabel?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "fpv-drone-builds",
    title: "FPV-drone builds",
    category: "Work and free time",
    duration: "Mar 2025 - Des 2025",
    description:
      "Built and modified 20+ drone configurations, ranging from FPV quadcopters to fixed-wing systems, with variations in communication methods, payload capability, firmware, and operating environment. The work has focused mainly on adapting off-the-shelf products, including configurations for GNSS-denied and EW-disrupted conditions.\n\nSpecific technical information around the different project are information I cannot share at this point.",
    skills: [
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
    images: [
      "/media/fpv-drone-build.jpg",
      "/media/fpv-drone-table.jpg",
      "/media/signal-box-exterior.jpg",
      "/media/signal-box-interior.jpg",
    ],
    video: "/media/story-clip-2.mp4",
  },
  {
    slug: "tieup-social-platform",
    title: "Social platform (TieUp)",
    category: "Free time",
    duration: "Apr 2021-Aug 2021 (2. Year high-school)",
    demo: "https://marvelapp.com/prototype/14aj7hae/screen/78212187",
    description:
      "Started building a social platform, to facilitate physical meetups like social training and events when the lockdown was coming to an end during COVID. I got the company registered built an early prototype, spoke with mentors but soon realized I didn’t have the software skillset needed to build this.\n\nThis lack of knowledge motivated me to start getting into software programming. I started by taking the CS50: Introduction to Computer Science -online Harvard course and changed courses in school to pursuit this direction.",
    skills: [
      "Company registration",
      "grant applications",
      "prototyping",
      "mentor outreach",
      "early-stage product development",
    ],
    images: [],
    visualLabel: "Startup prototype and company formation",
  },
  {
    slug: "distributed-elevator-system",
    title: "Distributed elevator system",
    category: "School",
    duration: "Jan 2026-May 2026",
    github: "https://github.com/vehoug/TTK4145.git",
    description:
      "Built software for coordinating multiple elevators, with distributed call handling.",
    skills: [
      "Real-time systems",
      "distributed systems",
      "networking",
      "fault tolerance",
      "concurrency",
      "state machines",
    ],
    images: [],
    visualLabel: "Distributed control, networking, and fault recovery",
  },
  {
    slug: "analog-servo-controller",
    title: "Analog servo controller",
    category: "School",
    duration: "Jan 2023-Mar 2023",
    description:
      "Built and tested an analog servo motor control system for a DC motor, including speed and position measurement, controller tuning, and frequency-response analysis.",
    skills: [
      "Analog electronics",
      "signal conditioning",
      "op-amp circuits",
      "PI control",
      "position control",
      "oscilloscope measurements",
      "Bode plot analysis",
    ],
    images: [
      "/media/servo-labeled-system.png",
      "/media/control-system-diagram.png",
      "/media/servo-breadboard-full.jpg",
      "/media/servo-schematic.png",
    ],
  },
  {
    slug: "flipper-zero-exploration",
    title: "Flipper-zero exploration",
    category: "Free time",
    duration: "Aug 2022-Sep 2023",
    description:
      "Bought and set up flipper-zero with WiFi-Devboard. Experimented with different use cases like: TV controller, RFID card, WiFi disturbance, Disturbance of Bluetooth units",
    skills: [
      "embedded setup",
      "wireless protocol fundamentals",
      "RF security awareness",
    ],
    images: ["/media/flipper-zero.jpg", "/media/signal-box-interior.jpg"],
  },
  {
    slug: "hospitality-investment-analysis",
    title: "Hospitality Investment analysis",
    category: "Free time",
    duration: "Des 2025 - Mar 2026",
    description:
      "Built data/drive analysis to evaluate impact of specific investment at our family business. The project combined historical room-night data, group booking demand, accounting figures, construction cost assumptions, live competitor pricing, and financial benchmarks to estimate capacity effects, revenue upside, and profitability scenarios. Data used for development is proprietary property so cannot share repo.",
    skills: ["data analysis", "financial modelling"],
    images: ["/media/family-business.jpg"],
  },
  {
    slug: "cutlery-sorting-machine",
    title: "Cutlery sorting machine -coming soon",
    category: "Free time",
    duration: "Jul 2026 - Present",
    description: "Coming soon.",
    skills: ["mechatronics", "sensors", "mechanical layout", "prototyping"],
    images: ["/media/cutlery-sorting-machine.png"],
  },
];

export const sportsIntro =
  "This was my life. Until aged 14 one of my dreams was to become the world's best cross-country skier. I am sharing this side to show the level of dedication I put into this goal, through some competitions. This lifestyle built many of the traits that still define me.";

export const sportsAchievements = [
  {
    year: "2016",
    sport: "Running",
    result: "Fastest 10 km in Norway",
    event: "Youth 10 km statistics",
    category: "Boys 12-13",
    href: "https://www.kondis.no/statistikk/ungdomsstatistikk-2016-10-km-gutter/junior/1530144",
  },
  {
    year: "2024",
    sport: "Triathlon",
    result: "Winner",
    event: "Student Norwegian Championship Triathlon",
    category: "Other Bikes, men's class",
    href: "https://studentidrett.no/nyheter/student-nm-triatlon",
  },
  {
    year: "2015",
    sport: "Cross-country skiing",
    result: "Winner",
    event: "Jardarrennet Cross-Country Ski Race",
    category: "G12, Oslo/Akershus Ski District",
    href: "https://www.google.com/imgres?imgurl=https://langrenn.ilh.no/wp-content/uploads/sites/4/2015/01/Gard-Oslo-Skifestival.jpg&tbnid=kSqoYXMQNGJ_OM&vet=1&imgrefurl=https://langrenn.ilh.no/news/gard-laeskogen-vant-i-jardarrennet-og-hole-gutten-sivert-langerud-imponerte-stort-med-2-pl-i-kvalfoss-rennet-i-skiskyting/&docid=IX3GcW616YJhOM&w=3264&h=2448&source=sh/x/im/m1/1&kgs=1bdcdac97a4321f9&shem=epsd1,nisbtsa2,nisbtsal,rimspwouoe&utm_source=epsd1,nisbtsa2,nisbtsal,rimspwouoe,sh/x/im/m1/1",
  },
  {
    year: "2017",
    sport: "Trail running",
    result: "2nd place",
    event: "Trail Run",
    category: "Men 2003/2002",
    href: "https://www.langrenn.com/langrenn-allround/kjempetider-i-odd-bjorn-hjelmesets-terrenglop/",
  },
];

export const sportsExtraLinks = [
  "https://www.ringblad.no/hytteplanmila/sport/mosjonslop/ungguttene-tar-over-lokalt/s/5-45-302578",
  "https://www.ringblad.no/sport/langrenn/ringkollen/jorgen-og-gard-knivet-hardt-pa-ringkollen/s/5-45-534443",
  "https://www.ringblad.no/sport/500-deltakere-pa-o-lop/s/1-97-7546535",
  "https://ringeriksavisa.no/arkiv/item/1688-flott-skoyteis",
  "https://www.ringblad.no/sport/langrenn/drammen/fjerdeplass-til-emil-i-konnerudsprinten-flere-gode-lokale-prestasjoner/s/5-45-705190",
];

export const investmentText =
  "I enjoy reviewing strategies, tools and philosophies in investing. This page is for other likeminded to reach out and have a chat. I am always on the look the new strategies, know-hows and different mindsets. I am especially interested in the impact of frontier AI models acting as players in the public marked these days.";

export const investmentLinks = [
  {
    label: "Finansavisen shareholder register",
    href: "https://www.finansavisen.no/aksjonaerregister/index.php?navn=Gard+Laeskogen",
  },
  {
    label: "Proff shareholder profile",
    href: "https://www.proff.no/aksjon%C3%A6rer/person/gard-laeskogen/6213373",
  },
];

export const why = {
  intro:
    "I try to constantly question why I spend my time as I do. This page lays out the foundation for my actions and describe the version of myself I am striving to become.",
  lifeRules: [
    "Become the best version of myself. - I know that there is a version of myself out there that is a better person than I am today.",
    "Fight for good, because evil comes by itself. Not doing anything is also wrong. I don't fight for good by just not being evil. I must withstand uncomfortable situations and, in the extreme, be willing to give my own life. I want to be able to stand alone, take risks to do what is right.",
    "I have 3 freedoms in life. I can act as I wish, be perceived as I wish, and react to events that happen to me as I wish. I can shape myself and my personality, at least other people's perception of me. A person who pretends to be brave is brave. This is what I strive to live by.",
  ],
  describedAs: [
    "Someone I would want to have by my side through a long and difficult mission.",
    "Someone who is honest and doesn't talk behind the back of others",
    "Terrible to compete against",
    "Someone who said what he thought",
    "Family man (prioritized family at all levels)",
  ],
  quotes: [
    "Who dares, wins -SAS",
    "There is no alpha in consensus. -Peter Thiels",
    "Some men see things as they are and say “why?” I dream things that never were and say “why not?” - George Bernard Shaw.",
    "In the long history of the world, only a few generations have been granted the role of defending freedom in its hour of maximum danger. I do not shrink from this responsibility -I welcome it -John F. Kennedy",
    "You and I have the courage to say to our enemies: ‘There is a price we will not pay. There is a point beyond which they must not advance.’ And this - this is the meaning in the phrase of Barry Goldwater’s ‘peace through strength.’ - Ronald Reagan.",
  ],
};
