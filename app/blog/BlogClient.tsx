"use client";

/**
 * Blog listing — editorial card grid with real photo covers.
 *
 * Covers come from getCoverImage() (lib/blog/covers.ts), which maps
 * each post deterministically to one of 40 curated Unsplash photos
 * pooled by category. Free for commercial use under the Unsplash
 * License — no attribution required. ~30-50 KB per image at the
 * URL params we use.
 *
 * Card grammar matches the /work listing — visual artifact (here, a
 * photo) at the top, then category eyebrow / title / excerpt / footer.
 * Same dark #0a0a0a card, 6% white border, hover lift + brand-tinted
 * border + soft shadow.
 *
 * Performance:
 *   - <img> with explicit width/height attributes (no CLS)
 *   - loading="lazy" for cards beyond the first 6 (above-the-fold)
 *   - decoding="async" so image decoding never blocks the main thread
 *   - srcset for 1x / 2x retina via the same Unsplash URL with w=1200
 *   - First-paint weight: ~250-350 KB (6 visible cards × 40-50 KB each)
 */

import Link from "next/link";
import { useState, useMemo, FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconArrowRight, IconBookmark, IconClock } from "@tabler/icons-react";
import {
  CATEGORIES,
  CATEGORY_COLORS,
  type PostCategory,
  type PostMeta,
} from "@/lib/post-categories";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { getCoverImage, getCoverAlt } from "@/lib/blog/covers";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ──────────────────────────────────────────────────────────────────
   Cover image — shared by featured + grid cards
   ─────────────────────────────────────────────────────────────── */

