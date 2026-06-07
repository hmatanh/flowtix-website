"use client";

import { ReactNode, useState, useEffect, CSSProperties } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconArrowsMaximize, IconX } from "@tabler/icons-react";

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
   * When true (default), mobile renders the mockup as a CSS-scaled preview
   * tile with a "Tap to inspect" affordance that opens a fullscreen pan
   * view. When false, the mockup renders as-is on both mobile and desktop
   * — use for hero artifacts and brand boards that are already designed
   * to fit mobile (HeroArtifact, BrandTakeover, BrandBoard).
   */
  enableMobileScroll?: boolean;
  /**
   * The mockup's native design width in px. Used for the mobile
   * scale-to-fit transform and the lightbox size. Default 1600 covers
   * every dense product UI mockup in the case studies.
   */
  designWidth?: number;
  /**
   * The mockup's native aspect ratio (W/H), e.g. "1600/1000". Used to
   * compute the height of the mobile preview tile so it fits the
   * mockup exactly with no crop. Default "1600/1000".
   */
  designAspect?: string;
  /**
   * Deprecated. Kept for backward-compat with existing call sites — no
   * longer affects layout. The mobile pattern is scale-to-fit + lightbox.
   */
  mobileMinWidth?: number;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * AnnotatedScreen — wraps a product-UI mockup with a brand-wash backdrop,
 * caption, and a numbered annotation grid.
 *
 * Mobile pattern (when enableMobileScroll = true, the default):
 *   - Render a CSS-scaled preview tile (mockup at native design width,
 *     scaled to fit viewport via `transform: scale()` driven by container
 *     queries). No horizontal page scroll; the whole mockup is visible
 *     at a glance.
 *   - "Tap to inspect" overlay button → opens a fullscreen lightbox with
 *     the mockup at native size; user pans naturally inside the modal.
 *
 * Desktop pattern: unchanged — mockup at maxWidth: 1200 with soft shadow.
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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Body scroll lock + ESC-to-close while lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen]);

  // Shared shell used for desktop and for enableMobileScroll=false
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

  // Mobile scale-to-fit tile (used only when enableMobileScroll = true)
  const MobileTile = (
    <m.button
      type="button"
      onClick={() => setLightboxOpen(true)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
      whileTap={{ scale: 0.98 }}
      className="relative block w-full p-0 m-0 rounded-xl overflow-hidden cursor-zoom-in"
      style={
        {
          width: "100%",
          aspectRatio: designAspect,
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.55), 0 6px 16px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.06)",
          containerType: "inline-size",
        } as CSSProperties
      }
      aria-label="View full size"
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
      {/* Tap-to-inspect overlay pill */}
      <span
        className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.22em] px-2.5 py-1.5 rounded-full font-semibold backdrop-blur-md pointer-events-none"
        style={{
          background: "rgba(10,10,10,0.72)",
          border: `1px solid rgba(${accentRGB},0.55)`,
          color: `rgb(${accentRGB})`,
        }}
      >
        <IconArrowsMaximize size={11} stroke={2.3} />
        Tap to inspect
      </span>
    </m.button>
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

      {/* Fullscreen lightbox — mounted only when open */}
      <AnimatePresence>
        {lightboxOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[120]"
            style={{ background: "rgba(0,0,0,0.94)" }}
            onClick={() => setLightboxOpen(false)}
          >
            {/* Top bar with hint + close */}
            <div
              className="fixed top-0 inset-x-0 z-[121] flex items-center justify-between px-4 py-3"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.22em] font-semibold inline-flex items-center gap-1.5"
                style={{ color: `rgb(${accentRGB})` }}
              >
                <IconArrowsMaximize size={11} stroke={2.3} />
                Swipe to explore · full size
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(false);
                }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
                aria-label="Close"
              >
                <IconX size={18} stroke={2.2} className="text-white" />
              </button>
            </div>

            {/* Scrollable mockup container — block layout (not flex) so the
                 1600-px mockup is NOT shrunk to viewport width. Wrapper grows
                 to fit content; outer overflow-auto allows horizontal panning. */}
            <div
              className="absolute inset-0 overflow-auto"
              style={{ WebkitOverflowScrolling: "touch" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  minHeight: "100%",
                  minWidth: "100%",
                  width: "max-content",
                  padding: "64px 12px",
                  boxSizing: "border-box",
                  display: "block",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    width: designWidth,
                    maxWidth: "none",
                    margin: "0 auto",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {children}
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
