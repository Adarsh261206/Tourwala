import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { journeys, inr, whatsappLink } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./motion";
import { CtaArrow } from "./ui";
import { ctaClass } from "@/lib/cta";

const starters = journeys.slice(0, 3);

export function FeaturedItinerary() {
  const [index, setIndex] = useState(0);
  const journey = starters[index] ?? starters[0]!;

  return (
    <section className="overflow-hidden bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="A real plan, not a brochure"
            title={
              <>
                See the <span className="italic text-saffron">whole trip</span> before you pay.
              </>
            }
            copy="Every itinerary below is a working draft — day by day, with the route, stays and pace visible up front. We then adjust it to your dates."
            className="max-w-2xl"
          />
          <Reveal delay={0.12}>
            <div className="flex flex-wrap gap-2">
              {starters.map((item, itemIndex) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className={cn(
                    "rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300",
                    itemIndex === index
                      ? "border-maroon bg-maroon text-ivory"
                      : "border-maroon/15 bg-ivory/60 text-maroon/60 hover:border-maroon/30 hover:text-maroon",
                  )}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_28px_28px] bg-maroon-deep">
              <AnimatePresence mode="wait">
                <motion.img
                  key={journey.slug}
                  src={journey.image}
                  alt={`${journey.title} — ${journey.destinationName}`}
                  width={1600}
                  height={1100}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.2rem] border border-ivory/15 bg-maroon-deep/85 p-4 text-ivory">
                <p className="eyebrow text-[0.56rem] text-gold-soft/80">Starting from</p>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <p className="font-display text-3xl text-gold-soft">{inr(journey.price)}</p>
                  <p className="pb-1 text-[0.6rem] uppercase tracking-[0.14em] text-ivory/50">
                    per person
                  </p>
                </div>
                <p className="mt-1 text-[0.65rem] text-ivory/45">
                  {journey.days} days · {journey.nights} nights · twin sharing
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-xs leading-6 text-muted-foreground">
              Indicative price. Final quote depends on dates, hotel category and group size.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={journey.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-maroon px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ivory">
                  {journey.destinationName}
                </span>
                {journey.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-maroon/15 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-maroon/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="display-md mt-5 text-maroon-deep">{journey.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                {journey.summary}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-maroon/10 bg-ivory/60 p-4">
                  <CalendarDays className="h-4 w-4 text-saffron" aria-hidden="true" />
                  <p className="mt-3 text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Duration
                  </p>
                  <p className="mt-1 text-sm font-semibold text-maroon-deep">{journey.days} days</p>
                </div>
                <div className="rounded-2xl border border-maroon/10 bg-ivory/60 p-4">
                  <MapPin className="h-4 w-4 text-saffron" aria-hidden="true" />
                  <p className="mt-3 text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Route
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm font-semibold text-maroon-deep">
                    {journey.route}
                  </p>
                </div>
                <div className="rounded-2xl border border-maroon/10 bg-ivory/60 p-4">
                  <Users className="h-4 w-4 text-saffron" aria-hidden="true" />
                  <p className="mt-3 text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Ideal for
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm font-semibold text-maroon-deep">
                    {journey.idealFor}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <p className="eyebrow text-[0.58rem] text-maroon/50">Day by day</p>
                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {journey.bestTime}
                </p>
              </div>

              <ol className="relative mt-5 border-l border-maroon/15 pl-6">
                {journey.itinerary.map((day) => (
                  <li key={day.day} className="relative pb-7 last:pb-0">
                    <span className="absolute -left-[1.72rem] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-cream bg-saffron" />
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="eyebrow text-[0.56rem] text-saffron">
                        Day {String(day.day).padStart(2, "0")}
                      </span>
                      <h4 className="font-display text-xl text-maroon-deep">{day.title}</h4>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{day.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(
                    `Hi Tourwala Travels, I am interested in the ${journey.title} itinerary (${journey.days} days). Please share the details and a quote.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={ctaClass("primary")}
                >
                  Get this itinerary
                  <CtaArrow />
                </a>
                <Link
                  to="/journeys/$slug"
                  params={{ slug: journey.slug }}
                  className={ctaClass("outline-dark")}
                >
                  See full inclusions
                  <CtaArrow />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
