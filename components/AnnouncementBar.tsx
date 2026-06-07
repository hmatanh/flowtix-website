"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

const STORAGE_KEY = "flowtix-announcement-dismissed";

export function AnnouncementBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        setOpen(true);
        document.documentElement.style.setProperty("--announcement-h", "36px");
      }
    } catch {
      setOpen(true);
      document.documentElement.style.setProperty("--announcement-h", "36px");
    }
  }, []);

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    document.documentElement.style.setProperty("--announcement-h", "0px");
    setOpen(false);
  }

  return (
    <AnimatePresence initial={false}>
      {open && (
        <m.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 36, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="overflow-hidden sticky top-0 z-[60] bg-[#0a0a0a] border-b border-[#1a1a1a]"
        >
          <div className="h-9 flex items-center justify-center gap-3 px-4 text-xs">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[#aaa] tracking-wide truncate">
              Now accepting new projects for Q3 2025
            </span>
            <span className="text-[#333] hidden sm:inline">·</span>
            <span className="text-[#888] hidden sm:inline">3 spots remaining</span>
            <Link
              href="/contact"
              className="animated-link text-[#3B82F6] hover:text-blue-400 transition-colors shrink-0"
            >
              Book a call →
            </Link>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] hover:text-white transition-colors w-7 h-7 inline-flex items-center justify-center"
            >
              <IconX size={14} stroke={1.5} />
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
