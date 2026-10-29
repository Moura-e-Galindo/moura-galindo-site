import { useRef, useState, type KeyboardEvent } from "react";
import { perfisDuvidas, type Pergunta, type Tom } from "@/data/escala-5x2";
import { SectionIntro } from "./SectionIntro";
import { containerClass, focusRing, tomClasses } from "./classes";

function PerguntaItem({ item, tom, aberta }: { item: Pergunta; tom: Tom; aberta: boolean }) {
  const cores = tomClasses[tom];

  return (
    <details open={aberta} className={`group rounded-[3px] border border-l-4 border-trab-linha bg-white ${cores.borda}`}>
      <summary
        className={`relative cursor-pointer list-none py-4.25 pr-12 pl-5 text-[16.8px] font-semibold leading-[1.4] text-neutral-900 [&::-webkit-details-marker]:hidden ${focusRing}`}
      >
        {item.pergunta}
        <span
          aria-hidden="true"
          className={`absolute top-6 right-5 size-2.75 rotate-45 border-r-2 border-b-2 transition-transform group-open:top-7 group-open:-rotate-135 ${cores.borda}`}
        />
      </summary>
      <div className="px-5 pb-4.5">
        {item.respostas.map((resposta) => (
          <p key={resposta} className="mb-2.75 text-[15.6px] leading-[1.62] text-neutral-600">
            {resposta}
          </p>
        ))}
        <p className="border-t border-trab-linha pt-2.75 text-[12px] leading-normal text-neutral-500">
          {item.base}
        </p>
      </div>
    </details>
  );
}

export function DuvidasSection() {
  const [ativo, setAtivo] = useState(0);
  const abasRef = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, indice: number) {
    const passo = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!passo) return;
    event.preventDefault();
    const proximo = (indice + passo + perfisDuvidas.length) % perfisDuvidas.length;
    setAtivo(proximo);
    abasRef.current[proximo]?.focus();
  }

  return (
    <section id="duvidas" className="scroll-mt-24 border-t border-trab-linha">
      <div className={containerClass}>
        <SectionIntro eyebrow="Orientações" title="Dúvidas frequentes por perfil profissional">
          A mesma mudança chega de forma diferente a cada função. Selecione o perfil e abra as
          perguntas. Cada resposta traz a base normativa que a sustenta.
        </SectionIntro>

        <div role="tablist" aria-label="Perfis" className="mt-6.5 mb-5 flex flex-wrap gap-2">
          {perfisDuvidas.map((perfil, indice) => {
            const selecionado = indice === ativo;
            return (
              <button
                key={perfil.id}
                ref={(elemento) => {
                  abasRef.current[indice] = elemento;
                }}
                id={`aba-${perfil.id}`}
                type="button"
                role="tab"
                aria-selected={selecionado}
                aria-controls={`painel-${perfil.id}`}
                tabIndex={selecionado ? 0 : -1}
                onClick={() => setAtivo(indice)}
                onKeyDown={(event) => handleKeyDown(event, indice)}
                className={`cursor-pointer rounded-[3px] border px-4.5 py-2.75 text-[14px] font-semibold transition-colors ${focusRing} ${
                  selecionado
                    ? "border-black bg-black text-trab-papel"
                    : "border-trab-linha bg-white text-neutral-600 hover:border-gold"
                }`}
              >
                {perfil.rotulo}
              </button>
            );
          })}
        </div>

        {perfisDuvidas.map((perfil, indice) => (
          <div
            key={perfil.id}
            id={`painel-${perfil.id}`}
            role="tabpanel"
            aria-labelledby={`aba-${perfil.id}`}
            hidden={indice !== ativo}
            className="grid gap-2.5"
          >
            {perfil.perguntas.map((item, posicao) => (
              <PerguntaItem key={item.pergunta} item={item} tom={perfil.tom} aberta={posicao === 0} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
