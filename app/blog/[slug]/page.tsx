import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostClient from "@/components/blog/BlogPostClient";
import { getPostBySlug, getAllSlugs } from "@/data/blog-posts";
import { siteUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Pre-render every slug at build time */
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/** Per-post SEO metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | The Bryng Journal`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // TypeScript narrowing: notFound() throws, so post is defined here
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      <BlogPostClient post={post!} />
      <Footer />
    </main>
  );
}
