"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is my deposit safe if something goes wrong?",
    answer:
      "Absolutely. Bryng uses a third-party escrow system which means your funds are held in a neutral, secure account and are NEVER sent to the writer until you review and approve the completed work. If you're unsatisfied and a dispute is raised, you could receive a full or partial refund depending on the outcome of the review.",
  },
  {
    question: "Are there any hidden fees or extra charges?",
    answer:
      "No hidden fees — ever. What you see on the project quote is what you pay. Bryng charges a small platform fee that is displayed transparently before you confirm your payment. There are no surprise service charges or commissions added afterwards.",
  },
  {
    question: "Do I need to verify my identity to sign up?",
    answer:
      "Students only need a valid email address to create an account and browse the platform. A phone number verification is required when you make your first escrow deposit for security purposes. Professionals undergo a more thorough application review process including academic credential checks.",
  },
  {
    question: "What happens if I'm not satisfied with the delivered work?",
    answer:
      "If you are not happy with the delivered work, you can request revisions directly through the platform. If after revisions the quality still doesn't meet the agreed requirements, you can formally raise a dispute. Our review team will examine the original brief, the delivered work, and all communications to reach a fair resolution.",
  },
  {
    question: "How and when can I withdraw my wallet balance?",
    answer:
      "Professionals can withdraw their earned wallet balance at any time via bank transfer. Withdrawals are typically processed within 1–2 business days. Students who receive a refund will see the funds returned to their Bryng wallet, which can also be withdrawn or reused for future projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E5E0] text-xs font-medium text-gray-500 tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12131A] tracking-tight leading-tight mb-4">
              Got questions? We&#39;ve got answers.
            </h2>
            <p className="text-gray-500 leading-relaxed text-base mb-8">
              Everything you need to know about getting started, staying safe,
              and succeeding with Bryng.
            </p>
            <a
              href="mailto:hello@bryng.app"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6C5CE7] hover:underline"
            >
              Still have questions? Email us →
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-[#D0CCFF] shadow-sm"
                      : "border-[#EAEAEA] hover:border-[#D0CCFF]"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[#12131A] text-sm leading-snug flex-1">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[#6C5CE7] text-white"
                          : "bg-[#F5F5F5] text-gray-400"
                      }`}
                    >
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <div className="h-px bg-[#F0EFFE] mb-4" />
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
