import { Baby, Users, Heart, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Situacao {
  icon: LucideIcon;
  text: string;
}

const SITUACOES: Situacao[] = [
  { icon: Baby, text: "Nascimento do filho" },
  { icon: Users, text: "Adoção ou guarda judicial para fins de adoção" },
  { icon: Heart, text: "Natimorto" },
  {
    icon: Stethoscope,
    text: "Aborto espontâneo ou nas hipóteses previstas em lei"
  }
];

/** Seção "Em quais situações o benefício pode ser concedido?". */
export function SituacoesSection() {
  return (
    <section className="bg-[#fbecef] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-serif text-2xl font-medium text-[#5e2a3f] md:text-4xl">
          Em quais situações o benefício pode ser concedido?
        </h2>
        <div className="gold-divider mx-auto mt-6" />
        <p className="mx-auto mt-8 max-w-2xl text-center text-[#5f3a48]">
          O Salário-Maternidade pode ser solicitado nos casos de:
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SITUACOES.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center gap-4 rounded-2xl border border-[#eccbd4] bg-white p-8 text-center shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c06a85]/10">
                <Icon className="h-6 w-6 text-[#c06a85]" strokeWidth={1.5} />
              </span>
              <p className="text-sm leading-relaxed text-[#5e2a3f]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
