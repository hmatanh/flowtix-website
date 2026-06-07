import type { Metadata } from "next";

const url = "https://flowtix.ai/about/";

export const metadata: Metadata = {
  title: "About Flowtix — Digital Systems Studio",
  description:
    "Flowtix is a digital systems, automation, and product studio. We build the custom systems, internal tools, and automated workflows that move businesses forward.",
  keywords:
    "Flowtix about, digital systems studio, custom systems, business automation, product studio, internal tools, founder Flowtix",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "About Flowtix",
    description:
      "A digital systems, automation, and product studio. Built around the businesses that use what we ship.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Flowtix",
    description: "A digital systems, automation, and product studio.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
