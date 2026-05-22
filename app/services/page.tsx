"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { services } from "@/lib/services";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

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

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
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
            <p className="text-[#888] mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From first strategy to live deployment — design, intelligence,
              and execution in one place.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="text-[#444] text-sm mt-4 inline-flex items-center gap-2">
              <span className="inline-flex w-1.5 h-1.5 rounded-full bg-blue-500" />
              10 services · all in-house
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {services.map((s, idx) => {
          const reverse = idx % 2 === 1;
          const Icon = s.icon;
          return (
            <section
              key={s.slug}
              className="relative border-b border-[#0a0a0a] py-20 lg:py-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <FadeIn
                  direction={reverse ? "left" : "right"}
                  className={`relative ${reverse ? "lg:order-2" : ""}`}
                >
                  <div
                    className="absolute -left-4 -top-2 lg:-left-2 font-black text-[#0f0f0f] leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(72px, 8vw, 120px)" }}
                  >
                    {s.number}
                  </div>
                  <div className="relative">
                    <div className="text-label text-[#333]">
                      Service {s.number}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 tracking-tight">
                      {s.title}
                    </h2>
                    <p className="text-[#666] text-[15px] leading-relaxed mt-5 max-w-lg">
                      {s.description}
                    </p>
                    <ul className="mt-7 space-y-2.5">
                      {s.features.slice(0, 5).map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-[#aaaaaa] text-sm"
                        >
                          <span className="w-5 h-5 rounded-full border border-blue-500/40 bg-blue-500/10 inline-flex items-center justify-center shrink-0">
                            <IconCheck
                              size={11}
                              stroke={2.5}
                              className="text-blue-400"
                            />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="animated-link inline-flex items-center gap-1 text-[#888] hover:text-white text-sm mt-8 transition-colors"
                    >
                      Explore {s.title.split(" & ")[0]}
                      <IconArrowRight
                        size={14}
                        stroke={2}
                        className="ml-0.5"
                      />
                    </Link>
                  </div>
                </FadeIn>

                <FadeIn
                  direction={reverse ? "right" : "left"}
                  delay={0.1}
                  className={reverse ? "lg:order-1" : ""}
                >
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group block bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl aspect-[5/4] relative overflow-hidden transition-all hover:border-[#2a2a2a]"
                  >
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        background:
                          "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.4), transparent 60%)",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                      <div className="w-20 h-20 rounded-2xl border border-[#1a1a1a] bg-[#0D0D0D] inline-flex items-center justify-center transition-colors group-hover:border-blue-500/40">
                        <Icon
                          size={36}
                          stroke={1.5}
                          className="text-[#444] group-hover:text-blue-500 transition-colors"
                        />
                      </div>
                      <div className="text-[#444] text-xs mt-6 tracking-widest uppercase">
                        {s.short}
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 text-[#1a1a1a] text-[11px] font-mono">
                      {s.number}
                    </div>
                  </Link>
                </FadeIn>
              </div>
            </section>
          );
        })}
      </div>

      <section className="relative py-24 lg:py-32 px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <FadeIn>
          <h2
            className="font-black tracking-tighter gradient-text"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
          >
            Not sure where to start?
          </h2>
          <p className="text-[#888] mt-5 text-lg">
            Book a free 30-minute discovery call.
          </p>
          <m.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(255,255,255,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-block mt-8 rounded-xl"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#eee] transition-colors"
            >
              Book a Call
              <IconArrowRight size={16} stroke={2} />
            </Link>
          </m.div>
        </FadeIn>
      </section>
    </>
  );
}
