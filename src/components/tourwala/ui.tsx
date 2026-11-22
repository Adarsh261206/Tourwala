import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function CtaArrow({ className }: { className?: string }) {
  return (
    <ArrowUpRight
      className={cn(
        "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
        className,
      )}
      aria-hidden="true"
    />
  );
}

export function SectionLabel({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        tone === "light" ? "text-gold-soft" : "text-maroon/60",
      )}
    >
      <span className={cn("h-px w-8", tone === "light" ? "bg-gold-soft/60" : "bg-gold/80")} />
      {children}
    </span>
  );
}

export function Pill({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
        tone === "light" ? "bg-ivory/10 text-ivory/80" : "bg-maroon/5 text-maroon/70",
      )}
    >
      {children}
    </span>
  );
}
