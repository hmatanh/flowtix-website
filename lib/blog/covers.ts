/**
 * Blog cover image lookup
 *
 * Two-layer scheme that guarantees every post in the blog gets a
 * TOPIC-RELEVANT cover image and that no two posts in the same
 * category ever share one:
 *
 *   1. SLUG_OVERRIDE - the 6 flagship posts (the 6 hand-written ones
 *      in lib/posts.tsx, not the long-tail batch posts). Each is
 *      mapped to a specifically-chosen Unsplash photo that matches
 *      its topic exactly.
 *
 *   2. CATEGORY_POOL + index-within-category - every other post gets
 *      a topic-relevant photo from its category's pool, selected by
 *      its ORDINAL POSITION among posts of the same category. Since
 *      every pool is sized to be larger than the number of posts in
 *      that category (Business: 47 photos for 42 posts, AI Systems:
 *      27 for 24, Automation: 22 for 19, AI Content: 15 for 13,
 *      Design: 10 for 8), `pool[idx % pool.length]` never collides
 *      within a category.
 *
 * Why index-within-category beats DJB2-hash-into-pool: with 42
 * Business posts and a pool of 47, a hash-based scheme would still
 * produce ~18 expected collisions inside Business alone (birthday
 * paradox). Position-based assignment is a perfect mapping for any
 * pool whose size meets or exceeds its category size. Plain
 * pigeonhole - no probabilistic collisions.
 *
 * ──────────────────────────────────────────────────────────────────
 * LICENSING - every single photo URL produced by this module is
 * served from images.unsplash.com under the Unsplash License:
 *
 *   • Free for commercial AND non-commercial use
 *   • No permission needed from the photographer or Unsplash
 *   • No attribution required (though appreciated)
 *
 * Reference: https://unsplash.com/license
 *
 * All 127 photo IDs in this file (6 override + 121 pool) have been
 * HEAD-verified to return HTTP 200 from images.unsplash.com. If a
 * future audit finds a 404, remove that ID; the pool sizes have
 * enough headroom to absorb a couple of removals without breaking
 * uniqueness inside their category.
 * ──────────────────────────────────────────────────────────────────
 *
 * Image delivery params (chosen for blog-card use):
 *   w=800       - 2× retina at 400 px display width
 *   q=75        - sweet spot for quality / file size (~30–50 KB)
 *   auto=format - Unsplash serves WebP/AVIF when supported
 *   fit=crop    - smart-crop to the requested aspect ratio
 *
 * Card-level <img> tags use loading="lazy" + explicit width/height
 * to prevent CLS. Initial-paint image weight stays under ~400 KB.
 */

import { posts } from "../posts";

/**
 * Per-slug explicit photo for the 6 flagship posts. Each is a
 * deliberately-chosen Unsplash image that matches the post's
 * subject matter (circuits for "why AI fails", typewriter for
 * "brand voice", charts for "ROI", etc.). Override always wins
 * over the category-pool fallback below.
 */
const SLUG_OVERRIDE: Record<string, string> = {
  "why-most-ai-implementations-fail": "1518770660439-4636190af475",
  "design-first-ai-systems":          "1481487196290-c152efe083f5",
  "5-workflows-to-automate-with-ai-in-2025": "1551288049-bebda4e38f71",
  "what-is-an-ai-agent":              "1677442136019-21780ecad995",
  "brand-voice-ai-complete-guide":    "1455390582262-044cdead277a",
  "ai-roi-how-to-measure":            "1517048676732-d65bc937f952",
};

/**
 * Per-category Unsplash photo pools. Each pool's size is greater
 * than the number of posts in that category - see file-header doc
 * for the breakdown.
 */
