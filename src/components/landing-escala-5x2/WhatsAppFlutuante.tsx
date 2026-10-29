import { WhatsAppGlyph } from "@/components/landing-imoveis/icons";
import { WHATSAPP_MENSAGEM } from "@/data/escala-5x2";
import { buildWhatsAppUrl } from "@/lib/contact";
import { focusRing } from "./classes";

export function WhatsAppFlutuante() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MENSAGEM)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tirar dúvidas sobre a escala 5x2 pelo WhatsApp"
      className={`fixed right-4.5 bottom-4.5 z-30 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_26px_rgba(0,0,0,0.32)] transition-colors hover:bg-whatsapp-deep sm:size-15.5 ${focusRing}`}
    >
      <WhatsAppGlyph size={30} />
    </a>
  );
}
