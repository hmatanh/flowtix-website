"use client";

import { m } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { GlowCard } from "@/components/GlowCard";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const headlineWords = [
  { word: "We" },
  { word: "believe" },
  { word: "design" },
  { word: "is" },
  { word: "the" },
  { word: "most" },
  { word: "underrated" },
  { word: "advantage" },
  { word: "in" },
  { word: "AI.", gradient: true },
];

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const approach = [
  {
    title: "We start with the problem",
    text: "Not the technology. We map the business pain before building anything.",
  },
  {
    title: "We design before we build",
    text: "Every system is designed to be understood, adopted, and loved — not just functional.",
  },
  {
    title: "We build for the long term",
    text: "Our systems scale with your business. Not to impress in demos and break in production.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-h1 text-white">
            <m.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
            >
              {headlineWords.map((w, i) => (
                <m.span
                  key={i}
                  variants={wordVariants}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={`inline-block mr-[0.25em] ${
                    w.gradient ? "gradient-text-blue" : ""
                  }`}
                >
                  {w.word}
                </m.span>
              ))}
            </m.span>
          </h1>
          <FadeIn delay={0.8}>
            <p className="text-[#888] mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Most AI tools are built by engineers for engineers. We build them
              for humans.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn direction="right">
            <blockquote
              className="font-black tracking-tighter gradient-text leading-[1.05]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              &ldquo;Beautiful systems get adopted. Ugly ones get abandoned.&rdquo;
            </blockquote>
            <div className="text-[#444] text-sm mt-6 tracking-wider uppercase">
              — Our founding belief
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.15}>
            <div className="text-label text-[#333] mb-4">Our Story</div>
            <h2 className="text-h2 text-white mb-6">Why Flowtix exists</h2>
            <div className="text-[#888] text-[16px] leading-[1.75] space-y-5">
              <p>
                Most AI tools are built by engineers for engineers. The result?
                Powerful systems that businesses can&apos;t use, don&apos;t
                understand, and never adopt.
              </p>
              <p>
                Flowtix was founded on a different belief: the best AI
                systems are the ones that are beautifully designed, easy to use,
                and built around real business problems — not just technical
                possibilities.
              </p>
              <p>
                We combine 10+ years of design and brand expertise with deep AI
                capabilities to build systems that businesses actually want to
                use — and actually get value from.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222] inline-flex items-center justify-center text-white font-semibold text-lg shrink-0">
              FA
            </div>
            <div>
              <div className="text-label text-[#3B82F6]">Founder Note</div>
              <h3 className="text-white text-xl font-semibold mt-2">
                Founded by a designer who builds with AI
              </h3>
              <p className="text-[#888] text-sm mt-3 leading-relaxed">
                10+ years designing digital products and brand systems. Now
                building AI infrastructure with the same design obsession.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-label text-[#333] mb-4">Our Approach</div>
            <h2 className="text-h2 gradient-text max-w-2xl">
              How we build, every time.
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {approach.map((a) => (
              <StaggerItem key={a.title}>
                <GlowCard className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8 h-full transition-colors hover:border-[#2a2a2a]">
                  <h3 className="text-white text-lg font-semibold">{a.title}</h3>
                  <p className="text-[#666] text-sm mt-3 leading-relaxed">
                    {a.text}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#040404] text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[300px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full" />
        </div>
        <FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-label text-[#333] mb-4">Our Vision</div>
            <h2
              className="font-black tracking-tighter gradient-text"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
            >
              Every business deserves access to intelligent infrastructure.
            </h2>
            <p className="text-[#888] mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
              A world where every business — regardless of size — can access
              the intelligence infrastructure that was previously only
              available to enterprise companies with large engineering teams.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
