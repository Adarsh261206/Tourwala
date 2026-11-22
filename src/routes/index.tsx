import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/tourwala/Hero";
import { TrustSteps } from "@/components/tourwala/TrustSteps";
import { IndiaShowcase } from "@/components/tourwala/IndiaShowcase";
import { IndiaFilm } from "@/components/tourwala/IndiaFilm";
import { FeaturedItinerary } from "@/components/tourwala/FeaturedItinerary";
import { WhyTourwala } from "@/components/tourwala/WhyTourwala";
import { ExperiencesSection } from "@/components/tourwala/ExperiencesSection";
import { InternationalSection } from "@/components/tourwala/InternationalSection";
import { Testimonials } from "@/components/tourwala/Testimonials";
import { FAQ } from "@/components/tourwala/FAQ";
import { ContactCta } from "@/components/tourwala/ContactCta";
import { Planner } from "@/components/tourwala/Planner";

const title = "Tourwala Travels — India Tours & International Holidays from Thane";
const description =
  "Domestic and international holidays, planned personally by Tourwala Travels in Thane West. Clear day-by-day itineraries, honest prices, all days open 10:30 am – 7:00 pm.";

export const Route = createFileRoute("/")({
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
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <section className="bg-cream px-5 py-8 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-md">
          <Planner className="border-border bg-card shadow-none" />
        </div>
      </section>
      <TrustSteps />
      <IndiaShowcase />
      <IndiaFilm />
      <FeaturedItinerary />
      <WhyTourwala />
      <ExperiencesSection />
      <InternationalSection />
      <Testimonials />
      <FAQ />
      <ContactCta />
    </main>
  );
}
