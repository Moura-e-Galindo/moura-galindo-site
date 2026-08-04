import ctaImage from "@/assets/mae-bebe-por-do-sol.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { LandingImage } from "./LandingImage";

/** Chamada final para conversão, com imagem de apoio, antes do rodapé. */
export function CtaFinalSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <LandingImage
            src={ctaImage}
            alt="Mãe erguendo o bebê ao pôr do sol"
            aspectClassName="aspect-[4/3]"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-medium text-ink md:text-4xl">
            Não deixe de exercer um direito que pode ser seu.
          </h2>
          <div className="gold-divider mx-auto mt-6 md:mx-0" />
          <p className="mt-6 text-ink-soft">
            Nossa equipe está preparada para avaliar sua situação e orientar
            você sobre a melhor forma de solicitar o Salário-Maternidade.
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Fale conosco agora" />
          </div>

          <p className="mt-5 text-sm text-ink-soft">
            Clicando no botão verde para o WhatsApp, o atendimento é imediato.
          </p>
        </div>
      </div>
    </section>
  );
}
