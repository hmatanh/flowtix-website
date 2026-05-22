"use client";

import { useState, FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";
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

const placeholders = [1, 2, 3];

export default function ProductsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <span className="inline-block border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] px-3 py-1 rounded-full tracking-widest uppercase mb-6">
              White-label available
            </span>
          </FadeIn>
          <m.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-h1 gradient-text"
          >
            AI-Powered Systems. Ready to Deploy.
          </m.h1>
          <FadeIn delay={0.2}>
            <p className="text-[#888] mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
              Pre-built, white-label AI products. Customized to your brand.
              Deployed fast.
            </p>
            <p className="text-[#444] text-sm mt-2">
              More systems launching throughout 2025–2026
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 lg:px-8">
        <FadeIn>
          <m.div
            animate={{
              borderColor: ["#1a1a1a", "rgba(59,130,246,0.3)", "#1a1a1a"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative max-w-5xl mx-auto bg-[#0D0D0D] border rounded-3xl p-8 lg:p-16 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
              <m.div
                className="absolute top-0 h-full w-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
                }}
                animate={{ left: ["-50%", "150%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600 opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
              <div>
                <span className="inline-block border border-[#222] text-[#666] text-[10px] px-3 py-1 rounded-full tracking-widest uppercase">
                  Coming Soon — Waitlist Open
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold mt-4 tracking-tight gradient-text-blue">
                  Flowtix Brain
                </h2>
                <div className="text-[#3B82F6] text-sm mt-2">
                  AI Brand & Marketing Intelligence System
                </div>
                <p className="text-[#888] mt-6 leading-relaxed text-[15px]">
                  Flowtix Brain learns your brand voice, studies your audience,
                  and generates all your marketing content — social posts,
                  email campaigns, ad copy, and more. On-brand, every time,
                  without a full marketing team. Built for growing e-commerce
                  and service businesses that need consistent, high-quality
                  marketing at scale.
                </p>

                <StaggerContainer
                  className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3"
                  stagger={0.08}
                >
                  {features.map((f) => (
                    <StaggerItem key={f}>
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full border border-blue-500/40 bg-blue-500/10 inline-flex items-center justify-center shrink-0">
                          <IconCheck
                            size={11}
                            stroke={2.5}
                            className="text-blue-400"
                          />
                        </span>
                        <span className="text-[#666] text-sm">{f}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-10">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <m.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-[#3B82F6]"
                      >
                        ✓ You&apos;re on the list! We&apos;ll be in touch.
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
                          className="flex-1 bg-[#111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all placeholder-[#444]"
                        />
                        <m.button
                          type="submit"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 0 30px rgba(59,130,246,0.3)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                        >
                          Join Waitlist →
                        </m.button>
                      </m.form>
                    )}
                  </AnimatePresence>
                  <div className="text-[#333] text-xs mt-3">
                    No credit card required · We&apos;ll notify you when it
                    launches · Cancel anytime
                  </div>
                </div>
              </div>

              <div>
                <ProductMockup />
              </div>
            </div>
          </m.div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-8">
        <StaggerContainer className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholders.map((i) => (
            <StaggerItem key={i}>
              <m.div
                animate={{ opacity: [0.45, 0.65, 0.45] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden border border-[#0f0f0f] rounded-2xl p-8 bg-[#0a0a0a]"
              >
                <div className="text-[#1a1a1a] text-[10px] tracking-widest uppercase">
                  New System
                </div>
                <div className="text-white text-base font-semibold mt-3">
                  In Development
                </div>
                <div className="shimmer h-px rounded mt-6" />
                <div className="text-[#333] text-xs mt-3">Launching 2025–2026</div>
              </m.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="mt-24 bg-[#040404] border-t border-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-h2 gradient-text">
              All products ship with white-label included.
            </h2>
            <p className="text-[#888] mt-6 leading-relaxed text-[15px] max-w-lg">
              Every Flowtix product can be fully rebranded with your
              company&apos;s identity, colors, and domain. Built for agencies
              and businesses that want to offer AI capabilities to their
              clients without building from scratch.
            </p>
            <m.a
              href="/contact/"
              whileHover={{
                scale: 1.02,
                borderColor: "#3B82F6",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 border border-[#333] text-white px-6 py-3 rounded-lg mt-8 transition-colors"
            >
              Talk to us about white-label
              <IconArrowRight size={16} stroke={2} aria-hidden="true" />
            </m.a>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <div className="relative bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-10 aspect-[4/3] flex flex-col justify-center items-center">
              <div className="text-[#333] text-[10px] tracking-widest uppercase mb-4">
                Your Brand
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#222]" />
                <div className="text-white text-2xl font-bold">YourCo</div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/5 px-3 py-1 rounded-full text-[10px] text-blue-400 uppercase tracking-wider">
                AI Powered
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
