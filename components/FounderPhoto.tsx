"use client";

import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * FounderPhoto — cinematic founder portrait with orbiting motion,
 * brand-glow aura, parallax tilt on desktop, and effects that still
 * feel alive on mobile.
 *
 * The photo lives at `/public/images/founder.jpg`. If missing the SVG
 * placeholder is shown.
 */

type Props = {
  src?: string;
  className?: string;
};

const BLUE_RGB = "59, 130, 246";

export function FounderPhoto({
  src = "/images/founder.jpg",
  className = "",
}: Props) {
  // -------------------- Mouse parallax (desktop only) --------------------
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.4 });
  const rotY = useTransform(sx, [-1, 1], [-7, 7]);
  const rotX = useTransform(sy, [-1, 1], [6, -6]);
  const layerShift = useTransform(sx, [-1, 1], [-10, 10]);
  const layerShiftY = useTransform(sy, [-1, 1], [-10, 10]);

  const [isCoarse, setIsCoarse] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    setIsCoarse(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsCoarse(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (isCoarse) return;
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    mx.set(px * 2);
    my.set(py * 2);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={wrapRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`founder-photo-wrap relative mx-auto select-none ${className}`}
      style={{
        width: "min(480px, 100%)",
        height: 580,
        perspective: 1400,
      }}
      aria-hidden="true"
    >
      {/* =================================================================
          Brand-glow aura — soft blue radial pulse behind everything
          ================================================================= */}
      <m.span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 540,
          height: 540,
          background: `radial-gradient(circle, rgba(${BLUE_RGB}, 0.22) 0%, rgba(${BLUE_RGB}, 0.06) 38%, transparent 70%)`,
          filter: "blur(36px)",
        }}
        animate={{
          opacity: [0.55, 0.95, 0.55],
          scale: [0.94, 1.04, 0.94],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Secondary, smaller cyan halo */}
      <m.span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 320,
          height: 320,
          background: `radial-gradient(circle, rgba(56, 189, 248, 0.18), transparent 70%)`,
          filter: "blur(24px)",
          mixBlendMode: "screen",
        }}
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* =================================================================
          Rotating concentric rings with brand-color tint
          ================================================================= */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none founder-ring founder-ring-1"
        style={{
          width: 460,
          height: 460,
          border: `1px dashed rgba(${BLUE_RGB}, 0.18)`,
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none founder-ring founder-ring-2"
        style={{
          width: 360,
          height: 360,
          border: `1px solid rgba(255,255,255,0.05)`,
          boxShadow: `inset 0 0 30px rgba(${BLUE_RGB}, 0.08)`,
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none founder-ring founder-ring-3"
        style={{
          width: 260,
          height: 260,
          border: `1px solid rgba(${BLUE_RGB}, 0.14)`,
        }}
      />

      {/* =================================================================
          Orbit particles — small dots traveling along each ring
          ================================================================= */}
      <OrbitParticle size={460} delay={0} color={`rgba(${BLUE_RGB}, 0.95)`} dur={18} />
      <OrbitParticle size={460} delay={6} color={`rgba(${BLUE_RGB}, 0.7)`} dur={18} />
      <OrbitParticle size={460} delay={12} color={`rgba(125, 211, 252, 0.9)`} dur={18} />
      <OrbitParticle size={360} delay={0} color={`rgba(${BLUE_RGB}, 0.85)`} dur={13} reverse />
      <OrbitParticle size={360} delay={6.5} color={`rgba(125, 211, 252, 0.8)`} dur={13} reverse />
      <OrbitParticle size={260} delay={0} color={`rgba(${BLUE_RGB}, 1)`} dur={9} />
      <OrbitParticle size={260} delay={4.5} color={`rgba(255,255,255,0.6)`} dur={9} />

      {/* =================================================================
          Photo container — tilted on cursor parallax, scan line inside
          ================================================================= */}
      <m.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden"
        style={{
          width: "min(300px, 72vw)",
          height: "min(380px, 92vw)",
          background:
            "linear-gradient(135deg, #0B0F1A 0%, #11131A 100%)",
          boxShadow:
            `0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(${BLUE_RGB}, 0.18), 0 0 60px rgba(${BLUE_RGB}, 0.18)`,
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top edge highlight */}
        <span
          className="absolute top-0 left-6 right-6 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Matan Hanasav, Founder of Flowtix"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/founder.svg";
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(85%) contrast(1.12) brightness(0.92)",
            mixBlendMode: "luminosity",
          }}
        />

        {/* Animated horizontal scan line */}
        <m.span
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, rgba(${BLUE_RGB}, 0.6), rgba(125, 211, 252, 0.9), rgba(${BLUE_RGB}, 0.6), transparent)`,
            boxShadow: `0 0 12px rgba(${BLUE_RGB}, 0.6)`,
            mixBlendMode: "screen",
          }}
          initial={{ top: 0, opacity: 0 }}
          animate={{ top: ["0%", "100%", "0%"], opacity: [0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft vignette */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{
            background:
              `radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.65) 100%)`,
          }}
        />

        {/* Brand corner tick */}
        <span
          className="absolute top-3 left-3 pointer-events-none"
          style={{
            width: 14,
            height: 14,
            borderTop: `1.5px solid rgba(${BLUE_RGB}, 0.6)`,
            borderLeft: `1.5px solid rgba(${BLUE_RGB}, 0.6)`,
          }}
        />
        <span
          className="absolute bottom-3 right-3 pointer-events-none"
          style={{
            width: 14,
            height: 14,
            borderBottom: `1.5px solid rgba(${BLUE_RGB}, 0.6)`,
            borderRight: `1.5px solid rgba(${BLUE_RGB}, 0.6)`,
          }}
        />
      </m.div>

      {/* =================================================================
          Floating tech chips — parallax-shifted, premium glass look
          ================================================================= */}
      <m.div
        className="absolute pointer-events-none"
        style={{
          top: 36,
          left: -8,
          x: layerShift,
          y: useTransform(layerShiftY, (v) => -v * 0.6),
        }}
      >
        <m.span
          className="block rounded-full font-mono backdrop-blur-sm"
          style={{
            background: "rgba(13, 13, 13, 0.75)",
            border: `1px solid rgba(${BLUE_RGB}, 0.25)`,
            padding: "5px 12px",
            color: "#7DD3FC",
            fontSize: 10,
            letterSpacing: 1,
            boxShadow: `0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(${BLUE_RGB}, 0.18)`,
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{ color: "#3B82F6" }}>●</span> &nbsp;Claude API
        </m.span>
      </m.div>

      <m.div
        className="absolute pointer-events-none"
        style={{
          bottom: 88,
          right: -10,
          x: useTransform(layerShift, (v) => -v),
          y: layerShiftY,
        }}
      >
        <m.span
          className="block rounded-full font-mono backdrop-blur-sm"
          style={{
            background: "rgba(13, 13, 13, 0.75)",
            border: `1px solid rgba(${BLUE_RGB}, 0.25)`,
            padding: "5px 12px",
            color: "#93C5FD",
            fontSize: 10,
            letterSpacing: 1,
            boxShadow: `0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(${BLUE_RGB}, 0.18)`,
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <span style={{ color: "#3B82F6" }}>◆</span> &nbsp;AI Systems
        </m.span>
      </m.div>

      <m.div
        className="absolute pointer-events-none"
        style={{
          top: 220,
          right: -4,
          x: layerShift,
          y: useTransform(layerShiftY, (v) => v * 0.5),
        }}
      >
        <m.span
          className="block rounded-full font-mono backdrop-blur-sm"
          style={{
            background: "rgba(13, 13, 13, 0.75)",
            border: `1px solid rgba(${BLUE_RGB}, 0.18)`,
            padding: "4px 10px",
            color: "#BFDBFE",
            fontSize: 10,
            letterSpacing: 1,
            boxShadow: `0 6px 18px rgba(0,0,0,0.4)`,
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          n8n · Next.js
        </m.span>
      </m.div>

      {/* =================================================================
          Neural node cluster — connected nodes with traveling pulse
          ================================================================= */}
      <m.svg
        className="absolute pointer-events-none"
        style={{
          top: 24,
          right: 14,
          x: useTransform(layerShift, (v) => v * 0.6),
        }}
        width="84"
        height="62"
        viewBox="0 0 84 62"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="nnGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={`rgba(${BLUE_RGB}, 0.6)`} />
            <stop offset="100%" stopColor="rgba(125, 211, 252, 0.4)" />
          </linearGradient>
        </defs>
        <line x1="10" y1="14" x2="42" y2="30" stroke="url(#nnGrad)" strokeWidth="0.8" />
        <line x1="42" y1="30" x2="74" y2="10" stroke="url(#nnGrad)" strokeWidth="0.8" />
        <line x1="42" y1="30" x2="74" y2="52" stroke="url(#nnGrad)" strokeWidth="0.8" />
        <m.circle
          cx="10"
          cy="14"
          r="3.5"
          fill={`rgba(${BLUE_RGB}, 0.35)`}
          stroke={`rgba(${BLUE_RGB}, 0.6)`}
          strokeWidth="0.6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.circle
          cx="42"
          cy="30"
          r="4"
          fill={`rgba(${BLUE_RGB}, 0.4)`}
          stroke={`rgba(${BLUE_RGB}, 0.8)`}
          strokeWidth="0.8"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <m.circle
          cx="74"
          cy="10"
          r="3.5"
          fill="rgba(125, 211, 252, 0.4)"
          stroke="rgba(125, 211, 252, 0.7)"
          strokeWidth="0.6"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <m.circle
          cx="74"
          cy="52"
          r="3.5"
          fill="rgba(125, 211, 252, 0.4)"
          stroke="rgba(125, 211, 252, 0.7)"
          strokeWidth="0.6"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </m.svg>

      {/* =================================================================
          Binary streams
          ================================================================= */}
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 80,
          left: 6,
          fontSize: 10,
          color: `rgba(${BLUE_RGB}, 0.55)`,
          letterSpacing: 1.5,
        }}
        animate={{ x: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        10110
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          bottom: 140,
          left: -4,
          fontSize: 10,
          color: `rgba(125, 211, 252, 0.5)`,
          letterSpacing: 1.5,
        }}
        animate={{ x: [0, -6, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      >
        01001
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 320,
          right: 0,
          fontSize: 10,
          color: `rgba(${BLUE_RGB}, 0.45)`,
          letterSpacing: 1.5,
        }}
        animate={{ x: [0, 4, 0], y: [0, -4, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
      >
        11010
      </m.span>

      {/* =================================================================
          Pulsing circuit node (left mid)
          ================================================================= */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 250, left: 12 }}
      >
        <span
          className="block rounded-full"
          style={{
            width: 10,
            height: 10,
            background: `rgba(${BLUE_RGB}, 0.85)`,
            boxShadow: `0 0 12px rgba(${BLUE_RGB}, 0.6)`,
          }}
        />
        <m.span
          className="absolute rounded-full"
          style={{
            top: -10,
            left: -10,
            width: 30,
            height: 30,
            border: `1px solid rgba(${BLUE_RGB}, 0.4)`,
          }}
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.span
          className="absolute rounded-full"
          style={{
            top: -10,
            left: -10,
            width: 30,
            height: 30,
            border: `1px solid rgba(125, 211, 252, 0.3)`,
          }}
          animate={{ scale: [1, 2.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
        />
      </div>

      {/* =================================================================
          Sparkle dots — twinkling stars
          ================================================================= */}
      {[
        { top: 52, left: 92, delay: 0, dur: 3 },
        { top: 120, right: 64, delay: 0.6, dur: 4 },
        { top: 340, left: 36, delay: 1.2, dur: 2.5 },
        { bottom: 110, left: 124, delay: 1.8, dur: 3.5 },
        { bottom: 22, right: 96, delay: 2.4, dur: 4.5 },
        { top: 200, right: 48, delay: 3, dur: 3 },
        { top: 380, right: 30, delay: 1, dur: 3.2 },
        { top: 96, left: 168, delay: 2, dur: 3.8 },
      ].map((d, i) => (
        <m.span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            ...d,
            width: 4,
            height: 4,
            background: `rgba(${BLUE_RGB}, 0.85)`,
            boxShadow: `0 0 8px rgba(${BLUE_RGB}, 0.7)`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{
            duration: d.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}

      {/* =================================================================
          Code brackets — slowly rotating decorative glyphs
          ================================================================= */}
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 6,
          left: 28,
          fontSize: 16,
          color: `rgba(${BLUE_RGB}, 0.45)`,
        }}
        animate={{ rotate: [0, 10, -10, 0], y: [0, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ }"}
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          bottom: 40,
          left: 14,
          fontSize: 16,
          color: `rgba(125, 211, 252, 0.4)`,
        }}
        animate={{ rotate: [0, -8, 8, 0], y: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        {"[ ]"}
      </m.span>
      <m.span
        className="absolute font-mono pointer-events-none"
        style={{
          top: 420,
          right: 24,
          fontSize: 16,
          color: `rgba(${BLUE_RGB}, 0.4)`,
        }}
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        {"< >"}
      </m.span>

      {/* =================================================================
          Keyframes
          ================================================================= */}
      {/* Global keyframes — needed because OrbitParticle references them via inline style */}
      <style jsx global>{`
        @keyframes founderRingSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes founderRingSpinReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to   { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes founderOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes founderOrbitReverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        .founder-ring-1 {
          animation: founderRingSpin 38s linear infinite;
          will-change: transform;
        }
        .founder-ring-2 {
          animation: founderRingSpinReverse 26s linear infinite;
          will-change: transform;
        }
        .founder-ring-3 {
          animation: founderRingSpin 18s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .founder-ring-1,
          .founder-ring-2,
          .founder-ring-3,
          .founder-photo-wrap * {
            animation-duration: 0s !important;
            transition-duration: 0s !important;
          }
        }
      `}</style>
    </div>
  );
}

/* =====================================================================
   OrbitParticle — a small dot orbiting at a given radius
   ===================================================================== */

function OrbitParticle({
  size,
  delay,
  color,
  dur,
  reverse = false,
}: {
  size: number;
  delay: number;
  color: string;
  dur: number;
  reverse?: boolean;
}) {
  // We rotate a wrapper around center; the dot sits offset on +X axis
  // so rotation traces the ring at radius = size / 2.
  return (
    <span
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        animation: `${reverse ? "founderOrbitReverse" : "founderOrbit"} ${dur}s linear infinite`,
        animationDelay: `-${delay}s`,
        transformOrigin: "center",
      }}
    >
      <span
        className="absolute rounded-full"
        style={{
          top: "50%",
          right: 0,
          transform: "translate(50%, -50%)",
          width: 6,
          height: 6,
          background: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        }}
      />
    </span>
  );
}
