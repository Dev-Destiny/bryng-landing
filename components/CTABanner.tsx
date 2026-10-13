"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark container card */}
        <div className="relative bg-dark-bg rounded-xl border border-dark-border px-8 py-16 lg:px-16 lg:py-20 text-center max-w-[1140px] mx-auto overflow-hidden">
          <div className="relative z-10">
            {/* Clean Eyebrow */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-pill border border-white/15 bg-white/5 text-xs text-white/70 font-semibold tracking-wide uppercase mb-8">
              Guaranteed Milestone Escrow
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-5">
              Get reliable academic help. Without the extra stress.
            </h2>

            <p className="text-white/60 text-base max-w-lg mx-auto leading-relaxed mb-10">
              Work with tested professionals. Keep your funds secure in escrow.
              Only release payments after you review and approve every deliverable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-pill font-semibold text-sm hover:bg-brand-hover transition-colors shadow-xs"
              >
                Get Started Now
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors px-6 py-4"
              >
                See how it works →
              </Link>
            </div>

            {/* Standard Security Safeguards */}
            <div className="flex items-center justify-center gap-6 mt-12 flex-wrap pt-8 border-t border-white/10 text-xs text-white/60 font-medium">
              <span className="flex items-center gap-1.5">
                <Lock size={14} className="text-brand-border" /> Escrow Protected
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-brand-border" /> Verified Scholars
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-border" /> Impartial Mediation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
