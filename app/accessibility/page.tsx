import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Flowtix’s commitment to making our website accessible to everyone.",
};

export default function AccessibilityPage() {
  return (
    <article id="top" className="relative max-w-3xl mx-auto px-6 md:px-10 xl:px-12 py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-xs text-[#444]">
        <Link href="/" className="hover:text-white animated-link">
          Home
        </Link>
        <span className="mx-2 text-[#222]" aria-hidden="true">/</span>
        <span className="text-[#888]">Accessibility</span>
      </nav>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/5 mb-4 sm:mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span className="text-blue-400 text-[10px] tracking-[0.18em] uppercase font-medium">
          Last reviewed · May 2026 · WCAG 2.1 AA
        </span>
      </div>
      <h1
        className="font-black text-white tracking-tighter leading-[1.05] mb-5 sm:mb-6"
        style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
      >
        Accessibility Statement
      </h1>
      <p className="text-[#aaa] text-base sm:text-lg leading-[1.65] sm:leading-relaxed">
        <strong className="text-white">
          Flowtix is committed to making our website accessible to everyone,
          regardless of ability or technology.
        </strong>
      </p>

      <Section title="Our Commitment">
        <p>
          We strive to conform to the Web Content Accessibility Guidelines
          (WCAG) 2.1 at Level AA. These guidelines help make web content more
          accessible to people with disabilities.
        </p>
      </Section>

      <Section title="What We’ve Done">
        <p>
          <strong>Visual:</strong>
        </p>
        <ul>
          <li>
            Sufficient color contrast throughout (minimum 4.5:1 ratio for text)
          </li>
          <li>Text can be resized up to 200% without loss of content</li>
          <li>No content relies on color alone to convey information</li>
          <li>Focus indicators visible on all interactive elements</li>
        </ul>
        <p>
          <strong>Navigation:</strong>
        </p>
        <ul>
          <li>Full keyboard navigation supported</li>
          <li>Skip to main content link provided</li>
          <li>Consistent navigation across all pages</li>
          <li>Clear page titles and headings hierarchy</li>
        </ul>
        <p>
          <strong>Content:</strong>
        </p>
        <ul>
          <li>All images have descriptive alternative text</li>
          <li>Decorative images are hidden from assistive technology</li>
          <li>Form fields have associated labels</li>
          <li>Error messages are descriptive and helpful</li>
        </ul>
        <p>
          <strong>Technology:</strong>
        </p>
        <ul>
          <li>Valid, semantic HTML throughout</li>
          <li>ARIA labels on all interactive elements</li>
          <li>No content flashes more than 3 times per second</li>
          <li>
            Animations can be reduced via OS preference
            (prefers-reduced-motion)
          </li>
        </ul>
      </Section>

      <Section title="Known Limitations">
        <p>We are actively working to improve the following:</p>
        <ul>
          <li>
            Some complex interactive components may have limited screen reader
            support
          </li>
          <li>Video content (when added) will include captions and transcripts</li>
          <li>
            PDF documents linked from the site may not be fully accessible
          </li>
        </ul>
      </Section>

      <Section title="Assistive Technologies Tested">
        <p>We test with:</p>
        <ul>
          <li>Screen readers: VoiceOver (macOS/iOS), NVDA (Windows)</li>
          <li>Keyboard-only navigation</li>
          <li>Browser zoom up to 200%</li>
          <li>High contrast mode</li>
        </ul>
      </Section>

      <Section title="Feedback & Assistance">
        <p>
          If you experience any accessibility barriers on our website, or need
          information in an alternative format, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:office@flowtix.ai?subject=Accessibility%20Request"
              className="text-[#3B82F6] hover:text-blue-400 underline"
            >
              office@flowtix.ai
            </a>
          </li>
          <li>
            <strong>Subject line:</strong> Accessibility Request
          </li>
          <li>
            <strong>Response time:</strong> Within 3 business days
          </li>
        </ul>
        <p>
          We take all feedback seriously and will work to resolve issues
          promptly.
        </p>
      </Section>

      <Section title="Formal Complaints">
        <p>
          If you are not satisfied with our response, you may contact the
          relevant national accessibility authority in your country.
        </p>
      </Section>

      <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4 text-xs text-[#444]">
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="hover:text-white animated-link">
            Contact →
          </Link>
          <Link href="/privacy" className="hover:text-white animated-link">
            Privacy Policy →
          </Link>
          <Link href="/" className="hover:text-white animated-link">
            Back to home →
          </Link>
        </div>
        <a href="#top" className="text-[#555] hover:text-white animated-link inline-flex items-center gap-1">
          ↑ Back to top
        </a>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="mt-12 scroll-mt-24 [&_p]:text-[#888] [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul_li]:text-[#888] [&_ul_li]:leading-relaxed [&_a]:break-words"
    >
      <h2 className="text-xl lg:text-2xl font-semibold text-white border-b border-[#1a1a1a] pb-3 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}
