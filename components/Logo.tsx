"use client";

import Link from "next/link";
import { m } from "framer-motion";

// Aspect ratio of the brand wordmark SVG (viewBox 0 0 1211 231)
const SVG_ASPECT = 1211 / 231;

type Props = {
  size?: number;
  animated?: boolean;
  href?: string | null;
  className?: string;
  /** Deprecated — kept for compatibility, ignored. */
  showSuffix?: boolean;
  variant?: "white" | "black";
};

export function Logo({
  size = 28,
  animated = false,
  href = "/",
  className = "",
  variant = "white",
}: Props) {
  const width = Math.round(size * SVG_ASPECT);
  const src =
    variant === "black"
      ? "/flowtix-wordmark-black.svg"
      : "/flowtix-wordmark-white.svg";

  const imgEl = (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt="Flowtix"
      width={width}
      height={size}
      draggable={false}
      style={{ height: size, width: "auto", display: "block" }}
    />
  );

  const mark = animated ? (
    <m.span
      initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {imgEl}
    </m.span>
  ) : (
    imgEl
  );

  const inner = (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="Flowtix"
    >
      {mark}
    </span>
  );

  if (!href) return inner;
  return (
    <Link
      href={href}
      className="inline-flex items-center"
      aria-label="Flowtix home"
    >
      {inner}
    </Link>
  );
}
