import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { SummaryBox } from "@/components/summary-box";
import { FAQSection } from "@/components/faq-section";
import { AuthorBio } from "@/components/author-bio";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uses | Full-Stack Engineer",
  description:
    "My personal tech setup, tools, hardware, and software I use daily for development, design, and productivity.",
  openGraph: {
    title: "Uses",
    description:
      "My personal tech setup and tools I use for software development.",
    url: `${siteConfig.siteUrl}/uses`,
    type: "website",
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses",
    description:
      "My personal tech setup and tools I use for software development.",
  },
};

const createArticleSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "My Personal Tech Setup (/uses)",
  description: metadata.description,
  url: `${siteConfig.siteUrl}/uses`,
  datePublished: "2024-02-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
});

const createBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Uses",
      item: `${siteConfig.siteUrl}/uses`,
    },
  ],
});

export default function UsesPage() {
  const tools = [
    {
      category: "Hardware",
      items: [
        {
          name: "MacBook Pro 16-inch (2024)",
          description:
            "Primary development machine with M4 Pro chip and 36GB RAM",
          why: "High-performance compilation, smooth multitasking with Docker and databases running.",
        },
        {
          name: 'Dell UltraSharp 27" 4K Monitor',
          description: "External display for dual monitor setup",
          why: "Extremely sharp for long development sessions. USB-C connectivity.",
        },
        {
          name: "Magic Keyboard & Magic Mouse",
          description: "Apple's wireless peripherals",
          why: "Ergonomic and seamless macOS integration.",
        },
        {
          name: "Logitech MX Master 3S",
          description: "Advanced mouse with gesture controls",
          why: "Better ergonomics and customizable buttons for development.",
        },
      ],
    },
    {
      category: "Software - Development",
      items: [
        {
          name: "VS Code",
          description: "Code editor with extensive extensions ecosystem",
          why: "Fast, lightweight, and incredibly customizable. JavaScript debugging is seamless.",
        },
        {
          name: "GitHub Copilot",
          description: "AI-powered code completion and generation",
          why: "Dramatically speeds up development. Reduces boilerplate writing.",
        },
        {
          name: "Terminal (iTerm2)",
          description: "macOS terminal replacement",
          why: "Better performance and customization than stock Terminal.",
        },
        {
          name: "Docker & Docker Desktop",
          description: "Containerization for local development",
          why: "Ensures production parity. Run databases, caches, services locally.",
        },
        {
          name: "Git & GitHub Desktop",
          description: "Version control and collaboration",
          why: "Git is non-negotiable. GitHub Desktop for visual branch management.",
        },
      ],
    },
    {
      category: "Software - Design & Productivity",
      items: [
        {
          name: "Figma",
          description: "Web-based design and prototyping tool",
          why: "Collaborative design with developers. Component systems simplify handoff.",
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes and documentation",
          why: "Central hub for project specs, decision logs, and knowledge base.",
        },
        {
          name: "Linear",
          description: "Modern issue tracking and project management",
          why: "Fast, keyboard-driven, and GitHub integration is excellent.",
        },
        {
          name: "Slack",
          description: "Team communication and notifications",
          why: "Standard in tech teams. Integrates with development tools.",
        },
        {
          name: "Raycast",
          description: "Productivity launcher and command palette for macOS",
          why: "Faster than Spotlight. Quick access to tools and scripts.",
        },
      ],
    },
    {
      category: "Terminal & Dotfiles",
      items: [
        {
          name: "Zsh + Oh My Zsh",
          description: "Shell with plugin ecosystem",
          why: "Better autocomplete and syntax highlighting than bash.",
        },
        {
          name: "Homebrew",
          description: "Package manager for macOS",
          why: "Install and manage all development tools effortlessly.",
        },
        {
          name: "fzf",
          description: "Fuzzy finder for filesystem and command history",
          why: "Dramatically speeds up terminal navigation.",
        },
        {
          name: "bat",
          description: "Better cat command with syntax highlighting",
          why: "Colorized code in terminal. Integrates with fzf.",
        },
        {
          name: "exa",
          description: "Modern replacement for ls command",
          why: "Better colors and information in directory listings.",
        },
      ],
    },
    {
      category: "Browser Extensions",
      items: [
        {
          name: "Wappalyzer",
          description: "Identify technologies used on websites",
          why: "Quickly see tech stack of any site. Great for competitive analysis.",
        },
        {
          name: "Lighthouse",
          description: "Google's web performance auditing tool",
          why: "Built-in performance, accessibility, SEO auditing.",
        },
        {
          name: "React DevTools",
          description: "Chrome extension for debugging React apps",
          why: "Essential for React development. Inspect component trees and state.",
        },
        {
          name: "ColorPick Eyedropper",
          description: "Color picker for any element on the page",
          why: "Quick color sampling without opening DevTools.",
        },
      ],
    },
    {
      category: "Fonts & Typography",
      items: [
        {
          name: "Fira Code",
          description: "Monospace font with ligatures for code",
          why: "Beautiful ligatures for programming operators. Very readable.",
        },
        {
          name: "Inter",
          description: "Font family optimized for computer screens",
          why: "Used across this website. Excellent for UI text at all sizes.",
        },
        {
          name: "Space Mono",
          description: "Fixed-width typeface for headers",
          why: "Distinctive character. Used for branding on this site.",
        },
      ],
    },
    {
      category: "VS Code Extensions (Top 10)",
      items: [
        {
          name: "GitHub Copilot",
          description: "AI code completion",
          why: "10x productivity boost. Worth the subscription.",
        },
        {
          name: "Prettier",
          description: "Code formatter for consistency",
          why: "Remove formatting debates. Format on save.",
        },
        {
          name: "ESLint",
          description: "JavaScript/TypeScript linter",
          why: "Catch errors before runtime. Enforce code standards.",
        },
        {
          name: "Thunder Client",
          description: "REST API client (Postman alternative)",
          why: "Lightweight API testing without leaving VS Code.",
        },
        {
          name: "Database Client",
          description: "SQL database explorer and editor",
          why: "Run queries without switching to separate database tool.",
        },
        {
          name: "GitLens",
          description: "Git information inline in editor",
          why: "Blame info, commit history, branch graphs.",
        },
        {
          name: "Peacock",
          description: "Color code your workspace by project",
          why: "Prevents switching code in wrong project.",
        },
        {
          name: "TODO Highlight",
          description: "Highlight TODO and FIXME comments",
          why: "Never lose track of important code markers.",
        },
        {
          name: "Better Comments",
          description: "Color highlight different comment types",
          why: "Comments are more readable and scannable.",
        },
        {
          name: "Error Lens",
          description: "Display errors inline in the editor",
          why: "See linting errors without hovering.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <SchemaInjector schema={createArticleSchema()} />
      <SchemaInjector schema={createBreadcrumbSchema()} />

      <main className="min-h-screen space-y-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Header */}
        <div className="space-y-8 border-b border-slate-200 px-6 py-20 dark:border-slate-800 sm:px-8">
          <Breadcrumbs items={[{ name: "Uses", url: "/uses" }]} />

          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              /uses
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              My personal tech setup, tools, and software I use daily for
              development, design, and productivity. Inspired by{" "}
              <a
                href="https://uses.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                uses.tech
              </a>
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-5xl space-y-12 px-6 sm:px-8">
          {/* About /uses */}
          <section className="rounded-lg border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              What is /uses?
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              /uses is a standard page format in the developer community to
              share details about setup, hardware, and software. The concept
              started with{" "}
              <a
                href="https://uses.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                uses.tech
              </a>{" "}
              and has become a fun way for developers to discover what tools and
              workflows others prefer.
            </p>
          </section>

          {/* Tools by Category */}
          <div className="space-y-12">
            {tools.map((section) => (
              <section key={section.category} className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {section.category}
                  </h2>
                </div>

                <div className="grid gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-600"
                    >
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                        <div className="rounded bg-blue-50 p-3 dark:bg-blue-900/20">
                          <p className="text-sm text-blue-900 dark:text-blue-300">
                            <strong className="font-semibold">
                              Why I use it:
                            </strong>{" "}
                            {item.why}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Pricing & Subscriptions */}
          <section className="space-y-6 rounded-lg border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8 dark:border-amber-900 dark:from-amber-900/20 dark:to-orange-900/20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Subscriptions & Costs
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              I invest in tools that provide real value:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  tool: "GitHub Copilot",
                  cost: "$10/month",
                  value: "Saves 3+ hours/week",
                },
                {
                  tool: "Linear",
                  cost: "Free/Team",
                  value: "Project management",
                },
                {
                  tool: "Figma",
                  cost: "$12/month",
                  value: "Design & collaboration",
                },
                {
                  tool: "Raycast Pro",
                  cost: "$10/month",
                  value: "Productivity launcher",
                },
              ].map((item) => (
                <div
                  key={item.tool}
                  className="space-y-1 rounded-lg border border-orange-200 bg-white/50 p-4 dark:border-orange-800 dark:bg-slate-800/50"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {item.tool}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.cost}
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              I don&apos;t use subscription software for the sake of it. Each
              tool must provide ROI in time saved or quality improved.
            </p>
          </section>

          {/* Workflow Philosophy */}
          <section className="space-y-6 rounded-lg border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Development Workflow
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Daily Routine
                </h3>
                <ol className="mt-2 list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Check Linear for prioritized tasks</li>
                  <li>Code with Copilot assistance in VS Code</li>
                  <li>Test locally with Docker running services</li>
                  <li>Use Thunder Client for API testing</li>
                  <li>Review in Figma when design questions arise</li>
                  <li>Commit and push to GitHub</li>
                  <li>Monitor Slack for team communication</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Code Quality
                </h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Prettier auto-formats on save (no debates)</li>
                  <li>ESLint catches errors during development</li>
                  <li>TypeScript prevents type errors</li>
                  <li>GitHub Copilot suggests better patterns</li>
                  <li>Write tests before shipping</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Productivity Tips
                </h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Use keyboard shortcuts aggressively</li>
                  <li>Raycast for quick app/file access</li>
                  <li>fzf for terminal history search</li>
                  <li>Turn notifications off during deep work</li>
                  <li>Single monitor focus → dual monitor multitasking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resources Link */}
          <section className="rounded-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-900 dark:from-emerald-900/20 dark:to-teal-900/20">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Want recommendations?
              </h2>
              <p className="text-slate-700 dark:text-slate-300">
                Check out my /resources page for a curated list of tools,
                frameworks, and learning resources I recommend.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                View Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            title="/uses FAQ"
            items={[
              {
                question: "How often do you update your tools?",
                answer:
                  "I review my tooling quarterly. I prefer stability over constantly chasing new tools, but I pay attention to new releases and try them on side projects.",
              },
              {
                question: "Is your MacBook overkill for development?",
                answer:
                  "For my workflow with Docker, multiple browsers, and heavy AI tools, the M4 Pro keeps everything smooth. It's a productivity multiplier.",
              },
              {
                question: "Why Figma over other design tools?",
                answer:
                  "Built-in collaboration, component systems, excellent API for integration, and it's the industry standard. Client files are usually in Figma anyway.",
              },
              {
                question: "Do you actually use all extensions in VS Code?",
                answer:
                  "Yes, but I keep them to the top 10 that provide the most value. I disable extensions I haven't used in a week.",
              },
              {
                question: "What would you recommend for beginners?",
                answer:
                  "Start simple: VS Code, Node.js, Git. Master the fundamentals before adding tools. You don't need all this to write great code.",
              },
              {
                question: "Hardware lifespan?",
                answer:
                  "I upgrade MacBooks every 3-4 years. The M4 Pro should last me 4+ years before needing an upgrade.",
              },
            ]}
          />
        </div>
      </main>

      <AuthorBio />
      <Footer />
    </>
  );
}
