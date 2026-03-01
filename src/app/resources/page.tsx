import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { SummaryBox } from "@/components/summary-box";
import { FAQSection } from "@/components/faq-section";
import { AuthorBio } from "@/components/author-bio";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site-config";
import {
  recommendedTools,
  learningResources,
  techStack,
  preferences,
} from "@/data/resources";
import { ArrowRight, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Tools | Full-Stack Engineer",
  description:
    "Curated list of tools, frameworks, courses, and resources I use and recommend for full-stack development, AI/ML, and SaaS product building.",
  openGraph: {
    title: "Resources & Tools",
    description:
      "My recommended tools and learning resources for modern software development.",
    url: `${siteConfig.siteUrl}/resources`,
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
    title: "Resources & Tools",
    description:
      "My recommended tools and learning resources for modern software development.",
  },
};

const createArticleSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Resources & Tools I Use and Recommend",
  description: metadata.description,
  url: `${siteConfig.siteUrl}/resources`,
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
      name: "Resources",
      item: `${siteConfig.siteUrl}/resources`,
    },
  ],
});

const createToolListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: recommendedTools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: tool.name,
      description: tool.description,
      url: tool.url,
      applicationCategory: tool.category,
    },
  })),
});

export default function ResourcesPage() {
  const toolsByCategory = recommendedTools.reduce(
    (acc, tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = [];
      }
      acc[tool.category].push(tool);
      return acc;
    },
    {} as Record<string, typeof recommendedTools>,
  );

  const resourcesByCategory = learningResources.reduce(
    (acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = [];
      }
      acc[resource.category].push(resource);
      return acc;
    },
    {} as Record<string, typeof learningResources>,
  );

  const categoryColors: Record<string, string> = {
    "Full-Stack": "#3b82f6",
    "AI/ML": "#a855f7",
    SaaS: "#10b981",
    Career: "#f59e0b",
    Database: "#ef4444",
    Architecture: "#06b6d4",
    Framework: "#3b82f6",
    Frontend: "#3b82f6",
    "Version Control": "#6b7280",
    DevOps: "#ec4899",
    Community: "#8b5cf6",
    Language: "#3b82f6",
    Styling: "#3b82f6",
    Hosting: "#3b82f6",
    Runtime: "#3b82f6",
    Design: "#f59e0b",
    "AI Framework": "#a855f7",
  };

  return (
    <>
      <Navbar />
      <SchemaInjector schema={createArticleSchema()} />
      <SchemaInjector schema={createBreadcrumbSchema()} />
      <SchemaInjector schema={createToolListSchema()} />

      <main className="min-h-screen space-y-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Header */}
        <div className="space-y-8 border-b border-slate-200 px-6 py-20 dark:border-slate-800 sm:px-8">
          <Breadcrumbs items={[{ name: "Resources", url: "/resources" }]} />

          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Resources & Tools
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Curated list of tools, frameworks, courses, and resources I use
              and recommend for modern software development.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-5xl space-y-20 px-6 sm:px-8">
          {/* Quick Start */}
          <section className="space-y-6 rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:border-blue-900 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="flex items-start gap-3">
              <Zap className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Quick Start Recommendation
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  If you're just starting your software engineering journey:
                </p>
                <ol className="space-y-2 list-decimal list-inside text-slate-700 dark:text-slate-300">
                  <li>Learn JavaScript fundamentals (freeCodeCamp)</li>
                  <li>Build with React (react.dev)</li>
                  <li>Add Node.js backend with Express</li>
                  <li>Deploy on Vercel</li>
                  <li>Join communities (Dev.to, Hacker News)</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Recommended Tools */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Recommended Tools
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Tools and frameworks I use daily. All links are
                affiliate-neutral; I recommend based on technical merit.
              </p>
            </div>

            <div className="grid gap-8">
              {Object.entries(toolsByCategory).map(([category, tools]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: categoryColors[category] }}
                    />
                    {category}
                  </h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    {tools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-600"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                              {tool.name}
                              <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {tool.description}
                            </p>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                              {tool.why}
                            </p>
                          </div>
                        </div>
                        {tool.alternatives && (
                          <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
                            Alternatives: {tool.alternatives.join(", ")}
                          </p>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Resources */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Learning Resources
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Courses, books, and communities that shaped my software
                engineering journey.
              </p>
            </div>

            <div className="grid gap-8">
              {Object.entries(resourcesByCategory).map(
                ([category, resources]) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: categoryColors[category] }}
                      />
                      {category}
                    </h3>

                    <div className="space-y-3">
                      {resources.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-600"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1 flex-1">
                              <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                {resource.title}
                                <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                {resource.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {resource.difficulty && (
                                <span className="inline-block rounded-full px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {resource.difficulty === "beginner"
                                    ? "Beginner"
                                    : resource.difficulty === "intermediate"
                                      ? "Intermediate"
                                      : "Advanced"}
                                </span>
                              )}
                              <span className="inline-block rounded-full px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                {resource.type}
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </section>

          {/* Tech Stack Breakdown */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Tech Stack Breakdown
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Complete technology stack used for my projects.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {Object.entries(techStack).map(([category, techs]) => (
                <div
                  key={category}
                  className="space-y-3 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <h3 className="text-lg font-semibold text-slate-900 capitalize dark:text-white">
                    {category === "ai"
                      ? "AI/ML Tools"
                      : category.replace(/([A-Z])/g, " $1")}
                  </h3>

                  <div className="space-y-2">
                    {techs.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-start gap-3 rounded p-2 hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-white">
                            {tech.name}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {tech.why}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Development Preferences */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Development Preferences
              </h2>
            </div>

            <div className="space-y-6">
              {/* Code Editor */}
              <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                  Code Editor
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Editor
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {preferences.codeEditor.tool}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Theme
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {preferences.codeEditor.theme}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Font
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {preferences.codeEditor.fontFamily} (size{" "}
                      {preferences.codeEditor.fontSize})
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Extensions
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {preferences.codeEditor.extensions.map((ext) => (
                        <span
                          key={ext}
                          className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {ext}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coding Style */}
              <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                  Coding Style
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Primary Language
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {preferences.codingStyle.language}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Linter
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {preferences.codingStyle.linter}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Testing
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {preferences.codingStyle.testingFramework}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Formatting
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {preferences.codingStyle.formatting}
                    </span>
                  </div>
                </div>
              </div>

              {/* Workflow */}
              <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                  Development Workflow
                </h3>
                <ol className="space-y-2 list-decimal list-inside text-slate-700 dark:text-slate-300">
                  {preferences.workflow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-900 dark:from-emerald-900/20 dark:to-teal-900/20">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Want to see my full setup?
              </h2>
              <p className="text-slate-700 dark:text-slate-300">
                Check out my /uses page for detailed information about my
                personal tech preferences and workflow setup.
              </p>
              <Link
                href="/uses"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                View My /uses Page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            title="Resources FAQ"
            items={[
              {
                question: "Are you affiliated with these tools?",
                answer:
                  "No affiliate links here. I recommend tools based purely on technical merit and my personal experience using them daily.",
              },
              {
                question: "What should I learn first as a beginner developer?",
                answer:
                  "Start with JavaScript fundamentals, then React, then add Node.js for backend work. Follow the Quick Start Recommendation above.",
              },
              {
                question: "How do you stay updated with new tools?",
                answer:
                  "I actively participate in communities like Dev.to and Hacker News. I also follow technical blogs and experiment with new tools on side projects.",
              },
              {
                question: "Why Next.js over other frameworks?",
                answer:
                  "Next.js provides server-side rendering, static generation, API routes, image optimization, and excellent deployment experience all in one framework. It's the fastest way to ship production applications.",
              },
              {
                question: "What's your recommendation for databases?",
                answer:
                  "PostgreSQL for 95% of projects. It has excellent documentation, scales well, supports JSONB and full-text search, and is battle-tested in production environments.",
              },
              {
                question: "How do you learn new technologies?",
                answer:
                  "I follow the Build-Learn-Share cycle: build a small project with the new tech, deeply understand how it works, then share knowledge through blog posts or code.",
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
