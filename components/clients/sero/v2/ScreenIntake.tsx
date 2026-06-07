"use client";

/**
 * Sero V2 — AI Intake Processor
 *
 * Clinician's view of the AI processing the incoming patient intakes.
 * Calm two-pane: queue on the left, one expanded intake summary on the
 * right with the AI's structured analysis, suggested triage and the
 * "approve / re-route" controls.
 */

import { m } from "framer-motion";
import {
  IconSparkles,
  IconClock,
  IconArrowRight,
  IconCircleCheck,
  IconAlertCircle,
  IconHeartbeat,
  IconChevronRight,
} from "@tabler/icons-react";

const QUEUE = [
  {
    name: "Sarah K.",
    initials: "SK",
    presents: "Anxiety · Sleep disruption",
    flag: "moderate",
    when: "9:42 am",
    seconds: 12,
    active: true,
  },
  {
    name: "James O.",
    initials: "JO",
    presents: "Low mood · Self-referred",
    flag: "moderate",
    when: "9:18 am",
    seconds: 8,
  },
  {
    name: "Mira L.",
    initials: "ML",
    presents: "Panic episodes · 3 in 2 weeks",
    flag: "priority",
    when: "8:54 am",
    seconds: 14,
  },
  {
    name: "Dan B.",
    initials: "DB",
    presents: "Therapy continuation",
    flag: "routine",
    when: "8:22 am",
    seconds: 6,
  },
  {
    name: "Ava P.",
    initials: "AP",
    presents: "Sleep disorder · GP referral",
    flag: "routine",
    when: "Yesterday",
    seconds: 9,
  },
];

const FLAG_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  priority: {
    bg: "rgba(245,158,11,0.10)",
    color: "#FBBF24",
    label: "Priority",
  },
  moderate: {
    bg: "rgba(16,185,129,0.10)",
    color: "#A7F3D0",
    label: "Moderate",
  },
  routine: {
    bg: "rgba(148,163,184,0.10)",
    color: "#94A3B8",
    label: "Routine",
  },
};

const STRUCTURED = [
  { label: "Primary concern", value: "Generalised anxiety with sleep disruption" },
  { label: "Duration", value: "~ 6 months, worse last 4 weeks" },
  { label: "Sleep average", value: "5–6 hrs · self-reported" },
  { label: "Substance use", value: "Caffeine 3–4 cups/day · no alcohol weekday" },
  { label: "Current treatment", value: "None" },
  { label: "Risk markers", value: "None identified · review at intake" },
];

