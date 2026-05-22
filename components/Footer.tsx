"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { m } from "framer-motion";
import {
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Logo } from "./Logo";

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Logo size={24} />
            <p className="text-[#888] text-sm mt-5 max-w-md leading-relaxed">
              Building the intelligent future of business.
            </p>
            <p className="text-[#444] text-xs mt-2 max-w-md leading-relaxed">
              Design-first. Intelligence-first. Built for humans.
            </p>
          </div>

          <div className="lg:justify-self-end w-full lg:max-w-md">
            <div className="text-[#666] text-sm mb-3">
              Stay updated on our product launches
            </div>
            {subscribed ? (
              <m.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[#3B82F6] text-sm"
              >
                ✓ You&apos;re on the list. Talk soon.
              </m.div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
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
              <li><Link href="/services/ai-systems" className="animated-link hover:text-white transition-colors">AI Systems</Link></li>
              <li><Link href="/services/automation" className="animated-link hover:text-white transition-colors">Automation</Link></li>
              <li><Link href="/services/design" className="animated-link hover:text-white transition-colors">Design</Link></li>
              <li><Link href="/services/web-development" className="animated-link hover:text-white transition-colors">Web Dev</Link></li>
              <li><Link href="/services/ai-chatbots" className="animated-link hover:text-white transition-colors">Chatbots</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-[#666]">
              <li><Link href="/products" className="animated-link hover:text-white transition-colors">Flowtix Brain</Link></li>
              <li><Link href="/products" className="animated-link hover:text-white transition-colors">White-label</Link></li>
              <li><Link href="/products" className="animated-link hover:text-white transition-colors">Join Waitlist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-[#666]">
              <li>
                <a href="mailto:hello@flowtix.ai" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <IconMail size={14} stroke={1.5} />
                  hello@flowtix.ai
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <IconBrandX size={14} stroke={1.5} />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <IconBrandLinkedin size={14} stroke={1.5} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-[#0a0a0a] flex flex-col sm:flex-row justify-between gap-2 text-[#222] text-xs safe-area-bottom">
          <div>© 2025 Flowtix. All rights reserved.</div>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
