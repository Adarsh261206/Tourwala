import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import udaipurImg from "@/assets/dest-udaipur.jpg";
import { PageHero } from "@/components/tourwala/PageHero";
import { DestinationCard } from "@/components/tourwala/Cards";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { Reveal } from "@/components/tourwala/motion";
import { CtaArrow } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import {
  destinationFilters,
  domesticDestinations,
  internationalDestinations,
} from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";

type Region = "domestic" | "international";

const title = "Tour Destinations — India First, Then the World | Tourwala Travels";
const description =
  "Explore 13 India destinations and handpicked international holidays. Filter by hills, beaches, heritage, pilgrimage and adventure, then get a free itinerary from Tourwala Travels in Thane.";

export const Route = createFileRoute("/destinations/")({
  validateSearch: (search: Record<string, unknown>): { region?: Region } => {
    const region = search["region"];
    if (region === "international" || region === "domestic") return { region };
    return {};
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
  component: DestinationsPage,
});

function DestinationsPage() {
  const { region = "domestic" } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [filter, setFilter] = useState<(typeof destinationFilters)[number]>("All");
  const source = region === "international" ? internationalDestinations : domesticDestinations;
  const visible = source.filter(
    (destination) => filter === "All" || destination.categories.includes(filter),
  );

  const setRegion = (next: Region) => {
    setFilter("All");
    navigate({ search: { region: next } });
  };

  return (
    <main>
      <PageHero
        image={udaipurImg}
        eyebrow="Destinations"
        title={
          <>
            India first.
            <br />
            <span className="italic text-gold-soft">Then the world.</span>
          </>
        }
        description="Thirteen places we know closely in India, and a short list of international holidays we plan often. Pick a place, see the route, then ask us for a real itinerary."
        meta={[
          { label: "India", value: "13 destinations" },
          { label: "International", value: "6 destinations" },
          { label: "Office", value: "Thane West" },
        ]}
      />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex w-fit rounded-full border border-border bg-card p-1">
              {(["domestic", "international"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRegion(item)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs font-semibold capitalize transition-colors",
                    region === item ? "bg-maroon text-ivory" : "text-maroon/60 hover:text-maroon",
                  )}
                >
                  {item === "domestic" ? "India" : "International"}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Showing {visible.length} {region === "domestic" ? "India" : "international"}{" "}
              destination
              {visible.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="hide-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
            {destinationFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
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

          {visible.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((destination, index) => (
                <Reveal key={destination.slug} delay={(index % 3) * 0.05}>
                  <DestinationCard destination={destination} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-border bg-card p-10 text-center">
              <h2 className="display-sm text-maroon-deep">Nothing in that filter yet.</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                Try another style, or tell us what you have in mind and we'll design it from
                scratch.
              </p>
              <Link to="/plan" className={ctaClass("primary", "mt-6")}>
                Get a custom plan
                <CtaArrow />
              </Link>
            </div>
          )}

          <div className="mt-10 grid gap-4 rounded-[1.7rem] border border-border bg-cream p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="eyebrow text-saffron">Can't decide?</p>
              <h2 className="mt-2 font-display text-2xl text-maroon-deep sm:text-3xl">
                Tell us the mood. We'll suggest two or three places.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                Share your dates, who's travelling and a rough budget. We'll reply with options that
                actually fit — not twenty tabs to compare.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/plan" className={ctaClass("primary")}>
                Get a free plan
              </Link>
              <Link to="/journeys" className={ctaClass("outline-dark")}>
                See itineraries
                <CtaArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
