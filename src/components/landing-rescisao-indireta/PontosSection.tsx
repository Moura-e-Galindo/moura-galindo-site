import { pontosPrincipais } from "@/data/rescisao-indireta";
import { cn } from "@/lib/utils";
import { PlusIcon } from "./PlusIcon";
import { containerClass, focusRing, summaryReset } from "./classes";

export function PontosSection() {
  return (
    <section id="pontos" aria-label="Principais pontos" className="scroll-mt-28 bg-white">
      <div className={cn(containerClass, "pt-6 pb-20")}>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pontosPrincipais.map((ponto) => (
            <details key={ponto.rotulo} className="group rounded-[20px] bg-gold text-resc-tinta">
              <summary className={cn(summaryReset, "flex flex-col gap-3.5 p-6 sm:min-h-42", focusRing)}>
                <span className="flex items-center justify-between">
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em]">{ponto.rotulo}</span>
                  <PlusIcon size={22} strokeWidth={2.2} />
                </span>
                <span className="font-playfair text-[24px] font-bold leading-[1.2]">{ponto.titulo}</span>
              </summary>
              <p className="px-6 pb-6 text-[14.5px] leading-[1.6]">{ponto.texto}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
