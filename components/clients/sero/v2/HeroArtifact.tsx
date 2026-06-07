"use client";

/**
 * Sero V2 — Hero Artifact
 *
 * The opening "specimen" image of the case. A clinician's calendar
 * comparing a before-week (all admin slots) to an after-week (the same
 * slots returned to patient sessions). Reads like a printed editorial
 * page — calm, slow, evidence-led.
 */

import { m } from "framer-motion";
import {
  IconStethoscope,
  IconFile,
  IconSparkles,
} from "@tabler/icons-react";

type Slot = { from: string; to: string; kind: "patient" | "admin" | "break" };

const BEFORE_WEEK: { day: string; slots: Slot[] }[] = [
  {
    day: "Mon",
    slots: [
      { from: "09:00", to: "10:00", kind: "admin" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "admin" },
      { from: "14:00", to: "15:00", kind: "patient" },
      { from: "16:00", to: "17:00", kind: "admin" },
    ],
  },
  {
    day: "Tue",
    slots: [
      { from: "09:00", to: "10:00", kind: "admin" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "admin" },
      { from: "14:00", to: "15:00", kind: "admin" },
      { from: "16:00", to: "17:00", kind: "patient" },
    ],
  },
  {
    day: "Wed",
    slots: [
      { from: "09:00", to: "10:00", kind: "admin" },
      { from: "10:00", to: "11:00", kind: "admin" },
      { from: "11:00", to: "12:00", kind: "patient" },
      { from: "14:00", to: "15:00", kind: "admin" },
      { from: "16:00", to: "17:00", kind: "admin" },
    ],
  },
  {
    day: "Thu",
    slots: [
      { from: "09:00", to: "10:00", kind: "admin" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "admin" },
      { from: "14:00", to: "15:00", kind: "patient" },
      { from: "16:00", to: "17:00", kind: "admin" },
    ],
  },
  {
    day: "Fri",
    slots: [
      { from: "09:00", to: "10:00", kind: "admin" },
      { from: "10:00", to: "11:00", kind: "admin" },
      { from: "11:00", to: "12:00", kind: "patient" },
      { from: "14:00", to: "15:00", kind: "admin" },
      { from: "16:00", to: "17:00", kind: "patient" },
    ],
  },
];

const AFTER_WEEK: { day: string; slots: Slot[] }[] = [
  {
    day: "Mon",
    slots: [
      { from: "09:00", to: "10:00", kind: "patient" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "patient" },
      { from: "14:00", to: "15:00", kind: "patient" },
      { from: "16:00", to: "17:00", kind: "patient" },
    ],
  },
  {
    day: "Tue",
    slots: [
      { from: "09:00", to: "10:00", kind: "patient" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "break" },
      { from: "14:00", to: "15:00", kind: "patient" },
      { from: "16:00", to: "17:00", kind: "patient" },
    ],
  },
  {
    day: "Wed",
    slots: [
      { from: "09:00", to: "10:00", kind: "patient" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "patient" },
      { from: "14:00", to: "15:00", kind: "patient" },
      { from: "16:00", to: "17:00", kind: "patient" },
    ],
  },
  {
    day: "Thu",
    slots: [
      { from: "09:00", to: "10:00", kind: "patient" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "patient" },
      { from: "14:00", to: "15:00", kind: "patient" },
      { from: "16:00", to: "17:00", kind: "break" },
    ],
  },
  {
    day: "Fri",
    slots: [
      { from: "09:00", to: "10:00", kind: "patient" },
      { from: "10:00", to: "11:00", kind: "patient" },
      { from: "11:00", to: "12:00", kind: "patient" },
      { from: "14:00", to: "15:00", kind: "patient" },
      { from: "16:00", to: "17:00", kind: "patient" },
    ],
  },
];

function SlotStyle(kind: Slot["kind"]): React.CSSProperties {
  if (kind === "patient")
    return {
      background:
        "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.05) 100%)",
      border: "1px solid rgba(16,185,129,0.30)",
      color: "#A7F3D0",
    };
  if (kind === "admin")
    return {
      background: "rgba(148,163,184,0.06)",
      border: "1px dashed rgba(148,163,184,0.30)",
      color: "#94A3B8",
    };
  return {
    background: "rgba(245,158,11,0.06)",
    border: "1px dashed rgba(245,158,11,0.30)",
    color: "#FBBF24",
  };
}

function SlotLabel(kind: Slot["kind"]) {
  if (kind === "patient") return "Patient";
  if (kind === "admin") return "Admin";
  return "Break";
}

