import { motion } from "motion/react";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/lib/easing";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./ui";

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration: 0.85, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

export function SplitReveal({
  text,
  className,
  delay = 0,
  as = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
      }}
    >
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.08em] align-top"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.85, ease: easeOutExpo } },
            }}
          >
            {word}
            {index < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeading({
  label,
  title,
  copy,
  tone = "dark",
  align = "left",
  className,
  children,
}: {
  label: string;
  title: ReactNode;
  copy?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <div className={cn(align === "center" && "flex justify-center")}>
          <SectionLabel tone={tone}>{label}</SectionLabel>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className={cn("display-lg mt-5", tone === "light" ? "text-ivory" : "text-maroon-deep")}>
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-[0.95rem] leading-7 text-pretty",
              align === "center" && "mx-auto",
              tone === "light" ? "text-ivory/65" : "text-muted-foreground",
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
