"use client";

// PostHero — per-post hero illustration, generated programmatically.
// All visuals are pure SVG with no external image dependencies, so we
// avoid copyright/licensing concerns entirely while still giving every
// article a unique, branded visual identity.

import { useMemo } from "react";

type PostHeroProps = {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
};

// Cheap deterministic hash so the same slug always produces the same
// visual seed values.
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function PostHero({ slug, category, categoryColor, title }: PostHeroProps) {
  const seed = useMemo(() => hashSlug(slug), [slug]);
  const rand = useMemo(() => seededRandom(seed), [seed]);

  // Generate 6-10 floating orbs with the category color, deterministic per slug.
  const orbs = useMemo(() => {
    const n = 6 + Math.floor(rand() * 4);
    return Array.from({ length: n }, () => ({
      cx: 5 + rand() * 90,
      cy: 5 + rand() * 90,
      r: 8 + rand() * 38,
      opacity: 0.08 + rand() * 0.22,
      blur: 12 + rand() * 20,
    }));
  }, [rand]);

  const grid = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i <= 10; i++) {
      lines.push({ x1: i * 10, y1: 0, x2: i * 10, y2: 100 });
      lines.push({ x1: 0, y1: i * 10, x2: 100, y2: i * 10 });
    }
    return lines;
  }, []);

  return (
    <div
      className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#080808] mb-10"
      style={{
        background: `radial-gradient(ellipse 60% 80% at 50% 50%, ${categoryColor}10, #080808 70%)`,
      }}
      role="img"
      aria-label={`${category} article illustration: ${title}`}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Subtle dot grid */}
        <defs>
          <pattern id={`grid-${seed}`} x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.18" fill="rgba(255,255,255,0.06)" />
          </pattern>
          <radialGradient id={`glow-${seed}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={categoryColor} stopOpacity="0.18" />
            <stop offset="100%" stopColor={categoryColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill={`url(#grid-${seed})`} />

        {/* Floating orbs (filter blur not in viewBox space — emulate with low opacity) */}
        {orbs.map((o, i) => (
          <circle
            key={i}
            cx={o.cx}
            cy={o.cy}
            r={o.r}
            fill={categoryColor}
            opacity={o.opacity}
          />
        ))}

        {/* Central halo */}
        <circle cx="50" cy="50" r="42" fill={`url(#glow-${seed})`} />

        {/* Subtle connecting lines between two orbs (geometric accent) */}
        {orbs.length >= 2 && (
          <line
            x1={orbs[0].cx}
            y1={orbs[0].cy}
            x2={orbs[1].cx}
            y2={orbs[1].cy}
            stroke={categoryColor}
            strokeWidth="0.15"
            opacity="0.4"
          />
        )}
      </svg>

      {/* Category badge in corner */}
      <div className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[9px] tracking-widest uppercase font-medium"
        style={{
          background: `${categoryColor}1a`,
          color: categoryColor,
          border: `1px solid ${categoryColor}33`,
        }}
      >
        {category}
      </div>
    </div>
  );
}
