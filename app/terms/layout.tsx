import type { Metadata } from "next";

const url = "https://flowtix.ai/terms/";

export const metadata: Metadata = {
  title: "Terms of Service — Flowtix",
  description:
    "Terms governing use of the Flowtix website: intellectual property, third-party links, limitation of liability, and acceptable use. Project-specific terms are documented separately in each statement of work.",
  keywords:
    "Flowtix terms of service, website terms, acceptable use, intellectual property, limitation of liability",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    url,
    title: "Terms of Service — Flowtix",
    description:
      "Terms governing use of the Flowtix website and engagement scope.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Flowtix",
    description: "Terms governing use of the Flowtix website.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
