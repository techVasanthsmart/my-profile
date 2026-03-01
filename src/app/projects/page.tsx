import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - All Work",
  description:
    "Complete portfolio of projects built by Vasanth Kumar. Full-stack applications, AI tools, and SaaS products.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects - All Work",
    description:
      "See all projects I've built with links to live demos and source code.",
    url: `${siteConfig.siteUrl}/projects`,
    type: "website",
  },
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Projects" }]} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Collection of projects I{`'`}ve built showcasing full-stack
            development, AI integration, and product design. Each project is
            live in production with source code available.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <article className="group h-full rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 hover:shadow-lg dark:border-gray-800 dark:hover:border-indigo-600">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>

                    {project.features && project.features.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          Features:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx}>✓ {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-gray-600 hover:underline dark:text-gray-400"
                        >
                          Source Code →
                        </a>
                      )}
                      {project.caseStudyUrl && (
                        <a
                          href={project.caseStudyUrl}
                          className="text-sm font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
                        >
                          Case Study →
                        </a>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Other Projects
            </h2>

            <div className="space-y-4">
              {otherProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <article className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-indigo-600 dark:border-gray-800 dark:hover:border-indigo-600">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                          {project.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-shrink-0 gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                          >
                            Live
                          </a>
                        )}
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-gray-600 hover:underline dark:text-gray-400"
                          >
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Stats */}
        <section className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950">
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {projects.length}
            </p>
            <p className="text-indigo-900 dark:text-indigo-100">
              Total Projects
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {projects.filter((p) => p.live).length}
            </p>
            <p className="text-blue-900 dark:text-blue-100">Live & Active</p>
          </div>

          <div className="rounded-lg bg-cyan-50 p-6 dark:bg-cyan-950">
            <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
              {projects.filter((p) => p.caseStudyUrl).length}
            </p>
            <p className="text-cyan-900 dark:text-cyan-100">
              With Case Studies
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            View More on GitHub
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Check out my GitHub profile for more projects, open-source
            contributions, and detailed code examples.
          </p>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Visit GitHub
          </a>
        </section>
      </main>
    </div>
  );
}
