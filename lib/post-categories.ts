// Categories module - kept separate from lib/posts.tsx so importing
// just categories doesn't transitively pull in all post bodies.
// Importing this file ships ~500 bytes vs. importing posts.tsx which
// transitively loads 106 post bodies (~500KB+).

export type PostCategory =
  | "AI Systems"
  | "Design"
  | "Automation"
  | "AI Content"
  | "Business";

export const CATEGORY_COLORS: Record<PostCategory, string> = {
  "AI Systems": "#3B82F6",
  Design: "#EC4899",
  Automation: "#10B981",
  "AI Content": "#A855F7",
  Business: "#F59E0B",
};

export const CATEGORIES: ("All" | PostCategory)[] = [
  "All",
  "AI Systems",
  "Design",
  "Automation",
  "AI Content",
  "Business",
];

// Lightweight metadata type - the shape passed from server to client
// for the blog listing. No JSX, no toc. Fully serializable.
export type PostMeta = {
  slug: string;
  title: string;
  category: PostCategory;
  categoryColor: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
};
