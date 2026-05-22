"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";

export function BackToTop() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  // Defer mount by 2 seconds to keep critical interaction work uncontested
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 2000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => {
      const y = window.scrollY;
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      setProgress(Math.min(1, y / max));
      setShow(y > 1200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  if (!mounted) return null;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const r = 18;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);

  return (
    <AnimatePresence>
      {show && (
        <m.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-40 w-11 h-11 rounded-full bg-[#111] border border-[#1a1a1a] hover:border-[#2a2a2a] hover:bg-[#1a1a1a] inline-flex items-center justify-center text-[#888] hover:text-white transition-colors"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
            aria-hidden="true"
          >
            <circle
              cx="22"
              cy="22"
              r={r}
              fill="none"
              stroke="rgba(59,130,246,0.4)"
              strokeWidth="1.5"
              strokeDasharray={c}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>
          <IconArrowUp size={16} stroke={1.5} className="relative" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
