import { createFileRoute, Link } from "@tanstack/react-router";
import keralaImg from "@/assets/dest-kerala.jpg";
import { PageHero } from "@/components/tourwala/PageHero";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { Reveal, SectionHeading } from "@/components/tourwala/motion";
import { CtaArrow, SectionLabel } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import { experiences } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";

const title = "Ways to Travel — Family, Honeymoon, Pilgrimage & Adventure | Tourwala Travels";
const description =
  "Family holidays, honeymoons, pilgrimage trips, adventure routes, group travel and weekend breaks — planned around the people travelling. From Thane, for all of India.";

export const Route = createFileRoute("/experiences")({
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
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <main>
      <PageHero
        image={keralaImg}
        eyebrow="Ways to travel"
        title={
          <>
            The same country,
            <br />
            <span className="italic text-gold-soft">different weeks.</span>
          </>
        }
        description="A trip with grandparents is not the same as a honeymoon. Tell us who's coming and we'll build the route, pace and hotels around them."
        meta={[
          { label: "For", value: "All ages" },
          { label: "Focus", value: "India first" },
          { label: "Planning", value: "One point of contact" },
        ]}
      />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <SectionHeading
            label="Choose a starting point"
            title={
              <>
                What kind of trip are we <span className="italic text-saffron">planning?</span>
              </>
            }
            copy="These aren't rigid categories. Most trips are a mix — a family route with one adventure day, or a honeymoon with a pilgrimage stop."
          />

          <div className="mt-10 space-y-6">
            {experiences.map((experience, index) => (
              <Reveal key={experience.slug} delay={(index % 3) * 0.04}>
                <section
                  id={experience.slug}
                  className={cn(
                    "scroll-mt-28 overflow-hidden rounded-[1.8rem] border border-border bg-card",
                    "grid gap-0 lg:grid-cols-2",
                  )}
                >
                  <div
                    className={cn(
                      "relative min-h-[17rem] overflow-hidden lg:min-h-[22rem]",
                      index % 2 === 1 && "lg:order-2",
                    )}
                  >
                    <img
                      src={experience.image}
                      alt={experience.title}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/50 to-transparent lg:bg-gradient-to-r" />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <div className="flex items-baseline justify-between gap-4">
                      <SectionLabel>{experience.note}</SectionLabel>
                      <span className="font-display text-3xl text-gold/35">0{index + 1}</span>
                    </div>
                    <h2 className="display-sm mt-5 text-maroon-deep">{experience.title}</h2>
                    <p className="mt-3 max-w-lg font-display text-2xl italic leading-snug text-maroon/80">
                      {experience.line}
                    </p>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                      We'll ask about ages, mobility, food preferences and how much you want to pack
                      into each day. Then we'll send a route that matches — not a template.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/journeys"
                        search={{ type: experience.tags[0] ?? "All" }}
                        className={ctaClass("outline-dark")}
                      >
                        See {experience.tags[0]} trips
                        <CtaArrow />
                      </Link>
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="grid gap-8 rounded-[1.8rem] border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-saffron">Not sure which one fits?</p>
              <h2 className="display-sm mt-3 text-maroon-deep">
                Send us the group. We'll suggest the shape of the trip.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                Two adults and a toddler? Three generations? A group of ten friends? Each has a
                different ideal route. Tell us and we'll plan around it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/plan" className={ctaClass("primary")}>
                Get a free plan
                <CtaArrow />
              </Link>
              <Link to="/journeys" className={ctaClass("outline-dark")}>
                Browse itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
