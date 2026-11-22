import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageSquareText, Phone } from "lucide-react";
import { PlanWizard } from "@/components/tourwala/PlanWizard";
import { Reveal } from "@/components/tourwala/motion";
import { CtaArrow, SectionLabel } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import { WhatsAppIcon } from "@/components/tourwala/WhatsAppIcon";
import { BRAND, whatsappLink } from "@/lib/tourwala-data";

type PlanSearch = { destination?: string; month?: string; travellers?: string; type?: string };

const title = "Get a Free Holiday Plan — Tourwala Travels, Thane";
const description =
  "Tell us where, when and who's travelling. A real person from Tourwala Travels in Thane replies with a clear day-by-day plan and a final price. No payment, no obligation.";

export const Route = createFileRoute("/plan")({
  validateSearch: (search: Record<string, unknown>): PlanSearch => {
    const result: PlanSearch = {};
    for (const key of ["destination", "month", "travellers", "type"] as const) {
      const value = search[key];
      if (typeof value === "string" && value.length > 0) result[key] = value;
    }
    return result;
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanPage,
});

const nextSteps = [
  {
    icon: MessageSquareText,
    title: "We read your note",
    copy: "A real person from the Thane office reads it — not a bot, not a call centre.",
  },
  {
    icon: Clock,
    title: "You get a clear plan",
    copy: "Within office hours we reply with a day-by-day route, hotel options and a final price.",
  },
  {
    icon: Phone,
    title: "We tweak it together",
    copy: "Change a hotel, add a rest day or invite the grandparents. We adjust until it fits.",
  },
];

function PlanPage() {
  const search = Route.useSearch();

  return (
    <main>
      <section className="relative overflow-hidden bg-maroon-deep pb-12 pt-28 text-ivory sm:pb-14">
        <div className="jaali pointer-events-none absolute inset-0 opacity-[0.09]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(232,117,42,0.16),transparent_46%)]" />
        <div className="relative mx-auto max-w-[92rem] px-5 sm:px-8">
          <Reveal>
            <SectionLabel tone="light">Free holiday plan</SectionLabel>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="display-lg mt-4 max-w-4xl">
              Tell us five things. We'll do <span className="italic text-gold-soft">the rest.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory/65">
              No payment, no obligation. Share the idea and a real person from our Thane desk will
              reply with a clear plan — usually during office hours.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-ivory/55">
              <span>About 2 minutes</span>
              <span className="h-1 w-1 rounded-full bg-gold/60" />
              <span>Reply during office hours</span>
              <span className="h-1 w-1 rounded-full bg-gold/60" />
              <span>All days, 10:30 am – 7:00 pm</span>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-5 text-xs text-ivory/50">
              Prefer to talk?{" "}
              <a
                href={`tel:${BRAND.phone}`}
                className="font-semibold text-gold-soft underline underline-offset-4"
              >
                Call {BRAND.phoneDisplay}
              </a>{" "}
              or{" "}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-gold-soft underline underline-offset-4"
              >
                WhatsApp us
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-8 sm:py-12">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <PlanWizard
              initialDestination={search.destination ?? ""}
              initialMonth={search.month ?? "Any month"}
              initialTravellers={search.travellers ?? "2 adults"}
              initialType={search.type ?? ""}
            />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Prefer to talk first?{" "}
              <a
                href={`tel:${BRAND.phone}`}
                className="font-semibold text-maroon underline underline-offset-4"
              >
                Call {BRAND.phoneDisplay}
              </a>
            </p>
          </div>

          <aside className="space-y-4">
            <Reveal>
              <div className="rounded-[1.6rem] border border-border bg-card p-6">
                <SectionLabel>What happens next</SectionLabel>
                <ol className="mt-5 space-y-5">
                  {nextSteps.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                        <step.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-maroon-deep">
                          <span className="mr-1.5 text-saffron">0{index + 1}</span>
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">{step.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[1.6rem] border border-border bg-cream p-6">
                <p className="eyebrow text-saffron">Prefer a real voice?</p>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="mt-3 block font-display text-3xl text-maroon-deep"
                >
                  {BRAND.phoneDisplay}
                </a>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                  {BRAND.hours}
                  <br />
                  No appointment needed at the office.
                </p>
                <a
                  href={whatsappLink(
                    "Hi Tourwala Travels, I'd like to plan a trip. Can we talk on WhatsApp?",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={ctaClass("whatsapp", "mt-4 w-full")}
                >
                  <WhatsAppIcon />
                  Message on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[1.6rem] border border-border bg-card p-6 transition-colors hover:border-gold/60"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-semibold text-maroon-deep">
                  Visit the Thane office
                </p>
                <p className="mt-1.5 text-xs leading-6 text-muted-foreground">
                  {BRAND.addressLine1}, {BRAND.addressLine2}, {BRAND.addressLine3}
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-[1.6rem] border border-forest/15 bg-forest/5 p-5">
                <p className="text-xs font-semibold text-forest">Your details stay with us.</p>
                <p className="mt-1.5 text-[0.68rem] leading-5 text-muted-foreground">
                  We use your number only to send this plan. No marketing lists, no sharing.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </main>
  );
}
