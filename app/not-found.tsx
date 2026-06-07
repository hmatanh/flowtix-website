"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowRight, IconCompass, IconHome } from "@tabler/icons-react";
import { DotGrid } from "@/components/DotGrid";

const HELPFUL = [
  { href: "/services", label: "Services", drift: 7, delay: 0 },
  { href: "/work", label: "Work", drift: 5, delay: 0.5 },
  { href: "/products", label: "Products", drift: 6, delay: 1 },
  { href: "/blog", label: "Blog", drift: 4.5, delay: 1.5 },
  { href: "/contact", label: "Contact", drift: 5.5, delay: 2 },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 sm:py-24 overflow-hidden">
      <DotGrid opacity={0.18} />
      {/* Layered backgrounds */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Wandering decorative line */}
      <m.svg
        aria-hidden="true"
        className="absolute pointer-events-none"
        viewBox="0 0 400 80"
        width="400"
        height="80"
        style={{ top: "30%", left: "50%", transform: "translateX(-50%)", opacity: 0.15 }}
      >
        <m.path
          d="M 0 40 Q 50 10 100 30 T 200 50 T 300 25 T 400 45"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />
      </m.svg>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Compass icon spinning slowly */}
        <m.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center mb-6 sm:mb-8 rounded-2xl border border-blue-500/30 bg-blue-500/5"
          style={{
            width: 56,
            height: 56,
            boxShadow: "0 0 40px rgba(59,130,246,0.20)",
          }}
        >
          <m.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <IconCompass size={28} stroke={1.5} className="text-blue-400" />
          </m.div>
        </m.div>

        {/* 404 with diagonal-stripe pattern */}
        <m.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="font-black tracking-tighter leading-none select-none relative inline-block"
          style={{
            fontSize: "clamp(120px, 22vw, 220px)",
          }}
          aria-hidden="true"
        >
          {/* Outline 404 */}
          <span
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(135deg, #1a1a1a 0px, #1a1a1a 2px, transparent 2px, transparent 12px)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </span>
          {/* Subtle blue layer behind */}
          <span
            className="relative"
            style={{
              background:
                "linear-gradient(135deg, transparent 0%, transparent 40%, rgba(59,130,246,0.12) 50%, transparent 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </span>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 sm:mt-6 tracking-tight"
        >
          You took a{" "}
          <span className="gradient-text-blue">wrong turn.</span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#aaa] mt-4 max-w-md mx-auto leading-[1.65] sm:leading-relaxed text-[15px] sm:text-base px-2"
        >
          The page you&apos;re looking for doesn&apos;t exist — but we can
          help you find what you need.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto"
        >
          <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#eee] transition-colors"
            >
              <IconHome size={14} stroke={2.5} aria-hidden="true" />
              Back to Home
            </Link>
          </m.div>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-[#1a1a1a] text-[#aaa] px-7 py-3.5 rounded-2xl text-sm hover:border-[#2a2a2a] hover:text-white transition-colors"
          >
            View Our Work
            <IconArrowRight size={14} stroke={2} aria-hidden="true" className="ml-2" />
          </Link>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-14"
        >
          <div className="text-[#333] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-5 sm:mb-6">
            Or try one of these
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {HELPFUL.map((h) => (
              <m.div
                key={h.href}
                animate={{ y: [0, -h.drift, 0] }}
                transition={{
                  duration: 5 + h.drift * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: h.delay,
                }}
              >
                <Link
                  href={h.href}
                  className="inline-flex items-center bg-[#0D0D0D] border border-[#1a1a1a] text-[#aaa] hover:border-blue-500/30 hover:text-white text-xs sm:text-sm px-4 py-2 rounded-full transition-colors"
                >
                  {h.label}
                </Link>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Microcopy */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 sm:mt-14 text-[#333] text-xs"
        >
          Or report the broken link to{" "}
          <a
            href="mailto:office@flowtix.ai"
            className="text-[#888] hover:text-white transition-colors font-mono"
          >
            office@flowtix.ai
          </a>
        </m.div>
      </div>
    </section>
  );
}
