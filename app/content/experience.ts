import type {
  AcademicArea,
  EducationItem,
  ExperienceItem,
  ResearchItem,
  SelectedCourse,
  SkillGroup,
} from "./types";

// Source: CV notes for website.docx, updated from the CV of 2026-11-18.
// Gard owns and approves the wording in this file.
export const research: ResearchItem[] = [
  {
    period: "Aug 2026 - present",
    place: "UC Berkeley",
    advisor: "Prof. Alexandre M. Bayen",
    title: "JEPA world models for quadrotor control under compute constraints",
    summary: "Studying how latent world model MPC performs under different compute budgets.",
    href: "/research",
    name: "TickJEPA",
    question: "How much computer does a learned drone controller need?",
    plain:
      "A small learned world model plans the drone's motion a hundred times a second, so the computer on board decides how much planning gets done. I am testing, in simulation with real computers timing the planner, whether three timing numbers predict how well the drone follows its path on a computer it was never tested on.",
    status: "In progress · paper in preparation",
  },
];

export const professionalExperience: ExperienceItem[] = [
  {
    period: "Aug 2026 - present",
    role: "Student Assistant to Prof. Trond Petersen",
    place: "UC Berkeley",
    location: "Berkeley, United States",
    evidence: [],
  },
  {
    period: "Jun 2026 - Jul 2026",
    role: "Computer Vision Intern",
    place: "Stealth defense startup",
    location: "United Kingdom",
    responsibilities: [
      "Developed computer-vision software for a counter-UAS system.",
      "Conducted testing.",
      "Debugged computer-vision software.",
      "Developed internal tools.",
    ],
    impact: ["Offered a full-time engineering role on the founding team after two weeks."],
    evidence: [
      {
        src: "/media/stealth-startup-mark.jpg",
        alt: "Stealth startup mark",
        presentation: "mark",
      },
    ],
  },
  {
    period: "Mar 2025 - Dec 2025",
    role: "Lead R&D Engineer, UAV Unit",
    place: "Norwegian Armed Forces",
    location: "Norway",
    responsibilities: [
      "Co-founded the UAV unit.",
      "Coordinated the R&D branch.",
      "Instructed and mentored colleagues.",
      "Worked as a specialist in technical development with Norwegian and international partners.",
    ],
    impact: ["1+ million USD in R&D funding."],
    recommendation:
      "During his employment, Gard worked as an engineer in a UAV unit with Norwegian and international partners. He showed a very high level of dedication and ownership towards the unit's task, demonstrated a high working capacity, and achieved results above expectations. He was easy to cooperate with, communicated very well with colleagues, and is strongly recommended for similar work.",
    initiallyExpanded: true,
    evidence: [
      {
        src: "/media/norwegian-armed-forces-mark.jpg",
        alt: "Norwegian Armed Forces mark",
        presentation: "mark",
      },
    ],
  },
  {
    period: "Aug 2023 - Aug 2026",
    role: "Instructor (part-time)",
    place: "Norwegian Armed Forces",
    location: "Norway",
    responsibilities: [
      "Instructed various units in complex mission-solving techniques.",
      "Handled complex communication systems and UAV platforms.",
    ],
    evidence: [
      {
        src: "/media/norwegian-armed-forces-mark.jpg",
        alt: "Norwegian Armed Forces mark",
        presentation: "mark",
      },
    ],
  },
  {
    period: "Aug 2022 - Aug 2023",
    role: "Paratrooper",
    place: "Norwegian Armed Forces",
    location: "Norway",
    responsibilities: [
      "Worked in small teams capable of completing extended missions in hostile environments.",
    ],
    impact: [
      "Passed special forces selection, completed by fewer than 1% of candidates.",
      "Awarded first place in a competition focused on physical and technical skills.",
      "Developed expertise in rapid decision-making, teamwork, and resilience under extreme conditions.",
    ],
    evidence: [
      {
        src: "/media/norwegian-armed-forces-mark.jpg",
        alt: "Norwegian Armed Forces mark",
        presentation: "mark",
      },
    ],
  },
  {
    period: "Aug 2017 - Aug 2022",
    role: "Hotel Trainee and Board Member",
    place: "Sundvolden Hotel",
    location: "Krokkleiva, Norway",
    summary: "Our family business.",
    positions: ["Hotel trainee", "Board member"],
    responsibilities: [
      "Rotated across reception, restaurant, conference, and maintenance departments.",
      "Lived at the hotel for six months during COVID and ran the a la carte restaurant that summer.",
      "Contributed to executive strategy meetings and decisions affecting hotel operations.",
    ],
    evidence: [
      {
        src: "/media/sundvolden-mark.png",
        alt: "Sundvolden Hotel mark",
        presentation: "mark",
      },
    ],
    links: [
      {
        label: "Family business background",
        href: "https://www.linkedin.com/posts/sundvolden-hotel_dehistoriske-familiebedrift-sundvoldenhotel-activity-7476937451584958464-0Ilb",
      },
      {
        label: "Board work at Sundvolden",
        href: "https://www.linkedin.com/posts/sundvolden-hotel_styremaeote-sundvoldenhotel-dehistoriske-activity-7475929603681955841-bAFT",
      },
    ],
  },
];

