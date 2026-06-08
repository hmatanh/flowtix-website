"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Body scroll lock while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`sticky z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
          scrolled
            ? "bg-black/90 border-[#0f0f0f]"
            : "bg-black/70 border-[#0f0f0f]"
        }`}
        style={{ top: "var(--announcement-h, 0px)" }}
      >
        <nav className="site-container h-16 flex items-center justify-between">
          <m.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <Logo size={24} />
          </m.div>

          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {NAV_LINKS.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`animated-link text-sm transition-colors ${
                    active ? "text-white" : "text-[#9aa0a6] hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <m.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg inline-block"
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#eee] transition-colors"
              >
                Book a Strategy Call
              </Link>
            </m.div>
          </div>

          {/* Hamburger - animated 3-line → X */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <m.span
              className="block h-px w-6 bg-white origin-center"
              animate={
                open
                  ? { rotate: 45, y: 5, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.25 }}
            />
            <m.span
              className="block h-px w-6 bg-white"
              animate={
                open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
            />
            <m.span
              className="block h-px w-6 bg-white origin-center"
              animate={
                open
                  ? { rotate: -45, y: -5, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY - full-screen, solid black, above everything */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] md:hidden"
            style={{ backgroundColor: "#000000" }}
          >
            <div
              className="flex flex-col h-full w-full"
              style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
            >
              {/* TOP: logo + close */}
              <div className="flex items-center justify-between px-6 py-5">
                <Logo size={24} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 4L16 16M16 4L4 16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Separator */}
              <div
                className="mx-6"
                style={{ height: "1px", backgroundColor: "#111" }}
              />

              {/* NAV LINKS - stacked */}
              <nav className="flex flex-col px-6 pt-8 gap-1">
                {MOBILE_LINKS.map((link, i) => (
                  <m.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-2xl font-bold text-white"
                      style={{
                        borderBottom: "1px solid #0f0f0f",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {link.label}
                    </Link>
                  </m.div>
                ))}
              </nav>

              {/* BOTTOM: CTA + legal */}
              <div className="mt-auto px-6 pb-8">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center font-semibold text-black bg-white rounded-xl"
                  style={{ padding: "16px", fontSize: "15px" }}
                >
                  Book a Strategy Call →
                </Link>

                <div className="flex justify-center gap-4 mt-5">
                  {LEGAL_LINKS.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setOpen(false)}
                      className="text-[#888] text-xs"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
