"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  FileText,
  SlidersHorizontal,
  Wallet,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface StepItem {
  number: string;
  badge: string;
  title: string;
  description: string;
  icon: typeof UserPlus;
  tag: string;
  preview: {
    label: string;
    sublabel: string;
    meta: string;
    status: string;
  };
}

const studentSteps: StepItem[] = [
  {
    number: "01",
    badge: "ACCOUNT SETUP",
    title: "Create Free Student Account",
    description:
      "Register using your academic email in less than 2 minutes. Browse vetted professionals and explore pricing with zero commitment.",
    icon: UserPlus,
    tag: "Free Onboarding",
    preview: {
      label: "student.verified@campus.edu.ng",
      sublabel: "Identity & 2FA Active",
      meta: "0 Upfront Cost",
      status: "Ready",
    },
  },
  {
    number: "02",
    badge: "PROJECT SCOPE",
    title: "Submit Task Brief & Rubric",
    description:
      "Specify your academic degree level, topic, guidelines, formatting standards (APA/Harvard), and chapter deadline milestones.",
    icon: FileText,
    tag: "Structured Brief",
    preview: {
      label: "MSc Economics Dissertation",
      sublabel: "3 Milestones • 18 Days",
      meta: "Rubric Attached",
      status: "Brief Posted",
    },
  },
  {
    number: "03",
    badge: "EXPERT MATCH",
    title: "Select Your Verified Scholar",
    description:
      "Review transparent scholar profiles, subject credentials, verified ratings, and past completion rates before making your selection.",
    icon: SlidersHorizontal,
    tag: "Vetted Academics",
    preview: {
      label: "Dr. Adaeze Umeh • PhD UI",
      sublabel: "4.9★ (142 Projects Completed)",
      meta: "Top Match",
      status: "Scholar Assigned",
    },
  },
  {
    number: "04",
    badge: "SAFE DEPOSIT",
    title: "Fund Milestone Escrow",
    description:
      "Deposit payment into neutral platform escrow. Your funds are secured and never released to the professional until you approve the draft.",
    icon: Wallet,
    tag: "Neutral Escrow",
    preview: {
      label: "₦25,000 Locked in Neutral Escrow",
      sublabel: "Safe Milestone Deposit",
      meta: "100% Protected",
      status: "Funds Locked",
    },
  },
  {
    number: "05",
    badge: "CHAPTER DELIVERY",
    title: "Track Chapter-by-Chapter",
    description:
      "Receive progressive drafts section by section. Review supervisor feedback, request revisions, and communicate through secure in-app chat.",
    icon: Clock,
    tag: "Iterative Review",
    preview: {
      label: "Chapter 1: Scope & Methodology",
      sublabel: "Draft submitted for student audit",
      meta: "Revision 1/2",
      status: "In Review",
    },
  },
  {
    number: "06",
    badge: "APPROVAL & PAYOUT",
    title: "Sign Off & Release Payment",
    description:
      "Review the finalized work and originality report. Only when you confirm 100% satisfaction do you authorize release of escrow funds.",
    icon: CheckCircle,
    tag: "Guaranteed Payout",
    preview: {
      label: "Final Thesis Audit: Approved",
      sublabel: "Turnitin: 0.0% • 100% Verified",
      meta: "Receipt Issued",
      status: "Escrow Released",
    },
  },
];

