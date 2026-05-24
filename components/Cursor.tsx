"use client";

import { useEffect, useRef } from "react";

/**
 * Fast, premium custom cursor.
 * - Tracks pointer at 60fps with an aggressive lerp (0.85) — feels instant.
 * - Single composited element + ::before / ::after for ring (no chase-lag).
 * - mix-blend-mode: difference makes the dot read on light + dark sections.
 * - Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.85;
      pos.current.y += (target.current.y - pos.current.y) * 0.85;
      dot.style.transform = `translate3d(${pos.current.x - 6}px, ${pos.current.y - 6}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    // Hover detection via delegated mouseover (handles dynamically-rendered nodes)
    const HOVER_SELECTOR = "a, button, [data-hover], [role=button], input, select, textarea, label";
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t?.closest(HOVER_SELECTOR)) {
        dot.classList.add("hovered");
      } else {
        dot.classList.remove("hovered");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
          /* Preserve text input cursor for usability */
          input[type=text], input[type=email], input[type=tel],
          input[type=search], input[type=password], input[type=url],
          input[type=number], textarea {
            cursor: text !important;
          }
        }

        #cursor-main {
          position: fixed;
          top: 0; left: 0;
          width: 12px; height: 12px;
          pointer-events: none;
          z-index: 999999;
          mix-blend-mode: difference;
          will-change: transform;
        }

        #cursor-main::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: white;
          transition: transform 0.15s ease, border-radius 0.15s ease;
        }

        #cursor-main.hovered::before {
          transform: scale(2.2);
          border-radius: 3px;
        }

        #cursor-main::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 36px; height: 36px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        #cursor-main.hovered::after {
          transform: translate(-50%, -50%) scale(1.4);
          opacity: 0;
        }

        @media (pointer: coarse), (hover: none) {
          #cursor-main { display: none !important; }
          * { cursor: auto !important; }
        }
      `}</style>
      <div id="cursor-main" ref={dotRef} />
    </>
  );
}
