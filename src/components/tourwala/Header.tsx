import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { easeInOutQuart, easeOutExpo } from "@/lib/easing";
import { pauseScroll, resumeScroll } from "@/lib/scroll";
import { BRAND, whatsappLink } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";
import { Brand } from "./Brand";
import { CtaArrow } from "./ui";
import { ctaClass } from "@/lib/cta";
import { WhatsAppIcon } from "./WhatsAppIcon";

type NavLink = {
  to: "/destinations" | "/journeys" | "/experiences" | "/about" | "/contact";
  label: string;
  region?: "domestic" | "international";
};

const links: NavLink[] = [
  { to: "/destinations", label: "India Tours", region: "domestic" as const },
  { to: "/destinations", label: "International", region: "international" as const },
  { to: "/journeys", label: "Itineraries" },
  { to: "/experiences", label: "Ways to Travel" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useRouterState({ select: (state) => state.location });
  const pathname = location.pathname;
  const isHome = pathname === "/";
  const search = new URLSearchParams(location.searchStr);
  const region = search.get("region");
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    pauseScroll();
    return () => resumeScroll();
  }, [open]);

  const isLinkActive = (link: (typeof links)[number]) => {
    if (link.to === "/destinations") {
      return pathname === "/destinations" && (region ?? "domestic") === link.region;
    }
    return pathname === link.to || pathname.startsWith(`${link.to}/`);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "hidden overflow-hidden bg-maroon-deep text-ivory/70 transition-all duration-500 lg:block",
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
          )}
        >
          <div className="mx-auto flex h-9 max-w-[92rem] items-center justify-between px-8 text-[0.62rem] uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-gold" aria-hidden="true" />
              Thane West, Mumbai
            </span>
            <span className="hidden items-center gap-2 xl:flex">
              <Clock className="h-3 w-3 text-gold" aria-hidden="true" />
              {BRAND.hours}
            </span>
            <span className="flex items-center gap-5">
              <span>Domestic &amp; international tours</span>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 text-gold-soft transition-colors hover:text-ivory"
              >
                <Phone className="h-3 w-3" aria-hidden="true" />
                {BRAND.phoneDisplay}
              </a>
            </span>
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-500",
            solid
              ? "border-b border-border/80 bg-ivory shadow-[0_18px_50px_-38px_rgba(67,16,16,0.85)]"
              : "bg-transparent",
          )}
        >
          <div
            className={cn(
              "mx-auto flex max-w-[92rem] items-center justify-between px-5 transition-all duration-500 sm:px-8",
              solid ? "py-3" : "py-5",
            )}
          >
            <Link to="/" aria-label="Tourwala Travels home" className="relative z-10">
              <Brand tone={solid ? "dark" : "light"} size="sm" />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
              {links.map((link) => {
                const active = isLinkActive(link);
                return (
                  <Link
                    key={`${link.label}-${link.to}`}
                    to={link.to}
                    search={link.region ? { region: link.region } : {}}
                    className={cn(
                      "relative text-[0.78rem] font-semibold tracking-[0.01em] transition-colors duration-300",
                      solid ? "text-ink/65 hover:text-maroon" : "text-ivory/75 hover:text-ivory",
                      active && (solid ? "text-maroon" : "text-gold-soft"),
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-2 left-0 h-px w-full bg-saffron" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${BRAND.phone}`}
                className={cn(
                  "hidden items-center gap-2 text-sm font-semibold transition-colors md:flex",
                  solid ? "text-maroon hover:text-saffron" : "text-ivory hover:text-gold-soft",
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border",
                    solid ? "border-maroon/15" : "border-ivory/25",
                  )}
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="hidden xl:inline">{BRAND.phoneDisplay}</span>
              </a>
              <Link to="/plan" className={ctaClass("primary", "hidden px-5 py-3 sm:inline-flex")}>
                Get a free plan
                <CtaArrow />
              </Link>
              <Link to="/plan" className={ctaClass("primary", "px-4 py-2.5 text-xs sm:hidden")}>
                Plan
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden",
                  solid ? "border-maroon/15 text-maroon" : "border-ivory/25 text-ivory",
                )}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[95] flex flex-col overflow-y-auto bg-maroon-deep text-ivory"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="jaali pointer-events-none absolute inset-0 opacity-[0.12]" />
            <div className="relative flex items-center justify-between px-5 pt-5 sm:px-8">
              <Link to="/" onClick={() => setOpen(false)} aria-label="Tourwala Travels home">
                <Brand tone="light" size="sm" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav
              className="relative flex flex-1 flex-col justify-center px-5 py-10 sm:px-8"
              aria-label="Mobile navigation"
            >
              {links.map((link, index) => (
                <motion.div
                  key={`${link.label}-${link.to}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.055, duration: 0.5, ease: easeOutExpo }}
                >
                  <Link
                    to={link.to}
                    search={link.region ? { region: link.region } : {}}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-ivory/12 py-4"
                  >
                    <span className="display-sm text-ivory">{link.label}</span>
                    <span className="eyebrow text-gold-soft/60">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="relative border-t border-ivory/12 px-5 py-6 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${BRAND.phone}`} className={ctaClass("primary", "flex-1")}>
                  <Phone className="h-4 w-4" />
                  Call {BRAND.phoneDisplay}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className={ctaClass("whatsapp", "flex-1")}
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
              <p className="mt-5 text-xs leading-6 text-ivory/50">
                {BRAND.hours}
                <br />
                {BRAND.addressLine1}, {BRAND.addressLine3}
              </p>
            </div>

            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold via-saffron to-gold-soft"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: easeInOutQuart }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
