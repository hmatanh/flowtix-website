"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { IconPlus, IconChevronDown } from "@tabler/icons-react";
import { type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { SeroLogo } from "@/components/clients/logos/SeroLogo";
import {
  ProjectBreadcrumb,
  ProjectNextLink,
  ProjectBottomCTA,
} from "@/components/projects/ProjectFooter";
import { ScreenPatient } from "@/components/clients/sero/ScreenPatient";
import { ScreenIntake } from "@/components/clients/sero/ScreenIntake";
import { ScreenMobile } from "@/components/clients/sero/ScreenMobile";

const PALETTE = [
  { hex: "#10B981", name: "Serō Green", role: "Primary" },
  { hex: "#051A12", name: "Night", role: "Background" },
  { hex: "#ECFDF5", name: "Fresh", role: "Surface" },
  { hex: "#A7F3D0", name: "Mist", role: "Accent" },
  { hex: "#065F46", name: "Forest", role: "Deep" },
];

const STATS = [
  { value: "22 hrs", label: "Saved per week across the team" },
  { value: "4 min", label: "Avg intake processing (was 25 min)" },
  { value: "41%", label: "Reduction in appointment no-shows" },
  { value: "6 wks", label: "From first meeting to live system" },
];

const CHALLENGES = [
  {
    num: "01",
    title: "Intake chaos",
    body: "Paper forms. Manual data entry. A 25-minute intake process before the doctor even walked in.",
  },
  {
    num: "02",
    title: "No-show blind spots",
    body: "32% no-show rate with no predictive system. Appointment slots wasted. Revenue lost silently.",
  },
  {
    num: "03",
    title: "Disconnected tools",
    body: "Calendar here, patient records there, billing somewhere else. Practitioners spent evenings catching up on admin.",
  },
];

type Solution = {
  num: string;
  title: string;
  body: string;
  visual?: "intake" | "patient" | "mobile" | "calendar" | "flow";
};

const SOLUTIONS: Solution[] = [
  {
    num: "01",
    title: "AI Patient Intake Processing",
    body: "Intake forms are read by Claude, structured into a clinical summary, urgency-flagged, and routed to the right practitioner before the patient walks in. Practitioners review in three minutes — not twenty-five.",
    visual: "intake",
  },
  {
    num: "02",
    title: "Appointment Intelligence System",
    body: "The system predicts no-shows from booking patterns and patient history, sends adaptive reminders, and automatically offers freed slots to waitlisted patients. No-show rate dropped 41% in 30 days.",
    visual: "calendar",
  },
  {
    num: "03",
    title: "Practitioner Mobile Application",
    body: "A mobile-first practitioner app for between-patient moments. Schedule, AI-prepared summaries, and quick actions — all designed for one-handed use during a busy day.",
    visual: "mobile",
  },
  {
    num: "04",
    title: "Admin Web Portal",
    body: "A unified web portal for the practice admin. Bookings, billing, patient records, AI alerts — every operational surface in one place.",
    visual: "patient",
  },
  {
    num: "05",
    title: "Automated Communication Flows",
    body: "Reminders, follow-ups, satisfaction surveys — all branded, all on-time, all without anyone clicking send.",
    visual: "flow",
  },
];

function FlowDiagram() {
  const steps = ["Booking", "Pre-visit AI", "Visit", "Follow-up", "Survey"];
  return (
    <div
      className="rounded-2xl p-5 border"
      style={{ background: "#040F09", borderColor: "#0A2E1E" }}
    >
      <div className="text-[#0A2E1E] text-[10px] tracking-widest uppercase mb-4">
        Communication automation
      </div>
      <div className="grid grid-cols-5 gap-2">
        {steps.map((s, i) => (
          <div key={s} className="text-center">
            <div
              className="rounded-lg py-2 text-[10px]"
              style={{
                background: "#051A12",
                border: "1px solid rgba(16,185,129,0.18)",
                color: "#A7F3D0",
              }}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block text-[#0A2E1E] text-xs mt-1">↓</div>
            )}
          </div>
        ))}
      </div>
      <div className="text-[#4a8a70] text-[10px] mt-3 leading-relaxed">
        Every patient flows through 5 automated communication touchpoints — none
        of them written manually.
      </div>
    </div>
  );
}

