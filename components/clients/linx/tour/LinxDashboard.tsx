"use client";

import { useState, useMemo } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconBolt,
  IconSearch,
  IconCheck,
  IconLoader2,
} from "@tabler/icons-react";
import {
  VIOLET,
  SHELL,
  SURFACE,
  SURFACE_CARD,
  BORDER,
  TEXT,
  TEXT_DIM,
  TEXT_FAINT,
  CLIENTS,
  findClient,
} from "./_shared";

const STATS = [
  { label: "Active Clients", value: "23", sub: "+3 this quarter" },
  { label: "Proposals Won", value: "5/7", sub: "71% win rate", accent: true },
  { label: "Reports Automated", value: "23/23", sub: "✓ All sent this month" },
  { label: "Hours Saved (MTD)", value: "87h", sub: "Proposals 43h · Reports 44h" },
];

const ACTIVITIES = [
  { text: "Proposal sent · Accepted", time: "2 weeks ago" },
  { text: "April report auto-generated & sent", time: "May 1" },
  { text: "Strategy call notes uploaded", time: "Apr 28" },
  { text: "Campaign assets delivered", time: "Apr 15" },
];

export function LinxDashboard() {
  const [selectedClient, setSelectedClient] = useState("brew");
  const [search, setSearch] = useState("");
  const [reportState, setReportState] = useState<"idle" | "loading" | "done">("idle");
  const [toast, setToast] = useState<string | null>(null);

  const client = findClient(selectedClient);

  const filteredClients = useMemo(() => {
    if (!search.trim()) return CLIENTS;
    const q = search.toLowerCase();
    return CLIENTS.filter((c) => c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q));
  }, [search]);

  function generateReport() {
    setReportState("loading");
    window.setTimeout(() => {
      setReportState("done");
      setToast(`Report generated & sent to ${client.name}`);
      window.setTimeout(() => {
        setReportState("idle");
        setToast(null);
      }, 2200);
    }, 1800);
  }

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[600px] flex flex-col" style={{ background: SHELL }}>
      {/* Top bar */}
      <header
        className="flex items-center justify-between px-5 py-3.5 border-b shrink-0"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <span className="text-white text-sm font-bold">LINX Studio</span>
        <span className="hidden sm:inline text-xs" style={{ color: TEXT }}>
          23 active clients · All systems operational
        </span>
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px]"
            style={{
              background: "rgba(139,92,246,0.10)",
              border: `1px solid rgba(139,92,246,0.25)`,
              color: VIOLET,
            }}
          >
            <IconBolt size={10} />
            4 automations
          </span>
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ background: SURFACE_CARD, color: VIOLET, border: `1px solid ${BORDER}` }}
          >
            PN
          </span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-5">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {STATS.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl p-3 sm:p-4"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div className="text-[10px] uppercase tracking-wider" style={{ color: TEXT_DIM }}>
                {s.label}
              </div>
              <div
                className="text-xl sm:text-2xl font-black tabular-nums mt-1"
                style={{ color: s.accent ? VIOLET : "#fff" }}
              >
                {s.value}
              </div>
              <div className="text-[10px] mt-0.5" style={{ color: TEXT }}>
                {s.sub}
              </div>
            </m.div>
          ))}
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Client list */}
          <div
            className="lg:col-span-2 rounded-xl overflow-hidden"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="px-4 py-3 border-b text-white text-xs font-semibold" style={{ borderColor: BORDER }}>
              Clients
            </div>
            <div className="p-2.5 border-b" style={{ borderColor: BORDER }}>
              <div className="relative">
                <IconSearch
                  size={12}
                  stroke={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: TEXT_FAINT }}
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search clients…"
                  className="w-full pl-8 pr-3 py-2 rounded-lg text-xs text-white outline-none"
                  style={{
                    background: SHELL,
                    border: `1px solid ${BORDER}`,
                  }}
                />
              </div>
            </div>
            <div className="lg:max-h-[280px] overflow-y-auto">
              {filteredClients.map((c) => {
                const active = selectedClient === c.id;
                const statusColor =
                  c.status === "active" ? "#34D399" : c.status === "review" ? "#F59E0B" : "#71717A";
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedClient(c.id)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors border-b last:border-b-0"
                    style={{
                      background: active ? SURFACE_CARD : "transparent",
                      borderColor: SHELL,
                      borderLeft: active ? `2px solid ${VIOLET}` : "2px solid transparent",
                    }}
                  >
                    <div className="min-w-0">
                      <div className="text-white text-xs font-medium truncate">{c.name}</div>
                      <div className="text-[10px]" style={{ color: TEXT_DIM }}>
                        {c.type}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] tabular-nums" style={{ color: VIOLET }}>
                        {c.rate}
                      </span>
                      <span
                        className="block w-1.5 h-1.5 rounded-full"
                        style={{ background: statusColor, boxShadow: c.status === "active" ? `0 0 4px ${statusColor}` : "none" }}
                      />
                    </div>
                  </button>
                );
              })}
              {filteredClients.length === 0 && (
                <div className="text-center text-[11px] py-6" style={{ color: TEXT_FAINT }}>
                  No clients match "{search}"
                </div>
              )}
            </div>
          </div>

          {/* Client detail */}
          <div
            className="lg:col-span-3 rounded-xl p-5"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="text-white text-lg font-black">{client.name}</h3>
              <span className="text-xs" style={{ color: TEXT }}>
                Active · {client.type}
              </span>
              <span className="ml-auto text-[10px]" style={{ color: TEXT_DIM }}>
                Since {client.since}
              </span>
            </div>

            <div className="flex gap-3 mt-4 pb-4 border-b flex-wrap" style={{ borderColor: BORDER }}>
              <DetailMetric value={`$${client.rateValue.toLocaleString()}`} suffix="/ month" color={VIOLET} />
              <DetailMetric value="3.2h" suffix="saved/week" />
              <DetailMetric value="94%" suffix="satisfaction" color="#34D399" />
              <DetailMetric value="May 31" suffix="report due" small />
            </div>

            <div className="mt-4">
              <div className="text-[9px] uppercase tracking-wider mb-3" style={{ color: TEXT_DIM }}>
                Active Automations
              </div>
              {[
                { name: "Monthly Report AI", status: "✓ Sent May 1", color: "#34D399" },
                { name: "Social Calendar Auto-scheduler", status: "Running", color: VIOLET },
                { name: "Performance Alert System", status: "No alerts this week", color: TEXT_DIM },
              ].map((a, i) => (
                <div
                  key={a.name}
                  className="flex items-center gap-3 py-2 border-b last:border-b-0"
                  style={{ borderColor: SHELL }}
                >
                  <m.span
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{ background: a.color }}
                    animate={i === 1 ? { opacity: [0.4, 1, 0.4] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs flex-1 truncate" style={{ color: TEXT }}>
                    {a.name}
                  </span>
                  <span className="text-[10px] shrink-0" style={{ color: a.color }}>
                    {a.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="text-[9px] uppercase tracking-wider mb-2" style={{ color: TEXT_DIM }}>
                Recent
              </div>
              {ACTIVITIES.map((a) => (
                <div key={a.text} className="flex items-center gap-2 py-1.5">
                  <span className="block w-1 h-1 rounded-full" style={{ background: VIOLET }} />
                  <span className="text-[10px] flex-1 truncate" style={{ color: TEXT_DIM }}>
                    {a.text}
                  </span>
                  <span className="text-[9px] shrink-0" style={{ color: TEXT_FAINT }}>
                    {a.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-2.5 mt-4 flex-wrap">
              <button
                type="button"
                onClick={generateReport}
                disabled={reportState === "loading"}
                className="text-xs px-4 py-2.5 rounded-xl text-white font-medium inline-flex items-center gap-2 disabled:opacity-70"
                style={{ background: VIOLET }}
              >
                {reportState === "loading" ? (
                  <>
                    <IconLoader2 size={12} className="animate-spin" />
                    Generating…
                  </>
                ) : reportState === "done" ? (
                  <>
                    <IconCheck size={12} stroke={3} />
                    Sent
                  </>
                ) : (
                  "Generate Report"
                )}
              </button>
              <button
                type="button"
                className="text-xs px-4 py-2.5 rounded-xl"
                style={{ border: `1px solid ${BORDER}`, color: TEXT }}
              >
                New Proposal
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 rounded-xl px-3.5 py-2 text-[11px] font-medium flex items-center gap-2 shadow-2xl z-10"
            style={{ background: SURFACE_CARD, border: `1px solid rgba(52,211,153,0.4)`, color: "#34D399" }}
          >
            <IconCheck size={12} stroke={3} />
            {toast}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailMetric({
  value,
  suffix,
  color,
  small,
}: {
  value: string;
  suffix: string;
  color?: string;
  small?: boolean;
}) {
  return (
    <div className="text-center min-w-[88px]">
      <div
        className="font-black tabular-nums"
        style={{
          color: color ?? "#fff",
          fontSize: small ? "clamp(14px, 2vw, 16px)" : "clamp(18px, 2.4vw, 22px)",
        }}
      >
        {value}
      </div>
      <div className="text-[9px] mt-0.5" style={{ color: TEXT_DIM }}>
        {suffix}
      </div>
    </div>
  );
}
