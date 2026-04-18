import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Scale, Building2, Users2, Gavel, Home as HomeIcon, Briefcase } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-office.jpg";
import teamImage from "@/assets/team-news.jpg";
import justiceImage from "@/assets/justice.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moura & Galindo — Advocacia com tradição e excelência" },
      { name: "description", content: "Sociedade de advogados com mais de 20 anos de atuação. Defesa com excelência, ética e experiência jurídica." },
      { property: "og:title", content: "Moura & Galindo — Advocacia com tradição e excelência" },
      { property: "og:description", content: "Soluções jurídicas estratégicas com solidez e proximidade." },
    ],
  }),
  component: HomePage,
});

const noticias = [
  {
    tag: "Últimas Notícias",
    title: "Perpétua Dantas assume coordenação da área penal no Moura & Galindo",
    image: teamImage,
  },
  {
    tag: "Tributário",
    title: "Reforma Tributária: o que muda para empresas do Lucro Real em 2026",
    image: heroImage,
  },
  {
    tag: "Empresarial",
    title: "M&A no setor de saúde: tendências do primeiro trimestre",
    image: justiceImage,
  },
];

const nucleos = [
  { icon: Briefcase, title: "Direito do Trabalho Empresarial" },
  { icon: Scale, title: "Direito Previdenciário" },
  { icon: Users2, title: "Direito de Família e Criança e Adolescente" },
  { icon: Building2, title: "Direito Empresarial e Tributário" },
  { icon: Gavel, title: "Direito Penal Empresarial" },
  { icon: HomeIcon, title: "Direito Cível e Imobiliário" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-20 md:-mt-24 min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Advogado analisando documentos"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background dark:from-black/80 dark:via-black/70 dark:to-background" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-32 w-full text-center">
          <div className="gold-divider mx-auto mb-10" />
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] text-gold italic">
            Defesa com excelência,<br />ética e 28 anos<br />de experiência jurídica.
          </h1>
          <p className="mt-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed text-foreground/80">
            Atuamos nas áreas Cível, Empresarial e Tributária, oferecendo
            soluções estratégicas e personalizadas para cada cliente.
          </p>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-card border border-border px-8 py-3.5 text-sm font-medium text-foreground hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all shadow-card"
          >
            Agendar Atendimento
          </Link>
        </div>
      </section>

      {/* Últimas Notícias */}
      <NoticiasCarousel items={noticias} />

      {/* Escritório */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Formas geométricas decorativas */}
        <DecorativeShapes />

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Mosaico de imagens */}
          <div className="relative h-[520px] md:h-[600px]">
            <div className="absolute top-0 left-0 w-[55%] h-[75%] bg-muted shadow-elegant overflow-hidden">
              <img src={heroImage} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[12%] right-0 w-[42%] h-[40%] bg-muted shadow-elegant overflow-hidden">
              <img src={teamImage} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-[8%] w-[42%] h-[42%] bg-muted shadow-elegant overflow-hidden">
              <img src={justiceImage} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground text-right">
              Escritório
            </h2>
            <div className="gold-divider mt-4 ml-auto" />

            <h3 className="mt-10 font-serif text-2xl md:text-3xl font-medium text-foreground leading-snug">
              Tradição, técnica e proximidade em cada relação jurídica.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              O Moura & Galindo é uma sociedade de advogados que combina
              experiência consolidada com uma abordagem moderna do Direito.
              Atendemos empresas e indivíduos em demandas que exigem
              estratégia, profundidade técnica e responsabilidade.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Atendimento estratégico e personalizado",
                "Sócios atuando diretamente em cada caso",
                "Mais de duas décadas de tradição jurídica",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 border border-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <Link
              to="/institucional"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gold hover:gap-4 transition-all"
            >
              Conheça mais <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Núcleos */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground">Núcleos</h2>
              <div className="gold-divider mt-4" />
            </div>
            <Link to="/areas" className="text-sm font-medium uppercase tracking-wider text-gold inline-flex items-center gap-2 hover:gap-4 transition-all">
              Ver tudo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nucleos.map(({ icon: Icon, title }) => (
              <article key={title} className="group bg-background border border-border p-8 hover:border-gold transition-colors">
                <div className="flex h-14 w-14 items-center justify-center bg-muted group-hover:bg-gold/10 transition-colors">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                </div>
                <h3 className="mt-6 font-serif text-xl font-medium text-foreground min-h-[3.5rem] leading-snug">
                  {title}
                </h3>
                <Link to="/areas" className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2 text-xs font-medium uppercase tracking-wider text-gold-foreground hover:bg-foreground hover:text-background transition-colors">
                  Saiba +
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-hero text-primary-foreground dark:text-foreground">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "28+", l: "Anos de atuação" },
            { n: "1.200+", l: "Casos conduzidos" },
            { n: "45", l: "Profissionais" },
            { n: "8", l: "Áreas de prática" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-5xl md:text-6xl font-medium text-gold">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest opacity-70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Vamos Conversar</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium text-foreground">
            Tem um caso para discutir?
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            Nossa equipe está pronta para uma conversa preliminar e confidencial sobre sua demanda jurídica.
          </p>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider text-background transition-all hover:bg-gold hover:text-gold-foreground shadow-elegant"
          >
            Agende um contato <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function NoticiasCarousel({ items }: { items: typeof noticias }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const go = (d: number) => setIndex((i) => (i + d + total) % total);
  const current = items[index];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-t border-gold/40 pt-8">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Últimas Notícias</h2>
          <Link to="/noticias" className="text-sm font-medium text-gold inline-flex items-center gap-2 hover:gap-4 transition-all">
            Ver tudo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mt-10 group">
          <div className="relative aspect-[16/8] md:aspect-[16/6] bg-muted overflow-hidden">
            <img
              src={current.image}
              alt={current.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              key={index}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-foreground">
                {current.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl md:text-3xl font-medium text-white max-w-3xl leading-snug">
                {current.title}
              </h3>
            </div>

            <button
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Próximo"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2 bg-muted-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DecorativeShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute -left-20 top-10 w-72 h-32 bg-gold/70 dark:bg-gold/50"
        style={{ transform: "skewY(-18deg)" }}
      />
      <div
        className="absolute -left-10 top-40 w-96 h-32 bg-muted-foreground/20"
        style={{ transform: "skewY(-18deg)" }}
      />
      <div
        className="absolute -left-32 bottom-10 w-80 h-28 bg-gold/30"
        style={{ transform: "skewY(-18deg)" }}
      />
    </div>
  );
}
