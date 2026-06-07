"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { m } from "framer-motion";
import { IconArrowLeft, IconArrowDown } from "@tabler/icons-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type Props = {
  /** Industry / discipline pill at the top. */
  eyebrow: string;
  /** Project year. */
  year: string;
  /** Story-led headline. Long. One sentence. */
  headline: ReactNode;
  /** A single quantified outcome that anchors the page. */
  primaryMetric: string;
  /** Client brand primary color. */
  accentColor: string;
  /** Client brand RGB tuple (no parens). */
  accentRGB: string;
  /** Optional service tag pills shown above the headline. */
  serviceTags?: string[];
};

/**
 * CaseHero — the Archetype-A hero treatment.
 *
 * Linear / Vercel customers pattern:
 *   Headline = the outcome, not the brand name.
 *   Big primary metric anchors the page.
 *   No logo lockup, no "this is X company" preamble.
 *
 * The brand color washes the entire viewport behind the headline.
 */
export function CaseHero({
  eyebrow,
  year,
  headline,
  primaryMetric,
  accentColor,
  accentRGB,
  serviceTags,
}: Props) {
  return (
    <section className="relative flex flex-col overflow-hidden" style={{
      background: "#020202",
      minHeight: "min(100vh, 920px)",
    }}>
      {/* Layer 1 — bold brand wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 90% 60% at 70% 40%, rgba(${accentRGB},0.12) 0%, transparent 70%)`,
        }}
      />
      {/* Layer 2 — second softer wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 20% 80%, rgba(${accentRGB},0.06) 0%, transparent 70%)`,
        }}
      />
      {/* Layer 3 — subtle grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* Layer 4 — bottom fade to body */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #020202, transparent)",
        }}
      />

      <div className="relative z-10 page-container w-full flex-1 flex flex-col">
        {/* Top row */}
        <div className="pt-28 sm:pt-32 lg:pt-40 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[#888] hover:text-white text-xs sm:text-sm transition-colors"
          >
            <IconArrowLeft size={14} stroke={2} />
            <span>All Work</span>
          </Link>
          <span
            className="text-[10px] sm:text-xs px-3 py-1 rounded-full border tracking-wider"
            style={{
              borderColor: `rgba(${accentRGB},0.20)`,
              color: `rgba(${accentRGB},0.85)`,
              background: `rgba(${accentRGB},0.06)`,
            }}
          >
            {eyebrow} · {year}
          </span>
        </div>

        {/* Main */}
        <div className="mt-12 sm:mt-20 lg:mt-28 flex-1">
          {serviceTags && serviceTags.length > 0 && (
            <m.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-wrap gap-2 mb-8 sm:mb-10"
            >
              {serviceTags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                  style={{
                    background: `rgba(${accentRGB},0.08)`,
                    color: `rgba(${accentRGB},0.9)`,
                    border: `1px solid rgba(${accentRGB},0.18)`,
                  }}
                >
                  {t}
                </span>
              ))}
            </m.div>
          )}

          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-black tracking-tight text-white leading-[0.95] max-w-5xl"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            {headline}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-10 sm:mt-14 font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(18px, 2.6vw, 30px)",
              color: accentColor,
              maxWidth: 720,
            }}
          >
            {primaryMetric}
          </m.p>
        </div>

        {/* Bottom — scroll indicator */}
        <div className="pb-12 sm:pb-16 lg:pb-20 flex items-center gap-3">
          <m.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center"
          >
            <IconArrowDown size={14} stroke={1.5} style={{ color: `rgba(${accentRGB},0.7)` }} />
          </m.span>
          <span
            className="text-[10px] sm:text-xs uppercase tracking-[0.22em]"
            style={{ color: `rgba(${accentRGB},0.7)` }}
          >
            Scroll to explore
          </span>
          <span
            className="hidden sm:block flex-1 h-px"
            style={{
              background: `linear-gradient(90deg, rgba(${accentRGB},0.35), transparent)`,
              maxWidth: 280,
            }}
          />
        </div>
      </div>
    </section>
  );
}
