import qrSite from "@/assets/rescisao-indireta/qr-site.png";
import { WHATSAPP_MENSAGEM } from "@/data/rescisao-indireta";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { containerClass, pillDark, sectionTitleClass } from "./classes";

export function ContatoSection() {
  return (
    <section id="contato" className="scroll-mt-28 border-t border-resc-linha bg-white">
      <div className={cn(containerClass, "py-22")}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <div className="flex min-w-0 flex-col gap-5 rounded-[28px] bg-gold p-7 text-resc-tinta sm:p-11">
            <h2 className={sectionTitleClass}>Ainda tem dúvidas? Fale com um especialista.</h2>
            <p className="max-w-[48ch] text-[17px] leading-[1.6]">
              As informações desta página têm caráter geral, e cada caso possui especificidades
              próprias. Em caso de dúvidas, entre em contato com o escritório.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={buildWhatsAppUrl(WHATSAPP_MENSAGEM)} target="_blank" rel="noopener noreferrer" className={pillDark}>
                <WhatsAppIcon className="text-gold" />
                Conversar pelo WhatsApp
              </a>
              <span className="flex flex-col gap-0.5">
                <span className="text-[12px] font-bold uppercase tracking-[0.12em]">WhatsApp</span>
                <span className="text-[20px] font-bold tabular-nums">{WHATSAPP_DISPLAY}</span>
              </span>
            </div>
          </div>

          <figure className="flex min-w-0 flex-col items-center gap-3">
            <img
              src={qrSite}
              alt="QR Code para acessar o site do escritório Moura & Galindo"
              width={240}
              height={240}
              loading="lazy"
              className="block h-auto w-60 max-w-full"
            />
            <figcaption className="max-w-[260px] text-center text-[14px] leading-[1.5] text-resc-texto">
              Aponte a câmera do celular para acessar o site do escritório.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
