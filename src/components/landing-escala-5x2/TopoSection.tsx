import simboloNegativo from "@/assets/escala-5x2/simbolo-negativo.webp";
import { destaques } from "@/data/escala-5x2";
import {
  botoesClass,
  buttonContorno,
  buttonOuro,
  containerClass,
  ledeEscuroClass,
  rotuloClaroClass
} from "./classes";

/** Herói escuro com título, chamadas e a faixa de destaques da transição. */
export function TopoSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-19.5 text-white">
      <img
        src={simboloNegativo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-22.5 hidden size-140 object-contain opacity-[0.055] min-[681px]:block"
      />
      <div className={`${containerClass} relative z-[2]`}>
        <div className="mb-5.5 h-1.25 w-24 rounded-[3px] bg-gold" />
        <p className={rotuloClaroClass}>Emenda Constitucional nº 141/2026</p>
        <h1 className="mb-4.5 font-playfair text-[clamp(32px,5vw,58px)] font-bold leading-[1.08] tracking-[-0.015em] text-white">
          Escala 5x2: o que muda na jornada, no quadro de pessoal e no{" "}
          <em className="not-italic text-gold">custo da folha</em>.
        </h1>
        <p className={`${ledeEscuroClass} max-w-[60ch] text-trab-pedra-clara`}>
          Dois repousos semanais remunerados e teto de 42 horas a partir de 16 de dezembro de
          2026. Esta página reúne orientações básicas sobre o calendário da transição e os pontos
          que a empresa precisa decidir para se adequar.
        </p>
        <div className={botoesClass}>
          <a href="#duvidas" className={buttonOuro}>Ver as dúvidas frequentes</a>
          <a href="#contato" className={buttonContorno}>Onde estamos</a>
        </div>

        <div className="mt-14 grid border-t border-trab-linha-escura min-[681px]:grid-cols-3">
          {destaques.map((destaque) => (
            <div
              key={destaque.legenda}
              className="border-b border-trab-linha-escura px-3.5 pt-7 pb-8.5 min-[681px]:border-r min-[681px]:border-b-0 min-[681px]:last:border-r-0"
            >
              <div className="font-playfair text-[clamp(28px,4vw,42px)] font-bold leading-none text-gold">
                {destaque.valor}
              </div>
              <div className="mt-2 text-[12.5px] uppercase tracking-[0.1em] text-trab-fumo">
                {destaque.legenda}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
