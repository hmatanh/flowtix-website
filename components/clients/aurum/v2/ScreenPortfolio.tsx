"use client";

/**
 * Aurum V2 - Portfolio Intelligence Engine
 *
 * Private-bank style portfolio view. Deep amber-black backdrop with cream
 * type and gold accents. Sidebar with portfolio nav, header with client
 * + AUM, returns chart, holdings table, side panel with risk metrics.
 *
 * Density is calmer than Kova - fewer rows, more whitespace, serif title.
 */

import { m } from "framer-motion";
import {
  IconChartLine,
  IconReportAnalytics,
  IconBriefcase,
  IconFileText,
  IconUsers,
  IconChevronDown,
  IconArrowUpRight,
} from "@tabler/icons-react";

const HOLDINGS = [
  { ticker: "VTI", name: "US Total Market", weight: 24.5, ret: 11.2, color: "#D97706" },
  { ticker: "VEA", name: "Developed Intl ex-US", weight: 14.0, ret: 8.4, color: "#B45309" },
  { ticker: "VWO", name: "Emerging Markets", weight: 8.5, ret: 6.1, color: "#92400E" },
  { ticker: "BND", name: "US Aggregate Bonds", weight: 22.0, ret: 4.8, color: "#78350F" },
  { ticker: "VYM", name: "Dividend Equity", weight: 12.0, ret: 9.7, color: "#A16207" },
  { ticker: "VNQ", name: "Real Estate", weight: 6.0, ret: 5.3, color: "#854D0E" },
  { ticker: "GLD", name: "Gold", weight: 4.0, ret: 14.2, color: "#CA8A04" },
  { ticker: "Cash", name: "Money market", weight: 9.0, ret: 5.1, color: "#3F2F18" },
];

const PERFORMANCE = [62, 58, 55, 63, 68, 72, 70, 76, 82, 78, 85, 88, 92, 94];

