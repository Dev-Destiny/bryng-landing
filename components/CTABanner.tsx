"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark floating card */}
        <div className="relative bg-[#12131A] rounded-[24px] overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center max-w-[1140px] mx-auto">
          {/* Purple radial glow at top-right */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#6C5CE7] opacity-20 blur-[80px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

          {/* Secondary glow - bottom left */}
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-[#6C5CE7] opacity-10 blur-[60px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 font-medium tracking-wider uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Trusted by 2,400+ students
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-5">
              Get reliable academic help.{" "}
              <span className="text-[#a29af0]">Without the extra stress.</span>
            </h2>

            <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed mb-10">
              Join thousands of Nigerian students who get quality academic work delivered on time — safely, transparently, and reliably.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group inline-flex items-center gap-2.5 bg-[#6C5CE7] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#5a4bd1] transition-all duration-200 hover:shadow-xl hover:shadow-[#6C5CE7]/30 hover:-translate-y-0.5"
              >
                Get Started Now
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors px-4 py-4"
              >
                See how it works →
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
              {[
                "🔒 Escrow Protected",
                "✅ Verified Writers",
                "⚡ Fast Delivery",
                "🛡️ Dispute Resolution",
              ].map((badge, i) => (
                <span
                  key={i}
                  className="text-xs text-white/40 font-medium border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
