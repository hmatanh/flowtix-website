import type { Metadata } from "next";

const url = "https://flowtix.ai/about/";

export const metadata: Metadata = {
  title: "About Flowtix — Design-First AI Studio",
  description:
    "A design-first AI product studio. Built on the conviction that the best AI systems are the ones humans actually want to use. Meet the team and the values behind Flowtix.",
  keywords:
    "Flowtix about, AI studio, design first AI, AI product studio, AI agency, founder Flowtix",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "About Flowtix",
    description: "A design-first AI product studio building systems humans actually use.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Flowtix",
    description: "A design-first AI product studio.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
