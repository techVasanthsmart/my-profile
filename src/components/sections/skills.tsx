"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: "🎨",
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MySQL / MongoDB", level: 82 },
      { name: "Database ORMs", level: 80 },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub Actions", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "GCP", level: 80 },
      { name: "Zoho CRM / Deluge", level: 78 },
      { name: "PHP / Laravel", level: 82 },
      { name: "Tauri", level: 70 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-slate-50/50 px-6 py-24 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            4+ years of hands-on experience with modern web technologies. Full stack with a
            focus on scalability and clean architecture.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <Card key={category.title} variant="gradient" delay={catIndex * 0.1}>
              <CardHeader>
                <span className="mb-2 text-3xl" role="img" aria-hidden>
                  {category.icon}
                </span>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.1 + i * 0.05}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
