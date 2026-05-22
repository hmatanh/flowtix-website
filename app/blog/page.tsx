"use client";

import Link from "next/link";
import { useState, useMemo, FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { posts, CATEGORIES, type PostCategory } from "@/lib/posts";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function FeaturedVisual({ color }: { color: string }) {
  return (
    <div className="relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl aspect-[5/4] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] blur-3xl"
        style={{ background: color }}
      />
      <div className="absolute inset-6 flex flex-col gap-2">
        <div className="text-[10px] text-[#444] tracking-widest uppercase">
          Article Preview
        </div>
        <div className="h-2 bg-[#1a1a1a] rounded w-3/4 mt-3" />
        <div className="h-2 bg-[#1a1a1a] rounded w-full" />
        <div className="h-2 bg-[#1a1a1a] rounded w-5/6" />
        <div className="h-2 bg-[#1a1a1a] rounded w-1/2" />
        <div className="mt-4 inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a]">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: color }}
          />
          <span className="text-[10px] text-[#666]">Read on flowtix.ai</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [filter, setFilter] = useState<"All" | PostCategory>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts = useMemo(() => {
    if (filter === "All") return posts;
    return posts.filter((p) => p.category === filter);
  }, [filter]);

  const featured = filter === "All" ? posts[0] : filteredPosts[0];
  const rest = filter === "All" ? posts.slice(1) : filteredPosts.slice(1);

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-label text-[#333] mb-6">Insights</div>
          </FadeIn>
          <m.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-h1 gradient-text"
          >
            Insights on AI, Design & the Future of Business
          </m.h1>
          <FadeIn delay={0.2}>
            <p className="text-[#888] mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
              Practical thinking from the team at Flowtix.
            </p>
            <p className="text-[#444] text-sm mt-3">
              No fluff. No hype. Just real insights.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`text-sm px-5 py-2 rounded-full border transition-all ${
                  active
                    ? "border-[#2a2a2a] bg-[#0D0D0D] text-white"
                    : "border-[#1a1a1a] text-[#444] hover:text-[#888] hover:border-[#2a2a2a]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="px-6 lg:px-8 mt-12">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <Link
                href={`/blog/${featured.slug}/`}
                className="group block bg-[#0D0D0D] border border-[#1a1a1a] rounded-3xl p-8 lg:p-12 transition-all hover:border-[#2a2a2a]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium"
                        style={{
                          background: `${featured.categoryColor}1a`,
                          color: featured.categoryColor,
                          border: `1px solid ${featured.categoryColor}33`,
                        }}
                      >
                        Featured
                      </span>
                      <span className="text-[#666] text-xs uppercase tracking-wider">
                        {featured.category}
                      </span>
                      <span className="text-[#333] text-xs">·</span>
                      <span className="text-[#666] text-xs">
                        {featured.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mt-5 leading-snug tracking-tight group-hover:text-white">
                      {featured.title}
                    </h2>
                    <p className="text-[#666] mt-4 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222] text-[10px] inline-flex items-center justify-center text-white font-semibold">
                          FA
                        </div>
                        <span className="text-[#888]">{featured.author}</span>
                      </div>
                      <span className="text-[#222]">·</span>
                      <span className="text-[#666]">{featured.date}</span>
                      <span className="ml-auto inline-flex items-center gap-1 text-[#888] group-hover:text-white transition-colors">
                        Read Article
                        <IconArrowRight
                          size={14}
                          stroke={2}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                  <div>
                    <FeaturedVisual color={featured.categoryColor} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <m.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {rest.length > 0 ? (
                <StaggerContainer
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  stagger={0.08}
                >
                  {rest.map((p) => (
                    <StaggerItem key={p.slug}>
                      <Link
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
                          <h3 className="text-white text-lg font-semibold mt-4 leading-snug tracking-tight">
                            {p.title}
                          </h3>
                          <p className="text-[#666] text-sm mt-3 leading-relaxed line-clamp-3">
                            {p.excerpt}
                          </p>
                          <div className="mt-6 flex items-center justify-between text-xs">
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
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              ) : (
                <div className="text-center py-16 text-[#555]">
                  No posts in this category yet.
                </div>
              )}
            </m.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="px-6 lg:px-8 mt-20 mb-24">
        <div className="max-w-3xl mx-auto bg-[#040404] border border-[#1a1a1a] rounded-2xl p-8 lg:p-10 text-center">
          <h3 className="text-white text-xl font-semibold tracking-tight">
            Get new articles in your inbox
          </h3>
          <p className="text-[#666] text-sm mt-2">
            One thoughtful piece every two weeks. No spam, ever.
          </p>

          {subscribed ? (
            <m.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 text-[#3B82F6] text-sm"
            >
              ✓ Subscribed. Talk soon.
            </m.div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-[#0D0D0D] border border-[#1a1a1a] text-white px-4 py-3 rounded-lg text-sm outline-none focus:border-blue-500/50 focus:shadow-[0_0_18px_rgba(59,130,246,0.1)] transition-all placeholder-[#444]"
              />
              <m.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#eee] transition-colors"
              >
                Subscribe
              </m.button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
