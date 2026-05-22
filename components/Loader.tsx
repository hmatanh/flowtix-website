"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";

const LETTERS = ["f", "l", "o", "w", "t", "i", "x"];

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "progress" | "exit">("enter");
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Phase 1: icon draws  (0 → 800ms)
    // Phase 2: text + bar  (800 → 2200ms)
    // Phase 3: exit panels (2200 → 2800ms)
    const t1 = setTimeout(() => setPhase("progress"), 800);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const inc = p < 60 ? 3 : p < 85 ? 1.5 : 0.8;
        return Math.min(100, p + inc);
      });
    }, 18);

    const t2 = setTimeout(() => {
      setProgress(100);
      clearInterval(progressTimer);
      setExiting(true);
    }, 2200);

    const t3 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <m.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Diamond icon — draws itself */}
            <div className="mb-10">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <m.path
                  d="M32 4L60 32L32 60L4 32L32 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="square"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.1 },
                  }}
                />
                <m.path
                  d="M32 18L46 32L32 46L18 32L32 18Z"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.1, delay: 0.3 },
                  }}
                />
                <m.circle
                  cx="32"
                  cy="32"
                  r="2.5"
                  fill="rgba(255,255,255,0.6)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7, ease: "backOut" }}
                />
              </svg>
            </div>

            {/* Wordmark — letters in */}
            <div className="flex items-end gap-[2px] overflow-hidden mb-12">
              {LETTERS.map((letter, i) => (
                <m.span
                  key={i}
                  className="text-white font-bold inline-block"
                  style={{
                    fontSize: "28px",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                  initial={{ y: 40, opacity: 0 }}
                  animate={
                    phase !== "enter"
                      ? { y: 0, opacity: 1 }
                      : { y: 40, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </m.span>
              ))}
            </div>

            {/* Progress line */}
            <m.div
              className="relative overflow-hidden"
              style={{ width: 120, height: 1 }}
              initial={{ opacity: 0 }}
              animate={
                phase !== "enter" ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[#111]" />
              <div
                className="absolute left-0 top-0 h-full bg-white"
                style={{
                  width: `${progress}%`,
                  transition: "width 80ms linear",
                }}
              />
              <div
                className="absolute top-0 h-full w-8 pointer-events-none"
                style={{
                  left: `calc(${progress}% - 32px)`,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.45))",
                }}
              />
            </m.div>

            <m.span
              className="text-[#1a1a1a] text-[11px] font-mono mt-3 tabular-nums"
              initial={{ opacity: 0 }}
              animate={
                phase !== "enter" ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {Math.round(progress)}
            </m.span>
          </div>
        </m.div>
      ) : (
        <>
          {/* Top panel slides up */}
          <m.div
            key="panel-top"
            className="fixed left-0 right-0 z-[9999] bg-black overflow-hidden"
            style={{ top: 0, height: "50vh", willChange: "transform" }}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            aria-hidden="true"
          >
            <div className="flex items-end justify-center h-full pb-6">
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 4L60 32L32 60L4 32L32 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M32 18L46 32L32 46L18 32L32 18Z"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </m.div>

          {/* Bottom panel slides down */}
          <m.div
            key="panel-bottom"
            className="fixed left-0 right-0 z-[9999] bg-black overflow-hidden"
            style={{ bottom: 0, height: "50vh", willChange: "transform" }}
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            aria-hidden="true"
          >
            <div className="flex items-start justify-center h-full pt-6">
              <span className="text-white font-bold text-xl tracking-tight opacity-40">
                flowtix
              </span>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
