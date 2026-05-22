"use client";

import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { memo, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const milestones = [
  {
    title: "First Job",
    items: [
      "Begin funding a retirement account (401k, IRA)",
      "Build credit history",
      "Establish an emergency fund",
    ],
  },
  {
    title: "Getting Married",
    items: [
      "Purchase first home",
      "Purchase disability insurance",
      "Diversify your portfolio",
    ],
  },
  {
    title: "New Child",
    items: [
      "Develop a college savings plan",
      "Purchase life insurance",
      "Establish basic estate plan",
    ],
  },
  {
    title: "Life Changes",
    items: [
      "Consolidate 401(k) assets into a rollover IRA",
      "Refinance or obtain new mortgage",
      "Update will, trust, and power of attorney",
    ],
  },
  {
    title: "Parent Care",
    items: [
      "Explore assisted living options",
      "Create comprehensive estate plan",
      "Ensure retirement income",
    ],
  },
  {
    title: "Pre-Retirement",
    items: [
      "Develop retirement plan",
      "Finance college education",
      "Optimize portfolio allocation",
    ],
  },
  {
    title: "Legacy Planning",
    items: [
      "Transfer assets to beneficiaries",
      "Explore charitable giving",
      "Diversify your portfolio",
    ],
  },
  {
    title: "Early Retirement",
    items: [
      "Advanced estate planning techniques",
      "Retirement income distribution strategy",
      "Explore charitable giving options",
    ],
  },
  {
    title: "Late Retirement",
    items: [
      "Update will and estate plan",
      "IRA required minimum distributions",
      "Manage medical expenses",
    ],
  },
];

const TimelineItem = memo(function TimelineItem({
  milestone,
  index,
  isOpen,
  setActiveIndex,
}: {
  milestone: (typeof milestones)[number];
  index: number;
  isOpen: boolean;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleToggle = useCallback(() => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  }, [setActiveIndex, index]);

  const handleHover = useCallback(() => {
    if (window.innerWidth >= 1024) setActiveIndex(index);
  }, [setActiveIndex, index]);
  return (
    <div className="relative pl-8 lg:pl-12">
      {/* Timeline line */}
      {index < milestones.length - 1 && (
        <div className="absolute left-[7px] lg:left-[9px] top-8 lg:top-9 bottom-0 w-px bg-white/8" />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-0 lg:left-[1px] top-3 lg:top-3.5 size-[15px] lg:size-[17px] rounded-full border-2 transition-all duration-300 ${
          isOpen
            ? "border-gold bg-gold/20 shadow-[0_0_8px_rgba(196,164,105,0.2)]"
            : "border-white/15 bg-background"
        }`}
      />

      {/* Trigger */}
      <button
        onClick={handleToggle}
        onMouseEnter={handleHover}
        className="w-full text-left py-3 lg:py-4 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3 lg:gap-4 min-w-0">
          {/* Step number */}
          <span
            className={`text-xs font-mono tracking-wider transition-colors duration-300 hidden lg:inline ${
              isOpen ? "text-gold" : "text-cream/15"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <span
              className={`font-heading text-lg lg:text-xl transition-colors duration-200 ${
                isOpen ? "text-gold" : "text-cream/70 lg:text-cream/50"
              }`}
            >
              {milestone.title}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`size-4 flex-shrink-0 text-cream/30 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-gold/50" : ""
          }`}
        />
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 lg:pb-8 pt-1">
              <div className="w-8 h-px bg-gold/20 mb-4 lg:mb-5 lg:ml-9" />
              <div className="space-y-3 lg:space-y-4 lg:ml-9">
                {milestone.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 lg:gap-4 group/item"
                  >
                    <div className="mt-2 size-1 lg:size-1.5 rounded-full bg-gold/40 flex-shrink-0 lg:group-hover/item:bg-gold transition-colors" />
                    <p className="text-sm lg:text-base text-cream/50 leading-relaxed lg:group-hover/item:text-cream/70 transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export function Milestones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="milestones" className="relative py-16 md:py-24 lg:py-28 border-t border-white/5" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Your Financial Journey
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Life Milestones
          </h2>
          <p className="mt-4 md:mt-6 text-cream/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We tailor your plan based on where you are in your life.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-lg mx-auto lg:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {milestones.map((milestone, i) => (
            <TimelineItem
              key={milestone.title}
              milestone={milestone}
              index={i}
              isOpen={activeIndex === i}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
