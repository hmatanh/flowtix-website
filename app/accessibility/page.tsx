import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Flowtix AI’s commitment to making our website accessible to everyone.",
};

export default function AccessibilityPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="text-[#333] text-xs tracking-widest uppercase mb-3">
        Last reviewed · May 2026
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
        Accessibility Statement
      </h1>
      <p className="text-[#888] text-base leading-relaxed">
        <strong className="text-white">
          Flowtix AI is committed to making our website accessible to everyone,
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
              href="mailto:hello@flowtix.ai?subject=Accessibility%20Request"
              className="text-[#3B82F6] hover:text-blue-400 underline"
            >
              hello@flowtix.ai
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

      <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-wrap gap-4 text-xs text-[#444]">
        <Link href="/privacy" className="hover:text-white animated-link">
          Privacy Policy →
        </Link>
        <Link href="/terms" className="hover:text-white animated-link">
          Terms of Service →
        </Link>
        <Link href="/" className="hover:text-white animated-link">
          Back to home →
        </Link>
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
