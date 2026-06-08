"use client";

/**
 * Aurum V2 - AI-Written Quarterly Report Editor
 *
 * Editorial composing surface. Sidebar shows the report's section outline
 * with progress indicators. Main canvas is a two-column editorial layout
 * (the report-being-written) in serif type. Right rail shows the AI's
 * draft suggestions ready for the advisor's edit.
 */

import { m } from "framer-motion";
import {
  IconFileText,
  IconSparkles,
  IconCircleCheck,
  IconClock,
  IconChevronRight,
} from "@tabler/icons-react";

const SECTIONS = [
  { label: "Cover & summary", done: true },
  { label: "Market commentary", done: true },
  { label: "Portfolio review", done: true, active: true },
  { label: "Attribution analysis", done: false },
  { label: "Forward outlook", done: false },
  { label: "Mandate compliance", done: false },
  { label: "Disclosure", done: false },
];

export function ScreenReport() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #1A1206 0%, #0A0701 100%)",
        color: "#F5EBD2",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "230px 1fr 280px" }}>
        {/* Outline */}
        <aside
          className="border-r overflow-hidden flex flex-col"
          style={{ borderColor: "rgba(217,119,6,0.10)", background: "#0A0701" }}
        >
          <div
            className="px-5 py-4 border-b"
            style={{ borderColor: "rgba(217,119,6,0.10)" }}
          >
            <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-1">
              Report
            </div>
            <div className="font-serif-editorial text-white text-[14px] tracking-tight">
              Q4 2024 · Henderson
            </div>
            <div className="text-[#A98046] text-[10px] mt-0.5 inline-flex items-center gap-1">
              <IconClock size={9} stroke={1.5} />
              Drafting · 38% complete
            </div>
          </div>

          <nav className="flex-1 py-3 px-2 space-y-1 overflow-hidden">
            {SECTIONS.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-2.5 py-2 rounded-sm text-[11.5px]"
                style={
                  s.active
                    ? {
                        background: "rgba(217,119,6,0.08)",
                        boxShadow: "inset 2px 0 0 #D97706",
                        color: "#FCD34D",
                      }
                    : { color: s.done ? "#A98046" : "#5B4830" }
                }
              >
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full shrink-0"
                  style={{
                    background: s.done ? "rgba(217,119,6,0.18)" : "transparent",
                    border: s.done
                      ? "1px solid rgba(217,119,6,0.30)"
                      : "1px solid rgba(217,119,6,0.12)",
                  }}
                >
                  {s.done && (
                    <IconCircleCheck
                      size={9}
                      stroke={2.5}
                      style={{ color: "#FCD34D" }}
                    />
                  )}
                </span>
                <span className="flex-1 truncate">{s.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Center: report */}
        <main className="overflow-hidden flex flex-col">
          {/* Top bar */}
          <div
            className="px-7 py-3 flex items-center justify-between border-b text-[11px]"
            style={{ borderColor: "rgba(217,119,6,0.10)", background: "#0A0701" }}
          >
            <div className="flex items-center gap-2 text-[#A98046]">
              <IconFileText size={11} stroke={1.5} />
              <span>Section 3 - Portfolio Review</span>
            </div>
            <div className="flex items-center gap-3 text-[10.5px]">
              <span className="text-[#8C6B3A]">Saved · 12 sec ago</span>
              <span
                className="inline-flex items-center gap-1 px-2 py-1 rounded-sm"
                style={{
                  background: "rgba(217,119,6,0.08)",
                  color: "#FCD34D",
                  border: "1px solid rgba(217,119,6,0.18)",
                }}
              >
                <IconSparkles size={9} stroke={1.8} />
                AI draft v2
              </span>
              <span
                className="px-3 py-1 rounded-sm text-[10.5px] font-medium"
                style={{
                  background: "linear-gradient(135deg, #D97706, #B45309)",
                  color: "#1A1206",
                }}
              >
                Approve & lock
              </span>
            </div>
          </div>

          {/* Document */}
          <div
            className="flex-1 overflow-hidden px-10 py-9"
            style={{ background: "#0F0902" }}
          >
            {/* Page header */}
            <div className="mb-7 flex items-end justify-between">
              <div>
                <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.24em] uppercase mb-3">
                  Aurum Private · Confidential
                </div>
                <h2
                  className="font-serif-editorial text-white tracking-tight"
                  style={{ fontSize: 30, fontWeight: 400, letterSpacing: "-0.01em" }}
                >
                  Portfolio review
                </h2>
                <div className="text-[#A98046] text-[11px] italic mt-1">
                  Q4 2024 · Henderson Family Trust
                </div>
              </div>
              <div
                className="text-right font-serif-editorial"
                style={{ color: "#8C6B3A", fontSize: 11 }}
              >
                - page 3 of 14 -
              </div>
            </div>

            {/* Two-column editorial */}
            <div className="grid grid-cols-2 gap-8 font-serif-editorial">
              {/* Column 1 */}
              <div>
                <p
                  className="text-[#F5EBD2] leading-[1.55]"
                  style={{ fontSize: 13 }}
                >
                  <span
                    className="font-serif-editorial float-left mr-2 mt-1.5"
                    style={{
                      fontSize: 44,
                      lineHeight: 0.8,
                      fontWeight: 400,
                      color: "#D97706",
                    }}
                  >
                    T
                  </span>
                  he portfolio closed the year up{" "}
                  <span style={{ color: "#FCD34D" }}>11.4%</span>, ahead of the
                  blended benchmark by 1.8 percentage points. The result was
                  driven primarily by overweight exposure to US large-cap
                  equity and a tactical addition to gold in the third quarter.
                </p>

                <p
                  className="text-[#F5EBD2] leading-[1.55] mt-4"
                  style={{ fontSize: 13 }}
                >
                  Fixed income contributed 1.2 points, in line with our base
                  case for a normalising yield curve. Real estate detracted
                  marginally, consistent with sector rebalancing across the
                  region. Cash holdings remained at the upper end of the
                  mandate range through October before being deployed in early
                  November.
                </p>

                <div className="mt-5">
                  <div
                    className="text-[#FCD34D] mb-1.5"
                    style={{
                      fontSize: 9.5,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}
                  >
                    Top contributors
                  </div>
                  <ul className="space-y-1 text-[#F5EBD2]" style={{ fontSize: 12 }}>
                    <li>· VTI - US Total Market (+2.7%)</li>
                    <li>· GLD - Gold (+1.9%)</li>
                    <li>· VYM - Dividend Equity (+1.4%)</li>
                  </ul>
                </div>
              </div>

              {/* Column 2 - chart + commentary */}
              <div>
                <div
                  className="rounded-sm p-4 mb-5"
                  style={{
                    background: "#160F04",
                    border: "1px solid rgba(217,119,6,0.10)",
                  }}
                >
                  <div className="text-[#8C6B3A] text-[9px] tracking-[0.22em] uppercase mb-2">
                    Calendar-year returns
                  </div>
                  <svg viewBox="0 0 200 70" className="w-full">
                    {[
                      { y: "2020", v: 8.2 },
                      { y: "2021", v: 14.6 },
                      { y: "2022", v: -3.4 },
                      { y: "2023", v: 9.8 },
                      { y: "2024", v: 11.4 },
                    ].map((d, i) => {
                      const x = 8 + i * 38;
                      const h = Math.abs(d.v) * 3.4;
                      const negative = d.v < 0;
                      return (
                        <g key={d.y}>
                          <m.rect
                            x={x}
                            y={negative ? 36 : 36 - h}
                            width="20"
                            height={h}
                            fill={negative ? "#5B4830" : "#D97706"}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: i * 0.08,
                              ease: "easeOut",
                            }}
                            style={{
                              transformOrigin: `${x + 10}px 36px`,
                            }}
                          />
                          <text
                            x={x + 10}
                            y={62}
                            fill="#8C6B3A"
                            fontSize="6"
                            textAnchor="middle"
                          >
                            {d.y}
                          </text>
                          <text
                            x={x + 10}
                            y={negative ? 36 + h + 5 : 36 - h - 2}
                            fill={negative ? "#A98046" : "#FCD34D"}
                            fontSize="6"
                            textAnchor="middle"
                          >
                            {d.v > 0 ? "+" : ""}
                            {d.v}%
                          </text>
                        </g>
                      );
                    })}
                    <line
                      x1="0"
                      y1="36"
                      x2="200"
                      y2="36"
                      stroke="rgba(217,119,6,0.18)"
                      strokeWidth="0.3"
                    />
                  </svg>
                </div>

                <p
                  className="text-[#F5EBD2] leading-[1.55] italic"
                  style={{ fontSize: 12.5 }}
                >
                  &ldquo;Performance over the trailing five years remains
                  consistent with the long-term mandate, with annualised
                  returns of 8.1% net of fees.&rdquo;
                </p>

                <div
                  className="mt-5 pt-4 border-t flex items-center justify-between"
                  style={{ borderColor: "rgba(217,119,6,0.12)" }}
                >
                  <span
                    className="text-[#8C6B3A] italic"
                    style={{ fontSize: 11 }}
                  >
                    Drafted by Sero AI · reviewed by Eitan Shaked
                  </span>
                  <span
                    className="text-[#FCD34D] inline-flex items-center gap-1"
                    style={{ fontSize: 11 }}
                  >
                    Continue
                    <IconChevronRight size={10} stroke={2} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* AI suggestions */}
        <aside
          className="border-l overflow-hidden flex flex-col"
          style={{ borderColor: "rgba(217,119,6,0.10)", background: "#0A0701" }}
        >
          <div
            className="px-5 py-3.5 border-b flex items-center gap-2"
            style={{ borderColor: "rgba(217,119,6,0.10)" }}
          >
            <m.span
              className="inline-flex items-center justify-center w-5 h-5 rounded-sm"
              style={{
                background: "rgba(217,119,6,0.15)",
                border: "1px solid rgba(217,119,6,0.30)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(217,119,6,0)",
                  "0 0 10px rgba(217,119,6,0.5)",
                  "0 0 0 rgba(217,119,6,0)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              <IconSparkles size={10} stroke={1.8} className="text-amber-300" />
            </m.span>
            <span className="text-white text-[12px] font-medium tracking-tight">
              Suggestions
            </span>
            <span className="text-[#8C6B3A] text-[9.5px] tracking-[0.18em] uppercase ml-auto">
              v2 · 3 open
            </span>
          </div>

          <div className="flex-1 overflow-hidden px-4 py-4 space-y-3">
            {[
              {
                tag: "Tone",
                title: "Match Q3 cadence",
                body:
                  "Last quarter's phrasing used 'tactically reduced' rather than 'tactically added'. Apply the same convention here for the gold position?",
              },
              {
                tag: "Number",
                title: "Round 11.43 → 11.4%",
                body:
                  "Aurum reports cite returns to one decimal place. Updating to match house style.",
              },
              {
                tag: "Disclosure",
                title: "Link forward outlook to mandate",
                body:
                  "Reference the long-term mandate clause in section 6 so the reader sees the discipline behind the call.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-sm p-3"
                style={{
                  background: "rgba(217,119,6,0.04)",
                  border: "1px solid rgba(217,119,6,0.12)",
                }}
              >
                <div className="text-[#FCD34D] text-[9px] tracking-[0.18em] uppercase mb-1.5">
                  {s.tag}
                </div>
                <div className="text-white text-[11.5px] font-medium leading-tight mb-1.5">
                  {s.title}
                </div>
                <div className="text-[#A98046] text-[10.5px] leading-snug">
                  {s.body}
                </div>
                <div className="mt-2.5 flex items-center gap-2">
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-sm font-medium"
                    style={{
                      background: "linear-gradient(135deg, #D97706, #B45309)",
                      color: "#1A1206",
                    }}
                  >
                    Apply
                  </span>
                  <span className="text-[#8C6B3A] text-[10px]">Skip</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
