"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Project pages render their own brand-aware FloatingCTA. Hide global
  // generic one to avoid a stacked-button mobile UI.
  const isProjectPage =
    pathname?.startsWith("/work/") && pathname !== "/work/" && pathname !== "/work";
  // Contact page already IS the conversion — don't compete with itself.
  const isContactPage = pathname === "/contact" || pathname === "/contact/";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isProjectPage || isContactPage) return null;

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {visible && (
          <m.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50"
            style={{
              backgroundColor: "rgba(0,0,0,0.95)",
              borderTop: "1px solid #111",
              padding: "12px 16px",
              paddingBottom: "max(12px, env(safe-area-inset-bottom))",
            }}
          >
            <Link
              href="/contact"
              className="block w-full text-center font-semibold text-black bg-white rounded-xl"
              style={{ padding: "14px", fontSize: "15px" }}
            >
              Book a Discovery Call →
            </Link>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
