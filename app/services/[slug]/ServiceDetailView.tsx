"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowRight, IconCheck, IconChevronRight } from "@tabler/icons-react";
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

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 lg:px-8 pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-600 opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <nav className="text-[#444] text-sm flex items-center gap-2 mb-10">
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <IconChevronRight size={12} stroke={2} className="text-[#222]" />
              <span className="text-[#888]">{service.title}</span>
            </nav>
          </FadeIn>

          <m.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-blue-500/30 bg-blue-500/5 mb-8"
          >
            <Icon size={32} stroke={1.5} className="text-blue-500" />
          </m.div>

          <h1 className="font-black tracking-tighter leading-[1.05] text-white" style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}>
            <m.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05, delayChildren: 0.15 }}
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
            <p className="text-[#888] text-lg mt-8 max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="mt-10 flex flex-wrap gap-3">
              <m.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#eee] transition-colors"
                >
                  Start a Project
                  <IconArrowRight size={16} stroke={2} />
                </Link>
              </m.div>
              <Link
                href="/services"
                className="inline-flex items-center border border-[#222] text-[#888] px-7 py-3.5 rounded-xl text-sm hover:border-[#444] hover:text-white transition-colors"
              >
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Challenge */}
      <section className="relative bg-[#040404] border-y border-[#0a0a0a] py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-label text-[#333]">The Challenge</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote
              className="font-black tracking-tighter gradient-text mt-4 italic leading-[1.1]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              &ldquo;{service.pullQuote}&rdquo;
            </blockquote>
          </FadeIn>

          <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.pains.map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 h-full">
                  <span className="inline-flex w-2 h-2 rounded-full bg-rose-500" />
                  <h3 className="text-white text-base font-semibold mt-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed mt-2">
                    {p.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-label text-[#333]">Our Approach</div>
            <h2 className="text-h2 gradient-text mt-3 max-w-2xl">
              How we approach {service.title.toLowerCase().split(" & ")[0]}.
            </h2>
          </FadeIn>

          <StaggerContainer
            className="mt-16 space-y-10"
            stagger={0.08}
          >
            {service.steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="relative border-t border-[#0f0f0f] pt-8 pl-0 sm:pl-24 lg:pl-32">
                  <div
                    className="absolute left-0 -top-2 sm:-top-8 font-black text-[#0f0f0f] leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <h3 className="text-white text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed mt-3 max-w-xl">
                      {s.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#040404] border-y border-[#0a0a0a] py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-label text-[#333]">What’s Included</div>
            <h2 className="text-h2 text-white mt-3 max-w-2xl">
              Every engagement covers all of this.
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((f) => (
              <StaggerItem key={f}>
                <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-xl p-5 h-full flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full border border-blue-500/40 bg-blue-500/10 inline-flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck size={14} stroke={2.5} className="text-blue-400" />
                  </span>
                  <span className="text-[#cccccc] text-sm leading-relaxed">{f}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-label text-[#333]">What to Expect</div>
            <h2 className="text-h2 gradient-text mt-3">Real outcomes.</h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.results.map((r) => (
              <StaggerItem key={r.label}>
                <GlowCard className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 h-full">
                  <div
                    className="font-black tracking-tighter gradient-text-blue leading-none"
                    style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
                  >
                    <AnimatedCounter
                      value={r.value}
                      prefix={r.prefix}
                      suffix={r.suffix}
                    />
                  </div>
                  <div className="text-[#666] text-sm mt-4 leading-relaxed">
                    {r.label}
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="bg-[#040404] border-y border-[#0a0a0a] py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-label text-[#333]">You might also need</div>
              <h2 className="text-h2 text-white mt-3 max-w-2xl">
                Pairs well with.
              </h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r: Service) => {
                const RIcon = r.icon;
                return (
                  <StaggerItem key={r.slug}>
                    <Link
                      href={`/services/${r.slug}/`}
                      className="group block bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 h-full transition-all duration-300 hover:border-[#2a2a2a] hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between">
                        <RIcon
                          size={22}
                          stroke={1.5}
                          className="text-[#333] group-hover:text-blue-500 transition-colors"
                        />
                        <span className="text-[10px] text-[#222] font-mono">
                          {r.number}
                        </span>
                      </div>
                      <h3 className="text-white text-base font-semibold mt-6">
                        {r.title}
                      </h3>
                      <p className="text-[#555] text-sm mt-2 leading-relaxed">
                        {r.short}
                      </p>
                      <div className="text-[#333] text-xs mt-6 group-hover:text-[#666] transition-colors inline-flex items-center gap-1">
                        Learn more
                        <IconArrowRight
                          size={12}
                          stroke={2}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600 opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2
              className="font-black tracking-tighter gradient-text"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1 }}
            >
              Ready to get started with {service.title.split(" & ")[0]}?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#666] mt-5 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute discovery call. We&apos;ll talk specifics —
              your problem, your stack, your timeline.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <m.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#eee] transition-colors"
                >
                  Book a Call
                  <IconArrowRight size={16} stroke={2} />
                </Link>
              </m.div>
              <Link
                href="/services"
                className="inline-flex items-center border border-[#222] text-[#666] px-8 py-4 rounded-xl hover:border-[#444] hover:text-white transition-colors"
              >
                See All Services →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
