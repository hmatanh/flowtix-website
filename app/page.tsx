"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import {
  IconArrowRight,
  IconLockSquare,
  IconClock,
  IconMail,
  IconArrowBackUp,
  IconVideo,
  IconFileText,
  IconCode,
} from "@tabler/icons-react";
import { PerspectiveGrid } from "@/components/PerspectiveGrid";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";

// Dynamic imports — heavy interactive components load after first paint.
// Keeps initial JS small; users see hero structure immediately.
const HeroAIDemo = dynamic(
  () => import("@/components/HeroAIDemo").then((m) => ({ default: m.HeroAIDemo })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full rounded-2xl bg-[#080808] border border-[#0f0f0f] h-[420px] animate-pulse" />
    ),
  }
);
const LiveActivityFeed = dynamic(
  () => import("@/components/LiveActivityFeed").then((m) => ({ default: m.LiveActivityFeed })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full rounded-2xl bg-[#080808] border border-[#0f0f0f] h-[120px] animate-pulse" />
    ),
  }
);
const MorphHeadline = dynamic(
  () => import("@/components/MorphHeadline").then((m) => ({ default: m.MorphHeadline })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[140px] sm:h-[180px] lg:h-[220px] w-full max-w-xl bg-transparent" />
    ),
  }
);
const IntelligenceStack = dynamic(
  () => import("@/components/IntelligenceStack").then((m) => ({ default: m.IntelligenceStack })),
  {
    ssr: false,
    loading: () => <div className="h-[600px] w-full" />,
  }
);
const FAQ = dynamic(
  () => import("@/components/FAQ").then((m) => ({ default: m.FAQ })),
  {
    ssr: false,
    loading: () => <div className="h-[400px] w-full" />,
  }
);
const Availability = dynamic(
  () => import("@/components/Availability").then((m) => ({ default: m.Availability })),
  {
    ssr: false,
    loading: () => <div className="h-[300px] w-full" />,
  }
);
const ByTheNumbers = dynamic(
  () => import("@/components/ByTheNumbers").then((m) => ({ default: m.ByTheNumbers })),
  {
    ssr: false,
    loading: () => <div className="h-[400px] w-full" />,
  }
);
const PricingCalculator = dynamic(
  () => import("@/components/PricingCalculator").then((m) => ({ default: m.PricingCalculator })),
  {
    ssr: false,
    loading: () => <div className="h-[500px] w-full" />,
  }
);
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { ListingMockup } from "@/components/projects/ListingMockups";
import { ClientLogo } from "@/components/clients/logos/ClientLogo";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// ===== Section data =====

const HERO_STATS = [
  { value: "10+ Years", label: "Design Experience" },
  { value: "50+", label: "Systems Shipped" },
  { value: "48 Hours", label: "Avg. First Deploy" },
];

const SOCIAL_STATS = [
  { value: 10, suffix: "+", label: "Years of Design Mastery" },
  { value: 50, suffix: "+", label: "Systems Shipped" },
  { value: 3, suffix: "×", label: "Average Client ROI" },
  { value: 12, label: "Industries Served" },
  { value: 48, suffix: "h", label: "To First Deployment" },
];

const PAINS = [
  "Teams don’t use the tools built for them because the UX is confusing.",
  "AI projects cost $50K+ and deliver less value than a $100/mo SaaS tool.",
  "Generic AI sounds nothing like your brand voice.",
  "Integrations break every time a connected app updates.",
];

const TIMELINE = [
  {
    n: "01",
    week: "Week 1",
    title: "Discovery & Audit",
    text: "We map your current operations, identify the exact pain points, and quantify the cost of each problem. You get a clear picture of what AI can solve before we write a line of code.",
  },
  {
    n: "02",
    week: "Week 1–2",
    title: "System Architecture",
    text: "We design the technical blueprint and the user experience simultaneously. Every screen, every flow, every edge case — designed before we build anything.",
  },
  {
    n: "03",
    week: "Week 2–3",
    title: "Build & Integrate",
    text: "Development begins with daily check-ins. You see progress every 48 hours, not a big reveal at the end. We integrate with your existing tools without disrupting what’s working.",
  },
  {
    n: "04",
    week: "Week 3–4",
    title: "Test & Refine",
    text: "Real users, real data, real feedback. We run structured testing sessions, capture every piece of feedback, and iterate fast until the system is ready.",
  },
  {
    n: "05",
    week: "Week 4+",
    title: "Deploy & Optimize",
    text: "We deploy with a full handoff: documentation, training, and a 30-day optimization window where we monitor performance and tune the system based on real usage data.",
  },
];

