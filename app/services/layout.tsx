import type { Metadata } from "next";

const url = "https://flowtix.ai/services/";

export const metadata: Metadata = {
  title: {
    absolute:
      "Services - Automation, AI Agents, Internal Tools, MVPs, Web, Design | Flowtix",
  },
  description:
    "Six services. One team. Business process automation, custom AI agents, internal tools and dashboards, MVP and product development, web design and development, and UX/UI and brand systems - all built in-house at Flowtix.",
  keywords:
    "business process automation, custom AI agents, internal tools, dashboards, MVP development, product development, web design, UX UI design, brand systems",
  alternates: { canonical: url },
  openGraph: {
    url,
    title:
      "Services - Automation, AI Agents, Internal Tools, MVPs, Web, Design",
    description:
      "Six services. One team. Automation, AI agents, internal tools, MVPs, web, and design - all built in-house at Flowtix.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Flowtix",
    description:
      "Six services. One team. Automation, AI agents, internal tools, MVPs, web, and design.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
