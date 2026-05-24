"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconBell,
  IconX,
  IconCheck,
  IconLoader2,
  IconClock,
  IconArrowUpRight,
} from "@tabler/icons-react";
import {
  GOLD,
  GOLD_SOFT,
  GOLD_DEEP,
  BORDER,
  BORDER_SOFT,
  SURFACE,
  SURFACE_DEEP,
  CLIENTS,
  findClient,
} from "./_shared";
import { PerformanceChart } from "./PerformanceChart";
import type { ChartPeriod } from "./_shared";

const PERIODS: ChartPeriod[] = ["1W", "1M", "3M", "YTD", "1Y", "ALL"];

const UPCOMING = [
  { client: "Anderson Q2 Review", date: "Jun 3" },
  { client: "Williams report due", date: "Jun 1" },
  { client: "Chen rebalancing review", date: "Jun 15" },
  { client: "Nakamura annual report", date: "Jun 30" },
];

type ReportStatus = "sent" | "generating" | "scheduled" | "done";

const INITIAL_REPORTS: { client: string; period: string; status: ReportStatus }[] = [
  { client: "Anderson", period: "Q1 2025", status: "sent" },
  { client: "Williams", period: "Q1 2025", status: "sent" },
  { client: "Park", period: "Q1 2025", status: "generating" },
  { client: "Chen", period: "Q1 2025", status: "scheduled" },
  { client: "Rodriguez", period: "Q1 2025", status: "scheduled" },
];

