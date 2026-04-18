import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, Building2, Users, Newspaper } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";
import justiceImage from "@/assets/justice.jpg";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moura & Galindo — Advocacia com tradição e excelência" },
      { name: "description", content: "Sociedade de advogados com mais de 20 anos de atuação em direito empresarial, tributário, trabalhista, civil e penal." },
      { property: "og:title", content: "Moura & Galindo — Advocacia com tradição e excelência" },
      { property: "og:description", content: "Soluções jurídicas estratégicas com a solidez de quem entende o seu setor." },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Building2, title: "Direito Empresarial", desc: "Estruturação societária, M&A, governança e contratos complexos." },
  { icon: Scale, title: "Tributário", desc: "Planejamento, defesa administrativa e contencioso fiscal estratégico." },
  { icon: Users, title: "Trabalhista", desc: "Consultoria preventiva e defesa em ações individuais e coletivas." },
  { icon: Newspaper, title: "Cível & Consumidor", desc: "Litígios complexos, contratos e responsabilidade civil." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Biblioteca do escritório Moura & Galindo"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/30 dark:from-background/95 dark:via-background/85 dark:to-background/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 w-full">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Desde 2001
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.02] text-foreground">
              A força do direito,<br />
              <span className="text-gold italic">a precisão</span> da estratégia.
            </h1>
            <div className="gold-divider mt-8" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Moura & Galindo é uma sociedade de advogados que combina tradição
              jurídica com visão contemporânea, atendendo empresas e indivíduos
              em demandas estratégicas há mais de duas décadas.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold hover:text-gold-foreground shadow-elegant"
              >
                Áreas de Atuação <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border border-foreground/30 px-8 py-4 text-sm font-medium uppercase tracking-wider text-foreground transition-all hover:border-gold hover:text-gold"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Áreas de Excelência"
            title="Atuação multidisciplinar com profundidade técnica"
            description="Construímos soluções jurídicas sob medida, com equipes especializadas que conhecem o setor do cliente em detalhe."
          />

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 border border-border">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-background p-8 transition-colors hover:bg-card">
                <Icon className="h-8 w-8 text-gold transition-transform group-hover:scale-110" strokeWidth={1.25} />
                <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/areas" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gold hover:gap-4 transition-all">
              Ver todas as áreas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={justiceImage}
              alt="Estátua da Justiça"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full max-w-md mx-auto shadow-elegant"
            />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Nosso Manifesto</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground">
              Cada caso merece <span className="italic text-gold">tempo</span>,
              técnica e responsabilidade.
            </h2>
            <div className="gold-divider mt-6" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Em um mercado que privilegia a velocidade, escolhemos preservar o
                rigor. Cada parecer, contrato ou peça processual passa pelas
                mãos de sócios experientes — não por automatismos.
              </p>
              <p>
                Acreditamos que assessorar bem é também antecipar. Por isso
                trabalhamos próximos do cliente, entendendo o seu negócio antes
                de propor caminhos jurídicos.
              </p>
            </div>
            <Link
              to="/institucional"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground hover:text-gold transition-colors"
            >
              Conheça o escritório <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "20+", l: "Anos de atuação" },
            { n: "1.200+", l: "Casos conduzidos" },
            { n: "45", l: "Profissionais" },
            { n: "8", l: "Áreas de prática" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-5xl md:text-6xl font-medium text-gold">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeader
            align="center"
            eyebrow="Vamos Conversar"
            title="Tem um caso para discutir?"
            description="Nossa equipe está pronta para uma conversa preliminar e confidencial sobre sua demanda jurídica."
          />
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold hover:text-gold-foreground shadow-elegant"
          >
            Agende um contato <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
