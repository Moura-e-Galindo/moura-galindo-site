import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, Target, HeartHandshake, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Institucional — Moura & Galindo" },
      { name: "description", content: "Conheça a história, missão e valores do escritório Moura & Galindo, sociedade de advogados com mais de 20 anos de tradição." },
      { property: "og:title", content: "Institucional — Moura & Galindo" },
      { property: "og:description", content: "História, missão e valores do escritório Moura & Galindo." },
    ],
  }),
  component: Institucional,
});

const valores = [
  { icon: ShieldCheck, title: "Integridade", desc: "Atuação ética irrestrita, em qualquer circunstância e perante qualquer parte." },
  { icon: Target, title: "Excelência Técnica", desc: "Atualização constante e profundidade em cada matéria que assumimos." },
  { icon: HeartHandshake, title: "Proximidade", desc: "Relacionamento próximo, transparente e de longo prazo com cada cliente." },
  { icon: Award, title: "Responsabilidade", desc: "Compromisso com prazos, com o resultado e com o impacto de cada decisão." },
];

function Institucional() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Tradição construída a cada caso."
        subtitle="Desde 2001, Moura & Galindo se consolidou como referência em soluções jurídicas estratégicas, unindo a solidez de uma tradição centenária ao dinamismo das demandas contemporâneas."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Nossa História</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium leading-tight">
              Mais de duas décadas dedicadas ao Direito.
            </h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Fundado em 2001 pelos sócios <span className="text-foreground">Dr. Ricardo Moura</span> e
              <span className="text-foreground"> Dra. Helena Galindo</span>, o escritório nasceu da convicção
              de que a advocacia precisa unir rigor técnico, sensibilidade humana e visão de negócio.
            </p>
            <p>
              Ao longo dos anos, expandimos nossa atuação para oito áreas de prática, sempre mantendo a
              assinatura dos sócios em cada caso conduzido. Essa estrutura combina a profundidade de um
              escritório boutique com a capacidade operacional necessária às demandas mais complexas.
            </p>
            <p>
              Hoje, somos 45 profissionais distribuídos entre São Paulo e Brasília, atendendo grupos
              empresariais nacionais e multinacionais, instituições financeiras, fundos de investimento
              e indivíduos de alto patrimônio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            align="center"
            eyebrow="Nossos Valores"
            title="O que nos define."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-border bg-background p-8 hover:border-gold transition-colors">
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 font-serif text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div className="border-l-2 border-gold pl-8">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Missão</span>
            <p className="mt-6 font-serif text-2xl leading-snug text-foreground">
              Oferecer soluções jurídicas que protejam, viabilizem e impulsionem os
              objetivos de nossos clientes, com integridade e profundidade técnica.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-8">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Visão</span>
            <p className="mt-6 font-serif text-2xl leading-snug text-foreground">
              Ser reconhecido como o escritório de advocacia em que tradição e inovação
              caminham juntas, gerando valor real em cada relação.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
