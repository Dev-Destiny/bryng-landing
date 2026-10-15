"use client";

import { MessageSquare, ShieldCheck, Scale } from "lucide-react";
import { Card, CardTitle, CardDescription, SectionHeader } from "./ui";

const extraFeatures = [
  {
    icon: MessageSquare,
    title: "Keep the conversation together.",
    description:
      "Keep your brief, feedback, and files in one place, so everyone can refer to the same details.",
  },
  {
    icon: ShieldCheck,
    title: "Know who you’re working with.",
    description:
      "Check an expert’s qualifications, subject areas, experience, and student reviews before choosing.",
  },
  {
    icon: Scale,
    title: "A way forward when plans change.",
    description:
      "If a delivery misses the agreed brief, ask Bryng to review the work and help find a fair resolution.",
  },
];

export default function ExtraFeatures() {
  return (
    <section id="extra-features" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="And if plans change?"
          subtitle="Keep the people, project details, and next steps connected along the way."
          className="mb-14"
        />

        {/* 3-column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extraFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex h-full">
                <Card
                  variant="default"
                  interactive
                  className="p-7 flex flex-col justify-between w-full shadow-xs rounded-wrapper"
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

                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
