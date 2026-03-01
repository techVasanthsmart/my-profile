export interface Tool {
  name: string;
  category: string;
  description: string;
  url: string;
  why: string;
  alternatives?: string[];
}

export interface ResourceItem {
  title: string;
  description: string;
  url: string;
  category: string;
  type: "course" | "tool" | "book" | "community" | "framework" | "service";
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export const recommendedTools: Tool[] = [
  {
    name: "Claude (Anthropic)",
    category: "AI/LLM",
    description:
      "Advanced language model for coding, analysis, and creative work. Industry-leading reasoning.",
    url: "https://claude.ai",
    why: "Best model for complex reasoning and long-form content. Used for this website's architecture planning.",
    alternatives: ["ChatGPT", "Gemini"],
  },
  {
    name: "Next.js",
    category: "Framework",
    description:
      "React framework for production applications with SSR, API routes, and optimizations built-in.",
    url: "https://nextjs.org",
    why: "Fastest way to ship full-stack applications. This portfolio uses Next.js.",
  },
  {
    name: "TypeScript",
    category: "Language",
    description:
      "Typed JavaScript for catching errors at compile-time instead of runtime.",
    url: "https://www.typescriptlang.org",
    why: "Prevents entire classes of bugs. Non-negotiable for production code.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description:
      "Utility-first CSS framework for rapid UI development with consistency.",
    url: "https://tailwindcss.com",
    why: "Fast design implementation without leaving HTML. Responsive by default.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description:
      "Advanced open-source relational database with JSONB, full-text search, and more.",
    url: "https://www.postgresql.org",
    why: "Default choice for 95% of projects. Scales well, amazing documentation.",
  },
  {
    name: "Vercel",
    category: "Hosting",
    description:
      "Optimal hosting for Next.js applications with automatic deployments and edge computing.",
    url: "https://vercel.com",
    why: "Seamless next.js integration. Zero-config deployments. This site is hosted here.",
  },
  {
    name: "Docker",
    category: "DevOps",
    description:
      "Containerization for consistent environments across development and production.",
    url: "https://www.docker.com",
    why: "Eliminates 'works on my machine' problems. Essential for microservices.",
  },
  {
    name: "Git/GitHub",
    category: "Version Control",
    description:
      "Distributed version control and collaboration platform for code management.",
    url: "https://github.com",
    why: "Industry standard. Essential for any software development.",
  },
  {
    name: "LangChain",
    category: "AI Framework",
    description:
      "Framework for building applications with LLMs, RAG, and agents.",
    url: "https://www.langchain.com",
    why: "Simplifies RAG implementation. Used in DocMind project.",
  },
  {
    name: "Node.js",
    category: "Runtime",
    description:
      "JavaScript runtime for building server-side applications and APIs.",
    url: "https://nodejs.org",
    why: "Single language for frontend and backend. Massive ecosystem.",
  },
  {
    name: "Redis",
    category: "Database",
    description:
      "In-memory data store for caching, sessions, and real-time features.",
    url: "https://redis.io",
    why: "Essential for scaling. Dramatically improves response times.",
  },
  {
    name: "Figma",
    category: "Design",
    description: "Web-based design tool for UI/UX design and prototyping.",
    url: "https://figma.com",
    why: "Collaborative design. Integrates with development workflow.",
  },
];

export const learningResources: ResourceItem[] = [
  {
    title: "Full-Stack Open",
    description:
      "Comprehensive course covering modern web development from React to Node.js to MongoDB.",
    url: "https://fullstackopen.com",
    category: "Full-Stack",
    type: "course",
    difficulty: "intermediate",
  },
  {
    title: "The Pragmatic Programmer",
    description:
      "Essential reading for software engineers. Covers mindset, practices, and career development.",
    url: "https://pragmaticprogrammer.com",
    category: "Career",
    type: "book",
  },
  {
    title: "PostgreSQL Documentation",
    description:
      "Comprehensive official documentation. The reference for everything PostgreSQL.",
    url: "https://www.postgresql.org/docs/",
    category: "Database",
    type: "course",
    difficulty: "advanced",
  },
  {
    title: "System Design Interview",
    description:
      "Guide for designing large-scale systems. Essential preparation for senior roles.",
    url: "https://www.youtube.com/c/SystemDesignInterview",
    category: "Architecture",
    type: "course",
    difficulty: "advanced",
  },
  {
    title: "React Documentation",
    description:
      "Official React docs with interactive examples. Best place to learn React foundations.",
    url: "https://react.dev",
    category: "Frontend",
    type: "course",
    difficulty: "beginner",
  },
  {
    title: "Dev.to",
    description:
      "Community of developers sharing technical articles, tutorials, and experiences.",
    url: "https://dev.to",
    category: "Community",
    type: "community",
  },
  {
    title: "Hacker News",
    description:
      "Curated tech news and discussions. Pulse of the software engineering community.",
    url: "https://news.ycombinator.com",
    category: "Community",
    type: "community",
  },
  {
    title: "Papers with Code",
    description:
      "Machine learning research papers with reproducible code implementations.",
    url: "https://paperswithcode.com",
    category: "AI/ML",
    type: "community",
    difficulty: "advanced",
  },
  {
    title: "Next.js Documentation",
    description: "Official Next.js docs with API reference and best practices.",
    url: "https://nextjs.org/docs",
    category: "Framework",
    type: "course",
    difficulty: "intermediate",
  },
  {
    title: "Designing Data-Intensive Applications",
    description:
      "Deep dive into distributed systems, databases, and streaming. Industry bible.",
    url: "https://dataintensive.systems/",
    category: "Architecture",
    type: "book",
    difficulty: "advanced",
  },
];

export const techStack = {
  frontend: [
    { name: "React 19", why: "Component-based UI framework" },
    { name: "Next.js 16", why: "Full-stack React framework" },
    { name: "TypeScript 5.6", why: "Type safety at compile time" },
    { name: "Tailwind CSS 3.4", why: "Utility-first styling" },
    { name: "Framer Motion 11.18", why: "Animation library" },
    { name: "GSAP 3.14.2", why: "Advanced animations" },
    { name: "Lucide React", why: "Icon library" },
  ],
  backend: [
    { name: "Node.js 18+", why: "JavaScript runtime" },
    { name: "Express.js / Next.js API Routes", why: "Server framework" },
    { name: "PostgreSQL", why: "Primary database" },
    { name: "Redis", why: "Caching & sessions" },
    { name: "TypeScript", why: "Type-safe backend code" },
    { name: "Zod", why: "Schema validation" },
  ],
  devOps: [
    { name: "Docker", why: "Containerization" },
    { name: "GitHub Actions", why: "CI/CD pipelines" },
    { name: "Vercel", why: "Hosting & deployment" },
    { name: "PM2", why: "Process management" },
    { name: "Nginx", why: "Reverse proxy" },
  ],
  ai: [
    { name: "OpenAI API", why: "LLM access (GPT-4)" },
    { name: "Anthropic Claude API", why: "Advanced reasoning" },
    { name: "LangChain", why: "RAG orchestration" },
    { name: "Pinecone", why: "Vector database for RAG" },
    { name: "Puppeteer", why: "Web scraping" },
  ],
  tools: [
    { name: "VS Code", why: "Code editor" },
    { name: "GitHub", why: "Version control" },
    { name: "Figma", why: "Design system" },
    { name: "Linear", why: "Issue tracking" },
    { name: "Notion", why: "Documentation" },
  ],
};

export const preferences = {
  codeEditor: {
    tool: "VS Code",
    extensions: [
      "Copilot",
      "Prettier",
      "ESLint",
      "Thunder Client",
      "Database Client",
      "GitLens",
    ],
    theme: "Dracula (with custom tweaks)",
    fontSize: 13,
    fontFamily: "Fira Code",
  },
  codingStyle: {
    language: "TypeScript",
    linter: "ESLint + Prettier",
    testingFramework: "Vitest / Jest",
    formatting: "Automatic on save",
  },
  productivity: {
    taskManagement: "Linear",
    documentation: "Notion",
    timeTracking: "Manual (honest assessment)",
    communicationTools: ["Discord", "Slack", "Email"],
  },
  workflow: [
    "Start with problem definition (write spec)",
    "Skeleton code structure",
    "Core functionality",
    "Integration tests",
    "Polish & optimize",
    "Deploy & monitor",
  ],
};
