import { useInView } from "motion/react";
import { BedDouble, Headphones, Receipt, UserRound } from "lucide-react";
import { useEffect, useRef } from "react";
import { BRAND, stats } from "@/lib/tourwala-data";
import { Reveal, SectionHeading } from "./motion";

const pillars = [
  {
    icon: UserRound,
    title: "One person, start to finish",
    copy: "The same person who plans your trip also answers the phone while you're travelling.",
  },
  {
    icon: Receipt,
    title: "A clear, written price",
    copy: "Hotel, transfers and experiences listed up front. No surprise add-ons at the end.",
  },
  {
    icon: BedDouble,
    title: "Stays we've checked",
    copy: "We recommend hotels we know — not the first result on a booking site.",
  },
  {
    icon: Headphones,
    title: "Support on the road",
    copy: "Flight delayed or weather changed? You have a real number to call, all day.",
  },
];

export function WhyTourwala() {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    let cancelled = false;

    void import("animejs").then((module) => {
      if (cancelled) return;
      const anime = module.default;
      const path = pathRef.current;
      if (path) {
        anime({
          targets: path,
          strokeDashoffset: [anime.setDashoffset(path), 0],
          duration: 2200,
          easing: "easeInOutSine",
        });
      }

      const counters = ref.current?.querySelectorAll<HTMLElement>("[data-counter]");
      counters?.forEach((element) => {
        const target = Number(element.dataset["counter"] ?? "0");
        const value = { current: 0 };
        anime({
          targets: value,
          current: target,
          round: 1,
          duration: 1700,
          easing: "easeOutExpo",
          update: () => {
            element.textContent = String(Math.round(value.current));
          },
        });
      });
    });

    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <section ref={ref} className="overflow-hidden bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading
              label="Why Tourwala"
              title={
                <>
                  We don't sell packages.
                  <br />
                  We <span className="italic text-saffron">plan holidays.</span>
                </>
              }
              copy="You get a real itinerary, a clear price and one person who knows your file. That's the whole idea — no call centre, no copy-paste quote."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <div className="h-full rounded-[1.35rem] border border-border bg-card p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon/5 text-maroon">
                      <pillar.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-xl text-maroon-deep">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted-foreground">{pillar.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] bg-maroon-deep p-6 text-ivory sm:p-8">
              <div className="jaali pointer-events-none absolute inset-0 opacity-[0.12]" />
              <div className="relative">
                <p className="eyebrow text-gold-soft/80">From our Thane desk</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-ivory">
                  A real office.
                  <br />
                  <span className="italic text-gold-soft">A real number.</span>
                </h3>

                <div className="relative mt-8 overflow-hidden rounded-[1.3rem] border border-ivory/12 bg-maroon/30 p-5">
                  <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
                  <svg viewBox="0 0 360 190" className="relative h-auto w-full" aria-hidden="true">
                    <path
                      d="M22 152h316M22 112h316M22 72h316M92 20v152M182 20v152M272 20v152"
                      stroke="var(--ivory)"
                      strokeOpacity="0.07"
                      strokeWidth="1"
                    />
                    <path
                      ref={pathRef}
                      d="M28 146c42-8 54-70 102-74 45-4 48 58 92 54 36-3 54-48 106-58"
                      fill="none"
                      stroke="var(--gold-soft)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle cx="28" cy="146" r="4" fill="var(--saffron)" />
                    <circle
                      cx="28"
                      cy="146"
                      r="9"
                      fill="none"
                      stroke="var(--saffron)"
                      strokeOpacity="0.4"
                    />
                    <circle cx="328" cy="68" r="4" fill="var(--gold-soft)" />
                    <circle
                      cx="328"
                      cy="68"
                      r="9"
                      fill="none"
                      stroke="var(--gold-soft)"
                      strokeOpacity="0.4"
                    />
                  </svg>
                  <div className="relative mt-4 flex items-center justify-between gap-3 text-[0.58rem] uppercase tracking-[0.14em] text-ivory/45">
                    <span>Thane West</span>
                    <span>Your next trip</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-ivory/65">
                  <p>{BRAND.addressLine1}</p>
                  <p>{BRAND.addressLine2}</p>
                  <p>{BRAND.addressLine3}</p>
                  <p className="pt-2 text-ivory/85">
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="text-gold-soft transition-colors hover:text-ivory"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                    <span className="mx-2 text-ivory/25">·</span>
                    {BRAND.hoursShort}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-7">
              <p className="font-display text-5xl leading-none text-maroon">
                <span data-counter={stat.value}>0</span>
                <span className="text-saffron">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-sm font-semibold text-maroon-deep">{stat.label}</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-right text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          Every trip is customised. These are the numbers we work with.
        </p>
      </div>
    </section>
  );
}
