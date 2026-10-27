import { situacoes } from "@/data/regularizacao-imoveis";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";
import { ChevronMark } from "./icons";

export function SituacoesSection() {
  return (
    <section id="situacoes" className="bg-white">
      <LandingContainer className="pt-24 pb-22">
        <SectionHeading
          eyebrow="Isso acontece com você?"
          title="Situações que aparecem todos os dias aqui no Agreste"
          description="Muita gente mora há anos numa casa que considera sua e só descobre o problema quando precisa vender, financiar ou dividir a herança. Você não está sozinho nisso, e quase sempre há um caminho para organizar."
        />

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {situacoes.map((situacao) => (
            <article key={situacao.title} className="rounded-[6px] border border-sand-line bg-white p-7">
              <ChevronMark size={28} className="text-gold" />
              <h3 className="mt-3.5 mb-2 font-inter text-[18px] font-bold text-black">
                {situacao.title}
              </h3>
              <p className="text-[16px] text-neutral-600">{situacao.description}</p>
            </article>
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}
