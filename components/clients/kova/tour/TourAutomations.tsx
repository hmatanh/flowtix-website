"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconMail,
  IconBell,
  IconClock,
  IconChartBar,
  IconMessage,
  IconFileText,
  IconLoader2,
  IconCheck,
} from "@tabler/icons-react";

const BLUE = "#0EA5E9";

type Automation = {
  id: string;
  name: string;
  description: string;
  lastRun: string;
  nextRun: string;
  Icon: typeof IconMail;
};

const AUTOMATIONS: Automation[] = [
  {
    id: "lead-followup",
    name: "Lead Follow-Up AI",
    description: "Send personalized email within 60s of new lead.",
    lastRun: "2 min ago",
    nextRun: "On trigger",
    Icon: IconMail,
  },
  {
    id: "match-alert",
    name: "Property Match Alert",
    description: "Notify buyers of new matches daily.",
    lastRun: "Today 09:00",
    nextRun: "Tomorrow 09:00",
    Icon: IconBell,
  },
  {
    id: "viewing-reminders",
    name: "Viewing Reminders",
    description: "Remind 24h and 2h before viewings.",
    lastRun: "1 hr ago",
    nextRun: "13:30",
    Icon: IconClock,
  },
  {
    id: "pipeline-report",
    name: "Pipeline Report",
    description: "Weekly performance summary to Sarah.",
    lastRun: "Monday 08:00",
    nextRun: "Mon 08:00",
    Icon: IconChartBar,
  },
  {
    id: "new-lead-response",
    name: "New Lead Response",
    description: "Instant AI response to website inquiries.",
    lastRun: "5 min ago",
    nextRun: "On trigger",
    Icon: IconMessage,
  },
  {
    id: "market-brief",
    name: "Monthly Market Brief",
    description: "AI-generated market analysis for clients.",
    lastRun: "May 1",
    nextRun: "Jun 1",
    Icon: IconFileText,
  },
];

export function TourAutomations() {
  // First 5 are ON by default
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    AUTOMATIONS.reduce((acc, a, i) => ({ ...acc, [a.id]: i < 5 }), {}),
  );
  const [runningId, setRunningId] = useState<string | null>(null);
  const [completedId, setCompletedId] = useState<string | null>(null);

  const activeCount = Object.values(enabled).filter(Boolean).length;

  function toggle(id: string) {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function run(id: string) {
    setRunningId(id);
    setCompletedId(null);
    window.setTimeout(() => {
      setRunningId(null);
      setCompletedId(id);
      window.setTimeout(() => setCompletedId(null), 2000);
    }, 2000);
  }

  return (
    <div className="h-full min-h-[420px] sm:min-h-[520px] bg-[#0A1628] overflow-y-auto">
      {/* Header */}
      <header className="p-4 sm:p-5 border-b border-[#0D2A45]">
        <div className="text-white text-sm font-semibold">AI Automations</div>
        <div className="text-[#4a7a9b] text-[10px] mt-0.5">
          {activeCount} active · 0 errors · 234 tasks completed this month
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 mt-3">
          <Stat number="47h" label="saved this month" />
          <Stat number="234" label="tasks automated" />
        </div>
      </header>

      {/* Automation list */}
      <div className="p-3 sm:p-5 space-y-2.5">
        {AUTOMATIONS.map((a) => {
          const isOn = enabled[a.id];
          const isRunning = runningId === a.id;
          const isCompleted = completedId === a.id;
          const Icon = a.Icon;

          return (
            <div
              key={a.id}
              className="bg-[#0D1F38] border border-[#0D2A45] rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
            >
              <span
                className="bg-[#0A1628] rounded-xl p-2 sm:p-2.5 shrink-0"
                style={{ color: BLUE }}
              >
                <Icon size={18} stroke={1.8} />
              </span>

              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-semibold truncate">{a.name}</div>
                <div className="text-[#4a7a9b] text-[10px] mt-0.5 hidden sm:block">
                  {a.description}
                </div>
                <div className="text-[#1a3a52] text-[9px] mt-0.5">
                  {a.lastRun} · Next: {a.nextRun}
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => toggle(a.id)}
                  aria-label={`Toggle ${a.name}`}
                  className="w-9 h-5 rounded-full cursor-pointer relative transition-colors"
                  style={{ background: isOn ? BLUE : "#0D2A45" }}
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform"
                    style={{
                      transform: isOn ? "translateX(16px)" : "translateX(0)",
                    }}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => isOn && !isRunning && run(a.id)}
                  disabled={!isOn || isRunning}
                  className="text-[9px] border px-2 py-1 rounded-lg flex items-center gap-1 min-w-[64px] justify-center disabled:opacity-40"
                  style={{
                    borderColor: isCompleted ? "rgba(16,185,129,0.5)" : "#0D2A45",
                    color: isCompleted ? "#10B981" : BLUE,
                  }}
                >
                  {isRunning ? (
                    <>
                      <IconLoader2 size={10} className="animate-spin" />
                      Running...
                    </>
                  ) : isCompleted ? (
                    <>
                      <IconCheck size={10} stroke={3} />
                      Complete
                    </>
                  ) : (
                    "Run Now"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-black" style={{ color: number === "47h" ? BLUE : "#fff" }}>
        {number}
      </span>
      <span className="text-[#2a5a7a] text-xs">{label}</span>
    </div>
  );
}