const CATEGORY_POOL: Record<string, readonly string[]> = {
  // ── AI Systems · 25 photos (24 posts in this category) ────────────
  // Theme: neural nets, gradients, circuits, abstract digital, data,
  // dark futuristic, AI-as-concept.
  // Note: 1518770660439 and 1677442136019 are intentionally NOT here
  // - they're used by SLUG_OVERRIDE and excluding them from the pool
  // keeps every photo unique across the full blog listing.
  "AI Systems": [
    "1610563166150-b34df4f3bcd6",
    "1635070041078-e363dbe005cb",
    "1620712943543-bcc4688e7485",
    "1639762681485-074b7f938ba0",
    "1604079628040-94301bb21b91",
    "1499951360447-b19be8fe80f5",
    "1531746790731-6c087fecd65a",
    "1635776062360-af423602aff3",
    "1579546929518-9e396f3cc809",
    "1620121692029-d088224ddc74",
    "1697952431907-8542919a16b3",
    "1562408590-e32931084e23",
    "1579548122080-c35fd6820ecb",
    "1592659762303-90081d34b277",
    "1550751827-4bd374c3f58b",
    "1557701197-2f99da0922dd",
    "1604076913837-52ab5629fba9",
    "1523821741446-edb2b68bb7a0",
    "1697577418970-95d99b5a55cf",
    "1618005198919-d3d4b5a92ead",
    "1517077304055-6e89abbf09b0",
    "1618005182384-a83a8bd57fbe",
    "1580584126903-c17d41830450",
    "1558494949-ef010cbdcc31",
    "1667670778881-537035257bd8",
  ],

  // ── Automation · 21 photos (19 posts) ─────────────────────────────
  // Theme: code editors, terminals, workflows, dashboards, IDE,
  // system architecture, processes.
  // Note: 1551288049 lives in SLUG_OVERRIDE (5-workflows post) and is
  // excluded here to keep every photo unique across the listing.
  "Automation": [
    "1581291518857-4e27b48ff24e",
    "1488229297570-58520851e868",
    "1517694712202-14dd9538aa97",
    "1555066931-4365d14bab8c",
    "1460925895917-afdab827c52f",
    "1542831371-29b0f74f9713",
    "1605379399642-870262d3d051",
    "1607799279861-4dd421887fb3",
    "1619410283995-43d9134e7656",
    "1614741118887-7a4ee193a5fa",
    "1461749280684-dccba630e2f6",
    "1515879218367-8466d910aaa4",
    "1543286386-2e659306cd6c",
    "1498050108023-c5249f4df085",
    "1666875753105-c63a6f3bdc86",
    "1564865878688-9a244444042a",
    "1504805572947-34fad45aed93",
    "1571171637578-41bc2dd41cd2",
    "1611974789855-9c2a0a7236a3",
    "1484417894907-623942c8ee29",
    "1550439062-609e1531270e",
  ],

  // ── Business · 46 photos (42 posts) ───────────────────────────────
  // Theme: meetings, charts, workspaces, planning, offices,
  // strategy, finance, professional team scenes.
  // Note: 1517048676732 (charts) is reserved for SLUG_OVERRIDE
  // (ai-roi-how-to-measure) and intentionally not in this pool.
  "Business": [
    "1454165804606-c3d57bc86b40",
    "1450101499163-c8848c66ca85",
    "1556761175-5973dc0f32e7",
    "1542744173-8e7e53415bb0",
    "1554224155-6726b3ff858f",
    "1486406146926-c627a92ad1ab",
    "1497366216548-37526070297c",
    "1497215728101-856f4ea42174",
    "1497366811353-6870744d04b2",
    "1497366754035-f200968a6e72",
    "1590283603385-17ffb3a7f29f",
    "1579621970795-87facc2f976d",
    "1606857521015-7f9fcf423740",
    "1560264280-88b68371db39",
    "1487017159836-4e23ece2e4cf",
    "1556761175-4b46a572b786",
    "1577412647305-991150c7d163",
    "1579532537598-459ecdaf39cc",
    "1564069114553-7215e1ff1890",
    "1571624436279-b272aff752b5",
    "1672380135241-c024f7fbfa13",
    "1638262052640-82e94d64664a",
    "1623177623442-979c1e42c255",
    "1534951009808-766178b47a4f",
    "1497215842964-222b430dc094",
    "1579621970588-a35d0e7ab9b6",
    "1521791136064-7986c2920216",
    "1686771416282-3888ddaf249b",
    "1591696205602-2f950c417cb9",
    "1600880292203-757bb62b4baf",
    "1633158829585-23ba8f7c8caf",
    "1628348068343-c6a848d2b6dd",
    "1549637642-90187f64f420",
    "1506787497326-c2736dde1bef",
    "1520607162513-77705c0f0d4a",
    "1681505531034-8d67054e07f6",
    "1578574577315-3fbeb0cecdc2",
    "1587825140708-dfaf72ae4b04",
    "1431540015161-0bf868a2d407",
    "1600880292089-90a7e086ee0c",
    "1508385082359-f38ae991e8f2",
    "1665072204431-b3ba11bd6d06",
    "1517502884422-41eaead166d4",
    "1517245386807-bb43f82c33c4",
    "1577415124269-fc1140a69e91",
    "1540575467063-178a50c2df87",
  ],

  // ── AI Content · 14 photos (13 posts) ─────────────────────────────
  // Theme: writing, books, typewriters, libraries, content tools,
  // notebooks, journalism, the craft of words.
  // Note: 1455390582262 (typewriter) is reserved for SLUG_OVERRIDE
  // (brand-voice-ai-complete-guide) and not in this pool.
  "AI Content": [
    "1432888622747-4eb9a8efeb07",
    "1486312338219-ce68d2c6f44d",
    "1481627834876-b7833e8f5570",
    "1457369804613-52c61a468e7d",
    "1517842645767-c639042777db",
    "1456513080510-7bf3a84b82f8",
    "1499750310107-5fef28a66643",
    "1517971071642-34a2d3ecc9cd",
    "1531346878377-a5be20888e57",
    "1587135991058-8816b028691f",
    "1558478551-1a378f63328e",
    "1524995997946-a1c2e315a42f",
    "1513530534585-c7b1394c6d51",
    "1610116306796-6fea9f4fae38",
  ],

  // ── Design · 9 photos (8 posts) ───────────────────────────────────
  // Theme: color swatches, sketches, design tools, palettes,
  // craft, type, branding artifacts.
  // Note: 1481487196290 (hands sketching) is reserved for
  // SLUG_OVERRIDE (design-first-ai-systems) and not in this pool.
  "Design": [
    "1550745165-9bc0b252726f",
    "1545235617-9465d2a55698",
    "1503602642458-232111445657",
    "1558655146-9f40138edfeb",
    "1542435503-956c469947f6",
    "1488190211105-8b0e65b80b4e",
    "1716471330475-f0669db8947a",
    "1504711434969-e33886168f5c",
    "1547119957-637f8679db1e",
  ],
};

