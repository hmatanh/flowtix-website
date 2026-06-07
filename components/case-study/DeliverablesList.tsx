"use client";

import { m } from "framer-motion";

export type Deliverable = {
  number: string; // "01"
  title: string;
  body?: string; // optional one-line description
};

type Props = {
  eyebrow?: string;
  heading?: string;
  items: Deliverable[];
  accentRGB: string;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * DeliverablesList — Heydays / Pentagram editorial pattern.
 *
 * A numbered vertical list of deliverables shown as a quiet table, not as
 * decorated cards. Each row reveals on scroll. Used when you want the
 * "what we built" moment to feel like a project credit page, not a sales
 * deck.
 */
export function DeliverablesList({
  eyebrow,
  heading,
  items,
  accentRGB,
}: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="page-container py-20 sm:py-28 lg:py-36">
        {eyebrow && (
          <div
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] mb-4"
            style={{ color: `rgba(${accentRGB},0.7)` }}
          >
            {eyebrow}
          </div>
        )}
        {heading && (
          <h2
            className="font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-12 sm:mb-16"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {heading}
          </h2>
        )}

        <div
          className="border-t"
          style={{ borderColor: `rgba(${accentRGB},0.18)` }}
        >
          {items.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: EASE }}
              className="grid grid-cols-[60px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-baseline gap-4 sm:gap-6 py-5 sm:py-7 border-b"
              style={{ borderColor: `rgba(${accentRGB},0.18)` }}
            >
              <span
                className="font-mono text-[12px] sm:text-[13px] tabular-nums"
                style={{ color: `rgba(${accentRGB},0.7)` }}
              >
                {item.number}
              </span>
              <span
                className="text-white tracking-tight"
                style={{
                  fontSize: "clamp(18px, 2.4vw, 26px)",
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                }}
              >
                {item.title}
              </span>
              {item.body ? (
                <span
                  className="text-[#aaa] text-sm sm:text-base hidden sm:block max-w-md text-right"
                  style={{ letterSpacing: "0" }}
                >
                  {item.body}
                </span>
              ) : (
                <span />
              )}
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
