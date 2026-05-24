"use client";

import { type Project } from "@/lib/projects";
import {
  ProjectPageLayout,
  type ProjectPageContent,
} from "@/components/projects/ProjectPageLayout";
import dynamic from "next/dynamic";
import { ScreenPortfolio } from "@/components/clients/aurum/ScreenPortfolio";
import { ScreenReport } from "@/components/clients/aurum/ScreenReport";
import { ScreenPortal } from "@/components/clients/aurum/ScreenPortal";
import { TourLoader } from "@/components/clients/TourLoader";

const InteractiveTour = dynamic(
  () => import("@/components/clients/aurum/InteractiveTour").then((m) => ({ default: m.InteractiveTour })),
  { ssr: false, loading: () => <TourLoader /> },
);

const CONTENT: ProjectPageContent = {
  heroHeadline:
    "The wealth firm that now looks like it has a team of analysts.",
  keyMetric: "Quarterly reports: 3 hours each → 0 minutes",

  statementStats: [
    { value: 100, suffix: "%", label: "Reports automated end-to-end" },
    { value: 12, suffix: " min", label: "From data to delivered PDF" },
    { value: 47, suffix: "%", label: "More client meetings per advisor" },
    { value: 0, suffix: " errors", label: "Across 1,200 reports shipped" },
  ],

  challenge: {
    quote:
      "A boutique wealth firm punching above its weight — but every advisor was working until midnight writing reports clients never read closely anyway.",
    paragraphs: [
      "Aurum's three senior advisors managed almost $400M in client capital with a service experience that felt — to anyone receiving it — bespoke and personal. Behind the curtain, that experience was held together by 80 hours of manual report writing per quarter, copy-pasted from twelve different data sources into a Word template.",
      "The work was excellent. The system producing it was a fire that needed feeding every Sunday night. One advisor was already burned out. The other two were close.",
    ],
  },
  solution: {
    quote:
      "A private intelligence engine that does the work the advisors hated and packages it in the design language clients expect from a firm of this caliber.",
    paragraphs: [
      "Claude reads the portfolio data, the market context, and the relationship notes — then writes the quarterly report in the firm's actual voice. Charts render automatically. Brand-perfect PDFs assemble themselves. Advisors review, adjust the tone in the parts that matter, and ship.",
      "Three hours of typing became fifteen minutes of editorial judgment. The client receives a report indistinguishable from the manually-written ones — because in every way that matters, it still is.",
    ],
  },
  whatWeBuilt: [
    {
      number: "01",
      title: "Portfolio intelligence engine",
      body:
        "Connects to the firm's custodial data, parses positions, computes performance, attributes returns. The math is finished before the advisor's coffee is.",
      visual: <ScreenPortfolio />,
      visualType: "desktop",
      url: "intel.aurum.private",
    },
    {
      number: "02",
      title: "AI-written quarterly reports",
      body:
        "Claude drafts the entire report in the firm's voice using the advisor's prior writing as a style guide. Every chart, every paragraph, every disclosure — in the firm's typography, not a template's.",
      visual: <ScreenReport />,
      visualType: "desktop",
      url: "intel.aurum.private/reports",
    },
    {
      number: "03",
      title: "Confidential client portal",
      body:
        "Each client gets a single, beautiful URL. Performance, holdings, the latest report, recent communications — designed like a private members' club, not a banking website.",
      visual: <ScreenPortal />,
      visualType: "desktop",
      url: "clients.aurum.private",
    },
  ],

  fullBleed: {
    visual: <ScreenPortfolio />,
    type: "desktop",
    url: "intel.aurum.private",
    caption:
      "The Aurum portfolio intelligence engine — managing reports across $397M AUM",
  },

  gallery: [
    {
      id: "portfolio",
      name: "Portfolio intelligence",
      description: "Returns, attribution, exposure — calculated in seconds.",
      visual: <ScreenPortfolio />,
      type: "desktop",
      url: "intel.aurum.private",
      primary: true,
    },
    {
      id: "report",
      name: "Quarterly report",
      description: "Claude writes in the firm's voice, brand-perfect typography.",
      visual: <ScreenReport />,
      type: "desktop",
      url: "intel.aurum.private/reports",
    },
    {
      id: "portal",
      name: "Client portal",
      description: "Private, calm, designed like a members' club.",
      visual: <ScreenPortal />,
      type: "desktop",
      url: "clients.aurum.private",
    },
  ],

  process: [
    {
      number: "1 / 3",
      title: "Reading every report",
      body:
        "We read three years of the firm's quarterly reports — line by line — to extract the voice, structure, and editorial conventions before writing a single line of code.",
      duration: "Weeks 1–2",
    },
    {
      number: "2 / 3",
      title: "Engineering quiet luxury",
      body:
        "Every visual decision was reviewed against three reference firms ten times Aurum's size. The brand had to feel inherited, not assembled.",
      duration: "Weeks 2–6",
    },
    {
      number: "3 / 3",
      title: "Pilot, refine, ship",
      body:
        "One advisor, one client, one quarter. Then three advisors, six clients. By Q4 the entire book was on the system with zero client complaints.",
      duration: "Weeks 6–10",
    },
  ],

  testimonialFull:
    "Our clients now think we have a team of analysts behind us. We don't. We have Flowtix. The reports go out on Monday morning now, not Sunday night — and every advisor I work with is more present for the clients because of it.",
  testimonialRole: "Managing Partner · Aurum Private",
};

export function AurumView({ project }: { project: Project }) {
  return (
    <ProjectPageLayout
      project={project}
      content={CONTENT}
      afterGallery={<InteractiveTour />}
    />
  );
}
