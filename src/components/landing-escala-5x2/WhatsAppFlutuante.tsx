import iconeWhatsApp from "@/assets/escala-5x2/whatsapp.webp";
import { WHATSAPP_MENSAGEM } from "@/data/escala-5x2";
import { buildWhatsAppUrl } from "@/lib/contact";
import { focusRing } from "./classes";

export function WhatsAppFlutuante() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MENSAGEM)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o escritório no WhatsApp"
      className={`group fixed right-4 bottom-4 z-[90] flex items-center gap-3 no-underline min-[641px]:right-5.5 min-[641px]:bottom-5.5 ${focusRing}`}
    >
      <span className="hidden translate-x-2.5 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[13.5px] font-bold text-trab-tinta opacity-0 shadow-[0_6px_22px_rgba(0,0,0,0.18)] transition-all duration-220 group-hover:translate-x-0 group-hover:opacity-100 min-[641px]:inline-block">
        Fale com o Núcleo Trabalhista
      </span>
      <span className="size-15 flex-none overflow-hidden rounded-full shadow-[0_8px_26px_rgba(37,211,102,0.42)] transition-transform duration-220 group-hover:scale-106">
        <img src={iconeWhatsApp} alt="" width={160} height={160} className="size-full object-cover" />
      </span>
    </a>
  );
}
