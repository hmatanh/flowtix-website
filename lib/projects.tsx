export type ProjectTag =
  | "Brand & Design"
  | "AI Systems"
  | "Web Development"
  | "Automation"
  | "Internal Tools";

export type Brand = {
  primary: string;
  dark: string;
  card: string;
  border: string;
  textOnBrand: string;
  accentRGB: string; // "14, 165, 233"
};

export type Project = {
  slug: string;
  name: string;
  displayName: string; // styling differences (SERŌ, AURUM all caps, etc.)
  tagline: string;
  year: string;
  industry: string;
  category: string;
  tags: ProjectTag[];
  description: string;
  brand: Brand;
  services: string[];
  stack: string[];
  duration: string;
  teamLine: string;
  results: { value: string; label: string }[];
  testimonial: { quote: string; attribution: string };
  what: string[]; // what was built
};

export const projects: Project[] = [
  {
    slug: "kova",
    name: "Kova",
    displayName: "kova",
    tagline: "Intelligent Real Estate, Reimagined",
    year: "2025",
    industry: "PropTech · Real Estate",
    category: "Brand & AI System",
    tags: ["Brand & Design", "AI Systems", "Automation", "Web Development"],
    description:
      "Complete brand identity, AI-powered property matching engine, CRM automation, and agent dashboard for a 12-agent real estate office.",
    brand: {
      primary: "#0EA5E9",
      dark: "#0C1A2E",
      card: "#0D1F38",
      border: "rgba(14,165,233,0.15)",
      textOnBrand: "#BAE6FD",
      accentRGB: "14, 165, 233",
    },
    services: [
      "Brand Identity",
      "AI Agent",
      "CRM Automation",
      "Dashboard Design",
      "Web Development",
    ],
    stack: [
      "Next.js",
      "Claude API",
      "n8n",
      "Figma",
      "Framer",
      "TypeScript",
    ],
    duration: "6 weeks",
    teamLine: "12 agents",
    what: [
      "Complete brand identity — logo, colors, typography, design system",
      "AI property matching engine that learns buyer preferences and scores listings automatically",
      "CRM automation with AI-written follow-up emails based on viewed properties",
      "Agent dashboard with unified view of leads, properties, and AI recommendations",
      "Marketing website with smart property search UI",
    ],
    results: [
      { value: "4 min", label: "Lead response time (from 4 hours)" },
      { value: "3×", label: "Property matches per agent" },
      { value: "0 hrs", label: "Weekly manual email time" },
    ],
    testimonial: {
      quote:
        "Flowtix didn’t just build us a tool — they understood the chaos of a real estate office and designed something that actually fits how agents think and work.",
      attribution: "Sarah Moran, Founder",
    },
  },
  {
    slug: "sero",
    name: "Serō",
    displayName: "serō",
    tagline: "Care, Simplified",
    year: "2025",
    industry: "Digital Health · MedTech",
    category: "AI Automation & Mobile UI",
    tags: ["AI Systems", "Brand & Design", "Internal Tools"],
    description:
      "Brand identity, AI patient intake automation, appointment intelligence, and practitioner mobile UI for a 6-practitioner clinic serving 400+ patients/month.",
    brand: {
      primary: "#10B981",
      dark: "#051A12",
      card: "#071F15",
      border: "rgba(16,185,129,0.15)",
      textOnBrand: "#A7F3D0",
      accentRGB: "16, 185, 129",
    },
    services: [
      "Brand Identity",
      "Mobile UI/UX",
      "AI Automation",
      "Web Portal",
      "Design System",
    ],
    stack: [
      "React Native (design)",
      "Next.js",
      "Claude API",
      "Make",
      "Figma",
    ],
    duration: "8 weeks",
    teamLine: "6 practitioners · 400+ patients/month",
    what: [
      "Soft, approachable medical brand identity",
      "AI intake automation — processes forms, extracts key info, flags urgent cases, routes by practitioner",
      "Appointment intelligence — predicts no-shows, sends smart reminders, auto-fills gaps",
      "Practitioner mobile UI with AI-prepared patient summaries",
      "Admin web portal for practice management",
    ],
    results: [
      { value: "3 min", label: "Intake processing (from 25 min)" },
      { value: "-41%", label: "No-show rate" },
      { value: "22h", label: "Admin hours saved per week" },
    ],
    testimonial: {
      quote:
        "The AI intake system alone paid for the entire project in the first month. But what really surprised us was how much our patients commented on how professional everything felt.",
      attribution: "Dr. Ames Vidal, Clinical Director",
    },
  },
  {
    slug: "aurum",
    name: "Aurum",
    displayName: "AURUM",
    tagline: "Wealth Intelligence for Discerning Clients",
    year: "2025",
    industry: "Wealth Management · Fintech",
    category: "Brand, AI Reporting & Client Portal",
    tags: ["Brand & Design", "AI Systems", "Automation"],
    description:
      "Premium brand identity, automated client reporting engine, secure client portal, AI market briefs, and advisor dashboard for a boutique wealth firm.",
    brand: {
      primary: "#D97706",
      dark: "#120D04",
      card: "#1A1206",
      border: "rgba(217,119,6,0.15)",
      textOnBrand: "#FDE68A",
      accentRGB: "217, 119, 6",
    },
    services: [
      "Brand Identity",
      "AI Reporting System",
      "Client Portal",
      "AI Automation",
      "Dashboard Design",
    ],
    stack: [
      "Next.js",
      "Claude API",
      "n8n",
      "Puppeteer (PDF)",
      "Figma",
      "TypeScript",
    ],
    duration: "7 weeks",
    teamLine: "4 advisors · 85 clients",
    what: [
      "Elevated, luxury wealth brand identity (replaced generic accounting-firm look)",
      "AI reporting engine — generates personalized 12-page branded quarterly PDFs from advisor data",
      "Secure client portal for portfolio, AI insights, reports, and meeting scheduling",
      "AI morning market briefs personalized per advisor",
      "Advisor dashboard — clients, reviews, AI alerts, and performance in one view",
    ],
    results: [
      { value: "<5 min", label: "Report creation (from 3h per client)" },
      { value: "91%", label: "Client portal adoption in 30 days" },
      { value: "8 min", label: "Advisor morning prep (from 45 min)" },
    ],
    testimonial: {
      quote:
        "Our clients now think we have a team of analysts behind us. We don’t. We have Flowtix.",
      attribution: "Eitan Shaked, Managing Partner",
    },
  },
  {
    slug: "drft",
    name: "Drft",
    displayName: "DRFT",
    tagline: "Heavy fabrics. Honest fit.",
    year: "2024",
    industry: "DTC · Fashion / Workwear",
    category: "Brand + Shopify + AI Content",
    tags: ["Brand & Design", "Web Development", "AI Systems", "Automation"],
    description:
      "Brand identity from zero, custom Shopify store, AI brand-voice content engine, and full email automation — 0 to launch in 5 weeks.",
    brand: {
      primary: "#DC2626",
      dark: "#1A0707",
      card: "#1F0808",
      border: "rgba(220, 38, 38,0.15)",
      textOnBrand: "#FECACA",
      accentRGB: "220, 38, 38",
    },
    services: [
      "Brand Identity",
      "Shopify Development",
      "AI Content System",
      "Email Automation",
      "Design System",
    ],
    stack: ["Shopify", "Claude API", "Klaviyo", "n8n", "Figma", "Framer"],
    duration: "5 weeks · 0 to launch",
    teamLine: "Founder + 2 part-time",
    what: [
      "Complete brand identity from scratch — logo, colorway, type, photography direction, packaging, guidelines",
      "Custom-built Shopify storefront with full product pages, cart, collections",
      "AI content system trained on brand voice — generates product descriptions, captions, emails, ad copy",
      "Email automation — welcome, abandoned cart, post-purchase, reorder",
      "Social media design system with templates for stories, feed, launches",
    ],
    results: [
      { value: "5 weeks", label: "Brand to launch" },
      { value: "-78%", label: "Content production time" },
      { value: "34%", label: "Email open rate (industry avg: 19%)" },
    ],
    testimonial: {
      quote:
        "We went from a product idea to a fully launched brand in 5 weeks. The AI content system is so well-trained that we genuinely can’t tell the difference between what it writes and what we’d write ourselves.",
      attribution: "Jake Ferreira, Co-Founder",
    },
  },
  {
    slug: "linx",
    name: "Linx",
    displayName: "LINX",
    tagline: "Creative Agency. Intelligently Operated.",
    year: "2024",
    industry: "Marketing & Creative Agency",
    category: "Brand Refresh + AI Internal Tools",
    tags: ["Brand & Design", "AI Systems", "Internal Tools", "Automation"],
    description:
      "Brand refresh and a full internal AI operations stack: brief intake AI, proposal AI trained on 40+ past proposals, AI reporting, and a client-facing portal.",
    brand: {
      primary: "#8B5CF6",
      dark: "#0C0814",
      card: "#120E1E",
      border: "rgba(139,92,246,0.15)",
      textOnBrand: "#DDD6FE",
      accentRGB: "139, 92, 246",
    },
    services: [
      "Brand Refresh",
      "AI Internal Tools",
      "Proposal AI",
      "Reporting Automation",
      "Client Portal",
    ],
    stack: [
      "Next.js",
      "Claude API",
      "n8n",
      "Make",
      "Framer",
      "Figma",
      "TypeScript",
    ],
    duration: "7 weeks",
    teamLine: "14 team · 23 active clients",
    what: [
      "Brand refresh — modernized identity without a full rebrand",
      "Brief intake AI — client fills simple form, AI generates full creative brief in Linx’s format",
      "Proposal AI trained on 40+ past proposals — tailored proposals in 45 minutes instead of 8 hours",
      "Reporting AI — pulls from Meta/Google/GA, generates branded monthly PDF automatically",
      "Client portal with campaign performance, report downloads, creative approvals",
      "Team dashboard with project status, deliverables, AI-flagged anomalies",
    ],
    results: [
      { value: "45 min", label: "Proposal time (from 8 hours)" },
      { value: "100%", label: "Reporting automated" },
      { value: "+3", label: "New clients won in 30 days post-refresh" },
    ],
    testimonial: {
      quote:
        "I was skeptical about AI in a creative agency — worried it would make everything feel generic. Flowtix proved the opposite. The systems they built made us faster without making us less creative.",
      attribution: "Priya Nair, CEO",
    },
  },
];

export const PROJECT_FILTERS = [
  "All",
  "Brand & Design",
  "AI Systems",
  "Web Development",
  "Automation",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
}
