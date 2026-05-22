"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  TrendingUp,
  Briefcase,
  Shield,
  Building2,
  Landmark,
  PiggyBank,
  Users,
  FileText,
  HeartHandshake,
  DollarSign,
  Wallet,
  GraduationCap,
} from "lucide-react";

const personalServices = [
  {
    icon: TrendingUp,
    title: "Wealth & Retirement Planning",
    description:
      "Comprehensive strategies to grow and preserve your wealth throughout every stage of life.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description:
      "Custom-tailored investment portfolios with a core & satellite approach for optimal performance.",
  },
  {
    icon: Shield,
    title: "Trust & Estate Planning",
    description:
      "Protect your legacy and ensure your assets are distributed according to your wishes.",
  },
  {
    icon: Landmark,
    title: "Foundation & Endowment",
    description:
      "Expert advisement for private foundations and endowments to amplify your philanthropic impact.",
  },
  {
    icon: PiggyBank,
    title: "Concentrated Stock Strategies",
    description:
      "Manage concentrated equity positions with tax-efficient diversification strategies.",
  },
  {
    icon: Wallet,
    title: "Retirement Income",
    description:
      "Income distribution strategies, Social Security optimization, and sustainable withdrawal planning for retirement.",
  },
];

const businessServices = [
  {
    icon: Users,
    title: "401(k) & Qualified Plans",
    description:
      "Full-service employer retirement plans tailored to your company size and culture.",
  },
  {
    icon: DollarSign,
    title: "Deferred Compensation",
    description:
      "Deferred compensation and defined benefit plan design for key employee retention.",
  },
  {
    icon: HeartHandshake,
    title: "Insurance Services",
    description:
      "Comprehensive business and personal insurance strategies to protect what matters most.",
  },
  {
    icon: Building2,
    title: "Business Succession",
    description:
      "Plan your exit strategy and ensure a smooth transition for your business legacy.",
  },
  {
    icon: FileText,
    title: "Tax Planning",
    description:
      "Integrated personal and business tax planning to minimize your tax burden.",
  },
  {
    icon: GraduationCap,
    title: "Employee Education",
    description:
      "Financial wellness programs, enrollment seminars, and retirement readiness education for your workforce.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative p-6 border border-white/5 md:hover:border-gold/20 bg-[oklch(0.09_0_0)] md:hover:bg-[oklch(0.10_0.005_75)] transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Icon className="size-5 text-gold mb-4" />
      <h3 className="font-heading text-lg text-cream mb-2">{title}</h3>
      <p className="text-sm text-cream/50 leading-relaxed">{description}</p>

      {/* Hover accent - desktop only */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-gold md:group-hover:w-full transition-all duration-500 hidden md:block" />
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-28 border-t border-white/5" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            How We Serve You
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Our Services
          </h2>
          <p className="mt-4 md:mt-6 text-cream/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A comprehensive wealth management plan designed to navigate you
            throughout your financial life.
          </p>
        </motion.div>

        {/* Personal Services */}
        <div className="mb-10 md:mb-14">
          <motion.div
            className="flex items-center gap-4 mb-6 md:mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-px bg-gold" />
            <h3 className="text-sm tracking-[0.3em] uppercase text-gold">
              Personal & Family
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={0.1 * i} />
            ))}
          </div>
        </div>

        {/* Business Services */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-6 md:mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-px bg-gold" />
            <h3 className="text-sm tracking-[0.3em] uppercase text-gold">
              Business & Employers
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
