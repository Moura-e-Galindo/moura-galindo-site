import { confusoes } from "@/data/regularizacao-imoveis";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";

export function ConfusoesSection() {
  return (
    <section className="bg-sand">
      <LandingContainer className="py-20">
        <SectionHeading size="md" title="Três confusões que costumam atrasar a regularização" />

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-8">
          {confusoes.map((confusao, index) => (
            <div key={confusao.title}>
              <p className="mb-2.5 font-playfair text-[40px] leading-none text-gold-ink">{index + 1}</p>
              <h3 className="mb-2 font-inter text-[18px] font-bold">{confusao.title}</h3>
              <p className="text-[16px] text-neutral-600">{confusao.description}</p>
            </div>
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}
