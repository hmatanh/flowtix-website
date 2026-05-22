import {
  IconRobot,
  IconSearch,
  IconBell,
  IconCalendarStats,
  IconFileText,
  IconChartBar,
  IconArrowUpRight,
  IconBolt,
} from "@tabler/icons-react";
import { LinxMark } from "@/components/projects/BrandMarks";

/* ============================================================
   LINX — Studio Dashboard
   Creative agency operations: violet/purple palette, AI activity
   strip, client pipeline with brand glyphs, monthly performance
   chart, automation log.
   ============================================================ */

const STATS = [
  {
    label: "Active Clients",
    value: "23",
    sub: "+3 this quarter",
    trend: "+15%",
    trendLabel: "QoQ",
    spark: [16, 17, 18, 18, 19, 20, 21, 22, 23],
  },
  {
    label: "Proposals Sent",
    value: "7",
    sub: "5 accepted (71%)",
    trend: "5",
    trendLabel: "won",
    spark: [3, 4, 4, 5, 6, 6, 7, 7, 7],
  },
  {
    label: "Reports Auto-sent",
    value: "23/23",
    sub: "100% on time",
    trend: "Live",
    trendLabel: "AI",
    spark: [20, 21, 21, 22, 22, 23, 23, 23, 23],
    live: true,
  },
  {
    label: "Hours Saved (MTD)",
    value: "87h",
    sub: "AI prop 43h · reports 44h",
    trend: "+24h",
    trendLabel: "vs last",
    spark: [45, 52, 58, 64, 71, 76, 80, 84, 87],
  },
];

const CLIENT_VISUALS = [
  "linear-gradient(135deg, #c47edb 0%, #6a3b8c 100%)",
  "linear-gradient(135deg, #5fb8e8 0%, #2c5a8a 100%)",
  "linear-gradient(135deg, #f4a261 0%, #9c5024 100%)",
  "linear-gradient(135deg, #a7c4a0 0%, #4c7048 100%)",
  "linear-gradient(135deg, #e89ab4 0%, #8a4a64 100%)",
  "linear-gradient(135deg, #b8a878 0%, #6a5840 100%)",
];

const CLIENTS = [
  { name: "Brew Republic", monthly: "$9,500", next: "Jun 1", actions: 3, status: "active", visual: CLIENT_VISUALS[0] },
  { name: "NordFlex", monthly: "$12,000", next: "Jun 3", actions: 5, status: "active", visual: CLIENT_VISUALS[1] },
  { name: "Starfall Drinks", monthly: "$7,000", next: "Jun 1", actions: 2, status: "active", visual: CLIENT_VISUALS[2] },
  { name: "Pavilion Co.", monthly: "$8,500", next: "Jun 5", actions: 4, status: "review", visual: CLIENT_VISUALS[3] },
  { name: "Lumen Studios", monthly: "$11,200", next: "Jun 2", actions: 6, status: "active", visual: CLIENT_VISUALS[4] },
  { name: "Halcyon Coffee", monthly: "$5,400", next: "Jun 6", actions: 1, status: "active", visual: CLIENT_VISUALS[5] },
];

const AUTOMATION = [
  { icon: IconFileText, color: "#8B5CF6", title: "Reports auto-sent", detail: "4 today · Brew, NordFlex, Starfall, Lumen", time: "now" },
  { icon: IconRobot, color: "#A78BFA", title: "Proposal generated", detail: "Ridge Outdoor · 38 min draft", time: "2h" },
  { icon: IconBolt, color: "#8B5CF6", title: "Brief intakes", detail: "2 in review · 0 pending", time: "4h" },
];

function statusBadge(status: string) {
  if (status === "active")
    return { bg: "rgba(16,185,129,0.12)", text: "#34D399", label: "Active", dot: "#10B981" };
  return { bg: "rgba(139,92,246,0.12)", text: "#C4B5FD", label: "Review", dot: "#8B5CF6" };
}

