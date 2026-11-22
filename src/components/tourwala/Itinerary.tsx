import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ItineraryTimeline({
  days,
  tone = "dark",
  className,
}: {
  days: { day: number; title: string; body: string }[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "relative border-l pl-6 sm:pl-8",
        tone === "light" ? "border-ivory/15" : "border-maroon/15",
        className,
      )}
    >
      {days.map((day) => (
        <li key={day.day} className="relative pb-8 last:pb-0">
          <span
            className={cn(
              "absolute -left-[1.78rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 sm:-left-[2.28rem]",
              tone === "light" ? "border-maroon-deep bg-gold-soft" : "border-ivory bg-saffron",
            )}
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className={cn(
                "eyebrow text-[0.56rem]",
                tone === "light" ? "text-gold-soft" : "text-saffron",
              )}
            >
              Day {String(day.day).padStart(2, "0")}
            </span>
            <h3
              className={cn(
                "font-display text-xl sm:text-2xl",
                tone === "light" ? "text-ivory" : "text-maroon-deep",
              )}
            >
              {day.title}
            </h3>
          </div>
          <p
            className={cn(
              "mt-1.5 max-w-2xl text-sm leading-7",
              tone === "light" ? "text-ivory/55" : "text-muted-foreground",
            )}
          >
            {day.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function InclusionList({
  items,
  included = true,
  tone = "dark",
}: {
  items: string[];
  included?: boolean;
  tone?: "dark" | "light";
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6">
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              included
                ? tone === "light"
                  ? "bg-gold/15 text-gold-soft"
                  : "bg-forest/10 text-forest"
                : "bg-destructive/10 text-destructive",
            )}
          >
            {included ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
          </span>
          <span className={tone === "light" ? "text-ivory/65" : "text-muted-foreground"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
