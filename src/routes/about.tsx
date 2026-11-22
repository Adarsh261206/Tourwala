import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, HeartHandshake, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import udaipurImg from "@/assets/dest-udaipur.jpg";
import mumbaiImg from "@/assets/dest-mumbai.jpg";
import { PageHero } from "@/components/tourwala/PageHero";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { Testimonials } from "@/components/tourwala/Testimonials";
import { Reveal, SectionHeading } from "@/components/tourwala/motion";
import { CtaArrow, SectionLabel } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import { BRAND, whatsappLink } from "@/lib/tourwala-data";

const title = "About Tourwala Travels — A Thane Travel Desk, Not a Call Centre";
const description =
  "Tourwala Travels is a domestic and international tours and travels desk in Thane West. One person, one clear plan and one honest price from first call to last drop.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Hospitality, not transactions",
    copy: "We treat your holiday like a guest is coming home. The small things matter — a late check-out, a child seat, a Jain meal.",
  },
  {
    icon: ShieldCheck,
    title: "Clear before you pay",
    copy: "A written quote, an invoice and inclusions in plain language. If something isn't included, we say so upfront.",
  },
  {
    icon: Users,
    title: "One point of contact",
    copy: "The person who plans your trip stays on it. No explaining your story again to a new agent every time you call.",
  },
  {
    icon: ScaleIcon,
    title: "Honest recommendations",
    copy: "If a cheaper hotel is the better choice for your group, we'll tell you. If a destination is wrong for the season, we'll say that too.",
  },
];

function ScaleIcon({ className }: { className?: string }) {
  return <Sparkles className={className} aria-hidden="true" />;
}

function AboutPage() {
  return (
    <main>
      <PageHero
        image={udaipurImg}
        eyebrow="About Tourwala"
        title={
          <>
            A Thane travel desk,
            <br />
            <span className="italic text-gold-soft">not a call centre.</span>
          </>
        }
        description="We plan domestic and international holidays for families, couples, groups and companies. One person, one clear plan, one honest price — from the first call to the last drop."
        meta={[
          { label: "Based in", value: "Thane West, Mumbai" },
          { label: "Open", value: "All days, 10:30 – 7" },
          { label: "Specialty", value: "India first" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/plan" className={ctaClass("primary")}>
            Get a free plan
            <CtaArrow />
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className={ctaClass("outline")}>
            Say hello on WhatsApp
            <CtaArrow />
          </a>
        </div>
      </PageHero>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
          <div>
            <SectionLabel>The idea</SectionLabel>
            <h2 className="display-md mt-5 text-maroon-deep">
              Travel should feel exciting,
              <br />
              <span className="italic text-saffron">not exhausting.</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Somewhere between the fifteenth website tab and the fortieth WhatsApp forward,
                planning a holiday stops being fun. That's the gap Tourwala fills.
              </p>
              <p>
                We are a tours and travels desk in Thane West. You tell us who's travelling, where
                you're thinking and what you don't want. We come back with a clear route, honest
                pricing and someone who actually answers the phone while you're away.
              </p>
              <p>
                No call centre scripts. No copy-paste itineraries. No pretending every hotel is
                five-star. Just a properly planned holiday, with the boring parts handled.
              </p>
            </div>
            <p className="mt-7 eyebrow text-gold">Fun Unlimited</p>
          </div>

          <div className="relative">
            <div className="arch overflow-hidden rounded-[999px_999px_28px_28px]">
              <img
                src={mumbaiImg}
                alt="Gateway of India, Mumbai"
                width={1200}
                height={1600}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.2rem] border border-border bg-card p-4 shadow-xl">
              <p className="text-xs font-semibold text-maroon-deep">Our home patch</p>
              <p className="mt-1 text-[0.68rem] leading-5 text-muted-foreground">
                Mumbai, Lonavala, Mahabaleshwar and the Konkan coast — we know these roads without a
                map.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <SectionHeading
            label="The way we work"
            title={
              <>
                Four things we <span className="italic text-saffron">won't compromise</span> on.
              </>
            }
            copy="These are the standards we hold ourselves to, whether it's a two-night Lonavala break or a two-week Switzerland trip."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="h-full rounded-[1.35rem] border border-border bg-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                    <value.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-maroon-deep">{value.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{value.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <SectionLabel>Why India first</SectionLabel>
              <h2 className="display-md mt-5 text-maroon-deep">
                The country is the product.
                <br />
                <span className="italic text-saffron">We just know the roads.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                India is where we plan most often and where local knowledge matters most. The right
                month for Ladakh, the quiet side of Goa, the queue at Kashi — these details change a
                trip. We keep our focus here, and plan international holidays with the same care.
              </p>
              <div className="mt-7">
                <Link to="/destinations" className={ctaClass("outline-dark")}>
                  Explore India first
                  <CtaArrow />
                </Link>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-border bg-card p-6 sm:p-8">
              <p className="eyebrow text-saffron">Find us</p>
              <h3 className="mt-3 font-display text-3xl text-maroon-deep">The Thane desk</h3>
              <div className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
                <p className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-maroon"
                  >
                    {BRAND.addressLine1},<br />
                    {BRAND.addressLine2},<br />
                    {BRAND.addressLine3}
                  </a>
                </p>
                <p className="flex gap-3">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                  {BRAND.hours}
                </p>
                <p className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                  Two minutes from Naupada police station. No appointment needed.
                </p>
              </div>
              <a
                href={`tel:${BRAND.phone}`}
                className="mt-6 inline-block font-display text-3xl text-maroon-deep"
              >
                {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCta />
    </main>
  );
}
