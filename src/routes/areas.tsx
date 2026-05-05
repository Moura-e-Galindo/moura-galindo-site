import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import {
  Building2, Scale, Users, Gavel, Shield, Database, Home, Landmark,
  HomeIcon,
  Briefcase,
  Syringe,
  Users2,
  Handshake,
  Shirt
} from "lucide-react";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Núcleos — Moura & Galindo" },
      { name: "description", content: "Conheça as áreas de prática do escritório Moura & Galindo: empresarial, tributário, trabalhista, penal e mais." },
      { property: "og:title", content: "Núcleos — Moura & Galindo" },
      { property: "og:description", content: "Atuação multidisciplinar com profundidade técnica em oito áreas do Direito." },
    ],
  }),
  component: Areas,
});

const nucleos = [
  { icon: Scale, title: "Direito Civil e Contratual", desc: "O Direito Civil e Contratual é uma área do Direito que trata das relações jurídicas entre as pessoas e suas propriedades. O Escritório Moura & Galindo Advogados Associados atua com profissionais qualificados e experientes nas relações contratuais e de Direito Civil, seja na parte preventiva, por meio da revisão, formalização e celebração dos contratos, seja no contencioso diante dos litígios decorrentes de negócios jurídicos, como contratos de compra e venda, prestação de serviços, locação, entre outros."},
  { icon: HomeIcon, title: "Direito Imobiliário", desc: "O Direito Imobiliário envolve a regulação de diversos aspectos inerentes às relações de propriedade e posse de bens imóveis, na forma estabelecida no Código Civil Brasileiro e legislação extravagante. O Escritório Moura & Galindo Advogados Associados atua na prestação de serviços judiciais, a exemplo da ação de usucapião, reintegração de posse, a ação de manutenção de posse e a ação de interdito proibitório. Realiza, ainda, Ação de Adjudicação Compulsória, Ação de Consignação de Chaves do Imóvel, Ação de Despejo, Ação de Imissão na Posse, Ação Revisional de Contrato de Aluguel, Ação Revisional de Contrato de Financiamento Imobiliário. No âmbito extrajudicial, o escritório atua prestando consultoria sobre a negociação em compra e venda de imóvel, elaborando e analisando cláusulas e condições do contrato de compra e venda, auxiliando o cliente na lavratura da escritura pública de compra e venda, realizando termo de compromisso de compra e venda, dentre outras atividades." },
  { icon: Briefcase, title: "Direito Trabalhista Empresarial" },
  { icon: Syringe, title: "Direito Médico" },
  { icon: Users2, title: "Direito de Família e Sucessório" },
  { icon: Handshake, title: "Direito Empresarial e Societário" },
  { icon: Gavel, title: "Direito Tributário" },
  { icon: Shirt, title: "Direito da Moda" },
];

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Núcleos"
        title="Áreas de Atuação."
        subtitle="Somos um escritório dinâmico, cuja principal marca é a atuação moderna, compromissada com a ética e soluções jurídicas responsáveis, adaptadas aos anseios e as necessidades dos nossos clientes."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {nucleos.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group relative border border-border bg-card p-10 hover:border-gold transition-colors shadow-card">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/40 group-hover:border-gold group-hover:bg-gold/5 transition-colors">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium text-foreground">{title}</h3>
                    <div className="gold-divider mt-3" />
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
