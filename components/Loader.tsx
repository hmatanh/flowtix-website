"use client";

import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/* ============================================================
   FLOWTIX LOADER — v4
   Clean. Minimal. Just the Flowtix mark (no wordmark).
   Black canvas. White mark. Subtle blue gradient accent.
   Animation: paths draw on → fill in → soft pulse → fade out.
   No text. No clutter. Premium first impression.
   ============================================================ */

type Stage = "draw" | "settled" | "exit";

// Brand mark paths — from app/icon.svg (two flowing curves)
const PATH_TOP =
  "M102.79 53.92L49.83 105.03C37.74 116.7 17.16 121.25 0.33 119.93C-1.52 105.4 4.44 92.88 14.72 82.91L85.12 14.57C106.49 -6.18 139.47 -4.06 160.32 16.47L228.32 83.46C210.59 91.69 187.97 89.99 173.93 76.58L149.92 53.65C137.31 41.61 116.02 41.16 102.79 53.92Z";

const PATH_BOTTOM =
  "M13.89 146.89C34.23 140.5 55.27 140.47 71.26 156.22L92.01 176.66C104.57 189.03 125.93 190.11 139.81 177.83C155.35 164.08 169.5 149.43 184.2 134.59C206.43 112.14 214.21 117.52 241.18 105.19C244.94 119.71 240.97 135.07 230.24 145.7L162.09 213.18C139.69 235.36 106.24 237.06 83.46 214.81L13.89 146.89Z";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<Stage>("draw");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      onComplete();
      return;
    }
    const t1 = setTimeout(() => setStage("settled"), 1100);
    const t2 = setTimeout(() => setStage("exit"), 1800);
    const t3 = setTimeout(() => onComplete(), 2400);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete, prefersReduced]);

  return (
    <AnimatePresence>
      {stage !== "exit" ? (
        <m.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#000000" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* === Ambient blue glow behind the mark (very subtle) === */}
          <m.div
            aria-hidden="true"
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 320,
              height: 320,
              background:
                "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: stage === "settled" ? [0.5, 0.9, 0.7] : 0.5,
              scale: stage === "settled" ? [0.9, 1.05, 1] : 0.9,
            }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 1.4, ease: "easeInOut" },
            }}
          />

          {/* === The mark === */}
          <m.div
            className="relative"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              width="96"
              height="96"
              viewBox="-3 -5 246 240"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter:
                  "drop-shadow(0 0 18px rgba(59,130,246,0.30)) drop-shadow(0 0 2px rgba(255,255,255,0.18))",
              }}
              aria-label="Flowtix"
            >
              {/* Gradient for the subtle blue tint on the mark */}
              <defs>
                <linearGradient
                  id="markGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="55%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#bfdbfe" />
                </linearGradient>
                <linearGradient
                  id="markGradStroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Phase 1: stroke draws on (0 → 1.0s).
                  Phase 2: fill fades in to give it weight. */}
              <m.path
                d={PATH_TOP}
                fill="url(#markGrad)"
                stroke="url(#markGradStroke)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{
                  pathLength: 1,
                  fillOpacity: stage === "draw" ? [0, 0, 1] : 1,
                }}
                transition={{
                  pathLength: {
                    duration: 1.0,
                    ease: [0.65, 0, 0.35, 1],
                  },
                  fillOpacity: {
                    duration: 0.6,
                    delay: 0.6,
                    ease: "easeOut",
                  },
                }}
              />

              <m.path
                d={PATH_BOTTOM}
                fill="url(#markGrad)"
                stroke="url(#markGradStroke)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{
                  pathLength: 1,
                  fillOpacity: stage === "draw" ? [0, 0, 1] : 1,
                }}
                transition={{
                  pathLength: {
                    duration: 1.0,
                    delay: 0.15,
                    ease: [0.65, 0, 0.35, 1],
                  },
                  fillOpacity: {
                    duration: 0.6,
                    delay: 0.75,
                    ease: "easeOut",
                  },
                }}
              />
            </svg>

            {/* === Soft pulse ring on settled — runs once, very subtle === */}
            {stage === "settled" && (
              <m.div
                aria-hidden="true"
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  margin: -8,
                }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.45, opacity: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            )}
          </m.div>

          {/* === Bottom progress hairline (minimal, almost invisible) === */}
          <m.div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              bottom: "26%",
              width: 48,
              height: 1,
              background: "rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <m.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), rgba(59,130,246,0.7), transparent)",
                width: "60%",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.6,
                ease: [0.4, 0, 0.2, 1],
                repeat: 2,
                repeatDelay: 0.2,
              }}
            />
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
