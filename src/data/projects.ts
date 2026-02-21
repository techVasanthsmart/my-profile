export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  liveUrl?: string;
  codeUrl?: string;
  caseStudyUrl?: string;
  live?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "pdf-toolkit",
    title: "PDF Toolkit",
    description:
      "Merge multiple PDFs, split by page or custom ranges, reorder pages, convert images or Markdown to PDF. Production tool for quick document handling.",
    tags: ["Web", "PDF", "Next.js"],
    features: ["Merge PDFs", "Split by page or range", "Reorder pages", "Images/Markdown to PDF"],
    liveUrl: "https://pdf-toolkit.vasanthubs.co.in/",
    codeUrl: "https://github.com/techVasanthsmart/pdf-toolkit",
    caseStudyUrl: "/case-studies/pdf-toolkit",
    live: true,
    featured: true,
  },
  {
    slug: "docmind",
    title: "DocMind - RAG Chat Application",
    description:
      "A cutting-edge Retrieval-Augmented Generation (RAG) agent capable of ingesting websites and enabling users to chat with their content in real-time.",
    tags: ["Next.js", "Tailwind CSS", "LangChain", "OpenAI"],
    features: ["Website Ingestion", "Smart Chunking", "Vector Search", "Context-Aware Responses"],
    liveUrl: "https://docmind.vasanthubs.co.in",
    codeUrl: "https://github.com/techVasanthsmart/DocMind",
    caseStudyUrl: "/case-studies/docmind",
    live: true,
    featured: true,
  },
  {
    slug: "ai-flight-booking-assistant",
    title: "AI Flight Booking Assistant",
    description:
      "AI-assisted flight booking and search. Streamlit app for natural-language queries and booking workflows.",
    tags: ["Python", "Streamlit", "AI"],
    features: ["Natural language search", "Flight booking flow", "Streamlit UI"],
    liveUrl: "https://ai-flight-booking-assistant-qwyknk3lgu6qgjgaab7qvb.streamlit.app/",
    codeUrl: "https://github.com/techVasanthsmart/AI-Flight-Booking-Assistant",
    live: true,
    featured: true,
  },
  {
    slug: "ai-synthetic-dataset-factory",
    title: "AI Synthetic Dataset Factory",
    description:
      "Generate synthetic datasets for ML and data pipelines. Streamlit demo for dataset creation and export.",
    tags: ["Python", "AI", "Data", "Streamlit"],
    features: ["Synthetic data generation", "Export formats", "Streamlit demo"],
    liveUrl: "https://aisyntheticdatasetfactory-debqy6maxvmrskryhx5jtk.streamlit.app/",
    codeUrl: "https://github.com/techVasanthsmart/AI_Synthetic_Dataset_Factory",
    live: true,
    featured: true,
  },
  {
    slug: "multi-ai-bot-conversation",
    title: "Multi-AI Bot Conversation",
    description: "Multi-AI bot conversation app for comparing and chatting with different AI models.",
    tags: ["AI", "Chat", "Python"],
    codeUrl: "https://github.com/techVasanthsmart/Multi-AI-Bot-Conversation",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
