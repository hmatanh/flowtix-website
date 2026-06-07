"use client";

/**
 * /work — Listing artifacts
 *
 * One refined "specimen" per case study. Each occupies the top of its
 * card on the /work page at a fixed 16:10 aspect ratio. Brand color
 * lives INSIDE the artifact — never bleeds onto the card chrome — so
 * the listing grid reads as one consistent editorial set.
 *
 * Calmer than the V2 hero artifacts on the case-study pages — these
 * are previews, not headliners.
 */

import { m } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ──────────────────────────────────────────────────────────────────
   KOVA — AI Property Match card on a dark slate
   ─────────────────────────────────────────────────────────────── */

export function KovaListingMockup() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 15%, rgba(14,165,233,0.18) 0%, transparent 65%), linear-gradient(180deg, #07101F 0%, #050A14 100%)",
      }}
    >
      <div className="absolute inset-0 px-6 sm:px-9 py-6 sm:py-8 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sky-300/70 text-[10px] tracking-[0.28em] uppercase font-semibold">
            Kova · Property match
          </span>
          <span className="font-mono text-sky-400/50 text-[9px] tracking-[0.18em]">
            03 of 12
          </span>
        </div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-auto rounded-xl border backdrop-blur-md"
          style={{
            background: "rgba(13,31,56,0.85)",
            borderColor: "rgba(14,165,233,0.30)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
          }}
        >
          <div className="grid grid-cols-[68px_1fr_auto] gap-4 p-4 items-center">
            {/* Thumbnail */}
            <div
              className="aspect-[4/3] rounded-md relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #1E3A5F 0%, #0EA5E9 60%, #38BDF8 100%)",
              }}
            >
              <svg viewBox="0 0 80 60" className="absolute inset-0 w-full h-full">
                <rect x="14" y="22" width="22" height="38" fill="rgba(0,0,0,0.30)" />
                <rect x="40" y="14" width="26" height="46" fill="rgba(0,0,0,0.40)" />
                <g fill="rgba(186,230,253,0.55)">
                  {[26, 32, 38, 44, 50].map((y) => (
                    <g key={y}>
                      <rect x="18" y={y} width="3" height="2" />
                      <rect x="24" y={y} width="3" height="2" />
                      <rect x="30" y={y} width="3" height="2" />
                    </g>
                  ))}
                  {[20, 26, 32, 38, 44, 50].map((y) => (
                    <g key={y}>
                      <rect x="44" y={y} width="3" height="2" />
                      <rect x="50" y={y} width="3" height="2" />
                      <rect x="56" y={y} width="3" height="2" />
                      <rect x="62" y={y} width="3" height="2" />
                    </g>
                  ))}
                </g>
              </svg>
            </div>

            <div className="min-w-0">
              <div className="text-white text-[13px] font-medium tracking-tight truncate">
                14 Wren Place · Tribeca
              </div>
              <div className="text-sky-200/60 text-[10.5px] mt-0.5">
                3 bd · 2 ba · 1,820 sqft
              </div>
              <div className="text-sky-300 text-[14px] font-semibold mt-1.5 tabular-nums">
                $485,000
              </div>
            </div>

            <div className="text-center">
              <div
                className="rounded-md px-2.5 py-2 border"
                style={{
                  background: "rgba(14,165,233,0.10)",
                  borderColor: "rgba(14,165,233,0.40)",
                }}
              >
                <div className="text-sky-300 text-[18px] font-bold tabular-nums leading-none">
                  94<span className="text-[12px]">%</span>
                </div>
                <div className="text-sky-200/70 text-[8px] uppercase tracking-[0.18em] mt-0.5">
                  Match
                </div>
              </div>
            </div>
          </div>

          <div
            className="border-t px-4 py-2.5 grid grid-cols-3 gap-2"
            style={{ borderColor: "rgba(14,165,233,0.12)" }}
          >
            {[
              { label: "Budget", val: "✓ Under" },
              { label: "Schools", val: "✓ A+" },
              { label: "Commute", val: "12 min" },
            ].map((r) => (
              <div key={r.label} className="text-[9.5px]">
                <div className="text-sky-200/50 uppercase tracking-[0.16em]">
                  {r.label}
                </div>
                <div className="text-sky-100/90 mt-0.5">{r.val}</div>
              </div>
            ))}
          </div>
        </m.div>

        <div className="mt-3 flex items-center gap-2 text-[10px] text-sky-300/60">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          AI matched 247 listings → top 8 in the last 24h
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   SERŌ — Today's clinical day
   ─────────────────────────────────────────────────────────────── */