export function AurumDashboard() {
  const [selectedClient, setSelectedClient] = useState("anderson");
  const [period, setPeriod] = useState<ChartPeriod>("YTD");
  const [showAlerts, setShowAlerts] = useState(false);
  const [reports, setReports] = useState(INITIAL_REPORTS);

  const client = findClient(selectedClient);
  // Pull base value from "$X,XXX,XXX" string
  const baseValue = Number(client.rawValue.replace(/[^0-9.]/g, ""));

  function generateAllPending() {
    // Mark every "scheduled" as generating sequentially
    setReports((prev) =>
      prev.map((r) => (r.status === "scheduled" ? { ...r, status: "generating" } : r)),
    );
    // Then resolve them in sequence
    INITIAL_REPORTS.forEach((r, i) => {
      if (r.status === "scheduled" || r.status === "generating") {
        window.setTimeout(() => {
          setReports((prev) =>
            prev.map((row, idx) => (idx === i ? { ...row, status: "done" } : row)),
          );
        }, 1500 + i * 500);
      }
    });
  }

  return (
    <div className="relative flex h-full min-h-[420px] sm:min-h-[560px]">
      {/* ============ TOP BAR ============ */}
      <header
        className="absolute top-0 left-0 right-0 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b z-20"
        style={{ background: BORDER_SOFT, borderColor: BORDER }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: GOLD }}
          >
            AURUM
          </span>
          <span className="hidden sm:block h-4 w-px" style={{ background: BORDER }} />
          <span
            className="hidden sm:block text-[11px] truncate"
            style={{ color: GOLD_DEEP }}
          >
            Private Wealth Management
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-4 font-mono" style={{ color: GOLD_DEEP, fontSize: 10 }}>
          <span>NY 09:42</span>
          <span>·</span>
          <span>LON 14:42</span>
          <span>·</span>
          <span>HK 22:42</span>
          <span>·</span>
          <span>TKY 22:42</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowAlerts((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium"
            style={{
              background: "rgba(217,119,6,0.10)",
              color: GOLD,
              border: `1px solid ${BORDER}`,
            }}
          >
            <IconBell size={11} stroke={1.8} />
            <span className="hidden sm:inline">2 AI alerts</span>
            <span className="sm:hidden">2</span>
          </button>
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold"
            style={{
              background: BORDER,
              color: GOLD_SOFT,
              border: `1px solid ${BORDER}`,
            }}
          >
            MO
          </span>
        </div>
      </header>

      {/* ============ ALERT PANEL ============ */}
      <AnimatePresence>
        {showAlerts && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-3 sm:right-4 z-30 rounded-2xl p-4 w-72"
            style={{
              background: BORDER_SOFT,
              border: `1px solid ${BORDER}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-white text-xs font-semibold tracking-wide">
                AI Alerts
              </div>
              <button
                type="button"
                onClick={() => setShowAlerts(false)}
                style={{ color: GOLD_DEEP }}
                aria-label="Close"
              >
                <IconX size={14} />
              </button>
            </div>
            {[
              { text: "Anderson portfolio: tech allocation reached 15% limit", time: "12 min" },
              { text: "Williams: quarterly review due in 5 days", time: "1 hr" },
            ].map((a, i) => (
              <div
                key={i}
                className="rounded-xl p-3 mb-2 last:mb-0"
                style={{ background: SURFACE_DEEP, border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 shrink-0 block w-1.5 h-1.5 rounded-full"
                    style={{ background: GOLD, boxShadow: `0 0 6px ${GOLD}` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-[#dec089] text-[11px] leading-snug">
                      {a.text}
                    </div>
                    <div className="text-[10px] mt-1" style={{ color: GOLD_DEEP }}>
                      {a.time} ago
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="text-[10px] cursor-pointer mt-2"
              style={{ color: GOLD }}
            >
              View all alerts →
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ============ SIDEBAR (desktop) ============ */}
      <aside
        className="hidden md:flex flex-col w-56 pt-16 pb-4 shrink-0 border-r overflow-y-auto"
        style={{ background: SURFACE, borderColor: BORDER_SOFT }}
      >
        <div className="px-4 mb-3 mt-2">
          <div
            className="text-[10px] uppercase tracking-[0.18em] font-medium"
            style={{ color: GOLD_DEEP }}
          >
            My Clients
          </div>
        </div>
        <div className="flex-1">
          {CLIENTS.map((c) => {
            const active = selectedClient === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedClient(c.id)}
                className="w-full text-left px-4 py-2.5 transition-colors"
                style={{
                  background: active ? BORDER_SOFT : "transparent",
                  borderLeft: active ? `2px solid ${GOLD}` : "2px solid transparent",
                }}
              >
                <div className="text-white text-xs font-medium truncate">
                  {c.name.split(" ").slice(0, 2).join(" ")}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px]" style={{ color: GOLD }}>
                    {c.value}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{ color: c.changePositive ? "#34D399" : "#F87171" }}
                  >
                    {c.change}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="border-t pt-4 mt-4 px-4" style={{ borderColor: BORDER_SOFT }}>
          <div className="text-[10px]" style={{ color: GOLD_DEEP }}>
            Total AUM
          </div>
          <div className="text-white text-lg font-black tracking-tight mt-0.5">
            $38.9M
          </div>
          <div className="text-xs mt-0.5" style={{ color: GOLD }}>
            ↑ 2.34% this week
          </div>
        </div>
      </aside>

      {/* ============ MAIN ============ */}
      <main
        className="flex-1 pt-16 pb-4 overflow-y-auto"
        style={{ background: SURFACE_DEEP }}
      >
        <div className="px-4 sm:px-6 pt-4">
          {/* Mobile client selector */}
          <div className="md:hidden mb-4">
            <label
              className="text-[10px] uppercase tracking-wider block mb-1.5"
              style={{ color: GOLD_DEEP }}
            >
              Client
            </label>
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="w-full rounded-xl text-white text-xs px-3 py-2.5 outline-none"
              style={{
                background: SURFACE,
                border: `1px solid ${BORDER}`,
              }}
            >
              {CLIENTS.map((c) => (
                <option key={c.id} value={c.id} style={{ background: SURFACE }}>
                  {c.name} — {c.value}
                </option>
              ))}
            </select>
          </div>

          {/* Header */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-black tracking-tight">
              {client.name}
            </h3>
            <div className="text-xs mt-0.5" style={{ color: GOLD_DEEP }}>
              Private Client · Account {client.account}
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-4">
              <StatCell label="Portfolio Value" value={client.rawValue} color={GOLD} />
              <StatCell label="YTD Return" value={client.ytdReturn} color="#34D399" />
              <StatCell label="vs Benchmark" value={client.vsBenchmark} color={client.vsBenchmark.startsWith("+") ? "#34D399" : "#F87171"} />
            </div>
          </div>

          {/* Chart */}
          <div className="mt-6">
            <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
              <div className="text-white text-xs font-semibold">
                Portfolio Performance
              </div>
              <div className="flex gap-1 overflow-x-auto -mx-1 px-1">
                {PERIODS.map((p) => {
                  const active = p === period;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeriod(p)}
                      className="rounded-md px-2.5 py-1 text-[10px] font-medium font-mono whitespace-nowrap transition-colors"
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

            <div
              className="rounded-2xl p-3 sm:p-4"
              style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}
            >
              <PerformanceChart period={period} baseValue={baseValue} height={148} />
            </div>

            {/* Benchmark comparison bars */}
            <div className="mt-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] w-16 shrink-0" style={{ color: GOLD_DEEP }}>
                  AURUM
                </span>
                <div className="flex-1 h-1 rounded-full" style={{ background: BORDER }}>
                  <m.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: GOLD }}
                  />
                </div>
                <span className="text-[10px] tabular-nums w-12 text-right" style={{ color: GOLD }}>
                  +{client.ytdReturn}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] w-16 shrink-0" style={{ color: GOLD_DEEP }}>
                  S&amp;P 500
                </span>
                <div className="flex-1 h-1 rounded-full" style={{ background: BORDER }}>
                  <m.div
                    initial={{ width: 0 }}
                    animate={{ width: "62%" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: GOLD_DEEP }}
                  />
                </div>
                <span className="text-[10px] tabular-nums w-12 text-right" style={{ color: GOLD_SOFT }}>
                  +8.2%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              className="rounded-2xl p-4"
              style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <IconClock size={12} style={{ color: GOLD }} />
                <span className="text-white text-xs font-semibold">Upcoming actions</span>
              </div>
              {UPCOMING.map((u, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-2 py-2 border-b last:border-b-0"
                  style={{ borderColor: SURFACE_DEEP }}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="block w-1 h-1 rounded-full shrink-0"
                      style={{ background: GOLD }}
                    />
                    <span className="text-[11px] truncate" style={{ color: GOLD_SOFT }}>
                      {u.client}
                    </span>
                  </div>
                  <span className="text-[10px] shrink-0" style={{ color: GOLD_DEEP }}>
                    {u.date}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-4"
              style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}
            >
              <div className="text-white text-xs font-semibold mb-3">Reports status</div>
              <div
                className="grid grid-cols-[1fr_1fr_auto] gap-x-2 text-[9px] uppercase tracking-wider pb-2 border-b"
                style={{ color: GOLD_DEEP, borderColor: BORDER_SOFT }}
              >
                <span>Client</span>
                <span>Report</span>
                <span>Status</span>
              </div>
              <div className="mt-1.5">
                {reports.map((r) => (
                  <div
                    key={r.client}
                    className="grid grid-cols-[1fr_1fr_auto] gap-x-2 items-center py-1.5"
                  >
                    <span className="text-[11px] text-white">{r.client}</span>
                    <span className="text-[10px]" style={{ color: GOLD_SOFT }}>
                      {r.period}
                    </span>
                    <ReportStatusPill status={r.status} />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={generateAllPending}
                className="mt-3 text-[10px] cursor-pointer hover:underline"
                style={{ color: GOLD }}
              >
                Generate all pending →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCell({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider" style={{ color: GOLD_DEEP }}>
        {label}
      </div>
      <div
        className="font-black tracking-tight tabular-nums mt-0.5"
        style={{ color, fontSize: "clamp(16px, 3vw, 22px)" }}
      >
        {value}
      </div>
    </div>
  );
}

function ReportStatusPill({ status }: { status: ReportStatus }) {
  if (status === "sent") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium" style={{ color: "#34D399" }}>
        <IconCheck size={10} stroke={3} />
        Sent
      </span>
    );
  }
  if (status === "done") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium" style={{ color: "#34D399" }}>
        <IconCheck size={10} stroke={3} />
        Generated
      </span>
    );
  }
  if (status === "generating") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium" style={{ color: GOLD }}>
        <IconLoader2 size={10} className="animate-spin" />
        Generating
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[10px]" style={{ color: GOLD_DEEP }}>
      <IconClock size={10} />
      Scheduled
    </span>
  );
}
