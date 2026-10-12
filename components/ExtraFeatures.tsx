"use client";

import { MessageSquare, User, Scale } from "lucide-react";

const extraFeatures = [
  {
    icon: MessageSquare,
    iconBg: "#F3F0FF",
    iconColor: "#6C5CE7",
    title: "Safe In-App Chat",
    description:
      "Communicate directly with your writer or student through our built-in secure messaging system. Keep all project conversations in one traceable place — no external apps needed.",
    badge: "End-to-end secure",
  },
  {
    icon: User,
    iconBg: "#FFF4F0",
    iconColor: "#FF6B6B",
    title: "Clear Writer Profiles",
    description:
      "Every professional has a detailed, transparent profile — complete with academic credentials, subject specializations, ratings, reviews, and completion history.",
    badge: "Fully transparent",
  },
  {
    icon: Scale,
    iconBg: "#F0FFF8",
    iconColor: "#20C997",
    title: "Fair Problem Solving",
    description:
      "If a disagreement arises, our structured dispute resolution system steps in. An impartial Bryng reviewer examines the project requirements and makes a fair ruling.",
    badge: "Impartial & fast",
  },
];

export default function ExtraFeatures() {
  return (
    <section id="extra-features" className="py-20 lg:py-28 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E5E0] text-xs font-medium text-gray-500 tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            03 / Extra Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12131A] tracking-tight leading-tight max-w-2xl">
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
                className="group bg-white border border-[#EAEAEA] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Icon Badge */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <Icon size={20} style={{ color: feature.iconColor }} />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#12131A] text-base leading-tight flex-1 pr-2">
                    {feature.title}
                  </h3>
                  <span
                    className="text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{
                      backgroundColor: feature.iconBg,
                      color: feature.iconColor,
                    }}
                  >
                    {feature.badge}
                  </span>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Hover bottom accent */}
                <div
                  className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500 mt-5"
                  style={{ backgroundColor: feature.iconColor }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
