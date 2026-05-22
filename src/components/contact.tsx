"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";

const offices = [
  {
    name: "Glendale",
    label: "Headquarters",
    address: "500 N. Brand Blvd, Suite 2120",
    city: "Glendale, CA 91203",
    phone: "(818) 547-4720",
    hours: "Mon — Fri, 8:00 AM — 5:00 PM",
  },
  {
    name: "Irwindale",
    label: "Rize Credit Union",
    address: "12701 Schabarum Avenue",
    city: "Irwindale, CA 91706",
    phone: "(800) 866-6474",
    hours: ["Mon, Tue, Thu, Fri: 9 AM — 5 PM", "Wed: 10 AM — 5 PM", "Sat: 9 AM — 1 PM"],
    url: "https://www.rize-wealth.com/",
  },
  {
    name: "Burbank",
    label: "UMe Credit Union",
    address: "3000 West Magnolia",
    city: "Burbank, CA 91505",
    phone: "(818) 238-2900 x119",
    hours: "Mon — Fri, 9:00 AM — 5:00 PM",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-28 border-t border-white/5" ref={ref}>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.06_0_0)] to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Start the Conversation
          </h2>
          <p className="mt-4 md:mt-6 text-cream/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Schedule your complimentary consultation. We&apos;d love to learn about
            your goals and explore how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="border border-gold/20 bg-[oklch(0.09_0.005_75)] p-12 text-center">
                <div className="size-12 mx-auto mb-6 border border-gold/30 flex items-center justify-center">
                  <Mail className="size-5 text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-cream mb-3 italic">
                  Thank You
                </h3>
                <p className="text-cream/50">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-xs tracking-[0.2em] uppercase text-cream/40"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Smith"
                      className="bg-transparent border-white/10 focus:border-gold/40 rounded-none h-12 text-cream placeholder:text-cream/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-xs tracking-[0.2em] uppercase text-cream/40"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-transparent border-white/10 focus:border-gold/40 rounded-none h-12 text-cream placeholder:text-cream/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-xs tracking-[0.2em] uppercase text-cream/40"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="bg-transparent border-white/10 focus:border-gold/40 rounded-none h-12 text-cream placeholder:text-cream/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-xs tracking-[0.2em] uppercase text-cream/40"
                  >
                    How Can We Help?
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals and what brought you here..."
                    className="bg-transparent border-white/10 focus:border-gold/40 rounded-none text-cream placeholder:text-cream/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-background py-3.5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Office locations */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-2">
              <h3 className="font-heading text-xl text-cream italic mb-1">
                Our Offices
              </h3>
              <div className="w-8 h-px bg-gold/40" />
            </div>

            {offices.map((office) => (
              <div
                key={office.name}
                className="border border-white/5 p-5 hover:border-gold/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-cream">
                      {office.name}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 border border-gold/20 px-2 py-0.5">
                      {office.label}
                    </span>
                  </div>
                  {"url" in office && office.url && (
                    <a
                      href={office.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/20 hover:text-gold transition-colors"
                      aria-label={`Visit ${office.label} website`}
                    >
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>

                <div className="space-y-1.5 text-sm text-cream/40">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-3.5 mt-0.5 text-gold/40 flex-shrink-0" />
                    <span>{office.address}, {office.city}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-3.5 text-gold/40 flex-shrink-0" />
                    <a
                      href={`tel:${office.phone.includes("x") ? office.phone.split(/\s*x/i).map((p, i) => i === 0 ? p.replace(/\D/g, "") : `;ext=${p.replace(/\D/g, "")}`).join("") : office.phone.replace(/\D/g, "")}`}
                      className="hover:text-cream transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="size-3.5 mt-0.5 text-gold/40 flex-shrink-0" />
                    {Array.isArray(office.hours) ? (
                      <div className="space-y-0.5">
                        {office.hours.map((line) => (
                          <span key={line} className="block">{line}</span>
                        ))}
                      </div>
                    ) : (
                      <span>{office.hours}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Email */}
            <div className="flex items-center gap-3 text-sm">
              <Mail className="size-3.5 text-gold/40" />
              <a
                href="mailto:service@my360wealth.com"
                className="text-cream/50 hover:text-cream transition-colors"
              >
                service@my360wealth.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
