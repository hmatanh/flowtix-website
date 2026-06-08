"use client";

/**
 * Drft V2 - Storefront
 *
 * DTC workwear product page. Bold "DRFT" wordmark in navigation, deep
 * orange wash, schematic jacket silhouettes (no real photography), prod
 * details panel on the right with color swatches, size grid and price.
 * Below: four-up product grid.
 */

import { m } from "framer-motion";
import {
  IconSearch,
  IconUser,
  IconShoppingBag,
  IconArrowRight,
  IconStarFilled,
} from "@tabler/icons-react";

export function ScreenStore() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #1F0808 0%, #0A0701 100%)",
        color: "#F5EBD2",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* ====== TOP NAV ====== */}
        <header
          className="flex items-center justify-between px-9 py-4 border-b"
          style={{
            background: "#0F0902",
            borderColor: "rgba(220, 38, 38,0.10)",
          }}
        >
          <div className="flex items-center gap-7">
            <div
              className="text-white tracking-[0.16em] font-black"
              style={{ fontSize: 18 }}
            >
              DRFT
              <span className="text-red-500">*</span>
            </div>
            <div className="flex items-center gap-5 text-[#A98046] text-[11px] uppercase tracking-[0.16em]">
              <span className="text-white">Outerwear</span>
              <span>Knit</span>
              <span>Bottoms</span>
              <span>Boots</span>
              <span>Stories</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#A98046]">
            <IconSearch size={14} stroke={1.5} />
            <IconUser size={14} stroke={1.5} />
            <span className="inline-flex items-center gap-1 text-[10px] tabular-nums px-2 py-1 rounded-full" style={{ background: "rgba(220, 38, 38,0.10)", color: "#FECACA" }}>
              <IconShoppingBag size={12} stroke={1.5} />
              2
            </span>
          </div>
        </header>

        {/* ====== HERO PRODUCT ====== */}
        <div className="flex-1 grid grid-cols-[1fr_360px] overflow-hidden">
          {/* Left - schematic product on orange */}
          <div
            className="relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 40%, #DC2626 0%, #991B1B 60%, #7F1D1D 100%)",
            }}
          >
            {/* Brand-mood eyebrow */}
            <div className="absolute top-7 left-9 inline-flex items-center gap-2 text-white/80">
              <span
                aria-hidden="true"
                className="block h-px w-8"
                style={{ background: "rgba(255,255,255,0.5)" }}
              />
              <span className="text-[10px] tracking-[0.28em] uppercase font-semibold">
                Fieldwork Drop · SS25
              </span>
            </div>

            {/* Coat schematic - silhouette */}
            <m.svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%]"
              viewBox="0 0 200 320"
              style={{ height: "78%", maxHeight: 580 }}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <defs>
                <linearGradient id="coatGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2B1A07" />
                  <stop offset="60%" stopColor="#1F0808" />
                  <stop offset="100%" stopColor="#0F0902" />
                </linearGradient>
              </defs>
              {/* Body */}
              <path
                d="M 60 60 L 80 30 L 120 30 L 140 60 L 168 78 L 168 220 L 156 308 L 44 308 L 32 220 L 32 78 Z"
                fill="url(#coatGrad)"
                stroke="#0F0902"
                strokeWidth="1.5"
              />
              {/* Collar */}
              <path
                d="M 80 30 L 100 50 L 120 30 L 110 25 L 100 28 L 90 25 Z"
                fill="#0F0902"
              />
              {/* Center seam */}
              <line
                x1="100"
                y1="50"
                x2="100"
                y2="308"
                stroke="#0F0902"
                strokeWidth="1"
              />
              {/* Buttons */}
              {[80, 110, 140, 170, 200, 230, 260].map((y, i) => (
                <circle
                  key={i}
                  cx="100"
                  cy={y}
                  r="2.6"
                  fill="#DC2626"
                  stroke="#0F0902"
                  strokeWidth="0.8"
                />
              ))}
              {/* Patch pockets */}
              <rect
                x="36"
                y="170"
                width="48"
                height="58"
                fill="none"
                stroke="#0F0902"
                strokeWidth="1.5"
              />
              <rect
                x="116"
                y="170"
                width="48"
                height="58"
                fill="none"
                stroke="#0F0902"
                strokeWidth="1.5"
              />
              {/* Shoulder stitch */}
              <path
                d="M 60 60 Q 80 70 100 50 Q 120 70 140 60"
                fill="none"
                stroke="#0F0902"
                strokeWidth="0.8"
              />
              {/* Pocket flaps */}
              <path
                d="M 36 170 L 60 162 L 84 170"
                fill="#0F0902"
              />
              <path
                d="M 116 170 L 140 162 L 164 170"
                fill="#0F0902"
              />
            </m.svg>

            {/* Bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 px-9 py-5 flex items-center justify-between">
              <span className="text-white/80 text-[10px] tracking-[0.22em] uppercase font-semibold">
                Hand-finished in Porto
              </span>
              <span className="inline-flex items-center gap-1 text-white/80 text-[10px] tracking-[0.22em] uppercase">
                <IconStarFilled size={10} className="text-amber-200" />
                4.9 · 184 reviews
              </span>
            </div>
          </div>

          {/* Right - Product details panel */}
          <aside
            className="px-7 py-8 border-l overflow-hidden flex flex-col gap-5"
            style={{
              background: "#0F0902",
              borderColor: "rgba(220, 38, 38,0.10)",
            }}
          >
            <div>
              <div className="text-[#A98046] text-[9.5px] tracking-[0.28em] uppercase mb-2">
                Heavyweight outerwear
              </div>
              <h1
                className="text-white tracking-tight"
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                Field Overcoat
              </h1>
              <div className="flex items-baseline gap-2.5 mt-2">
                <span className="font-black text-[#DC2626] tabular-nums" style={{ fontSize: 22 }}>
                  $189
                </span>
                <span className="text-[#7C5A2A] text-[12px] line-through tabular-nums">
                  $260
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded font-semibold"
                  style={{
                    background: "rgba(220, 38, 38,0.18)",
                    color: "#FECACA",
                  }}
                >
                  Final price
                </span>
              </div>
            </div>

            <p className="text-[#FECACA] text-[12px] leading-relaxed">
              Heavy moleskin twill, 580gsm. Cut for layering. Eight-button
              storm placket, signature throat-latch, twin patch pockets with
              hand-bartacked corners.
            </p>

            {/* Color swatches */}
            <div>
              <div className="text-[#A98046] text-[9.5px] tracking-[0.18em] uppercase mb-2">
                Colour · Bracken
              </div>
              <div className="flex items-center gap-2.5">
                {[
                  { name: "Bracken", color: "#7F1D1D", active: true },
                  { name: "Pine", color: "#1F2937" },
                  { name: "Bone", color: "#EFE7DA" },
                  { name: "Char", color: "#0F0902" },
                ].map((c) => (
                  <span
                    key={c.name}
                    className="block rounded-full"
                    style={{
                      width: 22,
                      height: 22,
                      background: c.color,
                      border: c.active
                        ? "2px solid #DC2626"
                        : "1px solid rgba(220, 38, 38,0.20)",
                      boxShadow: c.active
                        ? "0 0 0 3px rgba(220, 38, 38,0.18)"
                        : undefined,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size grid */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#A98046] text-[9.5px] tracking-[0.18em] uppercase">
                  Size · M
                </div>
                <div className="text-[#7C5A2A] text-[9.5px] underline underline-offset-2">
                  Fit guide
                </div>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {["XS", "S", "M", "L", "XL", "XXL"].map((s, i) => (
                  <span
                    key={s}
                    className="rounded text-center py-2 text-[11px] font-medium"
                    style={
                      i === 2
                        ? {
                            background: "#DC2626",
                            color: "#1F0808",
                          }
                        : i === 4
                        ? {
                            background: "rgba(220, 38, 38,0.04)",
                            border: "1px solid rgba(220, 38, 38,0.10)",
                            color: "#7C5A2A",
                            textDecoration: "line-through",
                          }
                        : {
                            background: "rgba(220, 38, 38,0.06)",
                            border: "1px solid rgba(220, 38, 38,0.15)",
                            color: "#FECACA",
                          }
                    }
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 mt-auto">
              <div
                className="text-center font-black tracking-[0.08em] uppercase rounded-md py-3.5 text-[13px] inline-flex items-center justify-center gap-2 w-full"
                style={{
                  background: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
                  color: "#1F0808",
                  boxShadow: "0 8px 20px rgba(220, 38, 38,0.30)",
                }}
              >
                Add to bag · $189
                <IconArrowRight size={13} stroke={3} />
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-[10.5px] uppercase tracking-[0.18em]">
                <span
                  className="py-2 rounded-md"
                  style={{
                    border: "1px solid rgba(220, 38, 38,0.20)",
                    color: "#FECACA",
                  }}
                >
                  Save
                </span>
                <span
                  className="py-2 rounded-md"
                  style={{
                    border: "1px solid rgba(220, 38, 38,0.20)",
                    color: "#FECACA",
                  }}
                >
                  Ask the maker
                </span>
              </div>
              <div className="text-[#7C5A2A] text-[10px] text-center mt-1.5">
                Ships within 48h · 14-day return · Free over $150
              </div>
            </div>
          </aside>
        </div>

        {/* ====== PRODUCT GRID ====== */}
        <div
          className="border-t grid grid-cols-4 gap-px"
          style={{
            background: "rgba(220, 38, 38,0.08)",
            borderColor: "rgba(220, 38, 38,0.10)",
          }}
        >
          {[
            { name: "Field Overcoat", price: "$189", tint: "linear-gradient(135deg, #7F1D1D 0%, #1F0808 100%)" },
            { name: "Derby Coat", price: "$224", tint: "linear-gradient(135deg, #292524 0%, #0A0701 100%)" },
            { name: "Peacoat 03", price: "$198", tint: "linear-gradient(135deg, #1F2937 0%, #0A0701 100%)" },
            { name: "Camel Topcoat", price: "$262", tint: "linear-gradient(135deg, #B45353 0%, #2B1A07 100%)" },
          ].map((p) => (
            <div
              key={p.name}
              className="px-4 py-3.5 flex flex-col gap-2.5 relative"
              style={{ background: "#0A0701" }}
            >
              {/* mini product */}
              <div
                className="rounded relative overflow-hidden flex items-center justify-center"
                style={{
                  height: 88,
                  background: p.tint,
                }}
              >
                <svg viewBox="0 0 100 140" className="h-full">
                  <path
                    d="M 30 30 L 40 15 L 60 15 L 70 30 L 84 38 L 84 110 L 78 130 L 22 130 L 16 110 L 16 38 Z"
                    fill="rgba(0,0,0,0.45)"
                    stroke="rgba(220, 38, 38,0.30)"
                    strokeWidth="1"
                  />
                  <line x1="50" y1="25" x2="50" y2="130" stroke="rgba(220, 38, 38,0.20)" strokeWidth="0.6" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-[11px] font-semibold tracking-tight truncate">
                  {p.name}
                </span>
                <span className="text-[#DC2626] text-[11px] font-bold tabular-nums">
                  {p.price}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[
                  "#7F1D1D",
                  "#1F2937",
                  "#EFE7DA",
                  "#0F0902",
                ].map((c, i) => (
                  <span
                    key={i}
                    className="block rounded-full"
                    style={{
                      width: 8,
                      height: 8,
                      background: c,
                      border: "1px solid rgba(220, 38, 38,0.20)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
