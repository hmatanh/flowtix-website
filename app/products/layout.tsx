import type { Metadata } from "next";

const url = "https://flowtix.ai/products/";

export const metadata: Metadata = {
  title: { absolute: "Products - White-Label AI Systems Ready to Deploy | Flowtix" },
  description:
    "Pre-built, white-label AI products customized to your brand. Deployed fast. Flowtix Brain - AI brand and marketing intelligence - and more launching through 2026 onwards.",
  keywords:
    "white label AI, AI products, Flowtix Brain, AI marketing intelligence, AI for agencies, ready to deploy AI",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Products - Flowtix",
    description: "White-label AI systems ready to deploy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - Flowtix",
    description: "White-label AI systems ready to deploy.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
