"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  IconArrowRight,
  IconLockSquare,
  IconClock,
  IconRouteAltLeft,
  IconRobot,
  IconLayoutDashboard,
  IconRocket,
  IconCode,
  IconPalette,
  IconCheck,
} from "@tabler/icons-react";
import { PerspectiveGrid } from "@/components/PerspectiveGrid";
import { HeroAmbient } from "@/components/HeroAmbient";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FAQ } from "@/components/FAQ";
import { Availability } from "@/components/Availability";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { ListingMockup } from "@/components/projects/ListingMockups";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* =========================================================================
   Section data
   ========================================================================= */

const HERO_STATS = [
  { value: "10+ yrs", label: "Design & product experience" },
  { value: "50+", label: "Systems shipped" },
  { value: "2–6 wks", label: "Typical project timeline" },
];

const SOCIAL_STATS = [
  { value: 10, suffix: "+", label: "Years of product & design experience" },
  { value: 50, suffix: "+", label: "Systems shipped end-to-end" },
  { value: 12, label: "Industries served" },
  { value: 6, suffix: " wks", label: "Average idea to live" },
  { value: 100, suffix: "%", label: "Code & systems you own day one" },
];

const MARQUEE_1 = [
  "Business Process Automation",
  "Custom AI Agents",
  "Internal Tools",
  "Client Portals",
  "Dashboards",
  "MVP Development",
  "Websites",
  "Landing Pages",
  "Brand Systems",
  "UX/UI Design",
];

const MARQUEE_2 = [
  "Practical",
  "Custom",
  "Outcome-focused",
  "Next.js",
  "Claude",
  "n8n",
  "Make",
  "Supabase",
  "Figma",
  "TypeScript",
  "Tailwind",
  "React",
];

/* What We Build cards */
const WHAT_WE_BUILD = [
  {
    icon: IconLayoutDashboard,
    title: "Custom Business Systems",
    body:
      "Internal tools, dashboards, portals, and systems built around your exact workflow — not the workflow a generic SaaS expects you to have.",
  },
  {
    icon: IconRouteAltLeft,
    title: "AI-Powered Automations",
    body:
      "Automated workflows that handle repetitive tasks, follow-ups, data processing, content flows, and the operational work your team shouldn't be doing.",
  },
  {
    icon: IconRobot,
    title: "AI Agents & Assistants",
    body:
      "Custom AI assistants trained on your business — support, sales, onboarding, internal knowledge, client communication. Practical, not generic.",
  },
  {
    icon: IconRocket,
    title: "MVPs & Digital Products",
    body:
      "From idea to working product in weeks — strategy, UX, design, build, launch. One partner across every part of the product.",
  },
  {
    icon: IconCode,
    title: "Websites & Landing Pages",
    body:
      "Modern, fast, conversion-focused sites and product experiences — built on a stack that grows with you instead of forcing a rebuild.",
  },
  {
    icon: IconPalette,
    title: "Branding & Product Design",
    body:
      "Brand identity, UX, UI, and visual systems that make the product feel professional and trustworthy from the first second.",
  },
];

const WHO_FOR = [
  "Startups building MVPs and shipping their first product",
  "Digital agencies that need automation, product, or AI capacity",
  "Service businesses drowning in repetitive workflows",
  "Companies running on too many manual processes",
  "Teams that need real internal tools, not another SaaS subscription",
  "Founders who want one partner for product, design, automation, and AI",
];