const professionalSteps: StepItem[] = [
  {
    number: "01",
    badge: "QUALIFICATION",
    title: "Credential Assessment",
    description:
      "Submit your degrees, published research, and academic background to be vetted by Bryng's academic onboarding committee.",
    icon: UserPlus,
    tag: "Vetting Board",
    preview: {
      label: "Academic Transcripts Verified",
      sublabel: "PhD Economics & Quantitative Finance",
      meta: "Badge Granted",
      status: "Accredited",
    },
  },
  {
    number: "02",
    badge: "MATCHING BRIEFS",
    title: "Review Direct Task Requests",
    description:
      "Receive student task briefs strictly matching your verified subjects. Filter by turnaround timeline, scope, and target compensation.",
    icon: FileText,
    tag: "Targeted Requests",
    preview: {
      label: "Empirical Econometrics Project",
      sublabel: "Postgraduate Level • 2 Weeks",
      meta: "Budget: ₦85,000",
      status: "Direct Request",
    },
  },
  {
    number: "03",
    badge: "PROPOSAL MILESTONES",
    title: "Structure Milestone Schedule",
    description:
      "Submit transparent chapter-by-chapter delivery dates and milestone pricing directly through your professional dashboard.",
    icon: SlidersHorizontal,
    tag: "Milestone Contract",
    preview: {
      label: "Phase 1: Literature Review & Gap",
      sublabel: "Milestone: ₦30,000 Delivery Target",
      meta: "3 Chapters",
      status: "Contract Set",
    },
  },
  {
    number: "04",
    badge: "ESCROW SECURITY",
    title: "Guaranteed Escrow Lock",
    description:
      "Start writing with complete confidence knowing the student's payment is already locked in platform escrow before work begins.",
    icon: Wallet,
    tag: "Payment Assurance",
    preview: {
      label: "₦85,000 Secured in Platform Escrow",
      sublabel: "Zero payment default risk",
      meta: "Guaranteed",
      status: "Vault Confirmed",
    },
  },
  {
    number: "05",
    badge: "DRAFT SUBMISSION",
    title: "Deliver Progressive Drafts",
    description:
      "Upload formatted chapters as you complete them. Address student or supervisor notes collaboratively in the direct project workspace.",
    icon: Clock,
    tag: "Transparent Delivery",
    preview: {
      label: "Chapter 1 Draft Uploaded",
      sublabel: "Includes referencing & clean data sets",
      meta: "Timestamped",
      status: "Submitted",
    },
  },
  {
    number: "06",
    badge: "INSTANT EARNINGS",
    title: "Receive Instant Wallet Credits",
    description:
      "Once approved by the student, funds are deposited immediately into your Bryng wallet for direct withdrawal to your domestic bank.",
    icon: CheckCircle,
    tag: "Direct Bank Transfer",
    preview: {
      label: "Wallet Credit: ₦85,000",
      sublabel: "Immediate Domestic Bank Transfer",
      meta: "0 Delay",
      status: "Payout Cleared",
    },
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"students" | "professionals">("students");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);
  const steps = activeTab === "students" ? studentSteps : professionalSteps;

  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState, activeTab]);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth = 380;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleTabChange = (tab: "students" | "professionals") => {
    setActiveTab(tab);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
            How Bryng Works
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-4">
            From sign up to completed project in 6 steps
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            Experience complete transparency with escrow-backed chapters. Scroll through the workflow
            below to see exactly how your academic work is protected.
          </p>

          {/* Segmented Pill Toggle + Nav Bar Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 pt-2">
            {/* Toggle */}
            <div className="relative inline-flex items-center bg-bg-subtle border border-border-subtle rounded-pill p-1 gap-1">
              <button
                onClick={() => handleTabChange("students")}
                className={`relative px-5 py-2 rounded-pill text-xs sm:text-sm font-semibold transition-colors z-10 ${
                  activeTab === "students"
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeTab === "students" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand rounded-pill shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>For Students</span>
              </button>
              <button
                onClick={() => handleTabChange("professionals")}
                className={`relative px-5 py-2 rounded-pill text-xs sm:text-sm font-semibold transition-colors z-10 ${
                  activeTab === "professionals"
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeTab === "professionals" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand rounded-pill shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>For Professionals</span>
              </button>
            </div>

            {/* Carousel Arrow Controls & Step Counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-text-muted hidden sm:inline-block">
                Drag or scroll to explore
              </span>
              <div className="flex items-center gap-1.5 bg-bg-surface border border-border-subtle rounded-pill p-1 shadow-xs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className={`w-8 h-8 rounded-pill flex items-center justify-center transition-colors ${
                    canScrollLeft
                      ? "text-text-primary hover:bg-bg-subtle hover:text-brand"
                      : "text-text-muted/40 cursor-not-allowed"
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <div className="h-4 w-px bg-border-subtle" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className={`w-8 h-8 rounded-pill flex items-center justify-center transition-colors ${
                    canScrollRight
                      ? "text-text-primary hover:bg-bg-subtle hover:text-brand"
                      : "text-text-muted/40 cursor-not-allowed"
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Track Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={`${activeTab}-${step.number}`}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.99 }}
                  className="w-[300px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start bg-bg-surface border border-border-subtle rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-brand/40 transition-shadow duration-300 flex flex-col justify-between group cursor-grab active:cursor-grabbing"
                >
                  {/* Top: Badges and Step Index */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      {/* Step Number Pill */}
                      <span className="px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wider bg-brand-subtle text-brand border border-brand-border">
                        Step {step.number}
                      </span>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-bold text-text-primary text-lg mb-2.5 group-hover:text-brand transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom: Dimensional Micro-Preview Artifact */}
                  <div className="bg-bg-subtle border border-border-subtle rounded-xl p-3.5 space-y-2 mt-auto">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-text-primary truncate pr-2">
                        {step.preview.label}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-pill bg-white text-brand border border-border-subtle shrink-0">
                        {step.preview.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-text-muted pt-1 border-t border-border-subtle/80">
                      <span>{step.preview.sublabel}</span>
                      <span className="font-semibold text-brand">
                        {step.preview.meta}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Progress Track (Underneath) */}
          <div className="mt-8 max-w-xs mx-auto flex items-center gap-3">
            <span className="text-[11px] font-bold text-text-muted">01</span>
            <div className="flex-1 h-1 bg-border-subtle rounded-pill overflow-hidden">
              <div
                className="h-full bg-brand transition-all duration-200 rounded-pill"
                style={{ width: `${Math.max(16, scrollProgress)}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-text-muted">06</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
