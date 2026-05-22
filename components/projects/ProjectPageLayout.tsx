"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";
import { m, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowsHorizontal,
  IconQuote,
  IconSparkles,
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
      className="relative min-h-screen overflow-hidden flex flex-col"
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

      {/* MASSIVE BRAND WORDMARK WATERMARK */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[58%] -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-[0.025]"
      >
        <div
          className="font-black tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "clamp(200px, 28vw, 480px)",
            color: b.primary,
            letterSpacing: "-0.08em",
            mixBlendMode: "screen",
          }}
        >
          {project.name.toUpperCase()}
        </div>
      </div>

      <m.div
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col"
        style={{ opacity: headlineOpacity }}
      >
        {/* TOP ROW */}
        <div className="pt-28 sm:pt-32 lg:pt-40 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[#444] hover:text-[#888] text-xs transition-colors"
          >
            <IconArrowLeft size={12} stroke={2} aria-hidden="true" />
            <span className="hidden sm:inline">All Work</span>
          </Link>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-3 py-1 rounded-full border"
              style={{
                borderColor: `rgba(${b.accentRGB}, 0.30)`,
                background: `rgba(${b.accentRGB}, 0.08)`,
                color: b.primary,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: b.primary }}
              />
              {project.industry}
            </span>
            <span
              className="text-[10px] sm:text-xs px-3 py-1 rounded-full border"
              style={{ borderColor: "#1a1a1a", color: "#444" }}
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

          {/* CLIENT LOGO — massively scaled with glow */}
          <m.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="relative inline-block w-full"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-12 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 60% 80% at 50% 50%, rgba(${b.accentRGB},0.20), transparent 70%)`,
                filter: "blur(40px)",
              }}
            />
            <div className="relative flex justify-center md:justify-start">
              <ClientLogo slug={project.slug} height={96} />
            </div>
            <div
              className="relative text-base sm:text-lg mt-4 sm:mt-5"
              style={{ color: b.textOnBrand, opacity: 0.7 }}
            >
              {project.tagline}
            </div>
          </m.div>

          {/* Story headline */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
            className="mt-8 sm:mt-10 font-black text-white leading-[0.95] tracking-tight max-w-4xl mx-auto md:mx-0"
            style={{ fontSize: "clamp(32px, 7vw, 80px)" }}
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
                fontSize: "clamp(15px, 2vw, 22px)",
                color: b.primary,
              }}
            >
              {keyMetric}
            </span>
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
            >
              A visual identity, built from scratch.
            </h2>
            <p
              className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: b.textOnBrand, opacity: 0.65 }}
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
                  fontSize: "clamp(48px, 8vw, 96px)",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              style={{ fontSize: "clamp(24px, 4vw, 42px)" }}
            >
              The change, measured.
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16">
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
                className="font-black"
                style={{
                  fontSize: "clamp(48px, 8vw, 96px)",
                  color: b.primary,
                  lineHeight: 1,
                  textShadow: `0 0 40px rgba(${b.accentRGB},0.4)`,
                }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[#888] text-[10px] sm:text-xs uppercase tracking-wider mt-3 sm:mt-4 max-w-[160px] mx-auto leading-tight">
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
    <section className="section-contain py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* CHALLENGE + SOLUTION side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* CHALLENGE */}
          <FadeIn>
            <article
              className="relative rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden h-full"
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
                  className="font-bold text-white leading-tight tracking-tight"
                  style={{ fontSize: "clamp(20px, 3vw, 30px)" }}
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
              className="relative rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden h-full"
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
                  className="font-bold text-white leading-tight tracking-tight"
                  style={{ fontSize: "clamp(20px, 3vw, 30px)" }}
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
                className="font-black text-white tracking-tight"
                style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
              >
                {whatWeBuilt.length} pieces. One coherent system.
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-24 sm:space-y-36">
            {whatWeBuilt.map((item, i) => {
              const isOdd = i % 2 === 1;
              return (
                <m.div
                  key={item.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center"
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
                      className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 text-xs font-bold"
                      style={{
                        background: `rgba(${b.accentRGB},0.10)`,
                        color: b.primary,
                        border: `1px solid rgba(${b.accentRGB},0.25)`,
                      }}
                    >
                      {item.number}
                    </div>
                    <h3 className="relative text-white text-2xl sm:text-3xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="relative text-[#888] text-base sm:text-lg leading-relaxed mt-4 max-w-md">
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
      className="section-contain relative w-full overflow-hidden py-24 sm:py-32 lg:py-40 text-center"
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
      <div className="relative max-w-6xl mx-auto px-4">
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-black tracking-tighter"
          style={{
            fontSize: "clamp(120px, 22vw, 320px)",
            color: b.primary,
            lineHeight: 0.85,
            textShadow: `0 0 80px rgba(${b.accentRGB},0.5)`,
            letterSpacing: "-0.06em",
          }}
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </m.div>
        <FadeIn delay={0.3}>
          <p
            className="mt-6 sm:mt-8 text-base sm:text-xl max-w-md mx-auto"
            style={{ color: b.textOnBrand, opacity: 0.75 }}
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

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
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
              style={{ fontSize: "clamp(24px, 4vw, 42px)" }}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center md:text-left">
        <FadeIn>
          <div
            className="text-xs uppercase mb-3 tracking-[0.2em]"
            style={{ color: b.primary }}
          >
            The Screens
          </div>
          <h2
            className="text-white font-black tracking-tight"
            style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
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
          className="inline-flex gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 pb-6"
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
    <section className="section-contain py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingOrbs accentRGB={b.accentRGB} count={2} seed={9} />

      <div className="relative max-w-7xl mx-auto">
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
              style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
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
      className="section-contain w-full relative overflow-hidden py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 text-center"
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

      <div className="relative max-w-4xl mx-auto">
        {/* Giant quote glyph */}
        <m.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="inline-flex items-center justify-center rounded-2xl border mb-8 sm:mb-12"
          style={{
            width: 64,
            height: 64,
            background: `rgba(${b.accentRGB},0.10)`,
            borderColor: `rgba(${b.accentRGB},0.30)`,
            color: b.primary,
            boxShadow: `0 0 60px rgba(${b.accentRGB},0.25)`,
          }}
        >
          <IconQuote size={28} stroke={1.5} aria-hidden="true" />
        </m.div>
        <FadeIn>
          <p
            className="text-white font-light leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(24px, 4.5vw, 52px)" }}
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
    <section className="section-contain py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
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
              style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
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
            fontSize: "clamp(120px, 22vw, 360px)",
            color: nb.primary,
            letterSpacing: "-0.06em",
          }}
        >
          {next.name.toUpperCase()}
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
        <div className="text-center sm:text-left">
          <div
            className="text-xs uppercase tracking-[0.25em] mb-4 inline-flex items-center gap-2"
            style={{ color: nb.primary, opacity: 0.7 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: nb.primary }}
            />
            Next case study
          </div>
          <div
            className="text-white font-black tracking-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
          >
            {next.name}
          </div>
          <div
            className="text-base sm:text-lg mt-2"
            style={{ color: nb.textOnBrand, opacity: 0.65 }}
          >
            {next.tagline}
          </div>
        </div>
        <div className="flex items-center gap-5 sm:gap-6">
          <ClientLogo slug={next.slug} height={48} />
          <m.span
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold border"
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
   COMPOSED LAYOUT
   ========================================================================= */
export function ProjectPageLayout({
  project,
  content,
}: {
  project: Project;
  content: ProjectPageContent;
}) {
  // Pick the most impactful stat for the NumbersWall — first one with highest visual weight
  const featuredStat = content.statementStats[0];

  return (
    <main>
      <Hero
        project={project}
        heroHeadline={content.heroHeadline}
        keyMetric={content.keyMetric}
      />
      <BrandAtmosphere project={project} />
      <StatementStats project={project} stats={content.statementStats} />
      <StorySection
        project={project}
        challenge={content.challenge}
        solution={content.solution}
        whatWeBuilt={content.whatWeBuilt}
      />
      <NumbersWall project={project} stat={featuredStat} />
      <FullBleedMoment project={project} fullBleed={content.fullBleed} />
      <GalleryScroll project={project} gallery={content.gallery} />
      <ProcessMoment project={project} chapters={content.process} />
      <TestimonialMoment
        project={project}
        testimonialFull={content.testimonialFull}
        testimonialRole={content.testimonialRole}
      />
      <TechStackGrid project={project} />
      <NextProjectStrip project={project} />
    </main>
  );
}
