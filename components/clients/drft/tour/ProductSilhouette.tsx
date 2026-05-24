"use client";

import { ORANGE, ORANGE_DEEP, type ProductKind, PRODUCT_COLORS } from "./_shared";

/**
 * Pure CSS product silhouette — abstract gear shapes that tint with color.
 * Used in product cards, the product page hero, and email previews.
 */

type Props = {
  kind: ProductKind;
  colorId?: string; // PRODUCT_COLORS id
  size?: "sm" | "md" | "lg";
};

function colorFor(colorId: string | undefined): { from: string; to: string } {
  switch (colorId) {
    case "navy":
      return { from: "#284A7A", to: "#0F1F3C" };
    case "black":
      return { from: "#3B3B3B", to: "#0B0B0B" };
    case "olive":
      return { from: "#705438", to: "#2A1F12" };
    case "orange":
    default:
      return { from: ORANGE, to: ORANGE_DEEP };
  }
}

export function ProductSilhouette({ kind, colorId = "orange", size = "md" }: Props) {
  const c = colorFor(colorId);
  const scale = size === "sm" ? 0.7 : size === "lg" ? 1.4 : 1;

  if (kind === "jacket") return <Jacket c={c} scale={scale} />;
  if (kind === "pack") return <Pack c={c} scale={scale} />;
  if (kind === "shorts") return <Shorts c={c} scale={scale} />;
  if (kind === "base") return <Base c={c} scale={scale} />;
  return null;
}

function Jacket({ c, scale }: { c: { from: string; to: string }; scale: number }) {
  const w = 96 * scale;
  const h = 112 * scale;
  return (
    <div className="relative" style={{ width: w, height: h }}>
      {/* sleeves */}
      <span
        className="absolute"
        style={{
          left: -8 * scale,
          top: 8 * scale,
          width: 22 * scale,
          height: 64 * scale,
          background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
          borderRadius: "12px 4px 18px 14px",
          transform: "rotate(-6deg)",
        }}
      />
      <span
        className="absolute"
        style={{
          right: -8 * scale,
          top: 8 * scale,
          width: 22 * scale,
          height: 64 * scale,
          background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
          borderRadius: "4px 12px 14px 18px",
          transform: "rotate(6deg)",
        }}
      />
      {/* body */}
      <span
        className="absolute left-1/2 -translate-x-1/2 top-0"
        style={{
          width: 64 * scale,
          height: h,
          background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
          borderRadius: "28px 28px 12px 12px",
        }}
      />
      {/* zipper */}
      <span
        className="absolute top-2 left-1/2 -translate-x-1/2"
        style={{
          width: 1.5,
          height: h * 0.85,
          background: "rgba(0,0,0,0.35)",
        }}
      />
      {/* collar shadow */}
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: -2,
          width: 28 * scale,
          height: 12 * scale,
          background: "rgba(0,0,0,0.3)",
          borderRadius: "999px",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}

function Pack({ c, scale }: { c: { from: string; to: string }; scale: number }) {
  const w = 72 * scale;
  const h = 96 * scale;
  return (
    <div className="relative" style={{ width: w, height: h }}>
      {/* straps */}
      <span
        className="absolute"
        style={{
          left: 4 * scale,
          top: 0,
          width: 4 * scale,
          height: h * 0.65,
          background: c.to,
          borderRadius: 4,
        }}
      />
      <span
        className="absolute"
        style={{
          right: 4 * scale,
          top: 0,
          width: 4 * scale,
          height: h * 0.65,
          background: c.to,
          borderRadius: 4,
        }}
      />
      {/* body */}
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 8 * scale,
          width: 56 * scale,
          height: h - 8 * scale,
          background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
          borderRadius: 14,
          boxShadow: "inset 0 6px 12px rgba(0,0,0,0.25)",
        }}
      />
      {/* top lid */}
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 4 * scale,
          width: 44 * scale,
          height: 16 * scale,
          background: c.to,
          borderRadius: 12,
        }}
      />
      {/* front pocket */}
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: h * 0.5,
          width: 38 * scale,
          height: 22 * scale,
          background: "rgba(0,0,0,0.25)",
          borderRadius: 8,
        }}
      />
    </div>
  );
}

function Shorts({ c, scale }: { c: { from: string; to: string }; scale: number }) {
  const w = 80 * scale;
  const h = 78 * scale;
  return (
    <div className="relative" style={{ width: w, height: h }}>
      {/* waistband */}
      <span
        className="absolute left-1/2 -translate-x-1/2 top-0"
        style={{
          width: 72 * scale,
          height: 16 * scale,
          background: c.to,
          borderRadius: "8px 8px 2px 2px",
        }}
      />
      {/* legs */}
      <span
        className="absolute left-0"
        style={{
          top: 14 * scale,
          width: 34 * scale,
          height: h - 14 * scale,
          background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
          borderRadius: "0 6px 8px 0",
          marginLeft: 4 * scale,
        }}
      />
      <span
        className="absolute right-0"
        style={{
          top: 14 * scale,
          width: 34 * scale,
          height: h - 14 * scale,
          background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
          borderRadius: "6px 0 0 8px",
          marginRight: 4 * scale,
        }}
      />
    </div>
  );
}

function Base({ c, scale }: { c: { from: string; to: string }; scale: number }) {
  const w = 88 * scale;
  const h = 100 * scale;
  return (
    <div className="relative" style={{ width: w, height: h }}>
      {/* sleeves */}
      <span
        className="absolute"
        style={{
          left: -4 * scale,
          top: 14 * scale,
          width: 24 * scale,
          height: 28 * scale,
          background: c.to,
          borderRadius: "12px 0 4px 14px",
        }}
      />
      <span
        className="absolute"
        style={{
          right: -4 * scale,
          top: 14 * scale,
          width: 24 * scale,
          height: 28 * scale,
          background: c.to,
          borderRadius: "0 12px 14px 4px",
        }}
      />
      {/* body */}
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 0,
          width: 56 * scale,
          height: h,
          background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
          borderRadius: "16px 16px 6px 6px",
        }}
      />
      {/* V-neck */}
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: -2,
          width: 0,
          height: 0,
          borderLeft: `${10 * scale}px solid transparent`,
          borderRight: `${10 * scale}px solid transparent`,
          borderTop: `${14 * scale}px solid rgba(0,0,0,0.4)`,
        }}
      />
    </div>
  );
}
