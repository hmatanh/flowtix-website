"use client";

/**
 * /about — Founder-led systems studio
 *
 * Structure:
 *   1. Hero          — the client problem (not Matan)
 *   2. Founder       — Matan as builder / operator / systems thinker
 *   3. Beliefs       — six short principles, equal-weight cards
 *   4. How Flowtix Works — 5-step process (Understand → Improve)
 *   5. Why clients work with Flowtix — concise capability rail
 *   6. Final CTA     — founder photo + closing message
 *
 * Visual identity is the existing site grammar: dark #050505/#080808
 * backgrounds, blue-400 accent, system-serif italic for soft emphasis,
 * clamp() type scales, FadeIn entrance. Mobile-first: every clamp
 * value, every padding, every grid breakpoint chosen for 320–393 px
 * phones before scaling up.
 */

import Link from "next/link";
import { m } from "framer-motion";
import {
  IconArrowRight,
  IconChartLine,
  IconLayoutDashboard,
  IconRobot,
  IconCode,
  IconPalette,
  IconRouteAltLeft,
  IconCheck,
} from "@tabler/icons-react";
import { FounderPhoto } from "@/components/FounderPhoto";
import { FadeIn } from "@/components/animations/FadeIn";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ──────────────────────────────────────────────────────────────────
   Section copy (single source of truth)
   ─────────────────────────────────────────────────────────────── */

const BELIEFS = [
  {
    title: "Build around the business, not the software.",
    body: "Software should bend to how the team works — not the other way around.",
  },
  {
    title: "Simple systems beat complex systems.",
    body: "If a teammate needs a manual to use it, the manual is the bug.",
  },
  {
    title: "Automation should remove work, not create it.",
    body: "Every automation must clearly retire a task. Otherwise it's just decoration.",
  },
  {
    title: "Adoption matters more than features.",
    body: "A tool nobody opens is worth less than the spreadsheet it replaced.",
  },
  {
    title: "Design carries the trust.",
    body: "Internal tools deserve the same craft as customer-facing product. People notice.",
  },
  {
    title: "Outcomes over output.",
    body: "We measure success in hours returned to the team, not pixels pushed.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Understand",
    body: "Two-week deep read of how the team actually works — tools, workflows, exceptions, frustrations.",
  },
  {
    n: "02",
    title: "Design",
    body: "Map the new flow end-to-end. Decision points, human checkpoints, failure modes — on paper before any code.",
  },
  {
    n: "03",
    title: "Build",
    body: "Ship in the right tools for your scale. No over-engineering, no vendor lock-in, full code ownership on day one.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Roll out with the team, not at them. Live walkthroughs, side-by-side use, real edge cases handled before sign-off.",
  },
  {
    n: "05",
    title: "Improve",
    body: "Stay close for the first month. Watch the system in production, polish what's friction, document what's working.",
  },
];

const CAPABILITIES = [
  { Icon: IconLayoutDashboard, title: "Custom internal tools", body: "Dashboards, admin panels, client portals — built around the workflow." },
  { Icon: IconRouteAltLeft,    title: "Business automation",   body: "n8n, Make, custom code. Repetitive work retired, end-to-end." },
  { Icon: IconRobot,           title: "AI workflows",          body: "Practical agents and assistants — trained on the business, not the brand." },
  { Icon: IconCode,            title: "Product engineering",   body: "Next.js, TypeScript, modern stack. Built to grow, easy to hand off." },
  { Icon: IconPalette,         title: "Design & brand",        body: "Identity, UX, UI — the layer that makes the system feel trustworthy." },
  { Icon: IconChartLine,       title: "Operating rhythm",      body: "Weekly reviews, real metrics, calm cadence. No surprise invoices." },
];

