import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { domesticDestinations, destinationFilters } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";
import { DestinationCard } from "./Cards";
import { Reveal } from "./motion";
import { CtaArrow, SectionLabel } from "./ui";
import { ctaClass } from "@/lib/cta";

export function IndiaShowcase() {
  const [filter, setFilter] = useState<(typeof destinationFilters)[number]>("All");
  const filtered = domesticDestinations.filter(
    (destination) => filter === "All" || destination.categories.includes(filter),
  );
  const visible = filtered.slice(0, 7);
  const [feature, ...rest] = visible;

  return (
    <section id="india" className="scroll-mt-20 bg-ivory py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>India, first</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-lg mt-4 max-w-2xl text-maroon-deep">
                The country we <span className="italic text-saffron">know best.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:pb-1">
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              From a two-night reset in Lonavala to a full Ladakh road trip — every itinerary is
              built around your people, your pace and your budget.
            </p>
            <div className="mt-6">
              <Link to="/journeys" className={ctaClass("outline-dark")}>
                See every itinerary
                <CtaArrow />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.08}
          className="mt-9 flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {destinationFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300",
                  filter === item
                    ? "border-maroon bg-maroon text-ivory"
                    : "border-border bg-card text-maroon/65 hover:border-maroon/30 hover:text-maroon",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {filter === "All" ? "All moods" : filter} · {filtered.length} matching
          </p>
        </Reveal>

        {feature ? (
          <>
            <Reveal className="mt-7">
              <DestinationCard destination={feature} variant="feature" />
            </Reveal>

            {rest.length > 0 && (
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((destination, index) => (
                  <Reveal key={destination.slug} delay={(index % 3) * 0.05} className="h-full">
                    <DestinationCard destination={destination} />
                  </Reveal>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="mt-7 rounded-[1.5rem] border border-border bg-card p-10 text-center">
            <h3 className="display-sm text-maroon-deep">Nothing in that mood yet.</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
              Tell us what you have in mind and we will build the trip from scratch.
            </p>
            <Link to="/plan" className={ctaClass("primary", "mt-6")}>
              Get a custom plan
              <CtaArrow />
            </Link>
          </div>
        )}

        <div className="mt-9 flex flex-col items-start justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-6 text-muted-foreground">
            {filter === "All"
              ? `Showing ${visible.length} of ${domesticDestinations.length} India destinations.`
              : `${filtered.length} ${filter.toLowerCase()} destination${filtered.length === 1 ? "" : "s"} matched.`}{" "}
            We design plenty more on request.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/destinations"
              className={ctaClass("outline-dark")}
              search={{ region: "domestic" }}
            >
              All India tours
              <CtaArrow />
            </Link>
            <Link to="/plan" className={ctaClass("primary")}>
              Not sure? Get a free plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
