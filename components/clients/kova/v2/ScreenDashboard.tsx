"use client";

/**
 * Kova V2 - Dashboard
 *
 * High-density real-estate operations dashboard. Reads as an actual product
 * screenshot, not an SVG sketch:
 *   - Sidebar with 8 nav items + agent list + collapse control
 *   - Top bar with global search, listing filters, notification badge, user
 *   - Three-column main grid: hot-match feed / pipeline kanban (4 stages) /
 *     AI suggestions + activity feed
 *   - Realistic names, addresses, prices, percentages, timestamps
 *   - Tiny inline charts and animated status dots
 *
 * All visual; no real data; no external icons beyond Tabler.
 */

import { m } from "framer-motion";
import {
  IconLayoutDashboard,
  IconHome,
  IconUsers,
  IconBolt,
  IconChartLine,
  IconCalendarStats,
  IconMessage,
  IconSettings,
  IconSearch,
  IconBell,
  IconCommand,
  IconChevronDown,
  IconPlus,
  IconArrowUpRight,
  IconSparkles,
  IconCircle,
  IconCheck,
} from "@tabler/icons-react";

const SIDEBAR_NAV = [
  { icon: IconLayoutDashboard, label: "Dashboard", active: true, badge: null },
  { icon: IconHome, label: "Listings", badge: "184" },
  { icon: IconUsers, label: "Clients", badge: "42" },
  { icon: IconBolt, label: "AI Matching", badge: "6", hot: true },
  { icon: IconMessage, label: "Inbox", badge: "12" },
  { icon: IconChartLine, label: "Pipeline" },
  { icon: IconCalendarStats, label: "Showings" },
  { icon: IconSettings, label: "Settings" },
];

const AGENTS = [
  { name: "Sarah Moran", initials: "SM", color: "#0EA5E9", count: 14 },
  { name: "David Kim", initials: "DK", color: "#10B981", count: 11 },
  { name: "Maya Cohen", initials: "MC", color: "#8B5CF6", count: 9 },
  { name: "Liam Park", initials: "LP", color: "#F97316", count: 7 },
];

const PIPELINE = [
  {
    label: "Inquiry",
    count: 14,
    color: "#94A3B8",
    cards: [
      { name: "Ariel Stein", addr: "412 W 22nd · Chelsea", price: "$2.4M", since: "12m" },
      { name: "Naomi Bauer", addr: "88 Greenwich · Tribeca", price: "$3.1M", since: "1h" },
      { name: "Ravi Patel", addr: "1140 Park Ave · UES", price: "$4.8M", since: "3h" },
    ],
  },
  {
    label: "Matched",
    count: 6,
    color: "#0EA5E9",
    hot: true,
    cards: [
      { name: "Sarah Mitchell", addr: "201 W 21st · Chelsea", price: "$1.85M", match: 94, since: "8m" },
      { name: "Jonathan Cole", addr: "303 E 75th · UES", price: "$2.4M", match: 91, since: "22m" },
      { name: "Emma Reyes", addr: "55 Charles · West Village", price: "$3.2M", match: 88, since: "1h" },
    ],
  },
  {
    label: "Showing",
    count: 5,
    color: "#F59E0B",
    cards: [
      { name: "Tariq Hassan", addr: "120 E 87th · UES", price: "$2.95M", today: true },
      { name: "Priya N.", addr: "10 Madison Sq W · Flatiron", price: "$4.4M" },
    ],
  },
  {
    label: "Offer",
    count: 3,
    color: "#10B981",
    cards: [
      { name: "Marcus Liu", addr: "5 Tudor City · Midtown E", price: "$1.6M", status: "Reviewing" },
      { name: "Elena V.", addr: "60 Riverside · UWS", price: "$3.85M", status: "Counter" },
    ],
  },
];

const AI_SUGGESTIONS = [
  {
    title: "Sarah Mitchell · 94% match",
    body: "201 W 21st (Chelsea) hit the MLS at 9:42am. Draft personal email queued - needs your tone-check.",
    action: "Review draft",
  },
  {
    title: "Re-engage Naomi Bauer",
    body: "Browsed 3 Tribeca listings overnight. Hasn't replied since Aug 12. Suggested follow-up ready.",
    action: "Send follow-up",
  },
  {
    title: "Price drop alert",
    body: "1140 Park Ave reduced 4.2%. 7 prospects in your pipeline are within budget.",
    action: "Notify matched buyers",
  },
];

