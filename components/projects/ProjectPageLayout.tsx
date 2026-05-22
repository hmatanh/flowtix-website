"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { m } from "framer-motion";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowsHorizontal,
} from "@tabler/icons-react";
import type { Project } from "@/lib/projects";
import { getNextProject } from "@/lib/projects";
import { ClientLogo } from "@/components/clients/logos/ClientLogo";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn } from "@/components/animations/FadeIn";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* =========================================================================
   Types — what each project supplies
   ========================================================================= */
export type StatementStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type WhatWeBuiltItem = {
  number: string; // "01"
  title: string;
  body: string;
  visual: ReactNode;
  visualType?: "desktop" | "phone";
  url?: string; // for browser frame
};

export type GalleryItem = {
  id: string;
  name: string;
  description: string;
  visual: ReactNode;
  type?: "desktop" | "phone";
  url?: string;
  primary?: boolean;
};

export type ProcessChapter = {
  number: string; // "1/3"
  title: string;
  body: string;
  duration: string;
};

export type ProjectPageContent = {
  heroHeadline: string;
  keyMetric: string;
  statementStats: StatementStat[];
  challenge: { quote: string; paragraphs: string[] };
  solution: { quote: string; paragraphs: string[] };
  whatWeBuilt: WhatWeBuiltItem[];
  fullBleed: {
    visual: ReactNode;
    type?: "desktop" | "phone";
    url?: string;
    caption: string;
  };
  gallery: GalleryItem[];
  process: ProcessChapter[];
  testimonialFull: string; // full multi-sentence quote
  testimonialRole?: string;
};

/* =========================================================================
   Browser / Phone frames (small + reused)
   ========================================================================= */
function BrowserFrame({
  url,
  children,
  small = false,
}: {
  url: string;
  children: ReactNode;
  small?: boolean;
}) {
  return (
    <div
      className="rounded-2xl border"
      style={{
        background: "#1a1a1a",
        borderColor: "#222",
        padding: small ? 6 : 10,
        boxShadow: "0 60px 120px rgba(0,0,0,0.55)",
      }}
    >
      <div
        className={`bg-[#111] rounded-xl mb-2 flex items-center gap-2.5 ${
          small ? "px-2 py-1.5" : "px-3 py-2.5"
        }`}
      >
        <span className={`${small ? "w-2 h-2" : "w-2.5 h-2.5"} rounded-full bg-[#FF5F57]`} />
        <span className={`${small ? "w-2 h-2" : "w-2.5 h-2.5"} rounded-full bg-[#FEBC2E]`} />
        <span className={`${small ? "w-2 h-2" : "w-2.5 h-2.5"} rounded-full bg-[#28C840]`} />
        <div
          className={`flex-1 bg-[#0a0a0a] rounded-md mx-2 text-[#333] font-mono truncate text-center ${
            small ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[11px]"
          }`}
        >
          {url}
        </div>
        <div className={`${small ? "w-3.5 h-3.5" : "w-5 h-5"} rounded-full bg-[#222]`} />
      </div>
      <div className="rounded-xl overflow-hidden">{children}</div>
    </div>
  );
}

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-56 sm:w-64 mx-auto rounded-[44px] p-3 border"
      style={{
        background: "#1a1a1a",
        borderColor: "#222",
        boxShadow: "0 60px 120px rgba(0,0,0,0.55)",
      }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-20" />
      <div className="rounded-[34px] overflow-hidden relative">{children}</div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#333]" />
    </div>
  );
}

/* =========================================================================
   1) HERO
   ========================================================================= */
