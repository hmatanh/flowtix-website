"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  IconArrowRight,
  IconArrowDown,
  IconCheck,
  IconX,
  IconEye,
  IconTarget,
  IconUsers,
  IconInfinity,
} from "@tabler/icons-react";
import { FounderPhoto } from "@/components/FounderPhoto";
import { FadeIn } from "@/components/animations/FadeIn";
import { GlowCard } from "@/components/GlowCard";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const SKILLS = [
  "UI/UX Design",
  "Brand Strategy",
  "AI Systems",
  "Claude API",
  "Product Thinking",
  "Workflow Design",
  "Web Development",
];

const IS_LIST = [
  "A digital systems, automation, and product studio",
  "A team that designs AND builds — no handoffs, no gaps",
  "Specialists in making systems people actually want to use",
  "A company that explains everything in plain language",
  "A long-term partner, not a one-time vendor",
  "Builders who obsess over the details others skip",
];

const ISNT_LIST = [
  "A generic agency selling commodity services",
  "A company that outsources to cheaper developers",
  "An enterprise-only firm with minimum $100K projects",
  "A team that disappears after delivery",
  "A business that overcomplicates simple problems",
  "A studio that treats every client the same",
];

const VALUES = [
  {
    n: "01",
    icon: IconEye,
    title: "Design is never decoration.",
    body:
      "We don't add design at the end to make things look nice. We use design from the start to make things work better. Form and function are the same thing.",
  },
  {
    n: "02",
    icon: IconTarget,
    title: "Solve the right problem first.",
    body:
      "Before we write a line of code or design a single screen, we spend time understanding the actual problem. The obvious solution is rarely the best one.",
  },
  {
    n: "03",
    icon: IconUsers,
    title: "Systems are for humans.",
    body:
      "A system is only valuable when people actually use it. We design every product around the person who will work in it daily — not the engineer who built it.",
  },
  {
    n: "04",
    icon: IconInfinity,
    title: "Quality compounds over time.",
    body:
      "We build things to last. A system built correctly in week 1 gets more valuable every month. A system built quickly becomes a liability in month 3.",
  },
];

