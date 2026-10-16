"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  ListOrdered,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import { Button, Card, SectionHeader } from "./ui";

interface TabData {
  id: string;
  tabLabel: string;
  tabIcon: typeof ShieldCheck;
  headline: string;
  description: string;
  flow: string[];
}

const tabs: TabData[] = [
  {
    id: "escrow",
    tabLabel: "Payments",
    tabIcon: ShieldCheck,
    headline: "Your payment stays protected until you approve.",
    description:
      "Once a milestone is funded, its payment is held in escrow. Review the delivery, request changes if needed, and approve when it meets the plan you agreed on.",
    flow: ["Agree on scope", "Fund the milestone", "Review the work", "Approve payment"],
  },
  {
    id: "scholars",
    tabLabel: "Experts",
    tabIcon: GraduationCap,
    headline: "Find someone who knows your subject.",
    description:
      "Every expert goes through identity and qualification checks. Compare subject areas, experience, reviews, and rates before you choose.",
    flow: ["Share your subject", "Compare experts", "Choose your fit"],
  },
  {
    id: "milestones",
    tabLabel: "Milestones",
    tabIcon: ListOrdered,
    headline: "Know what’s next before the deadline.",
    description:
      "Break a bigger project into smaller deliveries. Review each part and share feedback while there’s still time to adjust.",
    flow: ["Set the plan", "Review each stage", "Finish together"],
  },
  {
    id: "integrity",
    tabLabel: "Originality",
    tabIcon: FileCheck2,
    headline: "Give every draft a careful check.",
    description:
      "Each submitted draft generates an originality report you can review alongside its references before you approve a milestone.",
    flow: ["Submit a draft", "Review originality", "Check the references"],
  },
];

function FeatureFlow({ feature, prefersReducedMotion }: { feature: TabData; prefersReducedMotion: boolean }) {
  const connectorInset = feature.flow.length === 4 ? "left-[12.5%] right-[12.5%]" : "left-[16.67%] right-[16.67%]";

  return (
    <div className="relative flex min-h-75 flex-col justify-center overflow-hidden rounded-inner-card bg-[#1B1725] px-6 py-9 text-white sm:min-h-90 sm:px-9">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={feature.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.24 }}
          className="relative"
        >
          <p className="mb-12 text-sm text-white/65">Here’s how {feature.tabLabel.toLowerCase()} works</p>
          <div className={`relative grid gap-3 ${feature.flow.length === 4 ? "grid-cols-4" : "grid-cols-3"}`}>
            <div className={`absolute top-3.5 h-px bg-white/20 ${connectorInset}`} aria-hidden="true">
              <motion.div
                className="h-full origin-left bg-[#C8B9FF]"
                initial={prefersReducedMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.65, delay: prefersReducedMotion ? 0 : 0.08, ease: "easeOut" }}
              />
            </div>
            {feature.flow.map((step, index) => (
              <motion.div
                key={`${feature.id}-${step}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#1B1725]">
                  {index + 1}
                </span>
                <span className="max-w-28 text-xs font-medium leading-relaxed text-white/85 sm:max-w-36 sm:text-sm">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function CoreFeatures() {
  const [activeTabId, setActiveTabId] = useState("escrow");
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const prefersReducedMotion = useReducedMotion();
  const featureTabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;

    event.preventDefault();
    setActiveTabId(tabs[nextIndex].id);
    featureTabRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="core-features" className="py-20 lg:py-28 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title="A clearer way to work together."
          subtitle="Find the right person, agree on the plan, and keep each step in view."
          className="mb-12 lg:mb-14"
        />

        {/* Sleek Pill Bar (Responsive: Stacks cleanly into a rounded card on mobile, spreads horizontally on desktop) */}
        <div className="flex justify-center mb-10 lg:mb-14">
          <div role="tablist" aria-label="Explore how Bryng works" className="w-full max-w-sm sm:max-w-md md:max-w-4xl bg-bg-muted rounded-wrapper md:rounded-pill p-2 md:p-2.5 flex flex-col md:flex-row items-stretch md:items-center gap-1.5 md:gap-1 shadow-xs transition-all">
            {tabs.map((tab, index) => {
              const Icon = tab.tabIcon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  id={`feature-tab-${tab.id}`}
                  ref={(node) => { featureTabRefs.current[index] = node; }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="feature-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTabId(tab.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`relative flex-1 flex items-center justify-center gap-2.5 px-5 py-3 md:py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 z-10 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-brand rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-border-subtle/50 -z-10"
                      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={17}
                    className={isActive ? "text-white" : "text-text-muted"}
                  />
                  <span>{tab.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Showcase Card */}
        <div>
          <Card
            variant="default"
            className="lg:p-wrapper p-4 rounded-wrapper border-border-subtle shadow-[0_12px_40px_rgba(0,0,0,0.03)]"
          >
            <div
              id="feature-panel"
              role="tabpanel"
              aria-labelledby={`feature-tab-${activeTab.id}`}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
            >
              <div className="w-full lg:col-span-6">
                <FeatureFlow feature={activeTab} prefersReducedMotion={Boolean(prefersReducedMotion)} />
              </div>

              <div className="flex flex-col justify-center lg:col-span-5" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeTab.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
                  >
                    <h3 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-text-primary sm:text-4xl lg:text-[42px]">
                      {activeTab.headline}
                    </h3>
                    <p className="mb-8 text-base font-normal leading-relaxed text-text-secondary sm:text-lg">
                      {activeTab.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand hover:text-brand-hover transition-colors group"
                  >
                    See the full journey
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
