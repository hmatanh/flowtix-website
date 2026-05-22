import {
  IconRobot,
  IconBell,
  IconSearch,
  IconCalendarTime,
  IconClipboardCheck,
  IconHeartbeat,
  IconStethoscope,
  IconAlertCircle,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { SeroMark } from "@/components/projects/BrandMarks";

/* ============================================================
   SERŌ — Practitioner Patient View
   Premium digital health UI: soft surfaces, AI triage badges,
   appointment timeline, vital indicators, breathable rhythm.
   ============================================================ */

// Mini sparkline data per metric
const SPARK_INTAKE = [3, 4, 3, 5, 4, 3, 3];
const SPARK_WAIT = [22, 18, 15, 12, 10, 6, 4];
const SPARK_NOSHOW = [3.6, 3.2, 3.0, 2.8, 2.5, 2.3, 2.1];
const SPARK_APPTS = [12, 14, 15, 16, 15, 18, 8];

const STATS = [
  {
    label: "Today's Appointments",
    value: "8",
    sub: "2 urgent · 6 routine",
    trend: "+1",
    trendLabel: "vs avg",
    accent: "#10B981",
    spark: SPARK_APPTS,
  },
  {
    label: "Intake Queue",
    value: "3",
    sub: "AI processed · ready",
    trend: "Live",
    trendLabel: "AI",
    accent: "#10B981",
    spark: SPARK_INTAKE,
    live: true,
  },
  {
    label: "Avg. Wait Time",
    value: "4 min",
    sub: "Target: under 5 min",
    trend: "↓ 18 min",
    trendLabel: "vs last week",
    accent: "#10B981",
    spark: SPARK_WAIT,
  },
  {
    label: "No-Shows (MTD)",
    value: "2.1%",
    sub: "Industry avg: 12%",
    trend: "↓ 41%",
    trendLabel: "vs last month",
    accent: "#10B981",
    spark: SPARK_NOSHOW,
  },
];

const INTAKES = [
  {
    id: "#2847",
    name: "Marcus T. · M, 34",
    priority: "Routine",
    color: "#10B981",
    bg: "rgba(16,185,129,0.18)",
    border: "rgba(16,185,129,0.30)",
    complaint:
      "Lower back pain, onset 3 days ago, radiating to left leg below knee",
    suggest: "Physio referral · Imaging not urgent",
    confidence: 91,
    age: "2m ago",
  },
  {
    id: "#2848",
    name: "Sarah L. · F, 52",
    priority: "Priority",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.18)",
    border: "rgba(245,158,11,0.32)",
    complaint:
      "Persistent cough · 2 weeks · intermittent low-grade fever, mild fatigue",
    suggest: "Chest X-ray · Consider antibiotics · GP review",
    confidence: 84,
    age: "8m ago",
  },
  {
    id: "#2849",
    name: "Dana K. · F, 47",
    priority: "Routine",
    color: "#10B981",
    bg: "rgba(16,185,129,0.18)",
    border: "rgba(16,185,129,0.30)",
    complaint: "Annual checkup, no current symptoms, family history of HTN",
    suggest: "Standard panel · Blood work · BP monitoring",
    confidence: 96,
    age: "14m ago",
  },
];

const SCHEDULE = [
  { time: "09:00", patient: "Sarah L.", type: "General checkup", state: "confirmed" },
  { time: "09:20", patient: "Marcus T.", type: "Follow-up", state: "confirmed" },
  { time: "09:40", patient: "", type: "Available slot", state: "open" },
  { time: "10:00", patient: "Dana K.", type: "New patient intake", state: "pending" },
  { time: "10:20", patient: "James P.", type: "AI: New intake", state: "ai" },
  { time: "10:40", patient: "Maya R.", type: "Priority consult", state: "priority" },
  { time: "11:00", patient: "Carl D.", type: "Annual physical", state: "confirmed" },
];

function slotStyle(state: string) {
  if (state === "confirmed")
    return {
      bg: "rgba(16,185,129,0.12)",
      border: "rgba(16,185,129,0.25)",
      text: "#A7F3D0",
      dot: "#10B981",
      label: "Confirmed",
    };
  if (state === "pending")
    return {
      bg: "rgba(245,158,11,0.12)",
      border: "rgba(245,158,11,0.25)",
      text: "#FCD34D",
      dot: "#F59E0B",
      label: "Pending",
    };
  if (state === "priority")
    return {
      bg: "rgba(239,68,68,0.12)",
      border: "rgba(239,68,68,0.25)",
      text: "#FCA5A5",
      dot: "#EF4444",
      label: "Priority",
    };
  if (state === "ai")
    return {
      bg: "rgba(16,185,129,0.16)",
      border: "rgba(16,185,129,0.32)",
      text: "#34D399",
      dot: "#10B981",
      label: "AI ready",
    };
  return {
    bg: "rgba(255,255,255,0.02)",
    border: "rgba(255,255,255,0.06)",
    text: "#557e6c",
    dot: "transparent",
    label: "Open",
  };
}

