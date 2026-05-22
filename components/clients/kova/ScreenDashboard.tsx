import {
  IconLayoutDashboard,
  IconMapSearch,
  IconUsers,
  IconRobot,
  IconChartLine,
  IconSettings,
  IconSearch,
  IconBell,
  IconBuildingSkyscraper,
  IconBolt,
  IconMail,
  IconCalendar,
  IconArrowUpRight,
  IconHomeFilled,
} from "@tabler/icons-react";
import { KovaMark } from "@/components/projects/BrandMarks";

/* ============================================================
   KOVA — Agent Dashboard
   Premium PropTech UI: glass surfaces, real data viz,
   property cards with image gradients, mini sparkline,
   AI match score ring, live activity timeline.
   ============================================================ */

const NAV = [
  { icon: IconLayoutDashboard, label: "Dashboard", active: true, badge: null },
  { icon: IconMapSearch, label: "Properties", active: false, badge: "47" },
  { icon: IconUsers, label: "Clients", active: false, badge: "23" },
  { icon: IconRobot, label: "AI Matching", active: false, badge: null },
  { icon: IconChartLine, label: "Analytics", active: false, badge: null },
  { icon: IconMail, label: "Inbox", active: false, badge: "4" },
  { icon: IconSettings, label: "Settings", active: false, badge: null },
];

// Mini sparkline points (each card has its own curve)
const SPARK_LISTINGS = [12, 14, 13, 17, 19, 22, 25, 28, 32, 38, 42, 47];
const SPARK_LEADS = [8, 12, 11, 14, 15, 13, 17, 18, 21, 20, 22, 23];
const SPARK_VIEWS = [2, 3, 2, 4, 5, 3, 4, 5, 6, 4, 5, 6];
const SPARK_PIPELINE = [2.4, 2.5, 2.7, 2.9, 3.1, 3.4, 3.6, 3.8, 3.9, 4.0, 4.1, 4.2];

const STATS = [
  {
    label: "Active Listings",
    value: "47",
    trend: "+12",
    trendLabel: "this week",
    accent: "#0EA5E9",
    spark: SPARK_LISTINGS,
  },
  {
    label: "Matched Leads",
    value: "23",
    trend: "+9",
    trendLabel: "overnight",
    accent: "#10B981",
    spark: SPARK_LEADS,
  },
  {
    label: "Viewings Today",
    value: "6",
    trend: "2",
    trendLabel: "confirmed",
    accent: "#0EA5E9",
    spark: SPARK_VIEWS,
  },
  {
    label: "Pipeline Value",
    value: "$4.2M",
    trend: "+$340K",
    trendLabel: "this month",
    accent: "#10B981",
    spark: SPARK_PIPELINE,
  },
];

// Property photo placeholders — gradients suggesting different architectural styles
const PROPERTY_VISUALS = [
  // Brick townhouse — warm
  "linear-gradient(135deg, #7c4a2e 0%, #c08660 35%, #7c4a2e 70%, #4a2a18 100%)",
  // Glass modernist — cool
  "linear-gradient(160deg, #1a3a52 0%, #5a93b8 40%, #2a5a78 80%, #0c2030 100%)",
  // Lake loft — green-blue
  "linear-gradient(150deg, #2a4a3a 0%, #6a9a82 40%, #4a7a62 80%, #1a3022 100%)",
  // Stone & glass
  "linear-gradient(140deg, #4a4438 0%, #888070 45%, #5a5448 90%)",
];

const MATCHES = [
  {
    name: "Elm Court, Unit 4B",
    meta: "3 bed · 2 bath · 92m²",
    location: "Westside",
    price: "$485,000",
    score: 94,
    tier: "high",
    visual: PROPERTY_VISUALS[0],
    new: true,
  },
  {
    name: "Hawthorn Terrace 12",
    meta: "4 bed · 3 bath · 140m²",
    location: "Midtown",
    price: "$612,000",
    score: 87,
    tier: "mid",
    visual: PROPERTY_VISUALS[1],
    new: true,
  },
  {
    name: "Lakeside Loft 3A",
    meta: "2 bed · 1 bath · 78m²",
    location: "Lakeshore",
    price: "$398,000",
    score: 76,
    tier: "low",
    visual: PROPERTY_VISUALS[2],
    new: false,
  },
];

