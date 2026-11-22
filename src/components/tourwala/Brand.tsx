import { cn } from "@/lib/utils";

export function CompassMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("shrink-0", className)} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeOpacity="0.28" />
      <circle
        cx="24"
        cy="24"
        r="17"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeDasharray="1 4"
        strokeLinecap="round"
      />
      <path
        d="M24 4.5l3.9 15.6L43.5 24l-15.6 3.9L24 43.5l-3.9-15.6L4.5 24l15.6-3.9z"
        fill="var(--saffron)"
      />
      <circle
        cx="24"
        cy="24"
        r="4.2"
        fill="var(--maroon)"
        stroke="var(--ivory)"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function Brand({
  tone = "dark",
  size = "md",
  showTagline = true,
  className,
}: {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}) {
  const titleSize = size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl";
  const markSize = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-8 w-8" : "h-10 w-10";

  return (
    <span className={cn("inline-flex items-center gap-3", className)} aria-label="Tourwala Travels">
      <CompassMark className={cn(markSize, tone === "light" ? "text-ivory" : "text-maroon")} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-sans font-extrabold tracking-[-0.065em]",
            titleSize,
            tone === "light" ? "text-ivory" : "text-maroon",
          )}
        >
          TOUR<span className="text-saffron">WALA</span>
          <svg
            viewBox="0 0 24 24"
            className="ml-1 inline-block h-[0.62em] w-[0.62em] -translate-y-[0.04em] fill-saffron"
            aria-hidden="true"
          >
            <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z" />
          </svg>
        </span>
        {showTagline && (
          <span className="mt-1.5 flex items-center gap-2">
            <span className={cn("h-px w-4", tone === "light" ? "bg-gold-soft/70" : "bg-gold")} />
            <span
              className={cn(
                "text-[0.5rem] font-semibold uppercase tracking-[0.34em]",
                tone === "light" ? "text-gold-soft/80" : "text-gold",
              )}
            >
              Fun Unlimited
            </span>
          </span>
        )}
      </span>
    </span>
  );
}
