"use client";

import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Stage = 0 | 1 | 2 | 3 | 4;

export function Loader({ onComplete }: { onComplete: () => void }) {
  // 0 = particles converging
  // 1 = diamond assembled + orbital + neural nodes
  // 2 = brand name materializes
  // 3 = pulse moment
  // 4 = exit — split panels
  const [stage, setStage] = useState<Stage>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 600);
    const t2 = setTimeout(() => setStage(2), 1300);
    const t3 = setTimeout(() => setStage(3), 2000);
    const t4 = setTimeout(() => setStage(4), 2500);
    const t5 = setTimeout(() => onComplete(), 3100);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [onComplete]);

  // 8 particles that gather toward the diamond vertices/inner
  const particles = [
    { id: 0, startX: -120, startY: -80, endX: 0, endY: -44 },
    { id: 1, startX: 120, startY: -80, endX: 0, endY: -44 },
    { id: 2, startX: -140, startY: 0, endX: -44, endY: 0 },
    { id: 3, startX: 140, startY: 0, endX: 44, endY: 0 },
    { id: 4, startX: -120, startY: 80, endX: 0, endY: 44 },
    { id: 5, startX: 120, startY: 80, endX: 0, endY: 44 },
    { id: 6, startX: -60, startY: -100, endX: -22, endY: -22 },
    { id: 7, startX: 60, startY: 100, endX: 22, endY: 22 },
  ];

  // 8 neural nodes orbiting the diamond
  const nodes = [
    { x: -90, y: -60, delay: 0.1 },
    { x: 90, y: -60, delay: 0.2 },
    { x: -100, y: 0, delay: 0.3 },
    { x: 100, y: 0, delay: 0.15 },
    { x: -90, y: 60, delay: 0.25 },
    { x: 90, y: 60, delay: 0.05 },
    { x: 0, y: -90, delay: 0.35 },
    { x: 0, y: 90, delay: 0.2 },
  ];

  const letters = "flowtix".split("");

  return (
    <AnimatePresence>
      {stage < 4 ? (
        <m.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#000000" }}
          exit={{ opacity: 1 }}
        >
          {/* === ANIMATED GRID BACKGROUND === */}
          <m.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff06 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            animate={{
              backgroundPosition:
                stage >= 1 ? ["0px 0px", "40px 40px"] : "0px 0px",
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* === OUTER GLOW === */}
          <m.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 200,
              height: 200,
              background:
                "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: stage >= 1 ? [0.5, 1, 0.5] : 0,
              scale: stage >= 1 ? [0.8, 1.2, 0.8] : 0.5,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* === CENTER STAGE === */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: 300, height: 300 }}
          >
            {/* PARTICLES converging */}
            {particles.map((p) => (
              <m.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: 4,
                  height: 4,
                  backgroundColor: "rgba(59,130,246,0.7)",
                  boxShadow: "0 0 8px rgba(59,130,246,0.8)",
                }}
                initial={{ x: p.startX, y: p.startY, opacity: 0, scale: 0 }}
                animate={{
                  x: stage >= 1 ? p.endX : p.startX,
                  y: stage >= 1 ? p.endY : p.startY,
                  opacity: stage >= 1 ? 0 : [0, 1, 1],
                  scale: stage >= 1 ? 0 : [0, 1.5, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: p.id * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}

            {/* === THE DIAMOND === */}
            <m.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                stage >= 1
                  ? { opacity: 1, scale: stage === 4 ? 8 : 1 }
                  : { opacity: 0, scale: 0.7 }
              }
              transition={
                stage === 4
                  ? { duration: 0.5, ease: [0.4, 0, 1, 1] }
                  : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }
            >
              <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
                <m.path
                  d="M44 4L84 44L44 84L4 44L44 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    stage >= 1
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
                <m.path
                  d="M44 24L64 44L44 64L24 44L44 24Z"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    stage >= 1
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
                <m.circle
                  cx="44"
                  cy="44"
                  r="3.5"
                  fill="#3B82F6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    stage >= 1
                      ? {
                          scale: stage >= 3 ? [1, 1.5, 1] : 1,
                          opacity: 1,
                        }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={
                    stage >= 3
                      ? { duration: 0.5, repeat: 2, ease: "easeInOut" }
                      : { duration: 0.3, delay: 0.4, ease: "backOut" }
                  }
                />
                {[
                  { cx: 44, cy: 4 },
                  { cx: 84, cy: 44 },
                  { cx: 44, cy: 84 },
                  { cx: 4, cy: 44 },
                ].map((dot, i) => (
                  <m.circle
                    key={i}
                    cx={dot.cx}
                    cy={dot.cy}
                    r="2"
                    fill="rgba(59,130,246,0.6)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      stage >= 1
                        ? { scale: [0, 1.4, 1], opacity: [0, 1, 0.6] }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + i * 0.06,
                      ease: "backOut",
                    }}
                  />
                ))}
              </svg>
            </m.div>

            {/* === ORBITAL RING (clockwise) === */}
            <m.div
              className="absolute pointer-events-none"
              style={{
                width: 130,
                height: 130,
                border: "1px solid rgba(59,130,246,0.25)",
                borderTopColor: "rgba(59,130,246,0.8)",
                borderRadius: "50%",
                boxShadow: "0 0 12px rgba(59,130,246,0.2)",
              }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={
                stage >= 1
                  ? { opacity: 1, rotate: 360 }
                  : { opacity: 0, rotate: 0 }
              }
              transition={{
                opacity: { duration: 0.3 },
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              }}
            />

            {/* === OUTER ORBITAL (counterclockwise) === */}
            <m.div
              className="absolute pointer-events-none"
              style={{
                width: 160,
                height: 160,
                border: "1px solid rgba(255,255,255,0.04)",
                borderBottomColor: "rgba(255,255,255,0.12)",
                borderRadius: "50%",
              }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={
                stage >= 1
                  ? { opacity: 1, rotate: -360 }
                  : { opacity: 0, rotate: 0 }
              }
              transition={{
                opacity: { duration: 0.3 },
                rotate: { duration: 3.5, repeat: Infinity, ease: "linear" },
              }}
            />

            {/* === NEURAL NODES === */}
            {nodes.map((node, i) => (
              <m.div
                key={i}
                className="absolute pointer-events-none"
                style={{ left: "50%", top: "50%" }}
                initial={{ opacity: 0 }}
                animate={stage >= 1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 + node.delay, duration: 0.3 }}
              >
                <m.div
                  style={{
                    position: "absolute",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transform: `translate(calc(${node.x}px - 2px), calc(${node.y}px - 2px))`,
                  }}
                  animate={
                    stage >= 2
                      ? {
                          backgroundColor: [
                            "rgba(255,255,255,0.2)",
                            "rgba(59,130,246,0.6)",
                            "rgba(255,255,255,0.2)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: node.delay,
                    ease: "easeInOut",
                  }}
                />
                <svg
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    pointerEvents: "none",
                    overflow: "visible",
                  }}
                  width="1"
                  height="1"
                >
                  <m.line
                    x1="0"
                    y1="0"
                    x2={node.x}
                    y2={node.y}
                    stroke="rgba(59,130,246,0.08)"
                    strokeWidth="0.5"
                    strokeDasharray="3 4"
                    initial={{ pathLength: 0 }}
                    animate={stage >= 1 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ delay: 0.7 + node.delay, duration: 0.5 }}
                  />
                </svg>
              </m.div>
            ))}

            {/* === PULSE RING (stage 3) === */}
            {stage >= 3 && (
              <m.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 100,
                  height: 100,
                  border: "1px solid rgba(59,130,246,0.5)",
                }}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
          </div>

          {/* === BRAND NAME === */}
          <div
            className="absolute flex items-center pointer-events-none"
            style={{ bottom: "38%", gap: "1.5px" }}
          >
            {letters.map((letter, i) => (
              <m.span
                key={i}
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  display: "inline-block",
                }}
                initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                animate={
                  stage >= 2
                    ? { y: 0, opacity: 1, filter: "blur(0px)" }
                    : { y: 20, opacity: 0, filter: "blur(8px)" }
                }
                transition={{
                  duration: 0.45,
                  delay: i * 0.055,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {letter}
              </m.span>
            ))}
          </div>

          {/* === LOADING ARC === */}
          <m.div
            className="absolute pointer-events-none"
            style={{ bottom: "28%" }}
            initial={{ opacity: 0 }}
            animate={stage >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="80" height="2" viewBox="0 0 80 2">
              <rect x="0" y="0" width="80" height="1.5" fill="#111" rx="1" />
              <m.rect
                x="0"
                y="0"
                height="1.5"
                rx="1"
                fill="white"
                initial={{ width: 0 }}
                animate={stage >= 2 ? { width: 80 } : { width: 0 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
            </svg>
          </m.div>
        </m.div>
      ) : (
        /* === EXIT: SPLIT PANELS === */
        <>
          <m.div
            key="top-panel"
            className="fixed inset-x-0 top-0 z-[9999] bg-black"
            style={{ height: "50vh" }}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          />
          <m.div
            key="bottom-panel"
            className="fixed inset-x-0 bottom-0 z-[9999] bg-black"
            style={{ height: "50vh" }}
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
