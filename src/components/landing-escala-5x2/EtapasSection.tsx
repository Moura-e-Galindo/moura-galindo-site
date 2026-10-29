import { etapasProjeto } from "@/data/escala-5x2";
import { SectionIntro } from "./SectionIntro";
import { containerClass, tomClasses } from "./classes";

export function EtapasSection() {
  return (
    <section className="border-t border-trab-linha">
      <div className={containerClass}>
        <SectionIntro eyebrow="Como o Núcleo conduz" title="A adequação tratada como projeto">
          Tem prazo definido, envolve várias áreas e produz entregáveis verificáveis. As etapas
          abaixo descrevem a forma de condução adotada.
        </SectionIntro>

        <ol className="mt-6.5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {etapasProjeto.map((etapa, indice) => (
            <li key={etapa.titulo} className="min-w-0 rounded-[4px] border border-trab-linha bg-white px-4.5 py-5">
              <span
                className={`mb-3 inline-flex size-8.5 items-center justify-center rounded-full text-[13px] font-bold text-white ${tomClasses[etapa.tom].solido}`}
              >
                {String(indice + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-1.75 text-[17px] font-semibold leading-[1.35] text-neutral-900">
                {etapa.titulo}
              </h3>
              <p className="text-[14.3px] leading-[1.55] text-neutral-600">{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
