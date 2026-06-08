import type { Metadata } from "next";

const url = "https://flowtix.ai/accessibility/";

export const metadata: Metadata = {
  title: "Accessibility Statement - Flowtix",
  description:
    "Flowtix is committed to accessibility. We target WCAG 2.1 Level AA, support keyboard navigation, screen readers, sufficient color contrast, and respond to accessibility requests within 5 business days.",
  keywords:
    "Flowtix accessibility, WCAG 2.1, AA compliance, screen reader, keyboard navigation, accessibility statement",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    url,
    title: "Accessibility Statement - Flowtix",
    description:
      "Flowtix targets WCAG 2.1 Level AA and welcomes accessibility feedback.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement - Flowtix",
    description:
      "Our accessibility commitment and how to request accommodations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
