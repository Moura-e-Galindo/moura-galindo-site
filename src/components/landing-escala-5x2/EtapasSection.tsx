import { etapasMetodo } from "@/data/escala-5x2";
import { SectionIntro } from "./SectionIntro";
import { containerClass, h3Class, sectionClass } from "./classes";

/** Método do Núcleo em quatro etapas numeradas. */
export function EtapasSection() {
  return (
    <section className={`${sectionClass} bg-trab-creme`}>
      <div className={containerClass}>
        <SectionIntro rotulo="Método" title="Como o Núcleo conduz a adequação" />

        <ol className="mt-8.5 grid gap-4 min-[681px]:grid-cols-2 min-[981px]:grid-cols-4">
          {etapasMetodo.map((etapa, indice) => (
            <li
              key={etapa.titulo}
              className="rounded-[22px] rounded-tl-[40px] border border-trab-linha bg-white px-5.5 py-6.5"
            >
              <div className="mb-5 flex size-10 rotate-45 items-center justify-center rounded-md bg-gold font-black text-black">
                <span className="-rotate-45">{indice + 1}</span>
              </div>
              <h3 className={h3Class}>{etapa.titulo}</h3>
              <p className="text-[14.3px] text-trab-cinza">{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
