import { ChevronDown, Search } from "lucide-react";
import { destinations } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";

const months = [
  "Any month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const travellerOptions = [
  "2 adults",
  "2 adults + 1 child",
  "2 adults + 2 children",
  "3 – 4 travellers",
  "5 – 8 travellers",
  "9+ travellers",
  "Just me",
];

function FieldLabel({ children }: { children: string }) {
  return <span className="eyebrow block text-[0.58rem] text-maroon/55">{children}</span>;
}

function SelectField({
  label,
  name,
  children,
  defaultValue,
  className,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <FieldLabel>{label}</FieldLabel>
      <span className="relative mt-2 block">
        <select
          name={name}
          defaultValue={defaultValue}
          className="w-full rounded-xl border border-maroon/12 bg-white/60 px-3.5 py-3 pr-9 text-sm font-semibold text-ink outline-none transition-colors focus:border-saffron"
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-maroon/45"
          aria-hidden="true"
        />
      </span>
    </label>
  );
}

export function Planner({ className }: { className?: string }) {
  return (
    <form
      action="/plan"
      method="get"
      className={cn(
        "rounded-[1.8rem] border border-white/60 bg-ivory/97 p-5 shadow-[0_40px_100px_-40px_rgba(30,8,8,0.8)] sm:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-[0.58rem] text-saffron">Free holiday plan</p>
          <h2 className="mt-2 font-display text-[1.7rem] leading-tight text-maroon-deep">
            Where are we going?
          </h2>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon text-ivory">
          <Search className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        <SelectField label="Destination" name="destination" defaultValue="">
          <option value="">Not decided yet — help me choose</option>
          <optgroup label="India">
            {destinations
              .filter((destination) => destination.region === "domestic")
              .map((destination) => (
                <option key={destination.slug} value={destination.slug}>
                  {destination.name}
                </option>
              ))}
          </optgroup>
          <optgroup label="International">
            {destinations
              .filter((destination) => destination.region === "international")
              .map((destination) => (
                <option key={destination.slug} value={destination.slug}>
                  {destination.name}
                </option>
              ))}
          </optgroup>
        </SelectField>

        <div className="grid grid-cols-2 gap-3">
          <SelectField label="Travel month" name="month" defaultValue="Any month">
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </SelectField>
          <SelectField label="Travellers" name="travellers" defaultValue="2 adults">
            {travellerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </SelectField>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-6 py-4 text-sm font-bold text-maroon-deep transition-colors hover:bg-saffron-soft"
      >
        Get my free plan
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-4 text-center text-[0.7rem] leading-5 text-muted-foreground">
        No payment. No obligation. A real person replies during office hours.
      </p>
    </form>
  );
}
