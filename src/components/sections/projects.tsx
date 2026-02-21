"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { featuredProjects, otherProjects } from "@/data/projects";

const ghChartUrl = "https://ghchart.rshah.org/techVasanthsmart";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Real projects solving real problems. From PDF tools to AI-powered apps and live demos.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Card key={project.title} variant="gradient" delay={i * 0.1}>
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                {project.live && (
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Live
                  </span>
                )}
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full space-y-4">
                <div className="flex-grow flex flex-col">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {project.features?.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-200/80 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700/80 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-4 mt-auto border-t border-slate-100 dark:border-slate-800/50">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  >
                    Details &rarr;
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                    >
                      Visit
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <Link
                      href={project.caseStudyUrl}
                      className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                    >
                      Case Study
                    </Link>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 mt-16 text-xl font-semibold text-slate-800 dark:text-slate-100"
        >
          Other Projects
        </motion.h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <Card key={project.title} variant="bordered" delay={i * 0.05}>
              <CardHeader className="pb-1">
                <CardTitle className="text-base">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full space-y-3 pt-0">
                <div className="flex-grow flex flex-col">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-200/80 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-700/80 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  >
                    Details &rarr;
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                    >
                      Visit
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    >
                      Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative mx-auto w-full max-w-5xl group"
        >
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-30 blur transition duration-1000 group-hover:opacity-50"></div>
          <div className="relative overflow-hidden rounded-2xl bg-white/60 p-6 backdrop-blur-xl dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="mb-6 text-center text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
              GitHub Contributions
            </h3>
            <a
              href="https://github.com/techVasanthsmart"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full overflow-x-auto whitespace-nowrap pb-4 scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-transparent snap-x"
            >
              <img
                src={ghChartUrl}
                alt="GitHub contribution graph"
                className="min-w-[700px] w-full object-cover pr-4 sm:pr-0 filter dark:invert dark:hue-rotate-180"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/techVasanthsmart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            View Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
