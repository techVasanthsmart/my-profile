"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

import { projects } from "@/data/projects";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/50 backdrop-blur-xl dark:border-white/10 dark:bg-black/50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/#hero"
          className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter"
        >
          Vasanth
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            link.label === "Projects" ? (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="relative flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-neon-cyan py-2"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] dark:bg-neon-cyan dark:group-hover:shadow-[0_0_10px_rgba(0,243,255,0.5)]"></span>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full -left-6 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-[280px] z-50">
                  <div className="p-2 rounded-xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl dark:border-slate-800 dark:bg-slate-950/95">
                    <ul className="space-y-1">
                      {projects.map((project) => (
                        <li key={project.slug}>
                          <Link 
                            href={`/projects/${project.slug}`}
                            className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-neon-cyan transition-colors"
                          >
                            <div className="font-medium">{project.title}</div>
                            {project.caseStudyUrl && (
                              <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                                Has Case Study
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-neon-cyan group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] dark:bg-neon-cyan dark:group-hover:shadow-[0_0_10px_rgba(0,243,255,0.5)]"></span>
                </Link>
              </li>
            )
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="rounded-full bg-indigo-600/10 border border-indigo-600/50 px-6 py-2 text-sm font-bold text-indigo-700 shadow-[0_0_10px_rgba(99,102,241,0.3)] transition hover:bg-indigo-600 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] dark:bg-neon-purple/20 dark:border-neon-purple/50 dark:text-white dark:hover:bg-neon-purple dark:hover:shadow-[0_0_20px_rgba(188,19,254,0.6)]"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
