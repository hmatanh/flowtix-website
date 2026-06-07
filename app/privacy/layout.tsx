import type { Metadata } from "next";

const url = "https://flowtix.ai/privacy/";

export const metadata: Metadata = {
  title: "Privacy Policy — Flowtix",
  description:
    "How Flowtix collects, processes, stores, and protects personal data. Includes details on contact and booking forms (Web3Forms), hosting (Vercel), GDPR rights, and data retention.",
  keywords:
    "Flowtix privacy policy, GDPR, data protection, contact form privacy, Web3Forms, Vercel hosting privacy",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    url,
    title: "Privacy Policy — Flowtix",
    description:
      "How Flowtix collects, processes, stores, and protects personal data.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Flowtix",
    description: "How Flowtix handles your data.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
