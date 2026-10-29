import { calendario } from "@/data/escala-5x2";
import { buttonGold, buttonOutline, eyebrowClass } from "./classes";

export function TopoSection() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-4 py-[clamp(40px,6vw,72px)] sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-11.5">
        <div>
          <span className={eyebrowClass}>Emenda Constitucional nº 141/2026</span>
          <h1 className="mb-4.5 font-spectral text-[clamp(30px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.012em] text-balance text-neutral-900">
            <span className="text-trab-ouro-texto">Escala 5x2</span>: o que muda na jornada, no
            quadro de pessoal e no custo da folha.
          </h1>
          <p className="max-w-[52ch] font-spectral text-[20.5px] leading-normal text-neutral-600">
            Dois repousos semanais remunerados e teto de 42 horas a partir de 16 de dezembro de
            2026. Quarenta horas um ano depois. Esta página reúne o essencial da transição e as
            dúvidas que mais chegam ao escritório.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.75">
            <a href="#duvidas" className={buttonGold}>Ver as dúvidas frequentes</a>
            <a href="#contato" className={buttonOutline}>Onde estamos</a>
          </div>
        </div>

        <div className="rounded-[4px] bg-black px-6.5 py-7 text-white">
          <p className="mb-4.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            O calendário da transição
          </p>
          {calendario.map((etapa, indice) => (
            <div
              key={etapa.horas}
              className={`flex items-baseline gap-4 py-3.5 ${indice === 0 ? "pt-0" : "border-t border-neutral-800"}`}
            >
              <span
                className={`min-w-[78px] font-spectral text-[34px] font-semibold leading-none tabular-nums ${
                  etapa.destaque ? "text-gold" : "text-neutral-400"
                }`}
              >
                {etapa.horas}
              </span>
              <span className="min-w-0 text-[13.5px] leading-normal text-neutral-400">
                <b className="mb-0.75 block text-[12.5px] font-semibold tracking-[0.02em] text-white tabular-nums">
                  {etapa.periodo}
                </b>
                {etapa.descricao}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
