"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconRobot,
  IconChevronDown,
  IconChevronRight,
  IconCheck,
  IconLoader2,
  IconChartBar,
  IconCalendar,
  IconRefresh,
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

const MARKET_ROWS = [
  { name: "S&P 500", value: "5,847", change: "↑ 0.82%", up: true },
  { name: "NASDAQ", value: "18,234", change: "↑ 1.14%", up: true },
  { name: "DOW", value: "42,108", change: "↑ 0.61%", up: true },
  { name: "10Y UST", value: "4.23%", change: "↓ 0.04%", up: false },
  { name: "Gold", value: "$2,847", change: "↑ 0.34%", up: true },
];

type Note = {
  id: string;
  title: string;
  body: string;
  color: string;
};

const NOTES: Note[] = [
  {
    id: "rebalance",
    title: "Rebalancing opportunity",
    body: "Your tech allocation has grown to 14.8%, approaching the 15% target threshold. Consider rebalancing if it exceeds 15% this week to maintain your target risk profile.",
    color: GOLD,
  },
  {
    id: "dividend",
    title: "Q2 dividend income",
    body: "Projected $14,820 in dividend distributions across your holdings this quarter — a 4.2% increase over Q1, driven primarily by the financials sector position.",
    color: "rgba(245,158,11,0.55)",
  },
  {
    id: "review",
    title: "Annual review reminder",
    body: "Your annual review falls due in 38 days. We recommend booking now while June and July calendar slots remain open.",
    color: "rgba(96,165,250,0.45)",
  },
];

