"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";
import { Button } from "@/components/ui";
import AuthorAvatar from "@/components/blog/AuthorAvatar";
import { formatBlogDate } from "@/components/blog/utils";

// ─── animation variants ───────────────────────────────────────────────────────

const ctaVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 },
  },
};

// ─── sub-components ───────────────────────────────────────────────────────────

// ─── main export ──────────────────────────────────────────────────────────────

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
  const articleRef = useRef<HTMLElement>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setReadingProgress(Math.round(latest * 100));
  });

  return (
    <article ref={articleRef} className="pt-28 pb-20 sm:pt-32">
      <div
        role="progressbar"
        aria-label="Article reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={readingProgress}
        className="fixed left-0 right-0 top-16 z-40 h-1 bg-brand/10 sm:top-19"
      >
        <motion.div
          aria-hidden="true"
          className="h-full origin-left bg-brand"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* ── Article header ── */}
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6"
      >
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          Back to blog
        </Link>

        <p className="mb-4 inline-flex rounded-full bg-brand-subtle px-3 py-1.5 text-xs font-semibold text-brand">
          {post.category}
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.12] tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Author + meta row */}
        <div className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-border-subtle pb-8">
          <AuthorAvatar size="lg" />
          <div>
            <p className="text-sm font-semibold text-text-primary leading-none mb-0.5">
              {post.author.name}
            </p>
            <p className="text-xs text-text-muted">{post.author.role}</p>
          </div>

          <div className="flex items-center gap-4 text-xs text-text-muted ml-auto">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formatBlogDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6"
      >
        {/*
          Tailwind Typography prose classes.
          We override the prose colour tokens to match Bryng's palette.
        */}
        <div
          className="
            prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-text-primary prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-text-secondary prose-p:leading-relaxed
            prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-strong:text-text-primary prose-strong:font-semibold
            prose-blockquote:border-l-brand prose-blockquote:border-l-4 prose-blockquote:pl-5 prose-blockquote:not-italic prose-blockquote:text-text-secondary
            prose-blockquote:bg-brand-subtle prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:pr-5
            prose-ul:text-text-secondary prose-ol:text-text-secondary
            prose-li:marker:text-brand
            prose-table:text-sm prose-thead:bg-bg-subtle
            prose-th:text-text-primary prose-th:font-semibold prose-th:text-left
            prose-td:text-text-secondary
            prose-table:border prose-table:border-border-subtle prose-th:border prose-th:border-border-subtle prose-td:border prose-td:border-border-subtle
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* ── CTA Box ── */}
      <motion.div
        variants={ctaVariant}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 mt-16"
      >
        <div className="bg-brand-subtle border border-brand-border rounded-inner-card p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-snug mb-4">
            Need a clearer plan for your next project?
          </h2>
          <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
            Look for support that helps you learn, plan, and improve your work. Check your institution&apos;s rules, and keep assessed work your own.
          </p>
          <Button href="/signup" variant="primary" size="lg">
            Explore Bryng
            <ArrowRight size={16} />
          </Button>
        </div>
      </motion.div>
    </article>
  );
}
