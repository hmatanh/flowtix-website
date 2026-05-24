"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconLayoutDashboard,
  IconBuilding,
  IconUsers,
  IconCpu,
  IconChartLine,
  IconRobot,
  IconAdjustmentsHorizontal,
  IconArrowUpRight,
  IconCheck,
  IconLoader2,
} from "@tabler/icons-react";

const BLUE = "#0EA5E9";

type NavId = "overview" | "properties" | "leads" | "ai" | "automations" | "analytics";

const NAV: { id: NavId; label: string; Icon: typeof IconLayoutDashboard }[] = [
  { id: "overview", label: "Overview", Icon: IconLayoutDashboard },
  { id: "properties", label: "Properties", Icon: IconBuilding },
  { id: "leads", label: "Leads", Icon: IconUsers },
  { id: "ai", label: "AI Matching", Icon: IconCpu },
  { id: "automations", label: "Automations", Icon: IconAdjustmentsHorizontal },
  { id: "analytics", label: "Analytics", Icon: IconChartLine },
];

const STATS = [
  { label: "New Leads", value: "128", delta: "↑ 24% this week" },
  { label: "AI Matches", value: "23", delta: "↑ 9 overnight" },
  { label: "Viewings", value: "6", delta: "2 confirmed" },
  { label: "Pipeline", value: "$4.2M", delta: "↑ $340K" },
];

type Status = "done" | "pending" | "scheduled";
const ACTIONS: { status: Status; text: string; time: string }[] = [
  { status: "done", text: "Follow-up sent to Marcus T.", time: "2 min ago" },
  { status: "done", text: "Rachel K. matched to 3 properties", time: "15 min ago" },
  { status: "pending", text: "Viewing reminder scheduled — 14:00", time: "pending" },
  { status: "scheduled", text: "Weekly report being generated", time: "09:45" },
  { status: "done", text: "New lead auto-responded", time: "1 hr ago" },
];

const STATUS_COLORS: Record<Status, string> = {
  done: "#10B981",
  pending: BLUE,
  scheduled: "#F59E0B",
};

