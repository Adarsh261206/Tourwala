import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs, whatsappLink } from "@/lib/tourwala-data";
import { SectionHeading } from "./motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            label="Common questions"
            title={
              <>
                Before you <span className="italic text-saffron">ask.</span>
              </>
            }
            copy="If your question isn't here, call or WhatsApp us. A real person replies during office hours."
          />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-forest/20 bg-forest/5 px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory"
          >
            <WhatsAppIcon />
            Ask on WhatsApp
          </a>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-xl text-maroon-deep sm:text-2xl">{faq.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-maroon/15 text-maroon">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm leading-7 text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
