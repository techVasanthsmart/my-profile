"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/useGSAP";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Initial setup for feature cards if any exist
    const cards = gsap.utils.toArray(".feature-card");
    if (cards.length > 0) {
      ScrollTrigger.batch(".feature-card", {
        interval: 0.1, // time window (in seconds) for batching
        batchMax: 5, // maximum batch size
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "power2.out", overwrite: true }),
        onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 50, stagger: 0.1, duration: 0.6, ease: "power3.in", overwrite: true }),
        start: "top 85%",
        // we can also add onLeave and onEnterBack if we want to hide when scrolling down past them, but usually we just want them revealed
      });
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      // Kill batch scroll triggers
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === ".feature-card") t.kill();
      });
    };
  }, [pathname]);

  return <>{children}</>;
}
