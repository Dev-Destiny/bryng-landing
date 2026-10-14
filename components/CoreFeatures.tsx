"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  ListOrdered,
  FileCheck2,
  CheckCircle2,
  Lock,
  ArrowRight,
  Star,
  Download,
  Check,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button, Card, Badge, SectionHeader } from "./ui";

interface TabData {
  id: string;
  tabLabel: string;
  tabIcon: typeof ShieldCheck;
  pillTag: string;
  headline: string;
  description: string;
  // highlights: string[];
}

// comment out all highlight fields to hide them

const tabs: TabData[] = [
  {
    id: "escrow",
    tabLabel: "Escrow security",
    tabIcon: ShieldCheck,
    pillTag: "SAFE ESCROW",
    headline: "Guaranteed fund safety until you sign off",
    description:
      "Funds are held securely in platform escrow and are never released to the professional until you formally inspect and sign off on completed deliverables. Keep everyone accountable without financial anxiety.",
    // highlights: [
    //   "Zero upfront payouts before satisfaction",
    //   "Automated milestone releases per chapter",
    //   "Refund protection backed by neutral mediation",
    // ],
  },
  {
    id: "scholars",
    tabLabel: "Verified scholars",
    tabIcon: GraduationCap,
    pillTag: "VETTED EXPERTS",
    headline: "Centralized access to vetted academic experts",
    description:
      "Every professional on Bryng completes identity and qualification vetting before bidding on briefs. Review subject specializations, completion history, and authentic student reviews in one clear view.",
    // highlights: [
    //   "Verified MSc & PhD credentials",
    //   "100% on-time milestone delivery track record",
    //   "Direct encrypted messaging with your assigned scholar",
    // ],
  },
  {
    id: "milestones",
    tabLabel: "Chapter milestones",
    tabIcon: ListOrdered,
    pillTag: "CHAPTER UPDATES",
    headline: "Step-by-step progress before work advances",
    description:
      "Receive submissions chapter-by-chapter rather than waiting for a risky final reveal. Incorporate your supervisor's revisions early, approve completed sections, and maintain full project velocity.",
    // highlights: [
    //   "Structured milestone approvals per chapter",
    //   "Inline supervisor feedback and revision tracking",
    //   "Real-time progress percentage indicators",
    // ],
  },
  {
    id: "integrity",
    tabLabel: "Integrity check",
    tabIcon: FileCheck2,
    pillTag: "ORIGINALITY SCAN",
    headline: "Automated error and plagiarism verification",
    description:
      "Every draft submitted through Bryng automatically generates a verifiable originality report. Verify similarity indices, reference formatting, and academic authenticity prior to milestone sign-off.",
    // highlights: [
    //   "0.0% plagiarism audit report with each delivery",
    //   "Standard academic citation verification (APA, MLA, Harvard)",
    //   "Tamper-proof verifiable integrity certificate",
    // ],
  },
];

export default function CoreFeatures() {
  const [activeTabId, setActiveTabId] = useState("escrow");
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  // Interactive mockup state
  const [escrowReleased, setEscrowReleased] = useState(false);
  const [selectedScholar, setSelectedScholar] = useState(0);
  const [approvedChapter, setApprovedChapter] = useState(false);

  return (
    <section id="core-features" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          kicker="Core Platform Features"
          title="Built for academic confidence"
          subtitle="Bryng gives students and professionals everything they need to stay aligned, track progress, and succeed — all in one place."
          className="mb-12 lg:mb-14"
        />

        {/* Sleek Pill Bar (Responsive: Stacks cleanly into a rounded card on mobile, spreads horizontally on desktop) */}
        <div className="flex justify-center mb-10 lg:mb-14">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-4xl bg-bg-muted border border-border-subtle/80 rounded-[28px] md:rounded-full p-2 md:p-2.5 flex flex-col md:flex-row items-stretch md:items-center gap-1.5 md:gap-1 shadow-xs transition-all">
            {tabs.map((tab) => {
              const Icon = tab.tabIcon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex-1 flex items-center justify-center gap-2.5 px-5 py-3 md:py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 z-10 cursor-pointer ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-border-subtle/50 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={17}
                    className={isActive ? "text-brand" : "text-text-muted"}
                  />
                  <span>{tab.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Card
            variant="default"
            className="p-6 sm:p-8 lg:p-8 rounded-3xl lg:rounded-[36px] border-border-subtle shadow-[0_12px_40px_rgba(0,0,0,0.03)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Rich Interactive Mockup */}
              <div className="lg:col-span-6 w-full h-full">
                <Card variant="imageBg" className="w-full h-full">
                  <div></div>
                </Card>
              </div>

              {/* Right Column: Feature Copy and Highlighting */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {/* Yellow Pill Tag matching Screenshot */}
                <div className="mb-5">
                  <span className="inline-block bg-yellow-500/10 text-yellow-500 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                    {activeTab.pillTag}
                  </span>
                </div>

                {/* Bold Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-primary tracking-tight leading-[1.18] mb-5">
                  {activeTab.headline}
                </h3>

                {/* Description Body */}
                <p className="text-text-secondary leading-relaxed text-base sm:text-lg mb-8 font-normal">
                  {activeTab.description}
                </p>

                {/* Highlights List */}
                {/* <div className="space-y-3 mb-8">
                  {activeTab.highlights && activeTab.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-brand-subtle text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div> */}

                {/* Action Link */}
                <div>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand hover:text-brand-hover transition-colors group"
                  >
                    Explore how it works
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
