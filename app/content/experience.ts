import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    period: "May 2016 - Present",
    role: "Sundvolden Hotel",
    place: "Family business",
    summary: "Norway's oldest family hotel, running since 1648.",
    positions: [
      "Banquet Waiter | May 2016 - Sep 2023",
      "Maintenance Specialist | Apr 2017 - Aug 2023",
      "Member, Board of Directors | Aug 2025 - Present",
    ],
    evidence: [
      {
        src: "/media/family-business.jpg",
        alt: "Gard Laeskogen with family outside Sundvolden Hotel",
      },
    ],
  },
  {
    period: "Jul 2022 - Jul 2023",
    role: "Norwegian Armed Forces",
    place: "Military service",
    summary: "One year of military service in the Norwegian Armed Forces.",
    positions: ["Military service | Jul 2022 - Jul 2023"],
    evidence: [
      {
        src: "/media/military-field.jpg",
        alt: "Field experience in the Norwegian Armed Forces",
      },
    ],
  },
  {
    period: "Aug 2023 - Aug 2025",
    role: "Contactor NTNU",
    place: "Technical student organization at NTNU",
    positions: [
      "Company Contact | Aug 2023 - Jan 2024",
      "Deputy Leader | Jan 2024 - Jun 2024",
      "Leader | Jun 2024 - Aug 2025",
    ],
    responsibilities: [
      "Providing long-term relationships for companies relevant to Omega Linjeforening. Organizing company presentations, stands and workshops, and taking responsibility for major projects and collaborations involving Contactor NTNU.",
    ],
    evidence: [
      {
        src: "/media/contactor-ntnu-team.jpeg",
        alt: "Contactor NTNU team outside the NTNU main building",
      },
      {
        src: "/media/contactor-ntnu-leadership.jpeg",
        alt: "Gard Laeskogen with the deputy leader of Contactor NTNU",
        caption: "Leadership team, Contactor NTNU",
      },
    ],
  },
  {
    period: "Feb 2024 - Present",
    role: "Board member",
    place:
      "NFEA - Norwegian Association for Electrical and Automation Engineering",
    summary:
      "A politically independent, non-profit membership organization focused on electrical engineering and automation, representing around 270 member companies.",
    positions: ["Member, Board of Directors | Feb 2024 - Present"],
    evidence: [],
  },
  {
    period: "Apr 2025 - Dec 2025",
    role: "UAV Engineer",
    place: "Norwegian Armed Forces",
    positions: ["UAV Engineer | Apr 2025 - Dec 2025"],
    responsibilities: [
      "Coordinating an R&D department, instructing and mentoring, and working as a specialist in technical development.",
    ],
    evidence: [
      {
        src: "/media/fpv-drone-build.jpg",
        alt: "FPV drone engineering work",
      },
    ],
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
