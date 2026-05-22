"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay - darker on mobile for text legibility over busy background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.07_0_0/0.85)] via-[oklch(0.07_0_0/0.7)] to-[oklch(0.07_0_0/0.95)] md:from-[oklch(0.07_0_0/0.7)] md:via-[oklch(0.07_0_0/0.55)] md:to-[oklch(0.07_0_0/0.95)]" />

      {/* Decorative lines */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6">
            Wealth Management
          </p>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Live Your
          <br />
          <span className="italic text-gold">One Best</span>
          <br />
          Life.
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-cream/70 md:text-cream/60 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          We help you visualize and implement your life goals through education
          and trusted advice.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-background px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="text-cream/50 hover:text-cream text-sm tracking-[0.15em] uppercase transition-colors duration-300 border-b border-cream/20 hover:border-cream/50 pb-0.5"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
