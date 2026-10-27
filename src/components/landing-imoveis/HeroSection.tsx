import heroImage from "@/assets/regularizacao-imoveis/hero-escritorio.webp";
import { cn } from "@/lib/utils";
import { LandingContainer } from "./LandingContainer";
import { buttonGold, focusRing } from "./classes";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative -mt-20 overflow-hidden border-b-4 border-gold bg-black text-white md:-mt-24"
    >
      <img
        src={heroImage}
        alt="Ambientes do escritório Moura & Galindo em Caruaru"
        width={1122}
        height={1402}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/86 to-black/90 md:bg-linear-to-r md:from-black/92 md:via-black/84 md:via-45% md:to-black/50"
      />

      <LandingContainer className="relative flex min-h-[420px] flex-wrap items-center gap-12 pt-50 pb-32 md:pt-54">
        <div className="min-w-0 max-w-[660px] flex-[1_1_480px]">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
            Regularização de imóveis em Caruaru e no Agreste
          </p>
          <h1 className="font-playfair text-[clamp(34px,4.6vw,54px)] font-bold leading-[1.15] tracking-[-0.01em]">
            Seu imóvel ainda não está registrado em seu nome?
          </h1>
          <p className="mt-7 max-w-[600px] text-[19px] leading-[1.65] text-neutral-200">
            Contrato de gaveta, herança sem inventário, vendedor que não aparece mais, anos
            morando sem nenhum papel. Cada situação pede um caminho jurídico diferente. A gente
            examina seus documentos e explica qual pode ser o seu, em linguagem simples.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contato" className={cn(buttonGold, "min-h-[54px] px-7.5 text-[16px]")}>
              Solicitar análise da documentação
            </a>
            <a
              href="#situacoes"
              className={cn(
                "inline-flex min-h-[54px] items-center px-2 text-[16px] font-semibold text-white underline decoration-gold underline-offset-[6px] hover:text-gold-soft",
                focusRing
              )}
            >
              Ver as situações mais comuns
            </a>
          </div>

          <p className="mt-8 text-[14px] text-neutral-400">
            Atendimento presencial no escritório em Caruaru e por WhatsApp.
          </p>
        </div>
      </LandingContainer>
    </section>
  );
}
