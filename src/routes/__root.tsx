import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { Header } from "@/components/tourwala/Header";
import { Footer } from "@/components/tourwala/Footer";
import { MobileBar } from "@/components/tourwala/MobileBar";
import { FloatingWhatsApp } from "@/components/tourwala/FloatingWhatsApp";
import { Preloader } from "@/components/tourwala/Preloader";
import { ScrollProgress } from "@/components/tourwala/ScrollProgress";
import { BRAND } from "@/lib/tourwala-data";

const title = "Tourwala Travels — India Tours & International Holidays from Thane";
const description =
  "Domestic and international holidays, planned personally by Tourwala Travels in Thane West. Clear day-by-day itineraries, honest prices, all days open 10:30 am – 7:00 pm.";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: BRAND.legalName,
  description,
  url: BRAND.websiteHref,
  telephone: BRAND.phone,
  email: BRAND.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BRAND.addressLine1}, ${BRAND.addressLine2}`,
    addressLocality: "Thane West",
    addressRegion: "Maharashtra",
    postalCode: "400601",
    addressCountry: "IN",
  },
  areaServed: "India",
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:30",
      closes: "19:00",
    },
  ],
};

function NotFoundComponent() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-ivory px-5 pt-28">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-saffron">404</p>
        <h1 className="display-md mt-4 text-maroon-deep">This page has checked out.</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Let's get you back to the good
          stuff.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-saffron px-6 py-3.5 text-sm font-semibold text-maroon-deep"
          >
            Go home
          </Link>
          <Link
            to="/destinations"
            className="inline-flex items-center justify-center rounded-full border border-maroon/20 px-6 py-3.5 text-sm font-semibold text-maroon"
          >
            Explore destinations
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-ivory px-5 pt-28">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-saffron">Something went wrong</p>
        <h1 className="display-md mt-4 text-maroon-deep">We lost the map for a second.</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          This page didn't load. Try refreshing, or talk to us directly — a real person is around.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-saffron px-6 py-3.5 text-sm font-semibold text-maroon-deep"
          >
            Try again
          </button>
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center justify-center rounded-full border border-maroon/20 px-6 py-3.5 text-sm font-semibold text-maroon"
          >
            Call {BRAND.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: BRAND.legalName },
      { name: "theme-color", content: "#6c1a1a" },
      { property: "og:site_name", content: BRAND.legalName },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusiness),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}
