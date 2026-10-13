"use client";

import { useState } from "react";
import {
  UserPlus,
  FileText,
  SlidersHorizontal,
  Wallet,
  Clock,
  CheckCircle,
} from "lucide-react";

interface StepItem {
  icon: typeof UserPlus;
  title: string;
  description: string;
}

const studentSteps: StepItem[] = [
  {
    icon: UserPlus,
    title: "1. Create Account",
    description: "Register with your student email. Free to browse and post tasks without upfront fees.",
  },
  {
    icon: FileText,
    title: "2. Submit Task Brief",
    description: "Detail your academic level, subject matter, milestone deadlines, and formatting requirements.",
  },
  {
    icon: SlidersHorizontal,
    title: "3. Review Qualifications",
    description: "Inspect verified credentials, past academic subject ratings, and choose your preferred expert.",
  },
  {
    icon: Wallet,
    title: "4. Fund Secure Escrow",
    description: "Deposit funds into neutral platform escrow. Payment is safely held and never paid out in advance.",
  },
  {
    icon: Clock,
    title: "5. Review Milestones",
    description: "Track progress chapter-by-chapter and communicate directly through encrypted in-app messaging.",
  },
  {
    icon: CheckCircle,
    title: "6. Accept & Release",
    description: "Perform your final review and release funds only after you confirm every requirement is met.",
  },
];

const professionalSteps: StepItem[] = [
  {
    icon: UserPlus,
    title: "1. Verify Credentials",
    description: "Submit academic transcripts and qualifications to be reviewed by the Bryng onboarding board.",
  },
  {
    icon: FileText,
    title: "2. Explore Available Requests",
    description: "Review academic project requests strictly matching your disciplines and expertise.",
  },
  {
    icon: SlidersHorizontal,
    title: "3. Propose Scope & Milestones",
    description: "Submit clear milestones, turnaround schedules, and fee proposals directly to clients.",
  },
  {
    icon: Wallet,
    title: "4. Confirmed Escrow Funding",
    description: "Begin work only once the client funds the platform escrow deposit for the milestone.",
  },
  {
    icon: Clock,
    title: "5. Deliver Chapter Drafts",
    description: "Submit structured drafts at agreed milestones for transparent progress reviews.",
  },
  {
    icon: CheckCircle,
    title: "6. Guaranteed Payouts",
    description: "Receive instant wallet credits upon client approval, with direct bank withdrawals.",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"students" | "professionals">(
    "students"
  );

  const steps = activeTab === "students" ? studentSteps : professionalSteps;

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-pill border border-border-default bg-bg-surface text-xs font-semibold text-text-secondary tracking-wide uppercase mb-6 shadow-xs">
            01 / How Bryng Works
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight max-w-2xl mb-8">
            From sign up to complete project in 6 steps
          </h2>

          {/* Segmented Toggle */}
          <div className="inline-flex items-center bg-bg-subtle border border-border-subtle rounded-pill p-1 gap-1">
            <button
              onClick={() => setActiveTab("students")}
              className={`px-5 py-2 rounded-pill text-sm font-semibold transition-colors ${
                activeTab === "students"
                  ? "bg-brand text-white shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setActiveTab("professionals")}
              className={`px-5 py-2 rounded-pill text-sm font-semibold transition-colors ${
                activeTab === "professionals"
                  ? "bg-brand text-white shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              For Professionals
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={`${activeTab}-${index}`}
                className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-border-strong transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-brand-subtle text-brand flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-bold text-text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-bold text-text-primary text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
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
