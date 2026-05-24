"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconBell,
  IconCalendar,
  IconChartBar,
  IconFileText,
  IconArrowUpRight,
  IconCheck,
  IconDownload,
  IconLoader2,
} from "@tabler/icons-react";
import {
  GOLD,
  GOLD_SOFT,
  GOLD_DEEP,
  BORDER,
  BORDER_SOFT,
  SURFACE,
  SURFACE_DEEP,
} from "./_shared";
import { PerformanceChart } from "./PerformanceChart";
import type { ChartPeriod } from "./_shared";

type View = "overview" | "reports" | "meetings" | "market";

const VIEW_TABS: { id: View; label: string }[] = [
  { id: "overview", label: "My Portfolio" },
  { id: "reports", label: "Reports" },
  { id: "meetings", label: "Meetings" },
  { id: "market", label: "Market Updates" },
];

const PERIODS: ChartPeriod[] = ["1M", "3M", "YTD", "1Y", "ALL"];

const REPORTS = [
  { name: "Q1 2025 Portfolio Review", period: "Jan–Mar 2025", date: "May 1", status: "available" as const },
  { name: "Annual Review 2024", period: "Full Year 2024", date: "Jan 15", status: "available" as const },
  { name: "Q3 2024 Review", period: "Jul–Sep 2024", date: "Oct 1", status: "available" as const },
  { name: "Tax Summary 2024", period: "Calendar Year", date: "Feb 3", status: "available" as const },
  { name: "Q2 2024 Review", period: "Apr–Jun 2024", date: "Jul 1", status: "available" as const },
  { name: "Q2 2025 Review", period: "Apr–Jun 2025", date: "Expected Jun 30", status: "upcoming" as const },
];

const RECENT_ALERTS = [
  { Icon: IconFileText, text: "Your Q1 report is ready to download", time: "Yesterday" },
  { Icon: IconCalendar, text: "Portfolio review scheduled for June 3", time: "May 10" },
  { Icon: IconChartBar, text: "Market update: Fed rate decision impact", time: "May 8" },
];

