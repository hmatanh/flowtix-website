"use client";

import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
  IconArrowRight,
  IconBrandX,
  IconBrandLinkedin,
  IconChevronRight,
} from "@tabler/icons-react";
import type { Post } from "@/lib/posts";
import { FadeIn } from "@/components/animations/FadeIn";
import { PostHero } from "@/components/PostHero";

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <m.div
      style={{ width }}
      className="fixed top-16 left-0 right-0 h-0.5 bg-blue-500 z-40 origin-left"
    />
  );
}

function TableOfContents({
  entries,
}: {
  entries: { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string | null>(entries[0]?.id ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (records) => {
        const visible = records.filter((r) => r.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(top.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    entries.forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [entries]);

  return (
    <nav className="sticky top-24 hidden lg:block">
      <div className="text-label text-[#333] mb-5">In this article</div>
      <ul className="space-y-3 text-sm border-l border-[#1a1a1a] pl-5">
        {entries.map((e) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              className={`block transition-colors ${
                active === e.id
                  ? "text-white"
                  : "text-[#555] hover:text-[#aaa]"
              }`}
            >
              {e.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function PostView({
  post,
  related,
}: {
  post: Post;
  related: Post[];
}) {
  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top, ${post.categoryColor}, transparent 70%)`,
          }}
        />
        <div className="relative page-container">
          <FadeIn>
            <nav className="text-[#555] text-sm flex items-center gap-2 mb-8">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <IconChevronRight size={12} stroke={2} className="text-[#222]" />
              <span className="text-[#888] truncate">{post.title}</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium"
                style={{
                  background: `${post.categoryColor}1a`,
                  color: post.categoryColor,
                  border: `1px solid ${post.categoryColor}33`,
                }}
              >
                {post.category}
              </span>
              <span className="text-[#555] text-xs">·</span>
              <span className="text-[#888] text-xs">{post.readTime}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="font-black tracking-tighter text-white mt-6 leading-[1.1]"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
            >
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#aaa] text-xl leading-relaxed mt-6 max-w-2xl">
              {post.excerpt}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222] text-xs inline-flex items-center justify-center text-white font-semibold">
                  FA
                </div>
                <div>
                  <div className="text-white text-sm font-medium">
                    {post.author}
                  </div>
                  <div className="text-[#6a6a6a] text-xs">{post.date}</div>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-[#555] text-xs hidden sm:inline">
                  Share
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://flowtix.ai/blog/${post.slug}/`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#888] hover:text-white hover:border-[#2a2a2a] transition-colors"
                >
                  <IconBrandX size={14} stroke={1.5} aria-hidden="true" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://flowtix.ai/blog/${post.slug}/`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#888] hover:text-white hover:border-[#2a2a2a] transition-colors"
                >
                  <IconBrandLinkedin size={14} stroke={1.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>

          <m.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-px mt-10 origin-left bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"
          />
        </div>
      </section>

      {/* Hero illustration — auto-generated SVG, no copyright concerns */}
      <section className="px-6 lg:px-8 mt-4 mb-6">
        <div className="page-container">
          <PostHero
            slug={post.slug}
            category={post.category}
            categoryColor={post.categoryColor}
            title={post.title}
          />
        </div>
      </section>

      {/* Body + TOC */}
      <section className="px-6 lg:px-8">
        <div className="page-container grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          <article className="prose-flowtix max-w-2xl">{post.body}</article>
          <aside>
            <TableOfContents entries={post.toc} />
          </aside>
        </div>
      </section>

      {/* Tags + share — refined */}
      <section className="mt-12 sm:mt-16">
        <div className="max-w-3xl mx-auto pt-7 sm:pt-8 border-t border-[#0f0f0f]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#555] mr-1">
              Tags:
            </span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border transition-colors"
                style={{
                  borderColor: `${post.categoryColor}30`,
                  background: `${post.categoryColor}10`,
                  color: post.categoryColor,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-7 sm:mt-8 flex items-center justify-between flex-wrap gap-3">
            <div className="text-[#aaa] text-sm">Found this useful?</div>
            <div className="flex items-center gap-2">
              <span className="text-[#555] text-xs mr-1 hidden sm:inline">
                Share:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://flowtix.ai/blog/${post.slug}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#888] hover:text-white hover:border-[#2a2a2a] transition-colors"
              >
                <IconBrandX size={14} stroke={1.5} aria-hidden="true" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://flowtix.ai/blog/${post.slug}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#888] hover:text-white hover:border-[#2a2a2a] transition-colors"
              >
                <IconBrandLinkedin size={14} stroke={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strong "Make this real" closing CTA — category-color themed */}
      <section className="mt-12 sm:mt-16">
        <div
          className="relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 overflow-hidden border"
          style={{
            background: `linear-gradient(135deg, ${post.categoryColor}10 0%, #0a0a0a 60%)`,
            borderColor: `${post.categoryColor}30`,
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${post.categoryColor}30, transparent 70%)`,
              filter: "blur(30px)",
            }}
          />

          <div className="relative">
            <div
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-3 sm:mb-4 inline-flex items-center gap-2 font-medium"
              style={{ color: post.categoryColor }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: post.categoryColor }}
              />
              Talk to a builder
            </div>
            <h3
              className="font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontSize: "clamp(22px, 3.5vw, 32px)" }}
            >
              Want to make something like this real for your business?
            </h3>
            <p className="text-[#999] text-sm sm:text-base mt-4 leading-[1.65] max-w-xl">
              We help operators ship what they read about. Book a free
              30-minute call — we&apos;ll listen to your situation and tell
              you, in plain language, whether AI moves the needle for you.
            </p>
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 max-w-sm sm:max-w-none">
              <m.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-colors"
                  style={{
                    background: post.categoryColor,
                    color: "#000",
                    boxShadow: `0 20px 40px ${post.categoryColor}30`,
                  }}
                >
                  Book a Strategy Call
                  <IconArrowRight size={14} stroke={2.5} aria-hidden="true" />
                </Link>
              </m.div>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-sm font-semibold border text-[#aaa] hover:text-white transition-colors"
                style={{ borderColor: "#1f1f1f" }}
              >
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About box */}
      <section className="mt-10 sm:mt-12">
        <div className="max-w-3xl mx-auto bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222] inline-flex items-center justify-center text-white font-bold text-sm">
              FA
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[10px] uppercase tracking-widest text-[#555] mb-1">
              About the team
            </div>
            <h4 className="text-white text-base font-semibold tracking-tight">
              Flowtix Team
            </h4>
            <p className="text-[#aaa] text-sm mt-3 leading-relaxed">
              Flowtix is a digital systems, automation, and product studio.
              We build custom systems, internal tools, and automated workflows
              for businesses that want to work smarter.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="/about"
                className="text-xs text-[#aaa] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                About Flowtix
                <IconArrowRight size={11} stroke={2} aria-hidden="true" />
              </Link>
              <span className="text-[#222]">·</span>
              <Link
                href="/work"
                className="text-xs text-[#aaa] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 lg:px-8 mt-24 mb-24">
          <div className="page-container">
            <FadeIn>
              <div className="text-label text-[#333] mb-3">
                More from Flowtix
              </div>
              <h2 className="text-h2 gradient-text">Keep reading.</h2>
            </FadeIn>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="group block h-full bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl overflow-hidden transition-all hover:border-[#2a2a2a] hover:-translate-y-1"
                >
                  <div
                    className="h-px"
                    style={{ background: p.categoryColor }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] tracking-widest uppercase font-medium"
                        style={{ color: p.categoryColor }}
                      >
                        {p.category}
                      </span>
                      <span className="text-[#555] text-[10px]">
                        {p.readTime}
                      </span>
                    </div>
                    <h3 className="text-white text-base font-semibold mt-4 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[#888] text-sm mt-3 leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs">
                      <span className="text-[#555]">{p.date}</span>
                      <span className="inline-flex items-center gap-1 text-[#888] group-hover:text-white transition-colors">
                        Read
                        <IconArrowRight
                          size={12}
                          stroke={2}
                          aria-hidden="true"
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
