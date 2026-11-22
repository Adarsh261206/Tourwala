import { ClipboardCheck, MessageSquareText, PlaneTakeoff } from "lucide-react";
import { Reveal } from "./motion";
import { SectionLabel } from "./ui";

const steps = [
  {
    icon: MessageSquareText,
    title: "Tell us where",
    copy: "Send the form or WhatsApp us. Share your dates, who's travelling and the kind of trip you want.",
  },
  {
    icon: ClipboardCheck,
    title: "Get a clear plan",
    copy: "We reply with a day-by-day itinerary, hotel options and one final price. No hidden extras.",
  },
  {
    icon: PlaneTakeoff,
    title: "Travel with support",
    copy: "All bookings, transfers and experiences are handled. One person stays on your file until you're home.",
  },
];

export function TrustSteps() {
  return (
    <section className="relative overflow-hidden bg-ivory py-16 sm:py-20">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <Reveal>
            <SectionLabel>Simple by design</SectionLabel>
            <h2 className="display-md mt-5 max-w-md text-maroon-deep">
              A holiday plan in <span className="italic text-saffron">three</span> easy steps.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              No confusing packages, no 40-page PDFs. Start with a conversation and we will do the
              rest.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="relative h-full rounded-[1.4rem] border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-3xl text-gold/40">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-maroon-deep">{step.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
