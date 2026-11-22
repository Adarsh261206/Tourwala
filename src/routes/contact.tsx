import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import mumbaiImg from "@/assets/dest-mumbai.jpg";
import { PageHero } from "@/components/tourwala/PageHero";
import { Reveal, SectionHeading } from "@/components/tourwala/motion";
import { CtaArrow, SectionLabel } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";
import { WhatsAppIcon } from "@/components/tourwala/WhatsAppIcon";
import { BRAND, whatsappLink } from "@/lib/tourwala-data";

const title = "Contact Tourwala Travels — Thane West Office & WhatsApp";
const description =
  "Call 82865 21111, WhatsApp us or visit the Tourwala Travels office at Naupada, Thane West. All days open, 10:30 am – 7:00 pm. No appointment needed.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const checklist = [
  "Your travel dates, even if they're flexible",
  "How many people are travelling, with ages of children",
  "A rough budget per person",
  "Anything you definitely want — or definitely don't",
];

function ContactPage() {
  return (
    <main>
      <PageHero
        image={mumbaiImg}
        eyebrow="Contact"
        title={
          <>
            Come say hello.
            <br />
            <span className="italic text-gold-soft">Or just call.</span>
          </>
        }
        description="We're a real desk in Thane West, open all days. Call, WhatsApp or walk in — whichever is easiest. You'll speak to a person, not a menu."
        meta={[
          { label: "Phone", value: BRAND.phoneDisplay },
          { label: "Hours", value: "All days · 10:30 – 7" },
          { label: "Office", value: "Naupada, Thane West" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${BRAND.phone}`} className={ctaClass("primary")}>
            <Phone className="h-4 w-4" />
            Call now
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className={ctaClass("outline")}>
            <WhatsAppIcon />
            WhatsApp us
            <CtaArrow />
          </a>
        </div>
      </PageHero>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <SectionHeading
            label="Choose what suits you"
            title={
              <>
                Four ways to reach <span className="italic text-saffron">a real person.</span>
              </>
            }
            copy="Office hours are all days, 10:30 am to 7:00 pm. WhatsApp is usually the fastest; the phone is best if you want to talk it through."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <a
                href={`tel:${BRAND.phone}`}
                className="group flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6 transition-colors hover:border-gold/60 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 eyebrow text-[0.56rem] text-saffron">Call</p>
                <p className="mt-1 font-display text-3xl text-maroon-deep group-hover:text-maroon">
                  {BRAND.phoneDisplay}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Best for a quick question or a proper conversation. All days, 10:30 – 7.
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.06}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6 transition-colors hover:border-gold/60 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <p className="mt-5 eyebrow text-[0.56rem] text-saffron">WhatsApp</p>
                <p className="mt-1 font-display text-3xl text-maroon-deep group-hover:text-maroon">
                  Chat with us
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Send dates, destination and traveller count. We'll take it from there.
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={`mailto:${BRAND.emailHref}`}
                className="group flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6 transition-colors hover:border-gold/60 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 eyebrow text-[0.56rem] text-saffron">Email</p>
                <p className="mt-1 break-all font-display text-2xl text-maroon-deep group-hover:text-maroon">
                  {BRAND.email}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Best for documents, corporate queries and detailed requirements.
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6 transition-colors hover:border-gold/60 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 eyebrow text-[0.56rem] text-saffron">Visit</p>
                <p className="mt-1 font-display text-2xl text-maroon-deep group-hover:text-maroon">
                  The Thane office
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {BRAND.addressLine1}, {BRAND.addressLine2}, {BRAND.addressLine3}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-maroon">
                  Open in Google Maps
                  <CtaArrow />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionLabel>Before you call</SectionLabel>
            <h2 className="display-md mt-5 text-maroon-deep">
              Have these handy. It saves <span className="italic text-saffron">everyone</span> time.
            </h2>
            <ul className="mt-7 space-y-4">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-maroon/10 pb-4 text-sm leading-6 text-muted-foreground"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-[0.6rem] font-bold text-maroon">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-6 text-muted-foreground">
              Don't have all of it? That's fine. We can start with a rough idea and shape it
              together.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-border bg-card p-6 sm:p-8">
            <p className="eyebrow text-saffron">Office details</p>
            <h3 className="mt-3 font-display text-3xl text-maroon-deep">Tourwala Travels</h3>
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
                <Phone className="mt-1 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                <a href={`tel:${BRAND.phone}`} className="transition-colors hover:text-maroon">
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                <a
                  href={`mailto:${BRAND.emailHref}`}
                  className="transition-colors hover:text-maroon"
                >
                  {BRAND.email}
                </a>
              </p>
            </div>

            <div className="mt-7 rounded-2xl border border-border bg-cream p-4">
              <p className="text-xs font-semibold text-maroon-deep">Not in Thane?</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                We plan for clients across India and abroad. WhatsApp works perfectly — most of our
                travellers never visit the office.
              </p>
            </div>

            <Link to="/plan" className={ctaClass("primary", "mt-6 w-full")}>
              Start a free plan instead
              <CtaArrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
