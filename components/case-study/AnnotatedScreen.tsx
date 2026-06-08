"use client";

import { ReactNode, CSSProperties } from "react";
import { m } from "framer-motion";

export type Annotation = {
  /** Short label / number, e.g. "01" or "AI" */
  number?: string;
  /** Eyebrow header - short uppercase title. */
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
   * When true (default), mobile renders the mockup as a CSS-scaled preview
   * tile that fits the viewport with no horizontal scroll. When false, the
   * mockup renders as-is on both mobile and desktop - use for hero
   * artifacts and brand boards that are already designed to fit mobile
   * (HeroArtifact, BrandTakeover, BrandBoard).
   */
  enableMobileScroll?: boolean;
  /** The mockup's native design width in px. Default 1600. */
  designWidth?: number;
  /** The mockup's native aspect ratio (W/H), e.g. "1600/1000". */
  designAspect?: string;
  /** Deprecated - kept for backward-compat. */
  mobileMinWidth?: number;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * AnnotatedScreen - wraps a product-UI mockup with a brand-wash backdrop,
 * caption, and a numbered annotation grid.
 *
 * Mobile pattern (when enableMobileScroll = true, the default):
 *   The mockup is rendered at its native design width inside a container
 *   that scales it down to viewport width via `transform: scale()` driven
 *   by container queries. The whole product UI is visible at a glance,
 *   sharp and proportional, with no horizontal scroll and no overlap.
 *
 * Desktop pattern: mockup at maxWidth: 1200 with a soft shadow.
 */
export function AnnotatedScreen({
  children,
  accentRGB,
  eyebrow,
  caption,
  annotations,
  enableMobileScroll = true,
  designWidth = 1600,
  designAspect = "1600/1000",
}: Props) {
  // Desktop / "as-is" shell
  const Shell = (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative mx-auto rounded-2xl overflow-hidden"
      style={{
        maxWidth: 1200,
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.55), 0 10px 24px rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </m.div>
  );

  // Mobile scale-to-fit tile. The mockup renders at its native design
  // width inside a CSS-scaled wrapper - the whole UI fits the viewport
  // proportionally, no scroll, no overlap.
  const MobileTile = (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative w-full rounded-xl overflow-hidden mx-auto"
      style={
        {
          aspectRatio: designAspect,
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.55), 0 6px 16px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.06)",
          containerType: "inline-size",
        } as CSSProperties
      }
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: designWidth,
          transformOrigin: "top left",
          transform: `scale(calc(100cqi / ${designWidth}))`,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </m.div>
  );

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

        <div className="relative">
          {enableMobileScroll ? (
            <>
              <div className="lg:hidden">{MobileTile}</div>
              <div className="hidden lg:block">{Shell}</div>
            </>
          ) : (
            Shell
          )}
        </div>

        {caption && (
          <div className="text-center text-[#999] text-xs sm:text-sm mt-8 sm:mt-10 max-w-2xl mx-auto leading-relaxed">
            {caption}
          </div>
        )}

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
