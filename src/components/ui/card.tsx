"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";
import { gsap, ScrollTrigger } from "@/lib/useGSAP";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient" | "bordered";
  delay?: number;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "default",
  delay = 0,
  hover = true,
  ...props
}: CardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const base =
    "rounded-2xl transition-all duration-300 " +
    (variant === "gradient"
      ? "bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-pink-500/20 border border-slate-200/50 dark:border-slate-700/50"
      : variant === "bordered"
        ? "border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur"
        : "bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none");

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Scroll-reveal is now handled globally via SmoothScroll's ScrollTrigger.batch for ".feature-card"

    // Hover lift
    if (hover) {
      const onEnter = () => {
        gsap.to(el, { y: -6, duration: 0.25, ease: "power2.out", overwrite: "auto" });
      };
      const onLeave = () => {
        gsap.to(el, { y: 0, duration: 0.25, ease: "power2.out", overwrite: "auto" });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === el) t.kill();
        });
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay, hover]);

  return (
    <div ref={wrapperRef} className="feature-card h-full gsap-will-change" style={{ opacity: 0 }}>
      <div className={`${base} ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
}

export function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-xl font-semibold text-slate-800 dark:text-slate-100 ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pt-2 ${className}`}>{children}</div>;
}
