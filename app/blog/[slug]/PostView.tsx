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
import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { Logo } from "@/components/Logo";
import { FadeIn } from "@/components/animations/FadeIn";

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
                  : "text-[#444] hover:text-[#888]"
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

export function PostView({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  if (!post) return null;
  const related = getRelatedPosts(slug, 3);

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
        <div className="relative max-w-3xl mx-auto">
          <FadeIn>
            <nav className="text-[#444] text-sm flex items-center gap-2 mb-8">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <IconChevronRight size={12} stroke={2} className="text-[#222]" />
              <span className="text-[#666] truncate">{post.title}</span>
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
              <span className="text-[#444] text-xs">·</span>
              <span className="text-[#666] text-xs">{post.readTime}</span>
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
            <p className="text-[#888] text-xl leading-relaxed mt-6 max-w-2xl">
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
                  <div className="text-[#555] text-xs">{post.date}</div>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-[#444] text-xs hidden sm:inline">
                  Share
                </span>
                <a
                  href="#"
                  aria-label="Share on Twitter"
                  className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#666] hover:text-white hover:border-[#2a2a2a] transition-colors"
                >
                  <IconBrandX size={14} stroke={1.5} />
                </a>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#666] hover:text-white hover:border-[#2a2a2a] transition-colors"
                >
                  <IconBrandLinkedin size={14} stroke={1.5} />
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

      {/* Body + TOC */}
      <section className="px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          <article className="prose-flowtix max-w-2xl">{post.body}</article>
          <aside>
            <TableOfContents entries={post.toc} />
          </aside>
        </div>
      </section>

      {/* Tags + share */}
      <section className="px-6 lg:px-8 mt-16">
        <div className="max-w-3xl mx-auto pt-8 border-t border-[#0f0f0f]">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="text-[#666] text-sm">Share this article</div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Share on Twitter"
                className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#666] hover:text-white hover:border-[#2a2a2a] transition-colors"
              >
                <IconBrandX size={14} stroke={1.5} />
              </a>
              <a
                href="#"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 inline-flex items-center justify-center border border-[#1a1a1a] rounded-lg text-[#666] hover:text-white hover:border-[#2a2a2a] transition-colors"
              >
                <IconBrandLinkedin size={14} stroke={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About box */}
      <section className="px-6 lg:px-8 mt-16">
        <div className="max-w-3xl mx-auto bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-8">
          <Logo size={22} />
          <p className="text-[#888] text-sm mt-5 leading-relaxed max-w-xl">
            Flowtix AI is a design-first studio building AI systems, automations,
            and digital products for businesses that refuse to look average.
            We combine 10+ years of design expertise with cutting-edge AI
            infrastructure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-white text-black px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#eee] transition-colors"
          >
            Work with us
            <IconArrowRight size={14} stroke={2} />
          </Link>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 lg:px-8 mt-24 mb-24">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-label text-[#333] mb-3">
                More from Flowtix AI
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
                      <span className="text-[#444] text-[10px]">
                        {p.readTime}
                      </span>
                    </div>
                    <h3 className="text-white text-base font-semibold mt-4 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[#666] text-sm mt-3 leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs">
                      <span className="text-[#444]">{p.date}</span>
                      <span className="inline-flex items-center gap-1 text-[#666] group-hover:text-white transition-colors">
                        Read
                        <IconArrowRight
                          size={12}
                          stroke={2}
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
