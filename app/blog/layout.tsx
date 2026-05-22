import type { Metadata } from "next";

const url = "https://flowtix.ai/blog/";

export const metadata: Metadata = {
  title: "Blog — Insights on AI, Design & the Future of Business | Flowtix",
  description:
    "Practical thinking on AI systems, automation, design-first product, brand strategy and the future of business. Written by Flowtix builders for operators who ship.",
  keywords:
    "AI blog, AI systems, AI automation, AI strategy, design first AI, AI for business, AI case studies",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Flowtix Blog — Insights on AI, Design & Business",
    description:
      "Practical thinking on AI, automation, design, and the future of business.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtix Blog",
    description: "Practical thinking on AI, automation, design, and business.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
