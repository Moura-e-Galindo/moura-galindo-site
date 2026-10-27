import { BASE_LEGAL, procedimentos } from "@/data/regularizacao-imoveis";
import { cn } from "@/lib/utils";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";

export function CaminhosSection() {
  return (
    <section className="bg-white">
      <LandingContainer className="py-24">
        <SectionHeading
          eyebrow="Caminhos possíveis"
          title="Não existe uma solução única. Existe a solução adequada ao seu caso."
          description="Estes são os procedimentos mais usados. Qual deles cabe no seu caso só é possível dizer depois de examinar os documentos e a história do imóvel."
        />

        <div className="mt-11 overflow-x-auto rounded-[6px] border border-sand-line">
          <table className="w-full min-w-[680px] border-collapse text-[16px]">
            <thead>
              <tr className="bg-black text-left text-white">
                <th scope="col" className="w-[30%] px-6 py-4.5 font-semibold">
                  Procedimento
                </th>
                <th scope="col" className="px-6 py-4.5 font-semibold">
                  Quando costuma ser indicado
                </th>
              </tr>
            </thead>
            <tbody>
              {procedimentos.map((procedimento, index) => (
                <tr
                  key={procedimento.nome}
                  className={cn("border-t border-sand-line", index % 2 === 1 && "bg-sand-soft")}
                >
                  <th scope="row" className="px-6 py-5.5 text-left align-top font-bold">
                    {procedimento.nome}
                  </th>
                  <td className="px-6 py-5.5 text-neutral-700">{procedimento.indicacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4.5 text-[14px] text-neutral-600">{BASE_LEGAL}</p>
      </LandingContainer>
    </section>
  );
}