const STEPS = [
  {
    n: "01",
    duration: "Week 1",
    title: "Discovery",
    body:
      "We learn your business. Not just the brief — the real workflows, the real pain, the real people who will use what we build. We ask questions others skip.",
  },
  {
    n: "02",
    duration: "Week 1–2",
    title: "Design Architecture",
    body:
      "Before any code is written, we design the complete system experience. Every screen, every flow, every edge case. You approve it before we build it.",
  },
  {
    n: "03",
    duration: "Week 2–4",
    title: "Build",
    body:
      "Daily progress updates. You see the system being built in real-time, not in a big reveal at the end. Faster iteration, fewer surprises.",
  },
  {
    n: "04",
    duration: "Week 4",
    title: "Testing & Refinement",
    body:
      "Real users, real data. We test thoroughly before calling anything finished. Every piece of feedback is addressed before delivery.",
  },
  {
    n: "05",
    duration: "Week 4+",
    title: "Delivery & Optimization",
    body:
      "Full handover with documentation and training. Then 30 days of monitoring and optimization to ensure the system performs as designed in the real world.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== 1. HERO — refined, not min-h-screen ===== */}
      <section className="relative flex items-center justify-center overflow-hidden py-20 sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className="absolute top-[-200px] right-[-300px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)",
          }}
        />
        {/* Decorative gradient lines */}
        <m.div
          aria-hidden="true"
          className="absolute top-1/3 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
        <m.div
          aria-hidden="true"
          className="absolute bottom-1/3 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />

        <div className="relative page-container text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#cccccc] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                Our Story
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="font-black text-white tracking-tighter leading-[1.02] sm:leading-[0.95]"
              style={{ fontSize: "clamp(38px, 7vw, 88px)" }}
            >
              We replace{" "}
              <span className="gradient-text-blue">manual work</span>
              <br className="hidden sm:inline" /> with real digital
              <br className="hidden sm:inline" /> systems.
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[#aaa] text-base sm:text-lg lg:text-xl leading-[1.65] sm:leading-relaxed max-w-2xl mx-auto mt-7 sm:mt-8 px-2">
              Flowtix is a digital solutions studio. We design and build the
              custom systems, automations, AI agents, internal tools, and
              digital products that move businesses forward.
            </p>
          </FadeIn>

          {/* Quick credentials strip */}
          <FadeIn delay={0.35}>
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 max-w-md sm:max-w-lg mx-auto">
              {[
                { value: "10+", label: "Years design" },
                { value: "5+", label: "AI shipped" },
                { value: "5", label: "Industries" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[#1a1a1a] bg-[#080808] p-3 sm:p-4 text-center"
                >
                  <div className="text-white font-black tabular-nums tracking-tight text-lg sm:text-xl">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <m.div
              className="mt-12 sm:mt-14 inline-flex flex-col items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[#333] text-[10px] uppercase tracking-[0.2em]">
                Scroll
              </span>
              <IconArrowDown size={16} stroke={1.5} aria-hidden="true" className="text-[#333]" />
            </m.div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 2. FOUNDER SPOTLIGHT ===== */}
      <section className="section-contain py-24 lg:py-32">
        <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT — Photo */}
          <div className="order-1">
            <FounderPhoto />
            <m.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="text-center mt-8"
            >
              <div
                className="font-black tracking-tight text-white"
                style={{
                  fontSize: "clamp(22px, 3vw, 28px)",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #BFDBFE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Matan Hanasav
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="block h-px w-6 bg-gradient-to-r from-transparent to-blue-500/60" />
                <div className="text-blue-300/80 text-[11px] uppercase tracking-[0.22em] font-mono">
                  Founder &amp; Creative Director
                </div>
                <span className="block h-px w-6 bg-gradient-to-l from-transparent to-blue-500/60" />
              </div>
              <div className="text-[#555] text-xs mt-2 tracking-wide">
                10+ years · UI/UX &amp; AI Systems
              </div>
            </m.div>
          </div>

          {/* RIGHT — Story */}
          <div className="order-2 text-left">
            <FadeIn direction="left">
              <div className="section-label text-blue-400/80 text-[11px] tracking-widest uppercase mb-6">
                The Founder
              </div>
              <h2
                className="section-heading text-white font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
              >
                A designer who learned to build AI.
              </h2>

              <div className="space-y-4 mt-8">
                <p className="text-[#aaa] text-base leading-relaxed">
                  After a decade designing digital products and brand identities
                  for companies across multiple industries, I kept seeing the
                  same problem: businesses were running on manual work, in
                  systems nobody had actually designed for them. The cost
                  wasn&apos;t the software — it was the hours their teams
                  spent compensating for it.
                </p>
                <p className="text-[#aaa] text-base leading-relaxed">
                  I started building the systems those teams should have had
                  in the first place — internal tools, dashboards, automations,
                  and AI workflows wired directly into the way the business
                  actually worked. Deep product thinking, ten years of UX
                  expertise, and modern build tools turned out to be the
                  combination most agencies were missing.
                </p>
                <p className="text-[#aaa] text-base leading-relaxed">
                  Flowtix was founded on a single conviction: the best systems
                  aren&apos;t the most technically complex ones. They&apos;re
                  the ones that fit the specific business using them. That&apos;s
                  what we build.
                </p>
              </div>

              <div className="bg-[#0D0D0D] border-l-2 border-blue-500 pl-6 py-4 mt-8 rounded-r-lg">
                <p className="text-[#cccccc] text-lg italic leading-relaxed">
                  &ldquo;Every system we build starts with one question: would I
                  be proud to use this myself?&rdquo;
                </p>
              </div>

              <div className="mt-7 sm:mt-8 flex flex-wrap gap-2">
                {SKILLS.map((s, i) => (
                  <m.span
                    key={s}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: EASE }}
                    className="rounded-full px-4 py-2 text-[#aaa] text-xs sm:text-sm border transition-colors hover:text-white hover:border-blue-500/30"
                    style={{
                      background: "#0D0D0D",
                      borderColor: "#1a1a1a",
                    }}
                  >
                    {s}
                  </m.span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 3. THE COMPANY (IS / IS NOT) ===== */}
      <section className="section-contain py-24 lg:py-32 bg-[#040404] border-y border-[#0a0a0a]">
        <div className="page-container">
          <FadeIn>
            <h2
              className="section-heading text-white font-bold text-center tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              What Flowtix is — and what it isn&apos;t.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
            <FadeIn direction="right">
              <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 h-full">
                <div className="text-blue-500 text-sm uppercase tracking-wider mb-6">
                  Flowtix IS…
                </div>
                <ul className="space-y-4">
                  {IS_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconCheck
                        size={16}
                        stroke={2.5}
                        className="text-blue-500 mt-1 shrink-0"
                      />
                      <span className="text-[#aaa] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 h-full">
                <div className="text-[#555] text-sm uppercase tracking-wider mb-6">
                  Flowtix is NOT…
                </div>
                <ul className="space-y-4">
                  {ISNT_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconX
                        size={16}
                        stroke={2.5}
                        className="text-[#333] mt-1 shrink-0"
                      />
                      <span className="text-[#6a6a6a] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 4. OUR VALUES ===== */}
      <section className="section-contain py-24 lg:py-32">
        <div className="page-container">
          <FadeIn>
            <h2
              className="section-heading text-white font-bold text-center tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              What we believe.
            </h2>
          </FadeIn>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <m.div
                  key={v.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                >
                  <GlowCard className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 hover:border-blue-500/25 transition-all duration-500 h-full">
                    {/* Brand-color subtle corner glow */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-50"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%)",
                        filter: "blur(15px)",
                      }}
                    />
                    {/* Number with stroke effect */}
                    <div
                      className="absolute top-5 right-5 text-4xl sm:text-5xl font-black tracking-tighter pointer-events-none select-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(59,130,246,0.15)",
                      }}
                    >
                      {v.n}
                    </div>
                    {/* Icon in branded frame */}
                    <div
                      className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{
                        background: "rgba(59,130,246,0.08)",
                        border: "1px solid rgba(59,130,246,0.20)",
                      }}
                    >
                      <Icon
                        size={22}
                        stroke={1.5}
                        aria-hidden="true"
                        className="text-blue-400"
                      />
                    </div>
                    <h3 className="relative text-white text-lg sm:text-xl font-bold mt-6 sm:mt-8 tracking-tight leading-[1.2]">
                      {v.title}
                    </h3>
                    <p className="relative text-[#aaa] text-[14px] sm:text-sm leading-[1.65] sm:leading-relaxed mt-2.5 sm:mt-3">
                      {v.body}
                    </p>
                  </GlowCard>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 5. HOW WE WORK ===== */}
      <section className="section-contain py-24 lg:py-32 bg-[#040404] border-y border-[#0a0a0a]">
        <div className="page-container">
          <FadeIn>
            <h2
              className="section-heading text-white font-bold text-center tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              How every project works.
            </h2>
            <p className="section-subtext text-[#6a6a6a] text-center mt-4 max-w-xl mx-auto">
              The same process, every time. Because it works every time.
            </p>
          </FadeIn>

          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute left-6 top-0 bottom-0 w-px bg-[#111]"
            />
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              aria-hidden="true"
              className="absolute left-6 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-blue-500/30 via-blue-500/15 to-transparent"
            />
            {STEPS.map((s, i) => (
              <m.div
                key={s.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                className="relative flex items-start gap-6 sm:gap-8 pb-12 last:pb-0 text-left"
              >
                <div className="relative shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full border border-[#1a1a1a] bg-[#0D0D0D] flex items-center justify-center text-[#555] text-sm font-mono">
                    {s.n}
                  </div>
                </div>
                <div className="pt-1">
                  <div className="text-blue-400/70 text-[10px] uppercase tracking-widest">
                    {s.duration}
                  </div>
                  <h3 className="text-white text-lg font-semibold mt-1">
                    {s.title}
                  </h3>
                  <p className="text-[#6a6a6a] text-sm leading-relaxed mt-2 max-w-lg">
                    {s.body}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. THE BIGGER PICTURE / VISION ===== */}
      <section className="section-contain relative py-24 lg:py-32 overflow-hidden">
        {/* Vision orb — sits behind the text */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.04) 35%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="relative page-container text-center">
          <FadeIn>
            <h2
              className="section-heading text-white font-bold tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              The bigger picture.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="section-subtext text-[#555] text-xl sm:text-2xl leading-relaxed mt-8 font-light max-w-3xl mx-auto">
              A world where every business — regardless of size or technical
              resources — has access to the intelligent systems that were
              previously only available to companies with large engineering
              teams.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12">
              <p className="text-white text-lg font-semibold">
                We&apos;re at the beginning of that.
              </p>
              <p className="text-[#555] text-base mt-2">
                Every system we build is a step toward it.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#eee] transition-colors min-h-[48px] w-full sm:w-auto"
              >
                Book a Strategy Call
                <IconArrowRight size={16} stroke={2} aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-[#1a1a1a] text-[#aaa] px-8 py-4 rounded-xl text-sm hover:border-[#2a2a2a] hover:text-white transition-colors min-h-[48px] w-full sm:w-auto"
              >
                View our work →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
