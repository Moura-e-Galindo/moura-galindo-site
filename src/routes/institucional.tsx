import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, Target, HeartHandshake, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Institucional — Moura & Galindo" },
      { name: "description", content: "Conheça a história, missão e valores do escritório Moura & Galindo, Advogados Associados com mais de 20 anos de tradição." },
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
        subtitle="Somos um escritório dinâmico, cuja principal marca é a atuação moderna, compromissada com a ética e soluções jurídicas responsáveis, adaptadas aos anseios e as necessidades dos nossos clientes."
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
              Somos um escritório dinâmico, cuja principal marca é a atuação moderna, compromissada com a ética e soluções jurídicas responsáveis, adaptadas aos anseios e as necessidades dos nossos clientes.
              Nosso diferencial está na qualificação constante e no profissionalismo que desenvolvemos, tendo em vista que os advogados responsáveis possuem mais de 20 anos de experiência. São docentes pós-graduados, que atuam e lecionam nas áreas de suas especialidades, proporcionando a todos que fazem parte do escritório a frequente qualificação, crescimento intelectual e experiência.
            </p>
            <p>
              O Escritório Moura & Galindo Advogados Associados atua no ramo jurídico, atendendo pessoas físicas e jurídicas, principalmente empresas regionais e o terceiro setor, prestando serviços jurídicos em várias áreas do Direito.
            </p>
            <p>
              Graças ao seu alto grau de profissionalismo e organização, a equipe Moura & Galindo nunca se afasta de seu propósito e compromisso de proporcionar soluções jurídicas eficazes, por meio da atuação preventiva, consultiva ou contenciosa, judicial ou extrajudicial, proporcionada por profissionais altamente qualificados, mediante análise criteriosa sobre a melhor estratégia para o atendimento das necessidades de seus clientes.
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
              Atuar na advocacia preventiva e contenciosa com ética; <br/>
              Proporcionar a prestação de serviços jurídicos com alto nível de conhecimento, qualificação e especialização; <br/>
              Fornecer soluções jurídicas para garantir a segurança e defesa dos interesses dos nossos clientes.
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
