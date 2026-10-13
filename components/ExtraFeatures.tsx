"use client";

import { MessageSquare, ShieldCheck, Scale } from "lucide-react";

const extraFeatures = [
  {
    icon: MessageSquare,
    title: "Safe In-App Chat",
    description:
      "Communicate directly through our built-in secure messaging workspace. Keep all project briefs, revisions, and files in one auditable place.",
    badge: "Direct & Audited",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Scholar Profiles",
    description:
      "Every professional provides verifiable academic backgrounds — including degrees, subject specializations, completion rates, and verified reviews.",
    badge: "Verified Backgrounds",
  },
  {
    icon: Scale,
    title: "Fair Dispute Resolution",
    description:
      "If expectations diverge, our structured mediation process steps in. Impartial academic evaluators review deliverables against the initial brief to issue fair rulings.",
    badge: "Neutral Mediation",
  },
];

export default function ExtraFeatures() {
  return (
    <section id="extra-features" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-pill border border-border-default bg-bg-surface text-xs font-semibold text-text-secondary tracking-wide uppercase mb-6 shadow-xs">
            03 / Extra Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight max-w-2xl">
            More tools to ensure your academic success.
          </h2>
        </div>

        {/* 3-column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extraFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-border-strong transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-md bg-brand-subtle text-brand flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-semibold text-text-secondary bg-bg-subtle px-2.5 py-1 rounded-pill border border-border-subtle">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-text-primary text-base mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
