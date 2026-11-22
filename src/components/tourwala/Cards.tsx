import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import type { Destination, Journey } from "@/lib/tourwala-data";
import { inr } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";
import { Pill } from "./ui";

export function DestinationCard({
  destination,
  variant = "default",
  className,
}: {
  destination: Destination;
  variant?: "default" | "feature" | "compact";
  className?: string;
}) {
  const feature = variant === "feature";
  const compact = variant === "compact";

  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: destination.slug }}
      className={cn("group relative block h-full overflow-hidden", className)}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden",
          compact
            ? "aspect-[4/5] rounded-[1.5rem] sm:aspect-[4/3]"
            : feature
              ? "h-[22rem] rounded-[1.75rem] sm:h-[26rem] lg:h-[30rem]"
              : "aspect-[4/3] rounded-[1.5rem]",
        )}
      >
        <img
          src={destination.image}
          alt={`${destination.name} — ${destination.tagline}`}
          width={1600}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/35 to-transparent opacity-95" />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-ivory/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {destination.categories.slice(0, compact ? 1 : 2).map((category) => (
            <span
              key={category}
              className="rounded-full border border-ivory/25 bg-maroon-deep/45 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-ivory/85 backdrop-blur-sm"
            >
              {category}
            </span>
          ))}
        </div>

        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-maroon-deep/35 text-ivory opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 text-ivory",
            feature ? "p-6 sm:p-8" : compact ? "p-4 sm:p-5" : "p-5 sm:p-6",
          )}
        >
          {feature && <p className="eyebrow text-[0.56rem] text-ivory/75">{destination.state}</p>}
          <h3
            className={cn(
              feature
                ? "display-md mt-3"
                : compact
                  ? "font-display text-xl sm:text-2xl"
                  : "display-sm mt-2",
            )}
          >
            {destination.name}
          </h3>
          <p
            className={cn(
              "mt-2 text-ivory/65",
              feature
                ? "max-w-xl text-sm leading-6 text-ivory/75"
                : "line-clamp-2 text-xs leading-5",
              compact && "hidden sm:block",
            )}
          >
            {feature ? destination.summary : destination.tagline}
          </p>

          <div
            className={cn(
              "flex items-end justify-between gap-3 border-t border-ivory/18 pt-3",
              feature ? "mt-5" : "mt-4",
              compact && "mt-3 gap-2",
            )}
          >
            <span
              className={cn(
                "flex items-center gap-1.5 text-ivory/55",
                compact ? "text-[0.6rem]" : "text-[0.68rem]",
              )}
            >
              <Clock className="h-3 w-3 shrink-0 text-gold-soft/80" aria-hidden="true" />
              {destination.idealDays}
            </span>
            <span className="shrink-0 text-right">
              <span className="block text-[0.55rem] uppercase tracking-[0.22em] text-ivory/45">
                From
              </span>
              <span
                className={cn(
                  "font-display text-gold-soft",
                  feature ? "text-xl" : compact ? "text-base sm:text-lg" : "text-lg",
                )}
              >
                {inr(destination.priceFrom)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PackageCard({ journey, className }: { journey: Journey; className?: string }) {
  return (
    <Link
      to="/journeys/$slug"
      params={{ slug: journey.slug }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:card-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={journey.image}
          alt={`${journey.title} — ${journey.destinationName}`}
          width={1600}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/55 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-1.5">
          {journey.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ivory/30 bg-maroon-deep/40 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-ivory/85 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-maroon backdrop-blur-sm">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          {journey.destinationName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="display-sm text-maroon-deep transition-colors group-hover:text-maroon">
          {journey.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {journey.summary}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-border pt-4">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
              {journey.days} days · {journey.nights} nights
            </p>
            <p className="mt-1 font-display text-xl text-maroon-deep">
              {inr(journey.price)}
              <span className="ml-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                / person
              </span>
            </p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-maroon/15 text-maroon transition-colors group-hover:bg-maroon group-hover:text-ivory">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function DestinationChips({
  categories,
  className,
}: {
  categories: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((category) => (
        <Pill key={category}>{category}</Pill>
      ))}
    </div>
  );
}
