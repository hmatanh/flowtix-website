"use client";

/**
 * Linx V2 - Client Report (delivered)
 *
 * The artifact the client actually receives. A composed monthly performance
 * report - cover, top-line, narrative summary, a single big chart, a
 * commentary block written by an AI-assisted editor, and a sign-off.
 * Reads like a partner deck, not a dashboard export.
 */

import { m } from "framer-motion";
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconSparkles,
  IconCheck,
} from "@tabler/icons-react";

export function ScreenReport() {
  // Mock 9-month return curve for the line chart (in %)
  const SERIES = [3.2, 4.1, 5.8, 5.2, 7.4, 9.1, 11.6, 14.8, 18.4];
  const W = 760;
  const H = 220;
  const PAD_L = 38;
  const PAD_R = 14;
  const PAD_T = 14;
  const PAD_B = 32;
  const maxY = 20;
  const minY = 0;
  const usableW = W - PAD_L - PAD_R;
  const usableH = H - PAD_T - PAD_B;
  const stepX = usableW / (SERIES.length - 1);

  const pts = SERIES.map((v, i) => {
    const x = PAD_L + i * stepX;
    const y = PAD_T + (1 - (v - minY) / (maxY - minY)) * usableH;
    return [x, y] as const;
  });

  const pathLine = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
    .join(" ");
  const pathArea =
    `${pathLine} L ${pts[pts.length - 1][0].toFixed(1)} ${(H - PAD_B).toFixed(1)} L ${PAD_L} ${(H - PAD_B).toFixed(1)} Z`;

  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "#0F0B1F",
        color: "#E6E0F4",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1100",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "60% 40%" }}>
        {/* LEFT - actual document on cream paper */}
        <div
          className="relative px-10 py-10 overflow-hidden"
          style={{
            background: "#F5EFE2",
            color: "#1A1230",
            fontFamily:
              "var(--font-tinos, Tinos), 'EB Garamond', ui-serif, Georgia, serif",
          }}
        >
          {/* Document top bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded"
                style={{
                  background: "linear-gradient(135deg,#8B5CF6 0%,#5B21B6 100%)",
                }}
              >
                <svg viewBox="0 0 14 14" width="9" height="9" fill="none">
                  <path
                    d="M2 11 L2 3 L6 3 L8 7 L12 3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className="text-[10px] tracking-[0.30em] uppercase font-sans font-bold"
                style={{ color: "#5B21B6" }}
              >
                Linx Studio · Marlow + Co
              </span>
            </div>
            <span
              className="text-[10px] font-sans tracking-[0.18em] uppercase"
              style={{ color: "#7A6BA0" }}
            >
              March 2025 · pg. 04 / 18
            </span>
          </div>

          {/* Hairline */}
          <div className="h-px w-full mb-7" style={{ background: "rgba(91,33,182,0.20)" }} />

          {/* Title block */}
          <div className="mb-7">
            <div
              className="text-[10px] tracking-[0.32em] uppercase mb-3 font-sans font-bold"
              style={{ color: "#5B21B6" }}
            >
              Section 02 · Performance
            </div>
            <h1
              className="tracking-tight"
              style={{
                fontSize: 38,
                fontWeight: 400,
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "#0B0518",
              }}
            >
              A quarter of <em>compounding</em> wins.
            </h1>
            <div
              className="mt-3 text-[12px] tracking-tight italic"
              style={{ color: "#5A4D7A" }}
            >
              Returns from the nine-month engagement, March 2024 - March 2025.
            </div>
          </div>

          {/* Top-line metrics row */}
          <div className="grid grid-cols-3 gap-5 mb-7">
            {[
              { label: "Cumulative return", v: "+18.4%", trend: "up" },
              { label: "Benchmark (vertical)", v: "+6.2%", trend: "flat" },
              { label: "Linx vs benchmark", v: "+12.2pts", trend: "up" },
            ].map((s) => (
              <div
                key={s.label}
                className="border-t pt-3"
                style={{ borderColor: "rgba(91,33,182,0.30)" }}
              >
                <div
                  className="text-[9.5px] tracking-[0.22em] uppercase font-sans font-bold mb-1"
                  style={{ color: "#5B21B6" }}
                >
                  {s.label}
                </div>
                <div
                  className="tabular-nums tracking-tight"
                  style={{
                    fontSize: 30,
                    fontWeight: 400,
                    color: "#0B0518",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div
            className="rounded-sm p-3 mb-6"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(91,33,182,0.20)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[9.5px] tracking-[0.22em] uppercase font-sans font-bold"
                style={{ color: "#5B21B6" }}
              >
                Cumulative return · indexed
              </span>
              <span
                className="text-[9px] font-sans tabular-nums"
                style={{ color: "#7A6BA0" }}
              >
                Jul 24 - Mar 25
              </span>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block">
              <defs>
                <linearGradient id="reportArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Y grid */}
              {[0, 5, 10, 15, 20].map((tick) => {
                const y = PAD_T + (1 - (tick - minY) / (maxY - minY)) * usableH;
                return (
                  <g key={tick}>
                    <line
                      x1={PAD_L}
                      x2={W - PAD_R}
                      y1={y}
                      y2={y}
                      stroke="#E5DCC9"
                      strokeWidth="0.7"
                    />
                    <text
                      x={PAD_L - 8}
                      y={y + 3}
                      textAnchor="end"
                      fontSize="9"
                      fill="#7A6BA0"
                      fontFamily="var(--font-inter,Inter,sans-serif)"
                    >
                      {tick}%
                    </text>
                  </g>
                );
              })}
              {/* X labels */}
              {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"].map(
                (mo, i) => {
                  const x = PAD_L + i * stepX;
                  return (
                    <text
                      key={mo}
                      x={x}
                      y={H - PAD_B + 14}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#7A6BA0"
                      fontFamily="var(--font-inter,Inter,sans-serif)"
                    >
                      {mo}
                    </text>
                  );
                }
              )}
              {/* Area */}
              <m.path
                d={pathArea}
                fill="url(#reportArea)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 }}
              />
              {/* Line */}
              <m.path
                d={pathLine}
                stroke="#8B5CF6"
                strokeWidth="2.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
              {/* Points */}
              {pts.map((p, i) => (
                <circle
                  key={i}
                  cx={p[0]}
                  cy={p[1]}
                  r={i === pts.length - 1 ? 4.5 : 2.2}
                  fill={i === pts.length - 1 ? "#5B21B6" : "#8B5CF6"}
                  stroke="#FFFFFF"
                  strokeWidth={i === pts.length - 1 ? 2 : 1}
                />
              ))}
              {/* End label */}
              <text
                x={pts[pts.length - 1][0] - 6}
                y={pts[pts.length - 1][1] - 10}
                textAnchor="end"
                fontSize="10"
                fontWeight="700"
                fill="#5B21B6"
                fontFamily="var(--font-inter,Inter,sans-serif)"
              >
                +18.4%
              </text>
            </svg>
          </div>

          {/* Narrative paragraph with drop cap */}
          <div className="grid grid-cols-[42px_1fr] gap-3 mb-2">
            <span
              className="leading-[0.85] tracking-tight"
              style={{
                fontSize: 64,
                fontWeight: 400,
                color: "#5B21B6",
              }}
            >
              T
            </span>
            <p
              className="text-[12.5px] leading-[1.62]"
              style={{ color: "#1A1230" }}
            >
              he story of the quarter is not one big win but ten small,
              compounding ones. Paid efficiency rose 31% as the new audience
              model matured. The site refresh pushed organic share by 22%.
              Email is now the second-largest revenue line - overtaking
              affiliate, which we&apos;ll wind down in Q2. The chart on this
              page is the result of those threads pulling in the same
              direction for nine consecutive months.
            </p>
          </div>
        </div>

        {/* RIGHT - operations rail */}
        <div className="relative flex flex-col">
          {/* Top: cover preview + meta */}
          <div
            className="px-6 py-5 border-b"
            style={{
              background: "linear-gradient(180deg, #16102A 0%, #0F0B1F 100%)",
              borderColor: "rgba(139,92,246,0.15)",
            }}
          >
            <div className="text-[#7A6BA0] text-[9px] tracking-[0.22em] uppercase mb-3">
              Report ready · awaiting sign-off
            </div>
            <div className="flex items-start gap-4">
              {/* Mini cover */}
              <div
                className="shrink-0 w-[88px] h-[112px] rounded-sm p-2.5 flex flex-col justify-between shadow-2xl"
                style={{
                  background: "#F5EFE2",
                  color: "#1A1230",
                  fontFamily: "var(--font-tinos, Tinos), serif",
                  transform: "rotate(-2deg)",
                }}
              >
                <div className="text-[6px] tracking-[0.32em] uppercase font-sans font-bold" style={{ color: "#5B21B6" }}>
                  Linx Studio
                </div>
                <div className="leading-[0.95] tracking-tight" style={{ fontSize: 13, fontWeight: 400 }}>
                  Marlow<br/>+ Co<br/><span style={{ fontSize: 9 }}>Q1 2025</span>
                </div>
                <div className="h-px" style={{ background: "rgba(91,33,182,0.4)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-[14px] font-medium tracking-tight">
                  Marlow + Co
                </div>
                <div className="text-[#9180B5] text-[11px] mt-0.5">
                  Q1 2025 · Performance review
                </div>
                <div className="mt-3 space-y-1.5 text-[10.5px] text-[#9180B5]">
                  <div className="flex justify-between">
                    <span>Pages</span>
                    <span className="text-[#DDD6FE] tabular-nums">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drafted by</span>
                    <span className="text-[#DDD6FE]">Linx AI · Iris</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Editor pass</span>
                    <span className="text-[#84CC16] inline-flex items-center gap-1">
                      <IconCheck size={9} stroke={2.5} />
                      Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI-drafted commentary */}
          <div
            className="px-6 py-5 border-b"
            style={{ borderColor: "rgba(139,92,246,0.15)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <m.span
                className="inline-flex items-center justify-center w-5 h-5 rounded"
                style={{ background: "rgba(139,92,246,0.15)" }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(139,92,246,0)",
                    "0 0 10px rgba(139,92,246,0.45)",
                    "0 0 0 rgba(139,92,246,0)",
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <IconSparkles size={10} stroke={1.8} className="text-violet-300" />
              </m.span>
              <span className="text-white text-[12px] font-medium tracking-tight">
                AI commentary · ready to insert
              </span>
            </div>
            <div
              className="rounded-md p-3.5"
              style={{
                background: "rgba(139,92,246,0.07)",
                border: "1px solid rgba(139,92,246,0.20)",
              }}
            >
              <p className="text-[#E6E0F4] text-[11.5px] leading-relaxed italic">
                &ldquo;Three quiet shifts compounded into the quarter&apos;s
                +12.2pts edge: audience model maturity, the refreshed
                navigation, and the new welcome flow. Each is small in
                isolation. Together, they reset the baseline.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  className="flex-1 text-[10px] py-1.5 rounded text-white font-medium"
                  style={{ background: "#8B5CF6" }}
                >
                  Insert into pg. 04
                </button>
                <button
                  className="text-[10px] py-1.5 px-2.5 rounded text-[#9180B5]"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                >
                  Rewrite
                </button>
              </div>
            </div>
          </div>

          {/* Variance log */}
          <div className="px-6 py-5 flex-1">
            <div className="text-[#7A6BA0] text-[9px] tracking-[0.22em] uppercase mb-3">
              Variance vs forecast
            </div>
            <div className="space-y-2.5">
              {[
                { label: "Paid efficiency", v: "+31%", dir: "up" },
                { label: "Organic share", v: "+22%", dir: "up" },
                { label: "Email revenue", v: "+48%", dir: "up" },
                { label: "Affiliate", v: "-12%", dir: "down" },
                { label: "Direct traffic", v: "+9%", dir: "up" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between text-[11.5px] py-1.5 border-b"
                  style={{ borderColor: "rgba(139,92,246,0.08)" }}
                >
                  <span className="text-[#E6E0F4]">{row.label}</span>
                  <span
                    className="tabular-nums font-medium inline-flex items-center gap-1"
                    style={{ color: row.dir === "up" ? "#84CC16" : "#F87171" }}
                  >
                    {row.dir === "up" ? (
                      <IconArrowUpRight size={11} stroke={2.4} />
                    ) : (
                      <IconArrowDownRight size={11} stroke={2.4} />
                    )}
                    {row.v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sign-off bar */}
          <div
            className="px-6 py-4 border-t flex items-center justify-between gap-3"
            style={{
              borderColor: "rgba(139,92,246,0.15)",
              background: "#0A0814",
            }}
          >
            <div>
              <div className="text-white text-[12px] font-medium">
                Approve & deliver
              </div>
              <div className="text-[#7A6BA0] text-[10px]">
                Will send to <span className="text-[#A78BFA]">Pia Marlow</span>
              </div>
            </div>
            <button
              className="text-white text-[11px] font-medium px-3.5 py-2 rounded inline-flex items-center gap-1.5"
              style={{ background: "linear-gradient(135deg,#8B5CF6 0%,#5B21B6 100%)" }}
            >
              Sign & send
              <IconArrowUpRight size={12} stroke={2.2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
