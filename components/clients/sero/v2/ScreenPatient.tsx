"use client";

/**
 * Sero V2 — Practitioner Patient View
 *
 * Calm, breathing layout. Two-column: clinical summary + AI-triaged
 * highlights on the left, session timeline + notes on the right. Cream-tinted
 * typography against deep sage backdrops. Slow rhythm — the opposite of
 * Kova's dashboard density.
 */

import { m } from "framer-motion";
import {
  IconCalendarStats,
  IconHeartbeat,
  IconStethoscope,
  IconMoodSmile,
  IconBrain,
  IconSparkles,
  IconNote,
  IconPlayerPlay,
  IconFileText,
  IconChevronRight,
} from "@tabler/icons-react";

const PATIENT = {
  name: "Sarah K.",
  age: 35,
  sex: "F",
  ref: "Self-referred · Aug 4, 2025",
  primary: "Generalised anxiety · Sleep disruption",
};

const VITALS = [
  { icon: IconHeartbeat, label: "GAD-7", value: "12", scale: "/ 21", color: "#F59E0B", trend: "↓ 2" },
  { icon: IconMoodSmile, label: "PHQ-9", value: "9", scale: "/ 27", color: "#10B981", trend: "↓ 4" },
  { icon: IconBrain, label: "Sleep hrs", value: "5.8", scale: "avg", color: "#10B981", trend: "↑ 1.2" },
];

const HISTORY = [
  { date: "Aug 27", note: "Session 4 — discussed work boundaries", who: "Dr. Eliahu" },
  { date: "Aug 20", note: "Session 3 — sleep diary review", who: "Dr. Eliahu" },
  { date: "Aug 13", note: "Session 2 — CBT introduction", who: "Dr. Eliahu" },
  { date: "Aug 6", note: "Session 1 — intake + assessment", who: "Dr. Eliahu" },
];