type CompareValue = { icon: "✓" | "✗" | "~" | "$"; text: string };
const COMPARE_ROWS: {
  label: string;
  flowtix: CompareValue;
  agency: CompareValue;
  tool: CompareValue;
}[] = [
  { label: "Design quality", flowtix: { icon: "✓", text: "Premium" }, agency: { icon: "~", text: "Varies" }, tool: { icon: "✗", text: "Template" } },
  { label: "Custom to your business", flowtix: { icon: "✓", text: "Always" }, agency: { icon: "~", text: "Sometimes" }, tool: { icon: "✗", text: "Never" } },
  { label: "AI-native from the ground up", flowtix: { icon: "✓", text: "Always" }, agency: { icon: "✗", text: "Rarely" }, tool: { icon: "~", text: "Sometimes" } },
  { label: "Deployment speed", flowtix: { icon: "✓", text: "2–4 weeks" }, agency: { icon: "✗", text: "3–6 months" }, tool: { icon: "✓", text: "Instant (limited)" } },
  { label: "Ongoing optimization", flowtix: { icon: "✓", text: "Included" }, agency: { icon: "$", text: "Extra cost" }, tool: { icon: "✗", text: "None" } },
  { label: "Single point of contact", flowtix: { icon: "✓", text: "Always" }, agency: { icon: "✗", text: "Account managers" }, tool: { icon: "✗", text: "Support tickets" } },
  { label: "Scales with your business", flowtix: { icon: "✓", text: "Built for it" }, agency: { icon: "~", text: "Maybe" }, tool: { icon: "✗", text: "Rarely" } },
  { label: "Transparent pricing", flowtix: { icon: "✓", text: "Always" }, agency: { icon: "✗", text: "Scope creep" }, tool: { icon: "✓", text: "Fixed" } },
];

function CompareCell({ v, highlight }: { v: CompareValue; highlight?: boolean }) {
  const colorByIcon: Record<CompareValue["icon"], string> = {
    "✓": "text-emerald-400",
    "✗": "text-[#222]",
    "~": "text-[#444]",
    $: "text-amber-400",
  };
  return (
    <div className={`py-4 px-3 text-center text-sm ${highlight ? "text-white" : "text-[#666]"}`}>
      <span className={`mr-2 ${colorByIcon[v.icon]}`}>{v.icon}</span>
      <span>{v.text}</span>
    </div>
  );
}

const INDUSTRIES_12 = [
  "E-commerce & DTC",
  "SaaS & Technology",
  "Marketing Agencies",
  "Professional Services",
  "Healthcare & Wellness",
  "Real Estate",
  "Finance & Fintech",
  "Education & EdTech",
  "Hospitality & F&B",
  "Logistics & Operations",
  "Legal Services",
  "Media & Publishing",
];

const FIRST_WEEK = [
  {
    day: "Day 1",
    icon: IconMail,
    title: "You send us a message.",
    sub: "Tell us what you’re trying to build — even one paragraph is enough.",
  },
  {
    day: "Day 2",
    icon: IconArrowBackUp,
    title: "We respond within 24 hours.",
    sub: "A real human reads it. We reply with thoughts, not a templated form.",
  },
  {
    day: "Day 3",
    icon: IconVideo,
    title: "Discovery call — 30 minutes.",
    sub: "Free, low-pressure. We dig into the problem and your constraints.",
  },
  {
    day: "Day 5",
    icon: IconFileText,
    title: "You receive a detailed proposal.",
    sub: "Scope, timeline, and a fixed price. No hourly billing surprises.",
  },
  {
    day: "Day 7",
    icon: IconCode,
    title: "We start building.",
    sub: "First demo within 48 hours. Daily check-ins until launch.",
  },
];

