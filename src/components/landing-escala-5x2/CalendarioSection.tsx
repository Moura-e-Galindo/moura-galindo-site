import { calendario } from "@/data/escala-5x2";
import { SectionIntro } from "./SectionIntro";
import { containerClass, notaClass, sectionClass } from "./classes";

/** Linha do tempo das duas etapas da transição. */
export function CalendarioSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionIntro rotulo="Os prazos" title="O calendário da transição">
          A redução da jornada e a ampliação do repouso acontecem em duas etapas, com datas
          fixadas na própria Emenda.
        </SectionIntro>

        <div className="relative mt-10.5 min-[681px]:before:absolute min-[681px]:before:top-8.5 min-[681px]:before:right-[8%] min-[681px]:before:left-[8%] min-[681px]:before:h-0.5 min-[681px]:before:bg-linear-to-r min-[681px]:before:from-trab-linha min-[681px]:before:via-gold min-[681px]:before:to-trab-ouro-escuro min-[681px]:before:content-['']">
          <ol className="relative grid gap-4.5 min-[681px]:grid-cols-3">
            {calendario.map((marco) => (
              <li key={marco.periodo} className="px-2.5 text-center">
                <div
                  className={`relative z-[2] mx-auto mt-6 mb-5.5 size-5.5 rotate-45 border-3 border-gold ${
                    marco.atual ? "bg-gold shadow-[0_0_0_7px_var(--color-trab-ouro-veu)]" : "bg-white"
                  }`}
                />
                <div className="mb-2 text-[12px] font-bold uppercase tracking-[0.12em] text-trab-ouro-escuro">
                  {marco.periodo}
                </div>
                <div
                  className={`mb-2.5 font-playfair text-[clamp(40px,6vw,62px)] font-bold leading-none ${
                    marco.atual ? "text-trab-ouro-escuro" : ""
                  }`}
                >
                  {marco.horas}
                </div>
                <p className="mx-auto max-w-[30ch] text-[14.5px] text-trab-cinza">{marco.descricao}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className={`${notaClass} mt-8.5 max-w-[88ch]`}>
          A aplicação dessas etapas vem sendo detalhada por decreto e por portarias do Ministério
          do Trabalho e Emprego, além de decisões do Supremo Tribunal Federal ainda em curso. As
          orientações desta página consideram as normas em vigor na data de referência indicada no
          rodapé.
        </p>
      </div>
    </section>
  );
}
