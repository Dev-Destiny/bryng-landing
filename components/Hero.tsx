"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-bg-base pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow kicker: clean, confident, no generic dots or badges */}
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">
            Academic Service Marketplace
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.12] mb-6">
            Academic help{" "}
            <span className="text-brand">without</span>{" "}
            the uncertainty.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-10 font-normal">
            Connect with verified professionals. Pay safely through escrow.
            Only release money when you&#39;re satisfied.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-3.5 rounded-pill font-semibold text-sm hover:bg-brand-hover transition-colors shadow-xs"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="#for-professionals"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border-strong text-text-primary px-7 py-3.5 rounded-pill font-semibold text-sm hover:bg-bg-surface transition-colors"
              >
                See as a Professional
              </Link>
            </motion.div>
          </div>

          {/* Grounded Hero Product Preview: Escrow & Verified Expert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="w-full max-w-2xl bg-bg-surface border border-border-subtle rounded-2xl p-5 sm:p-6 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Escrow Locked */}
              <div className="flex items-center gap-3 w-full sm:w-auto bg-bg-subtle/80 border border-border-subtle rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-brand-subtle text-brand flex items-center justify-center flex-shrink-0">
                  <Lock size={18} />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-text-primary">
                      Escrow Locked
                    </span>
                    <CheckCircle2 size={13} className="text-success" />
                  </div>
                  <p className="text-sm font-bold text-brand">
                    ₦25,000
                  </p>
                </div>
              </div>

              {/* Center Divider / Flow indicator */}
              <div className="hidden sm:flex items-center text-text-muted text-xs font-medium">
                Protected Milestone
              </div>

              {/* Verified Expert */}
              <div className="flex items-center gap-3 w-full sm:w-auto bg-bg-subtle/80 border border-border-subtle rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-success-subtle text-success flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-text-primary block">
                    Verified Expert
                  </span>
                  <p className="text-xs font-semibold text-success">
                    100% On-Time Completion
                  </p>
                </div>
              </div>
            </div>

            {/* Core Value Assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-border-subtle text-xs text-text-secondary text-left sm:text-center font-medium">
              <div>✓ Milestone escrow releases</div>
              <div>✓ Academic credential verification</div>
              <div>✓ Formal dispute protection</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
