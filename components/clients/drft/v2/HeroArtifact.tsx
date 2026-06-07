"use client";

/**
 * Drft V2 — Hero Artifact
 *
 * Drop-campaign poster. Full-bleed orange wash, oversized DRFT wordmark,
 * "SS25 — Fieldwork Drop" eyebrow, vertical row of schematic jacket
 * silhouettes acting as a lookbook strip, and a single editorial line
 * underneath. Reads as the kind of poster that would show up in a
 * physical store window.
 */

import { m } from "framer-motion";

function CoatSilhouette({ tint }: { tint: string }) {
  return (
    <svg viewBox="0 0 100 140" className="w-full h-full">
      <defs>
        <linearGradient id={`coat-${tint}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A0F04" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0F0902" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M 30 30 L 40 12 L 60 12 L 70 30 L 84 38 L 84 112 L 76 132 L 24 132 L 16 112 L 16 38 Z"
        fill={`url(#coat-${tint})`}
        stroke="#0F0902"
        strokeWidth="1.6"
      />
      {/* Collar */}
      <path
        d="M 40 12 L 50 26 L 60 12 L 56 8 L 50 10 L 44 8 Z"
        fill="#0F0902"
      />
      {/* Center seam */}
      <line x1="50" y1="26" x2="50" y2="132" stroke="#0F0902" strokeWidth="0.8" />
      {/* Buttons */}
      {[40, 60, 80, 100, 120].map((y, i) => (
        <circle
          key={i}
          cx="50"
          cy={y}
          r="1.6"
          fill={tint}
          stroke="#0F0902"
          strokeWidth="0.4"
        />
      ))}
      {/* Pocket flaps */}
      <rect x="18" y="78" width="22" height="28" fill="none" stroke="#0F0902" strokeWidth="0.8" />
      <rect x="60" y="78" width="22" height="28" fill="none" stroke="#0F0902" strokeWidth="0.8" />
    </svg>
  );
}

export function HeroArtifact() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(135deg, #F97316 0%, #C2410C 50%, #7C2D12 100%)",
        color: "#1A0F04",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      {/* Subtle grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.10] mix-blend-multiply pointer-events-none"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="drftNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#drftNoise)" />
        </svg>
      </div>

      {/* Dark stripe at top */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-12 sm:h-14 flex items-center justify-between px-6 sm:px-10"
        style={{ background: "#0A0701" }}
      >
        <span className="text-orange-300 text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-bold">
          SS25 · Fieldwork Drop
        </span>
        <span className="text-orange-300 text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-bold">
          Live · 04 May
        </span>
      </div>

      <div className="relative pt-20 sm:pt-24 pb-8 sm:pb-10 px-6 sm:px-10">
        {/* Massive wordmark */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <h2
            className="text-[#0A0701] font-black tracking-[-0.04em] leading-[0.85]"
            style={{
              fontSize: "clamp(80px, 18vw, 240px)",
              letterSpacing: "-0.04em",
            }}
          >
            DRFT
            <span style={{ color: "#1A0F04" }}>*</span>
          </h2>
          <div className="mt-3 sm:mt-4 text-[#0A0701]/80 text-[10px] sm:text-[12px] uppercase tracking-[0.32em] font-bold">
            Workwear · made in Porto · since 2024
          </div>
        </m.div>

        {/* Coat lookbook row — 5 on lg+, drops to 3 on small */}
        <div className="mt-8 sm:mt-14 grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
          {[
            { name: "Field", tint: "#7C2D12", price: "$189" },
            { name: "Derby", tint: "#1F2937", price: "$224" },
            { name: "Peacoat", tint: "#0F2027", price: "$198" },
            { name: "Camel", tint: "#A8551F", price: "$262", hideOnMobile: true },
            { name: "Storm", tint: "#3F2810", price: "$278", hideOnMobile: true },
          ].map((c, i) => (
            <m.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 0.55,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`flex flex-col items-center ${c.hideOnMobile ? "hidden sm:flex" : ""}`}
            >
              <div
                className="w-full aspect-[5/7] flex items-center justify-center px-2 py-2 sm:px-3 sm:py-3"
                style={{
                  background: "rgba(10,7,1,0.18)",
                  borderRadius: 4,
                }}
              >
                <CoatSilhouette tint={c.tint} />
              </div>
              <div className="text-[#0A0701] text-[10px] sm:text-[12px] font-black uppercase tracking-[0.16em] mt-2 sm:mt-3">
                {c.name}
              </div>
              <div className="text-[#0A0701]/70 text-[9px] sm:text-[10px] tabular-nums tracking-[0.10em]">
                {c.price}
              </div>
            </m.div>
          ))}
        </div>

        {/* Editorial bottom line */}
        <div
          aria-hidden="true"
          className="mt-9 sm:mt-12 h-px"
          style={{ background: "rgba(10,7,1,0.30)" }}
        />
        <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-center sm:text-left">
          <span className="text-[#0A0701] text-[10px] sm:text-[12px] uppercase tracking-[0.22em] font-bold">
            Hand-finished · 580gsm
          </span>
          <span className="text-[#0A0701] text-[10px] sm:text-[12px] uppercase tracking-[0.22em] font-bold sm:text-center">
            Ships within 48h
          </span>
          <span className="text-[#0A0701] text-[10px] sm:text-[12px] uppercase tracking-[0.22em] font-bold sm:text-right">
            drft.studio
          </span>
        </div>
      </div>
    </div>
  );
}
