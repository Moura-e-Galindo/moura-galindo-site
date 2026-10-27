import { etapas } from "@/data/regularizacao-imoveis";
import { cn } from "@/lib/utils";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";
import { ChevronMarkLarge } from "./icons";

export function EtapasSection() {
  return (
    <section className="bg-black text-white">
      <LandingContainer className="py-24">
        <SectionHeading
          tone="dark"
          eyebrow="Como examinamos o seu caso"
          title="Um passo de cada vez, com você informado"
        />

        <ol className="mt-13 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))]">
          {etapas.map((etapa, index) => {
            const isLast = index === etapas.length - 1;

            return (
              <li key={etapa.title} className={cn("pb-8", !isLast && "pr-7")}>
                <div className="flex items-center gap-3">
                  <span className="font-playfair text-[44px] leading-none text-gold">{index + 1}</span>
                  {!isLast && <ChevronMarkLarge size={40} className="text-gold" />}
                </div>
                <h3 className="mt-4.5 mb-2 font-inter text-[18px] font-bold">{etapa.title}</h3>
                <p className="text-[16px] text-neutral-300">{etapa.description}</p>
              </li>
            );
          })}
        </ol>
      </LandingContainer>
    </section>
  );
}