export function ScreenIntake() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #051E15 0%, #03110A 100%)",
        color: "#E6F4EC",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "320px 1fr" }}>
        {/* Queue */}
        <aside
          className="border-r overflow-hidden flex flex-col"
          style={{ borderColor: "rgba(16,185,129,0.10)", background: "#020A06" }}
        >
          <div
            className="px-5 py-4 border-b flex items-center justify-between"
            style={{ borderColor: "rgba(16,185,129,0.10)" }}
          >
            <div>
              <div className="text-white text-[13px] font-medium tracking-tight">Intake queue</div>
              <div className="text-[#5EAD8E] text-[10px] mt-0.5">5 awaiting · avg 9.8s to summary</div>
            </div>
            <span
              className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded"
              style={{
                background: "rgba(16,185,129,0.10)",
                color: "#A7F3D0",
              }}
            >
              Today
            </span>
          </div>

          <div className="flex-1 overflow-hidden">
            {QUEUE.map((q) => {
              const flag = FLAG_STYLE[q.flag];
              return (
                <div
                  key={q.name}
                  className="px-5 py-4 border-b flex items-start gap-3"
                  style={{
                    borderColor: "rgba(16,185,129,0.06)",
                    background: q.active ? "rgba(16,185,129,0.04)" : "transparent",
                    boxShadow: q.active ? "inset 2px 0 0 #10B981" : undefined,
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0 text-[12px] font-medium"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16,185,129,0.30), rgba(16,185,129,0.05))",
                      color: "#A7F3D0",
                      border: "1px solid rgba(16,185,129,0.20)",
                    }}
                  >
                    {q.initials}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className={`text-[12.5px] truncate ${
                          q.active ? "text-white" : "text-[#E6F4EC]"
                        }`}
                      >
                        {q.name}
                      </span>
                      <span className="text-[#5EAD8E] text-[10px] ml-auto">{q.when}</span>
                    </div>
                    <div className="text-[#9FCEB9] text-[11px] truncate">{q.presents}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className="text-[9.5px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded"
                        style={{ background: flag.bg, color: flag.color }}
                      >
                        {flag.label}
                      </span>
                      <span className="text-[#5EAD8E] text-[10px] inline-flex items-center gap-1">
                        <IconClock size={9} stroke={1.5} />
                        {q.seconds}s
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Detail */}
        <main className="flex flex-col overflow-hidden">
          {/* AI status bar */}
          <div
            className="flex items-center gap-3 px-7 py-3 border-b"
            style={{
              borderColor: "rgba(16,185,129,0.10)",
              background:
                "linear-gradient(90deg, rgba(16,185,129,0.04) 0%, transparent 60%)",
            }}
          >
            <m.span
              className="inline-flex items-center justify-center w-5 h-5 rounded"
              style={{
                background: "rgba(16,185,129,0.18)",
                border: "1px solid rgba(16,185,129,0.30)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(16,185,129,0)",
                  "0 0 10px rgba(16,185,129,0.45)",
                  "0 0 0 rgba(16,185,129,0)",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <IconSparkles size={11} stroke={1.8} style={{ color: "#A7F3D0" }} />
            </m.span>
            <span className="text-white text-[12px] font-medium">
              Sero AI · structured the intake in 12 seconds
            </span>
            <span className="text-[#5EAD8E] text-[11px] ml-auto">
              Always reviewed by a clinician before triage
            </span>
          </div>

          {/* Patient summary card */}
          <div className="px-9 pt-7 pb-5">
            <div className="text-[#5EAD8E] text-[10px] tracking-[0.22em] uppercase mb-3">
              Intake summary · Sarah K.
            </div>
            <div className="flex items-end justify-between flex-wrap gap-3">
              <h2
                className="text-white tracking-tight"
                style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                Generalised anxiety with sleep disruption.
              </h2>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-md"
                style={{
                  background: "rgba(245,158,11,0.10)",
                  color: "#FBBF24",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                <IconAlertCircle size={11} stroke={1.8} />
                Moderate · book within 5 working days
              </span>
            </div>
          </div>

          {/* Structured fields */}
          <div className="px-9 pb-6">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#091C13",
                border: "1px solid rgba(16,185,129,0.10)",
              }}
            >
              {STRUCTURED.map((row, i) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[180px_1fr] px-5 py-3.5"
                  style={{
                    borderBottom:
                      i < STRUCTURED.length - 1
                        ? "1px solid rgba(16,185,129,0.08)"
                        : undefined,
                  }}
                >
                  <span className="text-[#7AB29A] text-[11.5px] tracking-tight">
                    {row.label}
                  </span>
                  <span className="text-[#E6F4EC] text-[12.5px]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Triage suggestion */}
          <div className="px-9 pb-7 flex-1">
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.02) 100%)",
                border: "1px solid rgba(16,185,129,0.20)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <IconSparkles size={12} stroke={1.8} className="text-emerald-300" />
                <span className="text-white text-[12px] font-medium tracking-tight">
                  Suggested triage
                </span>
                <span className="text-[#5EAD8E] text-[10.5px] ml-auto">
                  Confidence 0.86 · model audit logged
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Practitioner", value: "Dr. Eliahu Bar-On" },
                  { label: "First session", value: "Aug 6 · 14:00" },
                  { label: "Pre-session task", value: "Sleep diary" },
                ].map((tile) => (
                  <div
                    key={tile.label}
                    className="rounded-lg p-3"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      border: "1px solid rgba(16,185,129,0.12)",
                    }}
                  >
                    <div className="text-[#7AB29A] text-[9.5px] uppercase tracking-[0.16em] mb-1.5">
                      {tile.label}
                    </div>
                    <div className="text-white text-[12.5px] font-medium">
                      {tile.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] px-4 py-2 rounded-lg font-medium"
                  style={{
                    background: "linear-gradient(135deg,#10B981 0%,#047857 100%)",
                    color: "#022A1B",
                  }}
                >
                  <IconCircleCheck size={12} stroke={2} />
                  Approve triage
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] px-3 py-2 rounded-lg"
                  style={{
                    background: "transparent",
                    color: "#A7F3D0",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  Re-route
                  <IconChevronRight size={11} stroke={2} />
                </span>
                <span className="text-[#5EAD8E] text-[10.5px] ml-auto inline-flex items-center gap-1.5">
                  <IconHeartbeat size={10} stroke={1.5} />
                  All decisions are logged for clinical governance
                </span>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div
            className="px-9 py-4 border-t flex items-center justify-between"
            style={{ borderColor: "rgba(16,185,129,0.08)" }}
          >
            <span className="text-[#5EAD8E] text-[10.5px]">
              Next in queue · James O. · low mood
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#A7F3D0] text-[11px]">
              Continue
              <IconArrowRight size={11} stroke={2} />
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
