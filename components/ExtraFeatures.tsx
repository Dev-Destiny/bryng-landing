"use client";

import { motion } from "framer-motion";
import { MessageSquare, ShieldCheck, Scale, Check } from "lucide-react";
import { Card, CardTitle, CardDescription, CardFooter, SectionHeader } from "./ui";

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
        <SectionHeader
          kicker="Academic Safeguards"
          title="More tools to ensure your academic success."
          subtitle="Built-in protections to keep every project accountable, transparent, and completely conflict-free."
          className="mb-14"
        />

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
                className="h-full flex"
              >
                <Card
                  variant="default"
                  interactive
                  className="p-7 flex flex-col justify-between w-full shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand flex items-center justify-center mb-6">
                      <Icon size={22} />
                    </div>

                    <CardTitle className="mb-2.5">
                      {feature.title}
                    </CardTitle>

                    <CardDescription className="mb-6 font-normal">
                      {feature.description}
                    </CardDescription>
                  </div>

                  <CardFooter className="text-xs font-semibold text-text-muted gap-2">
                    <Check size={14} className="text-brand shrink-0" strokeWidth={2.5} />
                    <span>{feature.benefit}</span>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
