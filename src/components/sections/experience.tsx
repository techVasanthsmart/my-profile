"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "SkillRev LLP",
    companySubline: "Client: USIPCOM",
    roles: [{ role: "Senior Full Stack Developer", period: "Feb 2026 - Present" }],
    location: "Bengaluru, Karnataka, India",
    type: "Full-time · Remote",
    highlights: [
      "Leading end-to-end development of a custom CRM-like customer portal built from scratch based on evolving telecom business requirements.",
      "Designed modular architecture and implemented scalable backend and frontend systems.",
      "Managed complete deployment lifecycle on Google Cloud Platform (GCP).",
      "Implemented CI/CD pipelines using GitHub Actions for automated build and deployment.",
      "Customized Zoho CRM with advanced workflows, custom functions (Deluge), and client scripts to automate business processes.",
      "Developed system-to-system integrations using scheduled cron jobs and automation pipelines.",
      "Built bulk data ingestion workflows to process and normalize large FCC broadband datasets into internal systems.",
      "Developed and integrated an online PhoneBooth Store for product purchases with unified billing and payment gateway integration.",
      "Responsible for requirement analysis, development, production deployment, and post-release optimization.",
    ],
    skills: ["Project Management", "React.js", "GCP", "GitHub Actions", "Zoho CRM", "Deluge"],
  },
  {
    company: "Koyal Technologies LLP",
    companySubline: "Client: USIPCOM",
    roles: [
      { role: "Senior Full Stack Developer", period: "Apr 2025 - Present" },
      { role: "Full Stack Developer", period: "May 2023 - Apr 2025" },
    ],
    location: "Mumbai, Maharashtra, India",
    type: "Full-time · Remote",
    highlights: [
      "Promoted to Senior role in recognition of consistent performance, technical leadership, and ownership of critical deliverables.",
      "Architected and built the foundational structure of the custom CRM portal.",
      "Developed core business modules and backend APIs.",
      "Established integration between internal systems and Zoho CRM.",
      "Implemented initial automation workflows and cron-based background processing.",
    ],
    skills: ["MySQL", "MongoDB", "React", "Node.js", "GitHub", "Zoho CRM"],
  },
  {
    company: "Maintec Technologies - India",
    companySubline: "In-House Projects",
    roles: [
      { role: "Software Developer", period: "Apr 2022 - May 2023" },
      { role: "PHP Developer", period: "Nov 2021 - Apr 2022" },
    ],
    location: "Bengaluru, Karnataka, India",
    type: "Full-time · Remote",
    highlights: [
      "Promoted to Software Developer in recognition of proactive adoption of modern technologies and consistent delivery of high-impact solutions.",
      "HRMS: Designed and developed a multi-tenant HRMS platform supporting multiple companies and large-scale user bases. Built modules for employee management, payroll, attendance, leave tracking, performance, and reporting. Implemented scalable backend using PHP (CodeIgniter & Laravel) with MySQL and stored procedures. Designed database for high concurrency and multi-company isolation with RBAC.",
      "EPMS: Developed a cross-platform productivity monitoring tool using Tauri (Rust) for backend and HTML/JavaScript for real-time dashboard. Designed efficient data capture with secure transmission and reporting for performance evaluation.",
    ],
    skills: ["jQuery", "MongoDB", "PHP", "CodeIgniter", "Laravel", "MySQL", "Tauri"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 bg-slate-50/50 px-6 py-24 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Leading end-to-end product development and scalable systems across telecom, CRM, and enterprise tools.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <Card key={exp.company} variant="bordered" delay={i * 0.1}>
              <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-lg">{exp.company}</CardTitle>
                  {exp.companySubline && (
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {exp.companySubline}
                    </p>
                  )}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {exp.location} · {exp.type}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {exp.roles.map((r) => (
                    <div key={r.role}>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">
                        {r.role}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400"> · {r.period}</span>
                    </div>
                  ))}
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                {exp.skills?.length ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg bg-slate-200/80 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700/80 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
