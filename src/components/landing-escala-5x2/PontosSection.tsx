import simbolo from "@/assets/escala-5x2/simbolo.webp";
import { pontosEssenciais } from "@/data/escala-5x2";
import { SectionIntro } from "./SectionIntro";
import { containerClass, h3Class, sectionClass } from "./classes";

export function PontosSection() {
  return (
    <section className={`${sectionClass} bg-trab-creme`}>
      <div className={containerClass}>
        <SectionIntro rotulo="O essencial" title="Cinco pontos que decidem a adequação">
          Antes de qualquer ajuste na folha, são estes os pontos que definem como a sua empresa
          chega a 16 de dezembro.
        </SectionIntro>

        <div className="mt-8.5 grid gap-4.5 min-[681px]:grid-cols-2 min-[981px]:grid-cols-3">
          {pontosEssenciais.map((ponto, indice) => (
            <article
              key={ponto.titulo}
              className="relative overflow-hidden rounded-[22px] rounded-tl-[52px] border border-trab-linha bg-white px-6.5 pt-7 pb-6.5 transition-all duration-180 hover:border-gold hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <img
                src={simbolo}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-10.5 -bottom-10.5 size-37.5 object-contain opacity-[0.045]"
              />
              <div className="mb-3 font-playfair text-[15px] font-bold tracking-[0.06em] text-gold after:mt-2.5 after:block after:h-0.5 after:w-8.5 after:bg-gold after:content-['']">
                {String(indice + 1).padStart(2, "0")}
              </div>
              <h3 className={h3Class}>{ponto.titulo}</h3>
              <p className="text-[14.8px] text-trab-cinza">{ponto.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
