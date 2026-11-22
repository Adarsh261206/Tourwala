import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import rajasthanImg from "@/assets/dest-rajasthan.jpg";
import { BRAND, whatsappLink } from "@/lib/tourwala-data";
import { OglImage } from "./OglImage";
import { Planner } from "./Planner";
import { CtaArrow } from "./ui";
import { ctaClass } from "@/lib/cta";
import { WhatsAppIcon } from "./WhatsAppIcon";

const trust = [
  { icon: Clock, label: "All days open", detail: "10:30 am – 7:00 pm" },
  { icon: ShieldCheck, label: "Domestic + International", detail: "One desk, every trip" },
  { icon: MapPin, label: "Thane West office", detail: "Opposite Naupada police station" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-maroon-deep text-ivory film-grain">
      <OglImage src={rajasthanImg} alt="A Rajasthan fort at sunset" imageClassName="scale-105" />
      <div className="absolute inset-0 bg-maroon-deep/30 lg:bg-maroon-deep/15" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-maroon-deep/85 via-maroon-deep/35 to-transparent" />
      <div className="absolute inset-0 hero-wash" />
      <div className="jaali pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.08]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-maroon-deep to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-center px-5 pb-24 pt-32 sm:px-8 lg:pb-12 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow inline-flex items-center gap-3 text-gold-soft/85">
              <span className="h-px w-8 bg-gold-soft/60" />
              Tourwala Travels · Thane
            </p>

            <h1 className="display-xl mt-6 text-ivory">
              India,
              <br />
              <span className="italic text-gold-soft">beautifully</span> arranged.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-ivory/70 sm:text-lg">
              Domestic escapes and international holidays, planned personally by Tourwala Travels.
              Clear itineraries, honest prices and one person looking after your trip from start to
              finish.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#india" className={ctaClass("primary", "px-7 py-4 text-[0.9rem]")}>
                Explore India tours
                <CtaArrow />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className={ctaClass("outline", "px-7 py-4 text-[0.9rem]")}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <a
              href={`tel:${BRAND.phone}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/65 transition-colors hover:text-gold-soft"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Prefer to talk? Call {BRAND.phoneDisplay}
            </a>
          </div>

          <div className="hidden w-full max-w-md justify-self-end lg:mt-10 lg:block">
            <Planner />
          </div>
        </div>

        <div className="mt-12 hidden gap-4 border-t border-ivory/15 pt-6 sm:grid sm:grid-cols-3 lg:mt-16">
          {trust.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-maroon-deep/40 text-gold-soft">
                <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ivory/80">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs text-ivory/45">{item.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
