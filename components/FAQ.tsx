"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";
import { FadeIn } from "./animations/FadeIn";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How long does a typical project take?",
    a: "2–4 weeks for focused systems. 6–8 weeks for complex multi-integration builds. We’ve shipped 50+ projects and never missed a deadline — because we scope conservatively and execute aggressively.",
  },
  {
    q: "Do I need to be technical to work with you?",
    a: "Zero technical knowledge required. We’ve built systems for founders who’d never opened a terminal. If you can describe the problem clearly, we can build the solution.",
  },
  {
    q: "How much does a typical project cost?",
    a: "Projects typically start from $3,000 for focused single-system builds and scale based on complexity and scope. Every project gets a clear, fixed-price proposal before work begins — no hourly billing, no scope creep surprises.",
  },
  {
    q: "What happens after the system is built?",
    a: "Every project includes a 30-day post-launch optimization window, full documentation, and a training session for your team. After that, ongoing maintenance and optimization retainers are available if you need them.",
  },
  {
    q: "Can you integrate with the tools we already use?",
    a: "Yes. We integrate with virtually any tool that has an API — HubSpot, Salesforce, Notion, Slack, Gmail, Shopify, and hundreds more. We map your existing tech stack before building anything.",
  },
  {
    q: "Do you work with businesses outside of Israel?",
    a: "Absolutely. We work with clients across Europe, the US, and globally. All project communication can happen via video call, and we’re comfortable with multiple time zones.",
  },
  {
    q: "What AI models do you build with?",
    a: "Primarily Claude (Anthropic) and GPT-4 (OpenAI), depending on the use case. We’re model-agnostic — we choose the best tool for each specific problem, not the one we’re familiar with.",
  },
  {
    q: "What makes you different from other studios?",
    a: "Most studios focus on one piece — design, development, automation, or AI. We connect all of them into one practical solution. Same partner for the system, the interface, the automation behind it, and the brand around it.",
  },
  {
    q: "Can I see examples of your work?",
    a: "Yes — visit our Work page for 5 detailed case studies including interactive mockups, tech stack breakdowns, and results data.",
  },
  {
    q: "What if the system doesn’t work as expected after launch?",
    a: "We include a 30-day guarantee window. If anything doesn’t perform as agreed in the project brief, we fix it at no additional cost. We’ve never had a client left unsatisfied.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32">
      <div className="page-container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="text-[#666] text-[10px] tracking-[0.22em] uppercase mb-4">
              FAQ
            </div>
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              Questions we get asked a lot.
            </h2>
            <p className="text-[#888] text-base sm:text-lg mt-4 leading-relaxed">
              Everything we wish more clients had asked before starting a
              project.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#0f0f0f] bg-[#080808] overflow-hidden">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`border-b border-[#0f0f0f] last:border-b-0 transition-colors ${
                    isOpen ? "bg-[#0D0D0D]" : "hover:bg-[#0a0a0a]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 sm:px-7 py-5 sm:py-6 flex justify-between items-center gap-5 group"
                  >
                    <span
                      className={`font-medium text-base sm:text-lg tracking-tight transition-colors ${
                        isOpen
                          ? "text-white"
                          : "text-[#cccccc] group-hover:text-white"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border inline-flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "border-blue-500/40 bg-blue-500/10 text-blue-400"
                          : "border-[#1a1a1a] text-[#888] group-hover:border-[#2a2a2a] group-hover:text-white"
                      }`}
                    >
                      <m.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                      >
                        <IconPlus size={16} stroke={1.8} aria-hidden="true" />
                      </m.span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#aaa] text-sm sm:text-base leading-relaxed px-5 sm:px-7 pb-6 sm:pb-7 pr-12 sm:pr-14">
                          {f.a}
                        </p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <p className="text-center text-[#666] text-sm mt-8">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-white underline underline-offset-4 decoration-[#333] hover:decoration-white transition-colors"
            >
              Book a strategy call
            </a>{" "}
            — first conversation is free.
          </p>
        </div>
      </div>
    </section>
  );
}
