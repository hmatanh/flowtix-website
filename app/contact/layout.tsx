import type { Metadata } from "next";

const url = "https://flowtix.ai/contact/";

export const metadata: Metadata = {
  title: "Contact Flowtix — Book a Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with Flowtix. We respond within 24 hours and send a clear proposal with scope, timeline and pricing.",
  keywords:
    "contact Flowtix, strategy call, business systems consultation, automation proposal, internal tools consultation",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Contact Flowtix",
    description: "Free 30-minute strategy call. Response within 24 hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Flowtix",
    description: "Book a free strategy call with Flowtix.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