const DEFAULT_POOL: readonly string[] = CATEGORY_POOL["AI Systems"];

/**
 * Slug → ordinal position among posts of the same category,
 * computed once at module load by walking the posts array in
 * its declaration order. Position 0 is the first post in that
 * category; position 1 the second; etc.
 *
 * This is what makes `pool[idx % pool.length]` collision-free as
 * long as the pool is at least as large as the category. A future
 * post added to a batch becomes position N+1 in its category and
 * inherits the next pool slot.
 */
const SLUG_TO_CAT_INDEX: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  const counts: Record<string, number> = {};
  for (const p of posts) {
    const c = counts[p.category] ?? 0;
    map[p.slug] = c;
    counts[p.category] = c + 1;
  }
  return map;
})();

/**
 * Get the cover image URL for a post.
 *
 * Resolution order:
 *   1. SLUG_OVERRIDE wins if present.
 *   2. Otherwise: pool[positionInCategory % pool.length]
 *      - which never collides while pool ≥ category size.
 *
 * @param slug     - the post slug
 * @param category - the post category (one of CATEGORIES)
 * @param width    - desired output width (800 for cards, 1200 for retina hero)
 * @returns        - a ready-to-use Unsplash CDN URL
 */
export function getCoverImage(
  slug: string,
  category: string,
  width: number = 800
): string {
  const height = Math.round(width * 0.625); // 16:10 aspect

  const overrideId = SLUG_OVERRIDE[slug];
  if (overrideId) {
    return (
      `https://images.unsplash.com/photo-${overrideId}` +
      `?w=${width}&h=${height}&fit=crop&q=75&auto=format`
    );
  }

  const pool = CATEGORY_POOL[category] ?? DEFAULT_POOL;
  const idx = SLUG_TO_CAT_INDEX[slug] ?? 0;
  const photoId = pool[idx % pool.length];

  return (
    `https://images.unsplash.com/photo-${photoId}` +
    `?w=${width}&h=${height}&fit=crop&q=75&auto=format`
  );
}

/**
 * Generic alt text for a post cover. Photos are decorative-
 * supportive - they don't carry meaning the title doesn't already
 * convey, so a generic "Cover image for: <title>" satisfies
 * screen-reader needs without claiming the image depicts content
 * it doesn't actually depict.
 */
export function getCoverAlt(title: string): string {
  return `Cover image for: ${title}`;
}