function Calendar({ data, label }: { data: typeof BEFORE_WEEK; label: string }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex-1 min-w-0"
      style={{
        background: "rgba(2,10,6,0.5)",
        border: "1px solid rgba(16,185,129,0.10)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="px-4 sm:px-5 py-3 border-b flex items-center justify-between"
        style={{ borderColor: "rgba(16,185,129,0.10)" }}
      >
        <span className="text-[#5EAD8E] text-[10px] tracking-[0.22em] uppercase">
          {label}
        </span>
        <span className="text-[#9FCEB9] text-[10.5px]">Week 36 · 5 days</span>
      </div>

      <div className="grid grid-cols-5 gap-px" style={{ background: "rgba(16,185,129,0.06)" }}>
        {data.map((day) => (
          <div
            key={day.day}
            className="flex flex-col gap-1 p-1.5 sm:p-2"
            style={{ background: "rgba(2,10,6,0.65)" }}
          >
            <div className="text-[#5EAD8E] text-[9px] tracking-[0.22em] uppercase text-center mb-1">
              {day.day}
            </div>
            {day.slots.map((slot, i) => (
              <div
                key={i}
                className="rounded-md px-1.5 py-1 text-[8.5px] sm:text-[9.5px] leading-tight"
                style={SlotStyle(slot.kind)}
              >
                <div className="font-medium tabular-nums">{slot.from}</div>
                <div className="opacity-80">{SlotLabel(slot.kind)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroArtifact() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 60%), linear-gradient(135deg, #06231A 0%, #03110A 60%, #02100A 100%)",
        color: "#E6F4EC",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/4 w-[60%] h-[60%] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative px-6 sm:px-10 py-8 sm:py-10">
        {/* Top label */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2">
            <m.span
              className="inline-flex items-center justify-center w-7 h-7 rounded-md"
              style={{
                background: "rgba(16,185,129,0.18)",
                border: "1px solid rgba(16,185,129,0.40)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(16,185,129,0)",
                  "0 0 16px rgba(16,185,129,0.6)",
                  "0 0 0 rgba(16,185,129,0)",
                ],
              }}
              transition={{ duration: 2.6, repeat: Infinity }}
            >
              <IconSparkles size={13} stroke={1.8} style={{ color: "#A7F3D0" }} />
            </m.span>
            <span className="text-white text-[13px] sm:text-[14px] font-medium tracking-tight">
              The week Dr. Bar-On got back
            </span>
            <span className="text-[#5EAD8E] text-[11px]">·</span>
            <span className="text-[#A7F3D0] text-[11px]">+22 hours returned</span>
          </div>
          <span className="text-[#5EAD8E] text-[10px] tracking-[0.22em] uppercase">
            Sero · clinic calendar
          </span>
        </div>

        {/* Two calendars side by side on lg; stacked on smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 sm:gap-6 items-stretch">
          <Calendar data={BEFORE_WEEK} label="Before · admin-heavy" />

          {/* Center divider */}
          <div className="flex lg:flex-col items-center justify-center gap-3 py-2 lg:py-0 lg:px-1">
            <div className="hidden lg:block flex-1 w-px" style={{ background: "rgba(16,185,129,0.15)" }} />
            <m.span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
                boxShadow: "0 6px 16px rgba(16,185,129,0.35)",
              }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-white text-[14px] font-medium leading-none">→</span>
            </m.span>
            <div className="hidden lg:block flex-1 w-px" style={{ background: "rgba(16,185,129,0.15)" }} />
          </div>

          <Calendar data={AFTER_WEEK} label="After · patient-led" />
        </div>

        {/* Bottom strip */}
        <div className="mt-8 sm:mt-10 pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6" style={{ borderColor: "rgba(16,185,129,0.10)" }}>
          {[
            {
              icon: IconStethoscope,
              label: "Sessions / week",
              before: "12",
              after: "23",
            },
            {
              icon: IconFile,
              label: "Hours on admin",
              before: "13",
              after: "1",
            },
            {
              icon: IconSparkles,
              label: "Notes auto-prepared",
              before: "0",
              after: "100%",
            },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-4">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                  style={{
                    background: "rgba(16,185,129,0.10)",
                    border: "1px solid rgba(16,185,129,0.18)",
                  }}
                >
                  <Icon size={14} stroke={1.5} className="text-emerald-300" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[#5EAD8E] text-[9.5px] uppercase tracking-[0.22em] mb-1">
                    {s.label}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#94A3B8] line-through text-[14px]">
                      {s.before}
                    </span>
                    <span className="text-[#5EAD8E]">→</span>
                    <span className="text-white text-[20px] font-medium tabular-nums">
                      {s.after}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
