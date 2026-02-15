"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

const featuredProjects = [
  {
    title: "PDF Toolkit",
    description:
      "Merge multiple PDFs, split by page or custom ranges, reorder pages, convert images or Markdown to PDF. Production tool for quick document handling.",
    tags: ["Web", "PDF", "Next.js"],
    features: ["Merge PDFs", "Split by page or range", "Reorder pages", "Images/Markdown to PDF"],
    liveUrl: "https://pdf-toolkit.vasanthubs.co.in/",
    codeUrl: undefined as string | undefined,
    live: true,
  },
  {
    title: "AI Flight Booking Assistant",
    description:
      "AI-assisted flight booking and search. Streamlit app for natural-language queries and booking workflows.",
    tags: ["Python", "Streamlit", "AI"],
    features: ["Natural language search", "Flight booking flow", "Streamlit UI"],
    liveUrl: "https://ai-flight-booking-assistant-qwyknk3lgu6qgjgaab7qvb.streamlit.app/",
    codeUrl: "https://github.com/techVasanthsmart/AI-Flight-Booking-Assistant",
    live: true,
  },
  {
    title: "AI Synthetic Dataset Factory",
    description:
      "Generate synthetic datasets for ML and data pipelines. Streamlit demo for dataset creation and export.",
    tags: ["Python", "AI", "Data", "Streamlit"],
    features: ["Synthetic data generation", "Export formats", "Streamlit demo"],
    liveUrl: "https://aisyntheticdatasetfactory-debqy6maxvmrskryhx5jtk.streamlit.app/",
    codeUrl: "https://github.com/techVasanthsmart/AI_Synthetic_Dataset_Factory",
    live: true,
  },
];

const otherProjects = [
  {
    title: "Multi-AI Bot Conversation",
    description: "Multi-AI bot conversation app for comparing and chatting with different AI models.",
    tags: ["AI", "Chat", "Python"],
    liveUrl: undefined as string | undefined,
    codeUrl: "https://github.com/techVasanthsmart/Multi-AI-Bot-Conversation",
  },
];

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
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {project.features.map((f) => (
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
                <div className="flex gap-3 pt-2 mt-auto">
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
                <div>
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
                <div className="flex gap-3 mt-auto">
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="mb-4 text-center text-lg font-semibold text-slate-800 dark:text-slate-100">
            GitHub Activity
          </h3>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-4xl mx-auto"
          >
            <img
              src={ghChartUrl}
              alt="GitHub contribution graph"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={siteConfig.github}
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