const ACTIVITY = [
  { who: "Sarah Mitchell", what: "viewed", target: "201 W 21st", when: "2m ago", tone: "neutral" },
  { who: "AI", what: "drafted reply to", target: "Jonathan Cole", when: "8m ago", tone: "ai" },
  { who: "Maya Cohen", what: "scheduled showing", target: "55 Charles", when: "14m ago", tone: "neutral" },
  { who: "Emma Reyes", what: "saved", target: "55 Charles", when: "22m ago", tone: "neutral" },
  { who: "AI", what: "scored 4 leads against", target: "new listing", when: "1h ago", tone: "ai" },
  { who: "David Kim", what: "moved to Offer", target: "Marcus Liu", when: "2h ago", tone: "win" },
];

export function ScreenDashboard() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #050B14 0%, #02060B 100%)",
        color: "#cfe8fd",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "232px 1fr" }}>
        {/* ============ SIDEBAR ============ */}
        <aside
          className="flex flex-col border-r"
          style={{
            background: "#020608",
            borderColor: "#0E2236",
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3.5 border-b" style={{ borderColor: "#0E2236" }}>
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
              style={{
                background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
              }}
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="white" strokeWidth="1.5" />
              </svg>
            </span>
            <div className="flex-1">
              <div className="text-white text-[13px] font-semibold tracking-tight">Kova</div>
              <div className="text-[#3E6080] text-[10px]">Moran Realty Group</div>
            </div>
            <IconChevronDown size={12} stroke={1.5} className="text-[#3E6080]" />
          </div>

          <nav className="flex-1 px-2.5 py-3 space-y-0.5 overflow-hidden">
            {SIDEBAR_NAV.map((it) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.label}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[12.5px] ${
                    it.active ? "text-white" : "text-[#7CA0C2]"
                  }`}
                  style={
                    it.active
                      ? {
                          background:
                            "linear-gradient(90deg, rgba(14,165,233,0.10), rgba(14,165,233,0))",
                          boxShadow: "inset 2px 0 0 #0EA5E9",
                        }
                      : undefined
                  }
                >
                  <Icon
                    size={14}
                    stroke={1.5}
                    style={{ color: it.active ? "#0EA5E9" : "#5681AB" }}
                  />
                  <span className="flex-1">{it.label}</span>
                  {it.badge && (
                    <span
                      className="text-[10px] tabular-nums px-1.5 py-0.5 rounded"
                      style={
                        it.hot
                          ? { background: "#0EA5E9", color: "#02060B" }
                          : { background: "#0B1A2A", color: "#7CA0C2" }
                      }
                    >
                      {it.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Agent presence */}
          <div className="px-3 pb-3 pt-2 border-t" style={{ borderColor: "#0E2236" }}>
            <div className="text-[#3E6080] text-[9.5px] tracking-[0.15em] uppercase mb-2.5">
              Agents online
            </div>
            <div className="space-y-1.5">
              {AGENTS.map((a) => (
                <div key={a.name} className="flex items-center gap-2">
                  <span
                    className="relative inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${a.color} 0%, ${a.color}aa 100%)`,
                    }}
                  >
                    {a.initials}
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full"
                      style={{ background: "#10B981", border: "1.5px solid #020608" }}
                    />
                  </span>
                  <span className="flex-1 text-[#9DB5CC] text-[11.5px] truncate">{a.name}</span>
                  <span className="text-[#3E6080] text-[10px] tabular-nums">{a.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-3 py-3 border-t flex items-center gap-2.5" style={{ borderColor: "#0E2236" }}>
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-semibold text-white"
              style={{
                background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
              }}
            >
              SM
            </span>
            <div className="flex-1">
              <div className="text-white text-[11.5px] font-medium">Sarah Moran</div>
              <div className="text-[#3E6080] text-[9.5px]">Founder · Admin</div>
            </div>
            <IconSettings size={12} stroke={1.5} className="text-[#3E6080]" />
          </div>
        </aside>

        {/* ============ MAIN ============ */}
        <main className="flex flex-col overflow-hidden">
          {/* Topbar */}
          <header
            className="flex items-center gap-3 px-5 py-2.5 border-b"
            style={{ borderColor: "#0E2236", background: "#040A12" }}
          >
            <div
              className="flex items-center gap-2 rounded-md px-3 py-1.5"
              style={{
                background: "#02060B",
                border: "1px solid #0E2236",
                minWidth: 340,
              }}
            >
              <IconSearch size={12} stroke={1.6} className="text-[#3E6080]" />
              <span className="text-[#3E6080] text-[11.5px] flex-1">
                Search clients, listings, addresses…
              </span>
              <span
                className="inline-flex items-center gap-1 text-[9.5px] text-[#3E6080] px-1.5 py-0.5 rounded"
                style={{ background: "#0A1622", border: "1px solid #0E2236" }}
              >
                <IconCommand size={9} stroke={1.6} /> K
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {["All", "Today", "Hot matches", "Showing", "Offer"].map((t, i) => (
                <span
                  key={t}
                  className="text-[10.5px] px-2.5 py-1 rounded-md"
                  style={
                    i === 2
                      ? {
                          background: "rgba(14,165,233,0.12)",
                          color: "#7DD3FC",
                          border: "1px solid rgba(14,165,233,0.30)",
                        }
                      : {
                          color: "#6B8AA8",
                          border: "1px solid transparent",
                        }
                  }
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-md" style={{ background: "#02060B", border: "1px solid #0E2236" }}>
                <IconBell size={12} stroke={1.6} className="text-[#9DB5CC]" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full" style={{ background: "#EF4444" }} />
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[10.5px] px-2.5 py-1.5 rounded-md text-white font-medium"
                style={{
                  background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
                  boxShadow: "0 4px 12px rgba(14,165,233,0.30)",
                }}
              >
                <IconPlus size={11} stroke={2} />
                New listing
              </span>
            </div>
          </header>

          {/* Title row */}
          <div className="px-5 pt-4 pb-3 flex items-end justify-between border-b" style={{ borderColor: "#0E2236" }}>
            <div>
              <div className="text-[#3E6080] text-[10px] tracking-[0.2em] uppercase mb-1.5">
                Tuesday · 9:42 am
              </div>
              <div className="text-white text-[20px] font-semibold tracking-tight">
                Good morning, Sarah.
              </div>
              <div className="text-[#7CA0C2] text-[12.5px] mt-0.5">
                You have <span className="text-white font-medium">6 hot matches</span> waiting on a reply.
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {[
                { label: "Avg response", value: "4m 11s", trend: "-92%", up: true },
                { label: "Active matches", value: "23", trend: "+6", up: true },
                { label: "Showings today", value: "5", trend: "+2", up: true },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-lg px-3 py-2"
                  style={{
                    background: "#040A12",
                    border: "1px solid #0E2236",
                    minWidth: 110,
                  }}
                >
                  <div className="text-[#3E6080] text-[9px] tracking-[0.16em] uppercase">
                    {s.label}
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-white text-[15px] font-semibold tabular-nums">{s.value}</span>
                    <span className="text-[#10B981] text-[10px] inline-flex items-center gap-0.5">
                      <IconArrowUpRight size={9} stroke={2.5} />
                      {s.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content grid: pipeline (left) + AI suggestions (right) */}
          <div className="flex-1 grid" style={{ gridTemplateColumns: "1fr 290px", minHeight: 0 }}>
            {/* Pipeline */}
            <div className="overflow-hidden border-r" style={{ borderColor: "#0E2236" }}>
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "#0E2236" }}>
                <div className="text-white text-[12.5px] font-medium tracking-tight">
                  Pipeline · This week
                </div>
                <div className="flex items-center gap-2.5 text-[10.5px]">
                  <span className="text-[#7CA0C2]">Group by</span>
                  <span className="text-[#9DB5CC] flex items-center gap-1">
                    Stage <IconChevronDown size={10} stroke={1.6} />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 p-3 h-full">
                {PIPELINE.map((col) => (
                  <div key={col.label} className="flex flex-col gap-2">
                    {/* Column header */}
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: col.color, boxShadow: col.hot ? `0 0 6px ${col.color}` : undefined }}
                        />
                        <span className="text-[10.5px] text-[#9DB5CC] font-medium">{col.label}</span>
                      </div>
                      <span className="text-[10px] text-[#5681AB] tabular-nums">{col.count}</span>
                    </div>

                    {/* Cards */}
                    {col.cards.map((c, i) => (
                      <div
                        key={i}
                        className="rounded-md p-2.5 relative"
                        style={{
                          background: col.hot ? "rgba(14,165,233,0.05)" : "#040A12",
                          border: col.hot
                            ? "1px solid rgba(14,165,233,0.25)"
                            : "1px solid #0E2236",
                        }}
                      >
                        {col.hot && "match" in c && (
                          <div
                            className="flex items-center justify-between mb-1.5"
                            style={{ color: "#7DD3FC" }}
                          >
                            <span className="text-[9px] tracking-[0.18em] uppercase font-semibold">Hot</span>
                            <m.span
                              className="text-[10px] tabular-nums font-semibold inline-flex items-center gap-0.5"
                              animate={{ opacity: [1, 0.6, 1] }}
                              transition={{ duration: 2.6, repeat: Infinity }}
                            >
                              <IconSparkles size={8} stroke={2} />
                              {c.match}%
                            </m.span>
                          </div>
                        )}
                        <div className="text-white text-[11.5px] font-medium leading-tight truncate">
                          {c.name}
                        </div>
                        <div className="text-[#7CA0C2] text-[10px] mt-0.5 truncate">
                          {c.addr}
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[#9DB5CC] text-[10.5px] tabular-nums font-medium">
                            {c.price}
                          </span>
                          <span className="text-[#3E6080] text-[9.5px]">
                            {"since" in c ? c.since : "today" in c && c.today ? "today" : "status" in c ? c.status : ""}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right rail: AI suggestions + activity */}
            <div className="flex flex-col overflow-hidden">
              {/* AI panel */}
              <div className="border-b px-4 py-3.5" style={{ borderColor: "#0E2236" }}>
                <div className="flex items-center gap-2 mb-3">
                  <m.span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(14,165,233,0.20), rgba(14,165,233,0.05))",
                      border: "1px solid rgba(14,165,233,0.30)",
                    }}
                    animate={{ boxShadow: ["0 0 0 rgba(14,165,233,0)", "0 0 12px rgba(14,165,233,0.45)", "0 0 0 rgba(14,165,233,0)"] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  >
                    <IconSparkles size={10} stroke={1.8} className="text-sky-300" />
                  </m.span>
                  <span className="text-white text-[12px] font-medium tracking-tight">AI suggestions</span>
                  <span
                    className="text-[9px] tabular-nums px-1.5 py-0.5 rounded ml-auto"
                    style={{ background: "rgba(14,165,233,0.10)", color: "#7DD3FC" }}
                  >
                    3 NEW
                  </span>
                </div>

                <div className="space-y-2.5">
                  {AI_SUGGESTIONS.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-md p-2.5"
                      style={{
                        background: "rgba(14,165,233,0.04)",
                        border: "1px solid rgba(14,165,233,0.15)",
                      }}
                    >
                      <div className="text-white text-[11.5px] font-medium leading-tight">{s.title}</div>
                      <div className="text-[#9DB5CC] text-[10.5px] mt-1 leading-snug">{s.body}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <span
                          className="text-[10px] px-2 py-1 rounded font-medium inline-flex items-center gap-1"
                          style={{
                            background: "#0EA5E9",
                            color: "#02060B",
                          }}
                        >
                          {s.action}
                        </span>
                        <span className="text-[#5681AB] text-[10px]">Skip</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="flex-1 px-4 py-3.5 overflow-hidden">
                <div className="text-[#3E6080] text-[9.5px] tracking-[0.18em] uppercase mb-3">
                  Activity
                </div>
                <div className="space-y-2.5">
                  {ACTIVITY.map((a, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span
                        className="inline-block mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          background:
                            a.tone === "ai"
                              ? "#0EA5E9"
                              : a.tone === "win"
                              ? "#10B981"
                              : "#5681AB",
                        }}
                      />
                      <div className="flex-1">
                        <div className="text-[11px] leading-snug">
                          <span className="text-white">{a.who}</span>{" "}
                          <span className="text-[#7CA0C2]">{a.what}</span>{" "}
                          <span className="text-white">{a.target}</span>
                        </div>
                        <div className="text-[#3E6080] text-[9.5px] mt-0.5">{a.when}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t flex items-center gap-2" style={{ borderColor: "#0E2236" }}>
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded"
                    style={{ background: "rgba(16,185,129,0.10)", color: "#10B981" }}
                  >
                    <IconCheck size={11} stroke={2.5} />
                  </span>
                  <span className="text-[#9DB5CC] text-[10.5px]">
                    All overnight follow-ups sent ·{" "}
                    <span className="text-white">47 emails</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

void IconCircle;
