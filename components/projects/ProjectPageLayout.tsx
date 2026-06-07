"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { m, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowsHorizontal,
  IconQuote,
  IconSparkles,
  IconCheck,
  IconClock,
  IconUsersGroup,
  IconCurrencyDollar,
  IconRulerMeasure,
  IconRefresh,
  IconCalendar,
  IconLockSquare,
  IconBolt,
  IconHeartHandshake,
} from "@tabler/icons-react";
import type { Project } from "@/lib/projects";
import { getNextProject } from "@/lib/projects";
import { ClientLogo } from "@/components/clients/logos/ClientLogo";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectSignature } from "@/components/projects/ProjectSignatures";
import { ProjectMoodboard } from "@/components/projects/ProjectMoodboard";
import { BrandStrip } from "@/components/projects/BrandStrip";
import {
  ProjectArchitecture,
  ProjectAIAgents,
  ProjectTechStack,
} from "@/components/projects/ProjectTechnicalSections";
import { getProjectTechnical } from "@/lib/project-technical";

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
  number: string;
  title: string;
  body: string;
  visual: ReactNode;
  visualType?: "desktop" | "phone";
  url?: string;
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
  number: string;
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
  testimonialFull: string;
  testimonialRole?: string;
};

/* =========================================================================
   Frames — Browser + Phone — enhanced with reflection & brand-glow option
   ========================================================================= */
function BrowserFrame({
  url,
  children,
  small = false,
  glowRGB,
  reflect = false,
}: {
  url: string;
  children: ReactNode;
  small?: boolean;
  glowRGB?: string;
  reflect?: boolean;
}) {
  return (
    <div className="relative">
      {/* Brand-color halo behind the frame */}
      {glowRGB && (
        <div
          aria-hidden="true"
          className="absolute -inset-8 pointer-events-none -z-10"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(${glowRGB},0.18), transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      )}
      <div
        className="rounded-2xl border relative overflow-hidden"
        style={{
          background: "#1a1a1a",
          borderColor: "#222",
          padding: small ? 6 : 10,
          boxShadow:
            "0 60px 120px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02) inset",
        }}
      >
        {/* Top sheen */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />
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
      {/* Reflection */}
      {reflect && (
        <div
          aria-hidden="true"
          className="mx-auto pointer-events-none"
          style={{
            marginTop: 6,
            height: 60,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), transparent 90%)",
            transform: "scaleY(-1)",
            transformOrigin: "top",
            maskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
            borderRadius: "0 0 24px 24px",
            opacity: 0.4,
          }}
        />
      )}
    </div>
  );
}

