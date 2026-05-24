"use client";

import { type Project } from "@/lib/projects";
import {
  ProjectPageLayout,
  type ProjectPageContent,
} from "@/components/projects/ProjectPageLayout";
import { ScreenProposal } from "@/components/clients/linx/ScreenProposal";
import { ScreenDashboard } from "@/components/clients/linx/ScreenDashboard";
import { ScreenReport } from "@/components/clients/linx/ScreenReport";
import { InteractiveTour } from "@/components/clients/linx/InteractiveTour";

const CONTENT: ProjectPageContent = {
  heroHeadline:
    "A creative agency that stopped working nights.",
  keyMetric: "Proposals: 8 hours → 45 minutes",

  statementStats: [
    { value: 89, suffix: "%", label: "Less time per proposal" },
    { value: 4, suffix: " / 4", label: "Reports shipped on time every week" },
    { value: 23, label: "Active clients (was 14)" },
    { value: 6, suffix: " hrs", label: "Reclaimed nightly per partner" },
  ],

  challenge: {
    quote:
      "A nine-person agency producing genuinely creative work — at the cost of two partners working until midnight three nights a week.",
    paragraphs: [
      "Linx was the kind of agency clients fight over: small, sharp, the work always interesting, the relationships always close. The price the founding partners were paying for that quality was their evenings, their weekends, and — they were beginning to suspect — their ability to scale beyond fourteen clients.",
      "Every new business cycle meant eight hours per proposal. Every monthly cycle meant four reports across four clients. Every week meant the same draft-by-draft revision tax on the same kind of deliverable.",
    ],
  },
  solution: {
    quote:
      "An AI proposal engine and a client reporting system that turn the agency's actual writing style into reusable, refinable, agency-native templates.",
    paragraphs: [
      "We didn't replace the writers. We gave them assistants. Every proposal starts from a brief and ends up at a 90%-finished document the partner reviews and refines in under an hour. Every monthly report is generated from live metrics, drafted in the agency's voice, and delivered to clients on the first of the month.",
      "The result wasn't fewer hours total — the partners now spend the saved time with clients, which is what they actually wanted to do all along.",
    ],
  },
  whatWeBuilt: [
    {
      number: "01",
      title: "AI proposal engine",
      body:
        "Brief in, scoped 12-page proposal out — in the agency's voice, with the agency's structure, with relevant case studies linked automatically.",
      visual: <ScreenProposal />,
      visualType: "desktop",
      url: "studio.linx.agency/proposals",
    },
    {
      number: "02",
      title: "Client reporting dashboard",
      body:
        "Live metrics across every client, every channel, every campaign. The partners see the whole agency in 30 seconds each morning.",
      visual: <ScreenDashboard />,
      visualType: "desktop",
      url: "studio.linx.agency",
    },
    {
      number: "03",
      title: "Monthly report engine",
      body:
        "On the first of each month, every client gets a personalized written report — generated from their actual data, written in the partner's voice, reviewed before sending.",
      visual: <ScreenReport />,
      visualType: "desktop",
      url: "studio.linx.agency/reports",
    },
  ],

  fullBleed: {
    visual: <ScreenDashboard />,
    type: "desktop",
    url: "studio.linx.agency",
    caption: "The Linx studio dashboard — used daily by all nine team members",
  },

  gallery: [
    {
      id: "dashboard",
      name: "Studio dashboard",
      description: "Every client, every channel, every metric — one calm view.",
      visual: <ScreenDashboard />,
      type: "desktop",
      url: "studio.linx.agency",
      primary: true,
    },
    {
      id: "proposal",
      name: "AI proposal engine",
      description: "Brief in, 12-page proposal in 45 minutes.",
      visual: <ScreenProposal />,
      type: "desktop",
      url: "studio.linx.agency/proposals",
    },
    {
      id: "report",
      name: "Monthly report",
      description: "Personalized written reports, written in the partner's voice.",
      visual: <ScreenReport />,
      type: "desktop",
      url: "studio.linx.agency/reports",
    },
  ],

  process: [
    {
      number: "1 / 3",
      title: "Cataloguing the craft",
      body:
        "We read 30 proposals, 60 reports, and three years of client emails to understand exactly how Linx writes. The AI was trained on that voice — not a generic one.",
      duration: "Weeks 1–2",
    },
    {
      number: "2 / 3",
      title: "Designing for refinement, not replacement",
      body:
        "Every screen designed around the partners doing 10% of the work — the 10% that requires judgment. The other 90% became one-click.",
      duration: "Weeks 2–5",
    },
    {
      number: "3 / 3",
      title: "Real client cycle",
      body:
        "Ran a full month of proposals and reports under the new system before fully rolling it out. The partners now use it on every project.",
      duration: "Weeks 5–7",
    },
  ],

  testimonialFull:
    "We used to win clients because the proposals took us so long. The irony was painful. Flowtix gave us a system that turns out a 90% finished proposal in 45 minutes — and somehow they read more 'us' than the ones we used to spend eight hours on.",
  testimonialRole: "Founding Partner · Linx",
};

export function LinxView({ project }: { project: Project }) {
  return (
    <ProjectPageLayout
      project={project}
      content={CONTENT}
      afterGallery={<InteractiveTour />}
    />
  );
}
