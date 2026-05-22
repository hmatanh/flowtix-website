"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) {
      document.body.classList.add("no-custom-cursor");
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let started = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
      if (!started) {
        rx = mx;
        ry = my;
        ring.style.left = mx + "px";
        ring.style.top = my + "px";
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        started = true;
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      const hovered = t?.closest(
        "a, button, [data-hover], input, select, textarea, label"
      );
      if (hovered) {
        dot.classList.add("hovering");
        ring.classList.add("hovering");
      } else {
        dot.classList.remove("hovering");
        ring.classList.remove("hovering");
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} id="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
}