function Hero({
  project,
  heroHeadline,
  keyMetric,
}: {
  project: Project;
  heroHeadline: string;
  keyMetric: string;
}) {
  const b = project.brand;
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Layer 1 — brand gradient bleed */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 70% 30%, rgba(${b.accentRGB}, 0.06) 0%, transparent 70%)`,
        }}
      />
      {/* Layer 2 — subtle grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* Layer 3 — bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #000, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* TOP ROW */}
        <div className="pt-28 sm:pt-32 lg:pt-40 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[#333] hover:text-[#666] text-xs transition-colors"
          >
            <IconArrowLeft size={12} stroke={2} />
            <span className="hidden sm:inline">All Work</span>
          </Link>
          <span
            className="text-[10px] sm:text-xs px-3 py-1 rounded-full border"
            style={{ borderColor: "#1a1a1a", color: "#333" }}
          >
            {project.year}
          </span>
        </div>

        {/* MAIN */}
        <div className="mt-12 sm:mt-16 text-center md:text-left">
          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {project.services.slice(0, 5).map((s) => (
              <span
                key={s}
                className="text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1 rounded-full"
                style={{
                  background: `rgba(${b.accentRGB}, 0.10)`,
                  color: b.primary,
                  border: `1px solid rgba(${b.accentRGB}, 0.20)`,
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Client logo */}
          <FadeIn>
            <div className="flex justify-center md:justify-start">
              <ClientLogo slug={project.slug} height={56} />
            </div>
            <div
              className="text-[#444] text-base sm:text-lg mt-3"
              style={{ color: b.textOnBrand, opacity: 0.55 }}
            >
              {project.tagline}
            </div>
          </FadeIn>

          {/* Story headline */}
          <FadeIn delay={0.1}>
            <h1
              className="mt-6 sm:mt-8 font-black text-white leading-[0.95] tracking-tight max-w-3xl mx-auto md:mx-0"
              style={{ fontSize: "clamp(28px, 6vw, 64px)" }}
            >
              {heroHeadline}
            </h1>
          </FadeIn>

          {/* Key metric */}
          <FadeIn delay={0.2}>
            <p
              className="mt-5 sm:mt-6 font-bold"
              style={{
                fontSize: "clamp(16px, 2.4vw, 24px)",
                color: b.primary,
              }}
            >
              {keyMetric}
            </p>
          </FadeIn>
        </div>

        {/* BOTTOM: scroll indicator */}
        <div className="mt-auto pb-12 sm:pb-16">
          <div className="flex items-center gap-3 text-[#222]">
            <span
              className="block"
              style={{
                width: 40,
                height: 1,
                background: `linear-gradient(90deg, ${b.primary}55, transparent)`,
              }}
            />
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2) STATEMENT STATS
   ========================================================================= */
function StatementStats({
  project,
  stats,
}: {
  project: Project;
  stats: StatementStat[];
}) {
  const b = project.brand;
  return (
    <section
      className="section-contain w-full py-12 sm:py-16"
      style={{
        background: `rgba(${b.accentRGB}, 0.04)`,
        borderTop: `1px solid rgba(${b.accentRGB}, 0.10)`,
        borderBottom: `1px solid rgba(${b.accentRGB}, 0.10)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-4 sm:px-8 ${
                i < stats.length - 1
                  ? "lg:border-r"
                  : ""
              }`}
              style={{
                borderColor: `rgba(${b.accentRGB}, 0.10)`,
              }}
            >
              <div
                className="font-black"
                style={{
                  fontSize: "clamp(32px, 5vw, 60px)",
                  color: b.primary,
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[#333] text-[10px] sm:text-xs uppercase tracking-wider mt-2 sm:mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3) STORY — Challenge → Solution → What We Built
   ========================================================================= */
function StorySection({
  project,
  challenge,
  solution,
  whatWeBuilt,
}: {
  project: Project;
  challenge: { quote: string; paragraphs: string[] };
  solution: { quote: string; paragraphs: string[] };
  whatWeBuilt: WhatWeBuiltItem[];
}) {
  const b = project.brand;
  return (
    <section className="section-contain py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
        {/* THE CHALLENGE */}
        <div>
          <FadeIn>
            <div
              className="text-xs uppercase mb-6 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              The Challenge
            </div>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(22px, 4vw, 36px)" }}
            >
              {challenge.quote}
            </h2>
            <div className="mt-8 space-y-5">
              {challenge.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#666] text-base sm:text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* THE SOLUTION */}
        <div>
          <FadeIn>
            <div
              className="text-xs uppercase mb-6 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              The Solution
            </div>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(22px, 4vw, 36px)" }}
            >
              {solution.quote}
            </h2>
            <div className="mt-8 space-y-5">
              {solution.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#666] text-base sm:text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* WHAT WE BUILT */}
        <div>
          <FadeIn>
            <div
              className="text-xs uppercase mb-6 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              What We Built
            </div>
          </FadeIn>
          <div className="space-y-16 sm:space-y-24 mt-8">
            {whatWeBuilt.map((item, i) => {
              const isOdd = i % 2 === 1;
              return (
                <m.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
                >
                  {/* Text */}
                  <div
                    className={`relative ${isOdd ? "md:order-2" : ""}`}
                  >
                    {/* Giant number behind */}
                    <span
                      className="hidden md:block absolute -top-8 -left-2 pointer-events-none font-black select-none"
                      style={{
                        fontSize: 80,
                        color: `rgba(${b.accentRGB}, 0.08)`,
                        lineHeight: 0.8,
                      }}
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                    <h3 className="relative text-white text-xl sm:text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#555] text-base leading-relaxed mt-3">
                      {item.body}
                    </p>
                  </div>
                  {/* Visual */}
                  <div className={`${isOdd ? "md:order-1" : ""}`}>
                    {item.visualType === "phone" ? (
                      <PhoneFrame>
                        <div className="aspect-[9/19.5] overflow-hidden">
                          {item.visual}
                        </div>
                      </PhoneFrame>
                    ) : (
                      <BrowserFrame
                        url={item.url ?? "app.example.com"}
                        small
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          {item.visual}
                        </div>
                      </BrowserFrame>
                    )}
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4) FULL-BLEED VISUAL MOMENT
   ========================================================================= */
function FullBleedMoment({
  project,
  fullBleed,
}: {
  project: Project;
  fullBleed: ProjectPageContent["fullBleed"];
}) {
  const b = project.brand;
  return (
    <section
      className="section-contain relative w-full overflow-hidden"
      style={{
        background: b.dark,
        minHeight: "70vh",
      }}
    >
      {/* Brand glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 30%, rgba(${b.accentRGB}, 0.10) 0%, transparent 70%)`,
        }}
      />
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {fullBleed.type === "phone" ? (
          <PhoneFrame>
            <div className="aspect-[9/19.5] overflow-hidden">
              {fullBleed.visual}
            </div>
          </PhoneFrame>
        ) : (
          <BrowserFrame url={fullBleed.url ?? "app.example.com"}>
            <div className="aspect-[16/10] overflow-hidden">
              {fullBleed.visual}
            </div>
          </BrowserFrame>
        )}
        <p className="text-[#222] text-xs sm:text-sm text-center mt-6">
          {fullBleed.caption}
        </p>
      </div>
    </section>
  );
}

