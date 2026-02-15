"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "@/components/theme-provider";

export function BackgroundMatrix() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] bg-background transition-colors duration-300">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <MatrixRain color={isDark ? "#00f3ff" : "#6366f1"} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
    </div>
  );
}

function MatrixRain({ color, ...props }: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    const coords = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = 1.5 * Math.cbrt(Math.random()); 
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        coords[i * 3] = x;
        coords[i * 3 + 1] = y;
        coords[i * 3 + 2] = z;
    }
    return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color={color}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
