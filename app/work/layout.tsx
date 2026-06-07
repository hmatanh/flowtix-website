import type { Metadata } from "next";

const url = "https://flowtix.ai/work/";

export const metadata: Metadata = {
  title: { absolute: "Work — Case Studies Across 5 Industries | Flowtix" },
  description:
    "Selected work from Flowtix. AI systems, automation, brand identity and digital products across real estate, digital health, wealth management, DTC outdoor, and creative agency.",
  keywords:
    "AI case studies, real estate AI, digital health AI, wealth management AI, DTC AI, creative agency AI, AI portfolio",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Work — Flowtix Case Studies",
    description:
      "Five projects across five industries — AI systems and digital products built by Flowtix.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Flowtix",
    description: "Selected AI systems and digital products built by Flowtix.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
