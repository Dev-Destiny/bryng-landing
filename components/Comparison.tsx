"use client";

import { Check, X } from "lucide-react";
import { SectionHeader } from "./ui";

type FeatureStatus = boolean | "partial";

interface ComparisonRow {
  feature: string;
  bryng: FeatureStatus;
  whatsapp: FeatureStatus;
  general: FeatureStatus;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Vetted experts with visible qualifications",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Payment held until you approve",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Work delivered in milestones",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Originality and reference checks",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Experts matched by subject",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Help resolving a disagreement",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Designed for academic projects",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "A refund path through escrow",
    bryng: true,
    whatsapp: false,
    general: false,
  },
];

function StatusCell({ value }: { value: FeatureStatus }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-pill bg-success-subtle text-success flex items-center justify-center">
          <Check size={14} strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <span className="block text-center text-xs font-medium text-text-muted">Depends</span>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-pill bg-bg-subtle text-text-muted flex items-center justify-center">
        <X size={14} strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="No guessing where things stand."
          subtitle="Agree on the brief, milestones, and payment plan up front, then keep the details together as the work moves along."
          className="mb-14"
        />

        {/* Table Container */}
        <div
          className="overflow-x-auto rounded-inner-card border border-border-subtle bg-bg-surface shadow-xs"
        >
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-border-subtle bg-bg-subtle/50">
                <th className="text-left px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider w-[40%]">
                  What matters
                </th>
                <th className="px-6 py-4 w-[20%] text-center bg-brand-subtle/50 border-x border-brand-border">
                  <span className="text-sm font-bold text-brand">
                    Bryng
                  </span>
                </th>
                <th className="px-6 py-4 w-[20%] text-center">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Messaging apps
                  </span>
                </th>
                <th className="px-6 py-4 w-[20%] text-center">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Other marketplaces
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-border-subtle hover:bg-bg-subtle/40 transition-colors last:border-b-0"
                >
                  <td className="px-6 py-4 text-sm text-text-primary font-medium">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 bg-brand-subtle/30 border-x border-brand-border">
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

        {/* Footnote */}
        <p className="text-center text-xs text-text-muted mt-5">
          A feature marked &quot;Depends&quot; varies by service and seller.
        </p>
      </div>
    </section>
  );
}