// ===== Component =====

export default function Home() {
  // Mouse-parallax for the hero blue orb (very subtle; desktop only).
  const orbX = useMotionValue(0);
  const orbY = useMotionValue(0);
  const orbSpringX = useSpring(orbX, { stiffness: 60, damping: 25 });
  const orbSpringY = useSpring(orbY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    function onMove(e: MouseEvent) {
      // Range ±18px — "very slight" per the brief
      const nx = (e.clientX / window.innerWidth - 0.5) * 36;
      const ny = (e.clientY / window.innerHeight - 0.5) * 36;
      orbX.set(nx);
      orbY.set(ny);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [orbX, orbY]);

  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-screen flex items-center px-6 md:px-10 xl:px-12 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 overflow-hidden">
        <PerspectiveGrid />
        <m.div
          className="absolute top-[-200px] right-[-300px] w-[900px] h-[600px] rounded-full pointer-events-none animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
            x: orbSpringX,
            y: orbSpringY,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <m.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1a1a1a] bg-[#080808] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#cccccc] text-[11px] tracking-[0.12em] uppercase font-medium">
                AI-Powered Systems
              </span>
              <span className="text-[#333] text-[11px]">·</span>
              <span className="text-[#cccccc] text-[11px] tracking-[0.12em] uppercase font-medium">
                Design-First Studio
              </span>
            </m.div>

            <MorphHeadline />

            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
              className="text-[#666] text-lg md:text-xl mt-7 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              We combine 10+ years of design mastery with frontier AI to build
              systems that don&apos;t just work — they get used, loved, and
              scaled.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex items-center gap-6 flex-wrap justify-center lg:justify-start"
            >
              {HERO_STATS.map((s, i) => (
                <span key={s.value} className="inline-flex items-center gap-6">
                  <span>
                    <span className="block text-white text-sm font-semibold">
                      {s.value}
                    </span>
                    <span className="block text-[#333] text-xs mt-0.5">
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
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <MagneticButton strength={0.25} className="btn-pulse-ring rounded-xl">
                <Link
                  href="/services"
                  className="btn-shimmer relative z-[1] inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#eee] transition-colors min-h-[48px]"
                >
                  <span className="relative z-10">See What We Build</span>
                  <IconArrowRight size={16} stroke={2} aria-hidden="true" className="relative z-10" />
                </Link>
              </MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center border border-[#1a1a1a] text-[#555] px-7 py-3.5 rounded-xl text-sm hover:border-[#2a2a2a] hover:text-[#888] transition-all"
              >
                View Our Work →
              </Link>
            </m.div>
          </div>

          {/* Right: AI demo (top, ~60%) + Live feed (bottom, ~40%) */}
          <m.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: EASE }}
            className="flex flex-col gap-4 w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
          >
            <HeroAIDemo />
            <LiveActivityFeed />
          </m.div>
        </div>

        {/* Scroll indicator — bottom of hero, pulses gently */}
        <m.div
          aria-hidden="true"
          className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="text-[#333] text-[10px] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <m.span
            className="block w-px bg-[#333]"
            style={{ height: 28, transformOrigin: "top" }}
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </m.div>
      </section>

      {/* ===== 2. SOCIAL PROOF COUNTER STRIP ===== */}
      <section className="section-contain py-20 border-y border-[#080808] bg-[#030303]">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-stretch gap-y-10">
          {SOCIAL_STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex items-stretch flex-1 min-w-[40%] sm:min-w-[20%]"
            >
              <div className="flex-1 text-center px-3">
                <div className="text-4xl font-black text-white tracking-tight">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                  />
                </div>
                <div className="text-[#333] text-xs tracking-wider mt-2 uppercase">
                  {s.label}
                </div>
              </div>
              {i < SOCIAL_STATS.length - 1 && (
                <div className="bg-[#0f0f0f] w-px h-12 self-center" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. INDUSTRIES — trust marquee ===== */}
      <section className="section-contain py-20 lg:py-24 border-y border-[#080808] bg-black overflow-hidden">
        <FadeIn>
          <h2
            className="text-white font-bold text-center tracking-tight px-4"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
          >
            Trusted by businesses across{" "}
            <span className="gradient-text-blue">12 industries</span>.
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {/* Row 1 — rightward */}
          <div className="overflow-hidden relative">
            <div className="marquee-track inline-flex whitespace-nowrap">
              {[0, 1].map((dup) => (
                <span key={dup} className="inline-flex shrink-0">
                  {INDUSTRIES_12.slice(0, 6).map((t, i) => (
                    <span
                      key={`a-${dup}-${i}`}
                      className="inline-flex items-center text-[#444] text-sm tracking-[0.18em] uppercase"
                    >
                      <span className="mx-8">{t}</span>
                      <span className="text-[#1a1a1a]">·</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          {/* Row 2 — leftward, slightly faster */}
          <div className="overflow-hidden relative">
            <div className="marquee-track-reverse inline-flex whitespace-nowrap">
              {[0, 1].map((dup) => (
                <span key={dup} className="inline-flex shrink-0">
                  {INDUSTRIES_12.slice(6, 12).map((t, i) => (
                    <span
                      key={`b-${dup}-${i}`}
                      className="inline-flex items-center text-[#444] text-sm tracking-[0.18em] uppercase"
                    >
                      <span className="mx-8">{t}</span>
                      <span className="text-[#1a1a1a]">·</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[#555] text-sm text-center mt-10 max-w-2xl mx-auto px-4 leading-relaxed">
          From solo founders to scaling teams — we build AI systems for
          businesses that refuse to settle.
        </p>
      </section>

      {/* ===== 4. THE PROBLEM WE SOLVE ===== */}
      <section className="relative section-contain py-24 md:py-32 lg:py-40 px-6 md:px-10 xl:px-12">
        <span className="section-number" aria-hidden="true">
          01
        </span>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          <FadeIn direction="right">
            <div className="text-[#222] text-[10px] tracking-widest uppercase section-label">
              The Problem
            </div>
            <h2
              className="font-black tracking-tight leading-[0.95] text-white mt-6"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              The AI revolution has a
              <br />
              <span className="gradient-text-blue">design problem.</span>
            </h2>
            <p className="text-[#666] text-lg leading-relaxed mt-8 max-w-lg">
              72% of AI implementations fail to deliver expected ROI. Not
              because the AI isn&apos;t capable — because nobody designed the
              experience. Flowtix was built to fix that.
            </p>
            <div className="mt-8 space-y-2 max-w-lg">
              {[
                "72% of AI projects underdeliver — McKinsey, 2024",
                "61% of employees resist new AI tools — Gartner, 2024",
                "Design-led companies outperform by 211% — McKinsey",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2.5 text-[#444] text-xs">
                  <span className="w-1 h-1 rounded-full bg-blue-500/60 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <span className="text-[#222] text-[10px] uppercase tracking-widest">
                      Common Problem
                    </span>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed">{p}</p>
                </m.div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="site-container">
          <div className="hr-gradient mt-16 mb-6" />
          <p className="text-[#444] text-sm text-center">
            We built Flowtix because we experienced every one of these
            problems firsthand.
          </p>
        </div>
      </section>

      {/* ===== INTELLIGENCE STACK ===== */}
      <IntelligenceStack />

      {/* ===== 5. SERVICES HORIZONTAL SCROLL ===== */}
      <section className="section-contain py-32">
        <div className="site-container mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="text-[#333] text-[10px] tracking-widest uppercase section-label">
                What We Build
              </div>
              <h2 className="text-h2 gradient-text mt-3 max-w-xl section-heading">
                Every service. One team.
              </h2>
              <p className="text-[#666] text-[17px] mt-4 max-w-lg leading-relaxed">
                We don&apos;t outsource. Everything is built in-house, by the
                same people you talk to.
              </p>
            </div>
            <Link
              href="/services"
              className="animated-link text-[#555] hover:text-white text-sm whitespace-nowrap"
            >
              See all services →
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar" style={{ scrollSnapType: "x mandatory" }}>
          <div className="inline-flex gap-4 px-6 lg:px-8" style={{ width: "max-content" }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="group relative w-72 h-72 shrink-0 bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-[#2a2a2a] hover:-translate-y-1.5 animate-border-pulse"
                  style={{
                    scrollSnapAlign: "start",
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={24}
                      stroke={1.5}
                      className="text-[#222] group-hover:text-blue-500 transition-colors"
                    />
                    <div className="text-[#111] text-[11px] font-mono">
                      {s.number}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-white text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[#555] text-sm mt-2 leading-relaxed line-clamp-3">
                      {s.short}
                    </p>
                  </div>
                  <div className="mt-4 text-[#222] text-xs group-hover:text-[#666] transition-colors animated-link inline-flex items-center gap-1">
                    Explore
                    <IconArrowRight size={12} stroke={2} aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
            <div className="w-1 shrink-0" />
          </div>
        </div>
        <div className="text-[#1a1a1a] text-xs text-center mt-6">
          ← Scroll to explore →
        </div>
      </section>

      {/* ===== BY THE NUMBERS ===== */}
      <ByTheNumbers />

      {/* ===== 6. HOW WE WORK TIMELINE ===== */}
      <section className="section-contain py-32 bg-[#030303] border-y border-[#080808] px-6 md:px-10 xl:px-12">
        <div className="text-center mb-20">
          <FadeIn>
            <div className="text-[#333] text-[10px] tracking-widest uppercase mb-4 section-label">
              The Process
            </div>
            <h2 className="text-h2 gradient-text section-heading">
              From conversation to deployment.
            </h2>
            <p className="text-[#666] text-[17px] mt-4 max-w-xl mx-auto leading-relaxed">
              A clear, repeatable process. No surprises. No scope creep.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-[#0f0f0f]" />
          <m.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute left-8 top-8 bottom-8 w-px origin-top bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent"
          />
          {TIMELINE.map((t, i) => (
            <m.div
              key={t.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              className="relative flex gap-6 pb-14 last:pb-0"
            >
              <div className="relative shrink-0 z-10">
                <div className="w-16 h-16 rounded-full border border-blue-500/30 bg-[#0D0D0D] flex items-center justify-center text-blue-400 text-sm font-mono">
                  {t.n}
                </div>
              </div>
              <div className="pt-2">
                <div className="text-[#222] text-[10px] tracking-widest uppercase section-label">
                  {t.week}
                </div>
                <h3 className="text-white text-xl font-semibold mt-1 tracking-tight">
                  {t.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed mt-3 max-w-lg">
                  {t.text}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </section>

      {/* ===== 7. FEATURED WORK ===== */}
      <section className="section-contain py-32 px-6 md:px-10 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <div className="text-[#333] text-[10px] tracking-widest uppercase mb-4 section-label">
                  Selected Work
                </div>
                <h2 className="text-h2 gradient-text section-heading">Systems we&apos;ve built.</h2>
              </div>
              <Link
                href="/work"
                className="animated-link text-[#555] hover:text-white text-sm whitespace-nowrap"
              >
                View All Work →
              </Link>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {projects.slice(0, 3).map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/work/${p.slug}/`}
                  className="group relative block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 h-full"
                  style={{
                    background: p.brand.dark,
                    borderColor: "rgba(255,255,255,0.05)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${p.brand.accentRGB}, 0.35)`;
                    e.currentTarget.style.boxShadow = `0 30px 80px rgba(0,0,0,0.45), 0 0 60px rgba(${p.brand.accentRGB}, 0.10)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0,0,0,0.35)";
                  }}
                >
                  {/* Brand glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 70% 40% at 50% 0%, rgba(${p.brand.accentRGB},0.12), transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Mockup area */}
                  <div
                    className="relative h-56 lg:h-60 overflow-hidden flex items-center justify-center p-5"
                    style={{
                      background: `linear-gradient(180deg, ${p.brand.dark} 0%, #000 100%)`,
                    }}
                  >
                    {/* Soft accent halo behind mockup */}
                    <div
                      className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, rgba(${p.brand.accentRGB},0.18), transparent 65%)`,
                        filter: "blur(40px)",
                      }}
                      aria-hidden="true"
                    />
                    {/* Actual mockup, scaled */}
                    <div className="relative w-full max-w-[90%] transition-transform duration-500 group-hover:scale-[1.04]">
                      <ListingMockup slug={p.slug} />
                    </div>
                  </div>

                  {/* Divider gradient */}
                  <div
                    className="h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(${p.brand.accentRGB},0.25), transparent)`,
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative p-6">
                    {/* Client logo + year */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-8 flex items-center">
                        <ClientLogo slug={p.slug} height={26} />
                      </div>
                      <span className="text-[#333] text-[11px] font-mono">
                        {p.year}
                      </span>
                    </div>

                    <div
                      className="text-[10px] tracking-widest uppercase mb-3"
                      style={{ color: p.brand.textOnBrand, opacity: 0.55 }}
                    >
                      {p.category}
                    </div>
                    <p className="text-white text-base font-semibold tracking-tight leading-snug">
                      {p.tagline}
                    </p>
                    <p className="text-[#666] text-sm mt-3 leading-relaxed line-clamp-2">
                      {p.description}
                    </p>

                    {/* Stack pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            color: p.brand.textOnBrand,
                            background: `rgba(${p.brand.accentRGB},0.06)`,
                            border: `1px solid rgba(${p.brand.accentRGB},0.15)`,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                      {p.stack.length > 3 && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full text-[#444]"
                          style={{
                            border: "1px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          +{p.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA row */}
                    <div
                      className="mt-6 pt-4 border-t flex items-center justify-between text-xs"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <span
                        className="font-medium tracking-tight"
                        style={{ color: p.brand.textOnBrand, opacity: 0.7 }}
                      >
                        Read case study
                      </span>
                      <span
                        className="inline-flex items-center gap-1 transition-all"
                        style={{ color: p.brand.primary }}
                      >
                        View
                        <IconArrowRight
                          size={13}
                          stroke={2}
                          aria-hidden="true"
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== 8. COMPARISON TABLE ===== */}
      <section className="section-contain py-32 bg-[#030303] border-y border-[#080808] px-6 md:px-10 xl:px-12">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="text-[#333] text-[10px] tracking-widest uppercase mb-4 section-label">
              The Difference
            </div>
            <h2 className="text-h2 gradient-text section-heading">
              Why businesses choose Flowtix.
            </h2>
            <p className="text-[#666] text-[17px] mt-4 max-w-xl mx-auto leading-relaxed">
              Over generic agencies, freelancers, and off-the-shelf tools.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute top-0 bottom-0 left-1/4 w-1/4 bg-[#0D0D0D] border border-blue-500/20 rounded-xl pointer-events-none" />

          <div className="relative grid grid-cols-4 border-b border-[#0a0a0a]">
            <div />
            <div className="py-4 text-center text-white text-sm font-semibold tracking-tight">
              Flowtix
            </div>
            <div className="py-4 text-center text-[#666] text-sm">
              Generic Agency
            </div>
            <div className="py-4 text-center text-[#666] text-sm">
              Off-the-shelf
            </div>
          </div>

          {COMPARE_ROWS.map((row, i) => (
            <m.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
              className="relative grid grid-cols-4 border-b border-[#0a0a0a] last:border-b-0"
            >
              <div className="py-4 px-3 text-[#aaa] text-sm">{row.label}</div>
              <CompareCell v={row.flowtix} highlight />
              <CompareCell v={row.agency} />
              <CompareCell v={row.tool} />
            </m.div>
          ))}
        </div>
      </section>

      {/* ===== 9. INDUSTRIES ===== */}
      <section className="section-contain py-24 px-6 md:px-10 xl:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <div className="text-[#333] text-[10px] tracking-widest uppercase mb-4 section-label">
              Industries
            </div>
            <h2 className="text-h2 gradient-text section-heading">
              We work across every industry.
            </h2>
          </FadeIn>
          <StaggerContainer
            className="mt-10 flex flex-wrap justify-center gap-3"
            stagger={0.04}
          >
            {INDUSTRIES_12.map((i) => (
              <StaggerItem key={i}>
                <span className="inline-block bg-[#0D0D0D] border border-[#1a1a1a] rounded-full px-5 py-2.5 text-sm text-[#555] hover:border-blue-500/30 hover:text-[#666] transition-colors cursor-default">
                  {i}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQ />

      {/* ===== PRICING CALCULATOR ===== */}
      <PricingCalculator />

      {/* ===== FIRST 7 DAYS — onboarding preview ===== */}
      <section className="section-contain relative py-24 lg:py-32 px-6 md:px-10 xl:px-12 overflow-hidden">
        <span className="section-number" aria-hidden="true">
          09
        </span>
        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-[#222] text-[10px] tracking-widest uppercase section-label text-center">
              How it starts
            </div>
            <h2
              className="font-black tracking-tight text-white text-center mt-5 leading-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
            >
              From first message to first build:{" "}
              <span className="gradient-text-blue">7 days.</span>
            </h2>
            <p className="text-[#555] text-center mt-4 text-sm max-w-xl mx-auto leading-relaxed">
              No back-and-forth, no chasing. Here&apos;s what the first week
              looks like.
            </p>
          </FadeIn>

          <div className="relative mt-16">
            {/* Connecting line — desktop only, animated draw */}
            <m.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="hidden md:block absolute left-[8%] right-[8%] top-[28px] h-px origin-left bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"
            />

            <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {FIRST_WEEK.map((d, i) => {
                const Icon = d.icon;
                return (
                  <m.li
                    key={d.day}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.5,
                      ease: EASE,
                    }}
                    className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
                  >
                    <div className="relative shrink-0 z-10">
                      <div className="w-14 h-14 rounded-full bg-[#0D0D0D] border border-[#1a1a1a] flex items-center justify-center text-[#666]">
                        <Icon size={20} stroke={1.5} aria-hidden="true" />
                      </div>
                    </div>
                    <div className="md:mt-5 flex-1">
                      <div className="text-[#1a1a1a] text-[10px] uppercase tracking-[0.2em]">
                        {d.day}
                      </div>
                      <div className="text-white text-sm font-semibold mt-1.5 tracking-tight">
                        {d.title}
                      </div>
                      <div className="text-[#555] text-xs mt-1.5 leading-relaxed max-w-[180px] md:mx-auto">
                        {d.sub}
                      </div>
                    </div>
                  </m.li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== AVAILABILITY ===== */}
      <Availability />

      {/* ===== 10. FINAL CTA ===== */}
      <section className="section-contain relative py-40 text-center overflow-hidden px-6 md:px-10 xl:px-12">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0"
          aria-hidden="true"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
          style={{
            background: "rgba(59,130,246,1)",
            filter: "blur(200px)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#666] text-[11px] tracking-[0.12em] uppercase font-medium">
                Available for new projects
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="font-black tracking-tighter text-white leading-[1.05]"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              Let&apos;s build your unfair advantage.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#666] text-xl mt-6 max-w-xl mx-auto leading-relaxed">
              First conversation is free. No commitment. Just a clear picture
              of what AI can do for your business — in 30 minutes.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <div className="relative inline-block">
                <span
                  className="absolute inset-0 rounded-xl bg-white opacity-20 animate-ping pointer-events-none"
                  style={{ animationDuration: "2s" }}
                  aria-hidden="true"
                />
                <m.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(255,255,255,0.18)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative rounded-xl"
                >
                  <Link
                    href="/contact"
                    className="btn-shimmer relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#eee] transition-colors"
                  >
                    <span className="relative z-10">Book a Discovery Call</span>
                    <IconArrowRight size={16} stroke={2} aria-hidden="true" className="relative z-10" />
                  </Link>
                </m.div>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center border border-[#1a1a1a] text-[#666] px-8 py-4 rounded-xl hover:border-[#2a2a2a] hover:text-white transition-colors"
              >
                See Our Work →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-12 flex items-center justify-center gap-3 text-[#222] text-xs flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <IconLockSquare size={14} stroke={1.5} aria-hidden="true" />
                All conversations are confidential
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <IconClock size={14} stroke={1.5} aria-hidden="true" />
                Response within 24 hours
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
