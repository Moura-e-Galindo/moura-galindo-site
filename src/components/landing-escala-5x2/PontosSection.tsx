import { pontosEssenciais } from "@/data/escala-5x2";
import { SectionIntro } from "./SectionIntro";
import { containerClass, tomClasses } from "./classes";

export function PontosSection() {
  return (
    <section className="border-t border-trab-linha bg-white">
      <div className={containerClass}>
        <SectionIntro eyebrow="O essencial" title="Cinco pontos que decidem a adequação">
          São os aspectos que, na prática do escritório, mais produzem erro quando passam
          despercebidos.
        </SectionIntro>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {pontosEssenciais.map((ponto) => {
            const tom = tomClasses[ponto.tom];
            return (
              <article
                key={ponto.titulo}
                className={`min-w-0 rounded-[4px] border-t-4 px-5.5 pt-5.5 pb-5 ${tom.borda} ${tom.fundo} ${ponto.largo ? "md:col-span-2" : ""}`}
              >
                <span className={`mb-2.25 inline-block text-[10.5px] font-bold uppercase tracking-[0.14em] ${tom.texto}`}>
                  {ponto.rotulo}
                </span>
                <h3 className="mb-1.75 text-[17px] font-semibold leading-[1.35] text-neutral-900">
                  {ponto.titulo}
                </h3>
                <p className="text-[15.6px] leading-[1.62] text-neutral-600">{ponto.texto}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
