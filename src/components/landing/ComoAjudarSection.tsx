import { WhatsAppButton } from "./WhatsAppButton";
import { LandingImage } from "./LandingImage";

interface Etapa {
  titulo: string;
  descricao: string;
}

const ETAPAS: Etapa[] = [
  {
    titulo: "Atendimento inicial",
    descricao: "Você entra em contato conosco pelo WhatsApp.",
  },
  {
    titulo: "Análise do caso",
    descricao:
      "Verificamos sua situação e orientamos sobre a documentação necessária.",
  },
  {
    titulo: "Acompanhamento completo",
    descricao:
      "Nossa equipe cuida do procedimento administrativo ou judicial, quando necessário.",
  },
  {
    titulo: "Mais tranquilidade para você",
    descricao: "Você recebe suporte durante todo o processo.",
  },
];

/** Seção "Como podemos ajudar?" — etapas numeradas ao lado de uma imagem. */
export function ComoAjudarSection() {
  return (
    <section className="bg-[#fdf7f4] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-2xl font-medium text-[#5e2a3f] md:text-4xl">
          Como podemos ajudar?
        </h2>
        <div className="gold-divider mx-auto mt-6" />

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <div className="md:sticky md:top-12">
            <LandingImage
              aspectClassName="aspect-[4/5]"
              placeholderLabel="Foto 3"
            />
          </div>

          <ol className="space-y-5">
            {ETAPAS.map((etapa, index) => (
              <li
                key={etapa.titulo}
                className="flex items-start gap-5 rounded-2xl border border-[#eccbd4] bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c06a85] font-serif text-lg font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#5e2a3f]">
                    {etapa.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#7a5560]">
                    {etapa.descricao}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
