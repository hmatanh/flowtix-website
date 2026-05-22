"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

const TARGET = "flowtix";

export function EasterEgg() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let buf = "";
    let hideTimer: number | undefined;

    function onKey(e: KeyboardEvent) {
      // Ignore when typing in an input/textarea
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      ) {
        return;
      }
      if (e.key.length === 1) {
        buf = (buf + e.key.toLowerCase()).slice(-TARGET.length);
        if (buf === TARGET) {
          setShow(true);
          buf = "";
          if (hideTimer) clearTimeout(hideTimer);
          hideTimer = window.setTimeout(() => setShow(false), 3000);
        }
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="easter-toast bg-[#0D0D0D] border border-blue-500/30 rounded-xl px-5 py-3 shadow-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">👋</span>
            <div>
              <div className="text-white text-sm font-semibold tracking-tight">
                You found us
              </div>
              <div className="text-[#666] text-xs">
                Nice keystroke detection.
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
