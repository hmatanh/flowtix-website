"use client";

import { m } from "framer-motion";

export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type Props = {
  metrics: Metric[];
  accentColor: string;
  accentRGB: string;
};

/**
 * The 3-metric (or N) strip placed just under the case hero.
 * Numbers in client brand color, labels below in plain off-white.
 * Subtle vertical divider line between columns on desktop.
 */
export function MetricStrip({ metrics, accentColor, accentRGB }: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(180deg, transparent 0%, rgba(${accentRGB},0.025) 50%, transparent 100%)`,
        borderTop: `1px solid rgba(${accentRGB},0.10)`,
        borderBottom: `1px solid rgba(${accentRGB},0.10)`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 80% at 50% 50%, rgba(${accentRGB},0.04) 0%, transparent 70%)`,
        }}
      />
      <div className="relative page-container py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-x-6 lg:gap-x-10">
          {metrics.map((metric, i) => {
            // Borders only between columns on sm+. Mobile uses subtle dividers
            // between stacked rows instead so the rhythm reads.
            return (
              <m.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: EASE,
                }}
                className={`relative text-center sm:text-left ${
                  i > 0 ? "sm:pl-8 lg:pl-12 sm:border-l pt-8 sm:pt-0" : ""
                } ${i > 0 ? "border-t sm:border-t-0" : ""}`}
                style={{
                  borderColor: `rgba(${accentRGB},0.10)`,
                }}
              >
                <div
                  className="font-black tabular-nums leading-[0.92] tracking-tight"
                  style={{
                    fontSize: "clamp(38px, 6vw, 72px)",
                    color: accentColor,
                  }}
                >
                  {metric.value}
                </div>
                <div className="text-[#bdbdbd] text-sm sm:text-base mt-2 sm:mt-3 leading-tight">
                  {metric.label}
                </div>
                {metric.detail && (
                  <div
                    className="text-[10px] sm:text-xs uppercase tracking-[0.18em] mt-2 sm:mt-3"
                    style={{ color: `rgba(${accentRGB},0.75)` }}
                  >
                    {metric.detail}
                  </div>
                )}
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Re-export for the type-only namespace
export type { Props as MetricStripProps };

/* Keep the m. reference live across SSR - silences unused-import lint. */
void m;
