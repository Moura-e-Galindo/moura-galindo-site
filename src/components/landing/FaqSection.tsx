import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Duvida {
  pergunta: string;
  resposta: string;
}

const DUVIDAS: Duvida[] = [
  {
    pergunta: "Qual é a duração do benefício?",
    resposta:
      "Em regra, o Salário-Maternidade é pago por 120 dias, observadas as regras aplicáveis a cada caso.",
  },
  {
    pergunta: "Estou desempregada. Ainda posso ter direito?",
    resposta:
      "Sim. Dependendo da sua situação perante o INSS, é possível manter o direito ao benefício mesmo sem vínculo empregatício.",
  },
  {
    pergunta: "É possível solicitar após o nascimento do bebê?",
    resposta:
      "Sim. O pedido pode ser feito após o parto, respeitados os requisitos e os prazos legais.",
  },
  {
    pergunta: "Preciso contratar um advogado?",
    resposta:
      "Nem sempre é obrigatório. No entanto, a orientação jurídica pode evitar erros, agilizar o processo e aumentar a segurança na análise do seu direito.",
  },
];

/** Seção "Dúvidas frequentes" com acordeão. */
export function FaqSection() {
  return (
    <section className="bg-[#fbecef] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-serif text-2xl font-medium text-[#5e2a3f] md:text-4xl">
          Dúvidas frequentes
        </h2>
        <div className="gold-divider mx-auto mt-6 mb-12" />

        <Accordion type="single" collapsible className="w-full space-y-3">
          {DUVIDAS.map((duvida, index) => (
            <AccordionItem
              key={duvida.pergunta}
              value={`item-${index}`}
              className="rounded-2xl border border-[#eccbd4] bg-white px-5"
            >
              <AccordionTrigger className="text-left font-serif text-base text-[#5e2a3f] md:text-lg">
                {duvida.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#7a5560]">
                {duvida.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
