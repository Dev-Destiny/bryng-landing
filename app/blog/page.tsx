import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import { blogPosts } from "@/data/blog-posts";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Bryng Journal — Guides for academic support",
  description:
    "Straightforward guides to finding academic support, agreeing on the plan, and keeping your work yours.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "The Bryng Journal",
    description:
      "Straightforward guides to finding academic support and keeping your work yours.",
    type: "website",
    url: `${siteUrl}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bryng Journal",
    description: "Straightforward guides to finding academic support and keeping your work yours.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      <BlogIndexClient posts={blogPosts} />
      <Footer />
    </main>
  );
}
