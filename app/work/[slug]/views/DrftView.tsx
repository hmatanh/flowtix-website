"use client";

import { type Project } from "@/lib/projects";
import {
  ProjectPageLayout,
  type ProjectPageContent,
} from "@/components/projects/ProjectPageLayout";
import { ScreenStore } from "@/components/clients/drft/ScreenStore";
import { ScreenContent } from "@/components/clients/drft/ScreenContent";
import { ScreenEmail } from "@/components/clients/drft/ScreenEmail";

const CONTENT: ProjectPageContent = {
  heroHeadline:
    "A brand born and launched in five weeks. Zero to $189 jackets.",
  keyMetric: "Content production time reduced by 78%",

  statementStats: [
    { value: 5, suffix: " wks", label: "Brand to launch day" },
    { value: 78, suffix: "%", label: "Less time on content production" },
    { value: 4, suffix: ".7×", label: "Email open rate vs industry" },
    { value: 189, suffix: "$", label: "Average order value" },
  ],

  challenge: {
    quote:
      "A founder with a great product, a typewriter, and exactly enough budget for either a brand designer or a marketing team — but not both.",
    paragraphs: [
      "DRFT was a single founder with a single conviction: workwear-inspired men's outerwear made the way it used to be — heavy fabrics, real fit, honest pricing. The garments were ready. The brand wasn't. The website wasn't. The content engine to keep a DTC brand alive after launch definitely wasn't.",
      "Most agencies would have quoted six months and a budget that swallowed the entire first season. The founder needed something faster, leaner, and louder than a polite e-commerce starter kit.",
    ],
  },
  solution: {
    quote:
      "Brand, store, content engine and email automation — designed and built side-by-side in five weeks, then handed over to a one-person team to run.",
    paragraphs: [
      "Brand identity grounded in the workwear archetype but cut for 2025. A Shopify store designed like a photo essay, not a catalogue. An AI content engine that turns each product, each campaign, each email into ten variations the founder can choose between in fifteen minutes.",
      "Five weeks after kickoff, DRFT went live. The first season sold through. The second was already being shot.",
    ],
  },
  whatWeBuilt: [
    {
      number: "01",
      title: "Storefront that reads like a story",
      body:
        "Product pages designed as photo essays — heavy on craft, light on chatter. Shopify under the hood, custom theming on top.",
      visual: <ScreenStore />,
      visualType: "desktop",
      url: "drft.studio",
    },
    {
      number: "02",
      title: "AI content engine",
      body:
        "One product brief in, ten on-brand variations out: product descriptions, ads, social captions, email subject lines, blog drafts. The founder edits, doesn't write.",
      visual: <ScreenContent />,
      visualType: "desktop",
      url: "studio.drft.com/content",
    },
    {
      number: "03",
      title: "Email automation built for retention",
      body:
        "Browse and cart abandonment, restocks, post-purchase, win-backs. Every flow drafted by AI in DRFT's voice, reviewed weekly, edited in minutes.",
      visual: <ScreenEmail />,
      visualType: "desktop",
      url: "studio.drft.com/email",
    },
  ],

  fullBleed: {
    visual: <ScreenStore />,
    type: "desktop",
    url: "drft.studio",
    caption: "The DRFT storefront — launched May 2025, sold out August 2025",
  },

  gallery: [
    {
      id: "store",
      name: "Storefront",
      description: "Product as photo essay. Workwear archetype, 2025 cut.",
      visual: <ScreenStore />,
      type: "desktop",
      url: "drft.studio",
      primary: true,
    },
    {
      id: "content",
      name: "Content engine",
      description: "Ten on-brand variations from one brief.",
      visual: <ScreenContent />,
      type: "desktop",
      url: "studio.drft.com/content",
    },
    {
      id: "email",
      name: "Email flows",
      description: "Retention automation written in the founder's voice.",
      visual: <ScreenEmail />,
      type: "desktop",
      url: "studio.drft.com/email",
    },
  ],

  process: [
    {
      number: "1 / 3",
      title: "Stripping the brief to one word",
      body:
        "We threw out the moodboard and asked the founder for the one word that made him start the company. He said 'honest.' Every decision after that traced back to it.",
      duration: "Week 1",
    },
    {
      number: "2 / 3",
      title: "Designing and shooting in parallel",
      body:
        "Brand identity, store design, content engine prompts and the launch photo shoot all happened the same fortnight. The result felt born together, because it was.",
      duration: "Weeks 2–4",
    },
    {
      number: "3 / 3",
      title: "Launching loud, learning fast",
      body:
        "Live the morning of week five. Daily monitoring of metrics, AI prompts tuned twice in the first two weeks based on what was converting.",
      duration: "Weeks 5–7",
    },
  ],

  testimonialFull:
    "I was skeptical about AI in a creative business — worried it would make everything feel generic. Flowtix proved the opposite. The systems they built made us faster without making us less creative. The brand feels more 'us' than I thought possible from a five-week timeline.",
  testimonialRole: "Founder · DRFT",
};

export function DrftView({ project }: { project: Project }) {
  return <ProjectPageLayout project={project} content={CONTENT} />;
}