export function AurumClientPortal() {
  const [view, setView] = useState<View>("overview");
  const [period, setPeriod] = useState<ChartPeriod>("YTD");
  const [downloading, setDownloading] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  function download(name: string) {
    setDownloading(name);
    window.setTimeout(() => {
      setDownloading(null);
      showToast(`Downloaded "${name}"`);
    }, 1500);
  }

  function bookMeeting() {
    showToast("Request sent to your advisor");
  }

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[560px] flex flex-col" style={{ background: SURFACE_DEEP }}>
      {/* Top bar */}
      <header
        className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b shrink-0"
        style={{ background: SURFACE, borderColor: BORDER_SOFT }}
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
          AURUM
        </span>
        <div className="hidden sm:block text-xs" style={{ color: GOLD_SOFT }}>
          Welcome back, Jonathan.
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{ color: GOLD_SOFT }}
            aria-label="Notifications"
          >
            <IconBell size={13} stroke={1.7} />
          </button>
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold"
            style={{
              background: BORDER,
              color: GOLD,
              border: `1px solid ${BORDER}`,
            }}
          >
            JA
          </span>
        </div>
      </header>

      {/* Tab navigation */}
      <nav
        className="flex gap-3 sm:gap-6 px-4 sm:px-6 border-b overflow-x-auto shrink-0"
        style={{ borderColor: BORDER_SOFT }}
      >
        {VIEW_TABS.map((t) => {
          const active = view === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setView(t.id)}
              className="py-3 text-[11px] font-medium whitespace-nowrap transition-colors"
              style={{
                color: active ? GOLD : GOLD_DEEP,
                borderBottom: active ? `2px solid ${GOLD}` : "2px solid transparent",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </nav>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <AnimatePresence mode="wait">
          {view === "overview" && (
            <m.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Hero value card */}
              <div
                className="rounded-3xl p-6 sm:p-8 text-center"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: GOLD_DEEP }}
                >
                  Total Portfolio Value
                </div>
                <div
                  className="font-black tracking-tight tabular-nums mt-2"
                  style={{
                    color: "#fff",
                    fontSize: "clamp(34px, 7vw, 56px)",
                    lineHeight: 1.05,
                  }}
                >
                  $2,467,320
                </div>
                <div className="text-[10px] mt-1" style={{ color: GOLD_DEEP }}>
                  as of May 14, 2025 · 09:42 AM EST
                </div>
                <div
                  className="mx-auto h-px my-4"
                  style={{ width: 80, background: "rgba(217,119,6,0.25)" }}
                />
                <div className="text-sm font-semibold" style={{ color: GOLD }}>
                  ↑ $54,280 this month (+2.25%)
                </div>
                <div className="text-[11px] mt-1" style={{ color: GOLD_DEEP }}>
                  Your portfolio is outperforming the market by 3.5%
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                <MetricCard label="YTD Return">
                  <div className="font-black tabular-nums" style={{ color: GOLD, fontSize: "clamp(26px, 4vw, 32px)" }}>
                    11.7%
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: GOLD_DEEP }}>
                    vs benchmark 8.2%
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: "#34D399" }}>
                    ↑ +3.5% above market
                  </div>
                </MetricCard>
                <MetricCard label="Asset Mix">
                  <Donut />
                </MetricCard>
                <MetricCard label="Next Review">
                  <div className="flex items-start gap-2 mt-1">
                    <IconCalendar size={20} style={{ color: GOLD }} />
                    <div>
                      <div className="text-white text-sm font-semibold">June 3, 2025</div>
                      <div className="text-[11px]" style={{ color: GOLD_DEEP }}>
                        With Marcus Osei
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={bookMeeting}
                    className="text-[10px] mt-2 cursor-pointer hover:underline"
                    style={{ color: GOLD }}
                  >
                    Book Meeting →
                  </button>
                </MetricCard>
              </div>

              {/* Chart */}
              <div
                className="mt-5 rounded-2xl p-4 sm:p-5"
                style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}
              >
                <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
                  <div className="text-white text-xs font-semibold">Portfolio Performance</div>
                  <div className="flex gap-1">
                    {PERIODS.map((p) => {
                      const active = p === period;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPeriod(p)}
                          className="rounded-md px-2.5 py-1 text-[10px] font-medium font-mono"
                          style={{
                            background: active ? "rgba(217,119,6,0.10)" : "transparent",
                            border: active ? `1px solid rgba(217,119,6,0.35)` : "1px solid transparent",
                            color: active ? GOLD : GOLD_DEEP,
                          }}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <PerformanceChart period={period} baseValue={2467320} height={148} />
              </div>

              {/* Alerts */}
              <div
                className="mt-5 rounded-2xl p-4 sm:p-5"
                style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}
              >
                <div
                  className="text-[10px] uppercase tracking-wider mb-3"
                  style={{ color: GOLD_DEEP }}
                >
                  From your advisor
                </div>
                <div>
                  {RECENT_ALERTS.map((a, i) => {
                    const Icon = a.Icon;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => showToast("Opening: " + a.text.slice(0, 24) + "…")}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/30 transition-colors"
                      >
                        <span
                          className="inline-flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
                          style={{
                            background: "rgba(217,119,6,0.10)",
                            border: `1px solid ${BORDER}`,
                            color: GOLD,
                          }}
                        >
                          <Icon size={13} stroke={1.7} />
                        </span>
                        <span className="flex-1 text-left text-[12px] text-white truncate">
                          {a.text}
                        </span>
                        <span className="text-[10px]" style={{ color: GOLD_DEEP }}>
                          {a.time}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </m.div>
          )}

          {view === "reports" && (
            <m.div key="reports" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="text-white text-sm font-semibold mb-4">Your Reports</div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}
              >
                <div
                  className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 px-4 py-3 text-[9px] uppercase tracking-wider border-b"
                  style={{ color: GOLD_DEEP, borderColor: BORDER_SOFT }}
                >
                  <span>Report</span>
                  <span>Period</span>
                  <span>Generated</span>
                  <span>Status</span>
                  <span>Action</span>
                </div>
                {REPORTS.map((r) => {
                  const isDownloading = downloading === r.name;
                  return (
                    <div
                      key={r.name}
                      className="sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 px-4 py-3 border-b last:border-b-0 items-center flex flex-wrap"
                      style={{ borderColor: SURFACE_DEEP }}
                    >
                      <div className="text-[12px] text-white font-medium sm:font-normal w-full sm:w-auto">{r.name}</div>
                      <div className="text-[11px]" style={{ color: GOLD_SOFT }}>
                        {r.period}
                      </div>
                      <div className="text-[11px]" style={{ color: GOLD_DEEP }}>
                        {r.date}
                      </div>
                      <div className="text-[10px]" style={{ color: r.status === "available" ? "#34D399" : GOLD_DEEP }}>
                        {r.status === "available" ? "✓ Available" : "⏳ Upcoming"}
                      </div>
                      <div>
                        {r.status === "available" ? (
                          <button
                            type="button"
                            onClick={() => download(r.name)}
                            disabled={isDownloading}
                            className="inline-flex items-center gap-1 text-[11px] disabled:opacity-50"
                            style={{ color: GOLD }}
                          >
                            {isDownloading ? (
                              <>
                                <IconLoader2 size={11} className="animate-spin" />
                                Downloading…
                              </>
                            ) : (
                              <>
                                <IconDownload size={11} />
                                Download
                              </>
                            )}
                          </button>
                        ) : (
                          <span style={{ color: GOLD_DEEP }}>—</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </m.div>
          )}

          {view === "meetings" && (
            <m.div key="meetings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center text-center py-12">
              <IconCalendar size={48} stroke={1} style={{ color: GOLD_DEEP }} />
              <div className="text-white text-sm font-semibold mt-4">Next: June 3 at 10:00 AM</div>
              <div className="text-[11px] mt-1" style={{ color: GOLD_DEEP }}>
                Quarterly Portfolio Review · Marcus Osei
              </div>
              <button
                type="button"
                onClick={bookMeeting}
                className="mt-5 rounded-xl px-5 py-2.5 text-xs font-bold"
                style={{ background: GOLD, color: "#000" }}
              >
                Request another meeting
              </button>
            </m.div>
          )}

          {view === "market" && (
            <m.div key="market" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-12">
              <IconChartBar size={48} stroke={1} style={{ color: GOLD_DEEP }} className="mx-auto" />
              <div className="text-white text-sm font-semibold mt-4">Market intelligence is on the next tab.</div>
              <div className="text-[11px] mt-1" style={{ color: GOLD_DEEP }}>
                Personalized briefings — every morning.
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 rounded-xl px-3.5 py-2 text-[11px] font-medium flex items-center gap-2 shadow-2xl z-10"
            style={{
              background: SURFACE,
              border: `1px solid rgba(52,211,153,0.4)`,
              color: "#34D399",
            }}
          >
            <IconCheck size={12} stroke={3} />
            {toast}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MetricCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-4 sm:p-5" style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}>
      <div className="text-[10px] uppercase tracking-wider mb-1.5" style={{ color: GOLD_DEEP }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function Donut() {
  // SVG donut: Growth 65% amber, Fixed 25% mid, Cash 10% deep
  const r = 28;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-3 mt-1">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} stroke={BORDER} strokeWidth="8" fill="none" />
        <circle
          cx="36"
          cy="36"
          r={r}
          stroke={GOLD}
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${c * 0.65} ${c}`}
          transform="rotate(-90 36 36)"
        />
        <circle
          cx="36"
          cy="36"
          r={r}
          stroke={GOLD_SOFT}
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${c * 0.25} ${c}`}
          strokeDashoffset={-c * 0.65}
          transform="rotate(-90 36 36)"
        />
      </svg>
      <div className="text-[11px] leading-relaxed" style={{ color: GOLD_SOFT }}>
        <div className="flex items-center gap-1.5">
          <span className="block w-2 h-2 rounded-sm" style={{ background: GOLD }} />
          <span style={{ color: GOLD }}>65%</span> Growth
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="block w-2 h-2 rounded-sm" style={{ background: GOLD_SOFT }} />
          <span className="text-white">25%</span> Fixed
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="block w-2 h-2 rounded-sm" style={{ background: BORDER }} />
          <span className="text-white">10%</span> Cash
        </div>
      </div>
    </div>
  );
}
