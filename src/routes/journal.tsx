import { createFileRoute, Link } from "@tanstack/react-router";
import rajasthanImg from "@/assets/dest-rajasthan.jpg";
import { PageHero } from "@/components/tourwala/PageHero";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { Reveal, SectionHeading } from "@/components/tourwala/motion";
import { CtaArrow } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import { journal } from "@/lib/tourwala-data";

const title = "Travel Journal — Practical India Travel Notes | Tourwala Travels";
const description =
  "Practical notes for planning India trips: the right month for Rajasthan, Kerala in the monsoon, Ladakh without altitude panic and a first-timer's guide to Kashi.";

export const Route = createFileRoute("/journal")({
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
  component: JournalPage,
});

function JournalPage() {
  const [lead, ...rest] = journal;

  return (
    <main>
      <PageHero
        image={rajasthanImg}
        eyebrow="Travel journal"
        title={
          <>
            Notes from the road,
            <br />
            <span className="italic text-gold-soft">not the internet.</span>
          </>
        }
        description="Short, practical guides written from the trips we plan. No listicles, no sponsored hotels — just the things that actually matter when you're deciding."
      />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          {lead && (
            <Reveal>
              <div className="grid overflow-hidden rounded-[1.8rem] border border-border bg-card lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[18rem] lg:min-h-[26rem]">
                  <img
                    src={lead.image}
                    alt={lead.title}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="eyebrow text-saffron">{lead.kicker}</p>
                  <h2 className="display-sm mt-4 text-maroon-deep">{lead.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{lead.body}</p>
                  <Link to="/plan" className={ctaClass("outline-dark", "mt-6 self-start")}>
                    Plan a trip around this
                    <CtaArrow />
                  </Link>
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-14">
            <SectionHeading
              label="More notes"
              title={
                <>
                  A little local <span className="italic text-saffron">knowledge.</span>
                </>
              }
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article, index) => (
                <Reveal key={article.title} delay={(index % 3) * 0.06}>
                  <article className="group h-full overflow-hidden rounded-[1.5rem] border border-border bg-card">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="eyebrow text-[0.56rem] text-saffron">{article.kicker}</p>
                      <h3 className="mt-2 font-display text-2xl text-maroon-deep">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{article.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[1.6rem] border border-border bg-cream p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="eyebrow text-saffron">A note on timing</p>
                <h2 className="mt-2 font-display text-2xl text-maroon-deep sm:text-3xl">
                  The right month changes everything.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Before you book, check the season for your destination. If you're flexible, we can
                  often find better weather and better prices a few weeks either side.
                </p>
              </div>
              <Link to="/plan" className={ctaClass("primary")}>
                Ask us for dates
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
