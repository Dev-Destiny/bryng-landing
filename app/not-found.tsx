import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found | Bryng",
  description: "We couldn't find that page. Head back to Bryng or browse the journal.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-base">
      <Navbar />

      <section className="flex flex-1 items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <p
            aria-hidden="true"
            className="select-none text-center text-[clamp(9rem,30vw,21rem)] font-extrabold leading-[0.72] tracking-[-0.1em] text-brand sm:text-[clamp(12rem,28vw,21rem)] lg:text-left"
          >
            404
          </p>

          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="mb-4 text-sm font-semibold text-brand">Wrong turn?</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              This page seems to have wandered off.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
              The link may be old, or the address might have a typo. Let’s get you somewhere useful.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-pill border border-transparent bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Bryng
              </Link>
              <Link
                href="/blog"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-pill border border-border-default bg-bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Browse the journal
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
