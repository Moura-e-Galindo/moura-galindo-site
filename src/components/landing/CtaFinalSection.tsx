import { WhatsAppButton } from "./WhatsAppButton";
import { LandingImage } from "./LandingImage";

/** Chamada final para conversão, com imagem de apoio, antes do rodapé. */
export function CtaFinalSection() {
  return (
    <section className="bg-[#fdf7f4] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <LandingImage
            aspectClassName="aspect-[4/3]"
            placeholderLabel="Foto 5"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-medium text-[#5e2a3f] md:text-4xl">
            Não deixe de exercer um direito que pode ser seu.
          </h2>
          <div className="gold-divider mx-auto mt-6 md:mx-0" />
          <p className="mt-6 text-[#7a5560]">
            Nossa equipe está preparada para avaliar sua situação e orientar
            você sobre a melhor forma de solicitar o Salário-Maternidade.
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Fale conosco agora" />
          </div>

          <p className="mt-5 text-sm text-[#9a7680]">
            Clicando no botão verde para o WhatsApp, o atendimento é imediato.
          </p>
        </div>
      </div>
    </section>
  );
}
