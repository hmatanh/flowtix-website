"use client";

import { m } from "framer-motion";

/**
 * FounderPhoto — portrait of the founder with orbiting AI-themed motifs.
 *
 * Drop your photo at `/public/images/founder.jpg` and the component will
 * automatically pick it up. While no jpg exists, the bundled SVG placeholder
 * (`/images/founder.svg`) is used.
 */
type Props = {
  src?: string;
  className?: string;
};

export function FounderPhoto({
  src = "/images/founder.jpg",
  className = "",
}: Props) {
  return (
    <div
      className={`relative mx-auto select-none ${className}`}
      style={{ width: 440, height: 540, maxWidth: "100%" }}
      aria-hidden="true"
    >
      {/* ===== Rotating rings (CSS animation, infinite — performant) ===== */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          border: "1px solid rgba(255,255,255,0.04)",
          animation: "founderSpin 30s linear infinite",
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          border: "1px solid rgba(255,255,255,0.03)",
          animation: "founderSpinReverse 20s linear infinite",
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          border: "1px solid rgba(255,255,255,0.06)",
          animation: "founderSpin 15s linear infinite",
        }}
      />

      {/* ===== Photo container (centered) ===== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
        style={{
          width: "min(280px, 70vw)",
          height: "min(360px, 90vw)",
          background:
            "linear-gradient(135deg, #0D0D0D 0%, #111118 100%)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Founder"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/founder.svg";
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%) contrast(1.15) brightness(0.9)",
            mixBlendMode: "luminosity",
          }}
        />
        {/* Vignette fade to dark */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* ===== Neural node cluster (top-right) ===== */}
      <m.svg
        className="absolute"
        style={{ top: 30, right: 20 }}
        width="64"
        height="48"
        viewBox="0 0 64 48"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="8" y1="12" x2="32" y2="24" stroke="rgba(255,255,255,0.10)" strokeWidth="0.6" />
        <line x1="32" y1="24" x2="56" y2="8" stroke="rgba(255,255,255,0.10)" strokeWidth="0.6" />
        <line x1="32" y1="24" x2="56" y2="40" stroke="rgba(255,255,255,0.10)" strokeWidth="0.6" />
        <circle cx="8" cy="12" r="3" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
        <circle cx="32" cy="24" r="3" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
        <circle cx="56" cy="8" r="3" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
        <circle cx="56" cy="40" r="3" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
      </m.svg>

      {/* ===== Binary streams ===== */}
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 70,
          left: 8,
          fontSize: 10,
          color: "rgba(255,255,255,0.12)",
          letterSpacing: 1,
        }}
        animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        10110
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          bottom: 120,
          right: 0,
          fontSize: 10,
          color: "rgba(255,255,255,0.12)",
          letterSpacing: 1,
        }}
        animate={{ x: [0, -6, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      >
        01001
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 240,
          left: 0,
          fontSize: 10,
          color: "rgba(255,255,255,0.10)",
          letterSpacing: 1,
        }}
        animate={{ x: [0, 4, 0], y: [0, -4, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
      >
        11010
      </m.span>

      {/* ===== Circuit node (left side) — pulsing ring ===== */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 200, left: 18 }}
      >
        <span
          className="block rounded-full"
          style={{
            width: 8,
            height: 8,
            background: "rgba(255,255,255,0.30)",
          }}
        />
        <m.span
          className="absolute rounded-full"
          style={{
            top: -8,
            left: -8,
            width: 24,
            height: 24,
            border: "1px solid rgba(255,255,255,0.10)",
          }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Radiating lines */}
        <svg
          className="absolute"
          style={{ top: -8, left: -8, pointerEvents: "none" }}
          width="24"
          height="24"
        >
          <line x1="12" y1="0" x2="12" y2="-8" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
          <line x1="12" y1="24" x2="12" y2="32" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
          <line x1="0" y1="12" x2="-8" y2="12" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
          <line x1="24" y1="12" x2="32" y2="12" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ===== Code brackets ===== */}
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 18,
          left: 22,
          fontSize: 14,
          color: "rgba(255,255,255,0.10)",
        }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ }"}
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          bottom: 32,
          left: 10,
          fontSize: 14,
          color: "rgba(255,255,255,0.10)",
        }}
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        {"[ ]"}
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 380,
          right: 18,
          fontSize: 14,
          color: "rgba(255,255,255,0.10)",
        }}
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        {"< >"}
      </m.span>

      {/* ===== Tech label pills ===== */}
      <m.span
        className="absolute pointer-events-none rounded-full"
        style={{
          top: 40,
          left: -4,
          background: "#0D0D0D",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: "4px 12px",
          color: "#222",
          fontSize: 10,
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        Claude API
      </m.span>
      <m.span
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: 60,
          right: -8,
          background: "#0D0D0D",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: "4px 12px",
          color: "#222",
          fontSize: 10,
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        AI Systems
      </m.span>

      {/* ===== Sparkle dots ===== */}
      {[
        { top: 48, left: 90, delay: 0, dur: 3 },
        { top: 110, right: 60, delay: 0.6, dur: 4 },
        { top: 300, left: 32, delay: 1.2, dur: 2.5 },
        { bottom: 90, left: 110, delay: 1.8, dur: 3.5 },
        { bottom: 18, right: 95, delay: 2.4, dur: 4.5 },
        { top: 200, right: 30, delay: 3, dur: 3 },
      ].map((d, i) => (
        <m.span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            ...d,
            width: 4,
            height: 4,
            background: "rgba(255,255,255,0.30)",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
          transition={{
            duration: d.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}

      {/* CSS keyframes for the rotating rings */}
      <style jsx>{`
        @keyframes founderSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes founderSpinReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to   { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @media (max-width: 768px) {
          /* Scale the whole composition down and dim floating bits */
          :global(.founder-photo-wrap) {
            transform: scale(0.78);
            transform-origin: top center;
          }
        }
      `}</style>
    </div>
  );
}
