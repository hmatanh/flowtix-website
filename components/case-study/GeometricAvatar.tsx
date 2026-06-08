"use client";

/**
 * GeometricAvatar - gradient circle with stylized initials.
 * Reads as professional / quietly designed instead of a stock headshot.
 */
type Props = {
  name: string; // e.g. "Sarah Moran" → "SM"
  size?: number;
  gradient?: [string, string];
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function GeometricAvatar({
  name,
  size = 48,
  gradient = ["#1f2937", "#0b1220"],
}: Props) {
  const ini = initials(name);
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center rounded-full shrink-0 select-none"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <span
        style={{
          fontSize: Math.round(size * 0.36),
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.85)",
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          lineHeight: 1,
        }}
      >
        {ini}
      </span>
    </span>
  );
}