const USE_CASES = [
  "AI customer support assistant",
  "Lead qualification workflow",
  "Automated client onboarding",
  "Proposal & document generation",
  "Internal knowledge assistant",
  "CRM automation",
  "WhatsApp & email automation",
  "Custom operations dashboard",
  "Client portal",
  "SaaS MVP",
  "Booking & follow-up automation",
  "Data processing pipeline",
  "Marketing site & full website",
  "Brand identity & design system",
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Understand your business",
    text:
      "We learn your workflow, goals, bottlenecks, tools, users, and the way the team actually works day to day.",
  },
  {
    n: "02",
    title: "Map the opportunity",
    text:
      "We identify what should be automated, what should be redesigned, what should be built from scratch, and what to leave alone.",
  },
  {
    n: "03",
    title: "Design the solution",
    text:
      "We define the user experience, the system logic, the automation flows, the screens, and the data structure — before we build.",
  },
  {
    n: "04",
    title: "Build & launch",
    text:
      "We build with the right tools for your scale and stack — AI workflows, integrations, custom code, automation platforms — and ship.",
  },
  {
    n: "05",
    title: "Improve over time",
    text:
      "We test, refine, and improve based on real usage. The system gets better every month — not worse.",
  },
];

const PAINS = [
  "Your team wastes hours on repetitive tasks every week.",
  "Tools that don't talk to each other. Spreadsheets holding the business together.",
  "Manual follow-ups, copy-paste work, and processes that should have been automated long ago.",
  "Disconnected systems creating errors and slowing the team down.",
];

const FLOW_STEPS = [
  { label: "Discover", text: "Where the time goes." },
  { label: "Design", text: "How it should work." },
  { label: "Build", text: "The real system." },
  { label: "Automate", text: "Remove the manual." },
  { label: "Improve", text: "Tune with real usage." },
];

const INDUSTRIES_12 = [
  "Startups & Founders",
  "Digital Agencies",
  "Service Businesses",
  "E-commerce & DTC",
  "SaaS & Tech",
  "Real Estate",
  "Healthcare & Wellness",
  "Finance & Fintech",
  "Education",
  "Hospitality & F&B",
  "Logistics & Operations",
  "Media & Publishing",
];

/* =========================================================================
   Component
   ========================================================================= */

