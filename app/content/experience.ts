import type { EducationItem, ExperienceItem, SkillGroup } from "./types";

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
    period: "May 2024 - Present",
    role: "Leader",
    place: "Contactor NTNU",
    responsibilities: [
      "Managed relationships with key industry partners.",
      "Organized company presentations, stands, and workshops with partner companies.",
    ],
    impact: ["Generated NOK 0.9 million in revenue for the Omega student association."],
    evidence: [
      {
        src: "/media/contactor-ntnu-team.jpeg",
        alt: "Contactor NTNU team outside the NTNU main building",
        presentation: "photo",
      },
      {
        src: "/media/contactor-ntnu-leadership.jpeg",
        alt: "Gard Laeskogen with the deputy leader of Contactor NTNU",
        caption: "Leader and deputy leader",
        presentation: "photo",
      },
    ],
  },
  {
    period: "Aug 2023 - Present",
    role: "Competitive Athlete",
    place: "NTNUI Triathlon",
    impact: [
      "Competed in national and regional triathlons and running events, including winning the student Norwegian championship in the 'other bikes' category.",
    ],
    evidence: [],
  },
  {
    period: "Dec 2020 - Dec 2021",
    role: "Leader",
    place: "Local political youth party",
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
    period: "Expected Jun 2028",
    institution: "Norwegian University of Science and Technology (NTNU)",
    qualification: "MSc Cybernetics and Robotics",
    location: "Trondheim, Norway",
    status: "current",
  },
  {
    period: "Aug 2026 - Jun 2027",
    institution: "University of California, Berkeley",
    qualification: "BISP study program",
    location: "California, United States",
    status: "upcoming",
    detail: "Robotics and AI",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Programming", values: ["Python", "C", "C++"] },
  { label: "Tools", values: ["Excel", "LaTeX"] },
  { label: "Working knowledge", values: ["HTML", "CSS"] },
];

export const featuredSkills = skillGroups.flatMap((group) => group.values);

export const languages = ["Norwegian | Native", "English | Fluent"];

// Backwards-compatible export for any code importing the original name.
export const experience = professionalExperience;
