"use client";

import { m } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import { type Project } from "@/lib/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { DrftLogo } from "@/components/clients/logos/DrftLogo";
import {
  ProjectBreadcrumb,
  ProjectNextLink,
  ProjectBottomCTA,
} from "@/components/projects/ProjectFooter";
import { ScreenStore } from "@/components/clients/drft/ScreenStore";
import { ScreenContent } from "@/components/clients/drft/ScreenContent";
import { ScreenEmail } from "@/components/clients/drft/ScreenEmail";

const DELIVERIES = [
  "Complete brand identity",
  "Shopify store (custom built)",
  "AI content system",
  "Email automation flows",
  "Social media templates",
  "Brand guidelines",
];

const STATS = [
  { value: "5 wks", label: "Zero to launched" },
  { value: "78%", label: "Reduction in content creation time" },
  { value: "34.2%", label: "Email open rate (industry avg: 19%)" },
  { value: "0", label: "Content agencies hired" },
];

const STARTUP_MOMENTS = [
  {
    title: "The product was great.",
    body: "Jake had spent 18 months perfecting the Trail Series jacket. Field-tested. Premium materials. Priced right. The brand? A PDF he'd made in Canva.",
  },
  {
    title: "Instagram wasn't working.",
    body: "Three hours to write one caption. Inconsistent tone. No content strategy. The product deserved better.",
  },
  {
    title: "Launch was in 5 weeks.",
    body: "We got the call on a Monday. We said yes by Wednesday. Identity sprint started Friday.",
  },
];

const WEEKS = [
  {
    num: "01",
    title: "Brand Discovery",
    items: [
      "Brand sprint with founders",
      "Visual moodboard direction",
      "Voice & tone documented",
      "Naming validation",
    ],
  },
  {
    num: "02",
    title: "Identity Design",
    items: [
      "Logo system finalized",
      "Color palette locked",
      "Typography system built",
      "Brand guidelines drafted",
    ],
  },
  {
    num: "03",
    title: "Store Build",
    items: [
      "Shopify theme custom-built",
      "Product pages live",
      "Cart + checkout tuned",
      "Mobile-first audit",
    ],
  },
  {
    num: "04",
    title: "AI Content Engine",
    items: [
      "Brand voice trained on Claude",
      "Template library built",
      "Email + social workflows",
      "Founder onboarded to tool",
    ],
  },
  {
    num: "05",
    title: "Launch",
    items: [
      "Soft launch · email list",
      "Press list outreach",
      "Paid ads activated",
      "First 24 hours: 47 orders",
    ],
  },
];

function SocialGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-md relative overflow-hidden"
          style={{
            background:
              i % 3 === 0
                ? "linear-gradient(135deg, rgba(249,115,22,0.4), rgba(120,53,15,0.2))"
                : i % 3 === 1
                ? "#1A0F04"
                : "linear-gradient(135deg, #1A0F04, rgba(249,115,22,0.15))",
          }}
        >
          {i === 0 && (
            <div
              className="absolute inset-0 flex items-center justify-center font-black italic"
              style={{
                color: "white",
                fontSize: 14,
                transform: "skewX(-6deg)",
              }}
            >
              DRFT
            </div>
          )}
          {i === 1 && (
            <div
              className="absolute bottom-2 left-2 text-[8px] uppercase tracking-widest"
              style={{ color: "#F97316" }}
            >
              New Drop
            </div>
          )}
          {i === 4 && (
            <div
              className="absolute bottom-2 left-2 text-[8px] uppercase tracking-widest"
              style={{ color: "#FED7AA" }}
            >
              Trail-tested
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function DrftView({ project }: { project: Project }) {
  return (
    <>
      {/* ===== 1. HERO — brand reveal ===== */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20 min-h-[80vh] flex items-center overflow-hidden"
        style={{ background: "#000" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-[600px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(249,115,22,0.06), transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <ProjectBreadcrumb project={project} />

          <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-12 mt-2 items-center">
            <div>
              <div
                className="text-[11px] tracking-[0.3em] uppercase"
                style={{ color: "#4a2808" }}
              >
                From zero to launched
              </div>

              <h1
                className="font-black italic leading-[0.85] tracking-tighter mt-3 bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(80px, 14vw, 180px)",
                  background:
                    "linear-gradient(135deg, #fff 35%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.05em",
                }}
              >
                DRFT
              </h1>

              <div className="text-3xl lg:text-4xl font-bold text-white mt-6">
                Gear that moves with you.
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-8 max-w-2xl">
                {[
                  { label: "Born", value: "March 2025" },
                  { label: "Launched", value: "May 2025 (5 weeks)" },
                  { label: "Scope", value: "Brand + Store + AI" },
                ].map((m) => (
                  <div key={m.label}>
                    <div
                      className="text-[10px] tracking-widest uppercase"
                      style={{ color: "#4a2808" }}
                    >
                      {m.label}
                    </div>
                    <div className="text-white text-sm mt-1 font-medium">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                className="rounded-2xl border p-6"
                style={{ background: "#0F0902", borderColor: "rgba(249,115,22,0.18)" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-5"
                  style={{ color: "#8B5E2A" }}
                >
                  What we delivered
                </div>
                <ul className="space-y-3">
                  {DELIVERIES.map((d, i) => (
                    <m.li
                      key={d}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className="flex items-center gap-3 text-[#FED7AA] text-sm"
                    >
                      <IconCheck
                        size={14}
                        stroke={2.5}
                        style={{ color: "#F97316" }}
                      />
                      {d}
                    </m.li>
                  ))}
                </ul>
              </div>

              <m.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-6 flex justify-center"
              >
                <DrftLogo height={48} />
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. QUICK STATS ===== */}
      <section
        className="section-contain border-y py-10 px-4 sm:px-6 lg:px-8"
        style={{ background: "#1A0F04", borderColor: "rgba(249,115,22,0.18)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="font-black italic"
                style={{
                  color: "#F97316",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  transform: "skewX(-3deg)",
                  display: "inline-block",
                }}
              >
                {s.value}
              </div>
              <div className="text-[#8B5E2A] text-xs mt-2 leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. BRAND IDENTITY ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
              Building a brand from nothing.
            </h2>
            <p className="text-[#8B5E2A] text-lg mt-4 max-w-2xl">
              DRFT had products. They had passion. They had no identity.
            </p>
          </FadeIn>

          {/* Brand reveal: before → after */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <FadeIn direction="right">
              <div className="bg-white rounded-lg p-8 text-center">
                <div
                  className="text-2xl"
                  style={{ color: "#000", fontFamily: '"Times New Roman", serif' }}
                >
                  DRIFT CO
                </div>
                <div className="text-xs mt-3" style={{ color: "#666" }}>
                  The original name on their first product tag
                </div>
              </div>
            </FadeIn>

            <m.div
              className="hidden md:flex items-center justify-center text-3xl font-bold"
              style={{ color: "#F97316" }}
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </m.div>

            <FadeIn direction="left" delay={0.15}>
              <div
                className="rounded-lg p-8 border text-center relative"
                style={{
                  background: "#1A0F04",
                  borderColor: "rgba(249,115,22,0.3)",
                  boxShadow: "0 0 60px rgba(249,115,22,0.18)",
                }}
              >
                <div className="flex justify-center">
                  <DrftLogo height={48} />
                </div>
                <div className="text-xs mt-3" style={{ color: "#8B5E2A" }}>
                  The new identity. Bold. Kinetic. Theirs.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mosaic */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
            <FadeIn>
              <div
                className="rounded-2xl border p-8"
                style={{ background: "#1A0F04", borderColor: "rgba(249,115,22,0.15)" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-5"
                  style={{ color: "#8B5E2A" }}
                >
                  Color System
                </div>
                <div className="w-full h-20 rounded-lg flex items-end p-3"
                  style={{ background: "#F97316" }}>
                  <span className="text-[10px] font-bold text-black">
                    DRFT Orange · Primary · #F97316
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[
                    { hex: "#120A02", name: "Carbon" },
                    { hex: "#FED7AA", name: "Sand" },
                    { hex: "#7C2D12", name: "Trail" },
                  ].map((c) => (
                    <div key={c.hex}>
                      <div
                        className="h-12 rounded-lg border"
                        style={{
                          background: c.hex,
                          borderColor: "rgba(255,255,255,0.05)",
                        }}
                      />
                      <div
                        className="text-[9px] mt-1.5"
                        style={{ color: "#8B5E2A" }}
                      >
                        {c.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div
                className="rounded-2xl border p-8 h-full flex flex-col justify-between"
                style={{ background: "#1A0F04", borderColor: "rgba(249,115,22,0.15)" }}
              >
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#8B5E2A" }}
                >
                  Typography
                </div>
                <div className="my-6">
                  <div
                    className="font-black italic leading-none"
                    style={{
                      color: "#F97316",
                      fontSize: 80,
                      transform: "skewX(-8deg)",
                      display: "inline-block",
                    }}
                  >
                    DRFT
                  </div>
                </div>
                <div className="text-white text-base font-bold italic">
                  Made to move. Written to last.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* DO / DON'T */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#1A0F04", borderColor: "rgba(249,115,22,0.15)" }}
            >
              <div
                className="text-[10px] tracking-widest uppercase mb-3 font-bold"
                style={{ color: "#F97316" }}
              >
                DO
              </div>
              <div className="text-white text-lg font-bold italic">
                Trail-tested. City-approved.
              </div>
              <div className="text-[#8B5E2A] text-xs mt-2">
                Bold. Short. Real.
              </div>
            </div>
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#0F0902", borderColor: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="text-[10px] tracking-widest uppercase mb-3 font-bold"
                style={{ color: "#7a1a1a" }}
              >
                DON&apos;T
              </div>
              <div className="text-[#666] text-base">
                Our innovative moisture-wicking performance apparel...
              </div>
              <div className="text-[#3a2a1a] text-xs mt-2">
                Corporate. Generic. Forgettable.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. THE CHALLENGE ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#1A0F04" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              Every brand starts somewhere. DRFT started here:
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {STARTUP_MOMENTS.map((moment, i) => (
              <m.div
                key={moment.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border p-7"
                style={{
                  background: "#0F0902",
                  borderColor: "rgba(249,115,22,0.18)",
                }}
              >
                <div
                  className="text-2xl font-black italic"
                  style={{
                    color: "#F97316",
                    transform: "skewX(-4deg)",
                    display: "inline-block",
                  }}
                >
                  0{i + 1}
                </div>
                <h3 className="text-white text-lg font-bold tracking-tight mt-3">
                  {moment.title}
                </h3>
                <p className="text-[#8B5E2A] text-sm leading-relaxed mt-3">
                  {moment.body}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. SOLUTION — 5 deliverables ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              Five things delivered in five weeks.
            </h2>
          </FadeIn>

          {/* 1. Brand identity */}
          <FadeIn>
            <div className="mt-16 rounded-3xl border p-10"
              style={{
                background:
                  "linear-gradient(135deg, #1A0F04 0%, #0F0902 100%)",
                borderColor: "rgba(249,115,22,0.18)",
              }}
            >
              <div
                className="text-[10px] tracking-widest uppercase"
                style={{ color: "#F97316" }}
              >
                01 · Brand Identity
              </div>
              <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight mt-3">
                From a Canva PDF to a brand system.
              </h3>
              <p className="text-[#8B5E2A] mt-5 max-w-2xl leading-relaxed">
                Logo system, color palette, typography, voice guidelines,
                product photography direction, packaging mockups, social
                templates. The whole stack, ready for any future deliverable
                the founders ship themselves.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {["Logo system", "Color palette", "Typography"].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border p-5"
                    style={{ background: "#1A0F04", borderColor: "rgba(249,115,22,0.15)" }}
                  >
                    <div
                      className="text-[10px] tracking-widest uppercase mb-3"
                      style={{ color: "#8B5E2A" }}
                    >
                      {label}
                    </div>
                    <div className="h-12 flex items-center">
                      {label === "Logo system" && (
                        <DrftLogo height={40} />
                      )}
                      {label === "Color palette" && (
                        <div className="flex gap-1.5 w-full">
                          {["#F97316", "#FED7AA", "#7C2D12", "#120A02"].map(
                            (c) => (
                              <div
                                key={c}
                                className="flex-1 h-10 rounded"
                                style={{ background: c }}
                              />
                            )
                          )}
                        </div>
                      )}
                      {label === "Typography" && (
                        <span
                          className="font-black italic text-white"
                          style={{
                            fontSize: 40,
                            transform: "skewX(-6deg)",
                            display: "inline-block",
                          }}
                        >
                          Aa
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 2. Shopify store */}
          <FadeIn>
            <div className="mt-12">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <div
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "#F97316" }}
                  >
                    02 · Shopify Store
                  </div>
                  <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight mt-2">
                    Custom-built. Brand-true. Live in 3 weeks.
                  </h3>
                </div>
                <div className="text-[#8B5E2A] text-xs hidden md:block">
                  drft.com
                </div>
              </div>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#0F0902", borderColor: "rgba(249,115,22,0.18)" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenStore />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 3. AI Content */}
          <FadeIn>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#F97316" }}
                >
                  03 · AI Content Engine
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight mt-2">
                  One brief in. Three pieces of on-brand content out.
                </h3>
                <p className="text-[#8B5E2A] mt-5 leading-relaxed max-w-md">
                  Claude trained on DRFT&apos;s voice. The founder types a
                  one-line brief; the system writes the Instagram caption, the
                  email subject + body, and the ad headline variants — all
                  ready for a 30-second review.
                </p>
                <div
                  className="mt-6 rounded-lg p-4 inline-block"
                  style={{
                    background: "rgba(249,115,22,0.1)",
                    border: "1px solid rgba(249,115,22,0.25)",
                    color: "#F97316",
                  }}
                >
                  <span className="text-xs font-semibold">
                    On-brand match: 96% · 78% time saved
                  </span>
                </div>
              </div>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#0F0902", borderColor: "rgba(249,115,22,0.18)" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenContent />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 4. Email automation */}
          <FadeIn>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-10 items-center">
              <div
                className="rounded-2xl p-3 border order-2 lg:order-1"
                style={{ background: "#0F0902", borderColor: "rgba(249,115,22,0.18)" }}
              >
                <div className="aspect-[9/19.5] max-w-xs mx-auto rounded-xl overflow-hidden">
                  <ScreenEmail />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "#F97316" }}
                >
                  04 · Email Automation
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight mt-2">
                  The email that recovered 12 orders in week 1.
                </h3>
                <p className="text-[#8B5E2A] mt-5 leading-relaxed max-w-md">
                  Welcome series, abandoned-cart recovery, post-purchase
                  follow-up, and reorder reminders — all generated by the AI
                  content engine, all branded, all firing on the right triggers.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6 max-w-sm">
                  <div
                    className="rounded-lg p-3 border"
                    style={{
                      background: "#1A0F04",
                      borderColor: "rgba(249,115,22,0.15)",
                    }}
                  >
                    <div className="text-[10px]" style={{ color: "#8B5E2A" }}>
                      DRFT
                    </div>
                    <div className="text-xl font-black" style={{ color: "#F97316" }}>
                      34.2%
                    </div>
                    <div className="text-[9px]" style={{ color: "#8B5E2A" }}>
                      Open rate
                    </div>
                  </div>
                  <div
                    className="rounded-lg p-3 border"
                    style={{
                      background: "#0F0902",
                      borderColor: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="text-[10px]" style={{ color: "#666" }}>
                      Industry
                    </div>
                    <div className="text-xl font-black" style={{ color: "#666" }}>
                      19%
                    </div>
                    <div className="text-[9px]" style={{ color: "#444" }}>
                      Average
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 5. Social templates */}
          <FadeIn>
            <div className="mt-16">
              <div
                className="text-[10px] tracking-widest uppercase"
                style={{ color: "#F97316" }}
              >
                05 · Social Templates
              </div>
              <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight mt-2">
                24 templates. Consistent. On-brand. Ready to post.
              </h3>
              <div className="mt-8">
                <SocialGrid />
              </div>
              <div className="text-[#8B5E2A] text-xs mt-4 text-center">
                Template library — 24 ready-made templates across stories, feed
                posts, and product launches.
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 6. DESIGN SHOWCASE — lookbook ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#1A0F04" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-12">
              The lookbook.
            </h2>
          </FadeIn>

          {/* Featured store full width */}
          <FadeIn>
            <div className="relative mb-16">
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(249,115,22,0.18), transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="relative rounded-2xl p-3 border"
                style={{ background: "#0F0902", borderColor: "rgba(249,115,22,0.18)" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenStore />
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-white text-sm font-semibold">
                  The Shopify store. Built from scratch in 3 weeks.
                </div>
              </div>
            </div>
          </FadeIn>

          {/* AI content + email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn delay={0.05}>
              <div
                className="rounded-2xl p-3 border"
                style={{ background: "#0F0902", borderColor: "rgba(249,115,22,0.18)" }}
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <ScreenContent />
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-white text-sm font-semibold">
                  The AI content engine
                </div>
                <div className="text-[#8B5E2A] text-xs mt-1">
                  Trained on DRFT&apos;s voice, not generic data
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex justify-center">
                <div
                  className="rounded-[40px] border-4 p-3 w-60"
                  style={{ borderColor: "rgba(249,115,22,0.18)", background: "#1a1a1a" }}
                >
                  <div className="rounded-[28px] overflow-hidden aspect-[9/19.5]">
                    <ScreenEmail />
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-white text-sm font-semibold">
                  The abandoned-cart email
                </div>
                <div className="text-[#8B5E2A] text-xs mt-1">
                  12 orders recovered in week 1
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 7. PROCESS — week timeline ===== */}
      <section className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              5 weeks. Here&apos;s exactly what happened.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
            {WEEKS.map((w, i) => (
              <m.div
                key={w.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div
                  className="font-black italic leading-none mb-3"
                  style={{
                    color: "#F97316",
                    fontSize: "clamp(48px, 5vw, 64px)",
                    transform: "skewX(-4deg)",
                    display: "inline-block",
                  }}
                >
                  W{w.num}
                </div>
                <div className="text-white text-base font-bold tracking-tight">
                  {w.title}
                </div>
                <ul className="mt-4 space-y-2">
                  {w.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#8B5E2A] text-xs leading-relaxed flex items-start gap-2"
                    >
                      <span style={{ color: "#F97316" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {i < WEEKS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-12 -right-3 w-6 h-px"
                    style={{ background: "#F97316", opacity: 0.4 }}
                  />
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. RESULTS ===== */}
      <section
        className="section-contain py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#1A0F04" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2
              className="font-black italic tracking-tighter text-white text-center"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                transform: "skewX(-3deg)",
              }}
            >
              Five weeks. Zero agencies. One launch.
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-5">
            {[
              {
                value: "34.2%",
                label: "Email open rate",
                detail: "Nearly double the industry average",
              },
              {
                value: "78%",
                label: "Less time creating content",
                detail: "Without losing brand voice",
              },
              {
                value: "5 wks",
                label: "Zero to full brand launch",
                detail: "Brand, store, AI, and automation",
              },
            ].map((r, i) => (
              <m.div
                key={r.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border p-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center"
                style={{
                  background: "#0F0902",
                  borderColor: "rgba(249,115,22,0.18)",
                }}
              >
                <div
                  className="font-black italic leading-none"
                  style={{
                    color: "#F97316",
                    fontSize: "clamp(48px, 6vw, 80px)",
                    transform: "skewX(-4deg)",
                    display: "inline-block",
                  }}
                >
                  {r.value}
                </div>
                <div>
                  <div className="text-white text-lg font-bold">{r.label}</div>
                  <div className="text-[#8B5E2A] text-sm mt-1">{r.detail}</div>
                </div>
              </m.div>
            ))}
          </div>

          <FadeIn>
            <div
              className="rounded-2xl border p-10 mt-10"
              style={{
                background: "#0F0902",
                borderLeft: "4px solid #F97316",
              }}
            >
              <p className="text-[#FED7AA] text-lg lg:text-xl leading-relaxed italic">
                &ldquo;We went from a Canva PDF to a brand that looks like
                it&apos;s been building for years. In 5 weeks. I still
                can&apos;t believe it.&rdquo;
              </p>
              <div className="text-[#8B5E2A] text-sm mt-6">
                — Jake Ferreira, Co-Founder · DRFT
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 9. TECH STACK ===== */}
      <section
        className="section-contain py-16 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: "rgba(249,115,22,0.15)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="text-[10px] tracking-widest uppercase mb-5"
            style={{ color: "#8B5E2A" }}
          >
            Technologies used
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full"
                style={{
                  background: "#1A0F04",
                  color: "#FED7AA",
                  border: "1px solid rgba(249,115,22,0.15)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectNextLink project={project} />
      <ProjectBottomCTA project={project} />
    </>
  );
}