/* ──────────────────────────────────────────────────────────────────
   Page
   ─────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ============================================================
           1. HERO — problem-led, not founder-led
         ============================================================ */}
      <section className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-24 lg:pb-32">
        {/* Calm radial backdrop — same grammar as homepage hero */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[360px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
          }}
        />

        <div className="relative page-container text-center">
          <FadeIn>
            <div className="mx-auto flex w-fit max-w-full items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#cccccc] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium whitespace-nowrap">
                About Flowtix
              </span>
            </div>
          </FadeIn>

          <m.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="font-black tracking-tighter text-white leading-[1.02] mx-auto"
            style={{
              fontSize: "clamp(36px, 6.5vw, 72px)",
              maxWidth: "18ch",
            }}
          >
            Most businesses don&apos;t need more software.{" "}
            <span className="text-[#888] font-serif-editorial italic">
              They need systems that actually fit.
            </span>
          </m.h1>

          <FadeIn delay={0.4}>
            <p
              className="text-[#a8a8a8] mt-6 sm:mt-8 mx-auto leading-[1.65]"
              style={{
                fontSize: "clamp(15px, 1.55vw, 19px)",
                maxWidth: "60ch",
              }}
            >
              Teams are drowning in tools. Manual work piles up. Workflows
              break at every handoff. Off-the-shelf software fixes one
              corner and leaves the rest worse than before.
            </p>
            <p
              className="text-[#cfcfcf] mt-5 sm:mt-6 mx-auto leading-[1.65]"
              style={{
                fontSize: "clamp(15px, 1.55vw, 19px)",
                maxWidth: "60ch",
              }}
            >
              Flowtix designs and builds the system underneath —
              <span className="text-white"> custom internal tools, automation, AI workflows, and the operational infrastructure</span>{" "}
              the business actually runs on.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-9 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact/"
                  className="btn-shimmer inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#eee] transition-colors"
                >
                  <span className="relative z-10">Book a Strategy Call</span>
                  <IconArrowRight size={16} stroke={2.5} aria-hidden="true" className="relative z-10" />
                </Link>
              </m.div>
              <Link
                href="/work/"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-[#1a1a1a] text-[#aaa] px-7 py-3.5 rounded-2xl text-sm font-semibold hover:border-[#2a2a2a] hover:text-white transition-all"
              >
                See the work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
           2. FOUNDER — concise, builder-positioned
         ============================================================ */}
      <section className="section-contain py-20 sm:py-24 lg:py-32 bg-[#040404] border-y border-[#0a0a0a]">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Photo column — order-2 on mobile so the eyebrow leads */}
            <FadeIn className="order-2 lg:order-1">
              <div className="relative max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto">
                <FounderPhoto />
              </div>
            </FadeIn>

            {/* Copy column */}
            <FadeIn delay={0.15} className="order-1 lg:order-2">
              <div className="text-blue-400/80 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium mb-4 sm:mb-5">
                The Founder
              </div>
              <h2
                className="text-white font-semibold tracking-tight leading-[1.08]"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  letterSpacing: "-0.02em",
                }}
              >
                Matan Hanasav.{" "}
                <span className="text-[#888] font-serif-editorial italic">
                  Builder before anything else.
                </span>
              </h2>

              <div
                className="space-y-4 sm:space-y-5 mt-6 sm:mt-7 text-[#cfcfcf] leading-[1.7]"
                style={{ fontSize: "clamp(15px, 1.35vw, 17px)" }}
              >
                <p>
                  Started in design and product. Then learned to write the
                  code. Then learned to automate the work behind the code.
                  Then learned to wire AI into the workflow without breaking
                  the rest.
                </p>
                <p>
                  The result is a way of working that doesn&apos;t hand off
                  between design, engineering and operations — they&apos;re
                  one continuous thought. Flowtix exists to bring that to
                  businesses one founder couldn&apos;t serve alone.
                </p>
                <p className="text-[#9a9a9a]">
                  Operator first. Systems thinker by training. Designer when
                  it matters. Engineer when it needs to ship.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
           3. WHAT I BELIEVE — six equal-weight principle cards
         ============================================================ */}
      <section className="section-contain py-20 sm:py-24 lg:py-32">
        <div className="page-container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="text-blue-400/80 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium mb-4">
                What I believe
              </div>
              <h2
                className="text-white font-semibold tracking-tight leading-[1.1]"
                style={{
                  fontSize: "clamp(26px, 4vw, 42px)",
                  letterSpacing: "-0.02em",
                }}
              >
                Six principles every Flowtix project runs on.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {BELIEFS.map((b, i) => (
              <m.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.55, ease: EASE }}
                className="relative rounded-2xl p-6 sm:p-7 border bg-[#080808] h-full"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span
                  aria-hidden="true"
                  className="text-blue-400/70 font-mono text-[10px] tracking-[0.22em]"
                >
                  0{i + 1}
                </span>
                <h3
                  className="text-white font-semibold tracking-tight mt-3 leading-[1.25]"
                  style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[#999] mt-2.5 leading-[1.6]"
                  style={{ fontSize: "clamp(13.5px, 1.15vw, 15px)" }}
                >
                  {b.body}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           4. HOW FLOWTIX WORKS — 5-step process
         ============================================================ */}
      <section className="section-contain py-20 sm:py-24 lg:py-32 bg-[#040404] border-y border-[#0a0a0a]">
        <div className="page-container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="text-blue-400/80 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium mb-4">
                How Flowtix works
              </div>
              <h2
                className="text-white font-semibold tracking-tight leading-[1.1]"
                style={{
                  fontSize: "clamp(26px, 4vw, 42px)",
                  letterSpacing: "-0.02em",
                }}
              >
                One process. Five steps.{" "}
                <span className="text-[#888] font-serif-editorial italic">No surprises.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <ol className="space-y-4 sm:space-y-5">
              {PROCESS.map((step, i) => (
                <m.li
                  key={step.n}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
                  className="relative grid grid-cols-[auto_1fr] gap-4 sm:gap-6 rounded-2xl p-5 sm:p-7 border bg-[#080808]"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="font-mono text-blue-400/80 tabular-nums text-[13px] sm:text-[14px] tracking-[0.18em] pt-1">
                    {step.n}
                  </div>
                  <div>
                    <h3
                      className="text-white font-semibold tracking-tight leading-[1.2]"
                      style={{ fontSize: "clamp(18px, 1.9vw, 22px)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#a8a8a8] mt-2 leading-[1.6]"
                      style={{ fontSize: "clamp(14px, 1.2vw, 16px)" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </m.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================================
           5. WHY CLIENTS WORK WITH FLOWTIX — capability rail
         ============================================================ */}
      <section className="section-contain py-20 sm:py-24 lg:py-32">
        <div className="page-container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="text-blue-400/80 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium mb-4">
                Why clients work with Flowtix
              </div>
              <h2
                className="text-white font-semibold tracking-tight leading-[1.1]"
                style={{
                  fontSize: "clamp(26px, 4vw, 42px)",
                  letterSpacing: "-0.02em",
                }}
              >
                One partner.{" "}
                <span className="text-[#888] font-serif-editorial italic">
                  Every layer of the system.
                </span>
              </h2>
              <p
                className="text-[#9a9a9a] mt-5 sm:mt-6 leading-[1.65] mx-auto"
                style={{
                  fontSize: "clamp(15px, 1.3vw, 17px)",
                  maxWidth: "55ch",
                }}
              >
                Most agencies do design. Most studios do code. Most consultants
                do strategy. Flowtix does the whole stack — so nothing gets
                dropped between the handoffs that don&apos;t happen.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.Icon;
              return (
                <m.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease: EASE }}
                  className="relative rounded-2xl p-6 sm:p-7 border bg-[#080808] h-full"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] text-[#aaa]"
                    aria-hidden="true"
                  >
                    <Icon size={18} stroke={1.6} />
                  </span>
                  <h3
                    className="text-white font-semibold tracking-tight mt-4 sm:mt-5 leading-[1.25]"
                    style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-[#999] mt-2 leading-[1.6]"
                    style={{ fontSize: "clamp(13.5px, 1.15vw, 15px)" }}
                  >
                    {c.body}
                  </p>
                </m.div>
              );
            })}
          </div>

          {/* Subtle trust strip */}
          <FadeIn delay={0.2}>
            <div className="mt-12 sm:mt-16 inline-flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#888] mx-auto justify-center w-full flex-wrap">
              <span className="inline-flex items-center gap-2">
                <IconCheck size={12} stroke={2.4} className="text-blue-400" />
                Code you own day one
              </span>
              <span aria-hidden="true" className="hidden sm:inline h-3 w-px bg-[#1f1f1f]" />
              <span className="inline-flex items-center gap-2">
                <IconCheck size={12} stroke={2.4} className="text-blue-400" />
                Fixed scope, fixed price
              </span>
              <span aria-hidden="true" className="hidden sm:inline h-3 w-px bg-[#1f1f1f]" />
              <span className="inline-flex items-center gap-2">
                <IconCheck size={12} stroke={2.4} className="text-blue-400" />
                Ship in weeks, not quarters
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
           6. FINAL CTA — closing line + founder presence
         ============================================================ */}
      <section className="section-contain relative py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-[#0a0a0a]">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[320px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative page-container text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2
              className="text-white font-semibold tracking-tight leading-[1.1]"
              style={{
                fontSize: "clamp(28px, 5vw, 56px)",
                letterSpacing: "-0.025em",
              }}
            >
              If your team is spending more time fighting tools than doing work,{" "}
              <span className="text-[#888] font-serif-editorial italic">
                let&apos;s build something that fits.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-[#a8a8a8] mt-6 sm:mt-7 leading-[1.65] mx-auto"
              style={{
                fontSize: "clamp(15px, 1.4vw, 18px)",
                maxWidth: "52ch",
              }}
            >
              30-minute call. We walk through what&apos;s slowing the team
              down today and whether a Flowtix system would actually help.
              No pitch, no obligation.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-9 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact/"
                  className="btn-shimmer inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#eee] transition-colors"
                >
                  <span className="relative z-10">Book a Strategy Call</span>
                  <IconArrowRight size={16} stroke={2.5} aria-hidden="true" className="relative z-10" />
                </Link>
              </m.div>
              <Link
                href="/services/"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-[#1a1a1a] text-[#aaa] px-7 py-3.5 rounded-2xl text-sm font-semibold hover:border-[#2a2a2a] hover:text-white transition-all"
              >
                Explore services
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-[#555] text-[11px] tracking-[0.18em] uppercase mt-10 sm:mt-12">
              Matan Hanasav · Founder · Flowtix
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
