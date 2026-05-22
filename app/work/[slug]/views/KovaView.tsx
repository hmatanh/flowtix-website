"use client";

import { m } from "framer-motion";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { KovaLogo } from "@/components/clients/logos/KovaLogo";
import {
  ProjectBreadcrumb,
  ProjectNextLink,
  ProjectBottomCTA,
} from "@/components/projects/ProjectFooter";
import { ScreenshotGallery } from "@/components/projects/ScreenshotGallery";
import { ScreenDashboard } from "@/components/clients/kova/ScreenDashboard";
import { ScreenMatching } from "@/components/clients/kova/ScreenMatching";
import { ScreenCRM } from "@/components/clients/kova/ScreenCRM";

const PALETTE = [
  { hex: "#0EA5E9", name: "Sky Blue", role: "Primary" },
  { hex: "#0C1A2E", name: "Midnight", role: "Background" },
  { hex: "#FFFFFF", name: "Pure", role: "Text" },
  { hex: "#BAE6FD", name: "Cloud", role: "Highlights" },
  { hex: "#1D4ED8", name: "Deep", role: "CTAs" },
];

const STATS = [
  { value: "4 min", label: "Average lead response time (was 4 hours)" },
  { value: "3×", label: "More property matches per agent per week" },
  { value: "0 hrs", label: "Manual email writing per week" },
  { value: "6 wks", label: "From kickoff to full deployment" },
];

const PAINS = [
  "62% of incoming leads received no follow-up",
  "Agents spent 3hrs/day on tasks now fully automated",
  "Zero visibility into pipeline — forecasting was guesswork",
];

const FEATURES: {
  title: string;
  body: string;
  reverse?: boolean;
  visual: "matching" | "crm" | "dashboard" | "pipeline";
}[] = [
  {
    title: "AI Property Matching Engine",
    body: "The system learns each buyer's preferences from every viewing, every saved search, and every conversation. New listings are scored automatically the moment they enter the MLS. Agents see ranked matches without lifting a finger.",
    visual: "matching",
  },
  {
    title: "Automated Lead Nurturing",
    body: "Every lead receives a personalized follow-up within 60 seconds. The AI writes in the agent's voice, references the specific property they viewed, and escalates hot leads to a human the moment intent signals appear.",
    reverse: true,
    visual: "pipeline",
  },
  {
    title: "Unified Agent Dashboard",
    body: "Properties, leads, automations, and AI suggestions — one screen. Designed around how agents actually think and work, not how databases are structured.",
    visual: "dashboard",
  },
  {
    title: "CRM Automation",
    body: "Every viewing, every email, every status change captured automatically. No copy-paste between tools. Pipeline visibility went from 0% to 91% overnight.",
    reverse: true,
    visual: "crm",
  },
];

const WEEKS = [
  { num: "01", title: "Discovery & Audit", text: "Mapped every workflow. Interviewed 4 agents. Quantified every manual hour." },
  { num: "02", title: "Architecture + Brand", text: "Designed the system and the identity in parallel — both signed off before any code." },
  { num: "03", title: "AI Engine", text: "Built the property-matching algorithm and the training pipeline on Claude API." },
  { num: "04", title: "Dashboard + CRM", text: "Agent-facing interface, built around real workflow data from week 1." },
  { num: "05", title: "Automation", text: "All follow-up sequences. Email writing. Pipeline transitions. Calendar sync." },
  { num: "06", title: "Test + Deploy", text: "Live with real agent data. Three days of side-by-side support. Then autonomous." },
];

const RESULTS = [
  { value: "4 min", label: "Lead response time", before: "was 4 hours" },
  { value: "3×", label: "Property match rate", before: "was 1× (gut feel)" },
  { value: "0 hrs", label: "Weekly manual emails", before: "was 8 hours per agent" },
  { value: "91%", label: "Pipeline visibility", before: "was 0% (spreadsheets)" },
];

function MiniPipeline() {
  const steps = ["Lead", "AI Response", "Qualification", "Human Agent"];
  return (
    <div className="rounded-2xl p-6 border" style={{ background: "#040D18", borderColor: "#0D2A45" }}>
      <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-4">
        Automated nurture pipeline
      </div>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <m.div
            key={s}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span
              className="rounded-lg px-4 py-3 text-sm text-[#cccccc] flex-1"
              style={{ background: "#0D1F38", border: "1px solid #0D2A45" }}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <span style={{ color: "#0EA5E9" }}>→</span>
            )}
          </m.div>
        ))}
        <div className="text-[#4a7a9b] text-xs pt-2 border-t border-[#0D2A45] mt-4">
          Avg. completion · 60 seconds end-to-end
        </div>
      </div>
    </div>
  );
}