export default function Home() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className="relative lg:min-h-screen lg:flex lg:items-center pt-3 sm:pt-8 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">
        <HeroAmbient />
        <PerspectiveGrid />
        <div
          aria-hidden="true"
          className="absolute top-[-200px] right-[-300px] w-[900px] h-[600px] rounded-full pointer-events-none animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="relative page-container w-full text-center">
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#1a1a1a] bg-[#080808] mb-5 sm:mb-7"
          >
            {/* Pulsing dot — vertically centered with text via items-center */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-blue-500" />
            </span>
            {/* Both labels in ONE inline text run so the dot always stays inline next to the text.
                 Tighter mobile sizing so the full label fits one line down to 320-px phones. */}
            <span className="text-[#cccccc] text-[8.5px] sm:text-[11px] tracking-[0.06em] sm:tracking-[0.12em] uppercase font-medium whitespace-nowrap">
              Digital Systems Studio
              <span className="text-[#555] mx-1.5 sm:mx-2">·</span>
              Built for Operators
            </span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            className="font-black tracking-tighter text-white leading-[1.02]"
            style={{ fontSize: "clamp(36px, 6.5vw, 72px)" }}
          >
            Custom systems, automations, and AI workflows{" "}
            <span className="gradient-text-blue">
              built around your business.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            className="section-subtext text-[#999] text-base sm:text-lg md:text-xl mt-5 sm:mt-7 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            We build the internal tools, client portals, AI agents, and
            automated workflows that save your team hours every week — and
            scale with the way your business actually works.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-7 sm:mt-10 flex items-center justify-center gap-4 sm:gap-8 flex-wrap"
          >
            {HERO_STATS.map((s, i) => (
              <span key={s.value} className="inline-flex items-center gap-8">
                <span className="text-center">
                  <span className="block text-white text-sm font-semibold">
                    {s.value}
                  </span>
                  <span className="block text-[#888] text-xs mt-0.5">
                    {s.label}
                  </span>
                </span>
                {i < HERO_STATS.length - 1 && (
                  <span className="hidden sm:inline-block h-8 w-px bg-[#1a1a1a]" />
                )}
              </span>
            ))}
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap"
          >
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#eee] transition-colors min-h-[48px] w-full sm:w-auto"
            >
              <span className="relative z-10">Book a Strategy Call</span>
              <IconArrowRight size={16} stroke={2} className="relative z-10" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-[#1a1a1a] text-[#aaa] px-7 py-3.5 rounded-xl text-sm hover:border-[#2a2a2a] hover:text-white transition-all min-h-[48px] w-full sm:w-auto"
            >
              See What We Build →
            </Link>
          </m.div>
        </div>
      </section>

      {/* ===== 2. SOCIAL PROOF STRIP ===== */}
      <section className="section-contain py-16 sm:py-20 border-y border-[#080808] bg-[#030303]">
        <div className="page-container flex flex-wrap justify-center items-stretch gap-y-10">
          {SOCIAL_STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex items-stretch flex-1 basis-[45%] sm:basis-auto sm:min-w-[20%]"
            >
              <div className="flex-1 text-center px-3">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[#777] text-[10px] sm:text-xs tracking-wider mt-2 uppercase">
                  {s.label}
                </div>
              </div>
              {i < SOCIAL_STATS.length - 1 && (
                <div className="bg-[#0f0f0f] w-px h-12 self-center hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. MARQUEE ===== */}
      <section className="py-4 border-y border-[#080808] overflow-hidden bg-black">
        <div className="overflow-hidden relative">
          <div className="marquee-track inline-flex whitespace-nowrap">
            {[0, 1].map((dup) => (
              <span key={dup} className="inline-flex shrink-0">
                {MARQUEE_1.map((t, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="inline-flex items-center text-[#111] text-xs tracking-[0.2em] uppercase"
                  >
                    <span className="mx-8">{t}</span>
                    <span>·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-4 overflow-hidden bg-black">
        <div className="overflow-hidden relative">
          <div
            className="inline-flex whitespace-nowrap"
            style={{ animation: "marqueeReverse 24s linear infinite" }}
          >
            {[0, 1].map((dup) => (
              <span key={dup} className="inline-flex shrink-0">
                {MARQUEE_2.map((t, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="inline-flex items-center text-[#0d0d0d] text-xs tracking-[0.2em] uppercase"
                  >
                    <span className="mx-8">{t}</span>
                    <span>·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. WHAT WE BUILD ===== */}
      <section className="relative section-contain py-24 md:py-32">
        <div className="page-container">
          <FadeIn>
            <div className="text-center mb-14 sm:mb-16">
              <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
                What We Build
              </div>
              <h2
                className="section-heading font-black tracking-tight text-white"
                style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
              >
                Custom systems for the way your business actually works.
              </h2>
              <p className="section-subtext text-[#888] text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                Not templates. Not off-the-shelf SaaS. Real solutions designed
                around the workflows, customers, and operations you already
                have.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            stagger={0.06}
          >
            {WHAT_WE_BUILD.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title}>
                  <div className="group relative h-full bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-7 hover:border-[#2a2a2a] hover:-translate-y-1 transition-all duration-300">
                    <Icon
                      size={26}
                      stroke={1.5}
                      className="text-[#555] group-hover:text-blue-500 transition-colors"
                    />
                    <h3 className="text-white text-lg font-semibold tracking-tight mt-6">
                      {c.title}
                    </h3>
                    <p className="text-[#6a6a6a] text-sm leading-relaxed mt-3">
                      {c.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== 5. THE PROBLEM ===== */}
      <section className="relative section-contain py-24 md:py-32 bg-[#030303] border-y border-[#080808]">
        <span className="section-number" aria-hidden="true">
          01
        </span>
        <div className="relative page-container grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          <FadeIn direction="right">
            <div className="section-label text-[#555] text-[10px] tracking-widest uppercase">
              The Problem
            </div>
            <h2
              className="section-heading font-black tracking-tight leading-[1] text-white mt-6"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Most businesses are still running on{" "}
              <span className="gradient-text-blue">manual work.</span>
            </h2>
            <p className="section-subtext text-[#888] text-base sm:text-lg leading-relaxed mt-8 max-w-2xl">
              Your team wastes hours every week on repetitive tasks,
              disconnected tools, manual follow-ups, copy-paste work,
              spreadsheets, and processes that should have been automated long
              ago.
            </p>
            <p className="text-[#aaa] text-base sm:text-lg leading-relaxed mt-4 max-w-2xl">
              Flowtix turns those messy workflows into clean, automated,
              measurable systems.
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <div className="grid grid-cols-1 gap-4">
              {PAINS.map((p, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                  className="bg-[#0a0a0a] rounded-xl p-5 border border-[#0f0f0f]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="text-[#777] text-[10px] uppercase tracking-widest">
                      Common Reality
                    </span>
                  </div>
                  <p className="text-[#aaa] text-sm leading-relaxed">{p}</p>
                </m.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 6. THE SOLUTION (process flow) ===== */}
      <section className="section-contain py-24 md:py-32">
        <div className="page-container text-center mb-14 sm:mb-16">
          <FadeIn>
            <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
              The Solution
            </div>
            <h2
              className="section-heading font-black tracking-tight text-white"
              style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
            >
              From messy workflows to{" "}
              <span className="gradient-text-blue">scalable systems.</span>
            </h2>
            <p className="section-subtext text-[#888] text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              We map your current workflow, identify where time and money are
              being wasted, design the right solution, and build a system that
              fits the way your business actually works.
            </p>
          </FadeIn>
        </div>

        {/* Flow chips */}
        <div className="page-container flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FLOW_STEPS.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: EASE }}
              className="inline-flex items-center gap-2 sm:gap-3"
            >
              <span className="inline-flex flex-col items-center text-center bg-[#0D0D0D] border border-[#1a1a1a] rounded-xl px-4 sm:px-5 py-3 sm:py-4 min-w-[120px]">
                <span className="text-white text-sm font-semibold">
                  {s.label}
                </span>
                <span className="text-[#555] text-[11px] mt-1">{s.text}</span>
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <span className="text-[#222] hidden sm:inline" aria-hidden="true">
                  →
                </span>
              )}
            </m.div>
          ))}
        </div>
      </section>

      {/* ===== 7. SERVICES (links into /services) ===== */}
      <section className="section-contain py-24 md:py-32 bg-[#030303] border-y border-[#080808]">
        <div className="page-container mb-12 text-center">
          <div className="section-label text-[#333] text-[10px] tracking-widest uppercase">
            Services
          </div>
          <h2
            className="section-heading font-black tracking-tight text-white mt-3 mx-auto max-w-2xl"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            Six ways we help businesses ship.
          </h2>
          <Link
            href="/services"
            className="animated-link inline-block mt-5 sm:mt-6 text-[#6a6a6a] hover:text-white text-sm whitespace-nowrap"
          >
            See all services →
          </Link>
        </div>

        <div
          className="overflow-x-auto no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div
            className="inline-flex gap-4"
            style={{
              width: "max-content",
              // Align first card with .page-container left edge,
              // matching navbar's content grid even on ultrawide.
              paddingLeft: "max(20px, calc((100vw - 1280px) / 2 + 48px))",
              paddingRight: "max(20px, calc((100vw - 1280px) / 2 + 48px))",
            }}
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="group relative w-80 sm:w-[22rem] h-[22rem] shrink-0 rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                  style={{
                    scrollSnapAlign: "start",
                    animationDelay: `${i * 0.4}s`,
                    background:
                      "linear-gradient(180deg, #0F0F0F 0%, #0A0A0A 100%)",
                    border: "1px solid #1c1c1c",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Subtle blue glow on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.08), transparent 70%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] text-[#aaa] group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.06] group-hover:text-blue-400 transition-all duration-300">
                      <Icon size={20} stroke={1.6} />
                    </span>
                    <span className="text-[#333] text-[11px] font-mono group-hover:text-[#555] transition-colors">
                      {s.number}
                    </span>
                  </div>
                  <div className="relative mt-auto">
                    <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[#999] text-sm mt-2.5 leading-relaxed line-clamp-3">
                      {s.short}
                    </p>
                  </div>
                  <div className="relative mt-5 pt-5 border-t border-[#161616] flex items-center justify-between text-xs">
                    <span className="text-[#666] group-hover:text-white transition-colors font-medium tracking-tight">
                      Explore service
                    </span>
                    <IconArrowRight
                      size={14}
                      stroke={2}
                      className="text-[#444] group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </Link>
              );
            })}
            <div className="w-1 shrink-0" />
          </div>
        </div>
        <div className="text-[#666] text-xs text-center mt-6">
          ← Scroll to explore →
        </div>
      </section>

      {/* ===== 8. WHO IT'S FOR ===== */}
      <section className="section-contain py-24 md:py-32">
        <div className="page-container">
          <div className="text-center mb-12">
            <FadeIn>
              <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
                Who We Work With
              </div>
              <h2
                className="section-heading font-black tracking-tight text-white"
                style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
              >
                Who Flowtix is for.
              </h2>
              <p className="section-subtext text-[#888] text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                We work best with teams that know what they want to improve —
                and want one partner who can carry it across product, design,
                automation, and AI.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            stagger={0.05}
          >
            {WHO_FOR.map((w) => (
              <StaggerItem key={w}>
                <div className="flex items-start gap-3 bg-[#0a0a0a] border border-[#0f0f0f] rounded-xl p-5">
                  <IconCheck
                    size={16}
                    stroke={2.5}
                    className="text-blue-500 mt-1 shrink-0"
                  />
                  <span className="text-[#aaa] text-sm leading-relaxed">
                    {w}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== 9. USE CASES ===== */}
      <section className="section-contain py-24 md:py-32 bg-[#030303] border-y border-[#080808]">
        <div className="page-container">
          <div className="text-center mb-12">
            <FadeIn>
              <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
                Examples
              </div>
              <h2
                className="section-heading font-black tracking-tight text-white"
                style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
              >
                What we can build for you.
              </h2>
              <p className="section-subtext text-[#888] text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                Real examples from real projects. Whatever you don&apos;t see
                here, ask — most of what we build is bespoke.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer
            className="mt-10 flex flex-wrap justify-center gap-2.5"
            stagger={0.03}
          >
            {USE_CASES.map((u) => (
              <StaggerItem key={u}>
                <span className="inline-block bg-[#0D0D0D] border border-[#1a1a1a] rounded-full px-5 py-2.5 text-sm text-[#aaa] hover:border-blue-500/30 hover:text-white transition-colors cursor-default">
                  {u}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== 10. FEATURED WORK — matches /work page template ===== */}
      <section className="section-contain py-24 md:py-32">
        <div className="page-container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
                Selected Work
              </div>
              <h2
                className="section-heading font-black tracking-tight text-white mx-auto max-w-2xl"
                style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
              >
                Systems we&apos;ve built.
              </h2>
              <Link
                href="/work"
                className="animated-link inline-block mt-5 sm:mt-6 text-[#6a6a6a] hover:text-white text-sm whitespace-nowrap"
              >
                View all work →
              </Link>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {projects.slice(0, 4).map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/work/${p.slug}/`}
                  aria-label={`Open ${p.name} case study`}
                  className="group relative block rounded-2xl sm:rounded-[20px] overflow-hidden border border-white/[0.06] bg-[#080808] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0B0B0B] hover:border-white/[0.16] hover:shadow-[0_40px_90px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.04)] h-full"
                >
                  {/* Visual artifact — 16:10 ratio */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.04]">
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                      <ListingMockup slug={p.slug} />
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 sm:p-7 lg:p-8">
                    {/* Eyebrow row: industry · year */}
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium">
                      <span className="text-[#9a9a9a]">{p.industry}</span>
                      <span className="text-[#555] font-mono tabular-nums">
                        {p.year}
                      </span>
                    </div>

                    {/* Project name + tagline */}
                    <h3
                      className="text-white font-semibold tracking-tight mt-4 sm:mt-5 leading-[1.05]"
                      style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
                    >
                      {p.name}
                    </h3>
                    <p
                      className="text-[#cfcfcf] mt-2.5 sm:mt-3 leading-[1.45] tracking-tight"
                      style={{ fontSize: "clamp(14px, 1.3vw, 17px)" }}
                    >
                      {p.tagline}
                    </p>

                    {/* Hairline */}
                    <div
                      aria-hidden="true"
                      className="my-5 sm:my-6 h-px w-full bg-white/[0.06]"
                    />

                    {/* Three metric pills */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                      {p.results.slice(0, 3).map((r) => (
                        <div
                          key={r.label}
                          className="rounded-md sm:rounded-lg px-2.5 sm:px-3 py-2.5 sm:py-3 border bg-white/[0.02]"
                          style={{ borderColor: "rgba(255,255,255,0.05)" }}
                        >
                          <div className="text-white font-semibold tabular-nums tracking-tight text-[13px] sm:text-[15px] leading-none">
                            {r.value}
                          </div>
                          <div className="text-[#888] text-[9.5px] sm:text-[10px] uppercase tracking-[0.12em] mt-1.5 leading-tight">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer row */}
                    <div className="mt-5 sm:mt-6 flex items-center justify-between gap-3">
                      <span className="text-[10px] sm:text-[11px] text-[#777] tracking-[0.18em] uppercase truncate">
                        {p.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-white font-medium tracking-tight shrink-0">
                        View case
                        <IconArrowRight
                          size={13}
                          stroke={2.2}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA to full /work portfolio */}
          <FadeIn delay={0.1}>
            <div className="mt-12 sm:mt-14 lg:mt-16 flex justify-center">
              <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/work/"
                  className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-2xl text-sm font-semibold hover:bg-[#eee] transition-colors"
                >
                  See all case studies
                  <IconArrowRight size={16} stroke={2.5} aria-hidden="true" />
                </Link>
              </m.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 11. DIFFERENTIATION ===== */}
      <section className="section-contain py-24 md:py-32 bg-[#030303] border-y border-[#080808]">
        <div className="page-container text-center">
          <FadeIn>
            <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
              Why Flowtix
            </div>
            <h2
              className="section-heading font-black tracking-tight text-white"
              style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
            >
              Not just design. Not just automation.{" "}
              <span className="gradient-text-blue">A complete digital partner.</span>
            </h2>
            <p className="section-subtext text-[#555] text-base sm:text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
              Most providers focus on one piece — design, development,
              automation, or AI. Flowtix connects all of them into one practical
              solution. We understand the business problem, design the
              experience, build the system, and automate the workflow behind
              it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== 12. HOW WE WORK (timeline) ===== */}
      <section className="section-contain py-24 md:py-32">
        <div className="page-container">
          <div className="text-center mb-16 sm:mb-20">
            <FadeIn>
              <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
                How We Work
              </div>
              <h2
                className="section-heading font-black tracking-tight text-white"
                style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
              >
                From conversation to working system.
              </h2>
              <p className="section-subtext text-[#888] text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
                A clear, repeatable process. No surprises. No scope creep.
              </p>
            </FadeIn>
          </div>

          {/* Cards grid — uses the full container width on desktop, stays
              a single column on small viewports. Each card carries its own
              step number and accent so the section reads as a process even
              without a connecting timeline rail. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {PROCESS_STEPS.map((t, i) => (
              <m.div
                key={t.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: EASE,
                }}
                className="group relative bg-[#0a0a0a] border border-[#111] rounded-2xl p-6 lg:p-7 hover:border-[#1f1f1f] hover:bg-[#0D0D0D] transition-colors duration-300 text-left"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-blue-500/30 bg-blue-500/[0.06] text-blue-400 text-xs font-mono">
                    {t.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-1 h-px bg-gradient-to-r from-blue-500/20 via-[#1a1a1a] to-transparent"
                  />
                </div>
                <h3 className="text-white text-base lg:text-lg font-semibold tracking-tight">
                  {t.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed mt-3">
                  {t.text}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 13. INDUSTRIES ===== */}
      <section className="section-contain py-20 md:py-24 bg-[#030303] border-y border-[#080808]">
        <div className="page-container text-center">
          <FadeIn>
            <div className="section-label text-[#333] text-[10px] tracking-widest uppercase mb-4">
              Industries
            </div>
            <h2
              className="section-heading font-black tracking-tight text-white"
              style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
            >
              Where we&apos;ve worked.
            </h2>
          </FadeIn>
          <StaggerContainer
            className="mt-10 flex flex-wrap justify-center gap-3"
            stagger={0.04}
          >
            {INDUSTRIES_12.map((i) => (
              <StaggerItem key={i}>
                <span className="inline-block bg-[#0D0D0D] border border-[#1a1a1a] rounded-full px-5 py-2.5 text-sm text-[#888] hover:border-blue-500/30 hover:text-white transition-colors cursor-default">
                  {i}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== 14. FAQ ===== */}
      <FAQ />

      {/* ===== 15. AVAILABILITY ===== */}
      <Availability />

      {/* ===== 16. FINAL CTA ===== */}
      <section className="section-contain relative py-32 md:py-40 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0"
        >
          <span
            className="font-black tracking-tighter whitespace-nowrap"
            style={{
              fontSize: "clamp(120px, 24vw, 280px)",
              color: "#030303",
              letterSpacing: "-0.06em",
            }}
          >
            FLOWTIX
          </span>
        </div>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle at center, rgba(59,130,246,0.04) 0%, transparent 60%)', width: 1000, height: 400, pointerEvents: 'none' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#888] text-[11px] tracking-[0.12em] uppercase font-medium">
                Currently taking on new projects
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="section-heading font-black tracking-tighter text-white leading-[1.05]"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              Have a workflow, idea, or process you want to turn into a system?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-subtext text-[#888] text-lg sm:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
              Tell us what you&apos;re trying to improve. We&apos;ll help you
              understand what can be automated, what should be built, and what
              will create the most business value. First conversation is free
              and lasts 30 minutes.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
              <div className="relative inline-block w-full sm:w-auto">
                <span
                  className="absolute inset-0 rounded-xl bg-white opacity-20 animate-ping pointer-events-none"
                  style={{ animationDuration: "2s" }}
                  aria-hidden="true"
                />
                <Link
                  href="/contact"
                  className="btn-shimmer relative inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#eee] transition-colors w-full sm:w-auto min-h-[52px]"
                >
                  <span className="relative z-10">Book a Strategy Call</span>
                  <IconArrowRight
                    size={16}
                    stroke={2}
                    className="relative z-10"
                  />
                </Link>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-[#1a1a1a] text-[#888] px-8 py-4 rounded-xl hover:border-[#2a2a2a] hover:text-white transition-colors w-full sm:w-auto min-h-[52px]"
              >
                View Our Work →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-12 flex items-center justify-center gap-3 text-[#888] text-xs flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <IconLockSquare size={14} stroke={1.5} />
                All conversations are confidential
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <IconClock size={14} stroke={1.5} />
                Response within 24 hours
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
