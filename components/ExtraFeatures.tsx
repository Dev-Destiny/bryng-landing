"use client";

import { motion } from "framer-motion";
import { MessageSquare, ShieldCheck, Scale, Check } from "lucide-react";

const extraFeatures = [
  {
    icon: MessageSquare,
    title: "Safe In-App Chat",
    description:
      "Communicate directly through our built-in secure messaging workspace. Keep all project briefs, revisions, and files in one auditable place.",
    benefit: "Encrypted project records",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Scholar Profiles",
    description:
      "Every professional provides verifiable academic backgrounds — including degrees, subject specializations, completion rates, and verified reviews.",
    benefit: "Academic credential review",
  },
  {
    icon: Scale,
    title: "Fair Dispute Resolution",
    description:
      "If expectations diverge, our structured mediation process steps in. Impartial academic evaluators review deliverables against the initial brief to issue fair rulings.",
    benefit: "Binding neutral arbitration",
  },
];

export default function ExtraFeatures() {
  return (
    <section id="extra-features" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
            Academic Safeguards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-4">
            More tools to ensure your academic success.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Built-in protections to keep every project accountable, transparent, and completely conflict-free.
          </p>
        </motion.div>

        {/* 3-column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extraFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.99 }}
                className="bg-bg-surface border border-border-subtle rounded-2xl p-7 hover:border-border-strong hover:shadow-md transition-all flex flex-col justify-between shadow-xs cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand flex items-center justify-center mb-6">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-bold text-text-primary text-lg mb-2.5">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-border-subtle text-xs font-semibold text-text-muted">
                  <Check size={14} className="text-brand shrink-0" strokeWidth={2.5} />
                  <span>{feature.benefit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
