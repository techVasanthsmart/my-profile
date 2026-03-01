"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Wraps gsap.context() with automatic cleanup.
 * @param callback  – receives the gsap context scope
 * @param deps      – React dependency array
 * @param scopeRef  – optional ref to scope DOM queries
 */
export function useGSAP(
  callback: (ctx: gsap.Context) => void,
  deps: React.DependencyList = [],
  scopeRef?: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (prefersReducedMotion()) {
      // Skip all animations when user prefers reduced motion
      return;
    }

    const ctx = gsap.context(() => {
      callback(ctx!);
    }, scopeRef?.current ?? undefined);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Check if user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
