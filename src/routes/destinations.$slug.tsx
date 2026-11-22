import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Check, Clock, Compass, MapPin, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/tourwala/PageHero";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { DestinationCard } from "@/components/tourwala/Cards";
import { ItineraryTimeline } from "@/components/tourwala/Itinerary";
import { Reveal, SectionHeading } from "@/components/tourwala/motion";
import { CtaArrow, SectionLabel } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import {
  destinations,
  getDestination,
  inr,
  journeysFor,
  packagesFor,
  whatsappLink,
} from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Destination not found — Tourwala Travels" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const d = loaderData.destination;
    const title = `${d.name} Tour Packages & Itineraries | Tourwala Travels`;
    const description = `${d.tagline} ${d.summary} Starting from ${inr(d.priceFrom)} per person. Best time: ${d.bestTime}.`;
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
  notFoundComponent: DestinationMissing,
  component: DestinationPage,
});

function DestinationMissing() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="eyebrow text-saffron">Not on our list yet</p>
      <h1 className="display-md mt-4 text-maroon-deep">We don't have that destination page yet.</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
        We plan plenty of places that aren't listed. Tell us where you're thinking and we'll build
        it from scratch.
      </p>
      <Link to="/destinations" className={ctaClass("primary", "mt-7")}>
        See every destination
        <CtaArrow />
      </Link>
    </main>
  );
}

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();
  const [openPackage, setOpenPackage] = useState<string | null>("classic");
  const packages = packagesFor(d);
  const featured = journeysFor(d.slug)[0];
  const nearby = destinations
    .filter((item) => item.slug !== d.slug && item.region === d.region)
    .slice(0, 3);
  const regionLabel = d.region === "domestic" ? "India" : "International";
  const gallery = d.gallery.slice(0, 4);
  const hasOddSmall = (gallery.length - 1) % 2 === 1;

  return (
    <main>
      <PageHero
        image={d.image}
        eyebrow={`${regionLabel} · ${d.state}`}
        title={d.name}
        description={d.summary}
        backTo="/destinations"
        backLabel="All destinations"
        meta={[
          { label: "Best time", value: d.bestTime },
          { label: "Ideal length", value: d.idealDays },
          { label: "From", value: `${inr(d.priceFrom)} / person` },
          { label: "Route", value: d.route },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/plan" search={{ destination: d.slug }} className={ctaClass("primary")}>
            Get a free plan
            <CtaArrow />
          </Link>
          <a
            href={whatsappLink(
              `Hi Tourwala Travels, I would like a free plan for ${d.name}. Please share itinerary options and a quote.`,
            )}
            target="_blank"
            rel="noreferrer"
            className={ctaClass("outline")}
          >
            WhatsApp us
            <CtaArrow />
          </a>
        </div>
      </PageHero>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <SectionLabel>The place</SectionLabel>
              <h2 className="display-md mt-5 text-maroon-deep">{d.tagline}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">{d.summary}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <Clock className="h-4 w-4 text-saffron" aria-hidden="true" />
                  <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Best time
                  </p>
                  <p className="mt-1 text-sm font-semibold text-maroon-deep">{d.bestTime}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <Compass className="h-4 w-4 text-saffron" aria-hidden="true" />
                  <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Ideal length
                  </p>
                  <p className="mt-1 text-sm font-semibold text-maroon-deep">{d.idealDays}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <MapPin className="h-4 w-4 text-saffron" aria-hidden="true" />
                  <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                    From
                  </p>
                  <p className="mt-1 text-sm font-semibold text-maroon-deep">{inr(d.priceFrom)}</p>
                </div>
              </div>

              <div className="mt-9">
                <p className="eyebrow text-[0.58rem] text-maroon/50">What we'll show you</p>
                <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {d.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {gallery.map((image, index) => {
                const wideLast = hasOddSmall && index === gallery.length - 1;
                return (
                  <div
                    key={`${image}-${index}`}
                    className={cn(
                      "overflow-hidden bg-maroon-deep",
                      index === 0
                        ? "col-span-2 aspect-[16/10] rounded-[1.6rem]"
                        : wideLast
                          ? "col-span-2 aspect-[16/9] rounded-[1.3rem]"
                          : "aspect-square rounded-[1.3rem]",
                    )}
                  >
                    <img
                      src={image}
                      alt={`${d.name} view ${index + 1}`}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_26px_26px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 rounded-[1.1rem] border border-ivory/20 bg-maroon-deep/65 p-4 text-ivory backdrop-blur-md">
                    <p className="eyebrow text-[0.55rem] text-gold-soft/80">
                      Most-booked itinerary
                    </p>
                    <p className="mt-1 font-display text-2xl">{featured.title}</p>
                    <p className="mt-1 text-xs text-ivory/55">
                      {featured.days} days · {featured.nights} nights · from {inr(featured.price)}
                    </p>
                  </div>
                </div>
              </Reveal>

              <div>
                <SectionLabel>A proper plan</SectionLabel>
                <h2 className="display-md mt-5 text-maroon-deep">
                  The first three days,{" "}
                  <span className="italic text-saffron">already written.</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                  {featured.summary}
                </p>
                <ItineraryTimeline days={featured.itinerary.slice(0, 3)} className="mt-8" />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/journeys/$slug"
                    params={{ slug: featured.slug }}
                    className={ctaClass("primary")}
                  >
                    See full itinerary
                    <CtaArrow />
                  </Link>
                  <a
                    href={whatsappLink(
                      `Hi Tourwala Travels, I would like details for the ${featured.title} itinerary in ${d.name}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className={ctaClass("outline-dark")}
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <SectionHeading
            label="Choose your pace"
            title={
              <>
                Three ways to do <span className="italic text-saffron">{d.name}.</span>
              </>
            }
            copy="Start with a duration. We'll adjust the hotels, route and experiences to fit your dates and budget."
          />

          <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
            {packages.map((pack, index) => {
              const isOpen = openPackage === pack.key;
              return (
                <Reveal key={pack.key} delay={index * 0.06}>
                  <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6">
                    <div className="flex items-center justify-between">
                      <p className="eyebrow text-[0.56rem] text-saffron">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      {index === 1 && (
                        <span className="rounded-full bg-saffron/15 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-maroon">
                          Most booked
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl text-maroon-deep">{pack.name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {pack.days} days · {pack.nights} nights
                    </p>
                    <p className="mt-4 font-display text-3xl text-maroon">
                      {inr(pack.price)}
                      <span className="ml-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        / person
                      </span>
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{pack.style}</p>

                    <ul className="mt-5 space-y-2.5">
                      {pack.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs leading-5 text-muted-foreground"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setOpenPackage(isOpen ? null : pack.key)}
                      aria-expanded={isOpen}
                      className="mt-5 flex items-center justify-between gap-2 rounded-full border border-maroon/15 px-4 py-3 text-xs font-semibold text-maroon transition-colors hover:border-maroon/40"
                    >
                      {isOpen ? "Hide day-by-day plan" : "See day-by-day plan"}
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ol className="mt-5 space-y-3 border-t border-border pt-4">
                            {pack.outline.map((day) => (
                              <li key={day.day} className="grid grid-cols-[4rem_1fr] gap-2 text-xs">
                                <span className="font-semibold text-saffron">
                                  Day {String(day.day).padStart(2, "0")}
                                </span>
                                <span>
                                  <span className="block font-semibold text-maroon-deep">
                                    {day.title}
                                  </span>
                                  <span className="mt-0.5 block leading-5 text-muted-foreground">
                                    {day.body}
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ol>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <a
                      href={whatsappLink(
                        `Hi Tourwala Travels, I am interested in the ${pack.name} package for ${d.name} (${pack.days} days). Please share a quote.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className={ctaClass("primary", "mt-auto w-full")}
                    >
                      Get this plan
                      <CtaArrow />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-6 text-xs leading-6 text-muted-foreground">
            Prices are indicative per person on twin sharing and move with season, hotel category
            and group size. Every plan is rebuilt around your dates.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="flex flex-col gap-4 border-b border-maroon/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-md text-maroon-deep">Pairs well with.</h2>
            <Link to="/destinations" className={ctaClass("outline-dark", "self-start")}>
              All destinations
              <CtaArrow />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {nearby.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <DestinationCard destination={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
