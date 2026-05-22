"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, LogIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const clientLogins = [
  { name: "Fidelity Investments", url: "https://digital.fidelity.com/prgw/digital/login/full-page" },
  { name: "Charles Schwab", url: "https://client.schwab.com/Areas/Access/Login" },
  { name: "Black Diamond", url: "https://login.bdreporting.com/Auth/SignIn" },
  { name: "eMoney Advisor", url: "https://wealth.emaplan.com/ema/SignIn" },
];

const retirementLogins = [
  { name: "ADP", url: "https://www.mykplan.com/" },
  { name: "American Funds", url: "https://www.capitalgroup.com/individual/accounts/login.htm" },
  { name: "Ascensus", url: "https://myaccount.ascensus.com/rplink/account/login" },
  { name: "John Hancock", url: "https://myplan.johnhancock.com/auth/login?appid=1104" },
  { name: "Lincoln Financial", url: "https://www.lincolnfinancial.com/login" },
  { name: "MassMutual", url: "https://www.massmutual.com/login-list" },
  { name: "Nationwide", url: "https://login.nationwide.com/access/web/login.htm?logintType=retirementPlans" },
  { name: "Paychex", url: "https://www.paychex.com/login" },
  { name: "Pentegra", url: "https://my.pentegra.com/" },
  { name: "Transamerica", url: "https://secure.transamerica.com/login/sign-in/login.html" },
  { name: "Vanguard", url: "https://logon.vanguard.com/logon" },
  { name: "Voya Financial", url: "https://www.voya.com/accounts" },
];

function LoginLink({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 px-4 py-3 border border-white/5 hover:border-gold/15 hover:bg-white/[0.02] transition-all duration-200"
    >
      <span className="text-sm text-cream/55 group-hover:text-cream transition-colors">
        {name}
      </span>
      <ExternalLink className="size-3 text-cream/10 group-hover:text-gold/50 transition-colors flex-shrink-0" />
    </a>
  );
}

function PortalTabs({ tab, setTab }: { tab: "client" | "401k"; setTab: (t: "client" | "401k") => void }) {
  return (
    <div className="relative flex border-b border-white/5">
      <button
        onClick={() => setTab("client")}
        className={`relative flex-1 pb-3.5 text-sm tracking-[0.12em] uppercase transition-colors duration-200 ${
          tab === "client" ? "text-gold" : "text-cream/25 hover:text-cream/45"
        }`}
      >
        Client Login
      </button>
      <button
        onClick={() => setTab("401k")}
        className={`relative flex-1 pb-3.5 text-sm tracking-[0.12em] uppercase transition-colors duration-200 ${
          tab === "401k" ? "text-gold" : "text-cream/25 hover:text-cream/45"
        }`}
      >
        401(k) Login
      </button>
      <motion.div
        className="absolute bottom-0 h-[2px] bg-gold"
        initial={false}
        animate={{ left: tab === "client" ? "0%" : "50%", width: "50%" }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />
    </div>
  );
}

function PortalLinks({ tab }: { tab: "client" | "401k" }) {
  const logins = tab === "client" ? clientLogins : retirementLogins;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
      >
        {logins.map((login) => (
          <LoginLink key={login.name} {...login} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

const DISCLAIMER = "By clicking any link above, you will be leaving the My 360 Wealth Management Group website. We are not responsible for the content, security, or privacy practices of third-party sites.";

/**
 * Mobile full-screen portal view.
 */
export function MobilePortalView({ onBack }: { onBack: () => void }) {
  const [tab, setTab] = useState<"client" | "401k">("client");

  return (
    <motion.div
      className="flex flex-col min-h-0 px-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }}
    >
      {/* Title */}
      <div className="mb-8">
        <p className="text-gold tracking-[0.25em] uppercase text-xs mb-2">
          Client Portals
        </p>
        <h2 className="font-heading text-3xl text-cream italic">
          Access Your Accounts
        </h2>
        <div className="w-10 h-px bg-gold/30 mt-3" />
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <PortalTabs tab={tab} setTab={setTab} />
      </div>

      {/* Links */}
      <div className="flex-1">
        <PortalLinks tab={tab} />
      </div>

      {/* Disclaimer */}
      <div className="py-6 mt-4 border-t border-white/5">
        <p className="text-xs text-cream/25 leading-relaxed">{DISCLAIMER}</p>
      </div>
    </motion.div>
  );
}

/**
 * Desktop dialog — standard centered modal with tabs.
 */
export function ClientPortalsButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"client" | "401k">("client");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={className}
        render={<button />}
      >
        <LogIn className="size-3.5 mr-1.5 inline-block" />
        Client Portals
      </DialogTrigger>
      <DialogContent className="bg-[oklch(0.08_0_0)] border-white/5 sm:max-w-xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">Client Portals</DialogTitle>
        <div className="pt-8 pb-6 px-6">
          <div className="mb-8">
            <PortalTabs tab={tab} setTab={setTab} />
          </div>

          <PortalLinks tab={tab} />

          <div className="mt-6 pt-5 border-t border-white/5">
            <p className="text-xs text-cream/30 leading-relaxed">{DISCLAIMER}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
