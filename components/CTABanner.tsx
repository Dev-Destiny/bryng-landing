"use client";

import { ArrowRight } from "lucide-react";
import { Button, Card } from "./ui";

export default function CTABanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg-base">
      {/* Expanded width container matching the wide Framer/Grovia card aesthetic */}
      <div className="max-w-full mx-auto px-4">
        <div className="w-full">
          <Card
            variant="imageBg"
            className="relative w-full rounded-wrapper px-8 py-16 text-center overflow-hidden lg:px-20 lg:py-24"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
                Ready to find your expert?
              </h2>

              <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-normal">
                Tell us what you&apos;re working on. Choose an expert, agree on the milestones, and take it from there.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/signup"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4"
                >
                  Create your free account
                  <ArrowRight size={16} />
                </Button>
                <Button
                  href="#how-it-works"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto text-white/70 hover:text-white px-6 py-4"
                >
                  Walk me through it
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
