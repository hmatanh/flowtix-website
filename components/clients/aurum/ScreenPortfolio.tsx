import {
  IconSearch,
  IconBell,
  IconAlertTriangle,
  IconReportMoney,
  IconChartCandle,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { AurumMark } from "@/components/projects/BrandMarks";

/* ============================================================
   AURUM — Wealth Intelligence Dashboard
   Premium private-banking UI: dark + gold accents,
   real performance chart, allocation donut, alert tiles,
   tabular finance numbers, refined dividers.
   ============================================================ */

const STATS = [
  {
    label: "Total AUM",
    value: "$47.3M",
    sub: "as of 09:42",
    trend: "+2.34%",
    trendLabel: "this week",
    spark: [42.1, 42.8, 43.5, 44.2, 44.8, 45.3, 46.1, 46.6, 47.3],
  },
  {
    label: "Active Clients",
    value: "85",
    sub: "across 4 advisors",
    trend: "7",
    trendLabel: "reviews due",
    spark: [78, 79, 81, 82, 82, 83, 84, 84, 85],
  },
  {
    label: "YTD Return",
    value: "11.7%",
    sub: "vs benchmark 8.2%",
    trend: "+3.5",
    trendLabel: "pp alpha",
    spark: [2.1, 3.8, 4.2, 5.6, 7.1, 8.3, 9.2, 10.5, 11.7],
  },
  {
    label: "Cash Position",
    value: "$2.1M",
    sub: "4.4% of AUM",
    trend: "Optimal",
    trendLabel: "3-6% target",
    spark: [3.8, 4.0, 4.1, 4.4, 4.5, 4.5, 4.4, 4.4, 4.4],
  },
];

const ALLOCATION = [
  { label: "Equities", value: 52, color: "#F59E0B" },
  { label: "Fixed Income", value: 28, color: "#D97706" },
  { label: "Alternatives", value: 12, color: "#FBBF24" },
  { label: "Cash", value: 8, color: "#92400E" },
];

const ALERTS = [
  {
    severity: "high",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.10)",
    border: "rgba(239,68,68,0.25)",
    client: "Marcus Chen",
    text: "Portfolio hit 15% allocation limit in tech sector",
    age: "12m",
  },
  {
    severity: "medium",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.25)",
    client: "Lina Patel",
    text: "Cash position exceeding mandate range (8.5% > 6%)",
    age: "1h",
  },
  {
    severity: "info",
    color: "#10B981",
    bg: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.25)",
    client: "Theo Reyes",
    text: "Tax-loss harvesting opportunity — est. $4,200 savings",
    age: "3h",
  },
];

const REPORTS = [
  { name: "Anderson", aum: "$3.2M", type: "Q1 Review", due: "May 15", status: "done" },
  { name: "Williams", aum: "$5.8M", type: "Q1 Review", due: "May 18", status: "gen" },
  { name: "Park", aum: "$12.4M", type: "Annual", due: "May 31", status: "sched" },
  { name: "Okafor", aum: "$2.1M", type: "Q1 Review", due: "Jun 2", status: "sched" },
];

function statusPill(status: string) {
  if (status === "done")
    return { bg: "rgba(16,185,129,0.12)", text: "#34D399", label: "Generated", dot: "#10B981" };
  if (status === "gen")
    return { bg: "rgba(245,158,11,0.12)", text: "#FBBF24", label: "Generating", dot: "#F59E0B" };
  return { bg: "rgba(255,255,255,0.04)", text: "#A89968", label: "Scheduled", dot: "#A89968" };
}

