"use client";

/**
 * HeroAmbient — atmospheric layer for the homepage hero.
 *
 * Two layered systems behind the text:
 *
 *   1. Three soft gradient orbs that drift in position + opacity over
 *      20–30 second cycles. Each orb is a 60–80 px-blurred radial
 *      gradient, mixed via `mix-blend-mode: screen` so they layer
 *      onto the existing dot grid without darkening it.
 *
 *   2. Seven constellation dots scattered around the hero (kept off
 *      the headline axis so they never compete with type). Each dot
 *      breathes opacity + subtle scale at its own pace with a stagger
 *      so the field feels alive but never synchronized.
 *
 * Respects motion preferences from BOTH the OS-level
 * prefers-reduced-motion media query AND the in-site
 * AccessibilityWidget's "Reduce motion" toggle (which sets the
 * `a11y-reduced-motion` class on <html>). When reduced motion is on,
 * orbs render statically at their starting position and dots glow at
 * a fixed dim opacity — the page still gets ambient depth, just
 * without movement.
 *
 * Mobile-tuned: orbs render at ~65% size with `scale-[0.65]` and
 * three of the seven dots hide below md:, so 360 px phones get a
 * calmer scene that still avoids the flat-black backdrop.
 *
 * Layered as `absolute inset-0 pointer-events-none` so it never
 * intercepts taps and never blocks any other hero interaction.
 */

import { m, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ORBS = [
  // top-left area, biggest soft halo
  {
    cx: "12%",
    cy: "18%",
    size: 520,
    color: "rgba(59, 130, 246, 0.22)",
    duration: 26,
    delay: 0,
    drift: { x: ["0%", "6%", "-4%", "0%"], y: ["0%", "-5%", "3%", "0%"] },
  },
  // top-right, a touch lighter
  {
    cx: "78%",
    cy: "12%",
    size: 580,
    color: "rgba(96, 165, 250, 0.16)",
    duration: 34,
    delay: 5,
    drift: { x: ["0%", "-5%", "4%", "0%"], y: ["0%", "4%", "-3%", "0%"] },
  },
  // bottom-center
  {
    cx: "48%",
    cy: "78%",
    size: 460,
    color: "rgba(59, 130, 246, 0.14)",
    duration: 30,
    delay: 12,
    drift: { x: ["0%", "4%", "-3%", "0%"], y: ["0%", "-4%", "5%", "0%"] },
  },
];

// Mostly off the headline axis (center column), placed in the wings.
// hideOnMobile keeps 360-px phones calmer.
const DOTS = [
  { cx: "14%", cy: "36%", size: 5, base: 0.35, duration: 3.8, delay: 0.0 },
  { cx: "86%", cy: "28%", size: 4, base: 0.30, duration: 4.6, delay: 1.4 },
  { cx: "18%", cy: "68%", size: 6, base: 0.40, duration: 3.2, delay: 2.6 },
  { cx: "82%", cy: "72%", size: 4, base: 0.32, duration: 5.1, delay: 0.7 },
  { cx: "8%",  cy: "55%", size: 3, base: 0.28, duration: 4.2, delay: 3.4, hideOnMobile: true },
  { cx: "92%", cy: "50%", size: 3, base: 0.28, duration: 3.6, delay: 2.1, hideOnMobile: true },
  { cx: "50%", cy: "92%", size: 4, base: 0.30, duration: 4.4, delay: 1.8, hideOnMobile: true },
];

export function HeroAmbient() {
  // Framer's hook covers OS-level prefers-reduced-motion.
  const osReduce = useReducedMotion();
  // Plus listen for our AccessibilityWidget's toggle.
  const [widgetReduce, setWidgetReduce] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const update = () =>
      setWidgetReduce(html.classList.contains("a11y-reduced-motion"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const reduce = osReduce || widgetReduce;

  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* ── Layer 1: drifting orbs ──────────────────────────────── */}
      <div className="hero-orbs absolute inset-0 origin-center scale-[0.65] sm:scale-[0.85] lg:scale-100">
        {ORBS.map((orb, i) => (
          <m.div
            key={"orb-" + i}
            className={"absolute rounded-full" + (reduce ? "" : " will-change-transform")}
            style={{
              left: orb.cx,
              top: orb.cy,
              width: orb.size,
              height: orb.size,
              marginLeft: -orb.size / 2,
              marginTop: -orb.size / 2,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
              filter: "blur(var(--orb-blur, 60px))",
              mixBlendMode: "screen",
            }}
            animate={
              (reduce || !inView)
                ? undefined
                : {
                    x: orb.drift.x,
                    y: orb.drift.y,
                    opacity: [0.85, 1, 0.7, 0.85],
                  }
            }
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* ── Layer 2: constellation dots ─────────────────────────── */}
      {DOTS.map((d, i) => (
        <m.span
          key={"dot-" + i}
          className={
            "absolute block rounded-full bg-blue-400" +
            (d.hideOnMobile ? " hidden md:block" : "")
          }
          style={{
            left: d.cx,
            top: d.cy,
            width: d.size,
            height: d.size,
            marginLeft: -d.size / 2,
            marginTop: -d.size / 2,
            boxShadow: `0 0 ${d.size * 3}px rgba(59, 130, 246, 0.5)`,
          }}
          animate={
            (reduce || !inView)
              ? { opacity: d.base }
              : {
                  opacity: [d.base * 0.4, d.base * 1.6, d.base * 0.4],
                  scale: [0.85, 1.15, 0.85],
                }
          }
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
