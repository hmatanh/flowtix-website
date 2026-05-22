import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Flowtix collects, uses, and protects your information. GDPR-compliant.",
};

const SECTIONS = [
  { id: "who-we-are", label: "1. Who We Are" },
  { id: "what-we-collect", label: "2. What We Collect" },
  { id: "how-we-use", label: "3. How We Use Information" },
  { id: "storage-security", label: "4. Storage & Security" },
  { id: "third-party", label: "5. Third-Party Services" },
  { id: "cookies", label: "6. Cookies" },
  { id: "your-rights", label: "7. Your Rights (GDPR)" },
  { id: "retention", label: "8. Data Retention" },
  { id: "childrens", label: "9. Children’s Privacy" },
  { id: "changes", label: "10. Changes to This Policy" },
  { id: "contact", label: "11. Contact Us" },
];

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="text-[#333] text-xs tracking-widest uppercase mb-3">
        Last updated · May 2026
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
        Privacy Policy
      </h1>
      <p className="text-[#888] text-base leading-relaxed mb-6">
        Flowtix (“we,” “us,” or “our”) operates the website flowtix.ai (the
        “Service”). This Privacy Policy explains how we collect, use, and
        protect your personal information when you use our website and
        services.
      </p>
      <p className="text-[#888] text-base leading-relaxed">
        By using our website, you agree to the practices described in this
        policy.
      </p>

      <nav
        aria-label="Table of contents"
        className="my-12 bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6"
      >
        <div className="text-[#333] text-[10px] tracking-widest uppercase mb-3">
          Contents
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-[#666] hover:text-white transition-colors animated-link"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="who-we-are" title="1. Who We Are">
        <p>
          Flowtix is a design-first AI company that builds intelligent
          systems, automations, and digital products for businesses. We are the
          data controller for information collected through this website.
        </p>
        <p>
          <strong>Contact:</strong>{" "}
          <a
            href="mailto:office@flowtix.ai"
            className="text-[#3B82F6] hover:text-blue-400 underline"
          >
            office@flowtix.ai
          </a>
        </p>
      </Section>

      <Section id="what-we-collect" title="2. What Information We Collect">
        <p>
          <strong>Information you provide directly:</strong>
        </p>
        <ul>
          <li>Name and company name (when submitting our contact form)</li>
          <li>Email address (contact form and waitlist signups)</li>
          <li>Phone number (optional, contact form)</li>
          <li>Message content (contact form)</li>
          <li>Service interest selection (contact form)</li>
        </ul>
        <p>
          <strong>Information collected automatically:</strong>
        </p>
        <ul>
          <li>IP address (standard server logs, not stored by us)</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent (if analytics is enabled)</li>
          <li>Referring website</li>
        </ul>
        <p>
          <strong>Information we do NOT collect:</strong>
        </p>
        <ul>
          <li>Payment information</li>
          <li>Sensitive personal data (health, religion, ethnicity, etc.)</li>
          <li>Social media profiles</li>
          <li>Location data beyond country/region</li>
        </ul>
      </Section>

      <Section id="how-we-use" title="3. How We Use Your Information">
        <p>We use the information you provide solely to:</p>
        <ul>
          <li>Respond to your inquiries and project requests</li>
          <li>Send you information you have specifically requested</li>
          <li>Notify you when products on our waitlist become available</li>
          <li>Improve our website and services</li>
        </ul>
        <p>We do NOT:</p>
        <ul>
          <li>Sell your personal data to third parties</li>
          <li>Use your data for advertising targeting</li>
          <li>Share your information with marketing companies</li>
          <li>Use automated decision-making or profiling</li>
        </ul>
        <p>
          <strong>Legal basis for processing (GDPR):</strong>
        </p>
        <ul>
          <li>Consent: for waitlist signups and newsletter subscriptions</li>
          <li>Legitimate interest: for responding to business inquiries</li>
          <li>
            Contractual necessity: for delivering services you have engaged us
            for
          </li>
        </ul>
      </Section>

      <Section id="storage-security" title="4. Data Storage & Security">
        <p>
          Contact form submissions on this website are processed via mailto:
          links and are received directly to our email inbox. We do not operate
          a database that stores your form submissions.
        </p>
        <p>Waitlist signups are stored securely and protected by:</p>
        <ul>
          <li>Encryption in transit (HTTPS/TLS)</li>
          <li>Access restricted to authorized personnel only</li>
          <li>Regular security reviews</li>
        </ul>
        <p>
          We retain your contact information for up to 24 months after our last
          interaction, unless you request earlier deletion.
        </p>
      </Section>

      <Section id="third-party" title="5. Third-Party Services">
        <p>Our website may use the following third-party services:</p>
        <p>
          <strong>Vercel / Netlify (hosting):</strong> Our website is hosted on
          industry-standard infrastructure. These services may log IP addresses
          for security purposes. See their respective privacy policies for
          details.
        </p>
        <p>
          <strong>Email providers:</strong> Inbound emails are processed through
          our email service provider. We do not share your email address with
          advertising or marketing platforms.
        </p>
        <p>
          We do not currently use Google Analytics, Meta Pixel, or any
          behavioral tracking tools. If this changes, this policy will be
          updated.
        </p>
      </Section>

      <Section id="cookies" title="6. Cookies">
        <p>Our website uses minimal cookies:</p>
        <p>
          <strong>Strictly necessary cookies:</strong>
        </p>
        <ul>
          <li>Session state (prevents re-showing dismissed banners)</li>
          <li>
            These cannot be disabled as they are essential to website function
          </li>
        </ul>
        <p>
          <strong>We do NOT use:</strong>
        </p>
        <ul>
          <li>Advertising cookies</li>
          <li>Cross-site tracking cookies</li>
          <li>Third-party analytics cookies</li>
        </ul>
        <p>
          You can manage cookies through your browser settings. Refusing cookies
          may affect some website functionality.
        </p>
      </Section>

      <Section id="your-rights" title="7. Your Rights (GDPR & Global)">
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of personal data we hold
            about you
          </li>
          <li>
            <strong>Rectification:</strong> Correct inaccurate data
          </li>
          <li>
            <strong>Erasure:</strong> Request deletion of your personal data
          </li>
          <li>
            <strong>Restriction:</strong> Limit how we process your data
          </li>
          <li>
            <strong>Portability:</strong> Receive your data in a portable format
          </li>
          <li>
            <strong>Objection:</strong> Object to processing based on legitimate
            interests
          </li>
          <li>
            <strong>Withdraw consent:</strong> At any time, for consent-based
            processing
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at:{" "}
          <a
            href="mailto:office@flowtix.ai"
            className="text-[#3B82F6] hover:text-blue-400 underline"
          >
            office@flowtix.ai
          </a>
        </p>
        <p>
          We will respond within 30 days. We may ask you to verify your
          identity before fulfilling requests. If you believe we have not
          handled your data correctly, you have the right to complain to your
          national data protection authority.
        </p>
      </Section>

      <Section id="retention" title="8. Data Retention">
        <ul>
          <li>Contact form inquiries: 24 months from last contact</li>
          <li>Waitlist emails: Until you unsubscribe or the product launches</li>
          <li>Project communications: Duration of engagement + 3 years</li>
          <li>Billing records: 7 years (legal requirement)</li>
        </ul>
        <p>When retention periods expire, data is permanently deleted.</p>
      </Section>

      <Section id="childrens" title="9. Children’s Privacy">
        <p>
          Our services are not directed to individuals under 16 years of age.
          We do not knowingly collect personal data from children. If you
          believe we have collected data from a child, please contact us
          immediately at{" "}
          <a
            href="mailto:office@flowtix.ai"
            className="text-[#3B82F6] hover:text-blue-400 underline"
          >
            office@flowtix.ai
          </a>{" "}
          and we will delete it.
        </p>
      </Section>

      <Section id="changes" title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy periodically. When we do, we will
          update the “Last updated” date at the top of this page. For
          significant changes, we will notify users via email where we have
          your contact information.
        </p>
        <p>
          Continued use of the website after changes constitutes acceptance of
          the updated policy.
        </p>
      </Section>

      <Section id="contact" title="11. Contact Us">
        <p>For privacy-related questions, data requests, or concerns:</p>
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
            <strong>Website:</strong> flowtix.ai
          </li>
          <li>
            <strong>Response time:</strong> Within 5 business days
          </li>
        </ul>
      </Section>

      <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-wrap gap-4 text-xs text-[#444]">
        <Link href="/terms" className="hover:text-white animated-link">
          Terms of Service →
        </Link>
        <Link href="/accessibility" className="hover:text-white animated-link">
          Accessibility →
        </Link>
        <Link href="/" className="hover:text-white animated-link">
          Back to home →
        </Link>
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
      className="mt-12 scroll-mt-24 [&_p]:text-[#888] [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul_li]:text-[#888] [&_ul_li]:leading-relaxed [&_a]:break-words"
    >
      <h2 className="text-xl lg:text-2xl font-semibold text-white border-b border-[#1a1a1a] pb-3 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}
