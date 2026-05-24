/**
 * LINX interactive tour — shared theme tokens + client data.
 * Smart agency editorial: violet on near-black with deep violet accents.
 */

export const VIOLET = "#8B5CF6";
export const VIOLET_SOFT = "#A78BFA";
export const SHELL = "#080612";
export const SURFACE = "#0C0814";
export const SURFACE_CARD = "#12102A";
export const BORDER = "#1A1535";
export const BORDER_SOFT = "#0E0B1F";
export const TEXT = "#6b5a8a";
export const TEXT_DIM = "#3a2a6a";
export const TEXT_FAINT = "#1A1535";

export type AgencyClient = {
  id: string;
  name: string;
  type: string;
  rate: string;
  rateValue: number;
  status: "active" | "review" | "pause";
  since: string;
  pages?: number;
};

export const CLIENTS: AgencyClient[] = [
  { id: "brew",     name: "Brew Republic",  type: "Brand Campaign",      rate: "$7,500/mo",  rateValue: 7500,  status: "active", since: "Feb 2025", pages: 8 },
  { id: "nordflex", name: "NordFlex",       type: "Performance",         rate: "$12,000/mo", rateValue: 12000, status: "active", since: "Nov 2024", pages: 12 },
  { id: "starfall", name: "Starfall Drinks", type: "Social Media",       rate: "$5,500/mo",  rateValue: 5500,  status: "active", since: "Jan 2025", pages: 6 },
  { id: "luminary", name: "Luminary Labs",  type: "Full Retainer",       rate: "$9,000/mo",  rateValue: 9000,  status: "review", since: "Oct 2024", pages: 10 },
  { id: "vanta",    name: "Vanta Studio",   type: "Content",             rate: "$4,000/mo",  rateValue: 4000,  status: "active", since: "Mar 2025", pages: 5 },
  { id: "meridia",  name: "Meridia Finance", type: "Strategy",           rate: "$8,500/mo",  rateValue: 8500,  status: "active", since: "Sep 2024", pages: 9 },
  { id: "basecamp", name: "BaseCamp Retail", type: "Brand",              rate: "$6,000/mo",  rateValue: 6000,  status: "active", since: "Apr 2025", pages: 7 },
  { id: "novu",     name: "Novu Health",    type: "Social",              rate: "$3,500/mo",  rateValue: 3500,  status: "pause",  since: "Dec 2024", pages: 4 },
];

export function findClient(id: string): AgencyClient {
  return CLIENTS.find((c) => c.id === id) ?? CLIENTS[0];
}