export const leadershipAndActivities: ExperienceItem[] = [
  {
    period: "Feb 2024 - Feb 2026",
    role: "Member, Board of Directors",
    place: "NFEA - Norwegian Association for Electrical and Automation Engineering",
    summary:
      "A politically independent, non-profit membership organization focused on electrical engineering and automation, representing around 270 member companies. I was asked to join the board through my leadership role at Contactor NTNU.",
    responsibilities: [
      "Student representative, supporting the organization's work with students.",
    ],
    evidence: [
      {
        src: "/media/nfea-mark.jpeg",
        alt: "NFEA mark",
        presentation: "mark",
      },
    ],
  },
  {
    period: "May 2024 - Aug 2025",
    role: "Leader",
    place: "Contactor NTNU",
    responsibilities: [
      "Managed relationships with key industry partners.",
      "Organized company presentations, company visits, and workshops with partner companies.",
    ],
    impact: ["Generated NOK 0.9 million in revenue for the Omega student association."],
    evidence: [
      {
        src: "/media/contactor-ntnu-mark.jpeg",
        alt: "Contactor NTNU mark",
        presentation: "mark",
      },
    ],
  },
  {
    period: "Dec 2020 - Dec 2021",
    role: "District Leader",
    place: "Local political youth party district",
    responsibilities: ["Held meetings and debates."],
    evidence: [],
  },
  {
    period: "Sep 2019 - Mar 2021",
    role: "Cross-country Skiing Coach",
    place: "Holeværing IL",
    location: "Sundvollen, Norway",
    responsibilities: [
      "Coached and mentored young athletes in cross-country skiing, focusing on skill development and team spirit.",
    ],
    evidence: [
      {
        src: "/media/holevaeringen-il-mark.jpeg",
        alt: "Holeværingen IL mark",
        presentation: "mark",
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    period: "Aug 2026 - Jun 2027",
    institution: "University of California, Berkeley",
    qualification: "Graduate visiting student, Berkeley International Study Program (BISP)",
    location: "California, United States",
    status: "current",
    detail: "Navigation for physical AI, control of autonomous flight, modelling and simulation of drone-based systems. Auditing VLAs and robotic learning (Prof. Sergey Levine) and AI safety.",
  },
  {
    period: "Aug 2023 - Jun 2028",
    institution: "Norwegian University of Science and Technology (NTNU)",
    qualification: "MSc Cybernetics and Robotics",
    location: "Trondheim, Norway",
    status: "current",
    detail: "Main profile: Autonomous Systems. Three academic years completed.",
  },
];

export const selectedCourses: SelectedCourse[] = [
  {
    title: "Governance Course",
    provider: "FBN Norwegian Family Ownership",
  },
];

export const hackathons = [
  {
    title: "AI on Watch DNV Hackathon 2025",
    summary:
      "Built a vessel-detection ML pipeline using YOLO12m, SAHI image slicing for small-object inference, post-processing filters, and additional annotated Hurtigruten image data.",
    href: "/media/dnv-brain-hackathon-team1-report.pdf",
  },
] satisfies import("./types").Hackathon[];

// Source: NTNU transcript supplied by Gard, covering studies through spring 2026.
export const academicAreas: AcademicArea[] = [
  {
    label: "Control and autonomy",
    courses: [
      "Introduction to Cybernetics",
      "Control Engineering",
      "Modeling and Simulation",
      "Optimization and Control",
      "Robot Vision",
    ],
  },
  {
    label: "Real-time and embedded systems",
    courses: [
      "Real-Time Programming",
      "Embedded Computer Systems",
      "Instrumentation and Measurement",
      "Industrial Electrotechnics",
    ],
  },
  {
    label: "Software and computer science",
    courses: [
      "Information Technology",
      "Procedural and Object-Oriented Programming",
      "Algorithms and Data Structures",
      "Computer Architecture",
    ],
  },
  {
    label: "Mathematics and physical systems",
    courses: [
      "Mathematics 1-4",
      "Statistics",
      "Physics",
      "Analog and Digital Electronics",
    ],
  },
  {
    label: "Leadership and context",
    courses: [
      "Technology Management",
      "Leadership in Voluntary Organizations",
      "Examen Philosophicum for Science and Technology",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "UAV and mechatronics",
    values: [
      "UAV design and integration",
      "Mechatronics",
      "3D modelling",
      "3D printing",
      "Prototyping",
      "Production-oriented design",
    ],
  },
  {
    label: "Radio and embedded systems",
    values: [
      "Analog radio",
      "Software-defined radio",
      "Firmware",
      "Soldering",
    ],
  },
  {
    label: "Distributed real-time software",
    values: [
      "Real-time systems",
      "Distributed systems",
      "Networking",
      "Fault tolerance",
      "Concurrency",
    ],
  },
  {
    label: "Control and instrumentation",
    values: [
      "Analog electronics",
      "Measurement systems",
      "PID and model predictive control (MPC)",
      "Frequency-response analysis",
    ],
  },
];

export const featuredSkills = skillGroups.flatMap((group) => group.values);

// The four skill lines of the CV of 2026-11-18, shown on the CV page.
export const cvSkills: SkillGroup[] = [
  {
    label: "Robotics and autonomy",
    values: ["Computer vision", "robotic learning", "world models", "MPC"],
  },
  {
    label: "Programming",
    values: ["Python", "C/C++", "Git", "AI-enhanced workflows with Claude, Codex and OpenRouter"],
  },
  {
    label: "Hardware and design",
    values: ["FPV and fixed-wing UAVs", "RF and communication systems", "analog circuits", "CAD tools", "3D printing"],
  },
  {
    label: "Languages",
    values: ["Norwegian (native)", "English (fluent)"],
  },
];

// Backwards-compatible export for any code importing the original name.
export const experience = professionalExperience;