const ACTIVITY = [
  {
    icon: IconMail,
    color: "#10B981",
    text: "Auto-reply sent to Marcus T.",
    sub: "About Elm Court · 94% match",
    time: "2m",
  },
  {
    icon: IconRobot,
    color: "#0EA5E9",
    text: "Property matched to 3 clients",
    sub: "Hawthorn Terrace · added 9 PM",
    time: "15m",
  },
  {
    icon: IconCalendar,
    color: "#10B981",
    text: "Viewing confirmed — 14:00",
    sub: "Sarah ↔ Lakeside Loft",
    time: "1h",
  },
  {
    icon: IconBolt,
    color: "#F59E0B",
    text: "Follow-up scheduled",
    sub: "Marcus T. · Tue 3 PM",
    time: "2h",
  },
  {
    icon: IconRobot,
    color: "#0EA5E9",
    text: "New lead auto-responded",
    sub: "From kova.co/listings",
    time: "3h",
  },
];

// Tiny SVG sparkline component (no external deps)
function Sparkline({
  data,
  color,
  height = 26,
  width = 70,
}: {
  data: number[];
  color: string;
  height?: number;
  width?: number;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data
    .map((d, i) => `${i * step},${height - ((d - min) / range) * (height - 4) - 2}`)
    .join(" ");
  const last = data[data.length - 1];
  const lastX = (data.length - 1) * step;
  const lastY = height - ((last - min) / range) * (height - 4) - 2;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className="overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`spark-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#spark-${color})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="2" fill={color} />
      <circle cx={lastX} cy={lastY} r="4" fill={color} fillOpacity="0.25" />
    </svg>
  );
}

