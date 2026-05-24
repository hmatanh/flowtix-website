import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ClientShell } from "@/components/ClientShell";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MobileCTA } from "@/components/MobileCTA";
import { BackToTop } from "@/components/BackToTop";
import { EasterEgg } from "@/components/EasterEgg";
import { CookieBanner } from "@/components/CookieBanner";
import { TabAttention } from "@/components/TabAttention";
import { MotionProvider } from "@/components/MotionProvider";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowtix.ai"),
  title: {
    default: "Flowtix AI — AI Systems",
    template: "%s | Flowtix AI",
  },
  description:
    "Design-first AI systems, automations, and digital products for forward-thinking businesses.",
  keywords: [
    "AI systems",
    "AI automation",
    "business AI",
    "AI agency",
    "design studio",
    "intelligent workflows",
    "AI products",
  ],
  authors: [{ name: "Flowtix" }],
  creator: "Flowtix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowtix.ai",
    siteName: "Flowtix",
    title: "Flowtix — Design-First AI Systems",
    description:
      "AI-powered systems, intelligent automations, and premium digital products.",
    images: [
      {
        url: "/flowtix-wordmark-white.svg",
        width: 1200,
        height: 630,
        alt: "Flowtix — Design-First AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtix",
    description: "Design-First AI Systems for Forward-Thinking Businesses",
    images: ["/flowtix-wordmark-white.svg"],
  },
  alternates: {
    canonical: "https://flowtix.ai/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#000000" />
        {/* Organization JSON-LD — global, applies to every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Flowtix",
              url: "https://flowtix.ai",
              logo: "https://flowtix.ai/flowtix-wordmark-white.svg",
              description:
                "Design-first AI systems, intelligent automations, and premium digital products for forward-thinking businesses.",
              email: "office@flowtix.ai",
              sameAs: [],
              foundingDate: "2025",
              areaServed: "Worldwide",
              knowsAbout: [
                "AI Systems",
                "AI Automation",
                "UI/UX Design",
                "Brand Strategy",
                "Web Development",
                "AI Consulting",
              ],
            }),
          }}
        />
        {/* WebSite JSON-LD with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Flowtix",
              url: "https://flowtix.ai",
              description:
                "Design-First AI Systems for Forward-Thinking Businesses.",
              publisher: {
                "@type": "Organization",
                name: "Flowtix",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-black text-white antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <SmoothScroll />
          <ClientShell>
            <AnnouncementBar />
            <Nav />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </ClientShell>
          <MobileCTA />
          <BackToTop />
          <EasterEgg />
          <CookieBanner />
          <TabAttention />
        </MotionProvider>
      </body>
    </html>
  );
}