export function ScreenPortfolio() {
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
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "210px 1fr" }}>
        {/* Sidebar */}
        <aside
          className="flex flex-col border-r"
          style={{ background: "#0A0701", borderColor: "rgba(217,119,6,0.10)" }}
        >
          <div className="px-5 py-5 border-b" style={{ borderColor: "rgba(217,119,6,0.10)" }}>
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-sm"
                style={{
                  background: "linear-gradient(135deg,#D97706 0%,#78350F 100%)",
                }}
              >
                <span className="text-white text-[11px] font-serif italic font-bold">A</span>
              </span>
              <div>
                <div className="font-serif-editorial text-white text-[14px] tracking-tight">
                  Aurum
                </div>
                <div className="text-[#8C6B3A] text-[9px] tracking-[0.22em] uppercase">
                  Private
                </div>
              </div>
            </div>
          </div>

          <nav className="flex-1 py-4 px-3 space-y-0.5 text-[12px]">
            {[
              { Icon: IconBriefcase, label: "Portfolios", active: true },
              { Icon: IconChartLine, label: "Performance" },
              { Icon: IconReportAnalytics, label: "Attribution" },
              { Icon: IconFileText, label: "Reports", badge: "3" },
              { Icon: IconUsers, label: "Clients" },
            ].map((it) => {
              const Icon = it.Icon;
              return (
                <div
                  key={it.label}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-sm"
                  style={
                    it.active
                      ? {
                          background: "rgba(217,119,6,0.08)",
                          boxShadow: "inset 2px 0 0 #D97706",
                          color: "#FCD34D",
                        }
                      : { color: "#8C6B3A" }
                  }
                >
                  <Icon size={13} stroke={1.5} />
                  <span className="flex-1">{it.label}</span>
                  {it.badge && (
                    <span
                      className="text-[9px] tabular-nums px-1.5 py-0.5 rounded-sm"
                      style={{ background: "rgba(217,119,6,0.10)", color: "#FCD34D" }}
                    >
                      {it.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          <div
            className="px-4 py-4 border-t"
            style={{ borderColor: "rgba(217,119,6,0.10)" }}
          >
            <div className="text-[#8C6B3A] text-[9px] tracking-[0.22em] uppercase mb-2">
              Today
            </div>
            <div className="text-[#F5EBD2] text-[11px]">3 portfolios reviewed</div>
            <div className="text-[#A98046] text-[10px] mt-1">8 reports pending sign-off</div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex flex-col overflow-hidden">
          {/* Header row */}
          <div
            className="px-9 pt-7 pb-5 border-b"
            style={{ borderColor: "rgba(217,119,6,0.10)" }}
          >
            <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.24em] uppercase mb-3">
              Portfolio · Henderson Family Trust
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h1
                className="font-serif-editorial text-white tracking-tight"
                style={{ fontSize: 32, fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                Q4 2024 portfolio review
              </h1>
              <div className="text-right">
                <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.18em] uppercase">
                  Assets under management
                </div>
                <div className="font-serif-editorial text-[#FCD34D] text-[26px] font-medium tabular-nums tracking-tight mt-1">
                  $24,318,470
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-5 flex items-center gap-5 text-[11.5px]">
              {["Overview", "Holdings", "Attribution", "Reports", "Mandate"].map(
                (t, i) => (
                  <span
                    key={t}
                    className="pb-2"
                    style={
                      i === 0
                        ? {
                            color: "#FCD34D",
                            borderBottom: "1px solid #D97706",
                            marginBottom: -1,
                          }
                        : { color: "#8C6B3A" }
                    }
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Body grid */}
          <div className="flex-1 grid" style={{ gridTemplateColumns: "1fr 240px", minHeight: 0 }}>
            {/* Left: chart + holdings */}
            <div className="overflow-hidden px-9 py-7 flex flex-col gap-7">
              {/* Returns chart */}
              <div
                className="rounded-sm p-5"
                style={{
                  background: "#160F04",
                  border: "1px solid rgba(217,119,6,0.10)",
                }}
              >
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.18em] uppercase mb-1">
                      Year to date
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-serif-editorial text-white tabular-nums tracking-tight"
                        style={{ fontSize: 36, fontWeight: 400 }}
                      >
                        +11.4%
                      </span>
                      <span className="text-emerald-400 text-[12px] inline-flex items-center gap-0.5">
                        <IconArrowUpRight size={11} stroke={2} />
                        ahead of benchmark
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    {["1M", "3M", "YTD", "1Y", "5Y", "Max"].map((p, i) => (
                      <span
                        key={p}
                        className="px-2 py-1 rounded-sm"
                        style={
                          i === 2
                            ? {
                                background: "rgba(217,119,6,0.10)",
                                color: "#FCD34D",
                              }
                            : { color: "#8C6B3A" }
                        }
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chart */}
                <div className="relative" style={{ height: 120 }}>
                  <svg viewBox="0 0 280 80" className="absolute inset-0 w-full h-full">
                    {/* Grid */}
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 20}
                        x2="280"
                        y2={i * 20}
                        stroke="rgba(217,119,6,0.06)"
                        strokeWidth="0.4"
                      />
                    ))}

                    {/* Area */}
                    <m.path
                      d={
                        "M 0 " +
                        (80 - (PERFORMANCE[0] / 100) * 80).toFixed(1) +
                        " " +
                        PERFORMANCE.map((v, i) => {
                          const x = (i / (PERFORMANCE.length - 1)) * 280;
                          const y = 80 - (v / 100) * 80;
                          return `L ${x.toFixed(1)} ${y.toFixed(1)}`;
                        }).join(" ") +
                        " L 280 80 L 0 80 Z"
                      }
                      fill="url(#aurumGrad)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.3 }}
                    />
                    {/* Line */}
                    <m.path
                      d={PERFORMANCE.map((v, i) => {
                        const x = (i / (PERFORMANCE.length - 1)) * 280;
                        const y = 80 - (v / 100) * 80;
                        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
                      }).join(" ")}
                      stroke="#D97706"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                    {/* Endpoint */}
                    <circle
                      cx={280}
                      cy={80 - (PERFORMANCE[PERFORMANCE.length - 1] / 100) * 80}
                      r="2.5"
                      fill="#FCD34D"
                    />
                    <defs>
                      <linearGradient id="aurumGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(217,119,6,0.30)" />
                        <stop offset="100%" stopColor="rgba(217,119,6,0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex justify-between text-[#8C6B3A] text-[9px] mt-3 tabular-nums">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>

              {/* Holdings */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase">
                    Holdings · 8 positions
                  </div>
                  <span className="text-[#A98046] text-[10.5px] inline-flex items-center gap-1">
                    Sort by weight
                    <IconChevronDown size={9} stroke={1.5} />
                  </span>
                </div>

                <div
                  className="rounded-sm overflow-hidden"
                  style={{
                    background: "#160F04",
                    border: "1px solid rgba(217,119,6,0.10)",
                  }}
                >
                  {/* Table head */}
                  <div
                    className="grid grid-cols-[60px_1fr_70px_80px_50px] px-4 py-2 text-[#8C6B3A] text-[9px] tracking-[0.18em] uppercase"
                    style={{ borderBottom: "1px solid rgba(217,119,6,0.10)" }}
                  >
                    <span>Ticker</span>
                    <span>Position</span>
                    <span className="text-right">Weight</span>
                    <span className="text-right">YTD</span>
                    <span></span>
                  </div>

                  {HOLDINGS.map((h, i) => (
                    <div
                      key={h.ticker}
                      className="grid grid-cols-[60px_1fr_70px_80px_50px] items-center px-4 py-2.5"
                      style={{
                        borderBottom:
                          i < HOLDINGS.length - 1
                            ? "1px solid rgba(217,119,6,0.06)"
                            : undefined,
                      }}
                    >
                      <span className="text-[#FCD34D] text-[11px] tabular-nums font-mono">
                        {h.ticker}
                      </span>
                      <span className="text-[#F5EBD2] text-[11.5px]">{h.name}</span>
                      <span className="text-[#F5EBD2] text-[11.5px] tabular-nums text-right">
                        {h.weight.toFixed(1)}%
                      </span>
                      <span
                        className="text-[11.5px] tabular-nums text-right"
                        style={{ color: h.ret >= 5 ? "#84CC16" : "#FCD34D" }}
                      >
                        +{h.ret.toFixed(1)}%
                      </span>
                      <div className="flex justify-end">
                        <span
                          className="block h-1.5 rounded-full"
                          style={{
                            width: Math.max(8, h.weight * 1.2),
                            background: h.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right rail: risk profile */}
            <aside
              className="border-l overflow-hidden px-6 py-7"
              style={{
                borderColor: "rgba(217,119,6,0.10)",
                background: "rgba(10,7,1,0.5)",
              }}
            >
              <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-4">
                Risk profile
              </div>

              <div className="space-y-5">
                {[
                  { k: "Beta", v: "0.84" },
                  { k: "Sharpe", v: "1.41" },
                  { k: "Std dev", v: "9.6%" },
                  { k: "Max DD", v: "-7.2%" },
                ].map((r) => (
                  <div key={r.k}>
                    <div className="text-[#8C6B3A] text-[9.5px] uppercase tracking-[0.18em] mb-1">
                      {r.k}
                    </div>
                    <div
                      className="font-serif-editorial text-[#F5EBD2] tabular-nums"
                      style={{ fontSize: 22, fontWeight: 400 }}
                    >
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-7 pt-5 border-t"
                style={{ borderColor: "rgba(217,119,6,0.10)" }}
              >
                <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-3">
                  Mandate
                </div>
                <div className="text-[#F5EBD2] text-[11px] leading-relaxed">
                  Long-only equity-tilt with absolute return floor of 5% over
                  the 10-year cycle.
                </div>
                <div
                  className="mt-3 inline-flex items-center gap-1.5 text-[10px] tabular-nums px-2 py-1 rounded-sm"
                  style={{
                    background: "rgba(217,119,6,0.08)",
                    color: "#FCD34D",
                  }}
                >
                  On mandate · 11.4% YTD
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
