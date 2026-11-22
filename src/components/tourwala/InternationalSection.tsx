import { Link } from "@tanstack/react-router";
import { Globe2, PlaneTakeoff, ShieldCheck } from "lucide-react";
import { internationalDestinations } from "@/lib/tourwala-data";
import { DestinationCard } from "./Cards";
import { Reveal, SectionHeading } from "./motion";
import { CtaArrow } from "./ui";
import { ctaClass } from "@/lib/cta";

const selected = ["dubai", "bali", "thailand", "switzerland"];

export function InternationalSection() {
  const destinations = internationalDestinations.filter((destination) =>
    selected.includes(destination.slug),
  );

  return (
    <section className="relative overflow-hidden bg-maroon-deep py-20 text-ivory sm:py-24">
      <div className="jaali pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              label="Beyond India"
              tone="light"
              title={
                <>
                  When you're ready to go
                  <br />
                  <span className="italic text-gold-soft">beyond India.</span>
                </>
              }
              copy="Dubai for the family, Bali for the honeymoon, Thailand for the group chat. We handle the visa checklist, transfers and the small details that make a first international trip feel easy."
            />

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "Visa guidance" },
                { icon: PlaneTakeoff, label: "Airport transfers" },
                { icon: Globe2, label: "Forex help" },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-2 text-xs text-ivory/55">
                  <item.icon className="h-3.5 w-3.5 text-gold-soft" aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>

            <Link
              to="/destinations"
              search={{ region: "international" }}
              className={ctaClass("primary", "mt-8")}
            >
              See international trips
              <CtaArrow />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {destinations.map((destination, index) => (
              <Reveal key={destination.slug} delay={index * 0.07}>
                <DestinationCard destination={destination} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
