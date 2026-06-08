"use client";

/**
 * /work - Selected work
 *
 * Editorial portfolio page. One unified card template for all five
 * case studies - no per-brand-color flooding on the page; the brand
 * lives inside the artifact. Grid is calm, typography is the hero,
 * and the visual artifact at the top of each card carries the case.
 *
 * Mobile is the default - single-column stack, full-width artifacts,
 * tap-target sizes preserved.
 */

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowUpRight, IconArrowRight } from "@tabler/icons-react";
import { projects, type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { ListingMockup } from "@/components/projects/ListingMockups";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const HEADLINE = "Work that speaks for itself.";

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/* ──────────────────────────────────────────────────────────────────
   Unified project card
   ─────────────────────────────────────────────────────────────── */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "-50px" }}
      transition={{ duration: 0.7, ease: EASE, delay: (index % 2) * 0.06 }}
    >
      <Link
        href={`/work/${project.slug}/`}
        aria-label={`Open ${project.name} case study`}
        className="group relative block rounded-2xl sm:rounded-[20px] overflow-hidden border bg-[#080808] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0B0B0B]"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
          e.currentTarget.style.boxShadow =
            "0 40px 90px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Visual artifact - 16:10 ratio, fills card width */}
        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.04]">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.025]">
            <ListingMockup slug={project.slug} />
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 sm:p-7 lg:p-8">
          {/* Eyebrow row: industry · year */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium">
            <span className="text-[#9a9a9a]">{project.industry}</span>
            <span className="text-[#888] font-mono tabular-nums">
              {project.year}
            </span>
          </div>

          {/* Project name + tagline */}
          <h2
            className="text-white font-semibold tracking-tight mt-4 sm:mt-5 leading-[1.05]"
            style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
          >
            {project.name}
          </h2>
          <p
            className="text-[#cfcfcf] mt-2.5 sm:mt-3 leading-[1.45] tracking-tight max-w-[42ch]"
            style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}
          >
            {project.tagline}
          </p>

          {/* Hairline */}
          <div
            aria-hidden="true"
            className="my-5 sm:my-6 h-px w-full bg-white/[0.06]"
          />

          {/* Three metric pills - neutral palette, no brand color */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {project.results.slice(0, 3).map((r) => (
              <div
                key={r.label}
                className="rounded-md sm:rounded-lg px-2.5 sm:px-3 py-2.5 sm:py-3 border bg-white/[0.02]"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="text-white font-semibold tabular-nums tracking-tight text-[14px] sm:text-[16px] leading-none">
                  {r.value}
                </div>
                <div className="text-[#888] text-[9.5px] sm:text-[10px] uppercase tracking-[0.12em] mt-1.5 leading-tight">
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          {/* Footer row: duration · view link */}
          <div className="mt-5 sm:mt-6 flex items-center justify-between gap-3">
            <span className="text-[10px] sm:text-[11px] text-[#777] tracking-[0.18em] uppercase truncate">
              {project.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-white font-medium tracking-tight shrink-0">
              View case
              <IconArrowUpRight
                size={14}
                stroke={2.2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </m.div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Bottom CTA "card" - sits in the grid as the 6th tile
   ─────────────────────────────────────────────────────────────── */

function NewWorkCard() {
  return (
    <m.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "-50px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <Link
        href="/contact/"
        className="group relative block rounded-2xl sm:rounded-[20px] overflow-hidden border h-full min-h-[460px] sm:min-h-[520px] transition-all duration-500 hover:-translate-y-1"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.07) 0%, transparent 65%), #060606",
          borderColor: "rgba(255,255,255,0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        }}
      >
        <div className="relative h-full flex flex-col p-8 sm:p-10 lg:p-12">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium">
            <span className="text-[#9a9a9a]">Your project · 2026</span>
            <span className="text-[#888] font-mono">06</span>
          </div>

          <div className="mt-auto">
            <h2
              className="text-white font-semibold tracking-tight leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.2vw, 56px)" }}
            >
              The sixth project
              <br />
              <span className="text-[#888] italic font-serif-editorial">
                starts with you.
              </span>
            </h2>
            <p className="text-[#bfbfbf] mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-[1.65] max-w-md">
              Tell us what you&apos;re building. We&apos;ll tell you whether
              and how we can help. Selective by choice - always open to one
              good conversation.
            </p>

            <div className="mt-7 sm:mt-9 inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-white text-black font-semibold text-[13px] sm:text-[14px] tracking-tight transition-transform duration-300 group-hover:scale-[1.02]">
              Book a Strategy Call
              <IconArrowUpRight size={14} stroke={2.4} aria-hidden="true" />
            </div>
          </div>

          {/* Decorative corner mark */}
          <div
            aria-hidden="true"
            className="absolute top-8 sm:top-10 right-8 sm:right-10 w-3 h-3 rounded-full bg-blue-400/50"
            style={{ boxShadow: "0 0 14px rgba(59,130,246,0.6)" }}
          />
        </div>
      </Link>
    </m.div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Page
   ─────────────────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 text-center overflow-hidden">
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

        <div className="relative page-container">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#070707] mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#cccccc] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                Selected work
              </span>
            </div>
          </FadeIn>

          <h1
            className="font-black tracking-tighter text-white leading-[1.02]"
            style={{ fontSize: "clamp(36px, 6.5vw, 72px)" }}
          >
            <m.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
            >
              {HEADLINE.split(" ").map((w, i) => (
                <m.span
                  key={i}
                  variants={wordVariants}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </m.span>
              ))}
            </m.span>
          </h1>

          <FadeIn delay={0.55}>
            <p className="text-[#a8a8a8] mt-6 text-[15px] sm:text-lg max-w-2xl mx-auto leading-[1.65] sm:leading-relaxed px-2">
              Five projects, five industries, one standard. Brand systems,
              AI workflows, and the operating rhythm behind them - built
              like the businesses we hand them to.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-x-5 gap-y-2 sm:gap-7 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#888]">
              <span>5 case studies</span>
              <span aria-hidden="true" className="h-3 w-px bg-[#1f1f1f]" />
              <span>2024 – 2025</span>
              <span aria-hidden="true" className="h-3 w-px bg-[#1f1f1f]" />
              <span>Built in-house</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.85}>
            <p className="text-[#777] text-[11px] mt-9 sm:mt-12">
              Client names are fictional. Work and results are representative.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ────────────────────── GRID ────────────────────── */}
      <section className="section-contain pt-4 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
            {/* 6th cell - call-to-conversation */}
            <NewWorkCard />
          </div>
        </div>
      </section>

      {/* ────────────────────── BOTTOM RAIL ────────────────────── */}
      <section className="relative border-t border-[#0a0a0a] py-16 sm:py-20 overflow-hidden">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-2">
              <div className="text-[#888] text-[10px] sm:text-[11px] tracking-[0.22em] uppercase">
                A note on the work
              </div>
              <h3
                className="text-white font-semibold tracking-tight mt-3 sm:mt-4 leading-[1.15]"
                style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
              >
                Each project is one system end-to-end -
                <br className="hidden sm:block" />
                brand, product surface and the workflow it replaces.
              </h3>
            </div>
            <div className="text-[#aaa] text-[14px] sm:text-[15px] leading-[1.7]">
              We don&apos;t hand off a Figma file and a Notion doc. The
              deliverable is the running system - installed, signed off,
              and quiet by the time we leave.
              <Link
                href="/services/"
                className="block mt-5 text-white font-medium underline decoration-[#333] underline-offset-4 hover:decoration-white transition-colors"
              >
                See how we work
                <IconArrowRight
                  size={14}
                  stroke={2.2}
                  aria-hidden="true"
                  className="inline-block ml-1.5 -mt-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
