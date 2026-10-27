import equipeImage from "@/assets/regularizacao-imoveis/equipe-reuniao.webp";
import { advogados, escritorio } from "@/data/regularizacao-imoveis";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";

export function QuemAtendeSection() {
  const { endereco } = escritorio;

  return (
    <section className="bg-sand">
      <LandingContainer className="flex flex-wrap items-center gap-12 py-22">
        <img
          src={equipeImage}
          alt="Advogados do Moura & Galindo reunidos à mesa de reuniões do escritório, em Caruaru"
          width={1200}
          height={1600}
          loading="lazy"
          className="block aspect-[4/5] w-full min-w-0 max-w-[440px] flex-[1_1_320px] rounded-[6px] object-cover object-[center_62%]"
        />

        <div className="min-w-0 flex-[999_1_420px]">
          <SectionHeading
            size="md"
            eyebrow="Quem atende"
            title={escritorio.nome}
            description="Escritório de Caruaru com Núcleo de Direito Imobiliário dedicado a regularização, locação e contratos de compra de imóveis. Conhecemos a rotina dos cartórios e da Prefeitura da região, e atendemos presencialmente no nosso escritório no Bairro Universitário, em Caruaru."
          />

          <div className="mt-7 flex flex-wrap gap-8">
            {advogados.map((advogado) => (
              <div key={advogado.oab}>
                <p className="font-playfair text-[19px] font-bold">{advogado.nome}</p>
                <p className="mt-0.5 text-[15px] text-neutral-600">{advogado.oab}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[15px] text-neutral-600">
            {endereco.logradouro}, {endereco.bairro}, {endereco.cidade}, {endereco.uf},
            CEP {endereco.cep}
          </p>
        </div>
      </LandingContainer>
    </section>
  );
}