function Sparkline({
  data,
  color,
  height = 24,
  width = 64,
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
  const gradId = `g-${color.replace("#", "")}`;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className="overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.30" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#${gradId})`}
      />
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

export function ScreenPatient() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(16,185,129,0.10), transparent 60%), linear-gradient(180deg, #051A12 0%, #03100B 100%)",
      }}
    >
      {/* Brand glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: -60,
          right: -40,
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top bar */}
      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(7,31,21,0.85)",
          borderColor: "rgba(16,185,129,0.15)",
        }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <SeroMark size={18} />
          <span
            className="font-medium text-[13px] tracking-tight"
            style={{ color: "#A7F3D0" }}
          >
            serō
          </span>
          <span
            className="ml-1 text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded font-medium"
            style={{
              background: "rgba(16,185,129,0.10)",
              color: "#6ee7b7",
              border: "1px solid rgba(16,185,129,0.20)",
            }}
          >
            Practice
          </span>
        </div>
        <div
          className="hidden sm:flex items-center gap-2 flex-1 max-w-md mx-4 px-3 py-1.5 rounded-lg text-[10px] border"
          style={{
            background: "rgba(7,31,21,0.6)",
            color: "#5a8a7a",
            borderColor: "rgba(16,185,129,0.12)",
          }}
        >
          <IconSearch size={11} stroke={1.5} />
          <span>Search patients, charts, intake queue…</span>
          <span
            className="ml-auto text-[8px] px-1.5 py-0.5 rounded font-mono"
            style={{
              background: "rgba(16,185,129,0.08)",
              color: "#6ee7b7",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            ⌘K
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <IconBell size={13} stroke={1.5} color="#7ab8a0" />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
              style={{ background: "#F59E0B", boxShadow: "0 0 6px #F59E0B" }}
            />
          </div>
          <div
            className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[10px] font-semibold relative"
            style={{
              background:
                "linear-gradient(135deg, #10B981 0%, #047857 100%)",
              color: "#021a0f",
              boxShadow: "0 0 0 1px rgba(16,185,129,0.30)",
            }}
          >
            DM
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full"
              style={{ background: "#10B981", border: "2px solid #051A12" }}
            />
          </div>
        </div>
      </div>

      <main className="relative flex-1 p-3 sm:p-4 overflow-hidden">
        {/* Greeting */}
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-white text-base font-semibold tracking-tight">
              Good morning, Dr. Murray
            </h1>
            <p className="text-[10px] mt-0.5" style={{ color: "#7ab8a0" }}>
              Tue, Sep 12 · 3 new intakes processed overnight ·{" "}
              <span style={{ color: "#FCD34D" }}>1 priority</span>
            </p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-[9px] px-2 py-1 rounded-md font-mono"
            style={{
              background: "rgba(16,185,129,0.08)",
              color: "#6ee7b7",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "#10B981", boxShadow: "0 0 4px #10B981" }}
            />
            HIPAA · Encrypted
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-2.5 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(7,31,21,0.92) 0%, rgba(5,26,18,0.6) 100%)",
                borderColor: "rgba(16,185,129,0.12)",
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
                <div className="flex items-center justify-between">
                  <div
                    className="text-[8px] uppercase tracking-wider font-medium"
                    style={{ color: "#5a8a7a" }}
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
                    <div className="text-white text-lg font-semibold leading-tight tabular-nums">
                      {s.value}
                    </div>
                    <div
                      className="text-[8px] mt-0.5"
                      style={{ color: "#7ab8a0" }}
                    >
                      {s.sub}
                    </div>
                  </div>
                  <Sparkline data={s.spark} color={s.accent} />
                </div>
                <div
                  className="text-[8px] mt-1.5 inline-flex items-center gap-0.5 font-medium"
                  style={{ color: s.accent }}
                >
                  <IconArrowUpRight size={8} stroke={2.5} />
                  {s.trend}{" "}
                  <span style={{ color: "#5a8a7a", marginLeft: 2 }}>
                    {s.trendLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-2.5 mt-2.5 flex-1 min-h-0">
          {/* AI Intake Queue */}
          <div
            className="rounded-xl p-3 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,31,21,0.92) 0%, rgba(5,26,18,0.6) 100%)",
              borderColor: "rgba(16,185,129,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div
                  className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  <IconRobot size={10} stroke={1.5} color="#10B981" />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-tight">
                  AI Intake Queue
                </span>
                <span
                  className="text-[8px] uppercase tracking-wider"
                  style={{ color: "#5a8a7a" }}
                >
                  3 ready
                </span>
              </div>
              <span
                className="text-[9px] font-medium inline-flex items-center gap-1"
                style={{ color: "#10B981" }}
              >
                View all
                <IconArrowUpRight size={9} stroke={2} />
              </span>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {INTAKES.map((intake) => (
                <div
                  key={intake.id}
                  className="rounded-lg p-2.5 border relative"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(5,26,18,0.7) 0%, rgba(3,16,11,0.4) 100%)",
                    borderColor: intake.border,
                  }}
                >
                  {/* Left brand indicator stripe */}
                  <div
                    aria-hidden="true"
                    className="absolute top-2 bottom-2 left-0 w-0.5 rounded-r"
                    style={{ background: intake.color }}
                  />
                  <div className="flex items-center justify-between gap-2 pl-1.5">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-[9px] font-mono"
                        style={{ color: "#7ab8a0" }}
                      >
                        {intake.id}
                      </span>
                      <span className="text-[9px] text-white font-medium">
                        {intake.name}
                      </span>
                      <span
                        className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
                        style={{
                          background: intake.bg,
                          color: intake.color,
                          border: `1px solid ${intake.border}`,
                        }}
                      >
                        {intake.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="text-[8px] font-mono"
                        style={{ color: "#5a8a7a" }}
                      >
                        {intake.age}
                      </span>
                      <div className="flex items-center gap-1">
                        <span
                          className="text-[8px]"
                          style={{ color: "#5a8a7a" }}
                        >
                          AI conf.
                        </span>
                        <span
                          className="text-[8px] font-bold tabular-nums"
                          style={{ color: intake.color }}
                        >
                          {intake.confidence}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-[10px] mt-1.5 leading-snug pl-1.5"
                    style={{ color: "#cce5d5" }}
                  >
                    {intake.complaint}
                  </p>
                  <div className="pl-1.5 mt-1.5 flex items-center gap-1.5">
                    <span
                      className="inline-flex items-center gap-1 text-[8px] font-medium px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(16,185,129,0.10)",
                        color: "#6ee7b7",
                        border: "1px solid rgba(16,185,129,0.20)",
                      }}
                    >
                      <IconRobot size={8} stroke={2} />
                      AI suggests
                    </span>
                    <span
                      className="text-[9px]"
                      style={{ color: "#9accba" }}
                    >
                      {intake.suggest}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule timeline */}
          <div
            className="rounded-xl p-3 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,31,21,0.92) 0%, rgba(5,26,18,0.6) 100%)",
              borderColor: "rgba(16,185,129,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div
                  className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  <IconCalendarTime
                    size={10}
                    stroke={1.5}
                    color="#10B981"
                  />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-tight">
                  Today
                </span>
              </div>
              <span
                className="text-[8px] uppercase tracking-wider"
                style={{ color: "#7ab8a0" }}
              >
                7 of 8
              </span>
            </div>

            <ul className="space-y-1">
              {SCHEDULE.map((s, i) => {
                const style = slotStyle(s.state);
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 py-1.5 px-2 rounded-md"
                    style={{
                      background: style.bg,
                      border: `1px solid ${style.border}`,
                    }}
                  >
                    <span
                      className="text-[9px] font-mono tabular-nums shrink-0"
                      style={{ color: "#7ab8a0" }}
                    >
                      {s.time}
                    </span>
                    <span
                      className="shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: style.dot,
                        boxShadow:
                          style.dot !== "transparent"
                            ? `0 0 4px ${style.dot}`
                            : undefined,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      {s.patient ? (
                        <div
                          className="text-[9px] font-medium truncate"
                          style={{ color: "#e0f5e9" }}
                        >
                          {s.patient}
                        </div>
                      ) : (
                        <div
                          className="text-[9px] italic"
                          style={{ color: "#5a8a7a" }}
                        >
                          {s.type}
                        </div>
                      )}
                      {s.patient && (
                        <div
                          className="text-[8px] truncate"
                          style={{ color: style.text, opacity: 0.7 }}
                        >
                          {s.type}
                        </div>
                      )}
                    </div>
                    <span
                      className="text-[8px] font-medium shrink-0"
                      style={{ color: style.text }}
                    >
                      {style.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
