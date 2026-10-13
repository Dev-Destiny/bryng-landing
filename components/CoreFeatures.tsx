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

interface TabData {
  id: string;
  tabLabel: string;
  tabIcon: typeof ShieldCheck;
  pillTag: string;
  pillColor: {
    bg: string;
    text: string;
  };
  headline: string;
  description: string;
  highlights: string[];
}

const tabs: TabData[] = [
  {
    id: "escrow",
    tabLabel: "Escrow security",
    tabIcon: ShieldCheck,
    pillTag: "SAFE ESCROW",
    pillColor: {
      bg: "bg-[#FEF9C3]", // Soft yellow pill matching the screenshot
      text: "text-[#854D0E]",
    },
    headline: "Guaranteed fund safety until you sign off",
    description:
      "Funds are held securely in platform escrow and are never released to the professional until you formally inspect and sign off on completed deliverables. Keep everyone accountable without financial anxiety.",
    highlights: [
      "Zero upfront payouts before satisfaction",
      "Automated milestone releases per chapter",
      "Refund protection backed by neutral mediation",
    ],
  },
  {
    id: "scholars",
    tabLabel: "Verified scholars",
    tabIcon: GraduationCap,
    pillTag: "VETTED EXPERTS",
    pillColor: {
      bg: "bg-[#FEF9C3]",
      text: "text-[#854D0E]",
    },
    headline: "Centralized access to vetted academic experts",
    description:
      "Every professional on Bryng completes identity and qualification vetting before bidding on briefs. Review subject specializations, completion history, and authentic student reviews in one clear view.",
    highlights: [
      "Verified MSc & PhD credentials",
      "100% on-time milestone delivery track record",
      "Direct encrypted messaging with your assigned scholar",
    ],
  },
  {
    id: "milestones",
    tabLabel: "Chapter milestones",
    tabIcon: ListOrdered,
    pillTag: "CHAPTER UPDATES",
    pillColor: {
      bg: "bg-[#FEF9C3]",
      text: "text-[#854D0E]",
    },
    headline: "Step-by-step progress before work advances",
    description:
      "Receive submissions chapter-by-chapter rather than waiting for a risky final reveal. Incorporate your supervisor's revisions early, approve completed sections, and maintain full project velocity.",
    highlights: [
      "Structured milestone approvals per chapter",
      "Inline supervisor feedback and revision tracking",
      "Real-time progress percentage indicators",
    ],
  },
  {
    id: "integrity",
    tabLabel: "Integrity check",
    tabIcon: FileCheck2,
    pillTag: "ORIGINALITY SCAN",
    pillColor: {
      bg: "bg-[#FEF9C3]",
      text: "text-[#854D0E]",
    },
    headline: "Automated error and plagiarism verification",
    description:
      "Every draft submitted through Bryng automatically generates a verifiable originality report. Verify similarity indices, reference formatting, and academic authenticity prior to milestone sign-off.",
    highlights: [
      "0.0% plagiarism audit report with each delivery",
      "Standard academic citation verification (APA, MLA, Harvard)",
      "Tamper-proof verifiable integrity certificate",
    ],
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
            Core Platform Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-4">
            Built for academic confidence
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
            Bryng gives students and professionals everything they need to stay aligned,
            track progress, and succeed — all in one place.
          </p>
        </motion.div>

        {/* Horizontal Tab Navigation Pill Bar (Grovia Style) */}
        <div className="flex justify-center mb-8 lg:mb-10">
          <div className="relative inline-flex items-center bg-bg-subtle/80 p-1.5 rounded-pill border border-border-subtle max-w-full overflow-x-auto no-scrollbar gap-1">
            {tabs.map((tab) => {
              const Icon = tab.tabIcon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-pill text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-200 z-10 ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-white rounded-pill shadow-xs border border-border-subtle -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={16}
                    className={isActive ? "text-brand" : "text-text-muted"}
                  />
                  <span>{tab.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Showcase Card (Grovia 2-Column Card with Left Mockup & Right Copy) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.99 }}
          className="bg-bg-surface border border-border-subtle hover:border-border-strong hover:shadow-md rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xs transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Rich Interactive Mockup (Matches dark-rimmed Grovia window preview) */}
            <div className="lg:col-span-7 w-full">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1E2029] to-[#12131A] p-2 sm:p-3 shadow-md border border-[#2D303E]">
                {/* Window Container */}
                <div className="bg-white rounded-xl p-4 sm:p-6 text-text-primary overflow-hidden">
                  {/* Mockup 1: Escrow Vault */}
                  {activeTabId === "escrow" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-text-primary">
                            Active Escrow Vault
                          </h4>
                          <p className="text-xs text-text-muted">
                            Project ID: #BRY-8924 • MSc Economics
                          </p>
                        </div>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-brand bg-brand-subtle px-2.5 py-1 rounded-pill border border-brand-border">
                          <Lock size={12} />
                          Held Neutral
                        </span>
                      </div>

                      {/* Selected / Highlighted Item (Yellow highlight matching Grovia screenshot) */}
                      <div className="bg-[#FEF9C3] border border-[#FDE047] rounded-xl p-4 transition-all">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                              CH 1
                            </div>
                            <div>
                              <p className="font-bold text-sm text-text-primary">
                                Chapter 1: Introduction & Scope
                              </p>
                              <p className="text-xs text-[#854D0E] font-medium">
                                Deliverable submitted • Awaiting review
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-bold text-text-primary">
                              ₦25,000
                            </span>
                          </div>
                        </div>

                        {/* Interactive Release Action */}
                        <div className="flex items-center justify-between pt-3 border-t border-[#FDE047]/60 mt-3">
                          <span className="text-xs text-[#854D0E] font-medium">
                            {escrowReleased ? "Funds Released ✓" : "Protected in Escrow"}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setEscrowReleased(!escrowReleased)}
                            className={`px-3.5 py-1.5 rounded-pill text-xs font-bold transition-colors ${
                              escrowReleased
                                ? "bg-success text-white"
                                : "bg-brand text-white hover:bg-brand-hover"
                            }`}
                          >
                            {escrowReleased ? "Approved & Paid" : "Approve & Release Funds"}
                          </motion.button>
                        </div>
                      </div>

                      {/* Other Milestones List */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-bg-subtle border border-border-subtle text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-white border border-border-default flex items-center justify-center text-text-muted font-bold text-[10px]">
                              CH 2
                            </div>
                            <div>
                              <p className="font-semibold text-text-primary">
                                Chapter 2: Literature Review
                              </p>
                              <p className="text-[11px] text-text-muted">
                                Milestone scheduled
                              </p>
                            </div>
                          </div>
                          <span className="font-bold text-text-primary">₦30,000</span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-bg-subtle border border-border-subtle text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-white border border-border-default flex items-center justify-center text-text-muted font-bold text-[10px]">
                              CH 3
                            </div>
                            <div>
                              <p className="font-semibold text-text-primary">
                                Chapter 3: Empirical Methodology
                              </p>
                              <p className="text-[11px] text-text-muted">
                                Milestone scheduled
                              </p>
                            </div>
                          </div>
                          <span className="font-bold text-text-primary">₦25,000</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mockup 2: Verified Scholars Directory (Matches Customer List in Screenshot) */}
                  {activeTabId === "scholars" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-text-primary">
                            Vetted Scholars
                          </h4>
                          <p className="text-xs text-text-muted">
                            Computer Science & Data Analytics
                          </p>
                        </div>
                        <span className="text-xs text-text-muted font-medium">
                          Sort by rating ▾
                        </span>
                      </div>

                      {/* Interactive Scholar Rows */}
                      {[
                        {
                          name: "Dr. Adaeze Umeh",
                          institution: "MSc & PhD • University of Lagos",
                          rating: "4.9",
                          tasks: "142 completed",
                          tag: "Top Rated",
                          initials: "AU",
                        },
                        {
                          name: "Chris Friedkly",
                          institution: "MSc Econometrics • Covenant University",
                          rating: "4.9",
                          tasks: "98 completed",
                          tag: "Verified",
                          initials: "CF",
                        },
                        {
                          name: "Gael Harry",
                          institution: "LLM International Law • UI",
                          rating: "4.8",
                          tasks: "114 completed",
                          tag: "Verified",
                          initials: "GH",
                        },
                        {
                          name: "Molly Smith",
                          institution: "MSc Biochemistry • ABU Zaria",
                          rating: "5.0",
                          tasks: "62 completed",
                          tag: "Top Rated",
                          initials: "MS",
                        },
                      ].map((scholar, idx) => {
                        const isSelected = selectedScholar === idx;
                        return (
                          <div
                            key={scholar.name}
                            onClick={() => setSelectedScholar(idx)}
                            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                              isSelected
                                ? "bg-[#FEF9C3] border border-[#FDE047]"
                                : "bg-bg-subtle/60 hover:bg-bg-subtle border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                                  isSelected
                                    ? "bg-brand text-white"
                                    : "bg-border-default text-text-primary"
                                }`}
                              >
                                {scholar.initials}
                              </div>
                              <div>
                                <p className="font-bold text-xs sm:text-sm text-text-primary">
                                  {scholar.name}
                                </p>
                                <p
                                  className={`text-[11px] ${
                                    isSelected ? "text-[#854D0E]" : "text-text-muted"
                                  }`}
                                >
                                  {scholar.institution}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1 text-xs font-bold text-text-primary">
                                <Star size={12} className="fill-brand text-brand" />
                                {scholar.rating}
                              </div>
                              <span className="text-[10px] font-semibold bg-white px-2 py-0.5 rounded-pill border border-border-subtle text-text-secondary">
                                {scholar.tasks}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Mockup 3: Chapter Milestones Tracking */}
                  {activeTabId === "milestones" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-text-primary">
                            Milestone Approval Tracker
                          </h4>
                          <p className="text-xs text-text-muted">
                            Project: Distributed Consensus Systems
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-success bg-success-subtle px-2.5 py-1 rounded-pill">
                          Phase 2 of 4 Active
                        </span>
                      </div>

                      {/* Selected Chapter Box (Yellow Highlight) */}
                      <div className="bg-[#FEF9C3] border border-[#FDE047] rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-[#854D0E] uppercase tracking-wider">
                            In Review • Chapter 2
                          </span>
                          <span className="text-xs font-bold text-text-primary">
                            8,400 Words
                          </span>
                        </div>
                        <p className="font-bold text-sm text-text-primary mb-1">
                          System Architecture & Fault-Tolerance Analysis
                        </p>
                        <p className="text-xs text-[#854D0E] mb-3">
                          Submitted by writer on Oct 12 • 2 revisions remaining
                        </p>

                        <div className="flex items-center gap-2 pt-2 border-t border-[#FDE047]/60">
                          <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setApprovedChapter(!approvedChapter)}
                            className={`px-3 py-1.5 rounded-pill text-xs font-bold transition-colors ${
                              approvedChapter
                                ? "bg-success text-white"
                                : "bg-brand text-white hover:bg-brand-hover"
                            }`}
                          >
                            {approvedChapter ? "Chapter Signed Off ✓" : "Approve Chapter"}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-3 py-1.5 rounded-pill text-xs font-semibold bg-white text-text-primary border border-border-default hover:bg-bg-subtle"
                          >
                            Request Edits
                          </motion.button>
                        </div>
                      </div>

                      {/* Timeline status items */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-bg-subtle border border-border-subtle text-xs">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-success" />
                            <span className="font-medium text-text-primary">
                              Chapter 1: Problem Statement & Context
                            </span>
                          </div>
                          <span className="font-semibold text-success">Approved</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-bg-subtle border border-border-subtle text-xs">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-text-muted" />
                            <span className="font-medium text-text-muted">
                              Chapter 3: Experimental Benchmark Evaluation
                            </span>
                          </div>
                          <span className="text-text-muted">Scheduled</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mockup 4: Originality and Plagiarism Verification */}
                  {activeTabId === "integrity" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-text-primary">
                            Integrity & Authenticity Audit
                          </h4>
                          <p className="text-xs text-text-muted">
                            Certified Originality Report
                          </p>
                        </div>
                        <span className="text-xs font-bold text-success bg-success-subtle px-2.5 py-1 rounded-pill">
                          Clean Scan
                        </span>
                      </div>

                      {/* Highlighted Verified Card (Yellow Highlight) */}
                      <div className="bg-[#FEF9C3] border border-[#FDE047] rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Sparkles size={16} className="text-brand" />
                            <span className="font-bold text-sm text-text-primary">
                              Turnitin-Standard Originality Index
                            </span>
                          </div>
                          <span className="text-base font-black text-success">
                            0.0%
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div className="bg-white/80 p-2 rounded-md">
                            <p className="text-[10px] text-text-muted">Direct Quotes</p>
                            <p className="font-bold text-text-primary">100% Referenced</p>
                          </div>
                          <div className="bg-white/80 p-2 rounded-md">
                            <p className="text-[10px] text-text-muted">Citation Format</p>
                            <p className="font-bold text-text-primary">APA 7th Verified</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-[#FDE047]/60">
                          <span className="text-[11px] text-[#854D0E] font-medium">
                            SHA-256 Audit Hash: 8f9a...c32d
                          </span>
                          <button className="inline-flex items-center gap-1 px-3 py-1 rounded-pill text-xs font-bold bg-brand text-white hover:bg-brand-hover">
                            <Download size={12} />
                            Certificate
                          </button>
                        </div>
                      </div>

                      {/* Breakdown Rows */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-bg-subtle border border-border-subtle text-xs">
                          <span className="text-text-primary font-medium">
                            Academic Database Cross-match
                          </span>
                          <span className="font-bold text-success">0 Matches</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-bg-subtle border border-border-subtle text-xs">
                          <span className="text-text-primary font-medium">
                            Internet & Repository Repetition
                          </span>
                          <span className="font-bold text-success">0 Matches</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Feature Copy and Highlighting (Matches right side in Grovia screenshot) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Clean Kicker */}
              <p className="text-xs font-bold text-brand uppercase tracking-wider mb-3">
                {activeTab.tabLabel}
              </p>

              {/* Bold Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight leading-tight mb-4">
                {activeTab.headline}
              </h3>

              {/* Description Body */}
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-8">
                {activeTab.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 mb-8">
                {activeTab.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <div className="w-5 h-5 rounded-full bg-brand-subtle text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-hover transition-colors group"
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
        </motion.div>
      </div>
    </section>
  );
}
