import type {
  AcademicArea,
  EducationItem,
  ExperienceItem,
  SelectedCourse,
  SkillGroup,
} from "./types";

// Source: CV notes for website.docx. Gard owns and approves the wording in this file.
export const professionalExperience: ExperienceItem[] = [
  {
    period: "Jun 2026 - Aug 2026",
    role: "Computer Vision Intern",
    place: "Stealth startup",
    location: "United Kingdom",
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
      "Coordinated the R&D branch.",
      "Instructed and mentored colleagues.",
      "Worked as a specialist in technical development with Norwegian and international partners.",
    ],
    impact: ["More than USD 1 million in R&D funding."],
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
    period: "Aug 2023 - Aug 2024",
    role: "Operator, Specialist",
    place: "Norwegian Armed Forces",
    location: "Norway",
    responsibilities: [
      "Worked in small teams capable of completing extended missions in hostile environments.",
      "Instructed units in complex mission-solving techniques.",
      "Handled complex communication systems during missions.",
    ],
    impact: [
      "Developed expertise in rapid decision-making, teamwork, and resilience under extreme conditions.",
      "Awarded first place in an internal competition focused on physical and technical skills.",
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
    period: "Aug 2017 - Aug 2023",
    role: "Part-time Employee and Board Member",
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
      "A politically independent, non-profit membership organization focused on electrical engineering and automation, representing around 270 member companies. I joined the board through the Contactor NTNU leadership role.",
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
      "Organized company presentations, stands, and workshops with partner companies.",
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
    role: "Cross-country Coach",
    place: "Holeværing IL",
    location: "Sundvollen, Norway",
    responsibilities: [
      "Coached and mentored young athletes in cross-country skiing, focusing on skill development and team spirit.",
    ],
    evidence: [],
  },
];

export const education: EducationItem[] = [
  {
    period: "2023 - Expected Jun 2028",
    institution: "Norwegian University of Science and Technology (NTNU)",
    qualification: "MSc Cybernetics and Robotics",
    location: "Trondheim, Norway",
    status: "current",
    detail: "Three academic years completed / Main profile: Autonomous Systems",
  },
  {
    period: "Aug 2026 - Jun 2027",
    institution: "University of California, Berkeley",
    qualification: "Graduate student, Berkeley International Study Program",
    location: "California, United States",
    status: "upcoming",
    detail: "Graduate coursework in robotics and AI",
  },
  {
    period: "May 2024 - Aug 2024",
    institution: "Jönköping University - Jönköping International Business School",
    qualification: "Family Business for Next Generation",
    location: "Jönköping, Sweden",
    detail: "Course",
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
      "Signal conditioning",
      "PI and position control",
      "Oscilloscope measurements",
      "Frequency-response analysis",
    ],
  },
];

export const featuredSkills = skillGroups.flatMap((group) => group.values);

export const languages = ["Norwegian | Native", "English | Fluent"];

// Backwards-compatible export for any code importing the original name.
export const experience = professionalExperience;