export function SeroListingMockup() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, rgba(16,185,129,0.16) 0%, transparent 60%), linear-gradient(180deg, #051A12 0%, #02100A 100%)",
      }}
    >
      <div className="absolute inset-0 px-6 sm:px-9 py-6 sm:py-8 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-emerald-300/70 text-[10px] tracking-[0.28em] uppercase font-semibold">
            Serō · Today
          </span>
          <span className="font-mono text-emerald-400/50 text-[9px] tracking-[0.18em]">
            wed · mar 12
          </span>
        </div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-auto rounded-xl border overflow-hidden"
          style={{
            background: "rgba(7,31,21,0.85)",
            borderColor: "rgba(16,185,129,0.25)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
          }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 border-b"
            style={{ borderColor: "rgba(16,185,129,0.15)" }}
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-[11px] font-semibold"
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
              }}
            >
              AV
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[12.5px] font-medium tracking-tight">
                Dr. Ames Vidal
              </div>
              <div className="text-emerald-200/55 text-[10px]">
                7 patients today · 2 routine, 5 follow-ups
              </div>
            </div>
            <span
              className="text-[8.5px] uppercase tracking-[0.18em] px-2 py-1 rounded-full font-semibold"
              style={{
                background: "rgba(16,185,129,0.12)",
                color: "#A7F3D0",
                border: "1px solid rgba(16,185,129,0.35)",
              }}
            >
              AI prepared
            </span>
          </div>

          <div className="px-4 py-3 space-y-2.5">
            {[
              { t: "09:00", name: "Daria Mendel", reason: "Sleep follow-up", hot: false },
              { t: "10:30", name: "Joel Park", reason: "Cardio review", hot: true },
              { t: "11:45", name: "Pia Reyes", reason: "Intake · new patient", hot: false },
              { t: "14:00", name: "Sami Okun", reason: "Lab walkthrough", hot: false },
            ].map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-[44px_1fr_auto] gap-3 items-center text-[11px]"
              >
                <span className="font-mono tabular-nums text-emerald-300/80">
                  {s.t}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-white truncate">{s.name}</div>
                  <div className="text-emerald-200/55 text-[9.5px] truncate">
                    {s.reason}
                  </div>
                </div>
                {s.hot && (
                  <span
                    className="text-[8.5px] uppercase tracking-[0.16em] px-1.5 py-0.5 rounded font-semibold"
                    style={{
                      background: "rgba(248,113,113,0.10)",
                      color: "#FCA5A5",
                      border: "1px solid rgba(248,113,113,0.32)",
                    }}
                  >
                    Flagged
                  </span>
                )}
              </div>
            ))}
          </div>
        </m.div>

        <div className="mt-3 flex items-center gap-2 text-[10px] text-emerald-300/60">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Intake auto-completed for 6 of 7 today
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   AURUM — Tilted quarterly report cover, on cream paper
   ─────────────────────────────────────────────────────────────── */

