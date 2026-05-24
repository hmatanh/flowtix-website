"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconRobot,
  IconMail,
  IconBrandInstagram,
  IconAd,
  IconCheck,
  IconLoader2,
} from "@tabler/icons-react";
import {
  ORANGE,
  TEXT_BRAND,
  TEXT_DIM,
  TEXT_FAINT,
  SURFACE,
  SURFACE_CARD,
  SHELL,
  BORDER,
} from "./_shared";

type Period = "7D" | "30D" | "90D" | "ALL";

const PERIODS: Period[] = ["7D", "30D", "90D", "ALL"];

const METRICS = [
  { label: "Total Revenue", value: "$24,847", delta: "↑ 34%", deltaLabel: "vs last period", color: "#34D399", positive: true },
  { label: "Orders", value: "148", delta: "↑ 28%", deltaLabel: "vs last period", color: "#34D399", positive: true },
  { label: "Email Conv. Rate", value: "8.1%", delta: "↑ 2.3%", deltaLabel: "vs industry avg", color: ORANGE, positive: true },
  { label: "Content Generated", value: "847", delta: "78%", deltaLabel: "time saved", color: ORANGE, positive: true },
];

// 14 days of revenue split by channel — store / email / social
const BARS = [
  { date: "May 1",  store: 720, email: 220, social:  85 },
  { date: "May 2",  store: 640, email: 180, social:  95 },
  { date: "May 3",  store: 880, email: 260, social: 110 },
  { date: "May 4",  store: 940, email: 320, social: 140 },
  { date: "May 5",  store: 720, email: 240, social:  90 },
  { date: "May 6",  store: 600, email: 200, social:  72 },
  { date: "May 7",  store: 780, email: 280, social: 120 },
  { date: "May 8",  store: 900, email: 340, social: 130 },
  { date: "May 9",  store: 820, email: 300, social: 105 },
  { date: "May 10", store: 750, email: 260, social:  98 },
  { date: "May 11", store: 880, email: 310, social: 118 },
  { date: "May 12", store: 940, email: 340, social: 124 },
  { date: "May 13", store: 820, email: 290, social: 108 },
  { date: "May 14", store: 847, email: 312, social: 124 },
];

const TOP_CONTENT = [
  { rank: 1, Icon: IconMail, name: "Abandoned Cart Email", metric: "34.2% open" },
  { rank: 2, Icon: IconBrandInstagram, name: "Trail Launch IG Post", metric: "8.4% engagement" },
  { rank: 3, Icon: IconAd, name: "Navy Drop Ad Copy A", metric: "$2.14 CPC" },
  { rank: 4, Icon: IconMail, name: "Welcome Email #1", metric: "41.8% open" },
  { rank: 5, Icon: IconBrandInstagram, name: "Product Drop Story", metric: "62% swipe-up" },
];

const INSIGHTS = [
  { color: ORANGE, emoji: "🔥", title: "Best time to post", body: "Tuesday and Thursday 7–9 AM drive 2.3× more engagement than your other windows." },
  { color: "rgba(96,165,250,0.5)", emoji: "📧", title: "Abandoned cart timing", body: "Sending at 90 minutes after abandonment outperforms 2 hours by 18% on recovered revenue." },
  { color: "#34D399", emoji: "🎯", title: "Content that converts", body: "Posts featuring real terrain (not studio) get 3.4× more saves and 2× higher CTR to product." },
];

