/**
 * Shared client list + helpers for the AURUM interactive tour.
 * Keeping this in one place so every screen renders the same data.
 */

export const GOLD = "#D97706";
export const GOLD_SOFT = "#8B6A2A";
export const GOLD_DEEP = "#4a3010";
export const BORDER = "#2A1D06";
export const BORDER_SOFT = "#1A1206";
export const SURFACE = "#0D0904";
export const SURFACE_DEEP = "#0A0602";

export type Client = {
  id: string;
  name: string;
  value: string; // formatted
  rawValue: string; // detailed
  ytdReturn: string;
  vsBenchmark: string;
  change: string;
  changePositive: boolean;
  account: string;
};

export const CLIENTS: Client[] = [
  { id: "anderson", name: "Jonathan Anderson", value: "$2.47M", rawValue: "$2,467,320", ytdReturn: "11.7%", vsBenchmark: "+3.5%", change: "↑ 2.25%", changePositive: true, account: "●●●●7842" },
  { id: "williams", name: "Eleanor Williams", value: "$5.80M", rawValue: "$5,802,140", ytdReturn: "10.4%", vsBenchmark: "+2.2%", change: "↑ 1.87%", changePositive: true, account: "●●●●3119" },
  { id: "park", name: "Daniel Park", value: "$1.20M", rawValue: "$1,204,890", ytdReturn: "13.2%", vsBenchmark: "+5.0%", change: "↑ 3.10%", changePositive: true, account: "●●●●5076" },
  { id: "chen", name: "Wei Chen", value: "$8.40M", rawValue: "$8,418,720", ytdReturn: "9.1%", vsBenchmark: "+0.9%", change: "↑ 0.92%", changePositive: true, account: "●●●●2284" },
  { id: "rodriguez", name: "Sofía Rodriguez", value: "$3.10M", rawValue: "$3,094,510", ytdReturn: "7.8%", vsBenchmark: "−0.4%", change: "↓ 0.30%", changePositive: false, account: "●●●●8841" },
  { id: "nakamura", name: "Akira Nakamura", value: "$12.80M", rawValue: "$12,807,260", ytdReturn: "10.9%", vsBenchmark: "+2.7%", change: "↑ 1.45%", changePositive: true, account: "●●●●4453" },
  { id: "okonkwo", name: "Chidi Okonkwo", value: "$4.20M", rawValue: "$4,212,030", ytdReturn: "12.5%", vsBenchmark: "+4.3%", change: "↑ 2.80%", changePositive: true, account: "●●●●9907" },
  { id: "bellmont", name: "Ava Bellmont", value: "$0.89M", rawValue: "$891,440", ytdReturn: "14.6%", vsBenchmark: "+6.4%", change: "↑ 4.10%", changePositive: true, account: "●●●●6618" },
];

export function findClient(id: string): Client {
  return CLIENTS.find((c) => c.id === id) ?? CLIENTS[0];
}

export type ChartPeriod = "1W" | "1M" | "3M" | "YTD" | "1Y" | "ALL";

/** Smooth performance curve per period (normalized 0..1) */
export const CHART_SERIES: Record<ChartPeriod, number[]> = {
  "1W":  [0.92, 0.93, 0.94, 0.94, 0.96, 0.98, 1.00],
  "1M":  [0.84, 0.85, 0.87, 0.86, 0.89, 0.91, 0.93, 0.94, 0.96, 0.98, 0.99, 1.00],
  "3M":  [0.78, 0.80, 0.83, 0.85, 0.82, 0.85, 0.87, 0.86, 0.89, 0.92, 0.95, 0.94, 0.97, 0.99, 1.00],
  "YTD": [0.78, 0.80, 0.82, 0.79, 0.83, 0.85, 0.86, 0.89, 0.92, 0.95, 0.97, 1.00],
  "1Y":  [0.66, 0.68, 0.72, 0.70, 0.74, 0.77, 0.79, 0.78, 0.82, 0.85, 0.87, 0.89, 0.91, 0.94, 0.97, 1.00],
  "ALL": [0.50, 0.54, 0.58, 0.56, 0.61, 0.65, 0.69, 0.66, 0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.90, 0.93, 0.96, 1.00],
};

export const PERIOD_LABELS: Record<ChartPeriod, string[]> = {
  "1W": ["Mon", "Tue", "Wed", "Thu", "Fri"],
  "1M": ["Wk1", "Wk2", "Wk3", "Wk4"],
  "3M": ["Mar", "Apr", "May"],
  "YTD": ["Jan", "Feb", "Mar", "Apr", "May"],
  "1Y": ["Q2'24", "Q3'24", "Q4'24", "Q1'25"],
  "ALL": ["2022", "2023", "2024", "2025"],
};