export function AurumListingMockup() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 100%, rgba(217,119,6,0.18) 0%, transparent 65%), linear-gradient(180deg, #160C03 0%, #0A0501 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-8 sm:px-12 py-6">
        <m.div
          initial={{ opacity: 0, y: 16, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative aspect-[3/4] max-h-full"
          style={{ width: "min(220px, 60%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 -bottom-3 rounded-sm"
            style={{
              background: "rgba(0,0,0,0.55)",
              filter: "blur(20px)",
              transform: "translate(6px, 10px)",
            }}
          />
          <div
            className="relative w-full h-full rounded-sm p-5 flex flex-col"
            style={{
              background: "linear-gradient(180deg, #F5EFE2 0%, #EBE0C6 100%)",
              color: "#1A1230",
              fontFamily:
                "var(--font-tinos, Tinos), 'EB Garamond', ui-serif, Georgia, serif",
              boxShadow:
                "0 30px 60px rgba(0,0,0,0.45), 0 6px 16px rgba(0,0,0,0.30)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[8px] tracking-[0.32em] uppercase font-sans font-bold"
                style={{ color: "#7C2D12" }}
              >
                Aurum
              </span>
              <span
                className="text-[7px] tracking-[0.22em] uppercase font-sans"
                style={{ color: "#9A7B40" }}
              >
                Q4 · 2025
              </span>
            </div>

            <div
              aria-hidden="true"
              className="mt-3 h-px w-full"
              style={{ background: "rgba(124,45,18,0.40)" }}
            />

            <div className="mt-auto">
              <div
                className="text-[8px] tracking-[0.32em] uppercase font-sans font-bold mb-2"
                style={{ color: "#7C2D12" }}
              >
                Quarterly review
              </div>
              <h3
                className="tracking-tight"
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#0B0518",
                }}
              >
                A year of
                <br />
                <em>quiet compounding.</em>
              </h3>
              <div
                className="mt-2 text-[8.5px] italic tracking-tight"
                style={{ color: "#5A4D7A" }}
              >
                Prepared for the Marlow family.
              </div>
            </div>

            <div
              className="mt-3 pt-2 border-t flex items-end justify-between"
              style={{ borderColor: "rgba(124,45,18,0.30)" }}
            >
              <span
                className="text-[7px] tracking-[0.22em] uppercase font-sans"
                style={{ color: "#9A7B40" }}
              >
                Confidential
              </span>
              <span
                className="text-[8px] font-sans tabular-nums"
                style={{ color: "#1A1230" }}
              >
                +18.4%
              </span>
            </div>
          </div>
        </m.div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <span className="text-amber-300/70 text-[10px] tracking-[0.28em] uppercase font-semibold">
          Aurum · Quarterly
        </span>
        <span className="text-amber-300/40 text-[10px] tabular-nums">
          ·  18 pages
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   DRFT — Drop campaign poster on crimson wash
   ─────────────────────────────────────────────────────────────── */

export function DrftListingMockup() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(135deg, #DC2626 0%, #B91C1C 55%, #7F1D1D 100%)",
        color: "#FEE2E2",
      }}
    >
      <div
        className="absolute top-0 inset-x-0 px-6 sm:px-9 py-3 flex items-center justify-between"
        style={{ background: "#0A0303" }}
      >
        <span className="text-red-200 text-[10px] tracking-[0.30em] uppercase font-bold">
          SS25 · Fieldwork Drop
        </span>
        <span className="text-red-200/70 text-[10px] tracking-[0.30em] uppercase font-bold tabular-nums">
          04 May
        </span>
      </div>

      <div className="absolute inset-0 pt-12 px-6 sm:px-9 pb-6 flex flex-col justify-between">
        <m.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center"
        >
          <h2
            className="font-black tracking-[-0.05em] leading-[0.85]"
            style={{
              color: "#0A0303",
              fontSize: "clamp(48px, 10vw, 110px)",
              letterSpacing: "-0.05em",
            }}
          >
            DRFT<span style={{ color: "#FEE2E2" }}>*</span>
          </h2>
          <div
            className="text-[9px] sm:text-[10px] uppercase tracking-[0.30em] font-bold mt-2"
            style={{ color: "#FEE2E2" }}
          >
            Workwear · made in Porto
          </div>
        </m.div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "Field", price: "$189" },
            { name: "Derby", price: "$224" },
            { name: "Peacoat", price: "$198" },
          ].map((c, i) => (
            <m.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.55, ease: EASE }}
              className="flex flex-col items-center"
            >
              <div
                className="w-full aspect-[5/7] rounded-sm flex items-center justify-center p-2"
                style={{ background: "rgba(10,3,3,0.20)" }}
              >
                <svg viewBox="0 0 100 140" className="w-full h-full">
                  <path
                    d="M 30 30 L 40 14 L 60 14 L 70 30 L 84 38 L 84 110 L 76 130 L 24 130 L 16 110 L 16 38 Z"
                    fill="#0A0303"
                  />
                  <line
                    x1="50"
                    y1="26"
                    x2="50"
                    y2="130"
                    stroke="#7F1D1D"
                    strokeWidth="0.6"
                  />
                </svg>
              </div>
              <div
                className="text-[10px] font-black uppercase tracking-[0.18em] mt-1.5"
                style={{ color: "#0A0303" }}
              >
                {c.name}
              </div>
              <div
                className="text-[9px] tabular-nums opacity-70"
                style={{ color: "#0A0303" }}
              >
                {c.price}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   LINX — Studio proposal cover, on cream paper
   ─────────────────────────────────────────────────────────────── */

export function LinxListingMockup() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 100%, rgba(139,92,246,0.20) 0%, transparent 65%), linear-gradient(180deg, #110B22 0%, #07041A 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-8 sm:px-12 py-6">
        <m.div
          initial={{ opacity: 0, y: 16, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative aspect-[3/4] max-h-full"
          style={{ width: "min(220px, 60%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 -bottom-3 rounded-sm"
            style={{
              background: "rgba(0,0,0,0.55)",
              filter: "blur(20px)",
              transform: "translate(-6px, 10px)",
            }}
          />
          <div
            className="relative w-full h-full rounded-sm p-5 flex flex-col"
            style={{
              background: "linear-gradient(180deg, #F5EFE2 0%, #EBE0C6 100%)",
              color: "#1A1230",
              fontFamily:
                "var(--font-tinos, Tinos), 'EB Garamond', ui-serif, Georgia, serif",
              boxShadow:
                "0 30px 60px rgba(0,0,0,0.45), 0 6px 16px rgba(0,0,0,0.30)",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="inline-flex items-center justify-center w-4 h-4 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #A78BFA 0%, #5B21B6 100%)",
                  }}
                >
                  <svg viewBox="0 0 14 14" width="9" height="9" fill="none">
                    <path
                      d="M2 11 L2 3 L6 3 L8 7 L12 3"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="text-[8px] tracking-[0.32em] uppercase font-sans font-bold"
                  style={{ color: "#5B21B6" }}
                >
                  Linx Studio
                </span>
              </span>
              <span
                className="text-[7px] tracking-[0.22em] uppercase font-sans"
                style={{ color: "#7A6BA0" }}
              >
                Q1 · 2025
              </span>
            </div>

            <div
              aria-hidden="true"
              className="mt-3 h-px w-full"
              style={{ background: "rgba(91,33,182,0.40)" }}
            />

            <div className="mt-auto">
              <div
                className="text-[8px] tracking-[0.32em] uppercase font-sans font-bold mb-2"
                style={{ color: "#5B21B6" }}
              >
                Proposal · prepared for
              </div>
              <h3
                className="tracking-tight"
                style={{
                  fontSize: 22,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#0B0518",
                }}
              >
                Marlow
                <br />
                <em>+ Co</em>
              </h3>
              <div
                className="mt-2 text-[8.5px] italic tracking-tight"
                style={{ color: "#5A4D7A" }}
              >
                Brand, growth, and the next 12 months.
              </div>
            </div>

            <div
              className="mt-3 pt-2 border-t flex items-end justify-between"
              style={{ borderColor: "rgba(91,33,182,0.30)" }}
            >
              <span
                className="text-[7px] tracking-[0.22em] uppercase font-sans"
                style={{ color: "#7A6BA0" }}
              >
                Partners
              </span>
              <span
                className="text-[8px] font-sans"
                style={{ color: "#1A1230" }}
              >
                I. Chen · L. Mor
              </span>
            </div>
          </div>
        </m.div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <span className="text-violet-300/70 text-[10px] tracking-[0.28em] uppercase font-semibold">
          Linx · Proposal
        </span>
        <span className="text-violet-300/40 text-[10px] tabular-nums">
          ·  12 pages
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Dispatcher
   ─────────────────────────────────────────────────────────────── */

export function ListingMockup({ slug }: { slug: string }) {
  switch (slug) {
    case "kova":
      return <KovaListingMockup />;
    case "sero":
      return <SeroListingMockup />;
    case "aurum":
      return <AurumListingMockup />;
    case "drft":
      return <DrftListingMockup />;
    case "linx":
      return <LinxListingMockup />;
    default:
      return null;
  }
}
