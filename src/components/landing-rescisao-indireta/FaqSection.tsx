import { FAQ_PRIMEIRA_COLUNA, faqs, type Faq } from "@/data/rescisao-indireta";
import { cn } from "@/lib/utils";
import { PlusIcon } from "./PlusIcon";
import { SectionHeading } from "./SectionHeading";
import { containerClass, focusRing, summaryReset } from "./classes";

function FaqItem({ faq }: { faq: Faq }) {
  return (
    <details className="group rounded-[14px] border border-resc-faq-linha bg-white transition-colors hover:border-resc-tinta open:border-gold open:bg-resc-creme motion-reduce:transition-none">
      <summary className={cn(summaryReset, "flex min-h-15.5 items-center gap-4 px-5.5 py-4.5", focusRing)}>
        <span className="flex-1 text-[16px] font-semibold leading-[1.4]">{faq.question}</span>
        <PlusIcon />
      </summary>
      <p className="px-5.5 pb-5 text-[15px] leading-[1.65] text-resc-texto">{faq.answer}</p>
    </details>
  );
}

export function FaqSection() {
  const colunas = [faqs.slice(0, FAQ_PRIMEIRA_COLUNA), faqs.slice(FAQ_PRIMEIRA_COLUNA)];

  return (
    <section id="perguntas" className="scroll-mt-28 border-t border-resc-linha bg-white">
      <div className={cn(containerClass, "py-22")}>
        <SectionHeading
          className="mb-8"
          eyebrow="Perguntas e respostas"
          title="Dúvidas frequentes"
          description="Para empregados, empresas e profissionais de recursos humanos."
        />

        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          {colunas.map((coluna, index) => (
            <div key={index} className="flex min-w-0 flex-col gap-3">
              {coluna.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
