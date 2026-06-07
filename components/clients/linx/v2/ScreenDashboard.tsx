"use client";

/**
 * Linx V2 — Studio Dashboard
 *
 * Every client, every channel, every report — one screen. The partners
 * open it once at 8am. The system has already done the morning.
 */

import { m } from "framer-motion";
import {
  IconChartLine,
  IconCalendarStats,
  IconUsers,
  IconBriefcase,
  IconFileText,
  IconSparkles,
  IconCircleCheck,
  IconArrowUpRight,
  IconArrowDownRight,
  IconChevronRight,
} from "@tabler/icons-react";

const CLIENTS = [
  { name: "Marlow + Co", ret: "+18.4%", spend: "$24,800", status: "review", color: "#A78BFA" },
  { name: "Heyworth", ret: "+11.2%", spend: "$18,200", status: "live", color: "#8B5CF6" },
  { name: "Nascent", ret: "+9.4%", spend: "$12,400", status: "live", color: "#7C3AED" },
  { name: "Studio Quiet", ret: "+6.1%", spend: "$8,900", status: "live", color: "#6D28D9" },
  { name: "Otterhaus", ret: "-2.1%", spend: "$15,600", status: "flag", color: "#5B21B6" },
  { name: "Lumen Press", ret: "+13.8%", spend: "$22,100", status: "live", color: "#9333EA" },
];

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  review: {
    bg: "rgba(139,92,246,0.10)",
    color: "#A78BFA",
    label: "Report in review",
  },
  live: {
    bg: "rgba(132,204,22,0.08)",
    color: "#84CC16",
    label: "Running",
  },
  flag: {
    bg: "rgba(239,68,68,0.10)",
    color: "#F87171",
    label: "Attention",
  },
};

