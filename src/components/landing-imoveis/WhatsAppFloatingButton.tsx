import { buildWhatsAppUrl } from "@/lib/contact";
import { WHATSAPP_LANDING_MESSAGE } from "@/data/regularizacao-imoveis";
import { cn } from "@/lib/utils";
import { WhatsAppGlyph } from "./icons";
import { focusRing } from "./classes";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_LANDING_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o escritório pelo WhatsApp"
      className={cn(
        "fixed right-4 bottom-4 z-50 flex size-15 items-center justify-center gap-2.5 rounded-full bg-whatsapp text-[15px] font-bold text-white no-underline shadow-[0_6px_20px_rgba(0,0,0,0.28)] transition-colors hover:bg-whatsapp-deep hover:text-white",
        "md:right-6 md:bottom-6 md:h-15 md:w-auto md:pr-5.5 md:pl-4.5",
        focusRing
      )}
    >
      <WhatsAppGlyph size={26} />
      <span className="hidden md:inline">Fale pelo WhatsApp</span>
    </a>
  );
}
