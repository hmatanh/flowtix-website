/**
 * Blog cover image lookup
 *
 * Two layers:
 *
 *   1. SLUG_OVERRIDE — an explicit per-post photo. This is the
 *      authoritative source for any post that exists today. Each
 *      published post is hand-mapped to a topic-relevant photo, so
 *      every article in the listing carries a visibly different
 *      cover. New posts inherit the pool fallback below until they
 *      get their own override.
 *
 *   2. CATEGORY_POOL — a fallback pool of curated Unsplash photos
 *      grouped by category. When a post slug isn't in SLUG_OVERRIDE,
 *      we DJB2-hash the slug and pick from that category's pool, so
 *      a future post always renders the same cover across reloads.
 *
 * ──────────────────────────────────────────────────────────────────
 * LICENSING — every photo in this file is served from images.unsplash.com
 * under the Unsplash License (https://unsplash.com/license):
 *
 *   • Free for commercial AND non-commercial use
 *   • No permission needed from photographer or Unsplash
 *   • No attribution required (though appreciated)
 *   • Cannot be sold without significant modification, and cannot be
 *     used to replicate a similar/competing service — both fine for
 *     editorial blog use here.
 *
 * Each ID below has been verified to return 200 OK from
 * images.unsplash.com. The previously-broken Design pool ID
 * (1561070791-2526d30994b8 — 404) has been removed; the rest of the
 * pool returns valid images.
 * ──────────────────────────────────────────────────────────────────
 *
 * Image delivery params (chosen for blog-card use):
 *   w=800       — 2× retina at 400 px display width
 *   q=75        — sweet spot for quality / file size (~30–50 KB per)
 *   auto=format — Unsplash serves WebP/AVIF when the client supports it
 *   fit=crop    — smart-crop to the requested aspect (the URL is
 *                 plain, so the consumer adds w/h params at use site)
 *
 * Performance: card-level <img> tags use `loading="lazy"` + explicit
 * width/height to prevent CLS. Only ~6–9 cards are visible at first
 * paint, so initial image weight is ~200–400 KB total, falling well
 * under the 1 MB Lighthouse target.
 */

/**
 * Explicit per-post cover photo. One unique Unsplash ID per slug.
 * Adding/renaming a post? Add a row here so it doesn't fall back to
 * the category pool (which can collide as more posts pile up).
 *
 * Every ID here has been HEAD-checked against images.unsplash.com.
 */
const SLUG_OVERRIDE: Record<string, string> = {
  // AI Systems — circuit board macro, evokes the hidden plumbing
  // behind every AI implementation that nobody plans for upfront.
  "why-most-ai-implementations-fail": "1518770660439-4636190af475",

  // Design — hands sketching on paper, the craft side of building
  // human-first AI surfaces before the engineering takes over.
  "design-first-ai-systems": "1481487196290-c152efe083f5",

  // Automation — analytics dashboard, the visible payoff of a
  // workflow that used to be a human-driven Slack thread.
  "5-workflows-to-automate-with-ai-in-2025": "1551288049-bebda4e38f71",

  // AI Systems — abstract AI swirl, distinct enough from the
  // "why most fail" circuit board so the two AI Systems posts
  // read as obviously different at a glance in the listing grid.
  "what-is-an-ai-agent": "1677442136019-21780ecad995",

  // AI Content — vintage typewriter, the original "brand voice"
  // tool, tying the post's topic to a tactile object.
  "brand-voice-ai-complete-guide": "1455390582262-044cdead277a",

  // Business — charts and printed reports, the language ROI gets
  // spoken in when AI investment shows up on the P&L.
  "ai-roi-how-to-measure": "1517048676732-d65bc937f952",
};