function CalendarVisual() {
  return (
    <div
      className="rounded-2xl p-5 border"
      style={{ background: "#040F09", borderColor: "#0A2E1E" }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-white text-sm font-semibold">Today · May 22</div>
        <div className="text-[10px]" style={{ color: "#10B981" }}>
          AI-optimized
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div
            key={d}
            className="text-[8px] text-center uppercase tracking-wider"
            style={{ color: "#0A2E1E" }}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }).map((_, i) => {
          const status =
            i === 6 ? "today" : [2, 4, 9, 12].includes(i) ? "filled" : "open";
          return (
            <div
              key={i}
              className="aspect-square rounded text-[9px] flex items-center justify-center"
              style={
                status === "today"
                  ? {
                      background: "rgba(16,185,129,0.25)",
                      color: "#fff",
                      border: "1px solid #10B981",
                    }
                  : status === "filled"
                  ? {
                      background: "rgba(16,185,129,0.12)",
                      color: "#A7F3D0",
                    }
                  : { color: "#0A2E1E", background: "rgba(255,255,255,0.02)" }
              }
            >
              {((i + 15) % 30) + 1}
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-[10px]" style={{ color: "#4a8a70" }}>
        No-show rate · <span className="text-emerald-400 font-semibold">2.1%</span> (down from 32%)
      </div>
    </div>
  );
}

function SolutionVisual({ kind }: { kind: Solution["visual"] }) {
  if (kind === "flow") return <FlowDiagram />;
  if (kind === "calendar") return <CalendarVisual />;
  if (kind === "mobile") {
    return (
      <div className="flex justify-center">
        <div
          className="rounded-[40px] border-4 p-3 w-56"
          style={{ borderColor: "#0A2E1E", background: "#1a1a1a" }}
        >
          <div className="rounded-[28px] overflow-hidden aspect-[9/19.5]">
            <ScreenMobile />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="rounded-2xl p-3 border"
      style={{ background: "#040F09", borderColor: "#0A2E1E" }}
    >
      <div className="aspect-[16/10] rounded-xl overflow-hidden">
        {kind === "intake" && <ScreenIntake />}
        {kind === "patient" && <ScreenPatient />}
      </div>
    </div>
  );
}

function SolutionAccordion({ s, index }: { s: Solution; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b py-6" style={{ borderColor: "#0A2E1E" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left flex items-center gap-6 group"
        aria-expanded={open}
      >
        <span
          className="text-[10px] font-mono tracking-widest shrink-0"
          style={{ color: "#10B981" }}
        >
          {s.num}
        </span>
        <span className="flex-1 text-white text-lg lg:text-xl font-semibold tracking-tight group-hover:text-white">
          {s.title}
        </span>
        <m.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
          style={{ color: open ? "#10B981" : "#4a8a70" }}
        >
          <IconPlus size={22} stroke={1.5} />
        </m.span>
      </button>
      <m.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 pl-0 lg:pl-16">
          <p className="text-[#4a8a70] leading-relaxed">{s.body}</p>
          {s.visual && <SolutionVisual kind={s.visual} />}
        </div>
      </m.div>
    </div>
  );
}

export function SeroView({ project }: { project: Project }) {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 overflow-hidden"
        style={{ background: "#000" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 60%)",
            filter: "blur(140px)",
          }}
        />

        {/* Three horizontal lines above logo */}
        <div className="absolute top-32 left-0 right-0 space-y-3 pointer-events-none">
          {[0.06, 0.04, 0.02].map((opacity, i) => (
            <m.div
              key={i}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity }}
              transition={{ delay: i * 0.15, duration: 1.2, ease: "easeOut" }}
              className="h-px origin-left"
              style={{ background: "#10B981" }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ProjectBreadcrumb project={project} />

          <FadeIn>
            <div
              className="flex justify-center mt-6 mb-8"
              style={{ filter: "drop-shadow(0 0 24px rgba(16,185,129,0.3))" }}
            >
              <SeroLogo height={64} />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-[10px] tracking-widest uppercase" style={{ color: "#0A2E1E" }}>
              Case Study · 2025
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              className="font-black text-white leading-tight tracking-tight mt-4"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              We gave a 6-person clinic
              <br />
              back{" "}
              <span style={{ color: "#10B981" }}>22 hours every week</span>.
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[#4a8a70] text-lg lg:text-xl leading-relaxed mt-7 max-w-2xl mx-auto">
              SERŌ is a digital health platform for independent practitioners.
              They needed AI that could handle patient intake, reduce no-shows,
              and give doctors time to do what they trained for: care.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {[
                "Brand Identity",
                "Mobile UI",
                "AI Automation",
                "Web Portal",
                "Design System",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-4 py-1.5 rounded-full"
                  style={{ color: "#4a8a70", border: "1px solid #0A2E1E" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-16 text-[10px]" style={{ color: "#0A2E1E" }}>
              <m.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                ↓ Explore the project
              </m.span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 2. QUICK STATS ===== */}
      <section
        className="section-contain border-y py-10 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040F09", borderColor: "#0A2E1E" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl lg:text-3xl font-black"
                style={{ color: "#10B981" }}
              >
                {s.value}
              </div>
              <div className="text-[#4a8a70] text-xs mt-2 leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. BRAND IDENTITY ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl border p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center"
              style={{ background: "#040F09", borderColor: "#0A2E1E" }}>
              <div>
                <SeroLogo height={56} />
                <div className="text-white text-3xl font-bold mt-6 tracking-tight">
                  Care, Simplified.
                </div>
                <div className="text-[#4a8a70] text-sm mt-3">
                  Brand identity refresh · 2025
                </div>
              </div>
              <div>
                <div className="text-[#0A2E1E] text-[10px] tracking-widest uppercase mb-3">
                  The Brief
                </div>
                <p className="text-[#cccccc] leading-relaxed">
                  SERŌ&apos;s previous branding was clinical to the point of
                  being cold. Patients found it intimidating. We redesigned the
                  identity around warmth and competence — approachable enough
                  for anxious patients, credible enough for discerning
                  practitioners.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <FadeIn>
              <div
                className="rounded-2xl border p-7 h-full"
                style={{ background: "#040F09", borderColor: "#0A2E1E" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-5"
                  style={{ color: "#0A2E1E" }}
                >
                  Colors
                </div>
                <div className="space-y-2.5">
                  {PALETTE.map((c) => (
                    <div key={c.hex} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg shrink-0 border"
                        style={{
                          background: c.hex,
                          borderColor: "rgba(255,255,255,0.06)",
                        }}
                      />
                      <div className="min-w-0">
                        <div className="text-[#cccccc] text-xs font-medium">
                          {c.name}
                        </div>
                        <div
                          className="text-[10px] font-mono"
                          style={{ color: "#4a8a70" }}
                        >
                          {c.hex}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div
                className="rounded-2xl border p-7 h-full flex flex-col"
                style={{ background: "#040F09", borderColor: "#0A2E1E" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: "#0A2E1E" }}
                >
                  Typography
                </div>
                <div
                  className="font-medium leading-none"
                  style={{ color: "#10B981", fontSize: 96 }}
                >
                  Aa
                </div>
                <div className="text-[#4a8a70] text-sm mt-3">Inter · Medium</div>
                <p className="text-[#cccccc] text-base mt-auto pt-6 leading-relaxed">
                  Your care is ready.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div
                className="rounded-2xl border p-7 h-full"
                style={{ background: "#040F09", borderColor: "#0A2E1E" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: "#0A2E1E" }}
                >
                  Voice & Tone
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <div
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "#10B981" }}
                    >
                      DO
                    </div>
                    <div className="text-[#cccccc] text-sm">
                      &ldquo;Your care is ready.&rdquo;
                    </div>
                    <div className="text-[#4a8a70] text-[10px] mt-0.5">
                      Warm. Direct.
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "#7a1a1a" }}
                    >
                      DON&apos;T
                    </div>
                    <div className="text-[#666] text-sm">
                      &ldquo;Patient scheduling system activated.&rdquo;
                    </div>
                    <div className="text-[#4a8a70] text-[10px] mt-0.5">
                      Cold. Robotic.
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 4. THE CHALLENGE ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040F09" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p
              className="text-2xl lg:text-3xl font-light italic text-center leading-relaxed"
              style={{ color: "#2d6b52" }}
            >
              &ldquo;Six practitioners. Four hundred patients a month.
              <br className="hidden lg:block" />
              Zero automated systems.&rdquo;
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {CHALLENGES.map((c, i) => (
              <m.div
                key={c.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-t-2 pt-6"
                style={{ borderColor: "#10B981" }}
              >
                <div
                  className="font-black leading-none"
                  style={{ color: "#0A2E1E", fontSize: 56 }}
                >
                  {c.num}
                </div>
                <h3 className="text-white text-xl font-bold mt-3 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-[#4a8a70] text-sm leading-relaxed mt-3">
                  {c.body}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. OUR SOLUTION (accordion) ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#0A2E1E" }}
            >
              Our Solution
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Five systems. One calm clinic.
            </h2>
          </FadeIn>

          <div className="mt-12">
            {SOLUTIONS.map((s, i) => (
              <SolutionAccordion key={s.num} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. DESIGN SHOWCASE (mobile-first) ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040F09" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: "#0A2E1E" }}
              >
                Design Showcase
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Three screens that changed how SERŌ works.
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-col items-center gap-10">
            <FadeIn>
              <div
                className="rounded-[44px] border-4 p-3 w-64"
                style={{ borderColor: "#0A2E1E", background: "#1a1a1a" }}
              >
                <div className="rounded-[34px] overflow-hidden aspect-[9/19.5]">
                  <ScreenMobile />
                </div>
              </div>
              <div className="text-center mt-5">
                <div className="text-white text-sm font-semibold">
                  Patient mobile app
                </div>
                <div className="text-[#4a8a70] text-xs mt-1">
                  What patients see · iOS &amp; Android
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
              <FadeIn delay={0.05}>
                <div
                  className="rounded-2xl p-3 border"
                  style={{ background: "#040F09", borderColor: "#0A2E1E" }}
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <ScreenPatient />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-white text-sm font-semibold">
                    Practitioner dashboard
                  </div>
                  <div className="text-[#4a8a70] text-xs mt-1">
                    Morning briefing in one screen
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div
                  className="rounded-2xl p-3 border"
                  style={{ background: "#040F09", borderColor: "#0A2E1E" }}
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <ScreenIntake />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-white text-sm font-semibold">
                    AI intake review
                  </div>
                  <div className="text-[#4a8a70] text-xs mt-1">
                    25 minutes to 3 — without losing detail
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. PROCESS ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#0A2E1E" }}
            >
              Process
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              We started with practitioners, not tech.
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-5">
            {[
              {
                phase: "Phase 01 · Weeks 1–2",
                title: "Listen",
                body: "We shadowed two practitioners for a day each. We sat in the waiting room. We talked to patients. We mapped every friction point from first call to checkout.",
                callout: "Key insight: 85% of admin time happened before and after patient contact — not during.",
              },
              {
                phase: "Phase 02 · Weeks 3–4",
                title: "Design",
                body: "We designed 47 screens before writing a single line of code. Every interaction reviewed with Dr. Vidal personally — corrections incorporated within 24 hours.",
                callout: null,
              },
              {
                phase: "Phase 03 · Weeks 5–6",
                title: "Build & Launch",
                body: "Parallel build: mobile UI and web portal simultaneously. Soft launch with 2 practitioners in week 5. Full launch with the entire clinic in week 6.",
                callout: null,
              },
            ].map((p, i) => (
              <m.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border p-8"
                style={{ background: "#051A12", borderColor: "#0A2E1E" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#10B981" }}
                >
                  {p.phase}
                </div>
                <h3 className="text-white text-2xl font-bold mt-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-[#4a8a70] leading-relaxed mt-4 max-w-2xl">
                  {p.body}
                </p>
                {p.callout && (
                  <div
                    className="mt-5 rounded-lg p-4 text-sm"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      color: "#A7F3D0",
                      border: "1px solid rgba(16,185,129,0.18)",
                    }}
                  >
                    {p.callout}
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. RESULTS ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040F09" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Results that justified the project in 30 days.
            </h2>
          </FadeIn>

          <div className="mt-10 space-y-5">
            <m.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="pl-8 py-8"
              style={{
                background: "#040F09",
                borderLeft: "4px solid #10B981",
              }}
            >
              <div
                className="font-black leading-none"
                style={{
                  color: "#10B981",
                  fontSize: "clamp(56px, 7vw, 96px)",
                }}
              >
                22 hours
              </div>
              <div className="text-white text-lg mt-3">
                Saved every week across the 6-person team.
              </div>
              <div className="text-[#4a8a70] text-sm mt-2">
                Breakdown — Intake: 8 hrs · Admin: 9 hrs · Follow-ups: 5 hrs
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="pl-8 py-8"
              style={{
                background: "#040F09",
                borderLeft: "4px solid #10B981",
              }}
            >
              <div
                className="font-black leading-none"
                style={{
                  color: "#10B981",
                  fontSize: "clamp(56px, 7vw, 96px)",
                }}
              >
                41%
              </div>
              <div className="text-white text-lg mt-3">
                Drop in no-show rate in the first month.
              </div>
              <div className="text-[#4a8a70] text-sm mt-2">
                Revenue recovered: ~$4,200/month in recaptured slots.
              </div>
            </m.div>
          </div>

          <div
            className="rounded-2xl p-10 mt-12 border"
            style={{ background: "#051A12", borderColor: "#0A2E1E" }}
          >
            <p className="text-[#cccccc] text-lg lg:text-xl leading-relaxed italic font-light">
              &ldquo;For the first time in 8 years of practice, I leave the
              office at 5pm. The AI handles everything I used to take home
              with me.&rdquo;
            </p>
            <div className="text-[#4a8a70] text-sm mt-6">
              — Dr. Ames Vidal, Clinical Director · SERŌ Health
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. TECH STACK ===== */}
      <section
        className="section-contain py-16 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: "#0A2E1E" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="text-[10px] tracking-widest uppercase mb-5"
            style={{ color: "#0A2E1E" }}
          >
            Technologies used
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {project.stack.concat(["Supabase", "Twilio"]).map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full"
                style={{
                  background: "#040F09",
                  color: "#4a8a70",
                  border: "1px solid #0A2E1E",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectNextLink project={project} />
      <ProjectBottomCTA project={project} />
    </>
  );
}
