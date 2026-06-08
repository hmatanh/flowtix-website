import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ClientShell } from "@/components/ClientShell";
import dynamic from "next/dynamic";
const AnnouncementBar = dynamic(() => import("@/components/AnnouncementBar").then(m => ({ default: m.AnnouncementBar })), { ssr: false });
const MobileCTA = dynamic(() => import("@/components/MobileCTA").then(m => ({ default: m.MobileCTA })), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop").then(m => ({ default: m.BackToTop })), { ssr: false });
const EasterEgg = dynamic(() => import("@/components/EasterEgg").then(m => ({ default: m.EasterEgg })), { ssr: false });
const CookieBanner = dynamic(() => import("@/components/CookieBanner").then(m => ({ default: m.CookieBanner })), { ssr: false });
const TabAttention = dynamic(() => import("@/components/TabAttention").then(m => ({ default: m.TabAttention })), { ssr: false });
const AccessibilityWidget = dynamic(() => import("@/components/AccessibilityWidget").then(m => ({ default: m.AccessibilityWidget })), { ssr: false });
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
      "Flowtix — Custom Business Systems, Automations & Digital Products",
    template: "%s | Flowtix",
  },
  description:
    "Flowtix helps startups, agencies, and growing businesses replace manual work with custom systems, automated workflows, AI agents, internal tools, MVPs, and websites.",
  keywords: [
    "business process automation",
    "custom internal tools",
    "AI agents for business",
    "MVP development",
    "client portal development",
    "workflow automation",
    "digital solutions studio",
    "product design",
  ],
  authors: [{ name: "Flowtix" }],
  creator: "Flowtix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowtix.ai",
    siteName: "Flowtix",
    title:
      "Flowtix — Custom Business Systems, Automations & Digital Products",
    description:
      "We help businesses replace manual work with custom systems, automated workflows, AI agents, internal tools, and digital products.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Flowtix — Custom systems, automations & AI workflows",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowtix",
    description:
      "Custom systems, automations, and digital products for businesses that want to work smarter.",
    images: ["/og-image.svg"],
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
                "Custom business systems, automated workflows, AI agents, internal tools, and digital products for startups, agencies, and growing businesses.",
              email: "office@flowtix.ai",
              sameAs: [
                "https://www.linkedin.com/company/flowtixai/",
                "https://www.facebook.com/profile.php?id=61590763886838",
              ],
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
            }).replace(/</g, "\\u003c"),
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
                "Custom business systems, automated workflows, AI agents, internal tools, and digital products for startups, agencies, and growing businesses.",
              publisher: {
                "@type": "Organization",
                name: "Flowtix",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full bg-black text-white antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
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
          <AccessibilityWidget />
          <EasterEgg />
          <CookieBanner />
          <TabAttention />
        </MotionProvider>
      </body>
    </html>
  );
}
