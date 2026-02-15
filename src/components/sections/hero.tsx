"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const pdfToolkitUrl = "https://pdf-toolkit.vasanthubs.co.in/";
const portfolioUrl = "https://vasanthubs.co.in/";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Vasanth Kumar";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:from-neon-cyan dark:to-neon-purple"></div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white border border-slate-200 dark:bg-black dark:border-slate-800 overflow-hidden">
               <Image
                 src="/svk.png"
                 alt="Vasanth Kumar"
                 width={80}
                 height={80}
                 className="h-full w-full object-cover"
                 priority
               />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-lg font-medium text-indigo-600 tracking-widest uppercase dark:text-neon-cyan dark:neon-text"
        >
          System Online // Initializing...
        </motion.p>

        <h1 className="mb-6 text-6xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-7xl md:text-9xl glitch-container">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400">
            {text}
          </span>
          <span className="animate-pulse text-indigo-600 dark:text-neon-purple">_</span>
        </h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="glass-panel p-6 rounded-2xl mx-auto max-w-3xl mb-10 border-indigo-100 dark:border-neon-cyan/20"
        >
          <p className="text-xl text-slate-700 dark:text-slate-300 sm:text-2xl leading-relaxed">
            Architecting <span className="text-indigo-600 dark:text-neon-cyan">Digital Realities</span> &{" "}
            <span className="text-indigo-500 dark:text-neon-purple">Intelligent Systems</span>
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Senior Full Stack Developer | AI Enthusiast | Problem Solver
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400 opacity-70 transition-all duration-300 group-hover:opacity-100 dark:from-neon-cyan dark:via-neon-purple dark:to-neon-green"></span>
            <span className="relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg text-slate-900 transition-all duration-300 group-hover:bg-transparent group-hover:text-white dark:bg-black dark:text-white">
              Explore Projects
            </span>
          </Link>

          <Link
            href="#contact"
            className="group px-8 py-4 rounded-full border border-slate-300 hover:border-indigo-600 text-slate-700 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] bg-white/50 backdrop-blur-sm hover:bg-indigo-600 dark:border-slate-700 dark:hover:border-neon-cyan dark:text-slate-300 dark:hover:text-white dark:hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] dark:bg-black/50"
          >
            Initialize Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
