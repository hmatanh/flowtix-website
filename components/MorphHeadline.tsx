"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

type Variant = {
  lines: string[];
  accent: number; // index of line that gets the gradient
};

const VARIANTS: Variant[] = [
  {
    lines: ["We Build the AI Systems", "Your Competitors", "Don’t Have Yet."],
    accent: 0,
  },
  {
    lines: ["Design-First.", "Intelligence-Driven.", "Results You Can Measure."],
    accent: 1,
  },
  {
    lines: ["The Last Agency", "You’ll Need.", ""],
    accent: 1,
  },
];

const CYCLE_MS = 4500;

export function MorphHeadline() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % VARIANTS.length), CYCLE_MS);
    return () => clearInterval(t);
  }, []);

  const v = VARIANTS[idx];

  return (
    <div className="text-center lg:text-left">
      <h1
        className="font-black tracking-tighter leading-[0.92]"
        style={{ fontSize: "clamp(40px, 7.5vw, 96px)" }}
        aria-label={VARIANTS[0].lines.join(" ")}
      >
        <AnimatePresence mode="wait">
          <m.span key={idx} className="block">
            {v.lines.filter(Boolean).map((line, i) => (
              <m.span
                key={`${idx}-${i}`}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{
                  y: -24,
                  opacity: 0,
                  transition: { duration: 0.3, delay: i * 0.04 },
                }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`block ${
                  i === v.accent ? "gradient-text-blue text-glow" : "text-white"
                }`}
              >
                {line}
              </m.span>
            ))}
          </m.span>
        </AnimatePresence>
      </h1>

      <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start" aria-hidden="true">
        {VARIANTS.map((_, i) => (
          <m.span
            key={i}
            animate={{
              scale: idx === i ? 1.3 : 1,
              backgroundColor: idx === i ? "#ffffff" : "#1a1a1a",
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-1.5 h-1.5 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
