"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  blur?: boolean;
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  blur = false,
}: Props) {
  const dirs: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  };

  const initial: Record<string, number | string> = {
    opacity: 0,
    ...dirs[direction],
  };
  const whileInView: Record<string, number | string> = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  if (blur) {
    initial.filter = "blur(10px)";
    whileInView.filter = "blur(0px)";
  }

  return (
    <m.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </m.div>
  );
}