/* =========================================================================
   5) MULTI-SCREEN GALLERY
   ========================================================================= */
function GalleryScroll({
  project,
  gallery,
}: {
  project: Project;
  gallery: GalleryItem[];
}) {
  const b = project.brand;
  return (
    <section className="section-contain py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center md:text-left">
        <FadeIn>
          <div
            className="text-xs uppercase mb-3 tracking-[0.2em]"
            style={{ color: b.primary }}
          >
            The Screens
          </div>
          <h2
            className="text-white font-bold tracking-tight"
            style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
          >
            Every screen, considered.
          </h2>
        </FadeIn>
      </div>

      <div
        className="overflow-x-auto no-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          className="inline-flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8"
          style={{ width: "max-content" }}
        >
          {gallery.map((g) => {
            const baseW = g.type === "phone" ? (g.primary ? 320 : 260) : g.primary ? 600 : 380;
            return (
              <div
                key={g.id}
                className="shrink-0"
                style={{
                  width: `min(${baseW}px, 80vw)`,
                  scrollSnapAlign: "start",
                }}
              >
                {g.type === "phone" ? (
                  <PhoneFrame>
                    <div className="aspect-[9/19.5] overflow-hidden">
                      {g.visual}
                    </div>
                  </PhoneFrame>
                ) : (
                  <BrowserFrame url={g.url ?? "app.example.com"} small>
                    <div className="aspect-[16/10] overflow-hidden">
                      {g.visual}
                    </div>
                  </BrowserFrame>
                )}
                <div className="mt-4">
                  <div className="text-white text-sm font-semibold">
                    {g.name}
                  </div>
                  <div className="text-[#444] text-xs mt-1 leading-relaxed">
                    {g.description}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-1 shrink-0" />
        </div>
      </div>

      <div className="text-center mt-6 text-[10px] uppercase tracking-widest text-[#1a1a1a] inline-flex items-center justify-center gap-2 w-full">
        <IconArrowsHorizontal size={12} stroke={1.5} />
        Drag to explore
      </div>
    </section>
  );
}

/* =========================================================================
   6) PROCESS — 3-panel editorial moment
   ========================================================================= */
function ProcessMoment({
  project,
  chapters,
}: {
  project: Project;
  chapters: ProcessChapter[];
}) {
  const b = project.brand;
  return (
    <section className="section-contain py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center md:text-left mb-12">
            <div
              className="text-xs uppercase mb-3 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              How it happened
            </div>
            <h2
              className="text-white font-bold tracking-tight"
              style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
            >
              Three chapters, six weeks.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {chapters.map((c, i) => (
            <m.div
              key={c.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
              className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 overflow-hidden"
              style={{
                background: b.card,
                border: `1px solid ${b.border}`,
              }}
            >
              {/* Giant chapter number */}
              <span
                className="absolute top-4 right-4 sm:top-6 sm:right-6 font-black pointer-events-none select-none"
                style={{
                  fontSize: "clamp(40px, 5vw, 72px)",
                  color: "#1a1a1a",
                  lineHeight: 1,
                  opacity: 0.5,
                }}
                aria-hidden="true"
              >
                {c.number}
              </span>
              <h3 className="relative text-white text-lg sm:text-2xl font-bold tracking-tight pr-12 sm:pr-16">
                {c.title}
              </h3>
              <p className="relative text-[#555] text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                {c.body}
              </p>
              <div
                className="relative text-xs sm:text-sm font-medium mt-4 sm:mt-6"
                style={{ color: b.primary }}
              >
                {c.duration}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7) TESTIMONIAL MOMENT
   ========================================================================= */
function TestimonialMoment({
  project,
  testimonialFull,
  testimonialRole,
}: {
  project: Project;
  testimonialFull: string;
  testimonialRole?: string;
}) {
  const b = project.brand;
  return (
    <section
      className="section-contain w-full relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center"
      style={{ background: b.dark }}
    >
      <div className="max-w-3xl mx-auto relative">
        <div
          aria-hidden="true"
          className="font-black leading-none pointer-events-none select-none"
          style={{
            fontSize: "clamp(80px, 12vw, 160px)",
            color: b.primary,
            opacity: 0.15,
          }}
        >
          “
        </div>
        <p
          className="text-white font-light italic leading-relaxed -mt-8 sm:-mt-12"
          style={{ fontSize: "clamp(18px, 2.4vw, 28px)" }}
        >
          {testimonialFull}
        </p>
        <div className="mt-6 sm:mt-8">
          <div className="text-white font-semibold text-sm sm:text-base">
            {project.testimonial.attribution}
          </div>
          {testimonialRole && (
            <div
              className="text-xs sm:text-sm mt-1"
              style={{ color: b.primary }}
            >
              {testimonialRole}
            </div>
          )}
        </div>
        <div className="text-[#1a1a1a] text-[10px] mt-4">
          Testimonial representative of client feedback.
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   8) TECH STACK + TIMELINE
   ========================================================================= */
function StackAndTimeline({ project }: { project: Project }) {
  const b = project.brand;
  return (
    <section className="section-contain py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div
            className="text-xs uppercase mb-4 sm:mb-6 tracking-[0.2em]"
            style={{ color: b.primary }}
          >
            Tech used
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full"
                style={{
                  background: b.card,
                  color: b.textOnBrand,
                  border: `1px solid ${b.border}`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-xs uppercase mb-4 sm:mb-6 tracking-[0.2em]"
            style={{ color: b.primary }}
          >
            Project timeline
          </div>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-[#444]">Duration</dt>
              <dd className="text-white">{project.duration}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[#444]">Industry</dt>
              <dd className="text-white">{project.industry}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[#444]">Year</dt>
              <dd className="text-white">{project.year}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[#444]">Team</dt>
              <dd className="text-white">{project.teamLine}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   9) NEXT PROJECT CTA
   ========================================================================= */
function NextProjectStrip({ project }: { project: Project }) {
  const next = getNextProject(project.slug);
  const nb = next.brand;
  return (
    <Link
      href={`/work/${next.slug}/`}
      className="block section-contain w-full border-t group transition-colors"
      style={{
        background: nb.dark,
        borderColor: nb.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="text-[#333] text-xs uppercase tracking-widest mb-3">
            Next Project
          </div>
          <div className="text-white text-xl sm:text-2xl font-bold tracking-tight">
            {next.name}
          </div>
          <div className="text-sm mt-1" style={{ color: nb.textOnBrand, opacity: 0.6 }}>
            {next.tagline}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ClientLogo slug={next.slug} height={36} />
          <span
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-transform group-hover:translate-x-1"
            style={{
              background: `rgba(${nb.accentRGB}, 0.10)`,
              color: nb.primary,
              border: `1px solid rgba(${nb.accentRGB}, 0.20)`,
            }}
          >
            View case study
            <IconArrowRight size={14} stroke={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================================
   COMPOSED LAYOUT
   ========================================================================= */
export function ProjectPageLayout({
  project,
  content,
}: {
  project: Project;
  content: ProjectPageContent;
}) {
  return (
    <main>
      <Hero
        project={project}
        heroHeadline={content.heroHeadline}
        keyMetric={content.keyMetric}
      />
      <StatementStats project={project} stats={content.statementStats} />
      <StorySection
        project={project}
        challenge={content.challenge}
        solution={content.solution}
        whatWeBuilt={content.whatWeBuilt}
      />
      <FullBleedMoment project={project} fullBleed={content.fullBleed} />
      <GalleryScroll project={project} gallery={content.gallery} />
      <ProcessMoment project={project} chapters={content.process} />
      <TestimonialMoment
        project={project}
        testimonialFull={content.testimonialFull}
        testimonialRole={content.testimonialRole}
      />
      <StackAndTimeline project={project} />
      <NextProjectStrip project={project} />
    </main>
  );
}