export function ScreenDashboard() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #14101F 0%, #0A0814 100%)",
        color: "#E6E0F4",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "200px 1fr" }}>
        {/* Sidebar */}
        <aside
          className="flex flex-col border-r"
          style={{ background: "#0F0B1F", borderColor: "rgba(139,92,246,0.10)" }}
        >
          <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(139,92,246,0.10)" }}>
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-md"
                style={{
                  background: "linear-gradient(135deg,#8B5CF6 0%,#5B21B6 100%)",
                }}
              >
                <svg viewBox="0 0 14 14" width="11" height="11" fill="none">
                  <path
                    d="M2 11 L2 3 L6 3 L8 7 L12 3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <div className="text-white text-[13px] tracking-tight">Linx</div>
                <div className="text-[#7A6BA0] text-[9px] tracking-[0.22em] uppercase">Studio</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 py-4 px-3 space-y-0.5 text-[12px]">
            {[
              { Icon: IconChartLine, label: "Dashboard", active: true },
              { Icon: IconBriefcase, label: "Proposals", badge: 2 },
              { Icon: IconFileText, label: "Reports", badge: 4 },
              { Icon: IconUsers, label: "Clients" },
              { Icon: IconCalendarStats, label: "Schedule" },
            ].map((it) => {
              const Icon = it.Icon;
              return (
                <div
                  key={it.label}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-md"
                  style={
                    it.active
                      ? {
                          background: "rgba(139,92,246,0.08)",
                          boxShadow: "inset 2px 0 0 #8B5CF6",
                          color: "#DDD6FE",
                        }
                      : { color: "#7A6BA0" }
                  }
                >
                  <Icon size={13} stroke={1.5} />
                  <span className="flex-1">{it.label}</span>
                  {it.badge !== undefined && (
                    <span
                      className="text-[9px] tabular-nums px-1.5 py-0.5 rounded"
                      style={{ background: "rgba(139,92,246,0.10)", color: "#DDD6FE" }}
                    >
                      {it.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          <div
            className="px-4 py-4 border-t"
            style={{ borderColor: "rgba(139,92,246,0.10)" }}
          >
            <div className="text-[#7A6BA0] text-[9px] tracking-[0.22em] uppercase mb-2">
              Partners
            </div>
            <div className="space-y-2 text-[11px]">
              {[
                { initials: "IC", name: "Iris Chen", c: "#A78BFA" },
                { initials: "LM", name: "Lior Mor", c: "#7C3AED" },
                { initials: "ST", name: "Sarah T.", c: "#9333EA" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${p.c}, ${p.c}99)`,
                    }}
                  >
                    {p.initials}
                  </span>
                  <span className="text-[#9180B5]">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="overflow-hidden flex flex-col">
          {/* Title row */}
          <div
            className="px-9 pt-7 pb-5 border-b"
            style={{ borderColor: "rgba(139,92,246,0.10)" }}
          >
            <div className="text-[#9180B5] text-[10px] tracking-[0.22em] uppercase mb-2">
              Wednesday · 8:14 am
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h1
                className="text-white tracking-tight"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Good morning, Iris.
              </h1>
              <div className="flex items-center gap-2.5">
                {[
                  { label: "Active clients", value: "23", trend: "+2 this Q" },
                  { label: "Open proposals", value: "4", trend: "$184k pipeline" },
                  { label: "Reports queued", value: "8 / 8", trend: "all on track" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-md px-3 py-2"
                    style={{
                      background: "#160F25",
                      border: "1px solid rgba(139,92,246,0.10)",
                      minWidth: 130,
                    }}
                  >
                    <div className="text-[#7A6BA0] text-[9px] tracking-[0.16em] uppercase">
                      {s.label}
                    </div>
                    <div className="text-white text-[15px] font-semibold mt-0.5 tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-[#A78BFA] text-[10px] mt-0.5">{s.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Body grid */}
          <div
            className="flex-1 grid"
            style={{ gridTemplateColumns: "1fr 280px", minHeight: 0 }}
          >
            {/* Left: client table */}
            <div className="overflow-hidden border-r" style={{ borderColor: "rgba(139,92,246,0.10)" }}>
              <div
                className="px-9 py-3 flex items-center justify-between border-b"
                style={{ borderColor: "rgba(139,92,246,0.10)" }}
              >
                <div className="text-white text-[12.5px] font-medium tracking-tight">
                  Client roster · this month
                </div>
                <div className="flex items-center gap-2 text-[10.5px]">
                  <span className="text-[#7A6BA0]">Sort by</span>
                  <span className="text-[#A78BFA]">Return ↓</span>
                </div>
              </div>

              <div className="px-9 py-2">
                <div className="grid grid-cols-[1fr_90px_100px_140px_20px] gap-3 py-2 text-[#7A6BA0] text-[9.5px] tracking-[0.16em] uppercase border-b" style={{ borderColor: "rgba(139,92,246,0.10)" }}>
                  <span>Client</span>
                  <span className="text-right">Return</span>
                  <span className="text-right">Spend</span>
                  <span>Status</span>
                  <span></span>
                </div>

                {CLIENTS.map((c, i) => {
                  const isPos = c.ret.startsWith("+");
                  const s = STATUS_STYLE[c.status];
                  return (
                    <m.div
                      key={c.name}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      className="grid grid-cols-[1fr_90px_100px_140px_20px] gap-3 items-center py-3 border-b"
                      style={{ borderColor: "rgba(139,92,246,0.06)" }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="inline-block w-1.5 h-7 rounded-full shrink-0"
                          style={{ background: c.color }}
                        />
                        <span className="text-white text-[12px] truncate">{c.name}</span>
                      </div>
                      <span
                        className="text-[12px] tabular-nums text-right inline-flex items-center justify-end gap-0.5 font-medium"
                        style={{ color: isPos ? "#84CC16" : "#F87171" }}
                      >
                        {isPos ? (
                          <IconArrowUpRight size={10} stroke={2.5} />
                        ) : (
                          <IconArrowDownRight size={10} stroke={2.5} />
                        )}
                        {c.ret}
                      </span>
                      <span className="text-[#E6E0F4] text-[12px] tabular-nums text-right">
                        {c.spend}
                      </span>
                      <span
                        className="text-[9.5px] uppercase tracking-[0.18em] px-2 py-1 rounded inline-flex items-center gap-1.5 font-semibold w-fit"
                        style={{ background: s.bg, color: s.color }}
                      >
                        <span
                          className="block w-1.5 h-1.5 rounded-full"
                          style={{ background: s.color }}
                        />
                        {s.label}
                      </span>
                      <IconChevronRight
                        size={11}
                        stroke={1.8}
                        className="text-[#5A4D7A] justify-self-end"
                      />
                    </m.div>
                  );
                })}
              </div>
            </div>

            {/* Right: agenda + AI summary */}
            <aside className="overflow-hidden flex flex-col">
              {/* AI summary */}
              <div
                className="px-5 py-4 border-b"
                style={{ borderColor: "rgba(139,92,246,0.10)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <m.span
                    className="inline-flex items-center justify-center w-5 h-5 rounded"
                    style={{ background: "rgba(139,92,246,0.15)" }}
                    animate={{ boxShadow: ["0 0 0 rgba(139,92,246,0)", "0 0 10px rgba(139,92,246,0.45)", "0 0 0 rgba(139,92,246,0)"] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    <IconSparkles size={10} stroke={1.8} className="text-violet-300" />
                  </m.span>
                  <span className="text-white text-[12px] font-medium tracking-tight">
                    Morning brief
                  </span>
                </div>
                <p className="text-[#E6E0F4] text-[11.5px] leading-relaxed">
                  <span className="text-white font-medium">Otterhaus</span> dipped
                  -2.1% on a paid spend pause — Pia&apos;s call at 10am.{" "}
                  <span className="text-white font-medium">Marlow</span>{" "}
                  report ready for your sign-off. Two proposals due Friday.
                </p>
              </div>

              {/* Today */}
              <div className="flex-1 px-5 py-4 overflow-hidden">
                <div className="text-[#7A6BA0] text-[9.5px] tracking-[0.22em] uppercase mb-3">
                  Today
                </div>
                <div className="space-y-3 text-[11.5px]">
                  {[
                    { t: "08:30", title: "Studio standup", who: "All partners", done: true },
                    { t: "10:00", title: "Otterhaus · Pia", who: "Iris", flag: true },
                    { t: "11:30", title: "Marlow report walk-through", who: "Iris + Lior" },
                    { t: "14:00", title: "Heyworth proposal v3", who: "Sarah", ai: true },
                    { t: "16:00", title: "New business — Nascent II", who: "Iris" },
                  ].map((e, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                      style={{ opacity: e.done ? 0.5 : 1 }}
                    >
                      <span
                        className="text-[#A78BFA] font-mono tabular-nums w-10 text-[10.5px] mt-0.5 shrink-0"
                      >
                        {e.t}
                      </span>
                      <div className="flex-1">
                        <div
                          className="flex items-center gap-1.5"
                          style={{ color: e.done ? "#5A4D7A" : "#E6E0F4" }}
                        >
                          <span className="flex-1 truncate">{e.title}</span>
                          {e.flag && (
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          )}
                          {e.ai && (
                            <IconSparkles size={9} stroke={2} className="text-violet-400" />
                          )}
                          {e.done && (
                            <IconCircleCheck size={10} stroke={2} className="text-violet-400" />
                          )}
                        </div>
                        <div className="text-[#7A6BA0] text-[9.5px] mt-0.5">
                          {e.who}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