function FeatureVisual({ kind }: { kind: "matching" | "crm" | "dashboard" | "pipeline" }) {
  if (kind === "pipeline") return <MiniPipeline />;
  return (
    <div
      className="rounded-2xl p-3 border overflow-hidden"
      style={{ background: "#040D18", borderColor: "#0D2A45" }}
    >
      <div className="aspect-[16/10] rounded-xl overflow-hidden">
        {kind === "matching" && <ScreenMatching />}
        {kind === "crm" && <ScreenCRM />}
        {kind === "dashboard" && <ScreenDashboard />}
      </div>
    </div>
  );
}

export function KovaView({ project }: { project: Project }) {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20 overflow-hidden"
        style={{ background: "#000" }}
      >
        <div
          className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 60%)",
            filter: "blur(140px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <ProjectBreadcrumb project={project} />

          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-center mt-2">
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["PropTech", "AI Systems", "Brand Identity", "Web Platform"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-3 py-1 rounded-full"
                    style={{ color: "#4a7a9b", border: "1px solid #0D2A45" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="scale-[1.4] origin-left mb-10">
                <KovaLogo height={56} />
              </div>

              <h1
                className="font-black text-white leading-[0.95] tracking-tight mt-6"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Intelligent real estate,
                <br />
                reimagined from
                <br />
                the ground up.
              </h1>

              <p className="text-[#4a7a9b] text-lg leading-relaxed max-w-lg mt-6">
                KOVA came to us with a team of 12 agents drowning in manual
                processes, missed leads, and disconnected tools. We rebuilt
                their entire operational stack around AI — from first contact
                to closed deal.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-y-4 gap-x-8 max-w-md">
                {[
                  { label: "Timeline", value: "6 weeks" },
                  { label: "Team size", value: "12 agents" },
                  { label: "Services", value: "Brand · AI · Web · Automation" },
                  { label: "Year", value: "2025" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="text-[#1a3a52] text-[10px] uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="text-white text-sm font-medium mt-1">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <m.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              style={{
                boxShadow: "0 0 80px rgba(14,165,233,0.10)",
                borderRadius: 20,
              }}
            >
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#0a0a0a", borderColor: "#222" }}
              >
                <div
                  className="rounded-xl px-3 py-2 flex items-center gap-2 mb-2"
                  style={{ background: "#111" }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                  <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                  <div className="flex-1 mx-2 px-3 py-0.5 rounded text-center text-[10px] font-mono"
                    style={{ background: "#0a0a0a", color: "#333" }}>
                    app.kova.io
                  </div>
                </div>
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenDashboard />
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ===== 2. QUICK STATS ===== */}
      <section
        className="section-contain border-y py-10 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040D18", borderColor: "#0D2A45" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-2xl lg:text-3xl font-black" style={{ color: "#0EA5E9" }}>
                {s.value}
              </div>
              <div className="text-[#4a7a9b] text-xs mt-2 leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. BRAND IDENTITY ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-3">
              The Brand
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              An identity as intelligent as the technology.
            </h2>
            <p className="text-[#4a7a9b] mt-5 max-w-2xl leading-relaxed">
              KOVA needed to look as intelligent as the technology we were
              building for them.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <FadeIn>
              <div
                className="rounded-2xl border p-8 h-full"
                style={{ background: "#040D18", borderColor: "#0D2A45" }}
              >
                <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-5">
                  Logomark
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="text-[#4a7a9b] text-[10px] mb-2">Primary · on dark</div>
                    <KovaLogo height={36} />
                  </div>
                  <div className="h-px" style={{ background: "#0D2A45" }} />
                  <div>
                    <div className="text-[#4a7a9b] text-[10px] mb-2">Reversed · on light</div>
                    <div className="bg-white rounded-lg p-4 inline-block">
                      <svg viewBox="0 0 160 40" height={36} style={{ height: 36 }}>
                        <polygon points="18,2 34,18 18,34 2,18" stroke="#0C1A2E" strokeWidth="1.5" fill="none" />
                        <polygon points="18,9 27,18 18,27 9,18" stroke="#0C1A2E" strokeWidth="1" fill="rgba(12,26,46,0.08)" />
                        <circle cx="18" cy="18" r="2" fill="#0C1A2E" />
                        <text x="46" y="25" fill="#0C1A2E" fontWeight={700} fontSize={18} letterSpacing="0.08em" fontFamily="Inter, sans-serif">KOVA</text>
                      </svg>
                    </div>
                  </div>
                  <div className="h-px" style={{ background: "#0D2A45" }} />
                  <div>
                    <div className="text-[#4a7a9b] text-[10px] mb-2">Icon only</div>
                    <svg viewBox="0 0 36 36" width={48} height={48}>
                      <polygon points="18,2 34,18 18,34 2,18" stroke="#0EA5E9" strokeWidth="1.5" fill="none" />
                      <polygon points="18,9 27,18 18,27 9,18" stroke="#0EA5E9" strokeWidth="1" fill="rgba(14,165,233,0.08)" />
                      <circle cx="18" cy="18" r="2" fill="#0EA5E9" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div
                className="rounded-2xl border p-8 h-full"
                style={{ background: "#040D18", borderColor: "#0D2A45" }}
              >
                <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-5">
                  Color System
                </div>
                <div className="space-y-3">
                  {PALETTE.map((c) => (
                    <div key={c.hex}>
                      <div
                        className="w-full h-10 rounded-lg border"
                        style={{ background: c.hex, borderColor: "rgba(255,255,255,0.06)" }}
                      />
                      <div className="text-[#cccccc] text-xs font-mono mt-1.5">
                        {c.hex}
                      </div>
                      <div className="text-[#4a7a9b] text-[10px]">
                        {c.name} — {c.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div
                className="rounded-2xl border p-8 h-full flex flex-col"
                style={{ background: "#040D18", borderColor: "#0D2A45" }}
              >
                <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-5">
                  Typography
                </div>
                <div className="font-bold leading-none" style={{ color: "#0EA5E9", fontSize: 96 }}>
                  Aa
                </div>
                <div className="text-[#4a7a9b] text-sm mt-3">Inter · Bold</div>
                <div className="mt-auto pt-6 space-y-1">
                  <div className="text-white text-xl font-bold">Property Found.</div>
                  <div className="text-[#4a7a9b] text-sm">3 bed · Riverside · $485K</div>
                  <div className="text-xs" style={{ color: "#0EA5E9" }}>Match Score: 94%</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 4. THE CHALLENGE ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040D18" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16">
          <FadeIn direction="right">
            <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-4">
              The Challenge
            </div>
            <blockquote
              className="font-black leading-tight"
              style={{ color: "#1a3a52", fontSize: "clamp(32px, 4vw, 44px)" }}
            >
              &ldquo;We were losing leads we didn&apos;t even know existed.&rdquo;
            </blockquote>
            <div className="text-[#4a7a9b] text-sm mt-6">
              — Sarah Moran, Founder
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              A 12-person team running on spreadsheets.
            </h2>
            <div className="space-y-5 text-[#4a7a9b] text-base leading-relaxed mt-6 max-w-xl">
              <p>
                Manual follow-up was taking 8 hours per week per agent.
                60% of leads never heard back after first contact — and
                nobody could tell which ones.
              </p>
              <p>
                Property matching was done by gut feel, not data. Agents
                spent 3 hours a day searching listings manually, trying
                to remember which client wanted what.
              </p>
              <p>
                No unified system. CRM in one place, listings in another,
                emails in a third. Nothing talked to anything. The pipeline
                was a Slack channel.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {PAINS.map((p) => (
                <div
                  key={p}
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{ background: "#1a0808", border: "1px solid rgba(220, 38, 38, 0.18)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span className="text-[#cccccc] text-sm">{p}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 5. OUR SOLUTION ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-3">
              Our Solution
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              A complete AI-powered operating system for the KOVA team.
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-20 lg:space-y-24">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    f.reverse ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={f.reverse ? "lg:[direction:ltr]" : ""}>
                    <div className="text-[10px] font-mono tracking-widest" style={{ color: "#0EA5E9", opacity: 0.7 }}>
                      0{i + 1}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-3">
                      {f.title}
                    </h3>
                    <p className="text-[#4a7a9b] leading-relaxed mt-5 max-w-md">
                      {f.body}
                    </p>
                  </div>
                  <div className={f.reverse ? "lg:[direction:ltr]" : ""}>
                    <FeatureVisual kind={f.visual} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. DESIGN SHOWCASE ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040D18" }}
      >
        <div className="max-w-6xl mx-auto">
          <ScreenshotGallery
            accentColor="#0EA5E9"
            clientName="Kova"
            screenshots={[
              {
                id: "dashboard",
                title: "Agent Dashboard",
                description: "Unified daily view: live stats, AI matches, automated-actions log.",
                type: "desktop",
                url: "app.kova.io",
                component: <ScreenDashboard />,
              },
              {
                id: "matching",
                title: "AI Property Matching",
                description: "Client profile + scored matches — built around the agent's workflow.",
                type: "desktop",
                url: "app.kova.io/match",
                component: <ScreenMatching />,
              },
              {
                id: "crm",
                title: "CRM Pipeline",
                description: "47 active deals across 5 stages with AI follow-ups flagged inline.",
                type: "desktop",
                url: "app.kova.io/crm",
                component: <ScreenCRM />,
              },
            ]}
          />
        </div>
      </section>

      {/* ===== 7. PROCESS ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-3">
              How We Worked
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Six weeks. Every week shipped something.
            </h2>
          </FadeIn>

          <div className="relative mt-16">
            <div
              className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, #0D2A45 10%, #0D2A45 90%, transparent)" }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-2">
              {WEEKS.map((w, i) => (
                <m.div
                  key={w.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative text-center lg:text-left"
                >
                  <div className="flex lg:block items-center gap-3 lg:gap-0">
                    <div
                      className="relative w-4 h-4 lg:w-4 lg:h-4 rounded-full inline-flex items-center justify-center mx-auto lg:mx-0 z-10"
                      style={{ background: "#0EA5E9", boxShadow: "0 0 14px rgba(14,165,233,0.5)" }}
                    >
                      <div className="absolute inset-1 rounded-full" style={{ background: "#000" }} />
                    </div>
                    <div className="text-[10px] font-mono lg:mt-4" style={{ color: "#0EA5E9" }}>
                      Week {w.num}
                    </div>
                  </div>
                  <div className="text-white text-base font-semibold mt-2">
                    {w.title}
                  </div>
                  <div className="text-[#4a7a9b] text-xs leading-relaxed mt-2 max-w-[200px]">
                    {w.text}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. RESULTS & TESTIMONIAL ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#040D18" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              What changed in 6 weeks.
            </h2>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESULTS.map((r, i) => (
              <m.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl p-8 border"
                style={{ background: "#0C1A2E", borderColor: "#0D2A45" }}
              >
                <div className="font-black tracking-tighter leading-none" style={{ color: "#0EA5E9", fontSize: "clamp(48px, 5vw, 72px)" }}>
                  {r.value}
                </div>
                <div className="text-[#cccccc] text-sm mt-4">{r.label}</div>
                <div className="text-[#1a3a52] text-xs mt-2">{r.before}</div>
              </m.div>
            ))}
          </div>

          <div
            className="rounded-2xl p-10 mt-10 border"
            style={{ background: "#0C1A2E", borderColor: "#0D2A45" }}
          >
            <div className="font-black leading-none mb-2" style={{ color: "#0EA5E9", fontSize: 56, opacity: 0.6 }}>
              &ldquo;
            </div>
            <p className="text-[#cccccc] text-lg lg:text-xl leading-relaxed italic font-light">
              {project.testimonial.quote} The system feels like it was built by
              someone who has actually sat at an agent&apos;s desk. Because it was.
            </p>
            <div className="text-[#4a7a9b] text-sm mt-6">
              — Sarah Moran, Founder · KOVA Real Estate Intelligence
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. TECH STACK ===== */}
      <section className="section-contain py-16 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: "#0D2A45" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[#1a3a52] text-[10px] tracking-widest uppercase mb-5">
            Technologies used
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.concat(["Tailwind CSS", "Vercel"]).map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full"
                style={{ background: "#040D18", color: "#4a7a9b", border: "1px solid #0D2A45" }}
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