function MiniSpark({ data, color }: { data: number[]; color: string }) {
  const width = 60;
  const height = 22;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data
    .map((d, i) => `${i * step},${height - ((d - min) / range) * (height - 4) - 2}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Bar chart for client revenue
function RevenueBars({
  clients,
}: {
  clients: { name: string; monthly: string }[];
}) {
  const values = clients.map((c) => parseInt(c.monthly.replace(/[^0-9]/g, "")));
  const max = Math.max(...values);
  return (
    <div className="space-y-1.5">
      {clients.map((c, i) => {
        const v = values[i];
        const pct = (v / max) * 100;
        return (
          <div key={c.name} className="flex items-center gap-2">
            <span
              className="text-[9px] font-medium truncate"
              style={{ color: "#DDD6FE", width: 88 }}
            >
              {c.name}
            </span>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(139,92,246,0.08)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${pct}%`,
                  background:
                    "linear-gradient(90deg, #8B5CF6 0%, #A78BFA 100%)",
                  boxShadow: "0 0 8px rgba(139,92,246,0.4)",
                }}
              />
            </div>
            <span
              className="text-[9px] font-mono tabular-nums shrink-0"
              style={{ color: "#C4B5FD", width: 48 }}
            >
              {c.monthly}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function ScreenDashboard() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(139,92,246,0.12), transparent 60%), linear-gradient(180deg, #0C0814 0%, #050308 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: -40,
          right: -40,
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(139,92,246,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(18,14,30,0.85)",
          borderColor: "rgba(139,92,246,0.18)",
        }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <LinxMark size={18} />
          <span
            className="font-bold tracking-tight text-[13px]"
            style={{ color: "#A78BFA" }}
          >
            linx
          </span>
          <span
            className="ml-1 text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded font-medium"
            style={{
              background: "rgba(139,92,246,0.10)",
              color: "#C4B5FD",
              border: "1px solid rgba(139,92,246,0.20)",
            }}
          >
            Studio
          </span>
        </div>
        <div
          className="hidden sm:flex items-center gap-2 flex-1 max-w-md mx-4 px-3 py-1.5 rounded-lg text-[10px] border"
          style={{
            background: "rgba(18,14,30,0.6)",
            color: "#7c6f9a",
            borderColor: "rgba(139,92,246,0.10)",
          }}
        >
          <IconSearch size={11} stroke={1.5} />
          <span>Search clients, projects, proposals…</span>
          <span
            className="ml-auto text-[8px] px-1.5 py-0.5 rounded font-mono"
            style={{
              background: "rgba(139,92,246,0.08)",
              color: "#C4B5FD",
              border: "1px solid rgba(139,92,246,0.15)",
            }}
          >
            ⌘K
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <IconBell size={13} stroke={1.5} color="#9a8cc0" />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
              style={{ background: "#8B5CF6", boxShadow: "0 0 6px #8B5CF6" }}
            />
          </div>
          <div
            className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[10px] font-semibold relative"
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
              color: "#0f0820",
              boxShadow: "0 0 0 1px rgba(139,92,246,0.30)",
            }}
          >
            PN
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full"
              style={{ background: "#10B981", border: "2px solid #0C0814" }}
            />
          </div>
        </div>
      </div>

      <main className="relative flex-1 p-3 sm:p-4 overflow-hidden">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-white text-base font-bold tracking-tight">
              Good morning, Priya
            </h1>
            <p className="text-[10px] mt-0.5" style={{ color: "#9a8cc0" }}>
              Mon, Jun 1 · 4 reports sent overnight ·{" "}
              <span style={{ color: "#A78BFA" }}>1 new proposal ready</span>
            </p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-[9px] px-2 py-1 rounded-md font-mono"
            style={{
              background: "rgba(139,92,246,0.08)",
              color: "#C4B5FD",
              border: "1px solid rgba(139,92,246,0.15)",
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "#10B981", boxShadow: "0 0 4px #10B981" }}
            />
            14 humans · 9 AI workers
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-2.5 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(18,14,30,0.92) 0%, rgba(12,8,20,0.6) 100%)",
                borderColor: "rgba(139,92,246,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)",
                  filter: "blur(10px)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div
                    className="text-[8px] uppercase tracking-wider font-medium"
                    style={{ color: "#7c6f9a" }}
                  >
                    {s.label}
                  </div>
                  {s.live && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "#10B981",
                        boxShadow: "0 0 4px #10B981",
                      }}
                    />
                  )}
                </div>
                <div className="flex items-end justify-between mt-1">
                  <div>
                    <div className="text-white text-lg font-bold leading-tight tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-[8px] mt-0.5" style={{ color: "#9a8cc0" }}>
                      {s.sub}
                    </div>
                  </div>
                  <MiniSpark data={s.spark} color="#A78BFA" />
                </div>
                <div
                  className="text-[8px] mt-1.5 inline-flex items-center gap-0.5 font-medium"
                  style={{ color: "#A78BFA" }}
                >
                  <IconArrowUpRight size={8} stroke={2.5} />
                  {s.trend}{" "}
                  <span style={{ color: "#7c6f9a", marginLeft: 2 }}>
                    {s.trendLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-2.5 mt-2.5 flex-1 min-h-0">
          {/* Clients section */}
          <div
            className="rounded-xl p-3 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(18,14,30,0.92) 0%, rgba(12,8,20,0.6) 100%)",
              borderColor: "rgba(139,92,246,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div
                  className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                  style={{
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                >
                  <IconChartBar size={10} stroke={1.5} color="#A78BFA" />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-tight">
                  Client Roster
                </span>
                <span
                  className="text-[8px] uppercase tracking-wider"
                  style={{ color: "#7c6f9a" }}
                >
                  23 active
                </span>
              </div>
              <span
                className="text-[9px] font-medium inline-flex items-center gap-1"
                style={{ color: "#A78BFA" }}
              >
                View all
                <IconArrowUpRight size={9} stroke={2} />
              </span>
            </div>

            {/* Top clients with visuals */}
            <div className="mt-2.5 grid grid-cols-2 gap-1.5">
              {CLIENTS.slice(0, 6).map((c) => {
                const b = statusBadge(c.status);
                return (
                  <div
                    key={c.name}
                    className="rounded-lg p-2 flex items-center gap-2 border"
                    style={{
                      background: "rgba(12,8,20,0.5)",
                      borderColor: "rgba(139,92,246,0.08)",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-md shrink-0 relative overflow-hidden"
                      style={{ background: c.visual }}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, rgba(255,255,255,0.2), transparent 50%)",
                        }}
                      />
                      <span className="absolute inset-0 inline-flex items-center justify-center text-white text-[8px] font-bold">
                        {c.name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 truncate">
                        <span className="text-white text-[10px] font-semibold truncate">
                          {c.name}
                        </span>
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ background: b.dot }}
                        />
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className="text-[9px] font-mono tabular-nums"
                          style={{ color: "#A78BFA" }}
                        >
                          {c.monthly}
                        </span>
                        <span
                          className="text-[8px]"
                          style={{ color: "#7c6f9a" }}
                        >
                          / mo
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-[8px] font-bold rounded-full w-4 h-4 inline-flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(139,92,246,0.20)",
                        color: "#C4B5FD",
                      }}
                    >
                      {c.actions}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Revenue bars */}
            <div
              className="mt-3 rounded-lg border p-2.5"
              style={{
                background: "rgba(12,8,20,0.4)",
                borderColor: "rgba(139,92,246,0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[9px] uppercase tracking-wider"
                  style={{ color: "#9a8cc0" }}
                >
                  Monthly revenue · top 6
                </span>
                <span
                  className="text-[9px] font-bold tabular-nums"
                  style={{ color: "#A78BFA" }}
                >
                  $53,600 / mo
                </span>
              </div>
              <RevenueBars clients={CLIENTS} />
            </div>
          </div>

          {/* Automation log */}
          <div
            className="rounded-xl p-3 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(18,14,30,0.92) 0%, rgba(12,8,20,0.6) 100%)",
              borderColor: "rgba(139,92,246,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div
                  className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                  style={{
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                >
                  <IconRobot size={10} stroke={1.5} color="#A78BFA" />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-tight">
                  AI Activity
                </span>
              </div>
              <span
                className="text-[8px] inline-flex items-center gap-1"
                style={{ color: "#10B981" }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{
                    background: "#10B981",
                    boxShadow: "0 0 4px #10B981",
                  }}
                />
                Live
              </span>
            </div>

            <ul className="relative space-y-2">
              <div
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-[7px] w-px"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(139,92,246,0.30), rgba(139,92,246,0.05))",
                }}
              />
              {AUTOMATION.map((a, i) => {
                const Icon = a.icon;
                return (
                  <li key={i} className="relative flex items-start gap-2">
                    <div
                      className="relative z-10 shrink-0 inline-flex items-center justify-center w-3.5 h-3.5 rounded-full"
                      style={{
                        background: "#0C0814",
                        border: `1.5px solid ${a.color}`,
                        boxShadow: `0 0 6px ${a.color}66`,
                      }}
                    >
                      <Icon size={7} stroke={2.5} color={a.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-1">
                        <span
                          className="text-[10px] font-semibold"
                          style={{ color: "#e5dcf8" }}
                        >
                          {a.title}
                        </span>
                        <span
                          className="text-[8px] font-mono shrink-0"
                          style={{ color: "#7c6f9a" }}
                        >
                          {a.time}
                        </span>
                      </div>
                      <div
                        className="text-[9px] mt-0.5 leading-snug"
                        style={{ color: "#9a8cc0" }}
                      >
                        {a.detail}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Calendar preview */}
            <div
              className="mt-3 rounded-lg border p-2.5"
              style={{
                background: "rgba(12,8,20,0.4)",
                borderColor: "rgba(139,92,246,0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[9px] uppercase tracking-wider inline-flex items-center gap-1.5"
                  style={{ color: "#9a8cc0" }}
                >
                  <IconCalendarStats size={10} stroke={1.5} />
                  This week
                </span>
                <span
                  className="text-[9px] font-bold"
                  style={{ color: "#A78BFA" }}
                >
                  6 reports
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[1, 2, 3, 1, 2, 0, 0].map((count, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-0.5"
                  >
                    <span
                      className="text-[8px]"
                      style={{ color: "#7c6f9a" }}
                    >
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </span>
                    <span
                      className="w-full h-4 rounded inline-flex items-center justify-center text-[8px] font-bold"
                      style={{
                        background:
                          count > 0
                            ? `rgba(139,92,246,${0.15 + count * 0.08})`
                            : "rgba(255,255,255,0.02)",
                        color: count > 0 ? "#C4B5FD" : "#5a5070",
                        border: count > 0
                          ? "1px solid rgba(139,92,246,0.20)"
                          : "1px solid rgba(255,255,255,0.02)",
                      }}
                    >
                      {count || ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
