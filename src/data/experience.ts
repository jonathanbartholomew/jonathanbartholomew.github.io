// src/data/experience.ts

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Gifthealth",
    role: "Senior Full Stack Engineer",
    period: "2022 – Present",
    description:
      "Building HIPAA-compliant systems at scale: pharmacy workflows, patient data pipelines, and agentic AI tooling that makes care delivery smarter. The infrastructure that keeps prescriptions flowing and patients cared for.",
    stack: ["Ruby on Rails", "React", "TypeScript", "AWS", "HIPAA", "Agentic AI", "PostgreSQL"],
  },
  {
    id: 2,
    company: "Daedabyte",
    role: "Founder & Lead Engineer",
    period: "2021 – Present",
    description:
      "AI-forward web agency. Client sites, e-commerce storefronts, interactive geospatial applications, and a growing template business. The place where interesting problems get solved and the long-term bet is being built.",
    stack: ["Astro", "Sanity CMS", "Shopify", "Laravel", "Claude API", "Node.js", "Figma"],
  },
  {
    id: 3,
    company: "Inventive",
    role: "Web Developer",
    period: "Jun 2023 – Present",
    description:
      "Lead front-end development using React and modern tooling, with a major project migrating legacy WordPress sites to Cascade CMS, improving performance, UX, and cross-browser consistency along the way.",
    stack: ["React", "Cascade CMS", "WordPress", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    company: "MissionFocus",
    role: "Frontend Web Developer",
    period: "Jan 2022 – Oct 2023",
    description:
      "Developed and maintained interactive geospatial applications for a government intelligence agency. Promoted to GitLab Administrator, managing epics, stories, and task workflows across the team.",
    stack: ["JavaScript", "TypeScript", "Ember.js", "React", "GitLab", "Geospatial"],
  },
  {
    id: 5,
    company: "Agilla Pro",
    role: "Software Developer",
    period: "May 2017 – Jan 2022",
    description:
      "Built and supported backend software applications on AWS EC2 infrastructure. These were the foundational years, working across Linux environments and object-oriented backend frameworks.",
    stack: ["AWS", "EC2", "Linux", "OOP"],
  },
];

export default experienceData;
