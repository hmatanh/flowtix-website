"use client";

/**
 * Drft V2 - Brand Takeover
 *
 * Section-restyle moment per the immersive-brand-led archetype.
 * Background floods with the brand's deep amber-cream. Big editorial type
 * spread shows the brand voice in three modes - a manifesto line, a
 * product tagline, an email subject. All three composed in the same DRFT
 * voice. Reads like the inside cover of a lookbook.
 */

import { m } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function BrandTakeover() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(180deg, #EFE7DA 0%, #E2D5BC 60%, #D2BF9C 100%)",
        color: "#1F0808",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      {/* Paper grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="drftPaperNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.45  0 0 0 0 0.30  0 0 0 0 0.12  0 0 0 0.30 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#drftPaperNoise)" />
        </svg>
      </div>

      <div className="relative px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-18">
        {/* Top label */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="block h-px w-8 sm:w-12"
              style={{ background: "rgba(124,45,18,0.4)" }}
            />
            <span className="text-[#7F1D1D] text-[10px] sm:text-[11px] tracking-[0.32em] uppercase font-bold">
              The DRFT voice - three modes
            </span>
          </div>
          <span className="text-[#7C5A2A] text-[9.5px] sm:text-[10px] tracking-[0.28em] uppercase">
            From the lookbook
          </span>
        </div>

        {/* Three voice modes */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {/* Mode 1 - Manifesto */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="text-[#7C5A2A] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase mb-3 sm:mb-4 font-bold">
              01 · Manifesto
            </div>
            <p
              className="text-[#1F0808] tracking-tight"
              style={{
                fontSize: "clamp(28px, 5vw, 60px)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
              }}
            >
              Heavy fabric.
              <br />
              Honest cut.
              <br />
              Quiet labels.
            </p>
          </m.div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="h-px w-full"
            style={{ background: "rgba(124,45,18,0.20)" }}
          />

          {/* Mode 2 - Product tagline */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-end"
          >
            <div>
              <div className="text-[#7C5A2A] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase mb-3 sm:mb-4 font-bold">
                02 · Product line
              </div>
              <p
                className="text-[#1F0808] tracking-tight italic"
                style={{
                  fontSize: "clamp(22px, 3.6vw, 40px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  fontFamily:
                    "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                  letterSpacing: "-0.015em",
                }}
              >
                The Field Overcoat. The one you reach for when the season turns.
              </p>
            </div>
            <div className="text-left lg:text-right whitespace-nowrap">
              <div className="text-[#7F1D1D] text-[11px] sm:text-[13px] uppercase tracking-[0.22em] font-black">
                $189
              </div>
              <div className="text-[#7C5A2A] text-[10px] tracking-[0.15em]">
                580gsm · Bracken
              </div>
            </div>
          </m.div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="h-px w-full"
            style={{ background: "rgba(124,45,18,0.20)" }}
          />

          {/* Mode 3 - Email subject */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-center"
          >
            <div>
              <div className="text-[#7C5A2A] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase mb-3 sm:mb-4 font-bold">
                03 · Email
              </div>
              <div
                className="text-[#1F0808] tracking-tight"
                style={{
                  fontSize: "clamp(24px, 4.4vw, 48px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                It&apos;s still
                <br />
                in your bag.
              </div>
            </div>
            <div
              className="rounded-md p-4 sm:p-5"
              style={{
                background: "rgba(10,7,1,0.06)",
                border: "1px solid rgba(124,45,18,0.20)",
              }}
            >
              <div className="text-[#7C5A2A] text-[9px] tracking-[0.22em] uppercase mb-1.5">
                Subject open rate
              </div>
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[#7F1D1D] tabular-nums font-black"
                  style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
                >
                  47.3%
                </span>
                <span className="text-[#84CC16] text-[12px] tabular-nums font-bold">
                  ▲ 14.1 vs control
                </span>
              </div>
              <div className="text-[#7C5A2A] text-[10.5px] mt-1.5">
                AI-tuned · Sent 1,840×
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom footer */}
        <div className="mt-10 sm:mt-14 pt-5 sm:pt-7 border-t flex items-center justify-between flex-wrap gap-2" style={{ borderColor: "rgba(124,45,18,0.25)" }}>
          <span className="text-[#7F1D1D] text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-bold">
            One brand, three voices, one engine
          </span>
          <span className="text-[#7C5A2A] text-[10px] sm:text-[11px] tracking-[0.22em] uppercase italic">
            - pages 12-14 of the SS25 lookbook
          </span>
        </div>
      </div>
    </div>
  );
}
