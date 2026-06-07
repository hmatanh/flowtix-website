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
   KOVA — Tilted "Listing Brochure" on near-black architectural board
   Premium real-estate magazine spread feel: a stylized building
   silhouette, an editorial address title, a tabular fact strip, a big
   tabular price, a small "94% MATCH" stamp at the corner.
   ─────────────────────────────────────────────────────────────── */

export function KovaListingMockup() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(70% 60% at 50% 100%, rgba(14,165,233,0.20) 0%, transparent 65%), linear-gradient(180deg, #060E1C 0%, #02060E 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-7 sm:px-10 py-5 sm:py-6">
        <m.div
          initial={{ opacity: 0, y: 16, rotate: -2.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative aspect-[3/4] max-h-full"
          style={{ width: "min(240px, 64%)" }}
        >
          {/* Drop shadow */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 -bottom-3 rounded-sm"
            style={{
              background: "rgba(2,8,20,0.60)",
              filter: "blur(22px)",
              transform: "translate(8px, 12px)",
            }}
          />

          {/* Brochure card */}
          <div
            className="relative w-full h-full rounded-sm flex flex-col overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #0B1A2F 0%, #07111E 100%)",
              boxShadow:
                "0 30px 60px rgba(0,0,0,0.55), 0 6px 16px rgba(0,0,0,0.40), inset 0 1px 0 rgba(186,230,253,0.06)",
              border: "1px solid rgba(14,165,233,0.18)",
            }}
          >
            {/* Top stripe */}
            <div
              className="flex items-center justify-between px-4 py-2.5"
              style={{
                background: "rgba(14,165,233,0.10)",
                borderBottom: "1px solid rgba(14,165,233,0.22)",
              }}
            >
              <span className="text-sky-300 text-[7.5px] tracking-[0.32em] uppercase font-bold">
                Kova · Listings
              </span>
              <span className="text-sky-400/60 text-[7px] font-mono tracking-[0.22em]">
                No. 014
              </span>
            </div>

            {/* Hero image — stylized skyline */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #1E3A5F 0%, #0EA5E9 65%, #7DD3FC 100%)",
              }}
            >
              {/* Sun */}
              <div
                aria-hidden="true"
                className="absolute"
                style={{
                  top: "16%",
                  right: "16%",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.55), rgba(255,255,255,0) 65%)",
                }}
              />
              {/* Skyline */}
              <svg
                viewBox="0 0 200 110"
                preserveAspectRatio="none"
                className="absolute inset-x-0 bottom-0 w-full"
                style={{ height: "82%" }}
              >
                <g fill="#031227">
                  <rect x="6" y="58" width="28" height="52" />
                  <rect x="36" y="42" width="22" height="68" />
                  <rect x="60" y="22" width="36" height="88" />
                  <rect x="98" y="38" width="20" height="72" />
                  <rect x="120" y="50" width="42" height="60" />
                  <rect x="164" y="32" width="28" height="78" />
                </g>
                <g fill="rgba(186,230,253,0.50)">
                  {[
                    { x: 10, y: 64 }, { x: 18, y: 64 }, { x: 26, y: 64 },
                    { x: 10, y: 72 }, { x: 18, y: 72 }, { x: 26, y: 72 },
                    { x: 10, y: 80 }, { x: 26, y: 80 },
                    { x: 40, y: 48 }, { x: 48, y: 48 }, { x: 40, y: 56 }, { x: 48, y: 56 },
                    { x: 40, y: 64 }, { x: 48, y: 64 }, { x: 40, y: 72 }, { x: 48, y: 72 },
                    { x: 66, y: 30 }, { x: 76, y: 30 }, { x: 86, y: 30 },
                    { x: 66, y: 40 }, { x: 76, y: 40 }, { x: 86, y: 40 },
                    { x: 66, y: 50 }, { x: 86, y: 50 },
                    { x: 66, y: 60 }, { x: 76, y: 60 }, { x: 86, y: 60 },
                    { x: 66, y: 70 }, { x: 86, y: 70 },
                    { x: 102, y: 46 }, { x: 110, y: 46 },
                    { x: 102, y: 56 }, { x: 110, y: 56 },
                    { x: 102, y: 66 }, { x: 110, y: 66 },
                    { x: 124, y: 56 }, { x: 132, y: 56 }, { x: 140, y: 56 }, { x: 148, y: 56 }, { x: 156, y: 56 },
                    { x: 124, y: 66 }, { x: 140, y: 66 }, { x: 156, y: 66 },
                    { x: 124, y: 76 }, { x: 132, y: 76 }, { x: 148, y: 76 }, { x: 156, y: 76 },
                    { x: 168, y: 40 }, { x: 178, y: 40 }, { x: 186, y: 40 },
                    { x: 168, y: 50 }, { x: 186, y: 50 },
                    { x: 168, y: 60 }, { x: 178, y: 60 }, { x: 186, y: 60 },
                  ].map((p, i) => (
                    <rect key={i} x={p.x} y={p.y} width="3.2" height="2" />
                  ))}
                </g>
              </svg>
              {/* Match stamp — corner */}
              <div
                className="absolute top-2 left-2 rounded-sm flex flex-col items-center justify-center px-2 py-1.5"
                style={{
                  background: "rgba(2,6,14,0.80)",
                  border: "1px solid rgba(186,230,253,0.45)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="text-sky-100 text-[13px] font-bold leading-none tabular-nums">
                  94<span className="text-[8px]">%</span>
                </div>
                <div className="text-sky-100/70 text-[6.5px] tracking-[0.18em] uppercase font-semibold mt-0.5">
                  Match
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 px-4 pt-3 pb-3 flex flex-col">
              <div
                className="text-sky-400/70 text-[7px] tracking-[0.28em] uppercase font-bold mb-1"
              >
                Featured listing
              </div>
              <h3
                className="text-white tracking-tight"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                14 Wren Place
              </h3>
              <div className="text-sky-200/70 text-[9px] mt-0.5 tracking-tight">
                Tribeca · NY 10013
              </div>

              {/* Specs */}
              <div
                className="grid grid-cols-3 gap-2 mt-2.5 py-1.5 border-y"
                style={{ borderColor: "rgba(14,165,233,0.18)" }}
              >
                {[
                  { v: "3", l: "Beds" },
                  { v: "2", l: "Baths" },
                  { v: "1.8k", l: "Sqft" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-white text-[10.5px] font-semibold tabular-nums leading-none">
                      {s.v}
                    </div>
                    <div className="text-sky-200/50 text-[6.5px] uppercase tracking-[0.16em] mt-0.5">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-2 flex items-end justify-between">
                <div>
                  <div className="text-sky-400/70 text-[6.5px] tracking-[0.22em] uppercase font-bold">
                    Asking
                  </div>
                  <div className="text-sky-200 text-[14px] font-semibold tabular-nums tracking-tight mt-0.5">
                    $485,000
                  </div>
                </div>
                <div className="text-sky-400/50 text-[7.5px] tracking-[0.18em] uppercase">
                  Agt. Moran
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
        <span className="text-sky-300/70 text-[10px] tracking-[0.28em] uppercase font-semibold">
          Kova · Listing
        </span>
        <span className="text-sky-300/40 text-[10px] tabular-nums">
          ·  247 indexed
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   SERŌ — Tilted "Daily Brief" card on warm sage paper
   Editorial clinical artifact: a single quiet card the practitioner
   gets each morning. Serif wordmark, calm hierarchy, an EKG-style
   pulse line as the brand signature.
   ─────────────────────────────────────────────────────────────── */

export function SeroListingMockup() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(70% 60% at 50% 100%, rgba(16,185,129,0.20) 0%, transparent 65%), linear-gradient(180deg, #03130D 0%, #010A07 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-7 sm:px-10 py-5 sm:py-6">
        <m.div
          initial={{ opacity: 0, y: 16, rotate: 2.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative aspect-[3/4] max-h-full"
          style={{ width: "min(240px, 64%)" }}
        >
          {/* Drop shadow */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 -bottom-3 rounded-sm"
            style={{
              background: "rgba(1,10,7,0.55)",
              filter: "blur(22px)",
              transform: "translate(-8px, 12px)",
            }}
          />

          {/* Card on warm sage paper */}
          <div
            className="relative w-full h-full rounded-sm p-5 flex flex-col"
            style={{
              background:
                "linear-gradient(180deg, #EFEFE3 0%, #DFE7D6 100%)",
              color: "#0B2218",
              fontFamily:
                "var(--font-tinos, Tinos), 'EB Garamond', ui-serif, Georgia, serif",
              boxShadow:
                "0 30px 60px rgba(0,0,0,0.45), 0 6px 16px rgba(0,0,0,0.30)",
            }}
          >
            {/* Top brand row */}
            <div className="flex items-center justify-between">
              <span
                className="text-[8px] tracking-[0.32em] uppercase font-sans font-bold"
                style={{ color: "#065F46" }}
              >
                Serō · Clinic
              </span>
              <span
                className="text-[7px] tracking-[0.22em] uppercase font-sans"
                style={{ color: "#5C7867" }}
              >
                Wed · Mar 12
              </span>
            </div>

            {/* Hairline */}
            <div
              aria-hidden="true"
              className="mt-3 h-px w-full"
              style={{ background: "rgba(6,95,70,0.35)" }}
            />

            {/* Main editorial */}
            <div className="mt-3">
              <div
                className="text-[8px] tracking-[0.32em] uppercase font-sans font-bold mb-1.5"
                style={{ color: "#065F46" }}
              >
                Morning brief
              </div>
              <h3
                className="tracking-tight"
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#0B2218",
                }}
              >
                A <em>calm</em>
                <br />
                clinic day.
              </h3>
              <div
                className="mt-2 text-[8.5px] italic tracking-tight"
                style={{ color: "#4E6D5E" }}
              >
                Prepared for Dr. Ames Vidal.
              </div>
            </div>

            {/* EKG pulse line — the brand signature */}
            <div className="mt-3">
              <svg
                viewBox="0 0 200 28"
                preserveAspectRatio="none"
                className="w-full"
                style={{ height: 22 }}
              >
                <path
                  d="M 0 14 L 24 14 L 32 14 L 38 6 L 44 22 L 50 4 L 56 24 L 62 14 L 86 14 L 92 14 L 98 8 L 104 20 L 110 14 L 134 14 L 140 14 L 146 4 L 152 22 L 158 10 L 164 14 L 200 14"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Numbers row */}
            <div
              className="grid grid-cols-3 gap-1 mt-2 py-2 border-y"
              style={{ borderColor: "rgba(6,95,70,0.28)" }}
            >
              {[
                { v: "7", l: "Patients" },
                { v: "5", l: "Follow-ups" },
                { v: "2", l: "Routine" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div
                    className="text-[14px] font-sans font-semibold tabular-nums leading-none"
                    style={{ color: "#0B2218" }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="text-[6.5px] uppercase tracking-[0.16em] mt-0.5 font-sans"
                    style={{ color: "#5C7867" }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer: AI badge */}
            <div className="mt-auto pt-3 flex items-end justify-between">
              <div>
                <div
                  className="text-[7px] tracking-[0.22em] uppercase font-sans"
                  style={{ color: "#5C7867" }}
                >
                  Intake
                </div>
                <div
                  className="text-[10.5px] font-sans mt-0.5"
                  style={{ color: "#0B2218" }}
                >
                  6 of 7 automated
                </div>
              </div>
              <span
                className="text-[7px] uppercase tracking-[0.20em] px-1.5 py-1 rounded-sm font-sans font-semibold"
                style={{
                  background: "rgba(6,95,70,0.12)",
                  color: "#065F46",
                  border: "1px solid rgba(6,95,70,0.30)",
                }}
              >
                AI prepared
              </span>
            </div>
          </div>
        </m.div>
      </div>

      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
        <span className="text-emerald-300/70 text-[10px] tracking-[0.28em] uppercase font-semibold">
          Serō · Today
        </span>
        <span className="text-emerald-300/40 text-[10px] tabular-nums">
          ·  400+ patients / mo
        </span>
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
