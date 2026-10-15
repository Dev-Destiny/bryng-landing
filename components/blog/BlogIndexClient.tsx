"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, Clock, ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

// ─── constants ────────────────────────────────────────────────────────────────

const ALL_CATEGORY = "All";

// ─── helpers ──────────────────────────────────────────────────────────────────

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function AuthorAvatar({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden items-center justify-center rounded-full border border-white/80 shadow-sm ${small ? "h-8 w-8" : "h-9 w-9"}`}
    >
      <Image
        src="/Bryng_Icon.svg"
        alt=""
        width={64}
        height={64}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function CategoryBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full bg-brand-subtle px-2.5 py-1 text-[11px] font-semibold text-brand">
      {children}
    </span>
  );
}

// ─── sub-components ───────────────────────────────────────────────────────────

/** The featured post follows the reference's full-height 4:3 cover and editorial byline. */
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group" aria-label={post.title}>
      <div
        className="grid grid-cols-1 items-stretch gap-5 rounded-2xl border border-border-subtle bg-bg-surface p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] sm:p-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:p-5"
      >
        {/* Use the editorial image when available; otherwise keep the styled placeholder. */}
        <div
          className="relative aspect-4/3 w-full overflow-hidden rounded-2xl"
          style={{ background: post.coverImage ? undefined : post.coverGradient }}
          aria-hidden
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col justify-end p-6 text-white sm:p-8">
              <span className="max-w-[12ch] text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl" aria-hidden="true">
                {post.coverTitle}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-4 px-3 py-3 sm:px-5 lg:px-6 lg:py-8">
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge>{post.category}</CategoryBadge>
            <span className="rounded-full border border-border-subtle px-2.5 py-1 text-[11px] font-semibold text-text-muted">Featured</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-[1.15] group-hover:text-brand transition-colors duration-200">
            {post.title}
          </h2>

          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <AuthorAvatar />
            <div>
              <p className="text-xs font-semibold text-text-primary leading-none mb-1">
                {post.author.name} <span className="font-normal text-text-muted">· {formatDate(post.date)}</span>
              </p>
              <p className="text-[11px] text-text-muted flex items-center gap-1">
                <Clock size={10} />
                {post.readTime} min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/** Standard card with an independent, rounded 4:3 cover. */
function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group" aria-label={post.title}>
      <article className="flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-1">
        {/* Use the editorial image when available; otherwise keep the styled placeholder. */}
        <div
          className="relative aspect-4/3 w-full overflow-hidden rounded-2xl"
          style={{ background: post.coverImage ? undefined : post.coverGradient }}
          aria-hidden
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt=""
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col justify-end p-5 text-white sm:p-6">
              <span className="max-w-[12ch] text-2xl font-semibold leading-[1.05] tracking-tight" aria-hidden="true">{post.coverTitle}</span>
            </div>
          )}
        </div>

        {/* Text body */}
        <div className="flex flex-1 flex-col gap-3 pt-4">
          <CategoryBadge>{post.category}</CategoryBadge>
          <h3 className="text-base font-bold text-text-primary leading-snug group-hover:text-brand transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-1 mt-auto">
            <div className="flex items-center gap-2.5">
              <AuthorAvatar small />
              <div>
                <p className="text-xs font-semibold text-text-primary leading-none mb-0.5">
                  {post.author.name}
                </p>
                <p className="text-[11px] text-text-muted">{formatDate(post.date)} · {post.readTime} min read</p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-text-muted group-hover:border-brand group-hover:text-brand group-hover:bg-brand-subtle transition-all duration-200 shrink-0">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ─── sidebar ──────────────────────────────────────────────────────────────────

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortOrder: "newest" | "oldest";
  onSortChange: (s: "newest" | "oldest") => void;
}

function Sidebar({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
}: SidebarProps) {
  return (
    <aside className="w-full lg:w-56 shrink-0 flex flex-col gap-6">
      {/* Search */}
      <div>
        <label htmlFor="blog-search" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
          Search
        </label>
        <div className="relative">
          <Search
            size={13}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            id="blog-search"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-sm bg-bg-surface border border-border-subtle rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus-visible:ring-2 focus-visible:ring-brand/30 transition-colors"
          />
        </div>
      </div>

      {/* Filter / Sort */}
      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
          Sort
        </label>
        <select
          aria-label="Sort guides"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as "newest" | "oldest")}
          className="w-full rounded-xl border border-border-subtle bg-bg-surface px-3.5 py-2.5 text-sm text-text-secondary transition-colors hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* Categories */}
      <div>
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          Topics
        </p>
        <ul className="space-y-0.5">
          {[ALL_CATEGORY, ...categories].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <li key={cat}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onCategoryChange(cat)}
                  className={`w-full text-left flex items-center gap-0 text-sm font-medium px-3 py-2 rounded-lg transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 ${
                    isActive
                      ? "text-text-primary bg-bg-subtle"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
                  }`}
                >
                  {/* Active left border indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1 bottom-1 w-0.75 rounded-full bg-brand" />
                  )}
                  <span className="pl-1">{cat}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

interface Props {
  posts: BlogPost[];
}

export default function BlogIndexClient({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const prefersReducedMotion = useReducedMotion();

  // Derive unique categories from posts
  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );

  // Filter + sort
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (activeCategory !== ALL_CATEGORY) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      const diff =
        new Date(a.date).getTime() - new Date(b.date).getTime();
      return sortOrder === "newest" ? -diff : diff;
    });

    return result;
  }, [posts, activeCategory, searchQuery, sortOrder]);

  const featuredPost =
    filteredPosts.find((p) => p.featured) ?? filteredPosts[0];
  const gridPosts = filteredPosts.filter((p) => p !== featuredPost);

  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-32 pb-10 text-left sm:pt-36 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.42, ease: "easeOut" as const }}
          >
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Make your next project easier to navigate.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Straightforward guides to finding academic support, agreeing on the plan, and keeping your work yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body: sidebar + content ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-14">

            {/* Left sidebar */}
            <Sidebar
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
            />

            {/* Right content */}
            <div className="flex min-w-0 flex-1 flex-col gap-5">
              <p className="text-sm text-text-muted" aria-live="polite" role="status">
                {filteredPosts.length} {filteredPosts.length === 1 ? "guide" : "guides"}
              </p>
              {filteredPosts.length === 0 ? (
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    No articles found
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Try adjusting your search or selecting a different category.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory(ALL_CATEGORY);
                    }}
                    className="mt-4 text-sm font-semibold text-brand hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                  >
                    Clear filters
                  </button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={filteredPosts.map((post) => post.slug).join("|")}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                    className="flex flex-col gap-5"
                  >
                    {featuredPost && <FeaturedCard post={featuredPost} />}
                    {gridPosts.length > 0 && (
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {gridPosts.map((post) => <PostCard key={post.slug} post={post} />)}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
