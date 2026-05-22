"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, LogIn } from "lucide-react";
import { ClientPortalsButton } from "@/components/login-portals";
import { MobilePortalView } from "@/components/login-portals";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Life Milestones", href: "#milestones" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (menuOpen || portalsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, portalsOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.07_0_0/0.92)] backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col gap-0">
            <span className="font-heading text-2xl tracking-tight text-cream">
              <span className="text-gold">My </span>360
              <span className="text-gold align-super text-sm">&deg;</span>
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground -mt-1">
              Wealth
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-cream transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ClientPortalsButton className="text-xs text-cream/40 hover:text-cream/70 transition-colors tracking-[0.1em] uppercase cursor-pointer flex items-center" />
            <div className="w-px h-4 bg-white/8" />
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold text-background hover:bg-gold-light font-medium text-xs px-5 h-9 tracking-[0.1em] uppercase transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile: Portal + Menu buttons */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => { setMenuOpen(false); setPortalsOpen(true); }}
              className="text-cream/50 p-2.5 hover:text-cream transition-colors"
              aria-label="Client Portals"
            >
              <LogIn className="size-[18px]" />
            </button>
            <button
              onClick={() => { setPortalsOpen(false); setMenuOpen(true); }}
              className="text-cream p-2.5"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile: Full-screen nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[oklch(0.06_0_0)] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="relative z-[70] flex items-center justify-between px-6 py-4">
              <a href="#" onClick={() => setMenuOpen(false)} className="flex flex-col gap-0">
                <span className="font-heading text-2xl tracking-tight text-cream">
                  <span className="text-gold">My </span>360
                  <span className="text-gold align-super text-sm">&deg;</span>
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground -mt-1">
                  Wealth
                </span>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-cream/50 p-3 -mr-1 hover:text-cream transition-colors"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Nav links — centered vertically */}
            <nav className="flex-1 flex flex-col justify-center px-8 -mt-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-3xl text-cream/80 hover:text-gold py-4 tracking-wide transition-colors italic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom bar */}
            <motion.div
              className="px-8 pb-10 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-gold text-background py-3.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors"
              >
                Schedule a Consultation
              </a>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="tel:8185474720"
                  className="text-xs text-cream/25 hover:text-cream/50 transition-colors tracking-wide flex items-center gap-2"
                >
                  <Phone className="size-3" />
                  (818) 547-4720
                </a>
                <span className="text-cream/10">|</span>
                <a
                  href="mailto:service@my360wealth.com"
                  className="text-xs text-cream/25 hover:text-cream/50 transition-colors tracking-wide"
                >
                  service@my360wealth.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: Full-screen portal overlay */}
      <AnimatePresence>
        {portalsOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[oklch(0.06_0_0)] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <div className="relative z-[70] flex items-center justify-end px-6 py-4">
              <button
                onClick={() => setPortalsOpen(false)}
                className="text-cream/50 p-3 -mr-1 hover:text-cream transition-colors"
                aria-label="Close portals"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Portal content */}
            <div className="flex-1 overflow-y-auto">
              <MobilePortalView onBack={() => setPortalsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
