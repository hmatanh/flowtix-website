"use client";

import { m } from "framer-motion";
import {
  IconLayoutDashboard,
  IconUsers,
  IconRouteAltLeft,
  IconRobot,
  IconChartLine,
  IconSettings,
} from "@tabler/icons-react";
import { AnimatedCounter } from "./AnimatedCounter";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: string;
};

const stats: Stat[] = [
  { label: "New Leads", value: 128, change: "↑ 24%" },
  { label: "Revenue", value: 24360, prefix: "$", change: "↑ 31%" },
  { label: "Meetings", value: 32, change: "↑ 18%" },
  { label: "Tasks Done", value: 94, suffix: "%", change: "↑ 8%" },
];

const suggestions = [
  "Follow up with unresponded leads",
  "Summarize last 7 days",
  "Generate proposal for new lead",
];

const activity = [
  { dot: "#3B82F6", text: "New lead assigned", time: "2m" },
  { dot: "#10b981", text: "Proposal sent", time: "15m" },
  { dot: "#a855f7", text: "Meeting booked", time: "1h" },
];

const sidebarItems = [
  { label: "Overview", icon: IconLayoutDashboard, active: true },
  { label: "Leads", icon: IconUsers },
  { label: "Automations", icon: IconRouteAltLeft },
  { label: "AI Assistant", icon: IconRobot },
  { label: "Analytics", icon: IconChartLine },
  { label: "Settings", icon: IconSettings },
];

export function DashboardMockup() {
  return (
    <m.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl overflow-hidden w-full max-w-xl glow-blue-strong"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent pointer-events-none" />

      <div className="bg-[#111] border-b border-[#1a1a1a] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="text-[10px] text-[#6a6a6a] tracking-wider">
          flowtix · Dashboard
        </div>
        <div className="w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#222]" />
      </div>

      <div className="grid grid-cols-[140px_1fr]">
        <aside className="border-r border-[#1a1a1a] p-3 bg-[#0a0a0a]">
          <div className="flex items-center gap-2 px-2 py-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[10px] text-white font-semibold tracking-wide">
              flowtix
            </span>
          </div>
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded text-[11px] transition-colors ${
                  item.active
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#6a6a6a] hover:text-white"
                }`}
              >
                <item.icon size={13} stroke={1.6} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="p-4">
          <div>
            <h2 className="text-white text-sm font-semibold">Good morning 👋</h2>
            <div className="text-[#6a6a6a] text-[11px] mt-0.5">
              Here&apos;s what&apos;s happening.
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-3"
              >
                <div className="text-[#555] text-[9px] uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="text-white text-xl font-bold mt-1 tracking-tight">
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </div>
                <div className="text-green-400 text-[9px] mt-1">{s.change}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-3">
            <div className="flex items-center gap-1.5 text-white text-[11px] font-semibold mb-2">
              <span className="relative inline-flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
              </span>
              AI Assistant
            </div>
            <div className="space-y-1">
              {suggestions.map((s) => (
                <div
                  key={s}
                  className="bg-[#111] rounded-lg px-3 py-1.5 text-[10px] text-[#888]"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-[#555] text-[9px] uppercase tracking-wider mb-1.5">
              Recent Activity
            </div>
            <ul>
              {activity.map((a) => (
                <li
                  key={a.text}
                  className="flex items-center justify-between py-1.5 border-b border-[#0f0f0f] last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: a.dot }}
                    />
                    <span className="text-[#888] text-[10px]">{a.text}</span>
                  </div>
                  <span className="text-[#333] text-[9px]">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </m.div>
  );
}