export function AurumMarketIntel() {
  const [activeClient, setActiveClient] = useState("anderson");
  const [expanded, setExpanded] = useState<string | null>("rebalance");
  const [analysisState, setAnalysisState] = useState<"idle" | "loading" | "done">("idle");

  const client = findClient(activeClient);

  function runFullAnalysis() {
    setAnalysisState("loading");
    window.setTimeout(() => setAnalysisState("done"), 1800);
    window.setTimeout(() => setAnalysisState("idle"), 5000);
  }

  return (
    <div className="h-full min-h-[420px] sm:min-h-[560px] flex flex-col" style={{ background: SURFACE_DEEP }}>
      {/* Header */}
      <header
        className="px-4 sm:px-6 pt-4 pb-3 border-b flex items-start justify-between gap-3 flex-wrap shrink-0"
        style={{ borderColor: BORDER_SOFT, background: SURFACE_DEEP }}
      >
        <div>
          <div className="text-white text-sm font-semibold">Market Intelligence Brief</div>
          <div className="text-[11px] mt-1" style={{ color: GOLD_DEEP }}>
            AI-Generated · Personalized to your portfolio · May 14, 2025
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px]" style={{ color: GOLD_DEEP }}>Briefing for</span>
          <div className="relative">
            <select
              value={activeClient}
              onChange={(e) => setActiveClient(e.target.value)}
              className="appearance-none rounded-lg pr-7 pl-3 py-1.5 text-[11px] outline-none cursor-pointer"
              style={{
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                color: GOLD_SOFT,
              }}
            >
              {CLIENTS.map((c) => (
                <option key={c.id} value={c.id} style={{ background: SURFACE }}>
                  {c.name}
                </option>
              ))}
            </select>
            <IconChevronDown
              size={11}
              className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: GOLD }}
            />
          </div>
        </div>
      </header>

      {/* Brief content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Column 1 */}
          <Panel label="Market Overview">
            {MARKET_ROWS.map((r, i) => (
              <div
                key={r.name}
                className={`flex items-center justify-between gap-2 py-2 ${
                  i < MARKET_ROWS.length - 1 ? "border-b" : ""
                }`}
                style={{ borderColor: SURFACE_DEEP }}
              >
                <span className="text-[11px]" style={{ color: GOLD_DEEP }}>
                  {r.name}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[11px] text-white tabular-nums">{r.value}</span>
                  <span
                    className="text-[10px] tabular-nums"
                    style={{ color: r.up ? "#34D399" : "#F87171" }}
                  >
                    {r.change}
                  </span>
                </span>
              </div>
            ))}

            <div
              className="mt-4 rounded-xl p-3"
              style={{ background: SURFACE_DEEP, border: `1px solid ${BORDER_SOFT}` }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="block w-1.5 h-1.5 rounded-full"
                  style={{ background: GOLD, boxShadow: `0 0 6px ${GOLD}` }}
                />
                <span className="text-[11px] text-white">Key Event Today</span>
              </div>
              <div className="text-[11px] mt-1" style={{ color: GOLD_SOFT }}>
                Fed Meeting Minutes — 14:00 EST
              </div>
              <div className="text-[10px] mt-1" style={{ color: GOLD_DEEP }}>
                Impact on your portfolio: monitor fixed income allocation
              </div>
            </div>
          </Panel>

          {/* Column 2 */}
          <Panel label="Portfolio Impact">
            <ImpactCard
              barColor={GOLD}
              title="Tech sector up 1.2% today"
              meta={`Your tech holdings: 14.8% of portfolio`}
              impact="+$3,642"
              impactColor="#34D399"
            />
            <ImpactCard
              barColor="rgba(96,165,250,0.6)"
              title="Treasury yields declined 4bp"
              meta="Your bond allocation: 25% of portfolio"
              impact="−$1,218"
              impactColor="#F87171"
            />

            <div
              className="mt-3 rounded-xl p-3"
              style={{ background: BORDER_SOFT, border: `1px solid ${BORDER}` }}
            >
              <div className="text-[10px] uppercase tracking-wider" style={{ color: GOLD_DEEP }}>
                Net today's impact
              </div>
              <div className="text-xl font-black tabular-nums mt-1" style={{ color: GOLD }}>
                +$2,424
              </div>
              <div className="text-[10px]" style={{ color: GOLD_DEEP }}>
                across {client.name.split(" ")[0]}'s portfolio today
              </div>
            </div>
          </Panel>

          {/* Column 3 */}
          <Panel label="AI Advisor Notes">
            <div className="flex items-center gap-2 mb-3">
              <IconRobot size={14} style={{ color: GOLD }} />
              <span className="text-[10px]" style={{ color: GOLD_SOFT }}>
                Personalized for {client.name}
              </span>
            </div>

            <div className="space-y-2">
              {NOTES.map((n) => {
                const isOpen = expanded === n.id;
                return (
                  <div
                    key={n.id}
                    className="pl-3 py-2 cursor-pointer transition-colors"
                    style={{ borderLeft: `2px solid ${n.color}` }}
                    onClick={() => setExpanded(isOpen ? null : n.id)}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] text-white font-semibold flex items-center gap-1.5">
                        <IconChevronRight
                          size={10}
                          stroke={2.4}
                          style={{
                            color: GOLD,
                            transform: isOpen ? "rotate(90deg)" : "none",
                            transition: "transform 0.2s",
                          }}
                        />
                        {n.title}
                      </span>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <m.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-[11px] leading-relaxed mt-1.5 pr-2"
                            style={{ color: GOLD_SOFT }}
                          >
                            {n.body}
                          </p>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={runFullAnalysis}
              disabled={analysisState === "loading"}
              className="text-[10px] cursor-pointer mt-4 inline-flex items-center gap-1.5 disabled:opacity-60"
              style={{ color: GOLD }}
            >
              {analysisState === "loading" ? (
                <>
                  <IconLoader2 size={10} className="animate-spin" />
                  Generating full analysis…
                </>
              ) : analysisState === "done" ? (
                <>
                  <IconCheck size={10} stroke={3} />
                  Full analysis added to Reports
                </>
              ) : (
                <>
                  <IconRefresh size={10} />
                  Generate full analysis →
                </>
              )}
            </button>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Panel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-4 sm:p-5"
      style={{ background: SURFACE, border: `1px solid ${BORDER_SOFT}` }}
    >
      <div className="text-[9px] tracking-widest uppercase mb-3" style={{ color: GOLD_DEEP }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function ImpactCard({
  barColor,
  title,
  meta,
  impact,
  impactColor,
}: {
  barColor: string;
  title: string;
  meta: string;
  impact: string;
  impactColor: string;
}) {
  return (
    <div
      className="relative rounded-xl p-3 mb-2 overflow-hidden"
      style={{ background: SURFACE_DEEP, border: `1px solid ${BORDER_SOFT}` }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: barColor }}
      />
      <div className="pl-2.5">
        <div className="text-[11px] text-white font-semibold">{title}</div>
        <div className="text-[10px] mt-1" style={{ color: GOLD_DEEP }}>
          {meta}
        </div>
        <div className="text-[10px] mt-0.5 tabular-nums" style={{ color: impactColor }}>
          Estimated impact: {impact} today
        </div>
      </div>
    </div>
  );
}
