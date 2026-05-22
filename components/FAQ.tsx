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
    a: "Zero technical knowledge required. We’ve built AI systems for founders who’d never opened a terminal. If you can describe the problem clearly, we can build the solution.",
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
    q: "What makes you different from other AI agencies?",
    a: "Most AI agencies are engineering teams that learned to sell. We’re a design studio that learned to build AI. That difference shows in every product we ship.",
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
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-[#333] text-[10px] tracking-widest uppercase mb-4 text-center">
            FAQ
          </div>
          <h2 className="text-h2 gradient-text text-center">
            Questions we get asked a lot.
          </h2>
        </FadeIn>
        <div className="mt-12">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#0a0a0a]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-5 flex justify-between items-center gap-4 group"
                >
                  <span className="text-white font-medium text-base group-hover:text-white transition-colors">
                    {f.q}
                  </span>
                  <m.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="shrink-0 text-[#666] group-hover:text-white transition-colors"
                  >
                    <IconPlus size={20} stroke={1.5} />
                  </m.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#666] text-sm leading-relaxed pb-5 pr-8">
                        {f.a}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
