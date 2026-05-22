import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-heading text-2xl tracking-tight text-cream">
                <span className="text-gold">My </span>360
                <span className="text-gold align-super text-sm">&deg;</span>
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
                Wealth Management Group
              </span>
            </div>
            <p className="text-sm text-cream/30 leading-relaxed max-w-xs">
              Holistic financial life management. Helping you live your one best
              life through education and trusted advice.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.linkedin.com/in/pierremovsessian"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 border border-white/10 flex items-center justify-center text-cream/30 hover:text-gold hover:border-gold/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://x.com/pierre_my360"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 border border-white/10 flex items-center justify-center text-cream/30 hover:text-gold hover:border-gold/30 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">
              Navigation
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "Our Process", href: "#process" },
                { label: "Life Milestones", href: "#milestones" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-cream/30 hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-cream/30">
              <p>500 N. Brand Blvd, Suite 2120</p>
              <p>Glendale, CA 91203</p>
              <p className="mt-3">
                <a
                  href="tel:8185474720"
                  className="hover:text-cream transition-colors"
                >
                  (818) 547-4720
                </a>
              </p>
              <p>
                <a
                  href="mailto:service@my360wealth.com"
                  className="hover:text-cream transition-colors"
                >
                  service@my360wealth.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/5" />

      {/* Disclaimers */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="space-y-3 text-xs md:text-[11px] text-cream/20 leading-relaxed">
          <p>
            Investment Advisory Services offered through Global Retirement
            Partners, LLC, an SEC registered investment advisor, dba My 360
            Wealth Management Group.
          </p>
          <p>
            The information contained herein is for informational purposes only
            and should not be considered investment advice or a recommendation to
            buy or sell any security. Investing involves risk, including the
            potential loss of principal. No strategy assures success or protects
            against loss. Past performance is not indicative of future results.
          </p>
          <p>
            The LPL Financial registered representative(s) associated with this
            website may discuss and/or transact business only with residents of
            the states in which they are properly registered or licensed.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-2">
            <a
              href="https://brokercheck.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/25 hover:text-cream/40 transition-colors"
            >
              FINRA BrokerCheck
            </a>
            <span className="hidden sm:inline text-cream/10">|</span>
            <span className="text-cream/20">
              &copy; {new Date().getFullYear()} My 360 Wealth Management Group.
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
