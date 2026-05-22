"use client";

import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"draw" | "text" | "exit">("draw");
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 900);
    const t2 = setTimeout(() => setExiting(true), 2400);
    const t3 = setTimeout(() => onComplete(), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  // Reference 'phase' to keep linter happy — used to gate animations below.
  void phase;

  const letters = "flowtix".split("");

  return (
    <AnimatePresence>
      {!exiting ? (
        <m.div
          key="loader-screen"
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 1 }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff08 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Diamond SVG — draws itself */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mb-10 relative"
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <m.path
                d="M36 4L68 36L36 68L4 36L36 4Z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              />
              <m.path
                d="M36 20L52 36L36 52L20 36L36 20Z"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
              <m.circle
                cx="36"
                cy="36"
                r="3"
                fill="rgba(255,255,255,0.5)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.75 }}
              />
            </svg>
          </m.div>

          {/* Letters appear one by one */}
          <div
            className="flex items-center overflow-hidden relative"
            style={{ gap: "1px" }}
          >
            {letters.map((letter, i) => (
              <m.span
                key={i}
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  display: "inline-block",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
                initial={{ y: 36, opacity: 0 }}
                animate={
                  phase !== "draw"
                    ? { y: 0, opacity: 1 }
                    : { y: 36, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.065,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {letter}
              </m.span>
            ))}
          </div>

          {/* Thin progress line */}
          <m.div
            className="mt-10 relative overflow-hidden"
            style={{ width: "100px", height: "1px" }}
            initial={{ opacity: 0 }}
            animate={phase !== "draw" ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#111]" />
            <m.div
              className="absolute left-0 top-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={phase !== "draw" ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </m.div>
        </m.div>
      ) : (
        <>
          {/* TOP PANEL — slides up */}
          <m.div
            key="panel-top"
            className="fixed inset-x-0 top-0 z-[9999] bg-black"
            style={{ height: "50vh" }}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-end justify-center h-full pb-8">
              <svg width="28" height="28" viewBox="0 0 72 72" fill="none">
                <path
                  d="M36 4L68 36L36 68L4 36L36 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </m.div>

          {/* BOTTOM PANEL — slides down */}
          <m.div
            key="panel-bottom"
            className="fixed inset-x-0 bottom-0 z-[9999] bg-black"
            style={{ height: "50vh" }}
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-start justify-center h-full pt-8">
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.15)",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                flowtix
              </span>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
