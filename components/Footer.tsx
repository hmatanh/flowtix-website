"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Logo } from "./Logo";
import { reopenCookieBanner } from "./CookieBanner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <footer className="bg-[#040404] border-t border-[#0a0a0a]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="site-container">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Logo size={24} />
            <p className="text-[#888] text-sm mt-5 max-w-md leading-relaxed">
              Custom systems, automations, and digital products for businesses
              that want to work smarter.
            </p>
            <p className="text-[#444] text-xs mt-2 max-w-md leading-relaxed">
              Practical. Outcome-focused. Built for humans.
            </p>
          </div>

          <div className="lg:justify-self-end w-full lg:max-w-md">
            <div className="text-[#666] text-sm mb-3">
              Stay updated on our product launches
            </div>
            {subscribed ? (
              <div
                className="text-[#3B82F6] text-sm animate-fade-in"
              >
                ✓ You&apos;re on the list. Talk soon.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address for newsletter"
                  className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] text-white px-4 py-2.5 rounded-lg text-sm outline-none focus:border-blue-500/50 focus:shadow-[0_0_18px_rgba(59,130,246,0.1)] transition-all placeholder-[#444]"
                />
                <m.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#eee] transition-colors"
                >
                  Notify me
                </m.button>
              </form>
            )}
            {!subscribed && (
              <p className="text-[#555] text-[11px] mt-3 leading-relaxed">
                By subscribing you agree to our{" "}
                <Link href="/privacy" className="text-[#888] hover:text-white underline decoration-[#333] underline-offset-2">
                  Privacy Policy
                </Link>
                . Unsubscribe anytime.
              </p>
            )}
          </div>
        </div>

        <div className="py-12 border-t border-[#0a0a0a] grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-[#666]">
              <li><Link href="/about" className="animated-link hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="animated-link hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/work" className="animated-link hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/products" className="animated-link hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/blog" className="animated-link hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="animated-link hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-[#666]">
              <li><Link href="/services/automation" className="animated-link hover:text-white transition-colors">Business Process Automation</Link></li>
              <li><Link href="/services/ai-agents" className="animated-link hover:text-white transition-colors">Custom AI Agents</Link></li>
              <li><Link href="/services/internal-tools" className="animated-link hover:text-white transition-colors">Internal Tools</Link></li>
              <li><Link href="/services/mvp-product" className="animated-link hover:text-white transition-colors">MVP &amp; Product</Link></li>
              <li><Link href="/services/web-development" className="animated-link hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/design" className="animated-link hover:text-white transition-colors">Design &amp; Brand</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-[#666]">
              <li><Link href="/products#brain" className="animated-link hover:text-white transition-colors">Flowtix Brain</Link></li>
              <li><Link href="/products#white-label" className="animated-link hover:text-white transition-colors">White-label</Link></li>
              <li><Link href="/products#waitlist" className="animated-link hover:text-white transition-colors">Join Waitlist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-[#666]">
              <li>
                <a href="mailto:office@flowtix.ai" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <IconMail size={14} stroke={1.5} aria-hidden="true" />
                  office@flowtix.ai
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/flowtixai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <IconBrandLinkedin size={14} stroke={1.5} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61590763886838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <IconBrandFacebook size={14} stroke={1.5} aria-hidden="true" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-[#0a0a0a] flex flex-col sm:flex-row justify-between gap-2 text-[#777] text-xs safe-area-bottom">
          <div>© 2026 Flowtix. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-[#555] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#555] transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link
              href="/accessibility"
              className="hover:text-[#555] transition-colors"
            >
              Accessibility
            </Link>
            <span>·</span>
            <button
              type="button"
              onClick={reopenCookieBanner}
              className="hover:text-[#555] transition-colors text-left"
            >
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