function PhoneFrame({
  children,
  glowRGB,
  reflect = false,
}: {
  children: ReactNode;
  glowRGB?: string;
  reflect?: boolean;
}) {
  return (
    <div className="relative">
      {glowRGB && (
        <div
          aria-hidden="true"
          className="absolute -inset-8 pointer-events-none -z-10"
          style={{
            background: `radial-gradient(ellipse 60% 70% at 50% 50%, rgba(${glowRGB},0.20), transparent 70%)`,
            filter: "blur(36px)",
          }}
        />
      )}
      <div
        className="relative w-56 sm:w-64 mx-auto rounded-[44px] p-3 border"
        style={{
          background: "#1a1a1a",
          borderColor: "#222",
          boxShadow:
            "0 60px 120px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02) inset",
        }}
      >
        {/* Subtle bezel highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[44px] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04), transparent 50%)",
          }}
        />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-20" />
        <div className="rounded-[34px] overflow-hidden relative">{children}</div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#333]" />
      </div>
      {reflect && (
        <div
          aria-hidden="true"
          className="mx-auto pointer-events-none w-48"
          style={{
            marginTop: 4,
            height: 40,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), transparent 90%)",
            transform: "scaleY(-1)",
            opacity: 0.35,
          }}
        />
      )}
    </div>
  );
}

/* =========================================================================
   FLOATING ORBS — brand-colored animated background flourish
   ========================================================================= */
function FloatingOrbs({
  accentRGB,
  count = 3,
  seed = 0,
}: {
  accentRGB: string;
  count?: number;
  seed?: number;
}) {
  // Pseudo-random but deterministic per project (so SSR matches client)
  const orbs = Array.from({ length: count }, (_, i) => {
    const s = (seed + 1) * (i + 1);
    return {
      left: 10 + ((s * 37) % 80),
      top: 10 + ((s * 53) % 80),
      size: 200 + ((s * 71) % 300),
      delay: (s % 8) * 0.5,
      duration: 12 + ((s * 11) % 12),
    };
  });
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((o, i) => (
        <m.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${o.left}%`,
            top: `${o.top}%`,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, rgba(${accentRGB},0.15) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            opacity: [0.6, 0.9, 0.5, 0.6],
          }}
          transition={{
            duration: o.duration,
            delay: o.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================================
   1) CINEMATIC HERO — animated orbs, parallax grid, massive logo
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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax for the orb cluster (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const orbY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    function onMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth - 0.5) * 40;
      const ny = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(nx);
      mouseY.set(ny);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[88vh] overflow-hidden flex flex-col"
    >
      {/* Layer 0 — solid dark brand wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${b.dark} 0%, #000 100%)`,
          opacity: 0.5,
        }}
      />

      {/* Layer 1 — brand gradient bleed */}
      <m.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 90% 60% at 70% 25%, rgba(${b.accentRGB}, 0.18) 0%, transparent 70%)`,
          x: orbX,
          y: orbY,
        }}
      />

      {/* Layer 2 — secondary orb */}
      <m.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: "-10%",
          bottom: "10%",
          width: "60vw",
          height: "60vw",
          maxWidth: 900,
          maxHeight: 900,
          background: `radial-gradient(circle, rgba(${b.accentRGB},0.10) 0%, transparent 60%)`,
          filter: "blur(50px)",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 3 — animated grid (perspective, parallax) */}
      <m.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ y: parallaxY, opacity: 0.4 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(${b.accentRGB},0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(${b.accentRGB},0.06) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            transform: "perspective(800px) rotateX(60deg) translateY(20%)",
            transformOrigin: "center top",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 100%, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 100%, black 0%, transparent 70%)",
          }}
        />
      </m.div>

      {/* Layer 4 — grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Layer 5 — bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000, transparent)" }}
      />

      {/* PROJECT SIGNATURE — per-project decorative SVG */}
      <ProjectSignature
        slug={project.slug}
        className="inset-0 w-full h-full opacity-60"
      />

      {/* MASSIVE BRAND WORDMARK WATERMARK */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[58%] -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-[0.025]"
      >
        <div
          className="font-black tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "clamp(140px, 20vw, 320px)",
            color: b.primary,
            letterSpacing: "-0.08em",
            mixBlendMode: "screen",
          }}
        >
          {project.name.toUpperCase()}
        </div>
      </div>

      <m.div
        className="relative z-10 page-container w-full flex-1 flex flex-col"
        style={{ opacity: headlineOpacity }}
      >
        {/* TOP ROW */}
        <div className="pt-24 sm:pt-32 lg:pt-40 flex items-center justify-between gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[#444] hover:text-[#888] text-xs transition-colors"
          >
            <IconArrowLeft size={12} stroke={2} aria-hidden="true" />
            <span className="hidden sm:inline">All Work</span>
          </Link>
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border truncate max-w-[180px] sm:max-w-none"
              style={{
                borderColor: `rgba(${b.accentRGB}, 0.30)`,
                background: `rgba(${b.accentRGB}, 0.08)`,
                color: b.primary,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: b.primary }}
              />
              <span className="truncate">{project.industry}</span>
            </span>
            <span
              className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border shrink-0"
              style={{ borderColor: "#1a1a1a", color: "#666" }}
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* MAIN */}
        <div className="mt-10 sm:mt-14 text-center md:text-left">
          {/* Service tags */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-wrap gap-2 mb-8 sm:mb-10 justify-center md:justify-start"
          >
            {project.services.slice(0, 5).map((s, i) => (
              <m.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className="text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1 rounded-full"
                style={{
                  background: `rgba(${b.accentRGB}, 0.10)`,
                  color: b.primary,
                  border: `1px solid rgba(${b.accentRGB}, 0.25)`,
                }}
              >
                {s}
              </m.span>
            ))}
          </m.div>

          {/* CLIENT LOGO — responsive sizing, brand-glow halo */}
          <m.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
            className="relative inline-block w-full"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-8 sm:-inset-12 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 60% 80% at 50% 50%, rgba(${b.accentRGB},0.20), transparent 70%)`,
                filter: "blur(36px)",
              }}
            />
            <div className="relative flex justify-center md:justify-start">
              {/* Mobile-friendly logo size */}
              <span className="block sm:hidden">
                <ClientLogo slug={project.slug} height={64} />
              </span>
              <span className="hidden sm:block">
                <ClientLogo slug={project.slug} height={96} />
              </span>
            </div>
            <div
              className="relative text-[15px] sm:text-lg mt-4 sm:mt-5 px-4 md:px-0"
              style={{ color: b.textOnBrand, opacity: 0.7 }}
            >
              {project.tagline}
            </div>
          </m.div>

          {/* Story headline — bigger min on mobile, tighter leading */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
            className="mt-8 sm:mt-10 font-black text-white leading-[1.02] sm:leading-[0.95] tracking-tight page-container md:mx-0 px-2 md:px-0"
            style={{ fontSize: "clamp(30px, 6vw, 60px)" }}
          >
            {heroHeadline}
          </m.h1>

          {/* Key metric — boxed with brand glow */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl border"
            style={{
              background: `rgba(${b.accentRGB}, 0.08)`,
              borderColor: `rgba(${b.accentRGB}, 0.30)`,
              boxShadow: `0 0 60px rgba(${b.accentRGB}, 0.15)`,
            }}
          >
            <IconSparkles
              size={18}
              stroke={1.5}
              aria-hidden="true"
              style={{ color: b.primary }}
            />
            <span
              className="font-bold"
              style={{
                fontSize: "clamp(15px, 1.6vw, 18px)",
                color: b.primary,
              }}
            >
              {keyMetric}
            </span>
          </m.div>

          {/* Quick facts strip — clean 2-col grid on mobile, inline on desktop */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
            className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap sm:gap-x-10 gap-y-5 sm:gap-y-3 max-w-md sm:max-w-none mx-auto sm:mx-0"
          >
            {[
              { label: "Duration", value: project.duration },
              { label: "Team", value: project.teamLine },
              { label: "Year", value: project.year },
              { label: "Category", value: project.category },
            ].map((f, i, arr) => (
              <div
                key={f.label}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="text-left">
                  <div
                    className="text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: b.textOnBrand, opacity: 0.5 }}
                  >
                    {f.label}
                  </div>
                  <div className="text-white text-[15px] sm:text-base font-semibold mt-1 tracking-tight">
                    {f.value}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <span
                    className="hidden sm:block h-8 w-px"
                    style={{
                      background: `linear-gradient(180deg, transparent, rgba(${b.accentRGB},0.25), transparent)`,
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </m.div>
        </div>

        {/* BOTTOM: scroll indicator */}
        <div className="mt-auto pb-12 sm:pb-16">
          <div className="flex items-center gap-3 text-[#333]">
            <m.span
              className="block"
              style={{
                width: 60,
                height: 1,
                background: `linear-gradient(90deg, ${b.primary}, transparent)`,
              }}
              animate={{ scaleX: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <span className="text-[10px] uppercase tracking-[0.25em]">
              Scroll to explore
            </span>
          </div>
        </div>
      </m.div>
    </section>
  );
}

/* =========================================================================
   2) BRAND ATMOSPHERE — colors + typography + brand DNA at a glance
   ========================================================================= */
function BrandAtmosphere({ project }: { project: Project }) {
  const b = project.brand;
  // Derived palette variations from accentRGB
  const tints = [
    { label: "Primary", value: b.primary, rgb: b.accentRGB, opacity: 1 },
    { label: "Surface", value: b.card, rgb: b.accentRGB, opacity: 1 },
    { label: "Deep", value: b.dark, rgb: b.accentRGB, opacity: 1 },
    { label: "Glow", value: `rgba(${b.accentRGB},0.15)`, rgb: b.accentRGB, opacity: 0.15 },
  ];

  return (
    <section
      className="section-contain relative w-full overflow-hidden py-16 sm:py-20"
      style={{ background: b.dark }}
    >
      <FloatingOrbs accentRGB={b.accentRGB} count={2} seed={3} />

      <div className="relative site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* LEFT — Atmosphere */}
          <FadeIn>
            <div
              className="text-xs uppercase mb-4 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              Brand atmosphere
            </div>
            <h2
              className="font-black text-white leading-[1.1] sm:leading-tight tracking-tight"
              style={{ fontSize: "clamp(26px, 4.5vw, 40px)" }}
            >
              A visual identity, built from scratch.
            </h2>
            <p
              className="mt-5 text-[15px] sm:text-lg leading-[1.6] sm:leading-relaxed max-w-xl"
              style={{ color: b.textOnBrand, opacity: 0.7 }}
            >
              {project.description}
            </p>

            {/* Typography specimen */}
            <div className="mt-10 sm:mt-12">
              <div
                className="text-[10px] uppercase mb-3 tracking-[0.2em]"
                style={{ color: b.primary, opacity: 0.7 }}
              >
                Typographic system
              </div>
              <div
                className="font-black leading-none tracking-tighter"
                style={{
                  fontSize: "clamp(44px, 7vw, 72px)",
                  color: b.textOnBrand,
                }}
              >
                Aa
              </div>
              <div
                className="mt-2 text-sm"
                style={{ color: b.textOnBrand, opacity: 0.55 }}
              >
                Inter · 400 / 600 / 700 / 900
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — Color palette */}
          <FadeIn delay={0.1}>
            <div
              className="text-[10px] uppercase mb-4 tracking-[0.2em]"
              style={{ color: b.primary, opacity: 0.7 }}
            >
              Color system
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {tints.map((t, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: `rgba(${b.accentRGB},0.18)` }}
                >
                  <div
                    className="aspect-square"
                    style={{
                      background: t.value,
                      backgroundImage:
                        i === 3
                          ? `radial-gradient(circle at 50% 50%, rgba(${b.accentRGB},0.4), transparent 70%)`
                          : undefined,
                    }}
                  />
                  <div
                    className="px-3 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs flex items-center justify-between"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      color: b.textOnBrand,
                    }}
                  >
                    <span className="font-medium" style={{ opacity: 0.85 }}>
                      {t.label}
                    </span>
                    <span className="font-mono" style={{ opacity: 0.5 }}>
                      {t.value.length > 12
                        ? t.value.slice(0, 12) + "…"
                        : t.value}
                    </span>
                  </div>
                </m.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3) STATEMENT STATS — massive numbers, brand wash, glow
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
      className="section-contain w-full py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, transparent, rgba(${b.accentRGB},0.06) 50%, transparent)`,
        borderTop: `1px solid rgba(${b.accentRGB}, 0.12)`,
        borderBottom: `1px solid rgba(${b.accentRGB}, 0.12)`,
      }}
    >
      <FloatingOrbs accentRGB={b.accentRGB} count={2} seed={5} />

      <div className="relative site-container">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="text-xs uppercase mb-3 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              By the numbers
            </div>
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              The change, measured.
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 sm:gap-y-16">
          {stats.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              className={`text-center px-3 sm:px-6 ${
                i < stats.length - 1 ? "lg:border-r" : ""
              }`}
              style={{
                borderColor: `rgba(${b.accentRGB}, 0.12)`,
              }}
            >
              <div
                className="font-black tabular-nums"
                style={{
                  fontSize: "clamp(56px, 9vw, 96px)",
                  color: b.primary,
                  lineHeight: 0.95,
                  textShadow: `0 0 40px rgba(${b.accentRGB},0.4)`,
                  letterSpacing: "-0.03em",
                }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[#999] text-[11px] sm:text-xs uppercase tracking-wider mt-3 sm:mt-4 max-w-[160px] mx-auto leading-snug">
                {s.label}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4) STORY — Challenge / Solution as brand-tinted cards
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
    <section className="section-contain py-20 sm:py-28 lg:py-36">
      <div className="page-container space-y-16 sm:space-y-24">
        {/* CHALLENGE + SOLUTION side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* CHALLENGE */}
          <FadeIn>
            <article
              className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden h-full"
              style={{
                background: "#0a0a0a",
                border: "1px solid #1a1a1a",
              }}
            >
              {/* Subtle background pattern */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative">
                <div className="text-rose-400 text-xs uppercase mb-5 tracking-[0.2em] inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  The Challenge
                </div>
                <h2
                  className="font-bold text-white leading-[1.2] sm:leading-tight tracking-tight"
                  style={{ fontSize: "clamp(22px, 3.5vw, 30px)" }}
                >
                  {challenge.quote}
                </h2>
                <div className="mt-6 space-y-4">
                  {challenge.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-[#888] text-[15px] sm:text-base leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>

          {/* SOLUTION */}
          <FadeIn delay={0.1}>
            <article
              className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden h-full"
              style={{
                background: b.card,
                border: `1px solid ${b.border}`,
              }}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, rgba(${b.accentRGB},0.18), transparent 70%)`,
                  filter: "blur(30px)",
                }}
              />
              <div className="relative">
                <div
                  className="text-xs uppercase mb-5 tracking-[0.2em] inline-flex items-center gap-2"
                  style={{ color: b.primary }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: b.primary }}
                  />
                  The Solution
                </div>
                <h2
                  className="font-bold text-white leading-[1.2] sm:leading-tight tracking-tight"
                  style={{ fontSize: "clamp(22px, 3.5vw, 30px)" }}
                >
                  {solution.quote}
                </h2>
                <div className="mt-6 space-y-4">
                  {solution.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed"
                      style={{ color: b.textOnBrand, opacity: 0.75 }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        </div>

        {/* WHAT WE BUILT */}
        <div>
          <FadeIn>
            <div className="text-center md:text-left mb-12 sm:mb-16">
              <div
                className="text-xs uppercase mb-4 tracking-[0.2em]"
                style={{ color: b.primary }}
              >
                What we built
              </div>
              <h2
                className="font-black text-white tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(26px, 4.5vw, 42px)" }}
              >
                {whatWeBuilt.length} pieces. One coherent system.
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-20 sm:space-y-28 lg:space-y-36">
            {whatWeBuilt.map((item, i) => {
              const isOdd = i % 2 === 1;
              return (
                <m.div
                  key={item.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center"
                >
                  {/* Text */}
                  <div className={`relative ${isOdd ? "md:order-2" : ""}`}>
                    <span
                      className="hidden md:block absolute -top-16 -left-4 pointer-events-none font-black select-none"
                      style={{
                        fontSize: 160,
                        color: `rgba(${b.accentRGB}, 0.10)`,
                        lineHeight: 0.8,
                        WebkitTextStroke: `1px rgba(${b.accentRGB},0.30)`,
                      }}
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                    <div
                      className="md:hidden inline-flex items-center gap-3 mb-4"
                    >
                      <span
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl font-bold text-sm"
                        style={{
                          background: `rgba(${b.accentRGB},0.12)`,
                          color: b.primary,
                          border: `1px solid rgba(${b.accentRGB},0.30)`,
                        }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="h-px flex-1"
                        style={{
                          background: `linear-gradient(90deg, rgba(${b.accentRGB},0.30), transparent)`,
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="relative text-white text-[22px] sm:text-2xl lg:text-3xl font-bold tracking-tight leading-[1.15]">
                      {item.title}
                    </h3>
                    <p className="relative text-[#aaa] text-[15px] sm:text-base lg:text-lg leading-[1.65] sm:leading-relaxed mt-4 max-w-md">
                      {item.body}
                    </p>
                    {item.url && (
                      <div
                        className="relative mt-6 inline-flex items-center gap-2 text-xs font-mono"
                        style={{ color: b.primary, opacity: 0.7 }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: b.primary }}
                        />
                        {item.url}
                      </div>
                    )}
                  </div>
                  {/* Visual */}
                  <div className={`${isOdd ? "md:order-1" : ""}`}>
                    {item.visualType === "phone" ? (
                      <PhoneFrame glowRGB={b.accentRGB} reflect>
                        <div className="aspect-[9/19.5] overflow-hidden">
                          {item.visual}
                        </div>
                      </PhoneFrame>
                    ) : (
                      <BrowserFrame
                        url={item.url ?? "app.example.com"}
                        small
                        glowRGB={b.accentRGB}
                        reflect
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
   5) NUMBERS WALL — massive single-stat moment between sections
   ========================================================================= */
function NumbersWall({
  project,
  stat,
}: {
  project: Project;
  stat?: StatementStat;
}) {
  const b = project.brand;
  if (!stat) return null;
  return (
    <section
      className="section-contain relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-center"
      style={{ background: "#000" }}
    >
      <FloatingOrbs accentRGB={b.accentRGB} count={3} seed={7} />
      <m.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(${b.accentRGB},0.18), transparent 70%)`,
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative page-container">
        {/* Kicker label */}
        <FadeIn>
          <div
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6 sm:mb-8"
            style={{ color: b.primary, opacity: 0.7 }}
          >
            The change at a glance
          </div>
        </FadeIn>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-black tracking-tighter tabular-nums"
          style={{
            fontSize: "clamp(72px, 16vw, 220px)",
            color: b.primary,
            lineHeight: 0.9,
            textShadow: `0 0 80px rgba(${b.accentRGB},0.5)`,
            letterSpacing: "-0.06em",
          }}
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </m.div>
        <FadeIn delay={0.3}>
          <p
            className="mt-8 sm:mt-10 text-base sm:text-xl leading-relaxed max-w-md mx-auto px-2"
            style={{ color: b.textOnBrand, opacity: 0.8 }}
          >
            {stat.label}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================================================================
   6) FULL-BLEED VISUAL — premium cinematic display
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
        background: `linear-gradient(180deg, ${b.dark}, #000 100%)`,
        minHeight: "80vh",
      }}
    >
      {/* Brand glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 30%, rgba(${b.accentRGB}, 0.18) 0%, transparent 70%)`,
        }}
      />
      {/* Bottom highlight line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${b.accentRGB},0.4), transparent)`,
        }}
      />

      <div className="relative w-full page-container py-24 sm:py-32">
        <FadeIn>
          <div className="text-center mb-10 sm:mb-12">
            <div
              className="text-xs uppercase mb-3 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              In production
            </div>
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Built for daily use.
            </h2>
          </div>
        </FadeIn>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {fullBleed.type === "phone" ? (
            <PhoneFrame glowRGB={b.accentRGB} reflect>
              <div className="aspect-[9/19.5] overflow-hidden">
                {fullBleed.visual}
              </div>
            </PhoneFrame>
          ) : (
            <BrowserFrame
              url={fullBleed.url ?? "app.example.com"}
              glowRGB={b.accentRGB}
              reflect
            >
              <div className="aspect-[16/10] overflow-hidden">
                {fullBleed.visual}
              </div>
            </BrowserFrame>
          )}
        </m.div>
        <p
          className="text-xs sm:text-sm text-center mt-8 sm:mt-10 max-w-md mx-auto"
          style={{ color: b.textOnBrand, opacity: 0.5 }}
        >
          {fullBleed.caption}
        </p>
      </div>
    </section>
  );
}

/* =========================================================================
   7) GALLERY — horizontal scroll with hover glow
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
    <section className="section-contain py-20 sm:py-28">
      <div className="site-container mb-10 sm:mb-14 text-center md:text-left">
        <FadeIn>
          <div
            className="text-xs uppercase mb-3 tracking-[0.2em]"
            style={{ color: b.primary }}
          >
            The Screens
          </div>
          <h2
            className="text-white font-black tracking-tight"
            style={{ fontSize: "clamp(26px, 4.5vw, 40px)" }}
          >
            Every pixel, considered.
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
          className="inline-flex gap-6 sm:gap-8 px-6 md:px-10 xl:px-12 pb-6"
          style={{ width: "max-content" }}
        >
          {gallery.map((g, i) => {
            const baseW = g.type === "phone" ? (g.primary ? 320 : 260) : g.primary ? 680 : 440;
            return (
              <m.div
                key={g.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                className="shrink-0 group"
                style={{
                  width: `min(${baseW}px, 82vw)`,
                  scrollSnapAlign: "start",
                }}
              >
                <div className="relative transition-transform duration-500 group-hover:-translate-y-1">
                  {g.type === "phone" ? (
                    <PhoneFrame glowRGB={b.accentRGB} reflect={g.primary}>
                      <div className="aspect-[9/19.5] overflow-hidden">
                        {g.visual}
                      </div>
                    </PhoneFrame>
                  ) : (
                    <BrowserFrame
                      url={g.url ?? "app.example.com"}
                      small
                      glowRGB={b.accentRGB}
                      reflect={g.primary}
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        {g.visual}
                      </div>
                    </BrowserFrame>
                  )}
                </div>
                <div className="mt-5">
                  <div className="text-white text-sm sm:text-base font-semibold tracking-tight">
                    {g.name}
                  </div>
                  <div className="text-[#666] text-xs sm:text-sm mt-1.5 leading-relaxed max-w-xs">
                    {g.description}
                  </div>
                </div>
              </m.div>
            );
          })}
          <div className="w-1 shrink-0" />
        </div>
      </div>

      <div className="text-center mt-6 text-[10px] uppercase tracking-widest text-[#1a1a1a] inline-flex items-center justify-center gap-2 w-full">
        <IconArrowsHorizontal size={12} stroke={1.5} aria-hidden="true" />
        Drag to explore
      </div>
    </section>
  );
}

/* =========================================================================
   8) PROCESS — editorial 3-panel with connecting line
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
    <section className="section-contain py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <FloatingOrbs accentRGB={b.accentRGB} count={2} seed={9} />

      <div className="relative page-container">
        <FadeIn>
          <div className="text-center mb-16 sm:mb-20">
            <div
              className="text-xs uppercase mb-3 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              How it happened
            </div>
            <h2
              className="text-white font-black tracking-tight"
              style={{ fontSize: "clamp(26px, 4.5vw, 40px)" }}
            >
              {chapters.length} chapters, {project.duration}.
            </h2>
          </div>
        </FadeIn>

        {/* Connecting line behind cards (desktop only) */}
        <div className="relative">
          <m.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="hidden md:block absolute left-[8%] right-[8%] top-[110px] h-px origin-left z-0"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(${b.accentRGB},0.5), transparent)`,
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {chapters.map((c, i) => (
              <m.article
                key={c.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
                className="relative rounded-3xl p-8 sm:p-10 overflow-hidden"
                style={{
                  background: b.card,
                  border: `1px solid ${b.border}`,
                }}
              >
                {/* Number dot on the connecting line */}
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full z-10"
                  style={{
                    background: b.primary,
                    boxShadow: `0 0 20px rgba(${b.accentRGB},0.6)`,
                  }}
                  aria-hidden="true"
                />
                {/* Chapter number in card */}
                <div
                  className="text-xs uppercase tracking-[0.2em] mb-4"
                  style={{ color: b.primary }}
                >
                  Chapter {c.number}
                </div>
                <h3
                  className="text-white font-bold tracking-tight"
                  style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-base leading-relaxed mt-4"
                  style={{ color: b.textOnBrand, opacity: 0.65 }}
                >
                  {c.body}
                </p>
                <div
                  className="text-xs font-mono mt-6 inline-flex items-center gap-2"
                  style={{ color: b.primary, opacity: 0.7 }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: b.primary }}
                  />
                  {c.duration}
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   9) TESTIMONIAL — massive editorial pull quote
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
      className="section-contain w-full relative overflow-hidden py-20 sm:py-24 lg:py-28 px-6 md:px-10 xl:px-12 text-center"
      style={{
        background: `linear-gradient(180deg, ${b.dark}, #000 100%)`,
      }}
    >
      <FloatingOrbs accentRGB={b.accentRGB} count={3} seed={11} />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 30%, rgba(${b.accentRGB},0.15), transparent 70%)`,
        }}
      />

      <div className="relative page-container">
        {/* Giant quote glyph — slightly smaller on mobile */}
        <m.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="inline-flex items-center justify-center rounded-2xl border mb-8 sm:mb-12 w-14 h-14 sm:w-16 sm:h-16"
          style={{
            background: `rgba(${b.accentRGB},0.10)`,
            borderColor: `rgba(${b.accentRGB},0.30)`,
            color: b.primary,
            boxShadow: `0 0 60px rgba(${b.accentRGB},0.25)`,
          }}
        >
          <IconQuote size={24} stroke={1.5} aria-hidden="true" />
        </m.div>
        <FadeIn>
          <p
            className="text-white font-light leading-[1.25] sm:leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
          >
            {testimonialFull}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 sm:mt-12 inline-flex flex-col items-center gap-1">
            <div
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: b.primary, opacity: 0.7 }}
            >
              {project.testimonial.attribution}
            </div>
            {testimonialRole && (
              <div
                className="text-sm"
                style={{ color: b.textOnBrand, opacity: 0.55 }}
              >
                {testimonialRole}
              </div>
            )}
          </div>
        </FadeIn>
        <div className="text-[#1a1a1a] text-[10px] mt-6">
          Testimonial representative of client feedback.
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   10) TECH STACK GRID — visual tech showcase
   ========================================================================= */
function TechStackGrid({ project }: { project: Project }) {
  const b = project.brand;
  return (
    <section className="section-contain py-20 sm:py-28 border-y border-[#0a0a0a]">
      <div className="page-container">
        <FadeIn>
          <div className="text-center md:text-left mb-10 sm:mb-12">
            <div
              className="text-xs uppercase mb-3 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              Tech &amp; tools
            </div>
            <h2
              className="text-white font-black tracking-tight"
              style={{ fontSize: "clamp(26px, 4.5vw, 40px)" }}
            >
              The stack behind the work.
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Stack tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {project.stack.map((t, i) => (
              <m.div
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: EASE }}
                className="relative rounded-2xl px-5 py-6 sm:py-7 overflow-hidden text-center"
                style={{
                  background: b.card,
                  border: `1px solid ${b.border}`,
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, rgba(${b.accentRGB},0.15), transparent 70%)`,
                    filter: "blur(8px)",
                  }}
                />
                <div className="relative">
                  <div
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ color: b.primary, opacity: 0.5 }}
                  >
                    Stack
                  </div>
                  <div
                    className="text-base sm:text-lg font-semibold tracking-tight"
                    style={{ color: b.textOnBrand }}
                  >
                    {t}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
          {/* Project details */}
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{
              background: b.card,
              borderColor: b.border,
            }}
          >
            <div
              className="text-[10px] uppercase mb-4 tracking-[0.2em]"
              style={{ color: b.primary, opacity: 0.7 }}
            >
              Project specs
            </div>
            <dl className="space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt style={{ color: b.textOnBrand, opacity: 0.5 }}>Duration</dt>
                <dd className="text-white font-medium text-right">
                  {project.duration}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4 border-t" style={{ borderColor: b.border }}>
                <dt style={{ color: b.textOnBrand, opacity: 0.5 }}>Industry</dt>
                <dd className="text-white font-medium text-right">
                  {project.industry}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4 border-t" style={{ borderColor: b.border }}>
                <dt style={{ color: b.textOnBrand, opacity: 0.5 }}>Team</dt>
                <dd className="text-white font-medium text-right">
                  {project.teamLine}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4 border-t" style={{ borderColor: b.border }}>
                <dt style={{ color: b.textOnBrand, opacity: 0.5 }}>Year</dt>
                <dd className="text-white font-medium text-right">{project.year}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4 border-t" style={{ borderColor: b.border }}>
                <dt style={{ color: b.textOnBrand, opacity: 0.5 }}>Category</dt>
                <dd className="text-white font-medium text-right">{project.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   11) NEXT PROJECT — cinematic full-bleed CTA
   ========================================================================= */
