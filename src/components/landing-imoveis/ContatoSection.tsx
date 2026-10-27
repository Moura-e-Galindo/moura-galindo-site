import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/contact";
import { WHATSAPP_LANDING_MESSAGE } from "@/data/regularizacao-imoveis";
import { cn } from "@/lib/utils";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";
import { ContatoForm } from "./ContatoForm";
import { ChatBubble } from "./icons";
import { focusRing } from "./classes";

function DecorativeChevrons() {
  return (
    <svg
      viewBox="0 0 600 700"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
      className="absolute top-0 -left-65 hidden h-full w-130 opacity-90 md:block"
    >
      <polyline points="80,-40 430,350 80,740" fill="none" className="stroke-gold" strokeWidth="60" strokeLinejoin="round" />
      <polyline points="-60,-40 290,350 -60,740" fill="none" className="stroke-neutral-800" strokeWidth="60" strokeLinejoin="round" />
    </svg>
  );
}

export function ContatoSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-black text-white">
      <DecorativeChevrons />

      <LandingContainer className="relative flex flex-wrap gap-14 py-24">
        <div className="min-w-0 flex-[1_1_340px] pl-[clamp(0px,8vw,120px)]">
          <SectionHeading
            tone="dark"
            eyebrow="Fale com o escritório"
            title="Conte em poucas linhas a situação do seu imóvel"
            description="Respondemos em horário comercial e combinamos o melhor momento para a análise da documentação. Se preferir, fale direto pelo WhatsApp."
          />

          <a
            href={buildWhatsAppUrl(WHATSAPP_LANDING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-7 inline-flex min-h-13 items-center gap-2.5 rounded-[4px] border-2 border-gold px-6 font-semibold text-white no-underline transition-colors hover:bg-gold hover:text-black",
              focusRing
            )}
          >
            <ChatBubble size={20} className="text-current" />
            WhatsApp {WHATSAPP_DISPLAY}
          </a>

          <p className="mt-7 max-w-[420px] text-[14px] text-neutral-400">
            Por segurança, não envie CPF, matrícula ou cópias de documentos por esta página.
            Depois do primeiro contato indicamos um canal seguro para isso.
          </p>
        </div>

        <div className="min-w-0 flex-[1_1_420px] rounded-[6px] bg-white p-6 text-neutral-900 sm:p-9">
          <ContatoForm />
        </div>
      </LandingContainer>
    </section>
  );
}
