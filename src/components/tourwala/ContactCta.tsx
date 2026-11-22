import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BRAND, whatsappLink } from "@/lib/tourwala-data";
import { Reveal } from "./motion";
import { SectionLabel, CtaArrow } from "./ui";
import { ctaClass } from "@/lib/cta";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-maroon-deep py-20 text-ivory sm:py-24"
    >
      <div className="jaali pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,117,42,0.14),transparent_45%)]" />

      <div className="relative mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel tone="light">Talk to a person</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-5">
                Your next trip starts with a{" "}
                <span className="italic text-gold-soft">conversation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ivory/60">
                Call us, WhatsApp us, or walk into the Thane office. We'll ask a few questions,
                understand what you want, and send a clear plan — not a 40-page PDF.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${BRAND.phone}`} className={ctaClass("primary", "px-7 py-4")}>
                  <Phone className="h-4 w-4" />
                  Call {BRAND.phoneDisplay}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className={ctaClass("outline", "px-7 py-4")}
                >
                  <WhatsAppIcon />
                  WhatsApp us
                  <CtaArrow />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-6 flex items-center gap-2 text-xs text-ivory/45">
                <Clock className="h-3.5 w-3.5 text-gold-soft" aria-hidden="true" />
                {BRAND.hours} · No appointment needed
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <a
                href={`tel:${BRAND.phone}`}
                className="group flex h-full flex-col rounded-[1.35rem] border border-ivory/12 bg-ivory/[0.045] p-5 transition-colors hover:border-gold/40 hover:bg-ivory/[0.07]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="mt-5 eyebrow text-[0.56rem] text-ivory/40">Call us</span>
                <span className="mt-1 font-display text-2xl text-ivory group-hover:text-gold-soft">
                  {BRAND.phoneDisplay}
                </span>
                <span className="mt-1 text-xs text-ivory/45">Fastest for a quick question</span>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[1.35rem] border border-ivory/12 bg-ivory/[0.045] p-5 transition-colors hover:border-gold/40 hover:bg-ivory/[0.07]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span className="mt-5 eyebrow text-[0.56rem] text-ivory/40">WhatsApp</span>
                <span className="mt-1 font-display text-2xl text-ivory group-hover:text-gold-soft">
                  Chat with us
                </span>
                <span className="mt-1 text-xs text-ivory/45">Send your dates and destination</span>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[1.35rem] border border-ivory/12 bg-ivory/[0.045] p-5 transition-colors hover:border-gold/40 hover:bg-ivory/[0.07]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="mt-5 eyebrow text-[0.56rem] text-ivory/40">Visit the office</span>
                <span className="mt-1 font-display text-xl leading-tight text-ivory group-hover:text-gold-soft">
                  Thane West
                </span>
                <span className="mt-1 text-xs leading-5 text-ivory/45">
                  {BRAND.addressLine1}, {BRAND.addressLine2}, {BRAND.addressLine3}
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={`mailto:${BRAND.emailHref}`}
                className="group flex h-full flex-col rounded-[1.35rem] border border-ivory/12 bg-ivory/[0.045] p-5 transition-colors hover:border-gold/40 hover:bg-ivory/[0.07]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="mt-5 eyebrow text-[0.56rem] text-ivory/40">Email</span>
                <span className="mt-1 break-all font-display text-lg leading-tight text-ivory group-hover:text-gold-soft">
                  {BRAND.email}
                </span>
                <span className="mt-1 text-xs text-ivory/45">
                  Best for documents and detailed queries
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