export function DrftAnalytics() {
  const [period, setPeriod] = useState<Period>("30D");
  const [hovered, setHovered] = useState<number | null>(13);
  const [reportState, setReportState] = useState<"idle" | "loading" | "done">("idle");

  function generateReport() {
    setReportState("loading");
    window.setTimeout(() => setReportState("done"), 1800);
    window.setTimeout(() => setReportState("idle"), 4500);
  }

  const maxTotal = Math.max(...BARS.map((b) => b.store + b.email + b.social));

  return (
    <div className="h-full min-h-[420px] sm:min-h-[560px] flex flex-col" style={{ background: SHELL }}>
      <header className="px-5 pt-5 pb-4 border-b flex items-start justify-between gap-3 flex-wrap shrink-0" style={{ borderColor: BORDER }}>
        <div>
          <div className="text-white text-sm font-semibold">Performance Dashboard</div>
          <div className="text-[11px] mt-0.5" style={{ color: TEXT_DIM }}>
            DRFT · last {period}
          </div>
        </div>
        <div className="flex gap-1">
          {PERIODS.map((p) => {
            const active = period === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className="rounded-md px-2.5 py-1 text-[10px] font-medium font-mono"
                style={{
                  background: active ? "rgba(249,115,22,0.10)" : "transparent",
                  border: active ? `1px solid rgba(249,115,22,0.25)` : "1px solid transparent",
                  color: active ? ORANGE : TEXT_DIM,
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        {/* Top metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {METRICS.map((mi, i) => (
            <m.div
              key={mi.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl p-3 sm:p-4"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div className="text-[9px] uppercase tracking-wider" style={{ color: TEXT_DIM }}>
                {mi.label}
              </div>
              <div className="text-xl sm:text-2xl font-black tabular-nums mt-1 text-white">{mi.value}</div>
              <div className="text-[10px] mt-1" style={{ color: mi.color }}>
                {mi.delta} <span style={{ color: TEXT_DIM }}>{mi.deltaLabel}</span>
              </div>
              <Sparkline color={mi.color} />
            </m.div>
          ))}
        </div>

        {/* Revenue chart */}
        <div
          className="mt-4 rounded-2xl p-4 sm:p-5"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
            <div className="text-white text-xs font-semibold">Revenue by Channel</div>
            <div className="flex items-center gap-3 text-[10px] flex-wrap">
              <LegendDot color={ORANGE} label="Store" />
              <LegendDot color="#60a5fa" label="Email" />
              <LegendDot color="#a78bfa" label="Social" />
            </div>
          </div>

          <BarChart
            bars={BARS}
            max={maxTotal}
            hovered={hovered}
            setHovered={setHovered}
          />

          <div className="text-xs mt-3" style={{ color: TEXT_BRAND }}>
            Email drove $4,218 (17% of revenue) this period.
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Top content */}
          <div className="rounded-xl p-4" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div className="text-white text-xs font-semibold mb-3">Top Performing Content</div>
            {TOP_CONTENT.map((row, i) => {
              const Icon = row.Icon;
              return (
                <div
                  key={row.name}
                  className="flex items-center gap-3 py-2 border-b last:border-b-0"
                  style={{ borderColor: SHELL }}
                >
                  <span className="text-[10px] w-4" style={{ color: TEXT_FAINT }}>
                    {row.rank}
                  </span>
                  <Icon size={12} style={{ color: TEXT_BRAND }} />
                  <span className="flex-1 text-[10.5px] truncate" style={{ color: TEXT_BRAND }}>
                    {row.name}
                  </span>
                  <span className="text-[10px] font-bold shrink-0" style={{ color: ORANGE }}>
                    {row.metric}
                  </span>
                </div>
              );
            })}
            <button type="button" className="text-[10px] mt-3" style={{ color: ORANGE }}>
              All content →
            </button>
          </div>

          {/* AI insights */}
          <div className="rounded-xl p-4" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div className="flex items-center gap-2">
              <IconRobot size={13} style={{ color: ORANGE }} />
              <span className="text-white text-xs font-semibold">AI Insights</span>
            </div>
            <div className="text-[10px] mt-0.5 mb-3" style={{ color: TEXT_FAINT }}>
              Based on your last 30 days
            </div>
            {INSIGHTS.map((ins) => (
              <div
                key={ins.title}
                className="rounded-xl p-3 mb-2 last:mb-0"
                style={{
                  background: SHELL,
                  borderLeft: `2px solid ${ins.color}`,
                }}
              >
                <div className="text-white text-xs font-semibold">
                  {ins.emoji} {ins.title}
                </div>
                <div className="text-[10.5px] leading-relaxed mt-1" style={{ color: TEXT_BRAND }}>
                  {ins.body}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={generateReport}
              disabled={reportState === "loading"}
              className="text-[11px] mt-2 inline-flex items-center gap-1.5 disabled:opacity-60"
              style={{ color: reportState === "done" ? "#34D399" : ORANGE }}
            >
              {reportState === "loading" ? (
                <>
                  <IconLoader2 size={11} className="animate-spin" />
                  Composing report…
                </>
              ) : reportState === "done" ? (
                <>
                  <IconCheck size={11} stroke={3} />
                  Report in your inbox!
                </>
              ) : (
                "Generate weekly report →"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5" style={{ color: TEXT_BRAND }}>
      <span className="block w-2 h-2 rounded-sm" style={{ background: color }} />
      {label}
    </span>
  );
}

function BarChart({
  bars,
  max,
  hovered,
  setHovered,
}: {
  bars: typeof BARS;
  max: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  return (
    <div className="relative w-full">
      <div className="flex items-end gap-1 sm:gap-1.5 h-32 sm:h-36">
        {bars.map((b, i) => {
          const total = b.store + b.email + b.social;
          const storeH = (b.store / max) * 100;
          const emailH = (b.email / max) * 100;
          const socialH = (b.social / max) * 100;
          const dimmed = hovered !== null && hovered !== i;
          return (
            <div
              key={i}
              className="flex-1 flex flex-col-reverse min-w-0 relative cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(i)}
              style={{
                opacity: dimmed ? 0.45 : 1,
                transition: "opacity 0.15s",
              }}
            >
              <m.div
                initial={{ height: 0 }}
                animate={{ height: `${storeH}%` }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.02 }}
                className="rounded-t-sm w-full"
                style={{ background: ORANGE }}
              />
              <m.div
                initial={{ height: 0 }}
                animate={{ height: `${emailH}%` }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.02 + 0.08 }}
                className="w-full"
                style={{ background: "#60a5fa" }}
              />
              <m.div
                initial={{ height: 0 }}
                animate={{ height: `${socialH}%` }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.02 + 0.16 }}
                className="w-full rounded-b-sm"
                style={{ background: "#a78bfa" }}
              />

              {hovered === i && (
                <m.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-lg px-3 py-2 text-[10px] whitespace-nowrap z-10"
                  style={{ background: SHELL, border: `1px solid ${BORDER}`, color: "#fff" }}
                >
                  <div className="text-[9px]" style={{ color: TEXT_DIM }}>
                    {b.date}
                  </div>
                  <div>Store: ${b.store}</div>
                  <div>Email: ${b.email}</div>
                  <div>Social: ${b.social}</div>
                  <div className="border-t mt-1 pt-1 font-semibold" style={{ borderColor: BORDER }}>
                    Total: ${total}
                  </div>
                </m.div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-1.5 text-[9px]" style={{ color: TEXT_FAINT }}>
        <span>{bars[0].date}</span>
        <span className="hidden sm:block">{bars[Math.floor(bars.length / 2)].date}</span>
        <span>{bars[bars.length - 1].date}</span>
      </div>
    </div>
  );
}

function Sparkline({ color }: { color: string }) {
  // Tiny inline up-trending line
  return (
    <svg width="80" height="20" viewBox="0 0 80 20" className="mt-2" aria-hidden="true">
      <m.path
        d="M0,16 L12,14 L24,15 L36,11 L48,12 L60,7 L72,9 L80,3"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}
