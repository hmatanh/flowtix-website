"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "flowtix-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        const t = setTimeout(() => setVisible(true), 3000);
        return () => clearTimeout(t);
      }
    } catch {
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && visible) setVisible(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch {}
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[9997] safe-area-bottom"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#111] border border-[#1a1a1a] flex items-center justify-center text-[10px]">
                🍪
              </div>
              <span className="text-white text-sm font-semibold">
                Cookie Notice
              </span>
            </div>
            <p className="text-[#666] text-xs leading-relaxed mb-4">
              We use essential cookies only — no tracking, no advertising. See
              our{" "}
              <Link
                href="/privacy"
                className="text-[#3B82F6] hover:text-blue-400 underline underline-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={accept}
                className="flex-1 bg-white text-black text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#eee] transition-colors min-h-[44px]"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={decline}
                className="flex-1 border border-[#222] text-[#888] text-xs px-4 py-2.5 rounded-xl hover:border-[#333] hover:text-white transition-colors min-h-[44px]"
              >
                Decline
              </button>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
