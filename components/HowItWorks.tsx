"use client";

import { useState } from "react";
import {
  UserPlus,
  FileText,
  Settings2,
  Wallet,
  Eye,
  CheckCircle,
} from "lucide-react";

const studentSteps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up for free in under 2 minutes. No payment required to get started.",
    color: "#F3F0FF",
    iconColor: "#6C5CE7",
  },
  {
    icon: FileText,
    title: "Submit Task",
    description: "Describe your project clearly — topic, deadline, requirements, and format.",
    color: "#FFF4F0",
    iconColor: "#FF6B6B",
  },
  {
    icon: Settings2,
    title: "Choose Requirements",
    description: "Select a verified professional whose profile matches your academic needs.",
    color: "#F0FFF8",
    iconColor: "#20C997",
  },
  {
    icon: Wallet,
    title: "Pay via Escrow",
    description: "Fund your escrow wallet. Money is held securely until you're satisfied.",
    color: "#FFFBF0",
    iconColor: "#FFC107",
  },
  {
    icon: Eye,
    title: "Track Progress",
    description: "Get chapter-by-chapter updates and message your writer anytime.",
    color: "#F0F4FF",
    iconColor: "#4A90D9",
  },
  {
    icon: CheckCircle,
    title: "Accept & Release",
    description: "Review the final work and release payment only when you're fully satisfied.",
    color: "#F3F0FF",
    iconColor: "#6C5CE7",
  },
];

const professionalSteps = [
  {
    icon: UserPlus,
    title: "Apply & Get Verified",
    description: "Submit your profile and pass our AI-powered academic verification process.",
    color: "#F3F0FF",
    iconColor: "#6C5CE7",
  },
  {
    icon: FileText,
    title: "Browse Requests",
    description: "Explore open student requests and filter by your area of expertise.",
    color: "#FFF4F0",
    iconColor: "#FF6B6B",
  },
  {
    icon: Settings2,
    title: "Send a Proposal",
    description: "Submit a competitive proposal with your price, timeline, and approach.",
    color: "#F0FFF8",
    iconColor: "#20C997",
  },
  {
    icon: Wallet,
    title: "Escrow Security",
    description: "Work confidently knowing payment is already locked in escrow for you.",
    color: "#FFFBF0",
    iconColor: "#FFC107",
  },
  {
    icon: Eye,
    title: "Deliver Updates",
    description: "Submit chapter milestones and communicate directly through the platform.",
    color: "#F0F4FF",
    iconColor: "#4A90D9",
  },
  {
    icon: CheckCircle,
    title: "Get Paid",
    description: "Once the student approves, your earnings are released instantly to your wallet.",
    color: "#F3F0FF",
    iconColor: "#6C5CE7",
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
      className="py-20 lg:py-28 bg-[#FBFBF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E5E0] text-xs font-medium text-gray-500 tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            01 / How Bryng Works
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12131A] tracking-tight leading-tight max-w-2xl mb-8">
            From sign up to complete project in 6 steps
          </h2>

          {/* Segmented Toggle */}
          <div className="inline-flex items-center bg-[#F0EFFE] rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveTab("students")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "students"
                  ? "bg-[#6C5CE7] text-white shadow-sm"
                  : "text-[#6C5CE7] hover:text-[#5a4bd1]"
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setActiveTab("professionals")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "professionals"
                  ? "bg-[#6C5CE7] text-white shadow-sm"
                  : "text-[#6C5CE7] hover:text-[#5a4bd1]"
              }`}
            >
              For Professionals
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={`${activeTab}-${index}`}
                className="group bg-white border border-[#EAEAEA] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Step number */}
                <span className="absolute top-4 right-5 text-5xl font-black text-[#12131A]/4 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: step.color }}
                >
                  <Icon size={20} style={{ color: step.iconColor }} />
                </div>

                <h3 className="font-semibold text-[#12131A] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-dashed border-t-2 border-dashed border-[#D0CCFF] z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
