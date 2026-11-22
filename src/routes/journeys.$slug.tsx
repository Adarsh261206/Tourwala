import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/tourwala/PageHero";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { PackageCard } from "@/components/tourwala/Cards";
import { ItineraryTimeline, InclusionList } from "@/components/tourwala/Itinerary";
import { Reveal, SectionHeading } from "@/components/tourwala/motion";
import { CtaArrow, SectionLabel } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import { BRAND, getJourney, inr, journeys, whatsappLink } from "@/lib/tourwala-data";

export const Route = createFileRoute("/journeys/$slug")({
  loader: ({ params }) => {
    const journey = getJourney(params.slug);
    if (!journey) throw notFound();
    return { journey };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Itinerary not found — Tourwala Travels" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { journey } = loaderData;
    const title = `${journey.title} — ${journey.days} Day ${journey.destinationName} Itinerary | Tourwala Travels`;
    const description = `${journey.summary} Starting from ${inr(journey.price)} per person. Route: ${journey.route}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: JourneyMissing,
  component: JourneyPage,
});

function JourneyMissing() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="eyebrow text-saffron">Not on the map</p>
      <h1 className="display-md mt-4 text-maroon-deep">That itinerary isn't here yet.</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
        We can still build it. Tell us where you want to go and we'll write a fresh plan.
      </p>
      <Link to="/journeys" className={ctaClass("primary", "mt-7")}>
        See every itinerary
        <CtaArrow />
      </Link>
    </main>
  );
}

function JourneyPage() {
  const { journey } = Route.useLoaderData();
  const others = journeys
    .filter((item) => item.slug !== journey.slug && item.region === journey.region)
    .slice(0, 3);
  const quoteMessage = `Hi Tourwala Travels, I am interested in the ${journey.title} itinerary (${journey.days} days). Please share the full details and a quote.`;

  return (
    <main>
      <PageHero
        image={journey.image}
        eyebrow={`${journey.destinationName} · ${journey.days} days`}
        title={journey.title}
        description={journey.summary}
        backTo="/journeys"
        backLabel="All itineraries"
        meta={[
          { label: "Duration", value: `${journey.days} days / ${journey.nights} nights` },
          { label: "Route", value: journey.route },
          { label: "Best time", value: journey.bestTime },
          { label: "From", value: `${inr(journey.price)} / person` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(quoteMessage)}
            target="_blank"
            rel="noreferrer"
            className={ctaClass("primary")}
          >
            Get this itinerary
            <CtaArrow />
          </a>
          <Link
            to="/plan"
            search={{ destination: journey.destinationSlug }}
            className={ctaClass("outline")}
          >
            Customise it
          </Link>
        </div>
      </PageHero>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <SectionLabel>The plan</SectionLabel>
            <h2 className="display-md mt-5 text-maroon-deep">
              Day by day, <span className="italic text-saffron">properly paced.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              {journey.summary}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-4">
                <CalendarDays className="h-4 w-4 text-saffron" aria-hidden="true" />
                <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Duration
                </p>
                <p className="mt-1 text-sm font-semibold text-maroon-deep">
                  {journey.days} days / {journey.nights} nights
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <Users className="h-4 w-4 text-saffron" aria-hidden="true" />
                <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Ideal for
                </p>
                <p className="mt-1 line-clamp-2 text-sm font-semibold text-maroon-deep">
                  {journey.idealFor}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <Clock className="h-4 w-4 text-saffron" aria-hidden="true" />
                <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Best time
                </p>
                <p className="mt-1 text-sm font-semibold text-maroon-deep">{journey.bestTime}</p>
              </div>
            </div>

            <ItineraryTimeline days={journey.itinerary} className="mt-10" />

            <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl text-maroon-deep">What's included</h3>
                <div className="mt-4">
                  <InclusionList items={journey.inclusions} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon-deep">Not included</h3>
                <div className="mt-4">
                  <InclusionList items={journey.exclusions} included={false} />
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[1.4rem] border border-border bg-cream p-5 sm:p-6">
              <p className="eyebrow text-[0.56rem] text-saffron">A note on this plan</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                This is a starting draft. Hotel availability, weather and your own pace can change
                the order of days. We confirm everything in writing before you pay.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.6rem] border border-border bg-card p-6 card-lift">
              <p className="eyebrow text-[0.56rem] text-saffron">Starting from</p>
              <p className="mt-2 font-display text-4xl text-maroon-deep">
                {inr(journey.price)}
                <span className="ml-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  / person
                </span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Twin sharing · indicative before season and hotel upgrades
              </p>

              <dl className="mt-6 space-y-3 border-y border-border py-5 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Route</dt>
                  <dd className="max-w-[60%] text-right font-semibold text-maroon-deep">
                    {journey.route}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-semibold text-maroon-deep">
                    {journey.days} days / {journey.nights} nights
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Destination</dt>
                  <dd className="font-semibold text-maroon-deep">{journey.destinationName}</dd>
                </div>
              </dl>

              <a
                href={whatsappLink(quoteMessage)}
                target="_blank"
                rel="noreferrer"
                className={ctaClass("primary", "mt-6 w-full")}
              >
                Get this itinerary
                <CtaArrow />
              </a>
              <Link
                to="/plan"
                search={{ destination: journey.destinationSlug }}
                className={ctaClass("outline-dark", "mt-3 w-full")}
              >
                Customise on call
              </Link>

              <p className="mt-4 text-center text-[0.68rem] leading-5 text-muted-foreground">
                No payment now. We reply during office hours, all days 10:30 am – 7:00 pm.
              </p>

              <a
                href={`tel:${BRAND.phone}`}
                className="mt-5 flex items-center justify-center gap-2 border-t border-border pt-5 text-sm font-semibold text-maroon"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {BRAND.phoneDisplay}
              </a>
            </div>

            <div className="mt-4 rounded-[1.2rem] border border-border bg-cream p-4">
              <p className="flex items-center gap-2 text-xs font-semibold text-maroon-deep">
                <MapPin className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                Designed from our Thane West office
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Happy to meet in person, or plan the whole thing on WhatsApp.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="flex flex-col gap-4 border-b border-maroon/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              label="More options"
              title={
                <>
                  Other trips you might <span className="italic text-saffron">like.</span>
                </>
              }
            />
            <Link to="/journeys" className={ctaClass("outline-dark", "self-start")}>
              All itineraries
              <CtaArrow />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <PackageCard journey={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
