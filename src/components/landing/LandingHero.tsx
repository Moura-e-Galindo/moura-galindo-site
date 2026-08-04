import logoLightFull from "@/assets/footer-light-full.png";
import heroImage from "@/assets/mae-erguendo-bebe.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { LandingImage } from "./LandingImage";

/**
 * Topo da landing page: logo do escritório, título e primeiro CTA à
 * esquerda; imagem (mãe e bebê) à direita. Fundo em tom rosé suave.
 */
export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-blush-soft to-rosewater">
      {/* Brilhos decorativos */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blush/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 pt-8 pb-16 md:grid-cols-2 md:items-center md:pt-10 md:pb-24">
        <div className="text-center md:text-left">
          <img
            src={logoLightFull}
            alt="Moura & Galindo Advogados Associados"
            width={288}
            height={96}
            className="mx-auto h-auto w-60 object-contain md:mx-0 md:w-72"
          />

          <div className="gold-divider mx-auto mt-8 mb-6 md:mx-0" />

          <h1 className="font-serif text-3xl font-medium leading-tight text-ink md:text-5xl">
            Salário-Maternidade:{" "}
            <span className="text-rose">descubra se você tem direito</span>{" "}
            ao benefício do INSS
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft md:mx-0 md:text-lg">
            Nossa equipe pode analisar seu caso e orientar você sobre o
            recebimento do Salário-Maternidade, com atendimento rápido e
            especializado.
          </p>

          <div className="mt-8">
            <WhatsAppButton />
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <LandingImage
            src={heroImage}
            alt="Mãe erguendo o bebê com alegria"
            aspectClassName="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}
