import { cn } from "@/lib/utils";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";
import { buttonBlack } from "./classes";

export function DestaquesSection() {
  return (
    <section className="bg-white">
      <LandingContainer className="flex flex-wrap gap-8 py-22">
        <div className="min-w-0 flex-[1_1_420px] rounded-[6px] border-2 border-black p-6 sm:p-10">
          <SectionHeading
            size="sm"
            eyebrow="Para quem tem um negócio na mesa"
            title="Precisa vender ou financiar e o papel não deixa?"
          />
          <p className="mt-4.5 text-neutral-600">
            Comprador interessado, banco pedindo matrícula atualizada, construção sem averbação.
            Fazemos o diagnóstico da documentação e organizamos um plano com etapas e prazos
            estimados, conversando com o corretor e com o cartório quando for preciso.
          </p>
          <a href="#contato" className={cn(buttonBlack, "mt-6.5 min-h-12 px-6 text-[15px] font-semibold")}>
            Quero um diagnóstico do imóvel
          </a>
        </div>

        <div className="min-w-0 flex-[1_1_420px] rounded-[6px] bg-sand p-6 sm:p-10">
          <SectionHeading
            size="sm"
            eyebrow="Transparência"
            title="Seu bairro está em programa público de regularização?"
          />
          <p className="mt-4.5 text-neutral-600">
            Alguns bairros de Caruaru e da região têm regularização fundiária de interesse
            social conduzida pela Prefeitura. Se o seu imóvel estiver incluído, nós vamos lhe
            dizer, porque nesse caso o procedimento público pode atender a sua necessidade sem
            contratação particular.
          </p>
        </div>
      </LandingContainer>
    </section>
  );
}
