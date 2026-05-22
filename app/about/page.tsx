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
  "A design-first product studio that builds with AI",
  "A team that designs AND builds — no handoffs, no gaps",
  "Specialists in making AI systems people actually want to use",
  "A company that explains everything in plain language",
  "A long-term partner, not a one-time vendor",
  "Builders who obsess over the details others skip",
];

const ISNT_LIST = [
  "A generic AI agency offering commodity services",
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
      "AI is only valuable when people use it. We design every system around the human who will interact with it daily — not the engineer who built it.",
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
      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-200px] right-[-300px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
            filter: "blur(150px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            mask:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)",
            WebkitMask:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 pt-40 pb-20 text-center">
          <FadeIn>
            <div className="section-label text-[#1a1a1a] text-[11px] tracking-[0.2em] uppercase mb-8">
              Our Story
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="section-heading font-black text-white tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
            >
              We believe <span className="gradient-text-blue">design</span> is the most
              <br className="hidden sm:inline" />{" "}
              underrated advantage in AI.
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="section-subtext text-[#444] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mt-8">
              Most AI tools are built by engineers for engineers. We built
              Flowtix for the humans who use them.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <m.div
              className="mt-16 inline-flex"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <IconArrowDown size={20} stroke={1.5} className="text-[#222]" />
            </m.div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 2. FOUNDER SPOTLIGHT ===== */}
      <section className="section-contain py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT — Photo */}
          <div className="order-1">
            <FounderPhoto />
            <div className="text-center mt-6">
              <div className="text-[#444] text-sm">
                Founder &amp; Creative Director
              </div>
              <div className="text-[#1a1a1a] text-xs mt-1 tracking-wide">
                10+ years · UI/UX &amp; AI Systems
              </div>
            </div>
          </div>

          {/* RIGHT — Story */}
          <div className="order-2 text-left">
            <FadeIn direction="left">
              <div className="section-label text-[#1a1a1a] text-[11px] tracking-widest uppercase mb-6">
                The Founder
              </div>
              <h2
                className="section-heading text-white font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
              >
                A designer who learned to build AI.
              </h2>

              <div className="space-y-4 mt-8">
                <p className="text-[#666] text-base leading-relaxed">
                  After a decade designing digital products and brand identities
                  for companies across multiple industries, I kept seeing the
                  same problem: businesses were investing in AI that nobody
                  actually used. Not because the technology wasn&apos;t capable
                  — because nobody had designed the experience.
                </p>
                <p className="text-[#666] text-base leading-relaxed">
                  I started learning how to build with AI tools — not as a
                  replacement for design, but as an extension of it. I
                  discovered that the combination of deep product thinking,
                  10 years of UX expertise, and the ability to build with
                  frontier AI models created something that didn&apos;t exist
                  in the market: AI systems that were genuinely beautiful to
                  use.
                </p>
                <p className="text-[#666] text-base leading-relaxed">
                  Flowtix was founded on a single conviction: the best AI
                  systems aren&apos;t the most technically complex ones.
                  They&apos;re the ones that feel like they were built for the
                  specific person using them. That&apos;s what we build.
                </p>
              </div>

              <div className="bg-[#0D0D0D] border-l-2 border-blue-500 pl-6 py-4 mt-8 rounded-r-lg">
                <p className="text-[#888] text-lg italic leading-relaxed">
                  &ldquo;Every system we build starts with one question: would I
                  be proud to use this myself?&rdquo;
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-full px-4 py-2 text-[#444] text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 3. THE COMPANY (IS / IS NOT) ===== */}
      <section className="section-contain py-24 lg:py-32 bg-[#040404] border-y border-[#0a0a0a] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                      <span className="text-[#888] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 h-full">
                <div className="text-[#444] text-sm uppercase tracking-wider mb-6">
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
                      <span className="text-[#555] text-sm leading-relaxed">
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
      <section className="section-contain py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2
              className="section-heading text-white font-bold text-center tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              What we believe.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <m.div
                  key={v.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                  className="relative bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 hover:border-[#222] transition-colors"
                >
                  <div className="absolute top-6 right-6 text-[#1a1a1a] text-5xl font-black tracking-tighter pointer-events-none">
                    {v.n}
                  </div>
                  <Icon size={28} stroke={1.5} className="text-[#333]" />
                  <h3 className="text-white text-xl font-bold mt-8 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed mt-3">
                    {v.body}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 5. HOW WE WORK ===== */}
      <section className="section-contain py-24 lg:py-32 bg-[#040404] border-y border-[#0a0a0a] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2
              className="section-heading text-white font-bold text-center tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              How every project works.
            </h2>
            <p className="section-subtext text-[#555] text-center mt-4 max-w-xl mx-auto">
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
                  <div className="w-12 h-12 rounded-full border border-[#1a1a1a] bg-[#0D0D0D] flex items-center justify-center text-[#444] text-sm font-mono">
                    {s.n}
                  </div>
                </div>
                <div className="pt-1">
                  <div className="text-[#1a1a1a] text-[10px] uppercase tracking-widest">
                    {s.duration}
                  </div>
                  <h3 className="text-white text-lg font-semibold mt-1">
                    {s.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed mt-2 max-w-lg">
                    {s.body}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. THE BIGGER PICTURE ===== */}
      <section className="section-contain py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2
              className="section-heading text-white font-bold tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              The bigger picture.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="section-subtext text-[#444] text-xl sm:text-2xl leading-relaxed mt-8 font-light max-w-3xl mx-auto">
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
              <p className="text-[#444] text-base mt-2">
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
                Start a project
                <IconArrowRight size={16} stroke={2} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-[#1a1a1a] text-[#888] px-8 py-4 rounded-xl text-sm hover:border-[#2a2a2a] hover:text-white transition-colors min-h-[48px] w-full sm:w-auto"
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
