import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./motion";
import { SectionLabel } from "./ui";
import { cn } from "@/lib/utils";

export function PageHero({
  image,
  eyebrow,
  title,
  description,
  meta,
  children,
  backTo,
  backLabel = "Back",
  className,
}: {
  image?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
  backTo?:
    "/" | "/destinations" | "/journeys" | "/experiences" | "/journal" | "/about" | "/contact";
  backLabel?: string;
  className?: string;
}) {
  return (
    <section
      className={cn("relative overflow-hidden bg-maroon-deep pt-28 text-ivory sm:pt-32", className)}
    >
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
      )}
      <div className="absolute inset-0 hero-wash" />
      <div className="jaali pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="relative mx-auto max-w-[92rem] px-5 pb-16 pt-12 sm:px-8 sm:pb-20">
        {backTo && (
          <a
            href={backTo}
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-ivory/55 transition-colors hover:text-gold-soft"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {backLabel}
          </a>
        )}
        <Reveal>
          <SectionLabel tone="light">{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-xl mt-5 max-w-5xl text-ivory">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/65 sm:text-base">
              {description}
            </p>
          </Reveal>
        )}
        {meta && meta.length > 0 && (
          <Reveal delay={0.2}>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-ivory/35">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ivory/85">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.26}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
