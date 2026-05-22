"use client";

import { m } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glowColor?: string;
};

export function GlowCard({
  children,
  className = "",
  glowColor = "59, 130, 246",
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <m.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(${glowColor}, 0.12) 0%, transparent 60%)`,
        }}
      />
      <div className="relative">{children}</div>
    </m.div>
  );
}
