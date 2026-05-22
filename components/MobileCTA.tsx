"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-[#1a1a1a] safe-area-bottom"
        >
          <div className="px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-[#666] text-sm">Ready to start?</span>
            <Link
              href="/contact"
              className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#eee] transition-colors inline-flex items-center gap-2"
            >
              Book a Call →
            </Link>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