// AI Score ring — visualizes the match percentage
function ScoreRing({ score, color }: { score: number; color: string }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="relative shrink-0" style={{ width: 36, height: 36 }}>
      <svg width="36" height="36" className="-rotate-90" aria-hidden="true">
        <circle cx="18" cy="18" r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth="3" fill="none" />
        <circle
          cx="18"
          cy="18"
          r={radius}
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 4px ${color}66)` }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-[9px] font-bold"
        style={{ color }}
      >
        {score}
      </span>
    </div>
  );
}

export function ScreenDashboard() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 30% -10%, rgba(14,165,233,0.12), transparent 60%), linear-gradient(180deg, #0A1628 0%, #06101D 100%)",
      }}
    >
      {/* Soft brand glow accents */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: -40,
          right: -40,
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top bar */}
      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(12,26,46,0.85)",
          borderColor: "rgba(14,165,233,0.15)",
        }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <KovaMark size={18} />
          <span
            className="font-bold tracking-tight text-[13px]"
            style={{ color: "#0EA5E9" }}
          >
            kova
          </span>
          <span
            className="ml-1 text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded font-medium"
            style={{
              background: "rgba(14,165,233,0.10)",
              color: "#7dd3fc",
              border: "1px solid rgba(14,165,233,0.20)",
            }}
          >
            Studio
          </span>
        </div>
        <div
          className="hidden sm:flex items-center gap-2 flex-1 max-w-md mx-4 px-3 py-1.5 rounded-lg text-[10px] border"
          style={{
            background: "rgba(13,31,56,0.6)",
            color: "#4a6b8a",
            borderColor: "rgba(14,165,233,0.10)",
          }}
        >
          <IconSearch size={11} stroke={1.5} />
          <span>Search properties, clients, neighborhoods…</span>
          <span
            className="ml-auto text-[8px] px-1.5 py-0.5 rounded font-mono"
            style={{
              background: "rgba(14,165,233,0.08)",
              color: "#7dd3fc",
              border: "1px solid rgba(14,165,233,0.15)",
            }}
          >
            ⌘K
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <IconBell size={13} stroke={1.5} color="#7ab3d0" />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
              style={{ background: "#10B981", boxShadow: "0 0 6px #10B981" }}
            />
          </div>
          <div
            className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[10px] font-semibold relative"
            style={{
              background:
                "linear-gradient(135deg, #0EA5E9 0%, #0284c7 100%)",
              color: "#001824",
              boxShadow: "0 0 0 1px rgba(14,165,233,0.30)",
            }}
          >
            SM
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full"
              style={{ background: "#10B981", border: "2px solid #0C1A2E" }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex min-h-0 relative">
        {/* Sidebar */}
        <aside
          className="w-36 sm:w-40 border-r flex flex-col"
          style={{
            background: "rgba(8,15,28,0.7)",
            borderColor: "rgba(14,165,233,0.10)",
          }}
        >
          <div className="p-2.5 space-y-0.5">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[10px] transition-colors"
                style={
                  item.active
                    ? {
                        background:
                          "linear-gradient(90deg, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.06) 100%)",
                        color: "#0EA5E9",
                        border: "1px solid rgba(14,165,233,0.20)",
                        boxShadow:
                          "0 0 16px rgba(14,165,233,0.10), inset 1px 0 0 #0EA5E9",
                      }
                    : { color: "#5a7a9a" }
                }
              >
                <item.icon size={12} stroke={1.5} />
                <span className="flex-1 font-medium">{item.label}</span>
                {item.badge && (
                  <span
                    className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                    style={
                      item.active
                        ? { background: "rgba(14,165,233,0.20)", color: "#0EA5E9" }
                        : { background: "rgba(122,179,208,0.10)", color: "#7ab3d0" }
                    }
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div
            className="mt-auto p-2.5 border-t flex items-center gap-2"
            style={{ borderColor: "rgba(14,165,233,0.08)" }}
          >
            <div
              className="w-6 h-6 rounded-full inline-flex items-center justify-center text-[9px] font-bold relative shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #0EA5E9 0%, #0284c7 100%)",
                color: "#001824",
              }}
            >
              SM
              <span
                className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                style={{ background: "#10B981", border: "1px solid #080F1C" }}
              />
            </div>
            <div className="min-w-0">
              <div className="text-white text-[10px] font-medium truncate">
                Sarah Moran
              </div>
              <div
                className="text-[8px] truncate"
                style={{ color: "#5a7a9a" }}
              >
                Senior Agent · Kova
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="relative flex-1 p-3 sm:p-4 overflow-hidden">
          {/* Greeting row */}
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <div>
              <h1 className="text-white text-base font-bold tracking-tight">
                Good morning, Sarah
              </h1>
              <p className="text-[10px] mt-0.5" style={{ color: "#7ab3d0" }}>
                Wed, May 14 · 9 properties matched overnight ·{" "}
                <span style={{ color: "#10B981" }}>3 hot leads waiting</span>
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="inline-flex items-center gap-1 text-[9px] px-2 py-1 rounded-md font-mono"
                style={{
                  background: "rgba(14,165,233,0.08)",
                  color: "#7dd3fc",
                  border: "1px solid rgba(14,165,233,0.15)",
                }}
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
          </div>

          {/* Stats grid with sparklines */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-2.5 border relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,31,56,0.9) 0%, rgba(12,26,46,0.6) 100%)",
                  borderColor: "rgba(14,165,233,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${s.accent}22, transparent 70%)`,
                    filter: "blur(10px)",
                  }}
                />
                <div className="relative">
                  <div
                    className="text-[8px] uppercase tracking-wider font-medium"
                    style={{ color: "#5a7a9a" }}
                  >
                    {s.label}
                  </div>
                  <div className="flex items-end justify-between mt-1">
                    <div>
                      <div
                        className="text-white text-lg font-bold leading-tight tracking-tight tabular-nums"
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-[8px] mt-0.5 inline-flex items-center gap-0.5 font-medium"
                        style={{ color: s.accent }}
                      >
                        <IconArrowUpRight size={8} stroke={2.5} />
                        {s.trend}{" "}
                        <span style={{ color: "#5a7a9a", marginLeft: 2 }}>
                          {s.trendLabel}
                        </span>
                      </div>
                    </div>
                    <Sparkline data={s.spark} color={s.accent} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Two-column row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-2.5 mt-2.5 flex-1 min-h-0">
            {/* AI matches */}
            <div
              className="rounded-xl p-3 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,31,56,0.92) 0%, rgba(12,26,46,0.6) 100%)",
                borderColor: "rgba(14,165,233,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div
                    className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                    style={{
                      background: "rgba(14,165,233,0.15)",
                      border: "1px solid rgba(14,165,233,0.25)",
                    }}
                  >
                    <IconRobot size={10} stroke={1.5} color="#0EA5E9" />
                  </div>
                  <span className="text-white text-[11px] font-semibold tracking-tight">
                    AI Matches
                  </span>
                  <span
                    className="text-[8px] uppercase tracking-wider"
                    style={{ color: "#5a7a9a" }}
                  >
                    Last 24h
                  </span>
                </div>
                <span
                  className="text-[9px] font-medium inline-flex items-center gap-1"
                  style={{ color: "#0EA5E9" }}
                >
                  View 23
                  <IconArrowUpRight size={9} stroke={2} />
                </span>
              </div>

              <div className="mt-2.5 space-y-1.5">
                {MATCHES.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-lg p-2 flex items-center gap-2.5 border transition-all"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(12,26,46,0.6) 0%, rgba(8,18,32,0.4) 100%)",
                      borderColor: "rgba(14,165,233,0.08)",
                    }}
                  >
                    {/* Property visual */}
                    <div className="relative shrink-0">
                      <div
                        className="w-11 h-11 rounded-md relative overflow-hidden"
                        style={{ background: m.visual }}
                      >
                        {/* Window/grid pattern overlay suggesting building */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
                            backgroundSize: "8px 8px",
                          }}
                        />
                        <IconHomeFilled
                          size={12}
                          className="absolute bottom-0.5 right-0.5 opacity-50"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        />
                      </div>
                      {m.new && (
                        <span
                          className="absolute -top-1 -right-1 text-[7px] font-bold px-1 py-0 rounded font-mono"
                          style={{
                            background: "#0EA5E9",
                            color: "#001824",
                            boxShadow: "0 0 6px rgba(14,165,233,0.6)",
                          }}
                        >
                          AI
                        </span>
                      )}
                    </div>
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <div className="text-white text-[10px] font-semibold truncate">
                          {m.name}
                        </div>
                        <span
                          className="text-[8px] px-1 py-0 rounded font-mono"
                          style={{
                            background: "rgba(122,179,208,0.10)",
                            color: "#7ab3d0",
                          }}
                        >
                          {m.location}
                        </span>
                      </div>
                      <div
                        className="text-[8px] mt-0.5"
                        style={{ color: "#5a7a9a" }}
                      >
                        {m.meta}
                      </div>
                      <div
                        className="text-[10px] font-bold mt-0.5 tabular-nums"
                        style={{ color: "#0EA5E9" }}
                      >
                        {m.price}
                      </div>
                    </div>
                    {/* Score ring */}
                    <ScoreRing
                      score={m.score}
                      color={
                        m.tier === "high"
                          ? "#10B981"
                          : m.tier === "mid"
                          ? "#0EA5E9"
                          : "#F59E0B"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <div
              className="rounded-xl p-3 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,31,56,0.92) 0%, rgba(12,26,46,0.6) 100%)",
                borderColor: "rgba(14,165,233,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                    style={{
                      background: "rgba(14,165,233,0.15)",
                      border: "1px solid rgba(14,165,233,0.25)",
                    }}
                  >
                    <IconBolt size={10} stroke={1.5} color="#0EA5E9" />
                  </div>
                  <span className="text-white text-[11px] font-semibold tracking-tight">
                    Automated
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

              {/* Timeline */}
              <ul className="relative space-y-2">
                <div
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-[7px] w-px"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,165,233,0.30), rgba(14,165,233,0.05))",
                  }}
                />
                {ACTIVITY.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <li key={i} className="relative flex items-start gap-2 pl-0">
                      <div
                        className="relative z-10 shrink-0 inline-flex items-center justify-center w-3.5 h-3.5 rounded-full"
                        style={{
                          background: "#0A1628",
                          border: `1.5px solid ${a.color}`,
                          boxShadow: `0 0 6px ${a.color}66`,
                        }}
                      >
                        <Icon size={7} stroke={2.5} color={a.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-1">
                          <span
                            className="text-[9px] font-medium truncate"
                            style={{ color: "#cce5f5" }}
                          >
                            {a.text}
                          </span>
                          <span
                            className="text-[8px] font-mono shrink-0"
                            style={{ color: "#3a5a7a" }}
                          >
                            {a.time}
                          </span>
                        </div>
                        <div
                          className="text-[8px] mt-0.5 truncate"
                          style={{ color: "#5a7a9a" }}
                        >
                          {a.sub}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <button
                className="w-full mt-3 inline-flex items-center justify-center gap-1.5 text-[9px] font-semibold py-1.5 rounded-md transition-colors"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.08) 100%)",
                  color: "#0EA5E9",
                  border: "1px solid rgba(14,165,233,0.25)",
                }}
              >
                <IconBuildingSkyscraper size={10} stroke={1.5} />
                Open today&apos;s queue
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
