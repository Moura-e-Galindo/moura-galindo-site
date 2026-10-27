import { documentos } from "@/data/regularizacao-imoveis";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";
import { CheckMark } from "./icons";

export function DocumentosSection() {
  return (
    <section className="bg-sand">
      <LandingContainer className="flex flex-wrap items-start gap-12 py-22">
        <SectionHeading
          size="md"
          className="min-w-0 flex-[1_1_360px]"
          eyebrow="Antes da primeira conversa"
          title="O que vale a pena separar"
          description="Não precisa ter tudo. Traga o que encontrar, porque a posse se comprova de muitas formas e cada papel ajuda a contar a história do imóvel."
        />

        <ul className="grid min-w-0 flex-[1_1_460px] grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-3.5">
          {documentos.map((documento) => (
            <li key={documento} className="flex items-start gap-3 rounded-[6px] bg-white px-5 py-4.5">
              <CheckMark size={22} className="mt-0.5 flex-none text-gold-ink" />
              <span>{documento}</span>
            </li>
          ))}
        </ul>
      </LandingContainer>
    </section>
  );
}
