"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

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
  const base =
    "rounded-2xl transition-all duration-300 " +
    (variant === "gradient"
      ? "bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-pink-500/20 border border-slate-200/50 dark:border-slate-700/50"
      : variant === "bordered"
        ? "border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur"
        : "bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none");

  const content = (
    <div className={`${base} ${className}`} {...props}>
      {children}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className="h-full"
    >
      {content}
    </motion.div>
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
