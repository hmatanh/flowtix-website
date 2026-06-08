"use client";

import { ReactNode } from "react";
import { m } from "framer-motion";
import { GeometricAvatar } from "./GeometricAvatar";

type Props = {
  /** The full multi-sentence quote. */
  children: ReactNode;
  /** Speaker name, e.g. "Sarah Moran". */
  name: string;
  /** Their role + company, e.g. "Founder · Kova". */
  role: string;
  /** Client brand primary color. */
  accentColor: string;
  /** Client brand accent (rgb tuple, no parens). */
  accentRGB: string;
  /** Background style. Default: subtle brand wash. "deep" pulls more color into it. */
  variant?: "subtle" | "deep";
  /** Avatar gradient stops. Falls back to client brand color tones. */
  avatarGradient?: [string, string];
  /**
   * Hide the avatar entirely. Use for cases where the firm doesn't show
   * its principals on record (e.g. Aurum's editorial archetype).
   */
  hideAvatar?: boolean;
  /** Use the serif editorial typeface (Aurum). */
  serif?: boolean;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * PullQuote - the multi-stakeholder quote pattern.
 * Used 2-3 times per case study at the moments where a human voice carries
 * more weight than a metric. Headshot + name + role pinned underneath the
 * quote. Avoids the "agency-written" feel of unattributed quotes.
 */
export function PullQuote({
  children,
  name,
  role,
  accentColor,
  accentRGB,
  variant = "subtle",
  avatarGradient,
  hideAvatar = false,
  serif = false,
}: Props) {
  const background =
    variant === "deep"
      ? `linear-gradient(135deg, rgba(${accentRGB},0.08) 0%, #050505 60%)`
      : `linear-gradient(180deg, rgba(${accentRGB},0.02) 0%, #050505 100%)`;

  return (
    <section className="relative w-full overflow-hidden" style={{ background }}>
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[480px] h-[480px] pointer-events-none rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${accentRGB},0.10), transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      <div className="relative page-container py-16 sm:py-24 lg:py-36">
        <div className="max-w-4xl">
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            aria-hidden="true"
            className="block font-black leading-[0.7] select-none pointer-events-none"
            style={{
              fontSize: "clamp(64px, 12vw, 160px)",
              color: accentColor,
              opacity: 0.18,
              marginBottom: -8,
            }}
          >
            “
          </m.span>

          <m.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
            className={`text-white tracking-tight ${
              serif ? "font-serif-editorial italic" : "font-light"
            }`}
            style={{
              fontSize: "clamp(20px, 3.4vw, 38px)",
              lineHeight: 1.35,
              overflowWrap: "break-word",
            }}
          >
            {children}
          </m.blockquote>

          <m.figcaption
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
            className={`mt-8 sm:mt-10 flex items-center ${
              hideAvatar ? "" : "gap-4"
            }`}
          >
            {!hideAvatar && (
              <GeometricAvatar
                name={name}
                size={52}
                gradient={
                  avatarGradient ?? [
                    `rgba(${accentRGB},0.35)`,
                    "rgba(255,255,255,0.04)",
                  ]
                }
              />
            )}
            <div className={hideAvatar ? "border-l-2 pl-4" : ""}
              style={hideAvatar ? { borderColor: `rgba(${accentRGB},0.45)` } : undefined}
            >
              <div
                className={`text-white tracking-tight text-base sm:text-lg ${
                  serif ? "font-serif-editorial" : "font-semibold"
                }`}
              >
                {name}
              </div>
              <div
                className={`text-xs sm:text-sm mt-0.5 ${
                  serif ? "italic tracking-tight" : "tracking-wide"
                }`}
                style={{ color: `rgba(${accentRGB},0.85)` }}
              >
                {role}
              </div>
            </div>
          </m.figcaption>
        </div>
      </div>
    </section>
  );
}
