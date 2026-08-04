import { Check } from "lucide-react";
import quemPodeImage from "@/assets/bebe-lendo.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { LandingImage } from "./LandingImage";

const SEGURADAS = [
  "Trabalhadoras com carteira assinada",
  "Empregadas domésticas",
  "Microempreendedoras Individuais (MEI)",
  "Contribuintes individuais e facultativas",
  "Trabalhadoras rurais",
  "Mulheres no período de graça, desde que preencham os requisitos legais"
];

/** Seção "Quem pode solicitar o Salário-Maternidade?" — imagem + lista. */
export function QuemPodeSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <LandingImage
            src={quemPodeImage}
            alt="Mãe e bebê olhando um livro juntos"
            aspectClassName="aspect-square"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-serif text-2xl font-medium text-ink md:text-4xl">
            Quem pode solicitar o Salário-Maternidade?
          </h2>
          <div className="gold-divider mt-6" />
          <p className="mt-6 text-ink-soft">
            O benefício pode ser devido às seguradas do INSS, como:
          </p>

          <ul className="mt-8 space-y-3">
            {SEGURADAS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/15">
                  <Check className="h-4 w-4 text-rose" strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
