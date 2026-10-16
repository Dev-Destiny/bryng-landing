"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Card, SectionHeader, Button } from "./ui";

const faqs = [
  {
    question: "Is my deposit safe if something goes wrong?",
    answer:
      "When you fund a project, the payment stays in escrow until you approve the milestone. If a delivery doesn’t match the brief, request changes or ask Bryng’s dispute team to review it. If the review is in your favor, the refund goes to your wallet.",
  },
  {
    question: "Will I know the fees before I pay?",
    answer:
      "Yes. Your quote shows the project price and any platform or processing fee before you confirm payment. There are no surprise commissions deducted from completed milestones.",
  },
  {
    question: "Who needs to verify their identity?",
    answer:
      "Students can sign up with an academic or personal email. Experts complete identity and qualification checks before they can respond to briefs.",
  },
  {
    question: "What if the work doesn’t match our plan?",
    answer:
      "Start by requesting a revision in the project workspace. If it’s still not right, escalate to Bryng’s dispute process. An impartial academic evaluator reviews the delivery against the original brief and makes a binding decision.",
  },
  {
    question: "When can experts withdraw their earnings?",
    answer:
      "Experts can request a bank withdrawal after a milestone is approved. Domestic withdrawals usually take 1–2 business days. Students can withdraw refunds to a bank or use them toward another project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              align="left"
              title="A few things people ask."
              subtitle="Payments, revisions, sign-up, and the practical details."
              className="mb-8"
            />
            <Button
              href="mailto:hello@bryng.app"
              variant="ghost"
              size="sm"
              className="px-0! text-brand hover:underline font-semibold"
            >
              Still wondering? Talk to us →
            </Button>
          </div>

          {/* Right Column - Accordion */}
          <div
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  variant="default"
                  className={`transition-colors overflow-hidden rounded-wrapper ${
                    isOpen
                      ? "border-brand-border shadow-xs"
                      : "border-border-subtle hover:border-border-strong"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-text-primary text-sm leading-snug flex-1">
                      {faq.question}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`shrink-0 w-7 h-7 rounded-pill flex items-center justify-center transition-colors ${
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
                        transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeInOut" }}
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
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
