import { notFound } from "next/navigation";
import { posts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { PostView } from "./PostView";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const url = `https://flowtix.ai/blog/${post.slug}/`;
  const title = `${post.title} - Flowtix`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: post.tags.concat(["AI", "Flowtix", post.category]).join(", "),
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Flowtix",
      title: post.title,
      description,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  // JSON-LD structured data for SEO
  const iso = new Date(post.date).toISOString();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: "https://flowtix.ai/icon.svg",
    datePublished: iso,
    dateModified: iso,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://flowtix.ai/about/",
    },
    publisher: {
      "@type": "Organization",
      name: "Flowtix",
      url: "https://flowtix.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://flowtix.ai/flowtix-wordmark-white.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://flowtix.ai/blog/${post.slug}/`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://flowtix.ai/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://flowtix.ai/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://flowtix.ai/blog/${post.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PostView post={post} related={related} />
    </>
  );
}
