"use client";

import { Star, CheckCircle2, Shield, BookOpen, FileSearch } from "lucide-react";

// ---- Micro UI Widget Mockups ----

function WriterProfileWidget() {
  return (
    <div className="bg-white rounded-2xl border border-[#EAEAEA] p-5 shadow-sm w-full max-w-xs mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#a29af0] flex items-center justify-center text-white font-bold text-sm">
            AU
          </div>
          <div>
            <p className="font-semibold text-[#12131A] text-sm">Adaeze Umeh</p>
            <p className="text-xs text-gray-400">MSc. Computer Science</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-[#F3F0FF] text-[#6C5CE7] text-[10px] font-bold px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
          AI Verified
        </div>
      </div>
      {/* Stats */}
      <div className="flex items-center justify-between py-3 border-t border-b border-[#F5F5F5] mb-4">
        <div className="text-center">
          <div className="flex items-center gap-0.5 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[10px] text-gray-400 mt-0.5">4.9 Rating</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-[#12131A] text-sm">142</p>
          <p className="text-[10px] text-gray-400">Tasks Done</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-green-500 text-sm">100%</p>
          <p className="text-[10px] text-gray-400">On-Time</p>
        </div>
      </div>
      <button className="w-full bg-[#6C5CE7] text-white text-xs font-medium py-2.5 rounded-xl hover:bg-[#5a4bd1] transition-colors">
        View Profile
      </button>
    </div>
  );
}

function EscrowWidget() {
  const stages = [
    { label: "Deposit", status: "done" },
    { label: "Escrow Held", sublabel: "Active", status: "active" },
    { label: "Release Payment", status: "pending" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-[#EAEAEA] p-5 shadow-sm w-full max-w-xs mx-auto">
      <div className="flex items-center gap-2 mb-5">
        <Shield size={16} className="text-[#6C5CE7]" />
        <p className="font-semibold text-[#12131A] text-sm">Escrow Status</p>
      </div>
      <div className="flex items-center gap-0">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center w-full">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                  stage.status === "done"
                    ? "bg-green-500 text-white"
                    : stage.status === "active"
                    ? "bg-[#6C5CE7] text-white ring-4 ring-[#6C5CE7]/20"
                    : "bg-[#F5F5F5] text-gray-400"
                }`}
              >
                {stage.status === "done" ? (
                  <CheckCircle2 size={14} />
                ) : (
                  i + 1
                )}
              </div>
              <p className="text-[10px] font-medium text-center leading-tight text-[#12131A]">
                {stage.label}
              </p>
              {stage.sublabel && (
                <span className="text-[9px] text-[#6C5CE7] font-semibold">
                  ({stage.sublabel})
                </span>
              )}
            </div>
            {i < stages.length - 1 && (
              <div
                className={`h-[2px] w-full mx-1 rounded-full ${
                  i === 0 ? "bg-green-400" : "bg-[#EAEAEA]"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 bg-[#F3F0FF] rounded-xl p-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-400">Amount Held</p>
          <p className="font-bold text-[#12131A] text-base">₦25,000</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-400">Status</p>
          <p className="text-xs text-green-600 font-semibold">🔒 Secured</p>
        </div>
      </div>
    </div>
  );
}

function ChapterWidget() {
  const chapters = [
    { name: "Chapter 1: Introduction", status: "approved" },
    { name: "Chapter 2: Lit. Review", status: "in-review" },
    { name: "Chapter 3: Methodology", status: "pending" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-[#EAEAEA] p-5 shadow-sm w-full max-w-xs mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={16} className="text-[#6C5CE7]" />
        <p className="font-semibold text-[#12131A] text-sm">Chapter Progress</p>
      </div>
      <div className="space-y-2.5">
        {chapters.map((ch, i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded-xl px-3 py-2.5 border ${
              ch.status === "approved"
                ? "bg-green-50 border-green-200"
                : ch.status === "in-review"
                ? "bg-[#F3F0FF] border-[#D0CCFF]"
                : "bg-[#F9F9F9] border-[#EAEAEA]"
            }`}
          >
            <p className="text-xs font-medium text-[#12131A]">{ch.name}</p>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                ch.status === "approved"
                  ? "bg-green-500 text-white"
                  : ch.status === "in-review"
                  ? "bg-[#6C5CE7] text-white"
                  : "bg-[#EAEAEA] text-gray-400"
              }`}
            >
              {ch.status === "approved"
                ? "✓ Approved"
                : ch.status === "in-review"
                ? "In Review"
                : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlagiarismWidget() {
  return (
    <div className="bg-white rounded-2xl border border-[#EAEAEA] p-5 shadow-sm w-full max-w-xs mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <FileSearch size={16} className="text-[#6C5CE7]" />
        <p className="font-semibold text-[#12131A] text-sm">AI Integrity Check</p>
      </div>
      {/* Document preview lines */}
      <div className="space-y-1.5 mb-4">
        {[80, 100, 65, 90, 55].map((w, i) => (
          <div
            key={i}
            className="h-2 rounded-full bg-[#F0F0F0]"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      {/* Banner */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={16} className="text-green-600" />
        </div>
        <div>
          <p className="text-xs font-bold text-green-700">
            0% Plagiarism Detected
          </p>
          <p className="text-[10px] text-green-600">AI Integrity Check Passed</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="bg-[#F9F9F9] rounded-lg p-2 text-center">
          <p className="text-[10px] text-gray-400">AI Content</p>
          <p className="text-xs font-bold text-[#12131A]">2%</p>
        </div>
        <div className="bg-[#F9F9F9] rounded-lg p-2 text-center">
          <p className="text-[10px] text-gray-400">Originality</p>
          <p className="text-xs font-bold text-green-500">98%</p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    id: "F1",
    tag: "Tested Expert Writers",
    heading: "Work only with writers who have been verified and tested.",
    description:
      "Every professional on Bryng goes through our AI-powered screening and manual review process before they can accept any work. You get consistent quality, every time.",
    widget: <WriterProfileWidget />,
    bgAccent: "#F3F0FF",
  },
  {
    id: "F2",
    tag: "Safe Money Escrow",
    heading: "Your money is always protected — not just promised.",
    description:
      "Funds are only held in a secure escrow account and are never released to the writer until you approve the delivered work. No surprises, no risk.",
    widget: <EscrowWidget />,
    bgAccent: "#FFF4F0",
  },
  {
    id: "F3",
    tag: "Step-by-Step Chapter Updates",
    heading: "Stay in the loop at every stage of your project.",
    description:
      "Receive milestone updates chapter by chapter so you always know exactly where your project stands. Review and give feedback before work moves forward.",
    widget: <ChapterWidget />,
    bgAccent: "#F0FFF8",
  },
  {
    id: "F4",
    tag: "Automatic Error Checks",
    heading: "Every submission passes a thorough integrity check.",
    description:
      "Work delivered on Bryng is automatically scanned for plagiarism and AI-generated content. You receive a full integrity report with every delivery.",
    widget: <PlagiarismWidget />,
    bgAccent: "#FFFBF0",
  },
];

export default function CoreFeatures() {
  return (
    <section id="core-features" className="py-20 lg:py-28 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E5E0] text-xs font-medium text-gray-500 tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            02 / Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12131A] tracking-tight leading-tight max-w-2xl">
            What makes Bryng the best for you?
          </h2>
        </div>

        {/* Zig-Zag Feature Rows */}
        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16`}
              >
                {/* Text Content */}
                <div className="flex-1 max-w-lg">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#6C5CE7] bg-[#F3F0FF] mb-5">
                    {feature.id} • {feature.tag}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#12131A] leading-tight mb-4">
                    {feature.heading}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Widget Panel */}
                <div className="flex-1 w-full">
                  <div
                    className="rounded-3xl p-8 lg:p-10 flex items-center justify-center"
                    style={{ backgroundColor: feature.bgAccent }}
                  >
                    {feature.widget}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
