import { whatsappLink } from "@/lib/tourwala-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tourwala Travels on WhatsApp"
      className="group fixed bottom-7 right-7 z-40 hidden items-center gap-3 lg:flex"
    >
      <span className="pointer-events-none translate-x-2 rounded-full bg-ivory px-4 py-2 text-xs font-semibold text-maroon opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-[0_18px_40px_-12px_rgba(31,85,66,0.7)] transition-transform duration-300 group-hover:scale-105">
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
    </a>
  );
}
