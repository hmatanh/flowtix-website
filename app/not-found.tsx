"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { DotGrid } from "@/components/DotGrid";

const HELPFUL = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <DotGrid opacity={0.18} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <m.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="font-black tracking-tighter leading-none select-none"
          style={{
            fontSize: "clamp(140px, 24vw, 240px)",
            background:
              "repeating-linear-gradient(135deg, #1a1a1a 0px, #1a1a1a 2px, transparent 2px, transparent 12px)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
          aria-hidden="true"
        >
          404
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-white mt-6 tracking-tight"
        >
          You took a wrong turn.
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#666] mt-4 max-w-md mx-auto leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist — but we can help you find
          what you need.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#eee] transition-colors"
          >
            Back to Home
            <IconArrowRight size={14} stroke={2} />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center border border-[#1a1a1a] text-[#666] px-6 py-3.5 rounded-xl text-sm hover:border-[#2a2a2a] hover:text-white transition-colors"
          >
            View Our Work
          </Link>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-[#333] text-xs flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <span>Looking for →</span>
          {HELPFUL.map((h, i) => (
            <span key={h.href} className="inline-flex items-center gap-3">
              <Link
                href={h.href}
                className="animated-link text-[#555] hover:text-white transition-colors"
              >
                {h.label}
              </Link>
              {i < HELPFUL.length - 1 && <span className="text-[#222]">·</span>}
            </span>
          ))}
        </m.div>
      </div>
    </section>
  );
}
