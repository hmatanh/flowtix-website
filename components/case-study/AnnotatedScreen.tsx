"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";

export type Annotation = {
  /** Short label / number, e.g. "01" or "AI" */
  number?: string;
  /** Eyebrow header — short uppercase title. */
  eyebrow: string;
  /** One-sentence body. */
  body: string;
};

type Props = {
  /** The screen artwork to wrap. */
  children: ReactNode;
  /** Soft brand wash backdrop. RGB tuple without parens. */
  accentRGB: string;
  /** Top eyebrow over the section. */
  eyebrow?: string;
  /** Caption rendered tightly below the screen. */
  caption?: ReactNode;
  /** Optional annotations rendered as a numbered card grid below the screen. */
  annotations?: Annotation[];
  /**
   * On mobile, the screen needs minimum room to be readable.
   * Setting this enables horizontal pan with a hint chip.
   */
  enableMobileScroll?: boolean;
  /**
   * Minimum width of the screen in pixels on mobile (when scroll enabled).
   * 840 keeps dense product UI legible without making the horizontal pan
   * feel endless on small phones.
   */
  mobileMinWidth?: number;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * AnnotatedScreen — the "design specimen" wrapper around a product UI shot.
 *
 *   - Subtle brand-wash backdrop (no frame around the screen)
 *   - Soft shadow under the artwork
 *   - On mobile: horizontal scroll so the dense UI is readable at native
 *     density rather than compressed to 320px
 *   - Annotations live BELOW the screen as a clean numbered card grid,
 *     never floating over the artwork
 */
export function AnnotatedScreen({
  children,
  accentRGB,
  eyebrow,
  caption,
  annotations,
  enableMobileScroll = true,
  mobileMinWidth = 840,
}: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 70% 70% at 50% 50%, rgba(${accentRGB},0.05) 0%, transparent 60%), #050505`,
      }}
    >
      <div className="relative page-container py-16 sm:py-24 lg:py-32">
        {eyebrow && (
          <div
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] mb-6 sm:mb-8 text-center"
            style={{ color: `rgba(${accentRGB},0.7)` }}
          >
            {eyebrow}
          </div>
        )}

        {/* Mobile scroll container with hint pill above */}
        <div className="relative">
          {enableMobileScroll && (
            <div
              className="lg:hidden flex justify-center mb-4 sm:mb-5"
              aria-hidden="true"
            >
              <m.span
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full font-medium"
                style={{
                  color: `rgba(${accentRGB},0.95)`,
                  background: `rgba(${accentRGB},0.08)`,
                  border: `1px solid rgba(${accentRGB},0.22)`,
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>Swipe to explore</span>
                <m.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </m.span>
              </m.span>
            </div>
          )}

          <div
            className={
              enableMobileScroll
                ? "overflow-x-auto lg:overflow-visible no-scrollbar -mx-5 sm:-mx-8 lg:mx-0 px-5 sm:px-8 lg:px-0"
                : ""
            }
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: enableMobileScroll ? "x mandatory" : undefined,
            }}
          >
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative mx-auto rounded-2xl overflow-hidden"
              style={{
                maxWidth: 1200,
                minWidth: enableMobileScroll ? mobileMinWidth : undefined,
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.55), 0 10px 24px rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.06)",
                scrollSnapAlign: enableMobileScroll ? "start" : undefined,
              }}
            >
              {children}
            </m.div>
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <div className="text-center text-[#999] text-xs sm:text-sm mt-8 sm:mt-10 max-w-2xl mx-auto leading-relaxed">
            {caption}
          </div>
        )}

        {/* Annotations — clean numbered grid below the screen */}
        {annotations && annotations.length > 0 && (
          <div
            className={`mt-12 sm:mt-16 grid gap-5 sm:gap-6 lg:gap-8 mx-auto ${
              annotations.length === 1
                ? "grid-cols-1 max-w-xl"
                : annotations.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl"
                : "grid-cols-1 md:grid-cols-3"
            }`}
            style={{ maxWidth: annotations.length === 3 ? 1200 : undefined }}
          >
            {annotations.map((a, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
                className="relative pl-5"
                style={{
                  borderLeft: `2px solid rgba(${accentRGB},0.35)`,
                }}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span
                    className="inline-flex items-center justify-center text-[10px] font-mono tabular-nums w-7 h-7 rounded-md"
                    style={{
                      background: `rgba(${accentRGB},0.10)`,
                      border: `1px solid rgba(${accentRGB},0.25)`,
                      color: `rgb(${accentRGB})`,
                    }}
                  >
                    {a.number ?? String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold"
                    style={{ color: `rgba(${accentRGB},0.85)` }}
                  >
                    {a.eyebrow}
                  </span>
                </div>
                <p className="text-[#cfcfcf] text-sm sm:text-[15px] leading-[1.65]">
                  {a.body}
                </p>
              </m.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
