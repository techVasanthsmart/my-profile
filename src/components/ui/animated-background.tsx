"use client";

import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-[-1] bg-background" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Dynamic blurred orbs */}
      <div className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40 [filter:blur(100px)]">
        {/* Top left subtle blue/indigo orb */}
        <motion.div
          animate={{
            x: ["0%", "20%", "-20%", "0%"],
            y: ["0%", "-20%", "20%", "0%"],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: isDark 
              ? "radial-gradient(circle at center, rgba(56, 189, 248, 0.2) 0%, transparent 60%)" 
              : "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 60%)",
          }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen"
        />
        {/* Top right purple/pink orb */}
        <motion.div
          animate={{
            x: ["0%", "-30%", "10%", "0%"],
            y: ["0%", "20%", "-10%", "0%"],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          style={{
            background: isDark 
              ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 60%)"
              : "radial-gradient(circle at center, rgba(236, 72, 153, 0.15) 0%, transparent 60%)",
          }}
          className="absolute top-[10%] -right-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen"
        />
        {/* Bottom teal/cyan orb */}
        <motion.div
          animate={{
            x: ["0%", "15%", "-25%", "0%"],
            y: ["0%", "15%", "-15%", "0%"],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          style={{
            background: isDark 
              ? "radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, transparent 60%)"
              : "radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 60%)",
          }}
          className="absolute -bottom-[20%] left-[15%] w-[80vw] h-[80vw] rounded-full mix-blend-screen"
        />
      </div>

      {/* Subtle tilting perspective grid */}
      <div className="absolute inset-0 [perspective:1000px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-x-0 bottom-0 h-[80vh] [transform-origin:bottom_center] [transform:rotateX(65deg)_scale(2)]"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)"
            } 1px, transparent 1px), linear-gradient(to bottom, ${
              isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)"
            } 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "center bottom",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)",
            maskImage: "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)",
          }}
        />
      </div>

      {/* Moving stars/particles layer for added depth -> optional lightweight CSS */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: isDark ? 0.3 : 0.1 }}>
        <div className="absolute h-[150%] w-[150%] -top-[25%] -left-[25%] opacity-[0.8]">
             <svg width="100%" height="100%">
               <filter id="noiseFilter">
                 <feTurbulence 
                   type="fractalNoise" 
                   baseFrequency="0.65" 
                   numOctaves="3" 
                   stitchTiles="stitch" 
                 />
               </filter>
               <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.1" style={{ mixBlendMode: "overlay" }} />
             </svg>
        </div>
      </div>
      
      {/* Front gradient vignette to blend edges softly into background color */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-80" />
    </div>
  );
}
