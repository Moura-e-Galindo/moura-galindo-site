import whatsappLogo from "@/assets/rescisao-indireta/whatsapp.webp";
import { WHATSAPP_MENSAGEM } from "@/data/rescisao-indireta";
import { buildWhatsAppUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { focusRing } from "./classes";

export function WhatsAppFlutuante() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MENSAGEM)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      title="Conversar pelo WhatsApp"
      className={cn(
        "fixed right-[calc(22px+env(safe-area-inset-right,0px))] bottom-[calc(22px+env(safe-area-inset-bottom,0px))] z-60 block size-16 drop-shadow-[0_8px_16px_rgba(17,17,16,0.28)] transition-transform hover:-translate-y-px motion-reduce:transition-none",
        focusRing
      )}
    >
      <img src={whatsappLogo} alt="" width={64} height={64} className="block size-16 object-contain" />
    </a>
  );
}
