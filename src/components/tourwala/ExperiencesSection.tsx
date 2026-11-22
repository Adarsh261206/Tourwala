import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/tourwala-data";
import { Reveal, SectionHeading } from "./motion";
import { CtaArrow } from "./ui";
import { ctaClass } from "@/lib/cta";

export function ExperiencesSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="Ways to travel"
            title={
              <>
                How do you like to <span className="italic text-saffron">travel?</span>
              </>
            }
            copy="Tell us who's coming and we'll shape the route around them — easy days for grandparents, enough adventure for the teenagers, and a proper honeymoon for the two of you."
            className="max-w-2xl"
          />
          <Reveal delay={0.1}>
            <Link to="/experiences" className={ctaClass("outline-dark", "hidden lg:inline-flex")}>
              Explore all styles
              <CtaArrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.slice(0, 8).map((experience, index) => (
            <Reveal key={experience.slug} delay={(index % 3) * 0.06}>
              <Link
                to="/experiences"
                hash={experience.slug}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[1.5rem]"
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/90 via-maroon-deep/15 to-transparent" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 bg-maroon-deep/30 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="absolute inset-x-5 bottom-5 text-ivory">
                  <p className="eyebrow text-[0.56rem] text-gold-soft/80">{experience.note}</p>
                  <h3 className="mt-2 font-display text-2xl">{experience.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-ivory/60">
                    {experience.line}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 lg:hidden">
          <Link to="/experiences" className={ctaClass("outline-dark", "w-full")}>
            Explore all styles
            <CtaArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
