// src/data/projects.ts

import partyLootImage from "../assets/images/party-loot-screenshot.jpg";
import tempoImage from "../assets/images/tempo-screenshot.jpg";
import daedabyteImage from "../assets/images/daedabyte-screenshot.jpg";

export interface Project {
  id: number;
  tag: string;
  year: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image?: string;
  liveUrl?: string;
  flip: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    tag: "SaaS · Shipped",
    year: "2025",
    titleLine1: "Party",
    titleLine2: "Loot",
    description:
      "D&D campaign loot tracker built as a subscription SaaS. Node.js/Express backend, JWT auth, AWS RDS, with tier-gated features including a loot generator, merchant builder, item trading, and analytics dashboard.",
    image: partyLootImage,
    liveUrl: "https://partylootapp.com",
    flip: true,
  },
  {
    id: 2,
    tag: "SaaS · In Development",
    year: "2025",
    titleLine1: "Tempo",
    titleLine2: "App",
    description:
      "Personal productivity SaaS. Tasks, meetings, and calendar events unified in a gamified daily planner with AI-assisted scheduling, built for the way developers actually think about time.",
    image: tempoImage,
    flip: false,
  },
  {
    id: 3,
    tag: "Agency",
    year: "2021 – Now",
    titleLine1: "Daedabyte",
    titleLine2: "Web Solutions",
    description:
      "AI-forward web agency. Client work spanning e-commerce, geospatial applications, and bespoke web experiences. The business I'm building toward, one project at a time.",
    image: daedabyteImage,
    liveUrl: "https://daedabyte.com",
    flip: true,
  },
];

export default projectsData;
