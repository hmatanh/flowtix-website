import type { Metadata } from "next";

const url = "https://flowtix.ai/blog/";

export const metadata: Metadata = {
  title: {
    absolute: "Blog — Notes on Systems, Automation & Business | Flowtix",
  },
  description:
    "Practical thinking on custom systems, automated workflows, internal tools, and the business decisions behind them. Written by Flowtix builders for operators who ship.",
  keywords:
    "business systems blog, workflow automation, internal tools, custom software, business operations, product strategy",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Flowtix Blog — Notes on Systems, Automation & Business",
    description:
      "Practical thinking on custom systems, automated workflows, and the way real businesses ship.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtix Blog",
    description:
      "Notes on custom systems, automation, and the way real businesses ship.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