export function TourDashboard() {
  const [activeNav, setActiveNav] = useState<NavId>("overview");
  const [toast, setToast] = useState<string | null>(null);
  const [matchInput, setMatchInput] = useState("");
  const [matchState, setMatchState] = useState<"idle" | "loading" | "done">("idle");

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  function runMatch() {
    setMatchState("loading");
    window.setTimeout(() => setMatchState("done"), 1500);
  }

  return (
    <div className="flex h-full min-h-[420px] sm:min-h-[520px] text-white relative">
      {/* Sidebar — desktop */}
      <aside className="hidden md:flex flex-col w-48 bg-[#080F1C] border-r border-[#0D2A45] py-5 px-3 shrink-0">
        <div className="flex items-center gap-2 px-2 mb-6">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill={BLUE} />
          </svg>
          <span className="text-sm font-bold" style={{ color: BLUE }}>
            kova
          </span>
        </div>
        <nav className="flex-1 space-y-0.5">
          {NAV.map(({ id, label, Icon }) => {
            const active = activeNav === id;
            return (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] transition-colors"
                style={{
                  background: active ? "rgba(14,165,233,0.10)" : "transparent",
                  color: active ? "#fff" : "#2a5a7a",
                  borderLeft: active ? `2px solid ${BLUE}` : "2px solid transparent",
                }}
              >
                <Icon size={14} stroke={1.7} />
                {label}
              </button>
            );
          })}
        </nav>
        <div className="mt-4 bg-[#0C1A2E] border border-[#0D2A45] rounded-xl p-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
            <span className="text-white text-xs font-medium">Sarah Moran</span>
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "#2a5a7a" }}>
            Senior Agent
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-[#0A1628] p-3 sm:p-5 overflow-y-auto relative">
        {activeNav === "overview" ? (
          <>
            {/* Heading */}
            <div>
              <div className="text-white text-base sm:text-lg font-bold">
                Good morning, Sarah <span aria-hidden="true">👋</span>
              </div>
              <div className="text-[#4a7a9b] text-[11px] sm:text-xs mt-1">
                Wednesday, May 14 · 9 matches found overnight
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mt-4">
              {STATS.map((s, i) => (
                <m.div
                  key={s.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0D1F38] border border-[#0D2A45] rounded-xl p-3 sm:p-4"
                >
                  <div className="text-[10px] uppercase tracking-wider text-[#2a5a7a]">
                    {s.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    {s.value}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] mt-1.5" style={{ color: BLUE }}>
                    <IconArrowUpRight size={10} stroke={2.5} />
                    {s.delta}
                  </div>
                </m.div>
              ))}
            </div>

            {/* Two-column */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-4">
              {/* Left: AI Actions */}
              <div className="lg:col-span-3 bg-[#0D1F38] border border-[#0D2A45] rounded-xl p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-3">
                  <IconRobot size={14} style={{ color: BLUE }} />
                  <span className="text-white text-xs font-semibold">
                    Today's AI Automations
                  </span>
                </div>
                <div>
                  {ACTIONS.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 border-b border-[#080F1C] last:border-0"
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{
                          background: STATUS_COLORS[a.status],
                          boxShadow: `0 0 6px ${STATUS_COLORS[a.status]}88`,
                        }}
                      />
                      <span className="text-[#4a7a9b] text-[11px] sm:text-xs flex-1 truncate">
                        {a.text}
                      </span>
                      <span className="text-[#1a3a52] text-[10px] shrink-0">{a.time}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => showToast("✓ 3 automations triggered")}
                  className="text-[10px] mt-3 cursor-pointer hover:underline"
                  style={{ color: BLUE }}
                >
                  Run automation now →
                </button>
              </div>

              {/* Right: Quick match */}
              <div className="lg:col-span-2 bg-[#0D1F38] border border-[#0D2A45] rounded-xl p-3 sm:p-4">
                <div className="text-white text-xs font-semibold mb-3">AI Match</div>
                <input
                  value={matchInput}
                  onChange={(e) => setMatchInput(e.target.value)}
                  placeholder="Budget, area, type..."
                  className="bg-[#080F1C] border border-[#0D2A45] rounded-lg px-3 py-2 w-full text-white text-xs outline-none focus:border-[#0EA5E9]/40"
                />
                <button
                  type="button"
                  onClick={runMatch}
                  disabled={matchState === "loading"}
                  className="mt-2 w-full text-white text-xs font-semibold py-2 rounded-lg disabled:opacity-60"
                  style={{ background: BLUE }}
                >
                  {matchState === "loading" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <IconLoader2 size={12} className="animate-spin" />
                      Analyzing 847 listings...
                    </span>
                  ) : matchState === "done" ? (
                    "Run again"
                  ) : (
                    "Find Matches"
                  )}
                </button>
                {matchState === "done" && (
                  <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3"
                  >
                    <div className="text-emerald-400 text-[11px] font-medium mb-2">
                      ✓ 23 matches found
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { name: "Elm Court 4B", score: 94 },
                        { name: "Riverside Loft 12", score: 87 },
                        { name: "Park Manor 308", score: 82 },
                      ].map((p) => (
                        <div
                          key={p.name}
                          className="flex items-center justify-between bg-[#0A1628] border border-[#0D2A45] rounded-lg px-2.5 py-1.5"
                        >
                          <span className="text-[11px] text-white">{p.name}</span>
                          <span className="text-[10px] font-bold" style={{ color: BLUE }}>
                            {p.score}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </m.div>
                )}
              </div>
            </div>
          </>
        ) : (
          <PlaceholderSection navId={activeNav} />
        )}

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-[#0C1A2E] border rounded-xl px-3.5 py-2 text-emerald-400 text-[11px] font-medium flex items-center gap-2 shadow-2xl"
              style={{ borderColor: "rgba(16,185,129,0.4)" }}
            >
              <IconCheck size={12} stroke={3} />
              {toast.replace("✓ ", "")}
            </m.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden absolute bottom-0 left-0 right-0 bg-[#080F1C] border-t border-[#0D2A45] flex items-center justify-around py-2 z-10">
        {NAV.slice(0, 5).map(({ id, Icon, label }) => {
          const active = activeNav === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveNav(id)}
              aria-label={label}
              className="flex flex-col items-center justify-center p-2 rounded-lg transition-colors"
              style={{
                background: active ? "rgba(14,165,233,0.12)" : "transparent",
                color: active ? BLUE : "#2a5a7a",
              }}
            >
              <Icon size={16} stroke={1.8} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}

function PlaceholderSection({ navId }: { navId: NavId }) {
  const item = NAV.find((n) => n.id === navId);
  if (!item) return null;
  const Icon = item.Icon;
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <Icon size={56} stroke={1} style={{ color: "#1a3a52" }} />
      <div className="text-[#2a5a7a] text-sm mt-4">
        {item.label} coming in the full platform.
      </div>
    </div>
  );
}