function NextProjectStrip({ project }: { project: Project }) {
  const next = getNextProject(project.slug);
  const nb = next.brand;
  return (
    <Link
      href={`/work/${next.slug}/`}
      className="block section-contain relative w-full border-t group overflow-hidden"
      style={{
        background: nb.dark,
        borderColor: nb.border,
      }}
    >
      {/* Brand wash background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 80% at 70% 50%, rgba(${nb.accentRGB},0.18), transparent 70%)`,
        }}
      />
      {/* Giant wordmark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700"
      >
        <div
          className="font-black tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "clamp(80px, 14vw, 220px)",
            color: nb.primary,
            letterSpacing: "-0.06em",
          }}
        >
          {next.name.toUpperCase()}
        </div>
      </div>
      <div
        className="relative site-container py-16 sm:py-24 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8"
        style={{
          // Reserve room on mobile so floating sticky CTA never overlaps
          paddingBottom: "max(96px, env(safe-area-inset-bottom))",
        }}
      >
        <div className="text-center sm:text-left">
          <div
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] mb-4 inline-flex items-center gap-2"
            style={{ color: nb.primary, opacity: 0.75 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: nb.primary }}
            />
            Next case study
          </div>
          <div
            className="text-white font-black tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            {next.name}
          </div>
          <div
            className="text-base sm:text-lg mt-2 px-2 sm:px-0"
            style={{ color: nb.textOnBrand, opacity: 0.65 }}
          >
            {next.tagline}
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden sm:block">
            <ClientLogo slug={next.slug} height={48} />
          </span>
          <span className="sm:hidden">
            <ClientLogo slug={next.slug} height={36} />
          </span>
          <m.span
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold border"
            style={{
              background: `rgba(${nb.accentRGB}, 0.12)`,
              color: nb.primary,
              borderColor: `rgba(${nb.accentRGB}, 0.30)`,
            }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25 }}
          >
            View case study
            <IconArrowRight size={16} stroke={2} aria-hidden="true" />
          </m.span>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================================
   READING PROGRESS — thin brand-colored bar at top, fills as user scrolls
   ========================================================================= */
function ReadingProgress({ project }: { project: Project }) {
  const b = project.brand;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <m.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-40 origin-left pointer-events-none"
      style={{
        height: 2,
        background: `linear-gradient(90deg, ${b.primary}, rgba(${b.accentRGB},0.6))`,
        boxShadow: `0 0 12px rgba(${b.accentRGB},0.5)`,
        scaleX,
      }}
    />
  );
}

/* =========================================================================
   FLOATING CTA — sticky button appears after scrolling past hero
   ========================================================================= */
function FloatingCTA({ project }: { project: Project }) {
  const b = project.brand;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show after scrolling past ~60% of viewport height (past hero)
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* MOBILE: full-width sticky bottom bar with brand color.
              Thumb-friendly tap target; project-branded; safe-area aware. */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
            style={{
              paddingLeft: "max(12px, env(safe-area-inset-left))",
              paddingRight: "max(12px, env(safe-area-inset-right))",
              paddingBottom: "max(12px, env(safe-area-inset-bottom))",
              paddingTop: 12,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.95) 100%)",
            }}
          >
            <Link
              href="/contact"
              className="pointer-events-auto relative block w-full text-center font-semibold text-sm rounded-2xl overflow-hidden"
              style={{
                background: b.primary,
                color: "#000",
                padding: "16px 18px",
                boxShadow: `0 20px 60px rgba(${b.accentRGB},0.4), 0 0 0 1px rgba(255,255,255,0.1) inset`,
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 60% 100% at 50% 50%, rgba(255,255,255,0.18), transparent 70%)`,
                }}
              />
              <span className="relative inline-flex items-center justify-center gap-2">
                Build something like {project.name}
                <IconArrowRight size={15} stroke={2.5} aria-hidden="true" />
              </span>
            </Link>
          </m.div>

          {/* DESKTOP: floating pill bottom-right with pulse */}
          <m.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="hidden md:block fixed z-40 pointer-events-none"
            style={{
              bottom: "max(24px, env(safe-area-inset-bottom))",
              right: "max(24px, env(safe-area-inset-right))",
            }}
          >
            <Link
              href="/contact"
              className="pointer-events-auto group relative inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-semibold text-sm shadow-2xl"
              style={{
                background: b.primary,
                color: "#000",
                boxShadow: `0 20px 60px rgba(${b.accentRGB},0.4), 0 0 0 1px rgba(255,255,255,0.1) inset`,
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)`,
                  opacity: 0.5,
                }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  background: `rgba(${b.accentRGB},0.5)`,
                  opacity: 0.4,
                  animationDuration: "3s",
                }}
              />
              <span className="relative inline-flex items-center gap-2">
                Build something like {project.name}
                <IconArrowRight
                  size={14}
                  stroke={2.5}
                  className="group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* =========================================================================
   SOUND FAMILIAR — bridge section connecting the story to the visitor
   ========================================================================= */
