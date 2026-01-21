"use client";

import { useMemo } from "react";

type Sparkle = { top: string; left: string; delay: string; size: string; opacity: string };

export function Sparkles() {
  const sparkles = useMemo<Sparkle[]>(() => {
    const arr: Sparkle[] = [];
    for (let i = 0; i < 45; i++) {
      arr.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        size: `${2 + Math.random() * 3}px`,
        opacity: `${0.25 + Math.random() * 0.45}`,
      });
    }
    return arr;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}