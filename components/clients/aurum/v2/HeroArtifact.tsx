"use client";

/**
 * Aurum V2 — Hero Artifact
 *
 * A photographic-feel render of the Q4 quarterly report sitting on the
 * advisor's desk. Cream paper page, serif typography, subtle paper grain
 * and a faint shadow under the page edge. The artifact reads as evidence
 * of the kind of quiet, premium product Aurum is — not a demo.
 */

import { m } from "framer-motion";

export function HeroArtifact() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 70% 40% at 50% 10%, rgba(217,119,6,0.18) 0%, transparent 60%), linear-gradient(135deg, #1A1206 0%, #0A0701 70%, #050200 100%)",
        color: "#F5EBD2",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      {/* Soft amber bloom */}
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[60%] h-[60%] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,6,0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative px-5 sm:px-10 py-8 sm:py-14 flex flex-col items-center">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-10">
          <span
            className="text-[#FCD34D] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase"
            style={{ letterSpacing: "0.28em" }}
          >
            The Q4 2024 Review
          </span>
          <span
            aria-hidden="true"
            className="h-px w-12 sm:w-20"
            style={{
              background:
                "linear-gradient(90deg, rgba(252,211,77,0.45), transparent)",
            }}
          />
        </div>

        {/* The artifact — a heavy cream-paper page */}
        <m.div
          initial={{ y: 30, opacity: 0, rotate: -2 }}
          whileInView={{ y: 0, opacity: 1, rotate: -1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative"
          style={{
            width: "min(620px, 90%)",
            transformOrigin: "center bottom",
          }}
        >
          {/* Page shadow */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 left-4 right-4 h-6 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />

          {/* The page */}
          <div
            className="relative rounded-sm overflow-hidden"
            style={{
              aspectRatio: "8/11",
              background:
                "linear-gradient(135deg, #F4ECD8 0%, #EFE3C2 50%, #E8DAB0 100%)",
              boxShadow:
                "0 30px 70px rgba(0,0,0,0.55), 0 12px 24px rgba(0,0,0,0.30), inset 0 -2px 0 rgba(168,123,58,0.20)",
            }}
          >
            {/* Subtle paper grain via SVG noise */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-multiply"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="paperNoise">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.85"
                  numOctaves="2"
                  stitchTiles="stitch"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.6  0 0 0 0 0.45  0 0 0 0 0.20  0 0 0 0.20 0"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#paperNoise)" />
            </svg>

            {/* Top-edge tint */}
            <div
              aria-hidden="true"
              className="absolute top-0 inset-x-0 h-12 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(168,123,58,0.10) 0%, transparent 100%)",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col p-6 sm:p-10 lg:p-14">
              <div className="text-[#A87B3A] text-[8.5px] sm:text-[10.5px] tracking-[0.24em] sm:tracking-[0.28em] uppercase">
                Aurum Private · Confidential
              </div>

              <div className="mt-auto">
                <h2
                  className="font-serif-editorial text-[#3A2B0E] tracking-tight"
                  style={{
                    fontSize: "clamp(28px, 5vw, 52px)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  Portfolio
                  <br />
                  Review.
                </h2>
                <div
                  className="font-serif-editorial italic text-[#8C6B3A] mt-3"
                  style={{ fontSize: "clamp(13px, 1.4vw, 17px)" }}
                >
                  Q4 2024 · Henderson Family Trust
                </div>

                <div
                  aria-hidden="true"
                  className="my-7 sm:my-9 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(168,123,58,0.45), transparent)",
                  }}
                />

                {/* Editorial micro-chart */}
                <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-md">
                  {[
                    { k: "YTD return", v: "+11.4%" },
                    { k: "vs benchmark", v: "+1.8" },
                    { k: "Annualised 5y", v: "8.1%" },
                  ].map((s) => (
                    <div key={s.k}>
                      <div className="text-[#A87B3A] text-[8.5px] sm:text-[9px] tracking-[0.22em] uppercase mb-1.5">
                        {s.k}
                      </div>
                      <div
                        className="font-serif-editorial text-[#3A2B0E] tabular-nums"
                        style={{
                          fontSize: "clamp(18px, 2.4vw, 26px)",
                          fontWeight: 400,
                        }}
                      >
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-9 sm:mt-12">
                <div
                  className="font-serif-editorial italic text-[#A87B3A]"
                  style={{ fontSize: 11 }}
                >
                  — page 1 of 14 —
                </div>
                <div
                  className="font-serif-editorial italic text-[#A87B3A]"
                  style={{ fontSize: 11 }}
                >
                  Eitan Shaked · Managing Partner
                </div>
              </div>
            </div>
          </div>
        </m.div>

        {/* Bottom caption */}
        <div className="mt-8 sm:mt-10 text-center max-w-lg">
          <p
            className="font-serif-editorial italic text-[#A98046]"
            style={{ fontSize: "clamp(13px, 1.4vw, 16px)", lineHeight: 1.55 }}
          >
            One of 1,200 client reports the system now produces a quarter — and
            indistinguishable from the ones the partners used to write by hand.
          </p>
        </div>
      </div>
    </div>
  );
}
