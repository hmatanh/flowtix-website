"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export type StackItem = {
  /** The visual — usually a screen component. */
  visual: ReactNode;
  /** Brief one-line caption rendered below the visual. */
  caption?: string;
  /** Eyebrow shown above the caption. */
  eyebrow?: string;
};

type Props = {
  items: StackItem[];
  /** Vertical spacing between items. Default: generous (160px). */
  gap?: number;
  /** Optional accent for the eyebrow text. */
  accentRGB?: string;
};

/**
 * DocumentaryStack — vertical stack of large images with generous breathing
 * room. Heydays / Pentagram pattern: each image is the moment. Never grid.
 */
export function DocumentaryStack({
  items,
  gap = 160,
  accentRGB = "255, 255, 255",
}: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="page-container py-20 sm:py-28 lg:py-32">
        <div style={{ display: "flex", flexDirection: "column", gap }}>
          {items.map((item, i) => (
            <m.figure
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="m-0"
            >
              <div
                className="relative mx-auto rounded-2xl overflow-hidden"
                style={{
                  maxWidth: 1100,
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.55), 0 12px 28px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {item.visual}
              </div>
              {(item.eyebrow || item.caption) && (
                <figcaption className="text-center mt-6 sm:mt-7 mx-auto max-w-2xl">
                  {item.eyebrow && (
                    <div
                      className="text-[10px] uppercase tracking-[0.22em] mb-2"
                      style={{ color: `rgba(${accentRGB},0.65)` }}
                    >
                      {item.eyebrow}
                    </div>
                  )}
                  {item.caption && (
                    <div className="text-[#999] text-sm sm:text-base leading-relaxed">
                      {item.caption}
                    </div>
                  )}
                </figcaption>
              )}
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
