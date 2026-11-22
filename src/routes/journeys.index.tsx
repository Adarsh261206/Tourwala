import { createFileRoute, Link } from "@tanstack/react-router";
import ladakhImg from "@/assets/dest-ladakh.jpg";
import { PageHero } from "@/components/tourwala/PageHero";
import { PackageCard } from "@/components/tourwala/Cards";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { Reveal } from "@/components/tourwala/motion";
import { CtaArrow } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import { journeys } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";

type RegionFilter = "all" | "domestic" | "international";
type JourneysSearch = { region?: "domestic" | "international"; type?: string };

const title = "Tour Packages & Day-by-Day Itineraries | Tourwala Travels";
const description =
  "Browse India-first tour packages and international holidays with clear day-by-day itineraries, inclusions and starting prices. Customised by Tourwala Travels in Thane.";

export const Route = createFileRoute("/journeys/")({
  validateSearch: (search: Record<string, unknown>): JourneysSearch => {
    const result: JourneysSearch = {};
    if (search["region"] === "domestic" || search["region"] === "international") {
      result.region = search["region"];
    }
    if (typeof search["type"] === "string") result.type = search["type"];
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
  component: JourneysPage,
});

const typeFilters = [
  "All",
  "Family",
  "Honeymoon",
  "Heritage",
  "Adventure",
  "Beaches",
  "Pilgrimage",
  "Weekend",
  "Friends",
  "Corporate",
];

function JourneysPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const region: RegionFilter = search.region ?? "all";
  const type = search.type ?? "All";

  const filtered = journeys.filter((journey) => {
    const regionMatch = region === "all" || journey.region === region;
    const typeMatch = type === "All" || journey.tags.includes(type);
    return regionMatch && typeMatch;
  });

  const update = (nextRegion: RegionFilter, nextType: string) => {
    const next: JourneysSearch = {};
    if (nextRegion !== "all") next.region = nextRegion;
    if (nextType !== "All") next.type = nextType;
    navigate({ search: next });
  };

  return (
    <main>
      <PageHero
        image={ladakhImg}
        eyebrow="Itineraries"
        title={
          <>
            Every trip, written for
            <br />
            <span className="italic text-gold-soft">real life.</span>
          </>
        }
        description="These are working itineraries, not brochure fluff. See the days, the route and the starting price — then we adjust it around your dates, pace and people."
        meta={[
          { label: "Packages", value: `${journeys.length} starting points` },
          { label: "Focus", value: "India first" },
          { label: "Customisation", value: "Always included" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/plan" className={ctaClass("primary")}>
            Get a free plan
            <CtaArrow />
          </Link>
          <a href="tel:+918286521111" className={ctaClass("outline")}>
            Call 82865 21111
          </a>
        </div>
      </PageHero>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="flex flex-col gap-5 border-b border-border pb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex w-fit rounded-full border border-border bg-card p-1">
                {(
                  [
                    { key: "all", label: "All trips" },
                    { key: "domestic", label: "India" },
                    { key: "international", label: "International" },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => update(item.key, type)}
                    className={cn(
                      "rounded-full px-5 py-2.5 text-xs font-semibold transition-colors",
                      region === item.key
                        ? "bg-maroon text-ivory"
                        : "text-maroon/60 hover:text-maroon",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                {filtered.length} itinerar{filtered.length === 1 ? "y" : "ies"} found
              </p>
            </div>

            <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
              {typeFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => update(region, item)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300",
                    type === item
                      ? "border-maroon bg-maroon text-ivory"
                      : "border-border bg-card text-maroon/65 hover:border-maroon/30 hover:text-maroon",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((journey, index) => (
                <Reveal key={journey.slug} delay={(index % 3) * 0.05}>
                  <PackageCard journey={journey} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-border bg-card p-10 text-center">
              <h2 className="display-sm text-maroon-deep">No itinerary in that combination yet.</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                That doesn't mean we can't build it. Tell us the idea and we'll write a fresh plan.
              </p>
              <Link to="/plan" className={ctaClass("primary", "mt-6")}>
                Get a custom plan
                <CtaArrow />
              </Link>
            </div>
          )}

          <div className="mt-8 rounded-[1.5rem] border border-border bg-cream p-6 text-sm leading-7 text-muted-foreground">
            <span className="font-semibold text-maroon-deep">Good to know:</span> every itinerary is
            a starting point. We can shorten a day, add a rest day, upgrade a hotel or turn a family
            trip into a honeymoon — just tell us what you want to change.
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
