"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

/**
 * Lazy-loads framer-motion's DOM animation feature bundle (~18KB)
 * instead of the full motion API (~100KB).
 * All client components in the tree should use `m.div`, `m.span`, etc.
 * instead of `motion.div`, `motion.span`, etc.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      {children}
    </LazyMotion>
  );
}
