"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "@/lib/useGSAP";

const pdfToolkitUrl = "https://pdf-toolkit.vasanthubs.co.in/";
const portfolioUrl = "https://vasanthubs.co.in/";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fullText = "Vasanth Kumar";

  // Split headline into individual character spans for GSAP stagger animation
  const chars = useMemo(
    () =>
      fullText.split("").map((ch, i) => (
        <span key={i} className="hero-char inline-block text-slate-900 dark:text-slate-200">
          {ch === " " ? "\u00A0" : ch}
        </span>
      )),
    []
  );

  // GSAP page-load sequence
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Hide characters initially (before stagger begins)
      gsap.set(".hero-char", { autoAlpha: 0, y: 60 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Stagger headline characters in from below with a springy pop
      tl.to(".hero-char", {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.04,
          ease: "back.out(1.7)",
        })
        // 2. Hero avatar scales down from 1.2 → 1.0 while fading in
        .from(
          ".hero-avatar",
          {
            opacity: 0,
            scale: 1.2,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // 3. Rest of the entrance sequence
        .from(
          ".hero-status",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".hero-glass",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.1"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 25,
            duration: 0.5,
          },
          "-=0.1"
        );

      // Floating blob animation
      gsap.to(".hero-blob", {
        y: 15,
        x: -10,
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-blob-2", {
        y: -12,
        x: 8,
        scale: 0.95,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Floating blobs */}
      <div className="hero-blob absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10" />
      <div className="hero-blob-2 absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-500/10" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="hero-avatar mb-8">
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
        </div>

        <p className="hero-status mb-4 text-lg font-medium text-indigo-600 tracking-widest uppercase dark:text-neon-cyan dark:neon-text">
          System Online // Initializing...
        </p>

        <h1
          className="hero-headline mb-6 text-6xl font-bold tracking-tighter sm:text-7xl md:text-9xl"
        >
          {chars}
          <span className="animate-pulse text-indigo-600 dark:text-neon-purple">_</span>
        </h1>

        <div className="hero-glass glass-panel p-6 rounded-2xl mx-auto max-w-3xl mb-10 border-indigo-100 dark:border-neon-cyan/20">
          <p className="text-xl text-slate-700 dark:text-slate-300 sm:text-2xl leading-relaxed">
            Architecting <span className="text-indigo-600 dark:text-neon-cyan">Digital Realities</span> &{" "}
            <span className="text-indigo-500 dark:text-neon-purple">Intelligent Systems</span>
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Senior Full Stack Developer | AI Enthusiast | Problem Solver
          </p>
        </div>

        <div className="hero-cta flex flex-wrap items-center justify-center gap-6">
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
        </div>
      </div>
    </section>
  );
}