const CATEGORY_POOL: Record<string, readonly string[]> = {
  // ── AI Systems · abstract tech, neural, gradients, circuits ───────
  "AI Systems": [
    "1518770660439-4636190af475", // circuit board macro (Sai Kiran Anagani)
    "1620712943543-bcc4688e7485", // purple flowing gradient
    "1635070041078-e363dbe005cb", // dark abstract waves
    "1639762681485-074b7f938ba0", // gradient flow
    "1531746790731-6c087fecd65a", // moody flowing dark
    "1677442136019-21780ecad995", // AI abstract swirl
    "1610563166150-b34df4f3bcd6", // tech grid abstract
    "1499951360447-b19be8fe80f5", // server room dark
  ],

  // ── Automation · workflows, code, systems, processes ──────────────
  "Automation": [
    "1517694712202-14dd9538aa97", // code on screen
    "1542831371-29b0f74f9713",    // editor lines of code
    "1551288049-bebda4e38f71",    // analytics dashboard
    "1460925895917-afdab827c52f", // code abstract
    "1488229297570-58520851e868", // modern architecture (system)
    "1581291518857-4e27b48ff24e", // dark code laptop
    "1555066931-4365d14bab8c",    // code editor flow
    "1593642632559-0c6d3fc62b89", // laptop terminal dark
  ],

  // ── Business · strategy, meetings, charts, workspace ──────────────
  "Business": [
    "1542744173-8e7e53415bb0",    // collaborative meeting (Campaign Creators)
    "1486406146926-c627a92ad1ab", // planning meeting
    "1497366216548-37526070297c", // minimal desk (Annie Spratt)
    "1554224155-6726b3ff858f",    // strategy laptop
    "1556761175-5973dc0f32e7",    // clean workspace
    "1517048676732-d65bc937f952", // charts and graphs
    "1450101499163-c8848c66ca85", // workspace overhead
    "1454165804606-c3d57bc86b40", // notebook + laptop
  ],

  // ── AI Content · writing, content tools, knowledge work ───────────
  "AI Content": [
    "1455390582262-044cdead277a", // typewriter close-up
    "1486312338219-ce68d2c6f44d", // laptop writing
    "1499750310107-5fef28a66643", // creator workspace
    "1432888622747-4eb9a8efeb07", // books stack
    "1481627834876-b7833e8f5570", // open book + light
    "1456513080510-7bf3a84b82f8", // pen and notebook
    "1517842645767-c639042777db", // writing setup
    "1457369804613-52c61a468e7d", // library books
  ],

  // ── Design · color, sketches, tools, craft ────────────────────────
  // Note: a previously-included photo ID (1561070791-2526d30994b8)
  // 404'd from Unsplash and has been removed. All IDs below are
  // verified 200 OK.
  "Design": [
    "1558655146-9f40138edfeb", // design sketches
    "1545235617-9465d2a55698", // sketch on tablet
    "1503602642458-232111445657", // design tools flatlay
    "1550745165-9bc0b252726f", // abstract design gradient
    "1542435503-956c469947f6", // colorful brand palette
    "1481487196290-c152efe083f5", // hands sketching
    "1547119957-637f8679db1e", // brand swatches table
  ],
};

const DEFAULT_POOL: readonly string[] = CATEGORY_POOL["AI Systems"];

/**
 * Deterministic 32-bit hash of a string — DJB2.
 * Stable across page renders and node/browser, so a post always gets
 * the same cover image (no SSR/CSR mismatch).
 */
function djb2(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0;
  }
  // Force unsigned
  return hash >>> 0;
}

/**
 * Get the cover image URL for a post.
 *
 * @param slug     — the post slug (used to deterministically pick within the pool)
 * @param category — the post category (selects the pool)
 * @param width    — desired output width (default 800; pass 1200 for retina hero)
 * @returns        — a ready-to-use Unsplash CDN URL
 */
export function getCoverImage(
  slug: string,
  category: string,
  width: number = 800
): string {
  // Explicit per-post mapping wins. Falls back to deterministic hash
  // over the category pool for any future post that hasn't been
  // mapped yet, so a new draft still ships with a sensible cover.
  const overrideId = SLUG_OVERRIDE[slug];
  const pool = CATEGORY_POOL[category] ?? DEFAULT_POOL;
  const photoId = overrideId ?? pool[djb2(slug) % pool.length];
  const height = Math.round(width * 0.625); // 16:10 aspect

  return (
    `https://images.unsplash.com/photo-${photoId}` +
    `?w=${width}&h=${height}&fit=crop&q=75&auto=format`
  );
}

/**
 * Generic alt text for a post cover. Posts don't author their own
 * cover-specific alt because the photo is decorative-supportive
 * (it doesn't carry meaning the title doesn't already convey).
 */
export function getCoverAlt(title: string): string {
  return `Cover image for: ${title}`;
}
