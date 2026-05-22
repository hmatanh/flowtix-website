"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconBrandX, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
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
    <header
      className={`sticky z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        scrolled
          ? "bg-black/90 border-[#0f0f0f]"
          : "bg-black/70 border-[#0f0f0f]"
      }`}
      style={{ top: "var(--announcement-h, 0px)" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
                  active ? "text-white" : "text-[#444] hover:text-[#888]"
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
              Book a Call
            </Link>
          </m.div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative inline-flex items-center justify-center w-11 h-11 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative w-5 h-4 flex flex-col justify-between">
            <m.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-px bg-white origin-center"
            />
            <m.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-px bg-white"
            />
            <m.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-px bg-white origin-center"
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-black/98 backdrop-blur-xl flex flex-col md:hidden"
            style={{ top: "calc(var(--announcement-h, 0px) + 64px)" }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-1 px-6">
              {NAV_LINKS.map((l, i) => (
                <m.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{
                    delay: 0.06 + i * 0.06,
                    duration: 0.35,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-bold text-white py-3 inline-block tracking-tight"
                  >
                    {l.label}
                  </Link>
                </m.div>
              ))}
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="px-4 pb-8 safe-area-bottom"
            >
              <div className="flex items-center justify-center gap-5 mb-6 text-[#444]">
                <a
                  href="mailto:hello@flowtix.ai"
                  aria-label="Email"
                  className="hover:text-white transition-colors"
                >
                  <IconMail size={20} stroke={1.5} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                  <IconBrandX size={20} stroke={1.5} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  <IconBrandLinkedin size={20} stroke={1.5} />
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full bg-white text-black text-center py-4 rounded-xl font-semibold"
              >
                Book a Call →
              </Link>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
