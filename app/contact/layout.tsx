import type { Metadata } from "next";

const url = "https://flowtix.ai/contact/";

export const metadata: Metadata = {
  title: "Contact Flowtix — Book a Free Discovery Call",
  description:
    "Book a free 30-minute discovery call with Flowtix. We respond within 24 hours and send a clear proposal with scope, timeline and pricing.",
  keywords:
    "contact Flowtix, book AI discovery call, AI consultation, AI proposal, AI agency contact",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Contact Flowtix",
    description: "Free discovery call. Response within 24 hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Flowtix",
    description: "Book a free discovery call with Flowtix.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
