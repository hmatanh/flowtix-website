"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";

export type Annotation = {
  /** Where the connector line starts on the screen, as % of screen box. */
  from: { x: number; y: number };
  /** Where the annotation text sits, as % of the section. */
  text: { x: number; y: number };
  /** Optional anchor side — controls the line termination. */
  side?: "left" | "right";
  /** The annotation body. Short. One sentence. */
  body: string;
  /** Tiny label above the body — e.g. "01" or "FORM". */
  eyebrow?: string;
};

type Props = {
  /** The screen artwork to wrap. */
  children: ReactNode;
  /** Soft brand wash behind the screen. RGB tuple without parens. */
  accentRGB: string;
  /** Top eyebrow over the section. */
  eyebrow?: string;
  /** Caption rendered tightly below the screen. */
  caption?: ReactNode;
  /** Optional annotations to render alongside the screen. Desktop only. */
  annotations?: Annotation[];
  /** When true, no padding container — let the screen run full-bleed. */
  fullBleed?: boolean;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * AnnotatedScreen — the "design specimen" wrapper around a product UI shot.
 *
 *   - Subtle brand-wash backdrop (no frame, no border around the screen)
 *   - Soft shadow under the artwork
 *   - Optional thin connector lines to annotation text in the margin
 *
 * Mobile: annotations collapse to a stacked list below the screen — never
 * floating over the artwork.
 */
export function AnnotatedScreen({
  children,
  accentRGB,
  eyebrow,
  caption,
  annotations,
  fullBleed = false,
}: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 60% 70% at 50% 50%, rgba(${accentRGB},0.05) 0%, transparent 70%), #050505`,
      }}
    >
      <div
        className={`relative ${fullBleed ? "" : "page-container"} py-20 sm:py-28 lg:py-36`}
      >
        {eyebrow && (
          <div
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] mb-6 sm:mb-8 text-center"
            style={{ color: `rgba(${accentRGB},0.7)` }}
          >
            {eyebrow}
          </div>
        )}

        <div className="relative">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              maxWidth: fullBleed ? "100%" : 1200,
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.55), 0 12px 28px rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {children}
          </m.div>

          {/* Desktop annotations */}
          {annotations && annotations.length > 0 && (
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {annotations.map((a, i) => {
                const side = a.side ?? (a.text.x < 50 ? "left" : "right");
                return (
                  <div key={i}>
                    {/* Connector line */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <m.line
                        x1={a.from.x}
                        y1={a.from.y}
                        x2={a.text.x}
                        y2={a.text.y}
                        stroke={`rgba(${accentRGB},0.45)`}
                        strokeWidth="0.12"
                        strokeDasharray="0.6 0.6"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + i * 0.1,
                          ease: EASE,
                        }}
                      />
                    </svg>
                    {/* Endpoint dot at the screen */}
                    <span
                      className="absolute block w-2 h-2 rounded-full pointer-events-none"
                      style={{
                        background: `rgb(${accentRGB})`,
                        left: `${a.from.x}%`,
                        top: `${a.from.y}%`,
                        transform: "translate(-50%, -50%)",
                        boxShadow: `0 0 12px rgba(${accentRGB},0.6)`,
                      }}
                      aria-hidden="true"
                    />
                    {/* Annotation body in margin */}
                    <m.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }}
                      className={`absolute pointer-events-none ${
                        side === "left" ? "text-right" : "text-left"
                      }`}
                      style={{
                        left: `${a.text.x}%`,
                        top: `${a.text.y}%`,
                        transform:
                          side === "left"
                            ? "translate(-100%, -50%)"
                            : "translate(0, -50%)",
                        maxWidth: 220,
                        paddingLeft: side === "right" ? 12 : 0,
                        paddingRight: side === "left" ? 12 : 0,
                      }}
                    >
                      {a.eyebrow && (
                        <div
                          className="text-[10px] uppercase tracking-[0.22em] mb-1.5"
                          style={{ color: `rgba(${accentRGB},0.85)` }}
                        >
                          {a.eyebrow}
                        </div>
                      )}
                      <div className="text-[#cfcfcf] text-[13px] leading-[1.5]">
                        {a.body}
                      </div>
                    </m.div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <div className="text-center text-[#999] text-xs sm:text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
            {caption}
          </div>
        )}

        {/* Mobile annotation list */}
        {annotations && annotations.length > 0 && (
          <ul className="lg:hidden mt-10 max-w-xl mx-auto space-y-5">
            {annotations.map((a, i) => (
              <li
                key={i}
                className="border-l-2 pl-4"
                style={{ borderColor: `rgba(${accentRGB},0.45)` }}
              >
                {a.eyebrow && (
                  <div
                    className="text-[10px] uppercase tracking-[0.22em] mb-1"
                    style={{ color: `rgba(${accentRGB},0.85)` }}
                  >
                    {a.eyebrow}
                  </div>
                )}
                <div className="text-[#cfcfcf] text-sm leading-relaxed">
                  {a.body}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
