"use client";

import { useState, FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconCheck,
  IconArrowRight,
  IconBolt,
  IconCalendar,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { ProductMockup } from "@/components/ProductMockup";

const features = [
  "Learns your exact brand voice, tone, and audience",
  "Generates social content, email campaigns, and ad copy",
  "Monthly content strategy layer based on what performs",
  "Beautiful, structured content workspace",
  "White-label ready for agencies",
  "Onboarding in under 48 hours",
];

const upcoming = [
  {
    name: "Flowtix Pulse",
    tag: "Sales Intelligence",
    desc: "Real-time lead scoring + outreach drafting for B2B teams.",
    eta: "Q3 2025",
    color: "#10B981",
  },
  {
    name: "Flowtix Studio",
    tag: "Creative AI",
    desc: "Brand-trained image, video, and copy generation in one canvas.",
    eta: "Q4 2025",
    color: "#EC4899",
  },
  {
    name: "Flowtix Reach",
    tag: "Customer Voice",
    desc: "AI-summarized customer interviews + product feedback synthesis.",
    eta: "Q1 2026",
    color: "#F59E0B",
  },
];

export default function ProductsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
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

        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-blue-400 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                White-label available
              </span>
            </span>
          </FadeIn>
          <m.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-black tracking-tighter text-white leading-[1.02]"
            style={{ fontSize: "clamp(36px, 6.5vw, 72px)" }}
          >
            AI-Powered Systems.
            <br className="hidden sm:inline" />{" "}
            <span className="gradient-text-blue">Ready to Deploy.</span>
          </m.h1>
          <FadeIn delay={0.2}>
            <p className="text-[#888] mt-5 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-[1.65] sm:leading-relaxed px-2">
              Pre-built, white-label AI products. Customized to your brand.
              Deployed fast.
            </p>
            <p className="text-[#555] text-xs sm:text-sm mt-3">
              More systems launching throughout 2025–2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============== FLOWTIX BRAIN (HERO PRODUCT) ============== */}
      <section className="px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <m.div
            animate={{
              borderColor: ["#1a1a1a", "rgba(59,130,246,0.35)", "#1a1a1a"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative max-w-5xl mx-auto bg-[#0D0D0D] border rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 overflow-hidden"
          >
            {/* Animated top hairline */}
            <div className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
              <m.div
                className="absolute top-0 h-full w-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)",
                }}
                animate={{ left: ["-50%", "150%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            {/* Side glow */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            {/* Subtle pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(59,130,246,0.10) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 80% 50%, black, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 80% 50%, black, transparent 80%)",
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 sm:gap-10 lg:gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/8 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] tracking-widest uppercase font-medium text-blue-400">
                    Coming Soon · Waitlist Open
                  </span>
                </span>
                <h2
                  className="font-bold mt-3 sm:mt-4 tracking-tight gradient-text-blue leading-[1.05]"
                  style={{ fontSize: "clamp(34px, 5.5vw, 56px)" }}
                >
                  Flowtix Brain
                </h2>
                <div className="text-[#3B82F6] text-sm sm:text-base mt-2 font-medium">
                  AI Brand &amp; Marketing Intelligence System
                </div>
                <p className="text-[#999] mt-5 sm:mt-6 leading-[1.65] sm:leading-relaxed text-[15px] sm:text-[15px]">
                  Flowtix Brain learns your brand voice, studies your audience,
                  and generates all your marketing content — social posts,
                  email campaigns, ad copy, and more. On-brand, every time,
                  without a full marketing team. Built for growing e-commerce
                  and service businesses that need consistent, high-quality
                  marketing at scale.
                </p>

                <StaggerContainer
                  className="mt-7 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3"
                  stagger={0.06}
                >
                  {features.map((f) => (
                    <StaggerItem key={f}>
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full border border-blue-500/40 bg-blue-500/10 inline-flex items-center justify-center shrink-0 mt-0.5">
                          <IconCheck
                            size={11}
                            stroke={2.5}
                            aria-hidden="true"
                            className="text-blue-400"
                          />
                        </span>
                        <span className="text-[#aaa] text-[13px] sm:text-sm leading-relaxed">
                          {f}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-8 sm:mt-10">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <m.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium"
                      >
                        <IconCheck size={16} stroke={2.5} aria-hidden="true" />
                        You&apos;re on the list. We&apos;ll be in touch.
                      </m.div>
                    ) : (
                      <m.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col sm:flex-row gap-3"
                      >
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          aria-label="Email address for product waitlist"
                          className="flex-1 bg-[#111] border border-[#1a1a1a] rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all placeholder-[#444]"
                        />
                        <m.button
                          type="submit"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 0 30px rgba(59,130,246,0.4)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-[#3B82F6] hover:bg-[#2563EB] text-black px-6 py-3.5 rounded-xl font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
                        >
                          Join Waitlist
                          <IconArrowRight size={14} stroke={2.5} aria-hidden="true" />
                        </m.button>
                      </m.form>
                    )}
                  </AnimatePresence>
                  <div className="text-[#444] text-xs mt-3.5 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      No credit card
                    </span>
                    <span>·</span>
                    <span>Notify on launch</span>
                    <span>·</span>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Soft halo behind mockup */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.25), transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <div className="relative">
                  <ProductMockup />
                </div>
              </div>
            </div>
          </m.div>
        </FadeIn>
      </section>

      {/* ============== UPCOMING PRODUCTS ============== */}
      <section className="px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-12">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#444] mb-2.5">
                The roadmap
              </div>
              <h3
                className="font-black tracking-tight text-white leading-[1.1]"
                style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
              >
                What&apos;s next on the bench.
              </h3>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
            stagger={0.08}
          >
            {upcoming.map((u) => (
              <StaggerItem key={u.name}>
                <m.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl p-5 sm:p-7 border h-full"
                  style={{
                    background: `linear-gradient(135deg, ${u.color}08, #0a0a0a 60%)`,
                    borderColor: "#1a1a1a",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${u.color}40`;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 40px ${u.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1a1a1a";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Color glow corner */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -right-12 w-32 h-32 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${u.color}25, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />
                  {/* Shimmer line top */}
                  <m.div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${u.color}, transparent)`,
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] tracking-widest uppercase font-medium font-mono"
                        style={{ color: u.color }}
                      >
                        {u.tag}
                      </span>
                      <span
                        className="text-[9px] sm:text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded font-mono"
                        style={{
                          background: `${u.color}10`,
                          color: `${u.color}cc`,
                        }}
                      >
                        {u.eta}
                      </span>
                    </div>
                    <h4
                      className="text-white text-lg sm:text-xl font-bold mt-3 sm:mt-4 tracking-tight"
                    >
                      {u.name}
                    </h4>
                    <p className="text-[#888] text-sm mt-2.5 sm:mt-3 leading-relaxed">
                      {u.desc}
                    </p>
                    <div
                      className="mt-5 sm:mt-6 text-[11px] sm:text-xs inline-flex items-center gap-1.5 font-medium"
                      style={{ color: `${u.color}cc` }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: u.color }}
                      />
                      In development
                    </div>
                  </div>
                </m.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============== WHITE-LABEL ============== */}
      <section className="mt-20 sm:mt-24 bg-[#040404] border-t border-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-blue-400 mb-3">
              For Agencies &amp; Resellers
            </div>
            <h2
              className="font-black tracking-tight text-white leading-[1.05]"
              style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              All products ship with{" "}
              <span className="gradient-text-blue">white-label included.</span>
            </h2>
            <p className="text-[#888] mt-5 sm:mt-6 leading-[1.65] sm:leading-relaxed text-[15px] sm:text-base max-w-lg">
              Every Flowtix product can be fully rebranded with your
              company&apos;s identity, colors, and domain. Built for agencies
              and businesses that want to offer AI capabilities to their
              clients without building from scratch.
            </p>
            {/* Trust points */}
            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md">
              {[
                { icon: IconBolt, label: "Launch in days" },
                { icon: IconHeartHandshake, label: "Margin protected" },
                { icon: IconCalendar, label: "Ongoing support" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.label} className="flex items-center gap-2.5">
                    <Icon
                      size={14}
                      stroke={1.5}
                      aria-hidden="true"
                      className="text-blue-400 shrink-0"
                    />
                    <span className="text-[#aaa] text-xs sm:text-[13px]">
                      {t.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <m.a
              href="/contact/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/5 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 px-6 py-3.5 rounded-2xl mt-7 sm:mt-8 transition-all text-sm font-semibold"
            >
              Talk to us about white-label
              <IconArrowRight size={14} stroke={2.5} aria-hidden="true" />
            </m.a>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <div
              className="relative bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 sm:p-10 aspect-[4/3] flex flex-col justify-center items-center overflow-hidden"
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.10), transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              {/* Grid pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative text-center">
                <div className="text-[#444] text-[10px] sm:text-[11px] tracking-widest uppercase mb-3 sm:mb-4">
                  Your Brand
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222]" />
                  <div className="text-white text-xl sm:text-2xl font-bold">
                    YourCo
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/5 px-3 py-1 rounded-full text-[10px] text-blue-400 uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  AI Powered
                </div>
                <div className="mt-3 text-[#444] text-[10px]">
                  Powered by Flowtix · invisible to your clients
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
