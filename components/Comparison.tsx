"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Badge, SectionHeader } from "./ui";

type FeatureStatus = boolean | "partial";

interface ComparisonRow {
  feature: string;
  bryng: FeatureStatus;
  whatsapp: FeatureStatus;
  general: FeatureStatus;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Tested & Credentialed Professionals",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Secure Milestone Escrow",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Chapter-by-Chapter Updates",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Verified Originality & Referencing",
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
    feature: "Impartial Dispute Mediation",
    bryng: true,
    whatsapp: false,
    general: "partial",
  },
  {
    feature: "Purpose-Built for Academic Research",
    bryng: true,
    whatsapp: false,
    general: false,
  },
  {
    feature: "Escrow Refund Safeguard",
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
      <div className="flex justify-center">
        <Badge variant="neutral">
          Varies
        </Badge>
      </div>
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
          kicker="The Bryng Standard"
          title="Why Bryng Is Different"
          subtitle="Informal channels leave students exposed to ghosting and incomplete work. Bryng standardizes protection and academic accountability."
          className="mb-14"
        />

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="overflow-x-auto rounded-lg border border-border-subtle bg-bg-surface shadow-xs"
        >
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-border-subtle bg-bg-subtle/50">
                <th className="text-left px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider w-[40%]">
                  Standard Feature
                </th>
                <th className="px-6 py-4 w-[20%] text-center bg-brand-subtle/50 border-x border-brand-border">
                  <span className="text-sm font-bold text-brand">
                    Bryng
                  </span>
                </th>
                <th className="px-6 py-4 w-[20%] text-center">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    WhatsApp & Telegram
                  </span>
                </th>
                <th className="px-6 py-4 w-[20%] text-center">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    General Freelance Apps
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
        </motion.div>

        {/* Footnote */}
        <p className="text-center text-xs text-text-muted mt-5">
          * &quot;Varies&quot; indicates the feature is unstandardized or depends on informal arrangements.
        </p>
      </div>
    </section>
  );
}
