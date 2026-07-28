import { Check } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { LandingImage } from "./LandingImage";

const DIFERENCIAIS = [
  "Equipe especializada em Direito Previdenciário",
  "Atendimento humanizado e personalizado",
  "Processo 100% digital, quando possível",
  "Clareza e transparência em cada etapa",
  "Atendimento para clientes de todo o Brasil",
];

/** Seção "Por que contar com o Moura & Galindo?" — fundo ameixa + imagem. */
export function PorQueSection() {
  return (
    <section className="bg-[#5e2a3f] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-medium text-white md:text-4xl">
            Por que contar com o Moura &amp; Galindo?
          </h2>
          <div className="mt-6 h-0.5 w-16 bg-gold" />

          <ul className="mt-10 space-y-4">
            {DIFERENCIAIS.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8b5c4]">
                  <Check className="h-4 w-4 text-[#5e2a3f]" strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-white/90 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <WhatsAppButton />
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <LandingImage
            aspectClassName="aspect-[4/5]"
            placeholderLabel="Foto 4"
          />
        </div>
      </div>
    </section>
  );
}
