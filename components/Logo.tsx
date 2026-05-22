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
  showSuffix?: boolean;
  variant?: "white" | "black";
};

export function Logo({
  size = 28,
  animated = false,
  href = "/",
  className = "",
  showSuffix = true,
  variant = "white",
}: Props) {
  const width = Math.round(size * SVG_ASPECT);
  const suffixFontSize = Math.max(10, Math.round(size * 0.55));
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

  const suffixColor = variant === "black" ? "#888" : "#fff";
  const suffix = showSuffix ? (
    <span
      className="font-light tracking-tight"
      style={{
        fontSize: suffixFontSize,
        lineHeight: 1,
        color: suffixColor,
        opacity: 0.5,
      }}
    >
      ai
    </span>
  ) : null;

  const inner = (
    <span
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-label="Flowtix AI"
    >
      {mark}
      {suffix}
    </span>
  );

  if (!href) return inner;
  return (
    <Link
      href={href}
      className="inline-flex items-center"
      aria-label="Flowtix AI home"
    >
      {inner}
    </Link>
  );
}
