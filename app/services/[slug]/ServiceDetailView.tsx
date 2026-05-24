"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  IconArrowRight,
  IconCheck,
  IconChevronRight,
  IconSparkles,
  IconClock,
  IconShieldCheck,
} from "@tabler/icons-react";
import {
  getServiceBySlug,
  getRelatedServices,
  type Service,
} from "@/lib/services";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { GlowCard } from "@/components/GlowCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { getServiceColor } from "@/components/services/ServiceVisual";
import { ROICalculator } from "@/components/services/ROICalculator";

const ROI_SLUGS = new Set(["ai-systems", "automation", "ai-sales"]);

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function ServiceDetailView({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const related = getRelatedServices(slug);
  const Icon = service.icon;
  const c = getServiceColor(service.number);

  return (
    <>
      {/* ============== HERO — per-service color theming ============== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
        {/* Service-color radial backdrop */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(${c.rgb},0.10) 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
        {/* Service-color floating orb */}
        <m.div
          aria-hidden="true"
          className="absolute pointer-events-none rounded-full"
          style={{
            top: "20%",
            left: "-10%",
            width: 400,
            height: 400,
            background: `radial-gradient(circle, rgba(${c.rgb},0.08), transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle service number watermark */}
        <div
          aria-hidden="true"
          className="absolute right-4 sm:right-12 top-24 sm:top-32 font-black select-none pointer-events-none"
          style={{
            fontSize: "clamp(120px, 18vw, 280px)",
            color: `rgba(${c.rgb}, 0.03)`,
            WebkitTextStroke: `1px rgba(${c.rgb}, 0.08)`,
            letterSpacing: "-0.08em",
          }}
        >
          {service.number}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <nav className="text-[#444] text-xs sm:text-sm flex items-center gap-2 mb-8 sm:mb-10">
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <IconChevronRight
                size={12}
                stroke={2}
                aria-hidden="true"
                className="text-[#222]"
              />
              <span className="text-[#888] truncate max-w-[200px] sm:max-w-none">
                {service.title}
              </span>
            </nav>
          </FadeIn>

          {/* Icon mark with service-color glow */}
          <m.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative inline-block mb-7 sm:mb-8"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(${c.rgb},0.25), transparent 70%)`,
                filter: "blur(20px)",
              }}
            />
            <div
              className="relative inline-flex items-center justify-center rounded-2xl border"
              style={{
                width: 72,
                height: 72,
                background: `rgba(${c.rgb},0.08)`,
                borderColor: `rgba(${c.rgb},0.30)`,
              }}
            >
              <Icon
                size={32}
                stroke={1.5}
                aria-hidden="true"
                style={{ color: c.primary }}
              />
            </div>
            {/* Service number pill */}
            <div
              className="absolute -bottom-2 -right-2 text-[10px] font-mono px-2 py-0.5 rounded-full border"
              style={{
                background: "#000",
                color: c.primary,
                borderColor: `rgba(${c.rgb},0.40)`,
              }}
            >
              {service.number}
            </div>
          </m.div>

          {/* Service category label */}
          <FadeIn delay={0.1}>
            <div
              className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4 font-medium inline-flex items-center gap-2"
              style={{ color: c.primary }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: c.primary }}
              />
              Service {service.number}
            </div>
          </FadeIn>

          <h1
            className="font-black tracking-tighter leading-[1.05] text-white"
            style={{ fontSize: "clamp(34px, 6vw, 72px)" }}
          >
            <m.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
            >
              {service.title.split(" ").map((w, i) => (
                <m.span
                  key={i}
                  variants={wordVariants}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="inline-block mr-[0.2em]"
                >
                  {w}
                </m.span>
              ))}
            </m.span>
          </h1>

          <FadeIn delay={0.5}>
            <p className="text-[#999] text-base sm:text-lg mt-7 sm:mt-8 max-w-2xl leading-[1.65] sm:leading-relaxed">
              {service.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
              <m.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-2xl"
              >
                {/* Glow behind primary CTA */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `rgba(${c.rgb},0.30)`,
                    filter: "blur(16px)",
                    opacity: 0.4,
                  }}
                />
                <Link
                  href="/contact"
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm"
                  style={{
                    background: c.primary,
                    color: "#000",
                    boxShadow: `0 20px 40px rgba(${c.rgb},0.25)`,
                  }}
                >
                  Start a Project
                  <IconArrowRight size={16} stroke={2.5} aria-hidden="true" />
                </Link>
              </m.div>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center border text-[#888] px-7 py-3.5 rounded-2xl text-sm font-semibold hover:text-white transition-colors"
                style={{ borderColor: `rgba(${c.rgb},0.18)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${c.rgb},0.40)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${c.rgb},0.18)`;
                }}
              >
                View All Services
              </Link>
            </div>
          </FadeIn>

          {/* Quick facts strip — mobile-optimized */}
          <FadeIn delay={0.8}>
            <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 max-w-md sm:max-w-2xl">
              {[
                { icon: IconClock, label: "Typical timeline", value: "2–6 wk" },
                { icon: IconSparkles, label: "First deploy", value: "48 hours" },
                { icon: IconShieldCheck, label: "Optimization", value: "30 days" },
              ].map((f) => {
                const FIcon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="rounded-xl border p-3 sm:p-4"
                    style={{
                      background: "#0a0a0a",
                      borderColor: `rgba(${c.rgb},0.12)`,
                    }}
                  >
                    <FIcon
                      size={14}
                      stroke={1.5}
                      aria-hidden="true"
                      style={{ color: c.primary }}
                    />
                    <div className="text-white font-semibold mt-2 tabular-nums text-sm sm:text-base">
                      {f.value}
                    </div>
                    <div
                      className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-1"
                      style={{ color: "#666" }}
                    >
                      {f.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============== THE CHALLENGE — brand-tinted ============== */}
      <section
        className="relative border-y border-[#0a0a0a] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "#040404" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 30% 30%, rgba(${c.rgb},0.04), transparent 70%)`,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2"
              style={{ color: c.primary }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              The Challenge
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote
              className="font-black tracking-tighter mt-4 sm:mt-5 italic leading-[1.15] sm:leading-[1.1]"
              style={{
                fontSize: "clamp(24px, 4.5vw, 48px)",
                color: "#ffffff",
              }}
            >
              <span style={{ color: c.primary, opacity: 0.4 }}>&ldquo;</span>
              {service.pullQuote}
              <span style={{ color: c.primary, opacity: 0.4 }}>&rdquo;</span>
            </blockquote>
          </FadeIn>

          <StaggerContainer className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {service.pains.map((p, i) => (
              <StaggerItem key={p.title}>
                <m.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-5 sm:p-6 h-full relative overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(239,68,68,0.10), transparent 70%)",
                      filter: "blur(10px)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span
                        className="text-[10px] uppercase tracking-widest font-mono"
                        style={{ color: "#666" }}
                      >
                        Pain {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-white text-[15px] sm:text-base font-semibold mt-3 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[#666] text-[13px] sm:text-sm leading-relaxed mt-2">
                      {p.text}
                    </p>
                  </div>
                </m.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============== OUR APPROACH ============== */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: c.primary }}
            >
              Our approach
            </div>
            <h2
              className="font-black text-white tracking-tight leading-[1.05] max-w-2xl"
              style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
            >
              How we approach{" "}
              <span style={{ color: c.primary }}>
                {service.title.toLowerCase().split(" & ")[0]}
              </span>
              .
            </h2>
          </FadeIn>

          <div className="mt-12 sm:mt-16 relative">
            {/* Vertical connecting line */}
            <m.div
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute left-5 sm:left-7 top-0 bottom-0 w-px origin-top hidden sm:block"
              style={{
                background: `linear-gradient(180deg, rgba(${c.rgb},0.40), rgba(${c.rgb},0.05))`,
              }}
            />

            <StaggerContainer className="space-y-10 sm:space-y-12" stagger={0.08}>
              {service.steps.map((s, i) => (
                <StaggerItem key={s.title}>
                  <m.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="relative pl-14 sm:pl-24 lg:pl-32 border-t border-[#0f0f0f] pt-7 sm:pt-8"
                  >
                    {/* Step number — circular badge */}
                    <div
                      className="absolute left-0 -top-4 sm:left-0 sm:-top-3 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full inline-flex items-center justify-center font-bold text-sm sm:text-base"
                      style={{
                        background: "#0a0a0a",
                        border: `2px solid rgba(${c.rgb},0.35)`,
                        color: c.primary,
                        boxShadow: `0 0 16px rgba(${c.rgb},0.25)`,
                      }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[#888] text-[15px] sm:text-base leading-[1.65] sm:leading-relaxed mt-2.5 sm:mt-3 max-w-2xl">
                      {s.text}
                    </p>
                  </m.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ============== WHAT'S INCLUDED ============== */}
      <section className="bg-[#040404] border-y border-[#0a0a0a] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 40% 60% at 80% 50%, rgba(${c.rgb},0.05), transparent 70%)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: c.primary }}
            >
              What&apos;s included
            </div>
            <h2
              className="font-black text-white tracking-tight leading-[1.05] max-w-2xl"
              style={{ fontSize: "clamp(26px, 5vw, 48px)" }}
            >
              Every engagement covers all of this.
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {service.features.map((f) => (
              <StaggerItem key={f}>
                <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-xl p-4 sm:p-5 h-full flex items-start gap-3 sm:gap-4">
                  <span
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full inline-flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      border: `1px solid rgba(${c.rgb},0.40)`,
                      background: `rgba(${c.rgb},0.10)`,
                    }}
                  >
                    <IconCheck
                      size={14}
                      stroke={2.5}
                      aria-hidden="true"
                      style={{ color: c.primary }}
                    />
                  </span>
                  <span className="text-[#ccc] text-[14px] sm:text-sm leading-relaxed">
                    {f}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============== RESULTS ============== */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: c.primary }}
            >
              What to expect
            </div>
            <h2
              className="font-black tracking-tight leading-[1.05] max-w-2xl"
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                color: "#ffffff",
              }}
            >
              Real outcomes —{" "}
              <span style={{ color: c.primary }}>not vanity metrics.</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {service.results.map((r) => (
              <StaggerItem key={r.label}>
                <GlowCard className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, rgba(${c.rgb},0.15), transparent 70%)`,
                      filter: "blur(15px)",
                    }}
                  />
                  <div className="relative">
                    <div
                      className="font-black tracking-tighter tabular-nums leading-none"
                      style={{
                        fontSize: "clamp(48px, 6vw, 80px)",
                        color: c.primary,
                        textShadow: `0 0 30px rgba(${c.rgb},0.3)`,
                      }}
                    >
                      <AnimatedCounter
                        value={r.value}
                        prefix={r.prefix}
                        suffix={r.suffix}
                      />
                    </div>
                    <div className="text-[#888] text-sm sm:text-base mt-4 leading-relaxed">
                      {r.label}
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============== ROI CALCULATOR — only on the 3 most popular ============== */}
      {ROI_SLUGS.has(slug) && <ROICalculator slug={slug} />}

      {/* ============== RELATED ============== */}
      {related.length > 0 && (
        <section className="bg-[#040404] border-y border-[#0a0a0a] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div
                className="text-xs uppercase tracking-[0.2em] mb-3"
                style={{ color: c.primary }}
              >
                You might also need
              </div>
              <h2
                className="font-black text-white tracking-tight leading-[1.05] max-w-2xl"
                style={{ fontSize: "clamp(26px, 5vw, 48px)" }}
              >
                Pairs well with.
              </h2>
            </FadeIn>
            <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {related.map((r: Service) => {
                const RIcon = r.icon;
                const rc = getServiceColor(r.number);
                return (
                  <StaggerItem key={r.slug}>
                    <Link
                      href={`/services/${r.slug}/`}
                      className="group block bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-5 sm:p-6 h-full transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                      style={
                        {
                          "--hover-border": `rgba(${rc.rgb},0.35)`,
                        } as React.CSSProperties
                      }
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `rgba(${rc.rgb},0.35)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#1a1a1a";
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `radial-gradient(circle, rgba(${rc.rgb},0.15), transparent 70%)`,
                          filter: "blur(10px)",
                        }}
                      />
                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <RIcon
                            size={22}
                            stroke={1.5}
                            aria-hidden="true"
                            className="transition-colors"
                            style={{ color: rc.primary }}
                          />
                          <span
                            className="text-[10px] font-mono"
                            style={{ color: `rgba(${rc.rgb},0.40)` }}
                          >
                            {r.number}
                          </span>
                        </div>
                        <h3 className="text-white text-base font-semibold mt-5 tracking-tight">
                          {r.title}
                        </h3>
                        <p className="text-[#666] text-sm mt-2 leading-relaxed line-clamp-2">
                          {r.short}
                        </p>
                        <div
                          className="text-xs mt-5 inline-flex items-center gap-1 font-medium"
                          style={{ color: rc.primary }}
                        >
                          Learn more
                          <IconArrowRight
                            size={12}
                            stroke={2}
                            aria-hidden="true"
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ============== BOTTOM CTA — service-color wash ============== */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, rgba(${c.rgb},0.10), transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
        {/* Massive service number watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]"
        >
          <div
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(200px, 30vw, 480px)",
              color: c.primary,
              letterSpacing: "-0.08em",
            }}
          >
            {service.number}
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 sm:mb-8"
              style={{
                background: `rgba(${c.rgb},0.10)`,
                borderColor: `rgba(${c.rgb},0.30)`,
                color: c.primary,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: c.primary }}
                aria-hidden="true"
              />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                Available for new projects
              </span>
            </div>
            <h2
              className="font-black tracking-tighter text-white leading-[1.05]"
              style={{ fontSize: "clamp(34px, 7vw, 72px)" }}
            >
              Ready to start{" "}
              <span style={{ color: c.primary }}>
                {service.title.split(" & ")[0]}
              </span>
              ?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#888] mt-5 sm:mt-6 max-w-xl mx-auto leading-[1.65] sm:leading-relaxed text-base sm:text-lg px-2">
              Book a free 30-minute discovery call. We&apos;ll talk specifics —
              your problem, your stack, your timeline.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <m.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `rgba(${c.rgb},0.40)`,
                    filter: "blur(20px)",
                    opacity: 0.5,
                  }}
                />
                <Link
                  href="/contact"
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg"
                  style={{
                    background: c.primary,
                    color: "#000",
                    boxShadow: `0 30px 80px rgba(${c.rgb},0.35)`,
                  }}
                >
                  Book a Discovery Call
                  <IconArrowRight size={18} stroke={2.5} aria-hidden="true" />
                </Link>
              </m.div>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center border text-[#888] px-7 sm:px-9 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold hover:text-white transition-colors"
                style={{ borderColor: `rgba(${c.rgb},0.18)` }}
              >
                See All Services
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 sm:mt-12 text-[#444] text-xs sm:text-sm">
              Response within 24h · Free · No commitment
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
