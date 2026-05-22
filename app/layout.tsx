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
    default:
      "Flowtix AI — Design-First AI Systems for Forward-Thinking Businesses",
    template: "%s | Flowtix AI",
  },
  description:
    "We build AI-powered systems, intelligent automations, and premium digital products that transform how businesses operate. Design-first. Results-focused.",
  keywords: [
    "AI systems",
    "AI automation",
    "business AI",
    "AI agency",
    "design studio",
    "intelligent workflows",
    "AI products",
  ],
  authors: [{ name: "Flowtix AI" }],
  creator: "Flowtix AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowtix.ai",
    siteName: "Flowtix AI",
    title: "Flowtix AI — Design-First AI Systems",
    description:
      "AI-powered systems, intelligent automations, and premium digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtix AI",
    description: "Design-First AI Systems for Forward-Thinking Businesses",
  },
  robots: { index: true, follow: true },
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
        </MotionProvider>
      </body>
    </html>
  );
}
