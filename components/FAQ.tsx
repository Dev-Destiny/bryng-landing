"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is my deposit safe if something goes wrong?",
    answer:
      "Yes. Bryng operates an institutional escrow safeguard. When you fund a project, your money is held securely in neutral platform escrow. Funds are never released to the professional until you formally inspect and approve the submitted deliverable. If a milestone does not meet agreed requirements and mediation concludes in your favor, funds are returned directly to your wallet.",
  },
  {
    question: "Are there any hidden fees or extra charges?",
    answer:
      "No. Every project quotation is fully transparent. Any platform service processing fee is broken down line-by-line before you confirm payment. There are no unexpected commissions deducted from completed milestones.",
  },
  {
    question: "Do I need to verify my identity to sign up?",
    answer:
      "Students require only a valid academic or personal email to create an account and submit project briefs. Professionals undergo a mandatory qualification vetting process, including academic transcript and identity verification, before bidding on student briefs.",
  },
  {
    question: "What happens if I'm not satisfied with the delivered work?",
    answer:
      "You can submit revision requests directly via the project workspace. If the final delivery still fails to satisfy the agreed brief, you can escalate the milestone to Bryng Dispute Resolution. An impartial academic evaluator will assess the deliverable against the project specification and issue a binding resolution.",
  },
  {
    question: "How and when can I withdraw my wallet balance?",
    answer:
      "Professionals can initiate direct bank withdrawals as soon as a milestone is approved. Withdrawals are processed through standard domestic payment clearing within 1–2 business days. Any student refunds credited to platform wallets can be withdrawn or applied toward subsequent projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-tight mb-4">
              Got questions? We&#39;ve got answers.
            </h2>
            <p className="text-text-secondary leading-relaxed text-base mb-8">
              Everything you need to know about milestone escrow, quality checks,
              and academic support on Bryng.
            </p>
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:hello@bryng.app"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              Need additional clarification? Email us →
            </motion.a>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-bg-surface border rounded-lg transition-colors overflow-hidden ${
                    isOpen
                      ? "border-brand-border shadow-xs"
                      : "border-border-subtle hover:border-border-strong"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-hidden"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-text-primary text-sm leading-snug flex-1">
                      {faq.question}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-shrink-0 w-7 h-7 rounded-pill flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-brand text-white"
                          : "bg-bg-subtle text-text-secondary"
                      }`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1">
                          <div className="h-px bg-border-subtle mb-4" />
                          <p className="text-sm text-text-secondary leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