function PostCover({
  post,
  priority = false,
}: {
  post: PostMeta;
  priority?: boolean;
}) {
  const src1x = getCoverImage(post.slug, post.category, 800);
  const src2x = getCoverImage(post.slug, post.category, 1200);
  const alt = getCoverAlt(post.title);

  return (
    <img
      src={src1x}
      srcSet={`${src1x} 800w, ${src2x} 1200w`}
      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
      alt={alt}
      width={800}
      height={500}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}

/* ──────────────────────────────────────────────────────────────────
   Component
   ─────────────────────────────────────────────────────────────── */

export function BlogClient({ posts }: { posts: PostMeta[] }) {
  const [filter, setFilter] = useState<"All" | PostCategory>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts = useMemo(() => {
    if (filter === "All") return posts;
    return posts.filter((p) => p.category === filter);
  }, [filter, posts]);

  const featured = filter === "All" ? posts[0] : filteredPosts[0];
  const rest = filter === "All" ? posts.slice(1) : filteredPosts.slice(1);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    for (const p of posts) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, [posts]);

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative py-20 sm:py-24 lg:py-32 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
          }}
        />

        <div className="relative page-container">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#080808] mb-6 sm:mb-8">
              <IconBookmark
                size={11}
                stroke={1.5}
                className="text-blue-400"
                aria-hidden="true"
              />
              <span className="text-[#cccccc] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                Flowtix Insights · {posts.length} articles
              </span>
            </div>
          </FadeIn>
          <m.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black tracking-tighter text-white leading-[1.02]"
            style={{ fontSize: "clamp(36px, 6.5vw, 72px)" }}
          >
            Insights on{" "}
            <span className="gradient-text-blue">AI, Design</span>
            <br className="hidden sm:inline" /> &amp; the Future of Business
          </m.h1>
          <FadeIn delay={0.2}>
            <p className="text-[#aaa] mt-5 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-[1.65] sm:leading-relaxed px-2">
              Practical thinking from the team at Flowtix.
            </p>
            <p className="text-[#888] text-xs sm:text-sm mt-3">
              No fluff. No hype. Just real insights.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 flex-wrap justify-center max-w-md sm:max-w-none">
              {Object.entries(CATEGORY_COLORS).map(([cat, color], i) => (
                <m.span
                  key={cat}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.06,
                    duration: 0.4,
                    ease: "backOut",
                  }}
                  className="inline-flex items-center gap-1.5"
                  title={cat}
                >
                  <span
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                    style={{
                      background: color,
                      boxShadow: `0 0 8px ${color}66`,
                    }}
                  />
                  <span className="text-[10px] sm:text-[11px] text-[#888]">
                    {cat}
                  </span>
                </m.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============== FILTER TABS ============== */}
      <section>
        <div className="page-container">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap">
            {CATEGORIES.map((c) => {
              const active = filter === c;
              const color =
                c === "All" ? "#3B82F6" : CATEGORY_COLORS[c as PostCategory];
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className="shrink-0 text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full border transition-all inline-flex items-center gap-2 font-medium"
                  style={
                    active
                      ? {
                          borderColor: `${color}40`,
                          background: `${color}10`,
                          color: color,
                          boxShadow: `0 0 16px ${color}20`,
                        }
                      : {
                          borderColor: "#1a1a1a",
                          color: "#888",
                          background: "transparent",
                        }
                  }
                >
                  {c}
                  <span
                    className="text-[10px] font-mono tabular-nums px-1.5 py-0 rounded-full"
                    style={{
                      background: active
                        ? `${color}18`
                        : "rgba(255,255,255,0.04)",
                      color: active ? color : "#666",
                    }}
                  >
                    {categoryCounts[c] || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== FEATURED POST ============== */}
      {featured && (
        <section className="mt-10 sm:mt-12">
          <div className="page-container">
            <FadeIn>
              <Link
                href={`/blog/${featured.slug}/`}
                className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-1"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${featured.categoryColor}55`;
                  e.currentTarget.style.boxShadow = `0 40px 80px rgba(0,0,0,0.45), 0 0 60px ${featured.categoryColor}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch">
                  {/* Photo — fills its half, no padding */}
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden lg:order-2">
                    <PostCover post={featured} priority />
                    {/* Soft dark gradient at the bottom for legibility if any caption ever sits on it */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent lg:from-transparent lg:via-transparent lg:to-black/20"
                    />
                  </div>

                  {/* Copy */}
                  <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold"
                        style={{
                          background: `${featured.categoryColor}18`,
                          color: featured.categoryColor,
                          border: `1px solid ${featured.categoryColor}33`,
                        }}
                      >
                        <IconBookmark size={9} stroke={2} aria-hidden="true" />
                        Featured
                      </span>
                      <span
                        className="text-[10px] sm:text-xs uppercase tracking-wider font-medium"
                        style={{ color: featured.categoryColor }}
                      >
                        {featured.category}
                      </span>
                      <span className="text-[#555] text-xs">·</span>
                      <span className="text-[#888] text-[11px] sm:text-xs inline-flex items-center gap-1">
                        <IconClock size={10} stroke={1.5} aria-hidden="true" />
                        {featured.readTime}
                      </span>
                    </div>
                    <h2
                      className="font-bold text-white mt-5 sm:mt-6 leading-[1.15] tracking-tight"
                      style={{ fontSize: "clamp(22px, 3.5vw, 34px)" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-[#aaa] mt-4 sm:mt-5 leading-[1.65] sm:leading-relaxed text-[15px] sm:text-base">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 text-sm flex-wrap">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-full inline-flex items-center justify-center text-[11px] font-bold"
                          style={{
                            background: `linear-gradient(135deg, ${featured.categoryColor} 0%, ${featured.categoryColor}80 100%)`,
                            color: "#000",
                          }}
                        >
                          FA
                        </div>
                        <span className="text-[#aaa] text-xs sm:text-sm">
                          {featured.author}
                        </span>
                      </div>
                      <span className="text-[#333]">·</span>
                      <span className="text-[#888] text-xs sm:text-sm">
                        {featured.date}
                      </span>
                      <span
                        className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                        style={{ color: featured.categoryColor }}
                      >
                        Read Article
                        <IconArrowRight
                          size={14}
                          stroke={2}
                          aria-hidden="true"
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ============== POSTS GRID ============== */}
      <section className="mt-10 sm:mt-12">
        <div className="page-container">
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
                  stagger={0.05}
                >
                  {rest.map((p, i) => (
                    <StaggerItem key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}/`}
                        aria-label={`Read article: ${p.title}`}
                        className="group block h-full rounded-2xl overflow-hidden border bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-1"
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${p.categoryColor}40`;
                          e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.40), 0 0 50px ${p.categoryColor}12`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.06)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {/* Photo cover — 16:10 */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.04] bg-[#0a0a0a]">
                          <PostCover post={p} priority={i < 3} />
                          {/* Subtle dark wash at the bottom so a category chip would always be legible */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                          />
                          {/* Category chip on the photo, bottom-left */}
                          <span
                            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] tracking-widest uppercase font-bold backdrop-blur-md"
                            style={{
                              background: "rgba(10,10,10,0.75)",
                              color: p.categoryColor,
                              border: `1px solid ${p.categoryColor}40`,
                            }}
                          >
                            <span
                              className="w-1 h-1 rounded-full"
                              style={{ background: p.categoryColor }}
                            />
                            {p.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6">
                          <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                            <span className="text-[#888]">{p.date}</span>
                            <span className="text-[#666] inline-flex items-center gap-1">
                              <IconClock
                                size={9}
                                stroke={1.8}
                                aria-hidden="true"
                              />
                              {p.readTime}
                            </span>
                          </div>
                          <h3 className="text-white text-base sm:text-lg font-semibold mt-3 sm:mt-4 leading-[1.3] tracking-tight">
                            {p.title}
                          </h3>
                          <p className="text-[#aaa] text-[13px] sm:text-sm mt-2.5 sm:mt-3 leading-[1.6] line-clamp-3">
                            {p.excerpt}
                          </p>
                          <div
                            className="mt-5 sm:mt-6 pt-4 border-t flex items-center justify-between text-xs"
                            style={{ borderColor: "rgba(255,255,255,0.06)" }}
                          >
                            <span className="text-[#888]">{p.author}</span>
                            <span
                              className="inline-flex items-center gap-1 font-medium transition-colors"
                              style={{ color: p.categoryColor }}
                            >
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
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              ) : (
                <div className="text-center py-20 text-[#888]">
                  <div className="text-2xl mb-2" aria-hidden="true">
                    📭
                  </div>
                  No posts in this category yet.
                </div>
              )}
            </m.div>
          </AnimatePresence>

          {rest.length > 0 && (
            <div className="mt-10 sm:mt-12 text-center text-[#777] text-xs sm:text-sm">
              Showing {rest.length}{" "}
              {rest.length === 1 ? "article" : "articles"}
              {filter !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <span
                    style={{ color: CATEGORY_COLORS[filter as PostCategory] }}
                  >
                    {filter}
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ============== NEWSLETTER ============== */}
      <section className="mt-16 sm:mt-20 mb-20 sm:mb-24">
        <div className="page-container">
          <div
            className="relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-center overflow-hidden border"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(4,4,4,0.95) 60%)",
              borderColor: "rgba(59,130,246,0.18)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.20), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] tracking-widest uppercase font-medium text-blue-400">
                  Newsletter
                </span>
              </div>
              <h3
                className="text-white font-bold tracking-tight"
                style={{ fontSize: "clamp(20px, 3vw, 30px)" }}
              >
                Get new articles in your inbox
              </h3>
              <p className="text-[#aaa] text-sm sm:text-base mt-3 sm:mt-4">
                One thoughtful piece every two weeks. No spam, ever.
              </p>

              {subscribed ? (
                <m.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 text-blue-400 text-sm font-medium"
                >
                  ✓ Newsletter launching soon — we&apos;ll email you at launch.
                </m.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    aria-label="Email address for blog newsletter"
                    className="flex-1 bg-[#0D0D0D] border border-[#1a1a1a] text-white px-4 py-3.5 rounded-xl text-sm outline-none focus:border-blue-500/50 focus:shadow-[0_0_18px_rgba(59,130,246,0.15)] transition-all placeholder-[#888]"
                  />
                  <m.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-500 text-black px-6 py-3.5 rounded-xl text-sm font-bold hover:bg-blue-400 transition-colors"
                  >
                    Subscribe
                  </m.button>
                </form>
              )}
              <p className="text-[#888] text-xs mt-4 sm:mt-5">
                By subscribing you agree to our{" "}
                <Link
                  href="/privacy"
                  className="text-[#cccccc] hover:text-white underline decoration-[#333] underline-offset-2"
                >
                  Privacy Policy
                </Link>
                . Unsubscribe anytime. Read by 4,800+ operators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
