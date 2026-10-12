"use client";

import { Check, X } from "lucide-react";

type FeatureStatus = boolean | "partial";

interface ComparisonRow {
  feature: string;
  bryng: FeatureStatus;
  whatsapp: FeatureStatus;
  general: FeatureStatus;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Verified & Tested Professionals",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Secure Escrow Payment",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Milestone Chapter Updates",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "AI Plagiarism & Integrity Check",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Academic Subject Specialization",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Built-in Dispute Resolution",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Student-Focused Platform",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Money-Back Guarantee",
    bryng: true,
    whatsapp: false,
    general: false,
  },
];

function StatusCell({ value }: { value: FeatureStatus }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
          <Check size={13} className="text-green-600 font-bold" strokeWidth={3} />
        </div>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <span className="text-[11px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
          Varies
        </span>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
        <X size={13} className="text-red-400" strokeWidth={3} />
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 lg:py-28 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E5E0] text-xs font-medium text-gray-500 tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            04 / The Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12131A] tracking-tight leading-tight mb-4">
            Why Bryng Is Different
          </h2>
          <p className="text-gray-500 max-w-xl leading-relaxed">
            Other methods leave you guessing and hoping for the best, but Bryng
            is built entirely for academic success.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-[#EAEAEA] shadow-sm">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="border-b border-[#EAEAEA]">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400 w-[40%]">
                  Feature
                </th>
                {/* Bryng Column — highlighted */}
                <th className="px-6 py-4 w-[20%]">
                  <div className="bg-[#F3F0FF] rounded-xl px-3 py-2 text-center">
                    <span className="text-sm font-bold text-[#6C5CE7]">
                      Bryng ✦
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 w-[20%] text-center">
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-400">
                      WhatsApp & Telegram
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 w-[20%] text-center">
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-400">
                      Fiverr / Upwork
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors ${
                    index === comparisonData.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-[#12131A] font-medium">
                    {row.feature}
                  </td>
                  {/* Bryng cell with purple tint */}
                  <td className="px-6 py-4 bg-[#F3F0FF]/40">
                    <StatusCell value={row.bryng} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusCell value={row.whatsapp} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusCell value={row.general} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-gray-400 mt-5">
          * "Varies" means the feature may exist in some cases but is not guaranteed or standardized.
        </p>
      </div>
    </section>
  );
}
