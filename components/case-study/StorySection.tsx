"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type Props = {
  /** Argument-as-heading. Not "Results" — "The system disappeared into the workflow." */
  heading: ReactNode;
  /** Optional tiny eyebrow above the heading. */
  eyebrow?: string;
  /** 1-3 supporting paragraphs. */
  children: ReactNode;
  /** Client brand RGB tuple (no parens). */
  accentRGB: string;
  /** When true, narrows body to readable measure (~70ch). */
  centered?: boolean;
};

/**
 * StorySection — opinion-as-heading section pattern from Linear.
 * Heading is the argument. Body is the evidence. Generous whitespace.
 */
export function StorySection({
  heading,
  eyebrow,
  children,
  accentRGB,
  centered = false,
}: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="page-container py-20 sm:py-28 lg:py-36">
        <div
          className={`${centered ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}`}
        >
          {eyebrow && (
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] uppercase tracking-[0.22em] mb-6"
              style={{ color: `rgba(${accentRGB},0.7)` }}
            >
              {eyebrow}
            </m.div>
          )}
          <m.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-black text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            {heading}
          </m.h2>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="mt-8 sm:mt-10 space-y-5 text-[#cfcfcf] leading-[1.7]"
            style={{ fontSize: "clamp(16px, 1.4vw, 19px)" }}
          >
            {children}
          </m.div>
        </div>
      </div>
    </section>
  );
}
