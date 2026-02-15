"use client";

import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
{/* Built with Next.js & Tailwind CSS */}
        </div>
        <div className="flex gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
