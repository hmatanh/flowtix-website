"use client";

import { useEffect, useRef } from "react";

export function PerspectiveGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let pendingX = 50;
    let pendingY = 50;
    const flush = () => {
      raf = 0;
      el.style.setProperty("--mx", pendingX + "%");
      el.style.setProperty("--my", pendingY + "%");
    };
    const onMove = (e: MouseEvent) => {
      pendingX = (e.clientX / window.innerWidth) * 100;
      pendingY = (e.clientY / window.innerHeight) * 100;
      if (!raf) raf = requestAnimationFrame(flush);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="perspective-grid pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
