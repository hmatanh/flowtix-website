"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  IconArrowRight,
  IconBriefcase,
  IconUsersGroup,
  IconBolt,
} from "@tabler/icons-react";
import { projects, type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { ClientLogo } from "@/components/clients/logos/ClientLogo";
import { ListingMockup } from "@/components/projects/ListingMockups";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const HEADLINE = "Work that speaks for itself.";

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const STATS = [
  { value: "5", label: "Industries served", icon: IconBriefcase },
  { value: "50+", label: "Production deploys", icon: IconBolt },
  { value: "100%", label: "Built in-house", icon: IconUsersGroup },
];

function ProjectCard({
  project,
  size = "default",
}: {
  project: Project;
  size?: "default" | "large";
}) {
  const b = project.brand;
  return (
    <Link
      href={`/work/${project.slug}/`}
      className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 min-h-[420px] sm:min-h-[460px]"
      style={{
        background: b.dark,
        borderColor: "rgba(255,255,255,0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `rgba(${b.accentRGB},0.40)`;
        e.currentTarget.style.boxShadow = `0 40px 80px rgba(0,0,0,0.45), 0 0 80px rgba(${b.accentRGB},0.12)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Brand gradient hint */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-150"
        style={{
          opacity: 0.22,
          background: `radial-gradient(ellipse 70% 60% at ${
            size === "large" ? "80%" : "70%"
          } 20%, rgba(${b.accentRGB},0.45), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(rgba(${b.accentRGB},0.06) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 80%)",
        }}
      />

      {/* Brand-color side glow */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-64 h-64 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"
        style={{
          background: `radial-gradient(circle, rgba(${b.accentRGB},0.20), transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div
        className={`relative grid grid-cols-1 ${
          size === "large" ? "lg:grid-cols-[1.05fr_1fr]" : ""
        } gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 h-full`}
      >
        {/* Text side */}
        <div className="flex flex-col">
          {/* Client logo + 'Featured' badge */}
          <div className="flex items-center justify-between gap-3">
            <div className="h-10 flex items-center">
              <ClientLogo slug={project.slug} height={32} />
            </div>
            <span
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 rounded-full"
              style={{
                background: `rgba(${b.accentRGB},0.12)`,
                color: b.primary,
                border: `1px solid rgba(${b.accentRGB},0.25)`,
              }}
            >
              {project.category}
            </span>
          </div>

          <div className="text-[#666] text-[10px] sm:text-xs tracking-[0.18em] uppercase mt-5 sm:mt-6">
            {project.industry}
          </div>
          <h3
            className="text-white font-bold mt-2 tracking-tight leading-[1.15]"
            style={{ fontSize: "clamp(22px, 3vw, 30px)" }}
          >
            {project.tagline}
          </h3>
          <p className="text-[#999] text-[14px] sm:text-sm mt-3 sm:mt-4 leading-[1.65] sm:leading-relaxed max-w-md">
            {project.description}
          </p>

          {/* Result preview pills */}
          <div className="mt-4 sm:mt-5 grid grid-cols-3 gap-2">
            {project.results.slice(0, 3).map((r) => (
              <div
                key={r.label}
                className="rounded-lg p-2 sm:p-2.5 border"
                style={{
                  background: `rgba(${b.accentRGB},0.04)`,
                  borderColor: `rgba(${b.accentRGB},0.12)`,
                }}
              >
                <div
                  className="font-bold tabular-nums text-sm sm:text-base"
                  style={{ color: b.primary }}
                >
                  {r.value}
                </div>
                <div
                  className="text-[8px] sm:text-[9px] uppercase tracking-wider mt-0.5 leading-tight"
                  style={{ color: b.textOnBrand, opacity: 0.55 }}
                >
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          {/* Services tags */}
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
            {project.services.slice(0, 4).map((s) => (
              <span
                key={s}
                className="text-[9px] sm:text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: `rgba(${b.accentRGB},0.06)`,
                  color: b.textOnBrand,
                  border: `1px solid rgba(${b.accentRGB},0.15)`,
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 sm:pt-8 flex items-center justify-between">
            <span className="text-[#666] text-xs font-mono">
              {project.year} · {project.duration}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: b.primary }}
            >
              View Case Study
              <IconArrowRight
                size={14}
                stroke={2}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>

        {/* Mockup side */}
        <div className="flex items-center justify-center min-h-[200px] sm:min-h-[280px] relative">
          {/* Halo behind mockup */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(${b.accentRGB},0.20), transparent 70%)`,
              filter: "blur(30px)",
              opacity: 0.6,
            }}
          />
          <div className="relative w-full max-w-[90%] transition-transform duration-500 group-hover:scale-[1.04]">
            <ListingMockup slug={project.slug} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  const [kova, sero, aurum, drft, linx] = projects;
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle grid */}
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

        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#cccccc] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                Selected Work
              </span>
            </div>
          </FadeIn>
          <h1
            className="font-black tracking-tighter text-white leading-[1.02] sm:leading-[1.05]"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
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
          <FadeIn delay={0.5}>
            <p className="text-[#888] mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-[1.65] sm:leading-relaxed px-2">
              Five projects across five industries. Different problems,
              different solutions, one standard: exceptional.
            </p>
          </FadeIn>

          {/* Brand colors strip — 5 project colors */}
          <FadeIn delay={0.6}>
            <div className="mt-8 sm:mt-10 inline-flex items-center gap-3">
              {projects.map((p, i) => (
                <m.span
                  key={p.slug}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.7 + i * 0.08,
                    duration: 0.4,
                    ease: "backOut",
                  }}
                  className="inline-flex flex-col items-center gap-1.5"
                  title={p.name}
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: p.brand.primary,
                      boxShadow: `0 0 12px ${p.brand.primary}66`,
                    }}
                  />
                  <span
                    className="text-[9px] uppercase tracking-widest font-mono"
                    style={{ color: "#444" }}
                  >
                    {p.name}
                  </span>
                </m.span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <p className="text-[#1a1a1a] text-[11px] mt-8 sm:mt-10">
              Client names are fictional. Work and results are representative.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============== STATS STRIP ============== */}
      <section className="relative py-10 sm:py-14 border-y border-[#0a0a0a] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <m.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                  className="text-center"
                >
                  <Icon
                    size={20}
                    stroke={1.5}
                    aria-hidden="true"
                    className="text-blue-400 mx-auto mb-2"
                  />
                  <div
                    className="font-black text-white tabular-nums tracking-tight"
                    style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#666] uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== PROJECT GRID ============== */}
      <section className="section-contain px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
          {/* Row 1 — KOVA full width */}
          <FadeIn>
            <ProjectCard project={kova} size="large" />
          </FadeIn>

          {/* Row 2 — SERŌ + AURUM side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <FadeIn delay={0.05}>
              <ProjectCard project={sero} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ProjectCard project={aurum} />
            </FadeIn>
          </div>

          {/* Row 3 — DRFT full width */}
          <FadeIn delay={0.05}>
            <ProjectCard project={drft} size="large" />
          </FadeIn>

          {/* Row 4 — LINX */}
          <FadeIn delay={0.05}>
            <ProjectCard project={linx} size="large" />
          </FadeIn>
        </div>
      </section>

      {/* ============== BOTTOM CTA ============== */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-t border-[#0a0a0a]">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-6 sm:mb-8">
              <span className="text-[#cccccc] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                Yours could be next
              </span>
            </div>
            <h2
              className="font-black tracking-tighter text-white leading-[1.05]"
              style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
            >
              The sixth project{" "}
              <span className="gradient-text-blue">starts with you.</span>
            </h2>
            <p className="text-[#888] mt-5 sm:mt-6 text-base sm:text-lg max-w-xl mx-auto leading-[1.65] sm:leading-relaxed px-2">
              We&apos;re selective — but always taking new conversations. Tell
              us what you&apos;re building. We&apos;ll tell you if and how
              we can help.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <m.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="btn-shimmer inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:bg-[#eee] transition-colors"
                >
                  <span className="relative z-10">Start a Conversation</span>
                  <IconArrowRight
                    size={16}
                    stroke={2.5}
                    aria-hidden="true"
                    className="relative z-10"
                  />
                </Link>
              </m.div>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-[#1a1a1a] text-[#888] px-7 py-4 rounded-2xl text-sm font-semibold hover:border-[#2a2a2a] hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
