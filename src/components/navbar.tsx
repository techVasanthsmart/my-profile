"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
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
          href="#hero"
          className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter"
        >
          Vasanth<span className="text-indigo-600 dark:text-neon-cyan">.</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] dark:text-slate-400 dark:hover:text-neon-cyan dark:hover:shadow-[0_0_10px_rgba(0,243,255,0.5)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-full bg-indigo-600/10 border border-indigo-600/50 px-6 py-2 text-sm font-bold text-indigo-700 shadow-[0_0_10px_rgba(99,102,241,0.3)] transition hover:bg-indigo-600 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] dark:bg-neon-purple/20 dark:border-neon-purple/50 dark:text-white dark:hover:bg-neon-purple dark:hover:shadow-[0_0_20px_rgba(188,19,254,0.6)]"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
