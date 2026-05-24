"use client";

import { type Project } from "@/lib/projects";
import {
  ProjectPageLayout,
  type ProjectPageContent,
} from "@/components/projects/ProjectPageLayout";
import { ScreenDashboard } from "@/components/clients/kova/ScreenDashboard";
import { ScreenMatching } from "@/components/clients/kova/ScreenMatching";
import { ScreenCRM } from "@/components/clients/kova/ScreenCRM";
import { InteractiveTour } from "@/components/clients/kova/InteractiveTour";

const CONTENT: ProjectPageContent = {
  heroHeadline:
    "How we turned 12 agents into a team of 50 — with AI.",
  keyMetric: "Lead response time: 4 hours → 4 minutes",

  statementStats: [
    { value: 4, suffix: " min", label: "Lead response (from 4 hrs)" },
    { value: 3, suffix: "×", label: "Property matches per agent" },
    { value: 0, suffix: " hrs", label: "Weekly manual email time" },
    { value: 94, suffix: "%", label: "Average match accuracy" },
  ],

  challenge: {
    quote:
      "Twelve agents drowning in unanswered leads, no shared memory of who-said-what, and a pipeline kept alive by Post-it notes.",
    paragraphs: [
      "Kova's founder grew a 12-agent real estate office that was leaking deals the same way every week: leads came in through six different forms, agents responded whenever they happened to refresh their phone, and the highest-value buyers usually fell through the cracks because nobody knew their preferences three weeks after the first conversation.",
      "There was already plenty of software — three CRMs, a spreadsheet, a WhatsApp group, and a Drive folder of property listings nobody ever opened twice. The problem wasn't tools. It was that the tools didn't think like agents do.",
    ],
  },
  solution: {
    quote:
      "We built one calm dashboard, one AI that reads listings the way buyers read them, and one workflow that follows up without anyone touching a keyboard.",
    paragraphs: [
      "Instead of replacing the team with AI, we built systems that handle the parts agents hated and freed them to do the part they were hired for: building relationships.",
      "Every new lead is greeted in under four minutes by an AI that already knows the matching properties. Every property update gets routed to the right buyer automatically. Every conversation is summarized into the CRM so any agent can pick up where another left off.",
    ],
  },
  whatWeBuilt: [
    {
      number: "01",
      title: "AI Property Matching Engine",
      body:
        "Claude reads new listings the moment they hit the MLS, scores them against each active buyer's full preference profile, and only pings the agent when the match crosses 80%. Quiet by default — loud only when it matters.",
      visual: <ScreenMatching />,
      visualType: "desktop",
      url: "app.kova.co/matching",
    },
    {
      number: "02",
      title: "Always-on Lead Response",
      body:
        "Every form submission triggers a personal-feeling reply within four minutes, generated from the agent's voice and the buyer's stated criteria. Hand-off to a human happens at exactly the right moment.",
      visual: <ScreenCRM />,
      visualType: "desktop",
      url: "app.kova.co/crm",
    },
    {
      number: "03",
      title: "Unified Agent Dashboard",
      body:
        "The home screen every morning: pipeline, hot matches, follow-ups due, the three buyers most likely to close this week. One source of truth, not six tabs.",
      visual: <ScreenDashboard />,
      visualType: "desktop",
      url: "app.kova.co",
    },
  ],

  fullBleed: {
    visual: <ScreenDashboard />,
    type: "desktop",
    url: "app.kova.co",
    caption: "The Kova agent dashboard — in production since Q1 2025",
  },

  gallery: [
    {
      id: "dashboard",
      name: "Agent dashboard",
      description:
        "Pipeline, hot matches, follow-ups due, AI suggestions — one calm view.",
      visual: <ScreenDashboard />,
      type: "desktop",
      url: "app.kova.co",
      primary: true,
    },
    {
      id: "matching",
      name: "AI matching",
      description: "Listings scored against each buyer's full preference profile.",
      visual: <ScreenMatching />,
      type: "desktop",
      url: "app.kova.co/matching",
    },
    {
      id: "crm",
      name: "Lead CRM",
      description:
        "Every conversation summarized; AI-drafted follow-ups one tap away.",
      visual: <ScreenCRM />,
      type: "desktop",
      url: "app.kova.co/crm",
    },
  ],

  process: [
    {
      number: "1 / 3",
      title: "Listening at the desk",
      body:
        "Two weeks shadowing agents — their actual day, not the brochure version. We mapped the seventeen tools they touched and the four moments that mattered.",
      duration: "Weeks 1–2",
    },
    {
      number: "2 / 3",
      title: "Designing one quiet system",
      body:
        "Brand identity, dashboard architecture, AI prompts, automation flows — designed in parallel so nothing felt bolted on. Agents reviewed every screen before we built it.",
      duration: "Weeks 2–4",
    },
    {
      number: "3 / 3",
      title: "Building, training, going live",
      body:
        "Built in the open with daily preview links, trained the team across three short sessions, then a 30-day optimization window where we tuned every prompt with real lead data.",
      duration: "Weeks 4–6",
    },
  ],

  testimonialFull:
    "Flowtix didn't just build us a tool — they understood the chaos of a real estate office and designed something that actually fits how agents think and work. The whole team uses it daily without being asked to, which is the only metric that matters.",
  testimonialRole: "Founder · Kova",
};

export function KovaView({ project }: { project: Project }) {
  return (
    <ProjectPageLayout
      project={project}
      content={CONTENT}
      afterGallery={<InteractiveTour />}
    />
  );
}
