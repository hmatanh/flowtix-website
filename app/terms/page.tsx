import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of Flowtix services and website.",
};

const SECTIONS = [
  { id: "about", label: "1. About Flowtix" },
  { id: "website-use", label: "2. Website Use" },
  { id: "services", label: "3. Services & Engagements" },
  { id: "ip", label: "4. Intellectual Property" },
  { id: "warranties", label: "5. Disclaimer of Warranties" },
  { id: "liability", label: "6. Limitation of Liability" },
  { id: "confidentiality", label: "7. Confidentiality" },
  { id: "law", label: "8. Governing Law" },
  { id: "changes", label: "9. Changes to Terms" },
  { id: "contact", label: "10. Contact" },
];

export default function TermsPage() {
  return (
    <article id="top" className="relative page-container py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-xs text-[#555]">
        <Link href="/" className="hover:text-white animated-link">
          Home
        </Link>
        <span className="mx-2 text-[#222]" aria-hidden="true">/</span>
        <span className="text-[#aaa]">Terms of Service</span>
      </nav>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/5 mb-4 sm:mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span className="text-blue-400 text-[10px] tracking-[0.18em] uppercase font-medium">
          Last updated · May 2026
        </span>
      </div>
      <h1
        className="font-black text-white tracking-tighter leading-[1.05] mb-5 sm:mb-6"
        style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
      >
        Terms of Service
      </h1>
      <p className="text-[#aaa] text-base sm:text-lg leading-[1.65] sm:leading-relaxed mb-4">
        Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully
        before using flowtix.ai (the &ldquo;Website&rdquo;) or engaging Flowtix
        for any services.
      </p>
      <p className="text-[#aaa] text-base leading-relaxed">
        By accessing this website or engaging our services, you agree to be
        bound by these Terms.
      </p>

      <nav
        aria-label="Table of contents"
        className="my-10 sm:my-12 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-5 sm:p-6 relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div className="relative">
          <div className="text-blue-400 text-[10px] tracking-[0.2em] uppercase mb-3 font-medium inline-flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-blue-500" />
            Contents
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-sm">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[#aaa] hover:text-blue-400 transition-colors animated-link inline-flex items-center gap-1.5"
                >
                  <span className="text-[#555] text-[10px] font-mono">→</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Section id="about" title="1. About Flowtix">
        <p>
          Flowtix provides AI system development, automation, design, web
          development, and consulting services to businesses. These Terms
          govern your use of our website and any services you engage us to
          provide.
        </p>
      </Section>

      <Section id="website-use" title="2. Website Use">
        <p>
          <strong>Permitted use:</strong> You may use this website for lawful
          purposes only - specifically to learn about our services, contact us,
          and read our content.
        </p>
        <p>
          <strong>Prohibited use:</strong> You may not:
        </p>
        <ul>
          <li>
            Copy, reproduce, or resell website content without written
            permission
          </li>
          <li>Attempt to gain unauthorized access to any part of the website</li>
          <li>Use automated tools to scrape content</li>
          <li>
            Transmit harmful, offensive, or unlawful content via contact forms
          </li>
          <li>Impersonate another person or entity</li>
          <li>Use the website in any way that violates applicable law</li>
        </ul>
      </Section>

      <Section id="services" title="3. Services & Engagements">
        <p>When you engage Flowtix for paid services:</p>
        <ul>
          <li>
            Specific terms, deliverables, timelines, and pricing are documented
            in a project proposal or service agreement provided before work
            begins
          </li>
          <li>
            These Terms of Service apply alongside any project-specific
            agreements
          </li>
          <li>
            Payment terms, revision policies, and intellectual property rights
            are specified in individual project agreements
          </li>
        </ul>
      </Section>

      <Section id="ip" title="4. Intellectual Property">
        <p>
          <strong>Our content:</strong> All content on this website - including
          text, design, code, graphics, and branding - is owned by Flowtix
          and protected by copyright law. You may not reproduce it without
          written permission.
        </p>
        <p>
          <strong>Client work:</strong> Ownership of deliverables created for
          client projects is specified in individual project agreements. As a
          general principle, upon full payment, clients receive rights to use
          the delivered work as agreed.
        </p>
        <p>
          <strong>Portfolio rights:</strong> Unless explicitly agreed otherwise,
          Flowtix retains the right to showcase completed client work in our
          portfolio for promotional purposes, with client confidentiality
          maintained where requested.
        </p>
      </Section>

      <Section id="warranties" title="5. Disclaimer of Warranties">
        <p>
          The website and its content are provided “as is” without warranties
          of any kind. Flowtix does not warrant that:
        </p>
        <ul>
          <li>The website will be error-free or uninterrupted</li>
          <li>Results from using our services will meet all expectations</li>
          <li>The website is free from viruses or other harmful components</li>
        </ul>
        <p>
          AI-generated content and system outputs may contain errors. Human
          review is recommended before publishing or acting on AI-generated
          outputs.
        </p>
      </Section>

      <Section id="liability" title="6. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Flowtix shall not be
          liable for:
        </p>
        <ul>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of profits, data, or business opportunities</li>
          <li>
            Damages arising from use of or inability to use our website
          </li>
          <li>Errors in AI-generated outputs used in your business</li>
        </ul>
        <p>
          Our total liability for any claim related to services provided shall
          not exceed the amount paid for those specific services.
        </p>
      </Section>

      <Section id="confidentiality" title="7. Confidentiality">
        <p>
          We treat all client information, business details, and project
          specifics as confidential. We do not share client information with
          third parties except as necessary to deliver agreed services or as
          required by law.
        </p>
        <p>
          Client names and project details may be anonymized and used as case
          studies unless you request otherwise in writing.
        </p>
      </Section>

      <Section id="law" title="8. Governing Law">
        <p>
          These Terms are governed by applicable law. Any disputes arising from
          these Terms or our services shall be resolved through good-faith
          negotiation first. If unresolved, disputes may be submitted to
          binding arbitration or the courts of the applicable jurisdiction.
        </p>
      </Section>

      <Section id="changes" title="9. Changes to Terms">
        <p>
          We reserve the right to update these Terms at any time. Changes are
          effective when posted to this page with an updated date. Continued
          use of the website constitutes acceptance of updated Terms.
        </p>
      </Section>

      <Section id="contact" title="10. Contact">
        <p>For questions about these Terms:</p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:office@flowtix.ai"
              className="text-[#3B82F6] hover:text-blue-400 underline"
            >
              office@flowtix.ai
            </a>
          </li>
          <li>
            <strong>Response time:</strong> Within 5 business days
          </li>
        </ul>
      </Section>

      <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4 text-xs text-[#555]">
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-white animated-link">
            Privacy Policy →
          </Link>
          <Link href="/accessibility" className="hover:text-white animated-link">Accessibility →</Link>
          <Link href="/contact" className="hover:text-white animated-link">
            Contact →
          </Link>
          <Link href="/" className="hover:text-white animated-link">
            Back to home →
          </Link>
        </div>
        <a href="#top" className="text-[#6a6a6a] hover:text-white animated-link inline-flex items-center gap-1">
          ↑ Back to top
        </a>
      </div>
    </article>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24 [&_p]:text-[#aaa] [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul_li]:text-[#aaa] [&_ul_li]:leading-relaxed [&_a]:break-words"
    >
      <h2 className="text-xl lg:text-2xl font-semibold text-white border-b border-[#1a1a1a] pb-3 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}