function SoundFamiliar({ project }: { project: Project }) {
  const b = project.brand;

  // Per-project resonance points (general enough to map across industries
  // but specific enough to land for the right reader).
  const PAINS_BY_SLUG: Record<string, string[]> = {
    kova: [
      "Your team's losing leads because nobody can respond in time",
      "You're paying for three CRMs and none of them talk to each other",
      "Your best people spend half their week on follow-up emails",
      "You can't see who's actually buying until the pipeline goes cold",
    ],
    sero: [
      "Your clinicians are burning out on paperwork, not patient care",
      "Intake takes 25 minutes when it should take 3",
      "Your charts are inconsistent and audits are scary",
      "Insurance pre-auth is eating entire afternoons",
    ],
    aurum: [
      "Your relationship managers are buried in admin",
      "Client reporting is a manual scramble every month-end",
      "You can't surface portfolio insights without a data team",
      "Your high-net-worth experience feels like 2015 software",
    ],
    drft: [
      "Estimates take 8 hours when they should take 2",
      "Field crews can't update without coming into the office",
      "Daily logs are spreadsheets nobody updates",
      "You're paying twice — once for tools, once for the people working around them",
    ],
    linx: [
      "Your dispatch is a whiteboard and a prayer",
      "Customer comms slip through the cracks during peak hours",
      "You're hiring more ops staff to do less work",
      "Your routing isn't optimized — you can feel the waste",
    ],
  };

  const pains = PAINS_BY_SLUG[project.slug] ?? [
    "Your team is buried in repetitive work",
    "Your tools don't talk to each other",
    "Your best people spend too much time on admin",
    "You can't see what's actually happening in your business",
  ];

  return (
    <section className="section-contain relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Soft brand backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 60% at 50% 50%, rgba(${b.accentRGB},0.06), transparent 70%)`,
        }}
      />

      <div className="relative page-container">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="text-xs uppercase mb-4 tracking-[0.2em] inline-flex items-center gap-2"
              style={{ color: b.primary }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: b.primary }}
              />
              For operators reading this
            </div>
            <h2
              className="font-black text-white tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
            >
              Any of this sound{" "}
              <span style={{ color: b.primary }}>familiar?</span>
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mt-5 sm:mt-6 max-w-xl mx-auto"
              style={{ color: b.textOnBrand, opacity: 0.65 }}
            >
              {project.name} came to us with these. We&apos;ve seen them at
              dozens of businesses in the same shape. Yours might be one of
              them.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {pains.map((p, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
              className="relative flex items-start gap-4 rounded-2xl p-5 sm:p-6 border"
              style={{
                background: "#0a0a0a",
                borderColor: `rgba(${b.accentRGB},0.12)`,
                minHeight: 88,
              }}
            >
              <div
                className="shrink-0 w-9 h-9 rounded-xl inline-flex items-center justify-center mt-0.5"
                style={{
                  background: `rgba(${b.accentRGB},0.12)`,
                  border: `1px solid rgba(${b.accentRGB},0.28)`,
                }}
                aria-hidden="true"
              >
                <IconCheck
                  size={16}
                  stroke={2.5}
                  style={{ color: b.primary }}
                />
              </div>
              <p className="text-[#ccc] text-[15px] sm:text-base leading-[1.55] sm:leading-relaxed">
                {p}
              </p>
            </m.div>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="text-center mt-12 sm:mt-14">
            <p
              className="text-sm sm:text-base"
              style={{ color: b.textOnBrand, opacity: 0.65 }}
            >
              If two or more land — that&apos;s exactly the kind of work we do.
            </p>
            <m.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-6"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 sm:px-7 sm:py-4 font-semibold text-sm border transition-colors"
                style={{
                  background: `rgba(${b.accentRGB},0.10)`,
                  color: b.primary,
                  borderColor: `rgba(${b.accentRGB},0.30)`,
                }}
              >
                Tell us about your situation
                <IconArrowRight size={14} stroke={2} aria-hidden="true" />
              </Link>
            </m.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================================================================
   ENGAGEMENT SPECS — what an engagement like this actually looks like
   (Replaces the simple Tech Stack Grid with a much richer panel)
   ========================================================================= */
function EngagementSpecs({ project }: { project: Project }) {
  const b = project.brand;

  // Engagement specs vary per project but the shape is consistent. These are
  // calibrated estimates for a similar engagement going forward.
  const SPECS_BY_SLUG: Record<
    string,
    { investment: string; rounds: string; deliverables: string }
  > = {
    kova: {
      investment: "$30k — $60k",
      rounds: "Weekly reviews + 3 milestone gates",
      deliverables: "Brand identity + 4 production screens + AI matching engine + CRM automation",
    },
    sero: {
      investment: "$25k — $50k",
      rounds: "Weekly reviews + 3 milestone gates",
      deliverables: "Brand identity + mobile patient app + AI intake automation + practitioner portal",
    },
    aurum: {
      investment: "$40k — $80k",
      rounds: "Weekly reviews + 3 milestone gates",
      deliverables: "Brand identity + RM dashboard + reporting automation + portfolio insights AI",
    },
    drft: {
      investment: "$25k — $50k",
      rounds: "Weekly reviews + 3 milestone gates",
      deliverables: "Brand identity + estimator + field log app + daily summary automation",
    },
    linx: {
      investment: "$30k — $60k",
      rounds: "Weekly reviews + 3 milestone gates",
      deliverables: "Brand identity + dispatch dashboard + routing optimizer + comms automation",
    },
  };

  const specs = SPECS_BY_SLUG[project.slug] ?? {
    investment: "$25k — $80k",
    rounds: "Weekly reviews + milestone gates",
    deliverables: "Custom to your scope — brand, AI systems, automation, web",
  };

  const ROWS = [
    {
      icon: IconClock,
      label: "Duration",
      value: project.duration,
      sub: "Discovery → Build → Optimization",
    },
    {
      icon: IconUsersGroup,
      label: "Team setup",
      value: project.teamLine,
      sub: "Direct contact with founder + builders",
    },
    {
      icon: IconCurrencyDollar,
      label: "Investment range",
      value: specs.investment,
      sub: "Fixed scope, no surprise hourly billing",
    },
    {
      icon: IconRefresh,
      label: "Cadence",
      value: specs.rounds,
      sub: "You see progress every 48 hours",
    },
    {
      icon: IconRulerMeasure,
      label: "What's included",
      value: specs.deliverables,
      sub: "30-day post-launch optimization window",
    },
    {
      icon: IconLockSquare,
      label: "Ownership",
      value: "Yours, fully",
      sub: "Source code, designs, prompts — handed off at end",
    },
  ];

  return (
    <section className="section-contain relative py-16 sm:py-20 lg:py-24 border-y border-[#0a0a0a] overflow-hidden">
      <FloatingOrbs accentRGB={b.accentRGB} count={2} seed={13} />

      <div className="relative page-container">
        <FadeIn>
          <div className="text-center md:text-left mb-12 sm:mb-16">
            <div
              className="text-xs uppercase mb-3 tracking-[0.2em]"
              style={{ color: b.primary }}
            >
              Engagement reality
            </div>
            <h2
              className="text-white font-black tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(26px, 4.5vw, 40px)" }}
            >
              What a project like this{" "}
              <span style={{ color: b.primary }}>actually looks like.</span>
            </h2>
            <p
              className="mt-5 sm:mt-6 text-[15px] sm:text-lg leading-[1.6] sm:leading-relaxed max-w-2xl"
              style={{ color: b.textOnBrand, opacity: 0.65 }}
            >
              No agency surprises. Fixed scope, transparent pricing,
              direct access. Here&apos;s the shape of a {project.name}-style
              engagement.
            </p>
          </div>
        </FadeIn>

        {/* Specs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 mb-12 sm:mb-16">
          {ROWS.map((r, i) => {
            const Icon = r.icon;
            return (
              <m.article
                key={r.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: EASE }}
                className="relative rounded-2xl p-5 sm:p-7 border overflow-hidden flex items-start gap-4"
                style={{
                  background: b.card,
                  borderColor: b.border,
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, rgba(${b.accentRGB},0.18), transparent 70%)`,
                    filter: "blur(12px)",
                  }}
                />
                <div
                  className="shrink-0 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border"
                  style={{
                    background: `rgba(${b.accentRGB},0.12)`,
                    borderColor: `rgba(${b.accentRGB},0.28)`,
                  }}
                  aria-hidden="true"
                >
                  <Icon size={20} stroke={1.5} style={{ color: b.primary }} />
                </div>
                <div className="relative min-w-0 flex-1">
                  <div
                    className="text-[10px] uppercase tracking-[0.2em] mb-1.5"
                    style={{ color: b.primary, opacity: 0.75 }}
                  >
                    {r.label}
                  </div>
                  <div
                    className="text-white font-semibold tracking-tight leading-[1.3]"
                    style={{ fontSize: "clamp(16px, 1.7vw, 18px)" }}
                  >
                    {r.value}
                  </div>
                  <div
                    className="text-[13px] sm:text-sm mt-2 leading-[1.5]"
                    style={{ color: b.textOnBrand, opacity: 0.6 }}
                  >
                    {r.sub}
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>

        {/* Tech stack — kept but as a subsection */}
        <FadeIn>
          <div className="mb-5 sm:mb-6">
            <div
              className="text-[10px] uppercase tracking-[0.2em] mb-1"
              style={{ color: b.primary, opacity: 0.7 }}
            >
              Built with
            </div>
            <div className="text-white text-base sm:text-lg font-semibold">
              The stack behind the work
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-xs sm:text-sm px-4 py-2 rounded-full border transition-colors"
                style={{
                  background: b.card,
                  color: b.textOnBrand,
                  borderColor: b.border,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================================================================
   RESONATE CTA — strong terminal CTA before Next Project
   The conversion moment. Full-bleed, brand-color wash, dual CTA.
   ========================================================================= */
function ResonateCTA({ project }: { project: Project }) {
  const b = project.brand;

  const TRUST_POINTS = [
    {
      icon: IconBolt,
      title: "First conversation in 24 hours",
      sub: "Real human, not a form auto-reply",
    },
    {
      icon: IconHeartHandshake,
      title: "Free 30-minute discovery call",
      sub: "No commitment, no sales pressure",
    },
    {
      icon: IconCalendar,
      title: "Clear proposal in days, not weeks",
      sub: "Scope, timeline, pricing — all upfront",
    },
  ];

  return (
    <section
      className="section-contain relative w-full overflow-hidden py-20 sm:py-24 lg:py-28 px-6 md:px-10 xl:px-12"
      style={{
        background: `linear-gradient(180deg, #000, ${b.dark} 50%, #000 100%)`,
      }}
    >
      <FloatingOrbs accentRGB={b.accentRGB} count={4} seed={17} />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 50% at 50% 30%, rgba(${b.accentRGB},0.15), transparent 70%)`,
        }}
      />
      {/* Massive ghosted "BUILD" wordmark */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[55%] -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-[0.025]"
      >
        <div
          className="font-black tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "clamp(180px, 26vw, 480px)",
            color: b.primary,
            letterSpacing: "-0.08em",
            mixBlendMode: "screen",
          }}
        >
          BUILD
        </div>
      </div>

      <div className="relative page-container text-center">
        <FadeIn>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{
              background: `rgba(${b.accentRGB},0.10)`,
              borderColor: `rgba(${b.accentRGB},0.30)`,
              color: b.primary,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: b.primary }}
              aria-hidden="true"
            />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
              Available for new projects
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-black text-white tracking-tighter leading-[1.05] sm:leading-[1.02]"
            style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
          >
            Like {project.name}&apos;s,{" "}
            <span style={{ color: b.primary }}>built for you.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="mt-6 sm:mt-8 text-base sm:text-xl leading-[1.6] sm:leading-relaxed max-w-2xl mx-auto px-2"
            style={{ color: b.textOnBrand, opacity: 0.78 }}
          >
            Tell us about your business in 30 minutes. We&apos;ll tell you in
            plain language whether AI can move the needle &mdash; and if not,
            we&apos;ll say so.
          </p>
        </FadeIn>

        {/* Dual CTA — full-width stack on mobile, side-by-side on desktop */}
        <FadeIn delay={0.3}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <m.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex-1 sm:flex-initial"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `rgba(${b.accentRGB},0.4)`,
                  filter: "blur(20px)",
                  opacity: 0.5,
                }}
              />
              <Link
                href="/contact"
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-7 sm:px-9 py-4 sm:py-5 font-bold text-base sm:text-lg shadow-2xl"
                style={{
                  background: b.primary,
                  color: "#000",
                  boxShadow: `0 30px 80px rgba(${b.accentRGB},0.35), 0 0 0 1px rgba(255,255,255,0.1) inset`,
                }}
              >
                Book a Discovery Call
                <IconArrowRight size={18} stroke={2.5} aria-hidden="true" />
              </Link>
            </m.div>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-7 sm:px-9 py-4 sm:py-5 font-semibold text-base sm:text-lg border transition-colors"
              style={{
                color: b.textOnBrand,
                borderColor: `rgba(${b.accentRGB},0.30)`,
                background: "transparent",
              }}
            >
              View more work
            </Link>
          </div>
        </FadeIn>

        {/* Reassurance row */}
        <FadeIn delay={0.4}>
          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 max-w-3xl mx-auto">
            {TRUST_POINTS.map((t, i) => {
              const Icon = t.icon;
              return (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: EASE }}
                  className="text-center sm:text-left"
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 rounded-xl border mb-3 mx-auto sm:mx-0"
                    style={{
                      background: `rgba(${b.accentRGB},0.10)`,
                      borderColor: `rgba(${b.accentRGB},0.25)`,
                    }}
                    aria-hidden="true"
                  >
                    <Icon
                      size={16}
                      stroke={1.5}
                      style={{ color: b.primary }}
                    />
                  </div>
                  <div
                    className="text-white text-sm font-semibold tracking-tight"
                  >
                    {t.title}
                  </div>
                  <div
                    className="text-xs mt-1 leading-relaxed"
                    style={{ color: b.textOnBrand, opacity: 0.55 }}
                  >
                    {t.sub}
                  </div>
                </m.div>
              );
            })}
          </div>
        </FadeIn>

        {/* Direct contact line */}
        <FadeIn delay={0.6}>
          <div
            className="mt-12 sm:mt-16 text-xs sm:text-sm flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
            style={{ color: b.textOnBrand, opacity: 0.45 }}
          >
            <span className="inline-flex items-center gap-1.5">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: b.primary }}
                aria-hidden="true"
              />
              Prefer email?
            </span>
            <a
              href="mailto:office@flowtix.ai"
              className="font-mono hover:underline"
              style={{ color: b.primary }}
            >
              office@flowtix.ai
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================================================================
   COMPOSED LAYOUT
   ========================================================================= */
export function ProjectPageLayout({
  project,
  content,
  afterGallery,
}: {
  project: Project;
  content: ProjectPageContent;
  /** Optional section rendered between the gallery and the process moment. */
  afterGallery?: ReactNode;
}) {
  // Pick the most impactful stat for the NumbersWall — first one with highest visual weight
  const featuredStat = content.statementStats[0];
  const technical = getProjectTechnical(project.slug);

  return (
    <main>
      <ReadingProgress project={project} />
      <FloatingCTA project={project} />
      <Hero
        project={project}
        heroHeadline={content.heroHeadline}
        keyMetric={content.keyMetric}
      />
      <ProjectMoodboard project={project} />
      <StatementStats project={project} stats={content.statementStats} />
      <BrandStrip project={project} />
      <StorySection
        project={project}
        challenge={content.challenge}
        solution={content.solution}
        whatWeBuilt={content.whatWeBuilt}
      />
      {technical && (
        <>
          <ProjectArchitecture
            project={project}
            summary={technical.architecture.summary}
            nodes={technical.architecture.nodes}
          />
          <ProjectAIAgents project={project} agents={technical.agents} />
        </>
      )}
      <NumbersWall project={project} stat={featuredStat} />
      <FullBleedMoment project={project} fullBleed={content.fullBleed} />
      <GalleryScroll project={project} gallery={content.gallery} />
      {afterGallery}
      <ProcessMoment project={project} chapters={content.process} />
      <TestimonialMoment
        project={project}
        testimonialFull={content.testimonialFull}
        testimonialRole={content.testimonialRole}
      />
      {technical && (
        <ProjectTechStack project={project} stack={technical.stack} />
      )}
      <SoundFamiliar project={project} />
      <EngagementSpecs project={project} />
      <ResonateCTA project={project} />
      <NextProjectStrip project={project} />
    </main>
  );
}
