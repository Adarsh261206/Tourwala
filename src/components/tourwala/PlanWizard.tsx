import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Check, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { BRAND, destinations, whatsappLink } from "@/lib/tourwala-data";
import { cn } from "@/lib/utils";
import { CtaArrow } from "./ui";
import { ctaClass } from "@/lib/cta";
import { WhatsAppIcon } from "./WhatsAppIcon";

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

const budgets = [
  "Not sure",
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
];

const tripTypes = [
  { value: "Family", note: "All ages, easy pace" },
  { value: "Honeymoon", note: "Couple, private stays" },
  { value: "Friends", note: "Group, good stories" },
  { value: "Pilgrimage", note: "Darshan, comfortable" },
  { value: "Corporate", note: "Offsite, incentive or MICE" },
  { value: "Students", note: "College or school group" },
  { value: "Solo", note: "Your own pace" },
];

const stepLabels = ["Where", "Who & when", "Your details"];

function FieldShell({
  label,
  htmlFor,
  children,
  hint,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow block text-[0.58rem] text-maroon/55">
        {label}
      </label>
      <div className="relative mt-2">{children}</div>
      {hint && <p className="mt-1.5 text-[0.68rem] leading-5 text-muted-foreground">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-maroon/12 bg-white/70 px-4 py-3.5 text-sm font-semibold text-ink outline-none transition-colors placeholder:font-normal placeholder:text-muted-foreground/70 focus:border-saffron";

export function PlanWizard({
  initialDestination = "",
  initialMonth = "Any month",
  initialTravellers = "2 adults",
  initialType = "",
}: {
  initialDestination?: string;
  initialMonth?: string;
  initialTravellers?: string;
  initialType?: string;
}) {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [destination, setDestination] = useState(
    destinations.some((item) => item.slug === initialDestination) ? initialDestination : "",
  );
  const [type, setType] = useState(initialType);
  const [month, setMonth] = useState(months.includes(initialMonth) ? initialMonth : "Any month");
  const [travellers, setTravellers] = useState(
    travellerOptions.includes(initialTravellers) ? initialTravellers : "2 adults",
  );
  const [budget, setBudget] = useState("Not sure");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const selectedDestination = destinations.find((item) => item.slug === destination);

  const message = [
    "Hi Tourwala Travels! I'd like a free holiday plan.",
    "",
    `Name: ${name || "—"}`,
    `Phone: ${phone || "—"}`,
    `Destination: ${selectedDestination?.name ?? "Not decided yet"}`,
    `Trip type: ${type || "Not decided yet"}`,
    `Travel month: ${month}`,
    `Travellers: ${travellers}`,
    `Budget: ${budget} per person`,
    notes.trim() ? `Notes: ${notes.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const submit = () => {
    const nextErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) nextErrors.name = "Please enter your name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) nextErrors.phone = "Please enter a 10-digit mobile number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setStep(0);
    setDestination("");
    setType("");
    setMonth("Any month");
    setTravellers("2 adults");
    setBudget("Not sure");
    setName("");
    setPhone("");
    setNotes("");
    setErrors({});
  };

  if (sent) {
    return (
      <div className="rounded-[1.8rem] border border-border bg-card p-6 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
          <Check className="h-7 w-7" />
        </span>
        <p className="eyebrow mt-6 text-saffron">Request ready</p>
        <h2 className="display-sm mt-3 text-maroon-deep">Your plan is on its way.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
          We've opened WhatsApp with your details. If it didn't open, tap the button below. A real
          person from our Thane desk will reply during office hours.
        </p>

        <div className="mx-auto mt-6 max-w-md rounded-2xl border border-border bg-cream p-4 text-left text-xs leading-6 text-muted-foreground">
          <p>
            <span className="font-semibold text-maroon-deep">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold text-maroon-deep">Destination:</span>{" "}
            {selectedDestination?.name ?? "Help me choose"}
          </p>
          <p>
            <span className="font-semibold text-maroon-deep">Travellers:</span> {travellers} ·{" "}
            {month}
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className={ctaClass("whatsapp")}
          >
            <WhatsAppIcon />
            Open WhatsApp
          </a>
          <a href={`tel:${BRAND.phone}`} className={ctaClass("outline-dark")}>
            <Phone className="h-4 w-4" />
            Call {BRAND.phoneDisplay}
          </a>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-5 text-xs font-semibold text-maroon/60 underline underline-offset-4"
        >
          Plan another trip
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[1.8rem] border border-border bg-card p-5 shadow-[0_30px_80px_-60px_rgba(67,16,16,0.6)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow text-[0.56rem] text-saffron">
          Step {step + 1} of 3 · {stepLabels[step]}
        </p>
        <div className="flex gap-1.5">
          {stepLabels.map((label, index) => (
            <span
              key={label}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400",
                index <= step ? "w-8 bg-saffron" : "w-4 bg-maroon/10",
              )}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="mt-7 min-h-[20rem]"
        >
          {step === 0 && (
            <div>
              <h2 className="display-sm text-maroon-deep">Where would you like to go?</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Pick a place, or let us suggest a few that fit your dates and budget.
              </p>

              <div className="mt-6">
                <FieldShell label="Destination" htmlFor="plan-destination">
                  <select
                    id="plan-destination"
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                    className={cn(inputClass, "pr-10")}
                  >
                    <option value="">Help me choose — not decided yet</option>
                    <optgroup label="India">
                      {destinations
                        .filter((item) => item.region === "domestic")
                        .map((item) => (
                          <option key={item.slug} value={item.slug}>
                            {item.name}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="International">
                      {destinations
                        .filter((item) => item.region === "international")
                        .map((item) => (
                          <option key={item.slug} value={item.slug}>
                            {item.name}
                          </option>
                        ))}
                    </optgroup>
                  </select>
                </FieldShell>
              </div>

              {selectedDestination ? (
                <div className="mt-6 flex gap-3 rounded-2xl border border-border bg-cream p-3">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    width={200}
                    height={200}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div className="min-w-0 py-1">
                    <p className="font-display text-lg text-maroon-deep">
                      {selectedDestination.name}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                      {selectedDestination.tagline}
                    </p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-saffron">
                      From ₹{selectedDestination.priceFrom.toLocaleString("en-IN")} ·{" "}
                      {selectedDestination.bestTime}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-dashed border-maroon/15 bg-cream/60 p-4 text-xs leading-6 text-muted-foreground">
                  No problem. Tell us the mood — hills, beach, temples, adventure — and we'll reply
                  with two or three options.
                </div>
              )}
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="display-sm text-maroon-deep">Who's coming, and when?</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This helps us pace the trip properly. Nothing is confirmed yet.
              </p>

              <div className="mt-6">
                <p className="eyebrow text-[0.58rem] text-maroon/55">Trip type</p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {tripTypes.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setType(item.value)}
                      className={cn(
                        "rounded-xl border px-3 py-3 text-left transition-all",
                        type === item.value
                          ? "border-maroon bg-maroon text-ivory"
                          : "border-maroon/12 bg-white/70 text-maroon hover:border-maroon/30",
                      )}
                    >
                      <span className="block text-xs font-semibold">{item.value}</span>
                      <span
                        className={cn(
                          "mt-0.5 block text-[0.6rem]",
                          type === item.value ? "text-ivory/55" : "text-muted-foreground",
                        )}
                      >
                        {item.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <FieldShell label="Month" htmlFor="plan-month">
                  <select
                    id="plan-month"
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                    className={inputClass}
                  >
                    {months.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </FieldShell>
                <FieldShell label="Travellers" htmlFor="plan-travellers">
                  <select
                    id="plan-travellers"
                    value={travellers}
                    onChange={(event) => setTravellers(event.target.value)}
                    className={inputClass}
                  >
                    {travellerOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </FieldShell>
                <FieldShell label="Budget / person" htmlFor="plan-budget">
                  <select
                    id="plan-budget"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className={inputClass}
                  >
                    {budgets.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </FieldShell>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="display-sm text-maroon-deep">Where should we send the plan?</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Just your name and WhatsApp number. No email, no spam calls.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <FieldShell label="Your name" htmlFor="plan-name">
                  <input
                    id="plan-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    placeholder="e.g. Aditi Sharma"
                    className={cn(inputClass, errors.name && "border-destructive")}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </FieldShell>
                <FieldShell label="WhatsApp number" htmlFor="plan-phone">
                  <input
                    id="plan-phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    className={cn(inputClass, errors.phone && "border-destructive")}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                  )}
                </FieldShell>
              </div>

              <div className="mt-4">
                <FieldShell
                  label="Anything else we should know? (optional)"
                  htmlFor="plan-notes"
                  hint="Ages of children, food preferences, mobility needs, places you don't want to miss."
                >
                  <textarea
                    id="plan-notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    rows={3}
                    placeholder="Tell us in your own words..."
                    className={cn(inputClass, "resize-none font-normal")}
                  />
                </FieldShell>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-cream p-4 text-xs leading-6 text-muted-foreground">
                <p className="font-semibold text-maroon-deep">Your plan so far</p>
                <p className="mt-1">
                  {selectedDestination?.name ?? "Help me choose"} ·{" "}
                  {type || "Trip type not selected"} · {month} · {travellers} · {budget}
                </p>
              </div>

              <p className="mt-4 flex items-start gap-2 text-[0.68rem] leading-5 text-muted-foreground">
                <ShieldCheck
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest"
                  aria-hidden="true"
                />
                Your number is only used to send this plan. We never share it.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
        <button
          type="button"
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          disabled={step === 0}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold text-maroon/60 transition-colors hover:text-maroon",
            step === 0 && "pointer-events-none opacity-0",
          )}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>

        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((current) => Math.min(2, current + 1))}
            className={ctaClass("primary")}
          >
            Continue
            <CtaArrow />
          </button>
        ) : (
          <button type="button" onClick={submit} className={ctaClass("whatsapp")}>
            <WhatsAppIcon />
            Send my plan on WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}
