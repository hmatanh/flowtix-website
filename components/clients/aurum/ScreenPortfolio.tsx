import { AurumMark } from "@/components/projects/BrandMarks";

const STATS = [
  {
    label: "Total AUM",
    value: "$47.3M",
    trend: "↑ 2.34% this week",
    sub: "as of 09:42 AM",
  },
  {
    label: "Active Clients",
    value: "85",
    trend: "7 reviews this month",
    sub: "across 4 advisors",
  },
  {
    label: "Avg. Return (YTD)",
    value: "11.7%",
    trend: "vs. benchmark 8.2%",
    sub: "+3.5 pp alpha",
  },
];

const ALERTS = [
  { client: "Marcus Chen", text: "Portfolio hit 15% allocation limit in tech" },
  { client: "Lina Patel", text: "Cash position exceeding mandate range" },
  { client: "Theo Reyes", text: "Tax-loss harvesting opportunity identified" },
];

const REPORTS = [
  { name: "Anderson", type: "Q1 Review", due: "May 15", status: "done" },
  { name: "Williams", type: "Q1 Review", due: "May 18", status: "gen" },
  { name: "Park", type: "Annual", due: "May 31", status: "sched" },
  { name: "Okafor", type: "Q1 Review", due: "Jun 2", status: "sched" },
];

function statusPill(status: string) {
  if (status === "done")
    return { bg: "rgba(16,185,129,0.18)", text: "#34D399", label: "✓ Generated" };
  if (status === "gen")
    return { bg: "rgba(217,119,6,0.2)", text: "#FBBF24", label: "⟳ Generating" };
  return {
    bg: "rgba(255,255,255,0.04)",
    text: "#8B6A2A",
    label: "⏳ Scheduled",
  };
}

