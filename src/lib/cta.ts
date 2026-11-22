import { cn } from "@/lib/utils";

export type CtaVariant = "primary" | "outline" | "outline-dark" | "whatsapp" | "ghost" | "white";

const variants: Record<CtaVariant, string> = {
  primary:
    "bg-saffron text-maroon-deep hover:bg-saffron-soft hover:shadow-[0_16px_40px_-18px_rgba(232,117,42,0.85)]",
  outline: "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-maroon",
  "outline-dark":
    "border border-maroon/20 text-maroon hover:border-maroon hover:bg-maroon hover:text-ivory",
  whatsapp: "bg-forest text-ivory hover:bg-[#256b52]",
  ghost: "text-maroon hover:bg-maroon/5",
  white: "bg-ivory text-maroon hover:bg-gold-soft",
};

export const ctaClass = (variant: CtaVariant = "primary", className?: string) =>
  cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold leading-none transition-all duration-300",
    variants[variant],
    className,
  );
