"use client";

import { useEffect } from "react";

/**
 * Smooth scroll via Lenis. Dynamically imports Lenis only when it
 * will actually run — saves ~30KB of JS on mobile / reduced-motion /
 * slow-connection users where smooth scroll is intentionally skipped.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Skip on slow connections / data-saver mode
    const nav = navigator as Navigator & {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
      };
    };
    const conn = nav.connection;
    if (conn && (conn.saveData || conn.effectiveType === "2g")) return;

    let rafId = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    // Dynamic import — Lenis chunk loads only when we actually need it.
    import("@studio-freight/lenis").then((mod) => {
      if (cancelled) return;
      const Lenis = mod.default;
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
        infinite: false,
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