export function ScreenPortfolio() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#120D04" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{
          background: "#1A1206",
          borderColor: "rgba(217,119,6,0.15)",
        }}
      >
        <div className="flex items-center gap-2">
          <AurumMark size={18} />
          <span
            className="font-semibold tracking-[0.2em] text-[12px]"
            style={{ color: "#D97706" }}
          >
            AURUM
          </span>
          <span
            className="hidden sm:inline h-3 w-px"
            style={{ background: "rgba(217,119,6,0.3)" }}
          />
          <span
            className="hidden sm:inline text-[10px] italic"
            style={{ color: "#8B6A2A" }}
          >
            Private Wealth Management
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="text-[9px] font-mono" style={{ color: "#6b4f1a" }}>
            NY 09:42 · LON 14:42 · HK 22:42
          </span>
          <div
            className="w-6 h-6 rounded-full inline-flex items-center justify-center text-[9px] font-semibold"
            style={{ background: "#1A1206", color: "#D97706", border: "1px solid rgba(217,119,6,0.3)" }}
          >
            MO
          </div>
        </div>
      </div>

      <main className="flex-1 px-5 py-4 overflow-hidden flex flex-col">
        {/* Header */}
        <div>
          <div
            className="text-[9px] uppercase tracking-widest"
            style={{ color: "#D97706" }}
          >
            Portfolio Intelligence
          </div>
          <div className="text-white text-base font-medium mt-0.5">
            Good morning, Marcus. Markets opened higher today.
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "#8B6A2A" }}>
            Your portfolio is up 2.34% this week.
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2.5 mt-3">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="rounded-md p-3 border"
              style={{
                background: "#1A1206",
                borderColor: "rgba(217,119,6,0.15)",
              }}
            >
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#6b4f1a" }}>
                {s.label}
              </div>
              <div className="text-white text-xl font-black tracking-tight mt-0.5">
                {s.value}
              </div>
              <div className="text-[8px] mt-0.5" style={{ color: "#D97706" }}>
                {s.trend}
              </div>
              {/* mini sparkline */}
              {i === 0 && (
                <svg
                  width="100%"
                  height="20"
                  viewBox="0 0 100 20"
                  className="mt-1.5"
                >
                  <path
                    d="M 0 16 Q 20 14 30 13 T 60 8 T 100 4"
                    stroke="#D97706"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <circle cx="100" cy="4" r="1.5" fill="#D97706" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          className="mt-3 rounded-md p-3 border flex-1 min-h-0 flex flex-col"
          style={{
            background: "#1A1206",
            borderColor: "rgba(217,119,6,0.15)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-white text-[10px] font-semibold">
              Portfolio Performance
            </span>
            <div className="flex items-center gap-1">
              {["1W", "1M", "3M", "YTD", "1Y"].map((p) => (
                <span
                  key={p}
                  className="text-[8px] px-2 py-0.5 rounded"
                  style={
                    p === "YTD"
                      ? { background: "rgba(217,119,6,0.25)", color: "#D97706" }
                      : { color: "#6b4f1a" }
                  }
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-2 relative">
            <svg
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="aurum-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D97706" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid */}
              {[20, 40, 60, 80].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="rgba(217,119,6,0.06)"
                  strokeWidth="0.5"
                />
              ))}
              {/* Fill */}
              <path
                d="M 0 70 Q 60 60 100 55 T 200 38 T 300 25 T 400 12 L 400 100 L 0 100 Z"
                fill="url(#aurum-fill)"
              />
              {/* Line */}
              <path
                d="M 0 70 Q 60 60 100 55 T 200 38 T 300 25 T 400 12"
                stroke="#D97706"
                strokeWidth="1.5"
                fill="none"
              />
              {/* End dot */}
              <circle cx="400" cy="12" r="3" fill="#D97706" />
              <circle cx="400" cy="12" r="6" fill="#D97706" fillOpacity="0.25" />
            </svg>
            {/* Axis labels */}
            <div
              className="absolute bottom-1 left-0 right-0 flex justify-between text-[8px] px-1"
              style={{ color: "#6b4f1a" }}
            >
              {["Jan", "Feb", "Mar", "Apr", "May"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Comparison bars */}
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center gap-2 text-[9px]">
              <span className="w-24" style={{ color: "#D97706" }}>
                AURUM Portfolio
              </span>
              <div className="flex-1 rounded h-2 overflow-hidden" style={{ background: "rgba(217,119,6,0.1)" }}>
                <div className="h-full" style={{ width: "78%", background: "#D97706" }} />
              </div>
              <span className="font-semibold" style={{ color: "#FBBF24" }}>
                11.7%
              </span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <span className="w-24" style={{ color: "#6b4f1a" }}>
                S&P 500 Benchmark
              </span>
              <div className="flex-1 rounded h-2 overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="h-full" style={{ width: "54%", background: "#6b4f1a" }} />
              </div>
              <span style={{ color: "#8B6A2A" }}>8.2%</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-2.5 mt-3">
          <div
            className="rounded-md p-3 border"
            style={{
              background: "#1A1206",
              borderColor: "rgba(217,119,6,0.15)",
            }}
          >
            <div className="text-white text-[10px] font-semibold">
              Client Alerts
            </div>
            <ul className="mt-1.5 space-y-1">
              {ALERTS.map((a) => (
                <li
                  key={a.client}
                  className="flex items-start gap-1.5 text-[9px]"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0 mt-1"
                    style={{ background: "#D97706" }}
                  />
                  <span className="flex-1" style={{ color: "#FDE68A" }}>
                    <span className="font-semibold">{a.client}</span>:{" "}
                    <span style={{ color: "#8B6A2A" }}>{a.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-md p-3 border"
            style={{
              background: "#1A1206",
              borderColor: "rgba(217,119,6,0.15)",
            }}
          >
            <div className="text-white text-[10px] font-semibold">
              Reports Due This Month
            </div>
            <table className="w-full mt-1.5 text-[9px]">
              <tbody>
                {REPORTS.map((r) => {
                  const p = statusPill(r.status);
                  return (
                    <tr
                      key={r.name}
                      className="border-b last:border-0"
                      style={{ borderColor: "rgba(217,119,6,0.08)" }}
                    >
                      <td className="py-1 text-white">{r.name}</td>
                      <td className="py-1" style={{ color: "#8B6A2A" }}>
                        {r.type}
                      </td>
                      <td className="py-1" style={{ color: "#6b4f1a" }}>
                        {r.due}
                      </td>
                      <td className="py-1 text-right">
                        <span
                          className="px-1.5 py-0.5 rounded text-[8px]"
                          style={{ background: p.bg, color: p.text }}
                        >
                          {p.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
