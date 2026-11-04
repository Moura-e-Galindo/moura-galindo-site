import { WHATSAPP_MENSAGEM } from "@/data/rescisao-indireta";
import { buildWhatsAppUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { MonogramaArt } from "./MonogramaArt";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { containerClass, pillDark, pillOutline } from "./classes";

export function HeroSection() {
  return (
    <section id="topo" className="bg-white">
      <div className={cn(containerClass, "pt-16 pb-10")}>
        <div className="grid grid-cols-1 gap-y-5 [grid-template-areas:'head'_'art'_'rest'] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-x-12 md:gap-y-6 md:[grid-template-areas:'head_art'_'rest_art']">
          <div className="flex min-w-0 flex-col gap-4.5 [grid-area:head] md:self-end">
            <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-resc-petroleo">
              <span aria-hidden="true" className="inline-block h-[3px] w-7 bg-gold" />
              Direito do Trabalho · Conteúdo informativo
            </p>
            <h1 className="font-playfair text-[44px] font-extrabold leading-[0.98] tracking-[-0.015em] text-balance sm:text-[52px] md:text-[84px]">
              Rescisão indireta
            </h1>
            <p className="font-playfair text-[26px] italic leading-[1.3]">
              Principais pontos sobre rescisão indireta
            </p>
          </div>

          <div aria-hidden="true" className="min-w-0 [grid-area:art]">
            <MonogramaArt />
          </div>

          <div className="flex min-w-0 flex-col gap-5.5 [grid-area:rest] md:self-start">
            <p className="max-w-[52ch] text-[17px] leading-[1.65] text-resc-texto">
              O que diz o art. 483 da CLT, o que costuma ser examinado em juízo e o que o Tribunal
              Superior do Trabalho já fixou em teses vinculantes. Informações úteis para empregados
              e empregadores.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={buildWhatsAppUrl(WHATSAPP_MENSAGEM)} target="_blank" rel="noopener noreferrer" className={pillDark}>
                <WhatsAppIcon className="text-gold" />
                Tirar dúvidas pelo WhatsApp
              </a>
              <a href="#perguntas" className={pillOutline}>
                Ver perguntas frequentes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
