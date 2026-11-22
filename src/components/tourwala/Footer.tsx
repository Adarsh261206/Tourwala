import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BRAND } from "@/lib/tourwala-data";
import { Brand } from "./Brand";

type FooterLink = {
  to: "/destinations" | "/journeys" | "/experiences" | "/about" | "/contact" | "/journal" | "/plan";
  label: string;
  search?: { region: "domestic" | "international" };
};

const explore: FooterLink[] = [
  { to: "/destinations", label: "India tours", search: { region: "domestic" as const } },
  { to: "/destinations", label: "International", search: { region: "international" as const } },
  { to: "/journeys", label: "Itineraries" },
  { to: "/experiences", label: "Ways to travel" },
];

const company: FooterLink[] = [
  { to: "/about", label: "About Tourwala" },
  { to: "/contact", label: "Contact & office" },
  { to: "/journal", label: "Travel journal" },
  { to: "/plan", label: "Get a free plan" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-maroon-deep pb-28 text-ivory lg:pb-10">
      <div className="jaali pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="relative mx-auto max-w-[92rem] px-5 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <div>
            <Brand tone="light" size="md" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-ivory/55">
              A Thane-based tours and travels desk for domestic and international holidays. Clear
              plans, honest prices and one person looking after your trip.
            </p>
            <p className="mt-6 eyebrow text-gold-soft/70">Fun Unlimited</p>
          </div>

          <div>
            <p className="eyebrow text-ivory/35">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/65">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    search={item.search ?? {}}
                    className="link-underline transition-colors hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/35">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/65">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="link-underline transition-colors hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/35">Visit or call</p>
            <ul className="mt-5 space-y-4 text-sm text-ivory/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-6 transition-colors hover:text-gold-soft"
                >
                  {BRAND.addressLine1},
                  <br />
                  {BRAND.addressLine2},
                  <br />
                  {BRAND.addressLine3}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${BRAND.phone}`} className="transition-colors hover:text-gold-soft">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${BRAND.emailHref}`}
                  className="transition-colors hover:text-gold-soft"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{BRAND.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/12 pt-7 text-xs text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tourwala Travels. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Domestic &amp; international tours</span>
            <a
              href={BRAND.websiteHref}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold-soft"
            >
              {BRAND.website}
            </a>
          </p>
        </div>

        <p
          className="display-xl pointer-events-none mt-6 select-none text-center text-ivory/[0.035]"
          aria-hidden="true"
        >
          TOURWALA
        </p>
      </div>
    </footer>
  );
}
