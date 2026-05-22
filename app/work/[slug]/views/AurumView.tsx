"use client";

import { m } from "framer-motion";
import { type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { AurumLogo } from "@/components/clients/logos/AurumLogo";
import {
  ProjectBreadcrumb,
  ProjectNextLink,
  ProjectBottomCTA,
} from "@/components/projects/ProjectFooter";
import { ScreenPortfolio } from "@/components/clients/aurum/ScreenPortfolio";
import { ScreenReport } from "@/components/clients/aurum/ScreenReport";
import { ScreenPortal } from "@/components/clients/aurum/ScreenPortal";

const PALETTE = [
  { hex: "#D97706", name: "Amber Gold", role: "Primary" },
  { hex: "#120D04", name: "Obsidian", role: "Background" },
  { hex: "#1A1206", name: "Walnut", role: "Surface" },
  { hex: "#FDE68A", name: "Champagne", role: "Highlights" },
  { hex: "#8B6A2A", name: "Bronze", role: "Secondary" },
  { hex: "#FFFFFF", name: "Linen", role: "Text" },
];

const STATS = [
  { value: "0 min", label: "Time advisors spend creating quarterly reports" },
  { value: "8 min", label: "Morning prep time (was 45 minutes)" },
  { value: "91%", label: "Client portal adoption in first 30 days" },
  { value: "7 wks", label: "Complete delivery from kickoff" },
];

const RESULTS = [
  {
    value: "$0",
    label: "Per quarter on report creation",
    detail: "Down from ~$8,400/quarter in advisor time",
  },
  {
    value: "91%",
    label: "Client portal adoption",
    detail: "78 of 85 clients logged in within 30 days",
  },
  {
    value: "37 min",
    label: "Per morning, returned to advisors",
    detail: "Briefs that took 45 min now take 8",
  },
  {
    value: "100%",
    label: "Of quarterly reports delivered on time",
    detail: "Generated and emailed automatically · zero misses",
  },
];

export function AurumView({ project }: { project: Project }) {
  return (
    <>
      {/* ===== 1. HERO — full-bleed luxury editorial ===== */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-24 overflow-hidden"
        style={{ background: "#0A0602" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-black tracking-tighter whitespace-nowrap leading-none"
            style={{
              fontSize: "clamp(140px, 22vw, 320px)",
              color: "#0D0A04",
              letterSpacing: "-0.06em",
            }}
          >
            AURUM
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <ProjectBreadcrumb project={project} />

          <div className="flex items-center gap-4 mt-6">
            <div
              className="h-px w-16"
              style={{ background: "#D97706", opacity: 0.6 }}
            />
            <div
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "#4a3010" }}
            >
              Private Wealth Management · Case Study · {project.year}
            </div>
          </div>

          <FadeIn>
            <div className="mt-10">
              <AurumLogo height={72} />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              className="font-black text-white leading-[0.95] mt-10 max-w-3xl tracking-tight"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              How a 4-person advisory firm began looking like a team of 20.
            </h1>
          </FadeIn>

          <div
            className="h-px w-24 my-10"
            style={{ background: "#D97706" }}
          />

          <FadeIn delay={0.25}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
              <div className="space-y-4">
                {[
                  { label: "Client", value: "Aurum Wealth Management" },
                  { label: "Industry", value: "Private Wealth · Fintech" },
                  { label: "Size", value: "4 advisors · 85 clients · $47M AUM" },
                ].map((m) => (
                  <div key={m.label}>
                    <div
                      className="text-[10px] tracking-widest uppercase"
                      style={{ color: "#4a3010" }}
                    >
                      {m.label}
                    </div>
                    <div className="text-[#8B6A2A] text-sm mt-1">{m.value}</div>
                  </div>
                ))}
              </div>
              <div>
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#4a3010" }}
                >
                  What we built
                </div>
                <ul className="text-[#8B6A2A] text-sm mt-1 space-y-1">
                  <li>AI Reporting System</li>
                  <li>Client Portal</li>
                  <li>Market Intelligence</li>
                  <li>Brand Identity Refresh</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 2. QUICK STATS ===== */}
      <section
        className="section-contain border-y py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "#120D04", borderColor: "#2A1D06" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="md:border-l md:pl-6" style={{ borderColor: "#2A1D06" }}>
              <div
                className="text-3xl lg:text-4xl font-black tracking-tight"
                style={{ color: "#D97706" }}
              >
                {s.value}
              </div>
              <div
                className="text-xs mt-3 leading-relaxed"
                style={{ color: "#8B6A2A" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. BRAND IDENTITY ===== */}
      <section className="section-contain py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#4a3010" }}
            >
              The Brand
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-12">
              An identity that whispers, not shouts.
            </h2>
          </FadeIn>

          {/* Before / arrow / After */}
          <div className="grid grid-cols-1 md:grid-cols-[40fr_10fr_50fr] gap-6 items-center">
            <FadeIn direction="right">
              <div
                className="rounded-xl border p-8 h-44 flex flex-col justify-between"
                style={{ background: "#0D0A04", borderColor: "#1A1206" }}
              >
                <span
                  className="inline-block text-[9px] tracking-widest uppercase self-start"
                  style={{ color: "#3a2a1a" }}
                >
                  Before Flowtix AI
                </span>
                <div>
                  <div
                    className="text-xl tracking-tight"
                    style={{ color: "#666", fontFamily: "Arial, sans-serif" }}
                  >
                    AURUM WEALTH
                  </div>
                  <div
                    className="text-xs italic mt-2"
                    style={{ color: "#3a2a1a" }}
                  >
                    Looked like any other wealth firm
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <m.div
                className="hidden md:flex items-center justify-center text-3xl"
                style={{ color: "#D97706" }}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </m.div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div
                className="rounded-xl border p-8 h-44 flex flex-col justify-between"
                style={{ background: "#1A1206", borderColor: "rgba(217,119,6,0.2)" }}
              >
                <span
                  className="inline-block text-[9px] tracking-widest uppercase self-start"
                  style={{ color: "#8B6A2A" }}
                >
                  The New Identity
                </span>
                <div className="flex items-center gap-4">
                  <AurumLogo height={48} />
                </div>
                <div className="text-[#8B6A2A] text-xs">
                  Immediately communicates: exclusive, intelligent, trustworthy.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Palette */}
          <div className="mt-16">
            <div
              className="text-[10px] tracking-widest uppercase mb-5"
              style={{ color: "#4a3010" }}
            >
              Color System
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PALETTE.map((c) => (
                <div key={c.hex} className="text-center">
                  <div
                    className="aspect-square rounded-lg border"
                    style={{ background: c.hex, borderColor: "rgba(255,255,255,0.06)" }}
                  />
                  <div
                    className="text-[10px] font-mono mt-2"
                    style={{ color: "#8B6A2A" }}
                  >
                    {c.hex}
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: "#4a3010" }}>
                    {c.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography specimen */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div
              className="rounded-2xl border p-10 text-center"
              style={{ background: "#1A1206", borderColor: "#2A1D06" }}
            >
              <div
                className="font-serif italic leading-none"
                style={{ color: "#D97706", fontSize: 96 }}
              >
                Aa
              </div>
              <div
                className="text-xs mt-3 tracking-widest"
                style={{ color: "#8B6A2A" }}
              >
                Inter · Serif Display
              </div>
            </div>
            <div>
              <p
                className="font-serif italic leading-relaxed"
                style={{ color: "#FDE68A", fontSize: 22, lineHeight: 1.5 }}
              >
                Your Q1 portfolio outperformed the benchmark by 3.5 points.
                Three rebalancing opportunities identified for review.
              </p>
              <div
                className="text-[10px] tracking-widest uppercase mt-4"
                style={{ color: "#4a3010" }}
              >
                Sample portfolio statement · Aurum voice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. THE CHALLENGE — chapter editorial ===== */}
      <section
        className="section-contain py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "#120D04" }}
      >
        <span
          className="absolute top-12 right-12 font-black leading-none pointer-events-none"
          style={{ fontSize: 200, color: "#1A1206", opacity: 0.6 }}
          aria-hidden="true"
        >
          I.
        </span>
        <div className="relative max-w-3xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase"
              style={{ color: "#D97706" }}
            >
              Chapter I
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mt-3">
              The Problem with Prestige
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote
              className="font-serif italic mt-10 leading-relaxed border-l-2 pl-6 max-w-2xl"
              style={{ color: "#FDE68A", fontSize: 26, borderColor: "#D97706" }}
            >
              &ldquo;85 clients. 4 advisors. One shared Google Sheet called
              &lsquo;Q1 Reports FINAL v3&rsquo;.&rdquo;
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#8B6A2A] text-lg leading-relaxed mt-10 max-w-2xl">
              Aurum&apos;s advisors were brilliant at the work — portfolio
              strategy, client psychology, tax-loss harvesting at the precision
              level that wealthy clients quietly demand. They were terrible at
              the operations around it.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-[#8B6A2A] text-lg leading-relaxed mt-6 max-w-2xl">
              Every quarter, each advisor spent 3 hours per client building a
              report. Fifteen clients per advisor. Eight weeks of cumulative
              work, every quarter. Reports went out late. Branding looked
              cobbled together. Some clients quietly compared notes and noticed
              they were getting the same template.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-[#8B6A2A] text-lg leading-relaxed mt-6 max-w-2xl">
              The competitor down the street had just launched a polished
              client portal with automated reporting. Aurum had three months
              before this stopped being a problem and started being a crisis.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== 5. OUR SOLUTION ===== */}
      <section className="section-contain py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#4a3010" }}
            >
              Our Solution
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-16">
              Four systems. Built for clients who notice details.
            </h2>
          </FadeIn>

          {/* 1. AI Reporting */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div
                  className="font-serif italic text-3xl mb-3"
                  style={{ color: "#D97706" }}
                >
                  01.
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  AI-Powered Portfolio Reporting
                </h3>
                <p className="text-[#8B6A2A] leading-relaxed mt-5 max-w-md">
                  Advisor data goes in. Claude reads, analyzes, drafts. The
                  system formats the output to Aurum&apos;s exact brand spec —
                  serif headings, gold rules, hatched cover background — and
                  exports a 12-page PDF that Aurum signs as their own.
                </p>
                <p className="text-[#8B6A2A] leading-relaxed mt-4 max-w-md">
                  Three hours per client became zero. Reports now ship on day
                  one of the quarter, every quarter.
                </p>
              </div>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#1A1206", borderColor: "#2A1D06" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenReport />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 2. Market Intelligence */}
          <FadeIn>
            <div
              className="rounded-3xl border p-10 lg:p-14 my-24 text-center"
              style={{
                background:
                  "radial-gradient(ellipse at center, #1A1206, #120D04 70%)",
                borderColor: "#2A1D06",
              }}
            >
              <div
                className="font-serif italic text-3xl mb-3"
                style={{ color: "#D97706" }}
              >
                02.
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Personalized Market Intelligence
              </h3>
              <blockquote
                className="font-serif italic mt-8 leading-relaxed max-w-3xl mx-auto"
                style={{ color: "#FDE68A", fontSize: 22 }}
              >
                &ldquo;Every morning, Marcus gets a brief personalized to each
                of his 85 clients. It takes him 8 minutes to read. It used to
                take 45.&rdquo;
              </blockquote>
              <p className="text-[#8B6A2A] mt-6 max-w-xl mx-auto">
                The system reads market data overnight, cross-references each
                client&apos;s portfolio, and surfaces what matters — for them
                specifically. Advisors arrive informed, not scrambling.
              </p>
            </div>
          </FadeIn>

          {/* 3. Client Portal */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-12 items-center my-24">
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#1A1206", borderColor: "#2A1D06" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenPortal />
                </div>
              </div>
              <div>
                <div
                  className="font-serif italic text-3xl mb-3"
                  style={{ color: "#D97706" }}
                >
                  03.
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  The Client Portal
                </h3>
                <p className="text-[#8B6A2A] leading-relaxed mt-5 max-w-md">
                  Clients log in to see portfolio value, AI-generated insights,
                  downloadable reports, and one-click advisor booking. The same
                  premium aesthetic clients expect from $5M custody — except
                  available from a phone, at 11pm, in their pajamas.
                </p>
                <p className="text-[#8B6A2A] leading-relaxed mt-4 max-w-md">
                  91% of clients logged in within 30 days. Most check it weekly.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 4. Document Delivery Timeline */}
          <FadeIn>
            <div className="mt-24">
              <div
                className="font-serif italic text-3xl mb-3"
                style={{ color: "#D97706" }}
              >
                04.
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Automated Document Delivery
              </h3>
              <p className="text-[#8B6A2A] leading-relaxed mt-5 max-w-2xl">
                The whole pipeline runs overnight while the advisor sleeps.
              </p>

              <div
                className="mt-10 rounded-2xl border p-8"
                style={{ background: "#1A1206", borderColor: "#2A1D06" }}
              >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-stretch">
                  {[
                    { time: "00:00", text: "Data ingested" },
                    { time: "00:14", text: "AI analyses portfolios" },
                    { time: "02:30", text: "Reports generated" },
                    { time: "03:00", text: "Auto-emailed" },
                    { time: "06:00", text: "Client notified" },
                  ].map((step, i) => (
                    <m.div
                      key={step.time}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                      <div
                        className="font-mono text-sm"
                        style={{ color: "#D97706" }}
                      >
                        {step.time}
                      </div>
                      <div
                        className="text-xs mt-2"
                        style={{ color: "#8B6A2A" }}
                      >
                        {step.text}
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 6. DESIGN SHOWCASE — 3 moments ===== */}
      <section
        className="section-contain py-32 px-4 sm:px-6 lg:px-8"
        style={{ background: "#120D04" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#4a3010" }}
            >
              Design Showcase
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-16">
              Three moments that define the AURUM experience.
            </h2>
          </FadeIn>

          {/* Moment 1 */}
          <FadeIn>
            <div className="mb-20">
              <div
                className="text-[10px] tracking-widest uppercase mb-4"
                style={{ color: "#D97706" }}
              >
                Moment 01
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-8">
                The Report That Writes Itself
              </h3>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(217,119,6,0.12), transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <div
                  className="relative rounded-2xl p-3 border"
                  style={{ background: "#1A1206", borderColor: "#2A1D06" }}
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <ScreenReport />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Moment 2 — split */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#1A1206", borderColor: "#2A1D06" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenPortfolio />
                </div>
              </div>
              <div>
                <div
                  className="text-[10px] tracking-widest uppercase mb-4"
                  style={{ color: "#D97706" }}
                >
                  Moment 02
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  What the advisor sees at 9 AM.
                </h3>
                <p className="text-[#8B6A2A] mt-5 leading-relaxed max-w-md">
                  Portfolio performance, client alerts AI surfaced overnight,
                  reports waiting for review. Marcus knows what to focus on
                  before his first coffee.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Moment 3 — client portal */}
          <FadeIn>
            <div>
              <div
                className="text-[10px] tracking-widest uppercase mb-4"
                style={{ color: "#D97706" }}
              >
                Moment 03
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-8">
                What your clients see — every time they log in.
              </h3>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#1A1206", borderColor: "#2A1D06" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenPortal />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 7. PROCESS ===== */}
      <section className="section-contain py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "#4a3010" }}
            >
              Process
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Seven weeks. Every decision justified.
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-12">
            {[
              {
                num: "Chapter I",
                weeks: "Weeks 1–2",
                title: "Understanding Wealth Management",
                body: "We learned about fiduciary responsibility, client sensitivity, compliance requirements, and what makes HNW clients trust advisors. We sat in three client meetings. We read 12 of Aurum's prior reports.",
              },
              {
                num: "Chapter II",
                weeks: "Weeks 3–4",
                title: "Designing for Trust",
                body: "Every design decision tested against one question: 'Would a $5M client feel confident giving their wealth to this firm based on this screen?' We threw away two complete design directions before landing the third.",
              },
              {
                num: "Chapter III",
                weeks: "Weeks 5–6",
                title: "Building the Intelligence",
                body: "Claude API training on 12 prior Aurum reports. PDF generation pipeline. Portal build. The hard parts here were the small ones — exactly how a gold rule should sit beneath a chapter heading, exactly when a paragraph should break.",
              },
              {
                num: "Chapter IV",
                weeks: "Week 7",
                title: "Soft Launch + Calibration",
                body: "Tested with 10 clients first. Gathered feedback. Refined the brief copy and the table formatting. Full rollout on day 50 — every client got their Q1 report on the first day of Q2.",
              },
            ].map((c, i) => (
              <m.div
                key={c.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 pb-12 border-b last:border-b-0"
                style={{ borderColor: "#2A1D06" }}
              >
                <div>
                  <div
                    className="font-serif italic text-2xl"
                    style={{ color: "#D97706" }}
                  >
                    {c.num}
                  </div>
                  <div
                    className="text-[10px] tracking-widest uppercase mt-2"
                    style={{ color: "#4a3010" }}
                  >
                    {c.weeks}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-[#8B6A2A] leading-relaxed mt-3">
                    {c.body}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. RESULTS — dramatic ===== */}
      <section
        className="section-contain py-32 px-4 sm:px-6 lg:px-8"
        style={{ background: "#120D04" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Quote first */}
          <FadeIn>
            <blockquote
              className="font-serif italic text-center leading-tight"
              style={{
                color: "#D97706",
                fontSize: "clamp(28px, 4vw, 44px)",
              }}
            >
              &ldquo;Our clients now think we have a team of analysts.
              <br className="hidden md:block" />
              We don&apos;t. We have Flowtix AI.&rdquo;
            </blockquote>
            <div
              className="text-center text-sm mt-6"
              style={{ color: "#8B6A2A" }}
            >
              — Marcus Osei, Managing Partner
            </div>
          </FadeIn>

          <div className="mt-20 space-y-8">
            {RESULTS.map((r, i) => (
              <m.div
                key={r.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center pl-6"
                style={{ borderLeft: "2px solid #D97706" }}
              >
                <div
                  className="font-serif italic leading-none"
                  style={{
                    color: "#D97706",
                    fontSize: "clamp(56px, 7vw, 96px)",
                  }}
                >
                  {r.value}
                </div>
                <div>
                  <div className="text-white text-lg font-medium">
                    {r.label}
                  </div>
                  <div className="text-[#8B6A2A] text-sm mt-1">{r.detail}</div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. TECH STACK ===== */}
      <section
        className="section-contain py-16 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: "#2A1D06" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="text-[10px] tracking-widest uppercase mb-5"
            style={{ color: "#4a3010" }}
          >
            Technologies used
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full"
                style={{
                  background: "#1A1206",
                  color: "#8B6A2A",
                  border: "1px solid #2A1D06",
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
