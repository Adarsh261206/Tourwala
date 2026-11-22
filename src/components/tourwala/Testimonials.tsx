import { Star } from "lucide-react";
import { testimonials } from "@/lib/tourwala-data";
import { Reveal, SectionHeading } from "./motion";

export function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <SectionHeading
          label="Traveller notes"
          title={
            <>
              What people say <span className="italic text-saffron">after</span> the trip.
            </>
          }
          copy="The best compliment is a repeat trip. Here are a few notes from travellers who let us plan theirs."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 2) * 0.08}>
              <figure className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6 sm:p-8">
                <div className="flex gap-1 text-saffron" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-2xl leading-snug text-maroon-deep sm:text-[1.7rem]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-xs font-bold tracking-[0.08em] text-ivory">
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-maroon-deep">
                      {testimonial.name}
                    </span>
                    <span className="mt-0.5 block text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {testimonial.trip}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
