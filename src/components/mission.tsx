"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.09_0.005_75)] to-background" />

      <div className="relative z-10 mx-auto max-w-6xl px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Modern luxury architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-px bg-gold" />
            <div className="absolute top-0 left-0 w-px h-16 bg-gold" />
            <div className="absolute bottom-0 right-0 w-16 h-px bg-gold" />
            <div className="absolute bottom-0 right-0 w-px h-16 bg-gold" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-6">
              Our Mission
            </p>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-cream leading-tight italic">
              &ldquo;Life is a collection of experiences; we help you plan for
              them.&rdquo;
            </h2>
            <div className="mt-3 text-right">
              <span className="text-sm text-gold tracking-wide">
                &mdash; Pierre M. Movsessian
              </span>
            </div>

            <div className="mt-10 w-12 h-px bg-gold/40" />

            <p className="mt-8 text-cream/60 leading-relaxed text-lg">
              Our mission is to help our clients visualize and implement their
              life goals through education and trusted advice. We provide
              comprehensive wealth management designed to navigate you throughout
              your financial life.
            </p>
            <p className="mt-4 text-cream/60 leading-relaxed">
              As fiduciary advisors, we put your interests first. We review your
              current financial position, learn about your future goals, and
              create a personalized GPS to chart your path forward.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
