"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Lock } from "lucide-react";
import { Button, Card, Badge } from "./ui";

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
          <Badge variant="kicker" className="mb-6">
            Academic Service Marketplace
          </Badge>

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
            <Button
              href="/signup"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Started
              <ArrowRight size={16} />
            </Button>
            <Button
              href="#for-professionals"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              See as a Professional
            </Button>
          </div>

          {/* Grounded Hero Product Preview: Escrow & Verified Expert */}

        </motion.div>
      </div>
    </section>
  );
}
