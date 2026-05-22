import type { Metadata } from "next";

const url = "https://flowtix.ai/services/";

export const metadata: Metadata = {
  title: { absolute: "Services — AI Systems, Automation, Design, Web | Flowtix" },
  description:
    "Ten services. One team. From AI systems and intelligent automation to UI/UX design, brand strategy, and web development — all built in-house at Flowtix.",
  keywords:
    "AI services, AI consulting, AI automation, UI UX design, brand strategy, AI development, custom AI solutions",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Services — AI Systems, Automation, Design, Web",
    description:
      "Ten services. One team. AI systems, automation, design, and development — all built in-house at Flowtix.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Flowtix",
    description:
      "Ten services. One team. AI systems, automation, design, and development.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
