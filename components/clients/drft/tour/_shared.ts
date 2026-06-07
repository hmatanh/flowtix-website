/**
 * Shared theme + data for the DRFT interactive tour.
 * Bold consumer brand: orange #DC2626 on near-black surfaces.
 */

export const ORANGE = "#DC2626";
export const ORANGE_DEEP = "#7c3a00";
export const TEXT_BRAND = "#8B5E2A";
export const TEXT_DIM = "#4a2808";
export const TEXT_FAINT = "#2A1505";
export const SURFACE = "#1A0707";
export const SURFACE_CARD = "#1F0808";
export const SHELL = "#0A0602";
export const BORDER = "#1F0808";
export const BORDER_HARD = "#2A1505";

export type ColorOption = { id: string; label: string; hex: string };

export const PRODUCT_COLORS: ColorOption[] = [
  { id: "navy", label: "Navy", hex: "#1E3A5F" },
  { id: "black", label: "Black", hex: "#111111" },
  { id: "olive", label: "Olive", hex: "#4A3728" },
  { id: "orange", label: "Burnt Orange", hex: "#DC2626" },
];

export type ProductKind = "jacket" | "pack" | "shorts" | "base";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  kind: ProductKind;
  badge?: "selling" | "new" | "low";
};

export const PRODUCTS: Product[] = [
  { id: "trail-jacket", name: "Trail Series Jacket", subtitle: "Water-resistant · Packable", price: 189, kind: "jacket", badge: "selling" },
  { id: "summit-pack", name: "Summit Pack 28L", subtitle: "Trail-tested", price: 145, kind: "pack" },
  { id: "trail-shorts", name: "Trail Shorts", subtitle: "Stretch · Pocketed", price: 78, kind: "shorts", badge: "new" },
  { id: "base-tee", name: "Base Layer Tee", subtitle: "Merino · Featherweight", price: 64, kind: "base" },
  { id: "shell-jacket", name: "Shell Series Jacket", subtitle: "3-layer · Storm-grade", price: 248, kind: "jacket" },
  { id: "day-pack", name: "Day Pack 14L", subtitle: "Light · Hauler", price: 98, kind: "pack", badge: "low" },
];
