import { siteConfig } from "./site-config";

/**
 * Schema helpers for structured data generation
 * Used throughout the site for consistent, reusable schema markup
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Helper to build a structured breadcrumb path
 */
export function getBreadcrumbPath(): BreadcrumbItem {
  return {
    name: "Home",
    url: siteConfig.siteUrl,
  };
}

/**
 * Helper to get page structured data context
 */
export function getPageContext(pagePath: string) {
  const pageMap: Record<string, { title: string; description: string }> = {
    "/": {
      title: "Home",
      description: siteConfig.description,
    },
    "/about": {
      title: "About",
      description: `Learn about ${siteConfig.name}, a ${siteConfig.brandPositioning}`,
    },
    "/services": {
      title: "Services",
      description: "Services offered by Vasanth Kumar",
    },
    "/case-studies": {
      title: "Case Studies",
      description: "Detailed case studies of projects built by Vasanth Kumar",
    },
    "/projects": {
      title: "Projects",
      description: "Portfolio of projects",
    },
    "/blog": {
      title: "Blog",
      description: "Articles and insights on full-stack development and AI",
    },
    "/faq": {
      title: "FAQ",
      description: "Frequently asked questions",
    },
    "/glossary": {
      title: "Glossary",
      description: "Definitions of AI and development terms",
    },
    "/contact": {
      title: "Contact",
      description: "Get in touch with Vasanth Kumar",
    },
  };

  return pageMap[pagePath] || { title: "Page", description: "" };
}

/**
 * Entity reinforcement strings for consistent language
 */
export const entityStrings = {
  name: siteConfig.name,
  brandPositioning: siteConfig.brandPositioning,
  roleShort: "Full-Stack Engineer & AI Product Builder",
  expertise: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "RAG (Retrieval-Augmented Generation)",
    "LangChain",
    "Python",
  ],
  experience: `${siteConfig.yearsExperience}+ years of professional experience`,
  location: "Remote",
  email: siteConfig.email,
} as const;

/**
 * Definition blocks for quotable content
 */
export const definitions = {
  fullStack:
    "Full-stack development is the practice of building complete web applications, from the frontend user interface using React and Next.js to the backend APIs using Node.js, ensuring seamless integration and optimal performance across all layers.",

  raG: "Retrieval-Augmented Generation (RAG) is an AI technique that combines large language models with external knowledge sources, allowing AI systems to retrieve relevant information from documents or databases before generating responses, resulting in more accurate and contextual answers.",

  aiProductBuilding:
    "AI product building involves designing, developing, and deploying software products that leverage artificial intelligence and machine learning to solve real-world problems, enhance user experiences, and create competitive advantages.",

  saasProductBuilding:
    "SaaS product building is the process of creating scalable, cloud-based software applications that serve multiple customers, with focus on user experience, reliability, security, and continuous improvement through data-driven iteration.",
} as const;

/**
 * Common FAQ templates for different sections
 */
export const commonFAQs = {
  hiring: [
    {
      question: "How can I hire Vasanth Kumar for my project?",
      answer: `You can reach out via email (${siteConfig.email}) or LinkedIn. I typically respond within 24 hours. We can discuss your project requirements, timeline, and whether it's a good fit for collaboration.`,
    },
    {
      question: "What is the typical project engagement model?",
      answer:
        "I work with clients on project basis, retainer arrangements, and long-term partnerships. Each engagement is customized based on project scope, team structure, and timeline.",
    },
    {
      question: "What is the typical response time?",
      answer:
        "I aim to respond to all inquiries within 24 hours. For ongoing projects, I maintain daily communication and provide regular status updates.",
    },
  ],
  expertise: [
    {
      question: "What technologies does Vasanth Kumar specialize in?",
      answer: `Primary expertise includes React, Next.js, Node.js, TypeScript, Python, and AI/ML technologies like RAG systems and LangChain. Currently building scalable full-stack applications and AI-powered products.`,
    },
    {
      question: "How many years of experience does Vasanth Kumar have?",
      answer: `${siteConfig.yearsExperience}+ years of professional experience as a Senior Full Stack Developer, with focus on scalable systems, end-to-end product development, and AI integration.`,
    },
    {
      question: "What is Vasanth Kumar's development philosophy?",
      answer:
        "I believe in building scalable, maintainable systems with clean architecture, strong testing practices, and focus on user experience. Every decision is made with long-term product success in mind.",
    },
  ],
};
