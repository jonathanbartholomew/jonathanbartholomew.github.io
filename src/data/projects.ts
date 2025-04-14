// src/data/projects.ts

import partyLootImage from "../assets/images/party-loot-app.jpg";
import rinkersImage from "../assets/images/rinker-mowing.jpg";
import uhsImage from "../assets/images/uhs.jpg";
import bloomsImage from "../assets/images/openblooms.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  date?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Party Loot App",
    description:
      "A full web application built to help dnd players track their parties funds and items in a stylized and easy to manage system.",
    technologies: [
      "Javascript",
      "CSS",
      "HTML",
      "Node.js",
      "Express",
      "MySQL",
      "AWS",
      "SES",
    ],
    image: partyLootImage,
    featured: true,
    date: "2025-03",
    liveUrl: "https://partylootapp.com",
  },
  {
    id: 2,
    title: "Rinker's Mowing",
    description:
      "A simple one page wordpress site with a custom template to showcase a local lawn care business. Features include about, service, photo gallery and contact form",
    technologies: ["PHP", "Wordpress", "WP Forms", "Meta Box", "CSS", "HTML"],
    featured: true,
    date: "2025-04",
    image: rinkersImage,
    liveUrl: "https://rinkersmowing.com",
  },
  {
    id: 3,
    title: "UHS Tamu",
    description:
      "UHS Tamu is a custom Cascade CMS website developed for the University Health Services at Texas A&M University. It includes features such as user authentication, appointment scheduling, and a secure patient portal with HIPAA compliance.",
    technologies: [
      "HTML",
      "CSS",
      "Cascade CMS",
      "JavaScript",
      "Velocity",
      "ADA Compliance",
    ],
    image: uhsImage,
    featured: true,
    date: "2024-11",
    liveUrl: "https://uhs.tamu.edu/",
  },
  {
    id: 4,
    title: "Openblooms",
    description:
      "Openblooms delivers beautiful flower arrangements within the VA, DC, MD area. The site features a Shopify solution with product catalog and payment processing integration.",
    technologies: [
      "HTML",
      "CSS",
      "PHP",
      "JavaScript",
      "Shopify",
      "ADA Compliance",
    ],
    image: bloomsImage,
    featured: true,
    date: "2023-07",
    liveUrl: "https://www.openblooms.com",
  },
  {
    id: 5,
    title: "Healthcare Management Portal",
    description:
      "Secure portal for healthcare providers allowing patient management, appointment scheduling, and medical record access with strict HIPAA compliance. Built with PHP backend and React frontend.",
    technologies: [
      "PHP",
      "MySQL",
      "Javascript",
      "CodeIgniter",
      "HIPAA Compliance",
    ],
    date: "2022-09",
  },
  {
    id: 6,
    title: "Geospatial Intelligence Dashboard",
    description:
      "Interactive web application for visualizing and analyzing geospatial intelligence data. Features include real-time data visualization, custom map layers, and advanced filtering capabilities.",
    technologies: ["JavaScript", "TypeScript", "Ember.js", "MapBox", "D3.js"],
    date: "2022-09",
  },
  {
    id: 7,
    title: "CMS Migration Framework",
    description:
      "Custom framework developed to automate and streamline the migration of content from WordPress to Cascade CMS, ensuring data integrity and consistent user experience throughout the transition.",
    technologies: ["WordPress", "Cascade CMS", "PHP", "JavaScript", "SQL"],
    date: "2023-07",
  },
  {
    id: 8,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce solution with product catalog, user authentication, shopping cart, and payment processing integration. Built with modern web technologies and responsive design principles.",
    technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Stripe API"],
    date: "2021-11",
  },
  {
    id: 9,
    title: "Cloud Resource Management Tool",
    description:
      "AWS resource management tool designed to optimize cloud infrastructure costs and performance. Provides real-time monitoring, automated scaling, and cost optimization recommendations.",
    technologies: ["AWS", "EC2", "Node.js", "React", "CloudWatch"],
    date: "2020-05",
  },
];

export default projectsData;
