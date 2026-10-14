"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { Button, Card } from "./ui";

export default function CTABanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg-base">
      {/* Expanded width container matching the wide Framer/Grovia card aesthetic */}
      <div className="max-w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <Card
            variant="imageBg"
            className="relative rounded-2xl sm:rounded-3xl lg:rounded-[36px] px-8 py-16 lg:px-20 lg:py-24 text-center overflow-hidden w-full"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
                Get reliable academic help. Without the extra stress.
              </h2>

              <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-normal">
                Work with tested professionals. Keep your funds secure in neutral escrow.
                Only release payments after you review and approve every deliverable.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/signup"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4"
                >
                  Get Started Now
                  <ArrowRight size={16} />
                </Button>
                <Button
                  href="#how-it-works"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto text-white/70 hover:text-white px-6 py-4"
                >
                  See how it works →
                </Button>
              </div>

              {/* Standard Security Safeguards */}
              <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12 flex-wrap pt-8 border-t border-white/10 text-xs sm:text-sm text-white/60 font-medium">
                <span className="flex items-center gap-1.5">
                  <Lock size={15} /> Escrow Protected
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> Verified Scholars
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} /> Impartial Mediation
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
