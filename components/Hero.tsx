"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FBFBF9] pt-20">
      {/* Subtle radial bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6C5CE7]/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex flex-col items-center text-center py-20 lg:py-28">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E5E0] bg-white/80 text-xs font-medium text-gray-500 tracking-wider uppercase mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Now live in Nigeria • Join 2,400+ students
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#12131A] tracking-tight leading-[1.08] max-w-4xl mb-6">
            Academic help{" "}
            <span className="relative inline-block">
              without
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C40 2 80 1 100 2C120 3 160 5 198 6"
                  stroke="#6C5CE7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            the uncertainty.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed mb-10">
            Connect with verified professionals. Pay safely through escrow.
            Only release money when you&#39;re satisfied.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 bg-[#6C5CE7] text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#5a4bd1] transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="#for-professionals"
              className="inline-flex items-center gap-2 border border-[#D0CCFF] text-[#6C5CE7] px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#F3F0FF] transition-all duration-200"
            >
              See as a Professional
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="flex items-center gap-6 mt-12 flex-wrap justify-center">
            <div className="flex -space-x-2">
              {["#6C5CE7", "#FF6B6B", "#20C997", "#FFC107"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {["A", "M", "D", "K"][i]}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-[#12131A]">2,400+</span>{" "}
              students helped this month
            </div>
            <div className="flex items-center gap-1 text-sm">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-gray-500 ml-1">4.9/5</span>
            </div>
          </div>

          {/* Floating Badge A - Escrow Locked (Top Right) */}
          <div className="absolute top-16 right-4 lg:right-12 xl:right-20 animate-float hidden sm:block">
            <div className="bg-white border border-[#EAEAEA] rounded-2xl px-4 py-3 shadow-xl shadow-gray-200/50 flex items-center gap-3 max-w-[210px]">
              <div className="w-9 h-9 rounded-xl bg-[#F3F0FF] flex items-center justify-center text-base flex-shrink-0">
                🔒
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-semibold text-[#12131A] leading-tight">
                    Escrow Locked
                  </p>
                  <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" />
                </div>
                <p className="text-sm font-bold text-[#6C5CE7] mt-0.5">
                  ₦25,000
                </p>
              </div>
            </div>
          </div>

          {/* Floating Badge B - Verified Expert (Bottom Left) */}
          <div className="absolute bottom-20 left-4 lg:left-12 xl:left-20 animate-float-delay hidden sm:block">
            <div className="bg-white border border-[#EAEAEA] rounded-2xl px-4 py-3 shadow-xl shadow-gray-200/50 flex items-center gap-3 max-w-[220px]">
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#a29af0] flex items-center justify-center text-white text-xs font-bold">
                  JA
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#12131A] leading-tight">
                  Verified Expert
                </p>
                <p className="text-xs text-green-600 font-medium mt-0.5">
                  100% On-Time ✓
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