function PerformanceChart({ data }: { data: number[] }) {
  const width = 360;
  const height = 90;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data
    .map((d, i) => `${i * step},${height - ((d - min) / range) * (height - 14) - 8}`)
    .join(" ");
  const benchmark = data.map((d, i) => 8.2 - i * 0.1 + Math.sin(i) * 0.5 + 0.2);
  const bmin = Math.min(...benchmark);
  const benchmarkPoints = benchmark
    .map(
      (d, i) =>
        `${i * step},${height - ((d - bmin + (min - bmin)) / range) * (height - 14) - 8 + 18}`
    )
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aurum-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((p) => (
        <line
          key={p}
          x1={0}
          x2={width}
          y1={height * p}
          y2={height * p}
          stroke="rgba(245,158,11,0.06)"
          strokeDasharray="3 3"
        />
      ))}
      <polyline
        points={benchmarkPoints}
        fill="none"
        stroke="rgba(168,153,104,0.5)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <polygon points={`0,${height} ${points} ${width},${height}`} fill="url(#aurum-gold)" />
      <polyline
        points={points}
        fill="none"
        stroke="#F59E0B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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

function AllocationDonut({
  data,
}: {
  data: { label: string; value: number; color: string }[];
}) {
  const radius = 38;
  const stroke = 12;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <div className="relative" style={{ width: 100, height: 100 }}>
      <svg width="100" height="100" className="-rotate-90" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={stroke}
          fill="none"
        />
        {data.map((seg, i) => {
          const segLen = (seg.value / 100) * circumference;
          const dash = `${segLen} ${circumference - segLen}`;
          const circle = (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={radius}
              stroke={seg.color}
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={dash}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += segLen + 2;
          return circle;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[8px] uppercase tracking-wider text-[#A89968]">
          AUM
        </span>
        <span className="text-white text-sm font-bold tracking-tight">
          $47.3M
        </span>
      </div>
    </div>
  );
}

export function ScreenPortfolio() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(245,158,11,0.10), transparent 60%), linear-gradient(180deg, #0E0A04 0%, #06030B 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: -60,
          right: -40,
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(245,158,11,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(20,14,5,0.85)",
          borderColor: "rgba(245,158,11,0.18)",
        }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <AurumMark size={18} />
          <span
            className="font-bold tracking-[0.2em] text-[12px]"
            style={{ color: "#F59E0B" }}
          >
            AURUM
          </span>
          <span
            className="ml-1 text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded font-medium"
            style={{
              background: "rgba(245,158,11,0.10)",
              color: "#FBBF24",
              border: "1px solid rgba(245,158,11,0.22)",
            }}
          >
            Intel
          </span>
        </div>
        <div
          className="hidden sm:flex items-center gap-2 flex-1 max-w-md mx-4 px-3 py-1.5 rounded-lg text-[10px] border"
          style={{
            background: "rgba(20,14,5,0.6)",
            color: "#A89968",
            borderColor: "rgba(245,158,11,0.10)",
          }}
        >
          <IconSearch size={11} stroke={1.5} />
          <span>Search portfolios, clients, instruments…</span>
          <span
            className="ml-auto text-[8px] px-1.5 py-0.5 rounded font-mono"
            style={{
              background: "rgba(245,158,11,0.08)",
              color: "#FBBF24",
              border: "1px solid rgba(245,158,11,0.15)",
            }}
          >
            ⌘K
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <IconBell size={13} stroke={1.5} color="#A89968" />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
              style={{ background: "#EF4444", boxShadow: "0 0 6px #EF4444" }}
            />
          </div>
          <div
            className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[10px] font-semibold"
            style={{
              background: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)",
              color: "#1a0e02",
              boxShadow: "0 0 0 1px rgba(245,158,11,0.30)",
            }}
          >
            EM
          </div>
        </div>
      </div>

      <main className="relative flex-1 p-3 sm:p-4 overflow-hidden">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-white text-base font-semibold tracking-tight">
              Good morning, Eduard
            </h1>
            <p className="text-[10px] mt-0.5" style={{ color: "#A89968" }}>
              Tue, May 14 · Markets opened +0.8% ·{" "}
              <span style={{ color: "#EF4444" }}>1 high-severity alert</span>
            </p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-[9px] px-2 py-1 rounded-md font-mono"
            style={{
              background: "rgba(245,158,11,0.08)",
              color: "#FBBF24",
              border: "1px solid rgba(245,158,11,0.15)",
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "#10B981", boxShadow: "0 0 4px #10B981" }}
            />
            Markets live · NYSE
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-2.5 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,14,5,0.92) 0%, rgba(15,10,3,0.6) 100%)",
                borderColor: "rgba(245,158,11,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,158,11,0.18), transparent 70%)",
                  filter: "blur(10px)",
                }}
              />
              <div className="relative">
                <div
                  className="text-[8px] uppercase tracking-wider font-medium"
                  style={{ color: "#A89968" }}
                >
                  {s.label}
                </div>
                <div className="flex items-end justify-between mt-1">
                  <div>
                    <div className="text-white text-lg font-bold leading-tight tabular-nums tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[8px] mt-0.5" style={{ color: "#A89968" }}>
                      {s.sub}
                    </div>
                  </div>
                  <MiniSpark data={s.spark} color="#F59E0B" />
                </div>
                <div
                  className="text-[8px] mt-1.5 inline-flex items-center gap-0.5 font-medium tabular-nums"
                  style={{ color: "#FBBF24" }}
                >
                  <IconArrowUpRight size={8} stroke={2.5} />
                  {s.trend}{" "}
                  <span style={{ color: "#A89968", marginLeft: 2 }}>
                    {s.trendLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-2.5 mt-2.5 flex-1 min-h-0">
          <div
            className="rounded-xl p-3 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,14,5,0.92) 0%, rgba(15,10,3,0.6) 100%)",
              borderColor: "rgba(245,158,11,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div
                  className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                  style={{
                    background: "rgba(245,158,11,0.15)",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  <IconChartCandle size={10} stroke={1.5} color="#F59E0B" />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-tight">
                  Performance — YTD
                </span>
                <span
                  className="text-[8px] uppercase tracking-wider"
                  style={{ color: "#A89968" }}
                >
                  All accounts
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-[8px] inline-flex items-center gap-1"
                  style={{ color: "#A89968" }}
                >
                  <span className="w-2 h-px" style={{ background: "#F59E0B" }} />
                  Portfolio
                </span>
                <span
                  className="text-[8px] inline-flex items-center gap-1"
                  style={{ color: "#A89968" }}
                >
                  <span className="w-2 h-px" style={{ background: "rgba(168,153,104,0.5)" }} />
                  Benchmark
                </span>
              </div>
            </div>

            <div className="mt-3 relative">
              <PerformanceChart data={STATS[2].spark} />
              <div className="absolute top-0 right-0 flex flex-col justify-between h-[90px] text-[7px] pr-1 pointer-events-none">
                <span style={{ color: "#A89968" }} className="tabular-nums">+12%</span>
                <span style={{ color: "#A89968" }} className="tabular-nums">+6%</span>
                <span style={{ color: "#A89968" }} className="tabular-nums">+0%</span>
              </div>
            </div>

            <div className="mt-1 flex justify-between text-[8px] tabular-nums" style={{ color: "#7a6a48" }}>
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            <div
              className="mt-3 rounded-lg border p-2.5 flex items-center gap-3"
              style={{
                background: "rgba(10,7,2,0.4)",
                borderColor: "rgba(245,158,11,0.08)",
              }}
            >
              <AllocationDonut data={ALLOCATION} />
              <div className="flex-1">
                <div
                  className="text-[9px] uppercase tracking-wider mb-1.5"
                  style={{ color: "#A89968" }}
                >
                  Asset allocation
                </div>
                <ul className="space-y-1">
                  {ALLOCATION.map((a) => (
                    <li key={a.label} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: a.color }}
                      />
                      <span className="text-[9px] flex-1" style={{ color: "#cda66e" }}>
                        {a.label}
                      </span>
                      <span
                        className="text-[9px] font-mono tabular-nums"
                        style={{ color: "#FBBF24" }}
                      >
                        {a.value}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 min-h-0">
            <div
              className="rounded-xl p-3 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,14,5,0.92) 0%, rgba(15,10,3,0.6) 100%)",
                borderColor: "rgba(245,158,11,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                    style={{
                      background: "rgba(245,158,11,0.15)",
                      border: "1px solid rgba(245,158,11,0.25)",
                    }}
                  >
                    <IconAlertTriangle size={10} stroke={1.5} color="#F59E0B" />
                  </div>
                  <span className="text-white text-[11px] font-semibold tracking-tight">
                    Compliance Alerts
                  </span>
                </div>
                <span
                  className="text-[8px] uppercase tracking-wider"
                  style={{ color: "#A89968" }}
                >
                  3 active
                </span>
              </div>
              <div className="space-y-1.5">
                {ALERTS.map((a, i) => (
                  <div
                    key={i}
                    className="rounded-md p-2 border relative"
                    style={{ background: a.bg, borderColor: a.border }}
                  >
                    <div className="flex items-baseline justify-between gap-1">
                      <span className="text-[9px] font-semibold" style={{ color: a.color }}>
                        {a.client}
                      </span>
                      <span
                        className="text-[8px] font-mono shrink-0"
                        style={{ color: "#7a6a48" }}
                      >
                        {a.age}
                      </span>
                    </div>
                    <p className="text-[9px] mt-1 leading-snug" style={{ color: "#cda66e" }}>
                      {a.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl p-3 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,14,5,0.92) 0%, rgba(15,10,3,0.6) 100%)",
                borderColor: "rgba(245,158,11,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                    style={{
                      background: "rgba(245,158,11,0.15)",
                      border: "1px solid rgba(245,158,11,0.25)",
                    }}
                  >
                    <IconReportMoney size={10} stroke={1.5} color="#F59E0B" />
                  </div>
                  <span className="text-white text-[11px] font-semibold tracking-tight">
                    Client Reports
                  </span>
                </div>
              </div>
              <ul className="space-y-1">
                {REPORTS.map((r) => {
                  const p = statusPill(r.status);
                  return (
                    <li
                      key={r.name}
                      className="flex items-center gap-2 py-1.5 px-2 rounded-md"
                      style={{ background: "rgba(10,7,2,0.4)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: p.dot }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-1">
                          <span className="text-[10px] text-white font-medium">{r.name}</span>
                          <span
                            className="text-[8px] font-mono tabular-nums shrink-0"
                            style={{ color: "#A89968" }}
                          >
                            {r.aum}
                          </span>
                        </div>
                        <div className="text-[8px] mt-0.5" style={{ color: "#7a6a48" }}>
                          {r.type} · Due {r.due}
                        </div>
                      </div>
                      <span
                        className="text-[8px] font-medium px-1.5 py-0.5 rounded shrink-0"
                        style={{ background: p.bg, color: p.text }}
                      >
                        {p.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
