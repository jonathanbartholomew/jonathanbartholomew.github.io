// src/data/skills.ts

export interface SkillEntry {
  name: string;
  size: "lg" | "md" | "sm";
}

export interface SkillGroup {
  name: string;
  skills: SkillEntry[];
}

const skillsData: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", size: "lg" },
      { name: "TypeScript", size: "lg" },
      { name: "Astro", size: "md" },
      { name: "Next.js", size: "md" },
      { name: "HTML · CSS", size: "sm" },
      { name: "GSAP", size: "sm" },
      { name: "Figma · Spline", size: "sm" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Ruby on Rails", size: "lg" },
      { name: "Node.js", size: "lg" },
      { name: "Laravel", size: "md" },
      { name: "PostgreSQL", size: "md" },
      { name: "REST · GraphQL", size: "sm" },
      { name: "WordPress", size: "sm" },
    ],
  },
  {
    name: "Specialty",
    skills: [
      { name: "HIPAA Systems", size: "lg" },
      { name: "Agentic AI", size: "lg" },
      { name: "Claude / Anthropic", size: "md" },
      { name: "Geospatial", size: "md" },
      { name: "E-commerce", size: "sm" },
      { name: "Shopify", size: "sm" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "AWS Amplify", size: "lg" },
      { name: "GitHub Pages", size: "md" },
      { name: "Sanity CMS", size: "md" },
      { name: "Electron", size: "md" },
      { name: "Gumroad", size: "sm" },
      { name: "VS Code", size: "sm" },
    ],
  },
];

export default skillsData;