export function ScreenPatient() {
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
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "200px 1fr" }}>
        {/* Sidebar — quieter than Kova's */}
        <aside
          className="flex flex-col border-r"
          style={{ background: "#020A06", borderColor: "rgba(16,185,129,0.10)" }}
        >
          <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(16,185,129,0.10)" }}>
            <div className="inline-flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-md"
                style={{
                  background: "linear-gradient(135deg,#10B981 0%,#047857 100%)",
                }}
              >
                <span className="text-white text-[11px] font-serif italic">s</span>
              </span>
              <div>
                <div className="text-white text-[13px] tracking-tight">Serō</div>
                <div className="text-[#5EAD8E] text-[9.5px] tracking-wider">Clinic</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 py-4 px-3 space-y-1 text-[12px]">
            {[
              ["Today", true],
              ["Patients", false],
              ["Intakes", false, 4],
              ["Sessions", false],
              ["Charts", false],
              ["Settings", false],
            ].map(([label, active, badge]) => (
              <div
                key={label as string}
                className="flex items-center gap-2 px-2.5 py-2 rounded-md"
                style={
                  active
                    ? {
                        background: "rgba(16,185,129,0.08)",
                        boxShadow: "inset 2px 0 0 #10B981",
                        color: "#A7F3D0",
                      }
                    : { color: "#7AB29A" }
                }
              >
                <span className="flex-1">{label as string}</span>
                {badge !== undefined && badge !== false && (
                  <span
                    className="text-[9px] tabular-nums px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(16,185,129,0.10)", color: "#A7F3D0" }}
                  >
                    {String(badge)}
                  </span>
                )}
              </div>
            ))}
          </nav>

          <div className="px-4 py-4 border-t" style={{ borderColor: "rgba(16,185,129,0.10)" }}>
            <div className="text-[#5EAD8E] text-[9px] tracking-[0.18em] uppercase mb-1.5">
              Today
            </div>
            <div className="text-[#cfe8d6] text-[11.5px]">5 patients</div>
            <div className="text-[#A7F3D0] text-[10px] mt-0.5">2 left · 14:00 · 15:30</div>
          </div>
        </aside>

        {/* Main */}
        <main className="overflow-hidden flex flex-col">
          {/* Patient header — generous */}
          <div className="px-9 pt-8 pb-6 border-b" style={{ borderColor: "rgba(16,185,129,0.10)" }}>
            <div className="text-[#5EAD8E] text-[10px] tracking-[0.22em] uppercase mb-3">
              Patient session · 2:00 PM
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1
                  className="text-white tracking-tight"
                  style={{
                    fontSize: 32,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {PATIENT.name}
                </h1>
                <div className="text-[#9FCEB9] text-[12.5px] mt-1.5">
                  {PATIENT.age} · {PATIENT.sex} · {PATIENT.ref}
                </div>
                <div className="text-[#A7F3D0] text-[12px] mt-2 italic">
                  Primary: {PATIENT.primary}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-md"
                  style={{
                    background: "rgba(16,185,129,0.06)",
                    border: "1px solid rgba(16,185,129,0.18)",
                    color: "#A7F3D0",
                  }}
                >
                  <IconFileText size={11} stroke={1.5} />
                  Open chart
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-md font-medium"
                  style={{
                    background: "linear-gradient(135deg,#10B981,#047857)",
                    color: "#022A1B",
                  }}
                >
                  <IconPlayerPlay size={11} stroke={2} />
                  Start session
                </span>
              </div>
            </div>
          </div>

          {/* Body grid */}
          <div className="flex-1 grid grid-cols-[1fr_320px]" style={{ minHeight: 0 }}>
            {/* Left: assessment + AI brief */}
            <div className="overflow-hidden px-9 py-7 space-y-7">
              {/* Vitals row */}
              <div>
                <div className="text-[#5EAD8E] text-[10px] tracking-[0.22em] uppercase mb-3">
                  Latest scores
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {VITALS.map((v) => {
                    const Icon = v.icon;
                    return (
                      <div
                        key={v.label}
                        className="rounded-xl px-4 py-3.5"
                        style={{
                          background: "#091C13",
                          border: "1px solid rgba(16,185,129,0.10)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <Icon
                            size={14}
                            stroke={1.5}
                            style={{ color: v.color }}
                          />
                          <span
                            className="text-[10px] font-medium"
                            style={{ color: v.color }}
                          >
                            {v.trend}
                          </span>
                        </div>
                        <div className="mt-3 flex items-baseline gap-1.5">
                          <span className="text-white text-[24px] font-light tabular-nums tracking-tight">
                            {v.value}
                          </span>
                          <span className="text-[#5EAD8E] text-[10.5px]">
                            {v.scale}
                          </span>
                        </div>
                        <div className="text-[#7AB29A] text-[10.5px] mt-1 uppercase tracking-[0.16em]">
                          {v.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI Brief — the focal point */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(16,185,129,0.02) 70%)",
                  border: "1px solid rgba(16,185,129,0.20)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <m.span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-md"
                    style={{
                      background: "rgba(16,185,129,0.18)",
                      border: "1px solid rgba(16,185,129,0.35)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(16,185,129,0)",
                        "0 0 12px rgba(16,185,129,0.45)",
                        "0 0 0 rgba(16,185,129,0)",
                      ],
                    }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  >
                    <IconSparkles size={11} stroke={1.8} style={{ color: "#A7F3D0" }} />
                  </m.span>
                  <span className="text-white text-[12.5px] font-medium tracking-tight">
                    Session brief
                  </span>
                  <span className="text-[#5EAD8E] text-[10.5px] ml-auto">
                    Prepared 9:14 am · reviewed by you
                  </span>
                </div>

                <p
                  className="text-[#E6F4EC] leading-[1.7] tracking-tight"
                  style={{ fontSize: 14.5 }}
                >
                  Sarah reports she slept{" "}
                  <span style={{ color: "#A7F3D0" }}>5–6 hours / night this week</span>,
                  up from a self-reported 4 hours last month. The sleep diary
                  she completed Tuesday flags two consecutive nights of
                  ruminative thinking before bed — both followed a difficult
                  team meeting on Monday.
                </p>
                <p
                  className="text-[#E6F4EC] leading-[1.7] tracking-tight mt-3"
                  style={{ fontSize: 14.5 }}
                >
                  Her GAD-7 score is{" "}
                  <span style={{ color: "#A7F3D0" }}>down 2 from baseline</span>{" "}
                  but still in moderate range. Suggested focus areas — work
                  boundary scripting, evening wind-down routine, and a
                  follow-up check on caffeine intake (last raised in session 2).
                </p>

                <div className="mt-5 pt-4 flex flex-wrap gap-2" style={{ borderTop: "1px solid rgba(16,185,129,0.12)" }}>
                  <span
                    className="text-[10.5px] px-2.5 py-1 rounded-full inline-flex items-center gap-1"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      color: "#A7F3D0",
                      border: "1px solid rgba(16,185,129,0.20)",
                    }}
                  >
                    <IconSparkles size={9} stroke={1.8} /> Open sleep diary
                  </span>
                  <span
                    className="text-[10.5px] px-2.5 py-1 rounded-full inline-flex items-center gap-1"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      color: "#A7F3D0",
                      border: "1px solid rgba(16,185,129,0.20)",
                    }}
                  >
                    <IconSparkles size={9} stroke={1.8} /> Review session 2 notes
                  </span>
                  <span
                    className="text-[10.5px] px-2.5 py-1 rounded-full inline-flex items-center gap-1"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      color: "#A7F3D0",
                      border: "1px solid rgba(16,185,129,0.20)",
                    }}
                  >
                    <IconSparkles size={9} stroke={1.8} /> Draft tonight-plan worksheet
                  </span>
                </div>
              </div>

              {/* Notes prompt */}
              <div className="flex items-center gap-3 text-[#7AB29A] text-[11.5px]">
                <IconNote size={13} stroke={1.5} className="text-[#5EAD8E]" />
                Session notes will populate here as you speak. Sero never
                writes the clinical impression for you.
              </div>
            </div>

            {/* Right: timeline */}
            <aside
              className="border-l overflow-hidden px-6 py-7"
              style={{ borderColor: "rgba(16,185,129,0.10)", background: "rgba(2,10,6,0.6)" }}
            >
              <div className="text-[#5EAD8E] text-[10px] tracking-[0.22em] uppercase mb-4">
                Sessions
              </div>
              <div className="space-y-4 relative">
                <span
                  aria-hidden="true"
                  className="absolute left-[6px] top-2 bottom-2 w-px"
                  style={{ background: "rgba(16,185,129,0.18)" }}
                />
                {HISTORY.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 relative">
                    <span
                      className="inline-block w-3 h-3 mt-1 rounded-full shrink-0"
                      style={{
                        background: i === 0 ? "#10B981" : "rgba(16,185,129,0.25)",
                        border: i === 0 ? "2px solid #022A1B" : "2px solid #022A1B",
                      }}
                    />
                    <div className="flex-1">
                      <div className="text-[#A7F3D0] text-[10px] tracking-[0.16em] uppercase">
                        {h.date}
                      </div>
                      <div className="text-[#E6F4EC] text-[12px] mt-1 leading-snug">
                        {h.note}
                      </div>
                      <div className="text-[#5EAD8E] text-[10px] mt-1">{h.who}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-7 pt-5 border-t"
                style={{ borderColor: "rgba(16,185,129,0.12)" }}
              >
                <div className="text-[#5EAD8E] text-[10px] tracking-[0.22em] uppercase mb-2">
                  Next
                </div>
                <div className="rounded-lg p-3"
                  style={{
                    background: "rgba(16,185,129,0.06)",
                    border: "1px solid rgba(16,185,129,0.18)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <IconCalendarStats size={12} stroke={1.5} className="text-emerald-300" />
                    <span className="text-[11.5px] text-white">Sep 3 · 14:00</span>
                  </div>
                  <div className="text-[#7AB29A] text-[10.5px] mt-1.5">
                    Pre-session check-in sent on Sep 1
                  </div>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] text-emerald-300">
                    Open calendar
                    <IconChevronRight size={9} stroke={2} />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

void IconStethoscope;
