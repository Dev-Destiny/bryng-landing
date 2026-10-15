"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardTitle, CardDescription } from "./ui";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const studentSteps: StepItem[] = [
  {
    number: "01",
    title: "Make your account",
    description: "Sign up for free and browse experts by subject, experience, and price.",
  },
  {
    number: "02",
    title: "Share what you need",
    description: "Add your topic, goals, guidelines, and the date you need the work.",
  },
  {
    number: "03",
    title: "Choose your expert",
    description: "Compare verified qualifications, subject experience, reviews, and rates.",
  },
  {
    number: "04",
    title: "Agree on the plan",
    description: "Set the scope, price, and milestones together before work begins.",
  },
  {
    number: "05",
    title: "Review as you go",
    description: "Get work in stages, share feedback, and request changes along the way.",
  },
  {
    number: "06",
    title: "Approve the work",
    description: "Release each payment only after you have reviewed and approved that milestone.",
  },
];

const professionalSteps: StepItem[] = [
  {
    number: "01",
    title: "Get verified",
    description: "Share your identity and qualifications for review before taking on projects.",
  },
  {
    number: "02",
    title: "Find a good-fit project",
    description: "Review briefs that match your subject areas, schedule, and rates.",
  },
  {
    number: "03",
    title: "Set the plan together",
    description: "Agree on the scope, price, and delivery dates before you begin.",
  },
  {
    number: "04",
    title: "Know payment is set aside",
    description: "Start once the project is funded and the agreed milestones are in place.",
  },
  {
    number: "05",
    title: "Share progress",
    description: "Send work in agreed stages and respond to feedback as the project moves on.",
  },
  {
    number: "06",
    title: "Get paid for approved work",
    description: "Once a milestone is approved, its payment is added to your Bryng wallet.",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"students" | "professionals">("students");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const carouselRef = useRef<HTMLDivElement>(null);
  const steps = activeTab === "students" ? studentSteps : professionalSteps;

  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const viewportLeft = carouselRef.current.getBoundingClientRect().left;
    const cards = Array.from(carouselRef.current.children) as HTMLElement[];
    const nearestCardIndex = cards.reduce(
      (nearestIndex, card, index) => {
        const nearestCard = cards[nearestIndex];
        const distance = Math.abs(card.getBoundingClientRect().left - viewportLeft);
        const nearestDistance = Math.abs(nearestCard.getBoundingClientRect().left - viewportLeft);
        return distance < nearestDistance ? index : nearestIndex;
      },
      0
    );
    setActiveStepIndex(nearestCardIndex);
  }, []);

  useEffect(() => {
    const syncTabFromHash = () => {
      if (window.location.hash === "#for-students") {
        setActiveTab("students");
        carouselRef.current?.scrollTo({ left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
      if (window.location.hash === "#for-professionals") {
        setActiveTab("professionals");
        carouselRef.current?.scrollTo({ left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    };

    const syncTabFromNavigation = (event: Event) => {
      const audience = (event as CustomEvent<"students" | "professionals">).detail;
      if (audience !== "students" && audience !== "professionals") return;
      setActiveTab(audience);
      carouselRef.current?.scrollTo({ left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);
    window.addEventListener("bryng:set-audience", syncTabFromNavigation);
    return () => {
      window.removeEventListener("hashchange", syncTabFromHash);
      window.removeEventListener("bryng:set-audience", syncTabFromNavigation);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState, activeTab]);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    const offset = direction === "left" ? -scrollAmount : scrollAmount;
    carouselRef.current.scrollBy({ left: offset, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const handleTabChange = (tab: "students" | "professionals") => {
    setActiveTab(tab);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden border-b border-border-subtle bg-bg-base py-20 lg:py-28"
    >
      <span id="for-students" className="absolute top-0 scroll-mt-24" aria-hidden="true" />
      <span id="for-professionals" className="absolute top-0 scroll-mt-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-4">
            Here&apos;s how the work moves.
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            You and your expert agree on the plan, timing, and payment together, then move through the work one milestone at a time.
          </p>

          {/* Segmented Pill Toggle + Nav Bar Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 pt-2">
            {/* Toggle */}
            <div role="group" aria-label="Choose your perspective" className="relative inline-flex items-center bg-bg-muted rounded-pill p-1 gap-1">
              <button
                type="button"
                aria-pressed={activeTab === "students"}
                onClick={() => handleTabChange("students")}
                className={`relative px-5 py-2.5 rounded-pill text-xs sm:text-sm font-semibold transition-colors z-10 cursor-pointer ${
                  activeTab === "students"
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeTab === "students" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand rounded-pill shadow-xs -z-10"
                    transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>For students</span>
              </button>
              <button
                type="button"
                aria-pressed={activeTab === "professionals"}
                onClick={() => handleTabChange("professionals")}
                className={`relative px-5 py-2.5 rounded-pill text-xs sm:text-sm font-semibold transition-colors z-10 cursor-pointer ${
                  activeTab === "professionals"
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeTab === "professionals" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand rounded-pill shadow-xs -z-10"
                    transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>For experts</span>
              </button>
            </div>

            {/* Carousel Arrow Controls & Step Counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-text-muted hidden sm:inline-block">
                Use arrows or swipe to follow along
              </span>
              <div className="flex items-center gap-1.5 bg-bg-surface rounded-pill p-1 shadow-xs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className={`w-8 h-8 rounded-pill flex items-center justify-center transition-colors cursor-pointer ${
                    canScrollLeft
                      ? "text-text-primary hover:bg-bg-subtle hover:text-brand"
                      : "text-text-muted/40 cursor-not-allowed"
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <div className="h-4 w-px bg-border-subtle" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className={`w-8 h-8 rounded-pill flex items-center justify-center transition-colors cursor-pointer ${
                    canScrollRight
                      ? "text-text-primary hover:bg-bg-subtle hover:text-brand"
                      : "text-text-muted/40 cursor-not-allowed"
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Encapsulating Container */}
        <div
          className="relative overflow-hidden rounded-carousel-track bg-bg-muted p-wrapper"
        >
          <div
            ref={carouselRef}
            id="workflow-steps"
            role="region"
            aria-label={`${activeTab === "students" ? "Student" : "Expert"} project steps`}
            tabIndex={0}
            className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={`${activeTab}-${step.number}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.32, delay: prefersReducedMotion ? 0 : index * 0.035 }}
                  whileTap={{ scale: 0.99 }}
                  className={`shrink-0 snap-start basis-[82vw] sm:basis-[36vw] lg:basis-[calc((100%-16px)/4)]`}
                >
                  <Card
                    variant="default"
                    className="flex h-80 w-full cursor-grab flex-col rounded-inner-card bg-white p-6 text-text-primary shadow-xs active:cursor-grabbing sm:h-85 sm:p-7 lg:h-90"
                  >
                    <span className={`text-lg font-medium tracking-tight ${index === activeStepIndex ? "text-brand" : "text-text-muted"}`}>
                      {step.number}
                    </span>
                    <div className="mt-auto max-w-xl">
                      <CardTitle className="mb-3 text-[26px] font-medium leading-tight tracking-tight text-text-primary sm:text-3xl">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="max-w-md text-base leading-relaxed text-text-secondary opacity-100">
                        {step.description}
                      </CardDescription>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Progress Track (Underneath) */}
        <div className="mt-8 mx-auto flex max-w-2xl items-center gap-3" aria-label={`Step ${activeStepIndex + 1} of ${steps.length}`}>
          <span className="shrink-0 text-xs font-semibold text-text-secondary">
            Step {String(activeStepIndex + 1).padStart(2, "0")}
          </span>
          <div
            className="h-1 flex-1 overflow-hidden rounded-pill bg-border-subtle"
            role="progressbar"
            aria-label="Project journey"
            aria-valuemin={1}
            aria-valuemax={steps.length}
            aria-valuenow={activeStepIndex + 1}
          >
            <motion.div
              className="h-full rounded-pill bg-brand"
              animate={{ width: `${((activeStepIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: "easeOut" }}
            />
          </div>
          <span className="shrink-0 text-xs font-semibold text-text-muted">of {String(steps.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
