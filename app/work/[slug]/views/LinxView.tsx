"use client";

import { m } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import { type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { LinxLogo } from "@/components/clients/logos/LinxLogo";
import {
  ProjectBreadcrumb,
  ProjectNextLink,
  ProjectBottomCTA,
} from "@/components/projects/ProjectFooter";
import { ScreenProposal } from "@/components/clients/linx/ScreenProposal";
import { ScreenDashboard } from "@/components/clients/linx/ScreenDashboard";
import { ScreenReport } from "@/components/clients/linx/ScreenReport";

const DELIVERIES = [
  "Brand refresh",
  "Proposal AI generator",
  "Reporting automation engine",
  "Agency operations dashboard",
  "Client-facing portal",
];

const STATS = [
  { value: "87 hrs", label: "Saved per month across the team" },
  { value: "45 min", label: "To write a full proposal (was 8 hours)" },
  { value: "23/23", label: "Client reports fully automated monthly" },
  { value: "71%", label: "Proposal win rate after AI adoption" },
];

const BEFORE_DAY = [
  { time: "08:00", task: "Brief arrives from client" },
  { time: "08:30", task: "Read and re-read brief (45 min)" },
  { time: "09:30", task: "Start proposal (3 hours)" },
  { time: "12:30", task: "Design proposal deck (1.5 hours)" },
  { time: "14:00", task: "Second team member reviews (1 hour)" },
  { time: "15:00", task: "Revisions (45 min)" },
  { time: "15:45", task: "Send proposal" },
];

const PAINS = [
  {
    title: "Proposals",
    detail: "47 hours/month on proposals alone",
    cost: "$4,700/mo at senior creative rate",
  },
  {
    title: "Reports",
    detail: "30 hours/month across all clients",
    cost: "$3,000/mo of director time",
  },
  {
    title: "Brief processing",
    detail: "12 hours/month chasing missing info",
    cost: "$1,200/mo of account time",
  },
];

const RESULTS_BARS = [
  { label: "Proposal writing", before: 47, after: 8 },
  { label: "Report generation", before: 30, after: 0 },
  { label: "Brief processing", before: 12, after: 0 },
  { label: "Dashboard admin", before: 8, after: 2 },
];

const PROCESS = [
  {
    weeks: "Weeks 1–2",
    title: "Discovery",
    body: "We spent 2 weeks NOT building anything. We mapped every workflow, counted every manual hour, interviewed every team member. Found 87 hours/month of waste.",
  },
  {
    weeks: "Week 3",
    title: "System Architecture",
    body: "Designed all 3 systems simultaneously on a whiteboard. LINX signed off on the architecture before we wrote a line of code.",
  },
  {
    weeks: "Weeks 4–5",
    title: "Build",
    body: "Proposal AI: 8 days. Reporting Engine: 6 days. Dashboard: 4 days. Everything integrated in the final 3 days.",
  },
  {
    weeks: "Week 6",
    title: "Training",
    body: "Trained Claude on 40 of LINX's best proposals. First-draft quality was immediately above their own threshold for sending.",
  },
  {
    weeks: "Week 7",
    title: "Handover",
    body: "Full team workshop. Documentation. 30-day support window. They were fully autonomous in 3 days.",
  },
];

function MarqueeBanner() {
  const items = [
    "Proposals: 8hrs → 45min",
    "Reports: automated",
    "Hours saved: 87/month",
    "Proposals won: +3 clients",
  ];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div
      className="border-b py-3 overflow-hidden"
      style={{
        background: "rgba(139,92,246,0.08)",
        borderColor: "rgba(139,92,246,0.2)",
      }}
    >
      <div className="marquee-track inline-flex whitespace-nowrap">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center text-xs tracking-wider"
            style={{ color: "#A78BFA" }}
          >
            <span className="mx-8">{t}</span>
            <span className="opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BarRow({ row, index }: { row: typeof RESULTS_BARS[number]; index: number }) {
  const saved = row.before - row.after;
  const beforePct = (row.before / 50) * 100;
  const afterPct = (row.after / 50) * 100;
  return (
    <m.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-[160px_1fr_80px] gap-4 items-center py-4 border-b last:border-b-0"
      style={{ borderColor: "rgba(139,92,246,0.1)" }}
    >
      <div className="text-white text-sm font-medium">{row.label}</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] w-12 shrink-0"
            style={{ color: "#6b4a8a" }}
          >
            Before
          </span>
          <div
            className="flex-1 h-3 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: `${beforePct}%` }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "rgba(139,92,246,0.25)" }}
            />
          </div>
          <span
            className="text-[10px] w-12 text-right tabular-nums"
            style={{ color: "#6b4a8a" }}
          >
            {row.before}h
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] w-12 shrink-0"
            style={{ color: "#A78BFA" }}
          >
            After
          </span>
          <div
            className="flex-1 h-3 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: `${afterPct}%` }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "#8B5CF6" }}
            />
          </div>
          <span
            className="text-[10px] w-12 text-right tabular-nums"
            style={{ color: "#A78BFA" }}
          >
            {row.after}h
          </span>
        </div>
      </div>
      <div
        className="text-lg font-bold text-right tabular-nums"
        style={{ color: "#A78BFA" }}
      >
        -{saved}h
      </div>
    </m.div>
  );
}

