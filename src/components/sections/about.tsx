"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gsap, ScrollTrigger } from "@/lib/useGSAP";

const timeline = [
  {
    yearShort: "21",
    year: "2021",
    title: "Started in PHP & Web",
    description: "Joined Maintec as PHP Developer; built HRMS and EPMS modules with CodeIgniter, Laravel, and Tauri.",
  },
  {
    yearShort: "22",
    year: "2022",
    title: "Software Developer",
    description: "Promoted; delivered multi-tenant HRMS and cross-platform productivity monitoring (EPMS).",
  },
  {
    yearShort: "23",
    year: "2023",
    title: "Full Stack at Koyal",
    description: "Architected custom CRM portal, core APIs, and Zoho integrations for USIPCOM.",
  },
  {
    yearShort: "25",
    year: "2025",
    title: "Senior Full Stack Developer",
    description: "Promoted at Koyal; led technical ownership and critical deliverables.",
  },
  {
    yearShort: "26",
    year: "2026",
    title: "SkillRev & Scale",
    description: "Leading end-to-end CRM portal development, GCP deployment, and CI/CD at SkillRev.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.from(".about-heading", {
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
        },
      });

      // Timeline items stagger
      gsap.from(".about-timeline-item", {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-timeline-list",
          start: "top 80%",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="about-heading mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            My coding journey from PHP and web development to full-stack and scalable systems.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card variant="gradient" delay={0} hover={false}>
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-slate-600 dark:text-slate-400">
                I focus on the full stack—frontend to backend, databases to DevOps—to
                deliver reliable, scalable applications. From REST APIs and React
                UIs to system design and deployment, I take ownership from idea to
                production.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                I believe in clean architecture, maintainable code, and shipping
                features that users and businesses rely on. When I&apos;m not coding,
                I&apos;m learning new tools or refining existing systems.
              </p>
            </CardContent>
          </Card>

          <div className="about-timeline-list space-y-4">
            {timeline.map((item, i) => (
              <div key={item.year} className="about-timeline-item">
                <Card variant="bordered" delay={i * 0.1}>
                  <CardContent className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                    <span className="text-4xl font-bold tabular-nums text-indigo-500 sm:text-5xl">
                      {item.yearShort}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {item.year} · {item.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
