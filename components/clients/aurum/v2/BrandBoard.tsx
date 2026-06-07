"use client";

/**
 * Aurum V2 — Brand Identity Board
 *
 * The "specimen sheet" for the firm's identity — wordmark variants, the
 * serif/sans pairing, and the palette swatches. Reads like a one-page
 * brand book, not a slide deck.
 */

import { m } from "framer-motion";

const PALETTE = [
  { name: "Ember", hex: "#D97706", swatch: "#D97706" },
  { name: "Bronze", hex: "#B45309", swatch: "#B45309" },
  { name: "Walnut", hex: "#3A2B0E", swatch: "#3A2B0E" },
  { name: "Cream", hex: "#F4ECD8", swatch: "#F4ECD8" },
  { name: "Ink", hex: "#0A0701", swatch: "#0A0701" },
];

export function BrandBoard() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #1A1206 0%, #0A0701 100%)",
        color: "#F5EBD2",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      <div className="relative px-6 sm:px-10 py-10 sm:py-14">
        {/* Top label */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-10 sm:mb-12">
          <div className="font-serif-editorial text-white text-[14px] sm:text-[16px] tracking-tight">
            Brand Identity · One-page Specimen
          </div>
          <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.28em] uppercase">
            Aurum Private · 2024
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14">
          {/* LEFT: Wordmark + monogram */}
          <div>
            <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-5">
              Wordmark
            </div>

            {/* Big wordmark on cream */}
            <div
              className="rounded-sm p-6 sm:p-10 flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #F4ECD8 0%, #EFE3C2 50%, #E8DAB0 100%)",
                aspectRatio: "16/9",
                boxShadow:
                  "inset 0 -2px 0 rgba(168,123,58,0.20), 0 20px 40px rgba(0,0,0,0.45)",
              }}
            >
              <m.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="font-serif-editorial text-[#3A2B0E] tracking-tight text-center"
                style={{
                  fontSize: "clamp(34px, 7vw, 80px)",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                }}
              >
                AURUM
              </m.div>
              <div
                aria-hidden="true"
                className="my-4 sm:my-5 h-px w-12 sm:w-16"
                style={{ background: "rgba(168,123,58,0.45)" }}
              />
              <div className="text-[#8C6B3A] text-[9px] sm:text-[10px] tracking-[0.42em] uppercase">
                Private
              </div>
            </div>

            {/* Monogram & inverse */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div
                className="rounded-sm aspect-square flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #1A1206 0%, #0A0701 100%)",
                  border: "1px solid rgba(217,119,6,0.18)",
                }}
              >
                <span
                  className="font-serif-editorial text-[#FCD34D]"
                  style={{
                    fontSize: 60,
                    fontWeight: 400,
                    letterSpacing: "-0.04em",
                  }}
                >
                  A
                </span>
              </div>
              <div
                className="rounded-sm aspect-square flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #F4ECD8 0%, #E8DAB0 100%)",
                }}
              >
                <span
                  className="font-serif-editorial text-[#3A2B0E]"
                  style={{
                    fontSize: 60,
                    fontWeight: 400,
                    letterSpacing: "-0.04em",
                  }}
                >
                  A
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Typography + palette */}
          <div className="space-y-8 sm:space-y-10">
            {/* Typography pair */}
            <div>
              <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-5">
                Typography
              </div>
              <div
                className="rounded-sm px-5 py-6 sm:px-8 sm:py-9"
                style={{
                  background: "#160F04",
                  border: "1px solid rgba(217,119,6,0.10)",
                }}
              >
                <div
                  className="font-serif-editorial text-white tracking-tight"
                  style={{
                    fontSize: "clamp(26px, 4vw, 44px)",
                    fontWeight: 400,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.05,
                  }}
                >
                  Quiet by design.
                </div>
                <div
                  className="font-serif-editorial italic text-[#A98046] mt-2"
                  style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
                >
                  Tinos · Display · 400
                </div>

                <div
                  aria-hidden="true"
                  className="my-5 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(217,119,6,0.30), transparent)",
                  }}
                />

                <p
                  className="text-[#F5EBD2]"
                  style={{
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  Body copy is set in Inter — a quiet, modern sans that
                  carries clinical detail without competing with the serif
                  display titling used across portfolio reports and client
                  communications.
                </p>
                <div className="text-[#8C6B3A] text-[10px] uppercase tracking-[0.18em] mt-2">
                  Inter · Body · 400 / 500
                </div>
              </div>
            </div>

            {/* Palette — full row on lg+, 2-row 5-col-with-wrap on mobile */}
            <div>
              <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-5">
                Palette
              </div>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {PALETTE.map((p) => (
                  <m.div
                    key={p.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="text-center"
                  >
                    <div
                      className="rounded-sm aspect-square"
                      style={{
                        background: p.swatch,
                        border:
                          p.name === "Cream"
                            ? "1px solid rgba(168,123,58,0.30)"
                            : "1px solid rgba(217,119,6,0.10)",
                      }}
                    />
                    <div className="font-serif-editorial text-[#F5EBD2] text-[10px] sm:text-[11px] mt-1.5 sm:mt-2 tracking-tight">
                      {p.name}
                    </div>
                    <div className="text-[#8C6B3A] text-[8px] sm:text-[9px] tabular-nums mt-0.5 uppercase tracking-[0.08em] sm:tracking-[0.10em] truncate">
                      {p.hex}
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
