"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  IconArrowRight,
  IconCheck,
  IconBolt,
  IconClock,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { services } from "@/lib/services";
import { FadeIn } from "@/components/animations/FadeIn";
import { ServiceVisual, getServiceColor } from "@/components/services/ServiceVisual";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const headlineWords = [
  { word: "Ten" },
  { word: "services." },
  { word: "One", lineBreakBefore: true },
  { word: "team." },
  { word: "Zero", lineBreakBefore: true },
  { word: "outsourcing." },
];

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const PROOF_POINTS = [
  { icon: IconBolt, value: "48h", label: "Avg. first deploy" },
  { icon: IconClock, value: "2–4 wk", label: "Typical timeline" },
  { icon: IconHeartHandshake, value: "100%", label: "Built in-house" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-6 md:px-10 xl:px-12 text-center overflow-hidden">
        {/* Multi-layered ambient background */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Service color dots floating */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-[#cccccc] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                What we build
              </span>
            </div>
          </FadeIn>

          <h1 className="text-h1 text-white">
            <m.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
            >
              {headlineWords.map((w, i) => (
                <span key={i}>
                  {w.lineBreakBefore && <br />}
                  <m.span
                    variants={wordVariants}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="inline-block mr-[0.25em]"
                  >
                    {w.word}
                  </m.span>
                </span>
              ))}
            </m.span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="text-[#888] mt-5 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
              From first strategy to live deployment — design, intelligence,
              and execution in one place.
            </p>
          </FadeIn>

          {/* Color bar — 10 service colors as a strip preview */}
          <FadeIn delay={0.6}>
            <div className="mt-10 sm:mt-12 inline-flex items-center gap-1.5 sm:gap-2 max-w-full px-2">
              {services.map((s, i) => {
                const c = getServiceColor(s.number);
                return (
                  <m.span
                    key={s.slug}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.04, duration: 0.4, ease: "backOut" }}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0"
                    style={{
                      background: c.primary,
                      boxShadow: `0 0 12px ${c.primary}66`,
                    }}
                    title={s.title}
                    aria-label={s.title}
                  />
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="text-[#444] text-xs sm:text-sm mt-5 sm:mt-6 inline-flex items-center gap-2">
              <span>10 services · 5 industries · 1 team</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============== PROOF STRIP ============== */}
      <section className="relative py-10 sm:py-14 border-y border-[#0a0a0a] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-10 xl:px-12">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {PROOF_POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <m.div
                  key={p.label}
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
                    {p.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#666] uppercase tracking-wider mt-1">
                    {p.label}
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== SERVICES LIST ============== */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-12">
        {services.map((s, idx) => {
          const reverse = idx % 2 === 1;
          const c = getServiceColor(s.number);
          return (
            <section
              key={s.slug}
              className="relative border-b border-[#0a0a0a] py-16 sm:py-20 lg:py-28"
            >
              {/* Faint brand wash behind the section */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at ${
                    reverse ? "20%" : "80%"
                  } 50%, rgba(${c.rgb},0.05), transparent 70%)`,
                }}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                <FadeIn
                  direction={reverse ? "left" : "right"}
                  className={`relative ${reverse ? "lg:order-2" : ""}`}
                >
                  {/* Giant ghosted number */}
                  <div
                    className="absolute -left-2 -top-4 sm:-left-4 sm:-top-2 lg:-left-2 font-black leading-none select-none pointer-events-none"
                    style={{
                      fontSize: "clamp(80px, 10vw, 140px)",
                      color: `rgba(${c.rgb}, 0.06)`,
                      WebkitTextStroke: `1px rgba(${c.rgb}, 0.18)`,
                    }}
                  >
                    {s.number}
                  </div>
                  <div className="relative">
                    <div
                      className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] inline-flex items-center gap-2"
                      style={{ color: c.primary }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: c.primary }}
                      />
                      Service {s.number}
                    </div>
                    <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-bold text-white mt-3 sm:mt-4 tracking-tight leading-[1.15]">
                      {s.title}
                    </h2>
                    <p className="text-[#888] text-[15px] sm:text-base leading-[1.65] sm:leading-relaxed mt-4 sm:mt-5 max-w-lg">
                      {s.description}
                    </p>
                    <ul className="mt-6 sm:mt-7 space-y-2.5 sm:space-y-3">
                      {s.features.slice(0, 5).map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-[#bbbbbb] text-[14px] sm:text-sm"
                        >
                          <span
                            className="w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0 mt-0.5"
                            style={{
                              border: `1px solid ${c.primary}66`,
                              background: `rgba(${c.rgb},0.10)`,
                            }}
                          >
                            <IconCheck
                              size={11}
                              stroke={2.5}
                              style={{ color: c.primary }}
                              aria-hidden="true"
                            />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="animated-link inline-flex items-center gap-1.5 text-sm mt-7 sm:mt-8 transition-colors group"
                      style={{ color: c.primary }}
                    >
                      <span>Explore {s.title.split(" & ")[0]}</span>
                      <IconArrowRight
                        size={14}
                        stroke={2}
                        aria-hidden="true"
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </div>
                </FadeIn>

                <FadeIn
                  direction={reverse ? "right" : "left"}
                  delay={0.1}
                  className={reverse ? "lg:order-1" : ""}
                >
                  <ServiceVisual
                    number={s.number}
                    title={s.title}
                    short={s.short}
                    href={`/services/${s.slug}/`}
                    icon={s.icon}
                  />
                </FadeIn>
              </div>
            </section>
          );
        })}
      </div>

      {/* ============== FINAL CTA ============== */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 md:px-10 xl:px-12 text-center overflow-hidden">
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
                Not sure where to start?
              </span>
            </div>
            <h2
              className="font-black tracking-tighter text-white leading-[1.05]"
              style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
            >
              We&apos;ll help you{" "}
              <span className="gradient-text-blue">pick the right one.</span>
            </h2>
            <p className="text-[#888] mt-5 sm:mt-6 text-base sm:text-lg max-w-xl mx-auto leading-relaxed px-2">
              Book a free 30-minute discovery call. We&apos;ll listen, ask
              questions, and point you toward what will actually move your
              business — even if it isn&apos;t us.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <m.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Link
                  href="/contact"
                  className="btn-shimmer inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:bg-[#eee] transition-colors"
                >
                  <span className="relative z-10">Book a Discovery Call</span>
                  <IconArrowRight
                    size={16}
                    stroke={2.5}
                    aria-hidden="true"
                    className="relative z-10"
                  />
                </Link>
              </m.div>
              <Link
                href="/work"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-[#1a1a1a] text-[#888] px-7 py-4 rounded-2xl text-sm font-semibold hover:border-[#2a2a2a] hover:text-white transition-all"
              >
                See our work first
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3 text-[#333] text-xs flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                Response within 24h
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                Free, no commitment
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                Confidential
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
