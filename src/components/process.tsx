"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Search, Map, Lightbulb, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Before we crunch numbers, we talk about what matters most to you — family, community, pastimes, aspirations. We ask about what you're thinking, feeling, and worried about. Together, we figure out where you are now.",
  },
  {
    number: "02",
    icon: Map,
    title: "Planning",
    description:
      "We assess your personal situation, gauge where you are relative to your life goals and priorities, and consider what gaps exist. We weigh the financial implications of each goal and construct a framework that supports them.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Solutions",
    description:
      "Holistic planning provides a comprehensive view of all areas of your financial life. We recommend specific strategies aligned with each of your goals and implement your customized plan.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Monitoring",
    description:
      "Life happens — events large or small can change everything. We incorporate tracking systems to keep your plan on target, help you plan for the unexpected, and adjust your plan over time as necessary.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
      ref={ref}
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[oklch(0.07_0_0/0.92)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Advice For Life
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Our Process
          </h2>
          <p className="mt-4 md:mt-6 text-cream/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A four-step client-centric holistic approach to financial guidance
            that reflects your priorities and specific life circumstances.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative p-6 md:p-8 border-t md:border-t-0 border-white/5 first:border-t-0 md:border-l md:first:border-l-0 md:[&:nth-child(3)]:border-l lg:[&:nth-child(n)]:border-l lg:first:border-l-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Step number */}
              <span className="font-heading text-6xl text-gold/25 absolute top-4 right-6">
                {step.number}
              </span>

              <step.icon className="size-5 text-gold mb-6" />

              <h3 className="font-heading text-xl text-cream mb-4 italic">
                {step.title}
              </h3>
              <p className="text-sm text-cream/50 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-gold/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
