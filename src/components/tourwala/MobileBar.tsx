import { Phone } from "lucide-react";
import { BRAND, whatsappLink } from "@/lib/tourwala-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileBar() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-maroon/10 bg-ivory px-3 pt-2 lg:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={`tel:${BRAND.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-maroon py-3.5 text-sm font-semibold text-ivory"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call now
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-forest py-3.5 text-sm font-semibold text-ivory"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