export function LinxView({ project }: { project: Project }) {
  return (
    <>
      {/* Top data banner */}
      <MarqueeBanner />

      {/* ===== 1. HERO — process forward ===== */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-20 overflow-hidden"
        style={{ background: "#080612" }}
      >
        <div
          className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.10), transparent 60%)",
            filter: "blur(160px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <ProjectBreadcrumb project={project} />

          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 mt-2 items-center">
            <div>
              <div
                className="text-[10px] tracking-widest uppercase"
                style={{ color: "#3a2a6a" }}
              >
                Case Study · {project.year}
              </div>

              <div className="mt-6 scale-[1.4] origin-left">
                <LinxLogo height={48} />
              </div>

              <h1
                className="font-black text-white leading-[1.05] tracking-tight mt-10"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                A 14-person creative agency
                <br />
                stopped working nights.
              </h1>

              <div
                className="text-2xl font-bold mt-4"
                style={{ color: "#8B5CF6" }}
              >
                16 hours per week. Returned.
              </div>

              <p
                className="text-[#6b5a8a] text-base leading-relaxed mt-6 max-w-md"
              >
                LINX is a full-service creative agency managing 23 clients.
                They were brilliant at creative work and drowning in admin.
                We automated the admin. The creative stayed human.
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -left-4 -top-4 font-black tracking-tighter leading-none pointer-events-none select-none"
                style={{
                  fontSize: "clamp(140px, 22vw, 240px)",
                  color: "#0F0C1A",
                }}
                aria-hidden="true"
              >
                16
              </div>
              <div className="relative pt-32 lg:pt-40">
                <div
                  className="text-[11px] tracking-widest uppercase"
                  style={{ color: "#3a2a6a" }}
                >
                  hours per week
                </div>
                <div className="text-[#6b5a8a] text-sm">
                  returned to the team
                </div>

                <div
                  className="mt-8 rounded-2xl border p-6"
                  style={{
                    background: "#12102A",
                    borderColor: "rgba(139,92,246,0.18)",
                  }}
                >
                  <div
                    className="text-[10px] tracking-widest uppercase mb-4"
                    style={{ color: "#6b4a8a" }}
                  >
                    Delivered
                  </div>
                  <ul className="space-y-2.5">
                    {DELIVERIES.map((d, i) => (
                      <m.li
                        key={d}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.35 }}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: "#DDD6FE" }}
                      >
                        <IconCheck
                          size={14}
                          stroke={2.5}
                          style={{ color: "#8B5CF6" }}
                        />
                        {d}
                      </m.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. QUICK STATS ===== */}
      <section
        className="section-contain border-y py-10 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0C0814", borderColor: "rgba(139,92,246,0.2)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl lg:text-4xl font-black tabular-nums"
                style={{ color: "#A78BFA" }}
              >
                {s.value}
              </div>
              <div className="text-[#6b5a8a] text-xs mt-2 leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. BRAND IDENTITY ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#3a2a6a" }}
            >
              Brand Refresh
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              LINX already had a strong brand. We made it sharper.
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn direction="right">
              <div
                className="rounded-2xl border p-8"
                style={{ background: "#0C0814", borderColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-6"
                  style={{ color: "#3a2a6a" }}
                >
                  Before
                </div>
                <div className="h-20 flex items-center">
                  <span
                    className="font-bold tracking-tight text-white opacity-70"
                    style={{ fontSize: 28 }}
                  >
                    LINX
                  </span>
                </div>
                <div className="text-[#6b5a8a] text-sm mt-6 italic leading-relaxed">
                  Worked fine. Just didn&apos;t say anything.
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div
                className="rounded-2xl border p-8"
                style={{
                  background: "#12102A",
                  borderColor: "rgba(139,92,246,0.25)",
                }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-6"
                  style={{ color: "#A78BFA" }}
                >
                  After
                </div>
                <div className="h-20 flex items-center">
                  <LinxLogo height={40} />
                </div>
                <div className="text-[#DDD6FE] text-sm mt-6 leading-relaxed">
                  The same confidence. The intellectual edge it was missing.
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div
              className="mt-10 rounded-2xl border p-8"
              style={{ background: "#0C0814", borderColor: "rgba(139,92,246,0.15)" }}
            >
              <div
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: "#3a2a6a" }}
              >
                The Mark's Story
              </div>
              <p className="text-[#DDD6FE] leading-relaxed max-w-3xl">
                The L represents their craft — straight lines, built with
                precision. The three violet dots represent what LINX does:
                connect people, brands, and ideas. A network in a logo.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="rounded-2xl border p-7"
              style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.15)" }}
            >
              <div
                className="text-[10px] tracking-widest uppercase mb-4"
                style={{ color: "#6b4a8a" }}
              >
                Color · Before
              </div>
              <div className="flex gap-2 mb-3">
                {["#444", "#666", "#aaa"].map((c) => (
                  <div
                    key={c}
                    className="w-10 h-10 rounded"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div className="text-[#6b5a8a] text-xs">
                Three generic grays. No hierarchy. No accent.
              </div>
            </div>
            <div
              className="rounded-2xl border p-7"
              style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.15)" }}
            >
              <div
                className="text-[10px] tracking-widest uppercase mb-4"
                style={{ color: "#A78BFA" }}
              >
                Color · After
              </div>
              <div className="flex gap-2 mb-3">
                {["#0C0814", "#12102A", "#8B5CF6", "#DDD6FE"].map((c) => (
                  <div
                    key={c}
                    className="w-10 h-10 rounded border"
                    style={{
                      background: c,
                      borderColor: "rgba(255,255,255,0.05)",
                    }}
                  />
                ))}
              </div>
              <div className="text-[#DDD6FE] text-xs">
                Dark purple base + violet accent. Clear hierarchy. Editorial.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. CHALLENGE — day in the life ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0C0814" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#3a2a6a" }}
            >
              The Challenge
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              8:00 AM at LINX — before we showed up.
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 max-w-2xl">
              <ul className="space-y-3">
                {BEFORE_DAY.map((step, i) => (
                  <m.li
                    key={step.time}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="grid grid-cols-[60px_1fr] gap-4 items-center"
                  >
                    <span
                      className="font-mono text-sm tabular-nums"
                      style={{ color: "#A78BFA" }}
                    >
                      {step.time}
                    </span>
                    <span className="text-[#DDD6FE] text-sm">{step.task}</span>
                  </m.li>
                ))}
              </ul>

              <div
                className="mt-8 pt-6 border-t space-y-1"
                style={{ borderColor: "rgba(139,92,246,0.2)" }}
              >
                <div className="text-white text-base">
                  → 7.75 hours. One proposal. One client.
                </div>
                <div className="text-[#A78BFA] text-base font-semibold">
                  → LINX sends 6 proposals per month.
                </div>
                <div className="text-[#DDD6FE] text-base font-bold">
                  → 47 hours per month. On proposals alone.
                </div>
              </div>

              <p className="text-[#6b5a8a] text-base mt-8 italic">
                And that&apos;s before you get to reports.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 space-y-3">
            {PAINS.map((p, i) => (
              <m.div
                key={p.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid grid-cols-[1fr_auto] gap-6 items-center pl-6 py-4"
                style={{
                  background: "#080612",
                  borderLeft: "2px solid #8B5CF6",
                }}
              >
                <div>
                  <div className="text-white text-sm font-semibold">
                    {p.title}
                  </div>
                  <div className="text-[#6b5a8a] text-sm">{p.detail}</div>
                </div>
                <div
                  className="text-sm font-mono font-semibold"
                  style={{ color: "#A78BFA" }}
                >
                  ≈ {p.cost}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. SOLUTION — 3 systems ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#3a2a6a" }}
            >
              Our Solution
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              We didn&apos;t automate creativity. We automated everything else.
            </h2>
          </FadeIn>

          {/* System 1 */}
          <FadeIn>
            <div className="mt-16">
              <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
                <div>
                  <div
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "#A78BFA" }}
                  >
                    System 01
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-2">
                    The Proposal AI
                  </h3>
                </div>
                <div className="text-[#A78BFA] text-sm">
                  47 seconds. Fully on-brand.
                </div>
              </div>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.18)" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenProposal />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* System 2 */}
          <FadeIn>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#A78BFA" }}
                >
                  System 02
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-2">
                  The Reporting Engine
                </h3>
                <p className="text-[#6b5a8a] mt-5 leading-relaxed max-w-md">
                  23 reports. Zero hours. Data pulled overnight from Meta,
                  Google Ads, and GA, written by Claude in LINX&apos;s tone, and
                  delivered as branded PDFs the morning of the first of the
                  month.
                </p>

                <div
                  className="mt-6 rounded-xl border p-5"
                  style={{
                    background: "#12102A",
                    borderColor: "rgba(139,92,246,0.18)",
                  }}
                >
                  <div
                    className="text-[10px] tracking-widest uppercase mb-3"
                    style={{ color: "#6b4a8a" }}
                  >
                    Data flow
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-[9px]">
                    {[
                      "GA",
                      "Meta",
                      "Google Ads",
                      "n8n + Claude",
                      "Branded PDF",
                    ].map((s, i) => (
                      <div
                        key={s}
                        className="rounded p-2 text-center"
                        style={{
                          background:
                            i === 3
                              ? "rgba(139,92,246,0.2)"
                              : "rgba(255,255,255,0.03)",
                          color: i === 3 ? "#A78BFA" : "#9b8ab4",
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.18)" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenReport />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* System 3 */}
          <FadeIn>
            <div className="mt-16">
              <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
                <div>
                  <div
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "#A78BFA" }}
                  >
                    System 03
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-2">
                    The Agency Dashboard
                  </h3>
                </div>
                <div className="text-[#6b5a8a] text-sm max-w-sm text-right">
                  One screen. Every client. Every deadline. Every automation.
                </div>
              </div>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.18)" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenDashboard />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 6. DESIGN SHOWCASE — behind the curtain ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0C0814" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#3a2a6a" }}
            >
              Behind the Curtain
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Design decisions, briefly.
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-16">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div
                  className="rounded-2xl p-3 border"
                  style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.18)" }}
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <ScreenProposal />
                  </div>
                </div>
                <div>
                  <div className="text-white text-xl font-bold tracking-tight">
                    The interface that replaced 7 hours of work.
                  </div>
                  <p className="text-[#6b5a8a] text-sm mt-4 leading-relaxed">
                    Left side: structured brief inputs. Right side: live
                    proposal preview. The team sees what they&apos;re shipping
                    while they shape it.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-10 items-center">
                <div>
                  <div className="text-white text-xl font-bold tracking-tight">
                    14 people. 23 clients. Zero missed deadlines.
                  </div>
                  <p className="text-[#6b5a8a] text-sm mt-4 leading-relaxed">
                    Information hierarchy designed for one glance: hours saved,
                    clients in review, automations active. The CEO checks it
                    once on her morning coffee.
                  </p>
                </div>
                <div
                  className="rounded-2xl p-3 border"
                  style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.18)" }}
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <ScreenDashboard />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div
                  className="rounded-2xl p-3 border"
                  style={{ background: "#12102A", borderColor: "rgba(139,92,246,0.18)" }}
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <ScreenReport />
                  </div>
                </div>
                <div>
                  <div className="text-white text-xl font-bold tracking-tight">
                    The report that writes itself at midnight and arrives at 8 AM.
                  </div>
                  <p className="text-[#6b5a8a] text-sm mt-4 leading-relaxed">
                    Same branded format every time. Same anomaly detection on
                    every campaign. The only human input: a 2-minute spot-check
                    before send.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 7. PROCESS ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#3a2a6a" }}
            >
              Process
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Here&apos;s what we actually did. Week by week.
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-6">
            {PROCESS.map((p, i) => (
              <m.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 pb-6 border-b last:border-b-0"
                style={{ borderColor: "rgba(139,92,246,0.12)" }}
              >
                <div>
                  <div
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "#A78BFA" }}
                  >
                    {p.weeks}
                  </div>
                  <div className="text-white text-base font-bold tracking-tight mt-1">
                    {p.title}
                  </div>
                </div>
                <p className="text-[#9b8ab4] text-sm leading-relaxed">{p.body}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. RESULTS — analytical bar chart ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0C0814" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#3a2a6a" }}
            >
              Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              87 hours per month. Returned.
            </h2>
            <p className="text-[#6b5a8a] mt-4 max-w-2xl">
              Where the hours went · before and after Flowtix
            </p>
          </FadeIn>

          <div
            className="mt-10 rounded-2xl border p-6 lg:p-10"
            style={{
              background: "#12102A",
              borderColor: "rgba(139,92,246,0.18)",
            }}
          >
            <div>
              {RESULTS_BARS.map((row, i) => (
                <BarRow key={row.label} row={row} index={i} />
              ))}
            </div>

            <div
              className="mt-6 pt-6 border-t grid grid-cols-3 gap-4 text-sm"
              style={{ borderColor: "rgba(139,92,246,0.2)" }}
            >
              <div>
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#6b4a8a" }}
                >
                  Total · Before
                </div>
                <div className="text-white text-2xl font-black mt-1">
                  97h/mo
                </div>
              </div>
              <div>
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#6b4a8a" }}
                >
                  Total · After
                </div>
                <div className="text-white text-2xl font-black mt-1">
                  10h/mo
                </div>
              </div>
              <div>
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#A78BFA" }}
                >
                  Saved
                </div>
                <div
                  className="text-2xl font-black mt-1"
                  style={{ color: "#A78BFA" }}
                >
                  87h/mo
                </div>
              </div>
            </div>
          </div>

          <FadeIn>
            <div
              className="mt-10 rounded-2xl border p-10"
              style={{
                background: "#12102A",
                borderColor: "rgba(139,92,246,0.18)",
              }}
            >
              <p className="text-[#DDD6FE] text-lg lg:text-xl leading-relaxed italic">
                &ldquo;We were good at our work. We just spent too much time
                around it. Now we spend it on it.&rdquo;
              </p>
              <div className="text-[#9b8ab4] text-sm mt-6">
                — Priya Nair, CEO · LINX Agency
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 9. TECH STACK ===== */}
      <section
        className="section-contain py-16 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: "rgba(139,92,246,0.15)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="text-[10px] tracking-widest uppercase mb-5"
            style={{ color: "#3a2a6a" }}
          >
            Technologies used
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full"
                style={{
                  background: "#12102A",
                  color: "#DDD6FE",
                  border: "1px solid rgba(139,92,246,0.15)",
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
