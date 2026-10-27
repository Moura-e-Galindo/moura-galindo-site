import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";
import teamImage from "@/assets/team-news.jpg";
import justiceImage from "@/assets/justice.jpg";
import { nucleos } from "@/data/nucleos";
import { buildWhatsAppUrl } from "@/lib/contact";
import { BrandBand } from "@/components/BrandBand";
import { CompromissoOds } from "@/components/CompromissoOds";
import { LatestNews } from "@/components/LatestNews";
import { NucleoCard } from "@/components/NucleoCard";
import { fetchLatestNoticias } from "@/lib/noticias-api";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";

export const Route = createFileRoute("/")({
  loader: () => fetchLatestNoticias(3),
  head: () => ({
    meta: [
      { title: "Moura & Galindo — Advocacia com tradição e excelência" },
      {
        name: "description",
        content:
          "Advogados Associados com mais de 20 anos de atuação. Defesa com excelência, ética e experiência jurídica."
      },
      { property: "og:title", content: "Moura & Galindo — Advocacia com tradição e excelência" },
      {
        property: "og:description",
        content: "Soluções jurídicas estratégicas com solidez e proximidade."
      }
    ]
  }),
  component: HomePage
});

function HomePage() {
  const latestNoticias = Route.useLoaderData();

  return (
    <>
      <section className="relative -mt-20 md:-mt-24 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Advogado analisando documentos"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          {/* Overlay escuro consistente em ambos os temas — garante contraste do título */}
          <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/70 to-background" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-32 w-full text-center">
          <div className="gold-divider mx-auto mb-10" />
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Defesa com excelência,<br />ética e mais de <span className="text-gold">20 anos</span><br />de experiência jurídica.
          </h1>
          <p className="mt-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed text-white/85">
            Somos um escritório dinâmico, cuja principal marca é a atuação moderna, compromissada com a ética e soluções jurídicas responsáveis, adaptadas aos anseios e as necessidades dos nossos clientes.
          </p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full hover:bg-white/10 backdrop-blur-md border hover:border-white/25 px-8 py-3.5 text-sm font-medium hover:text-white bg-gold text-gold-foreground border-gold transition-all shadow-card"
          >
            Agendar Atendimento
          </a>
        </div>
      </section>

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
              O Escritório
            </h2>
            <div className="gold-divider mt-4 ml-auto" />

            <h3 className="mt-10 font-serif text-2xl md:text-3xl font-medium text-foreground leading-snug">
              Tradição, técnica e proximidade em cada relação jurídica.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Somos um escritório dinâmico, cuja principal marca é a atuação moderna, compromissada com a ética e soluções jurídicas responsáveis, adaptadas aos anseios e as necessidades dos nossos clientes.
              <br /><br />
              Nosso diferencial está na qualificação constante e no profissionalismo que desenvolvemos, tendo em vista que os advogados responsáveis possuem mais de 20 anos de experiência. São docentes pós-graduados, que atuam e lecionam nas áreas de suas especialidades, proporcionando a todos que fazem parte do escritório a frequente qualificação, crescimento intelectual e experiência.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Atendimento estratégico e personalizado",
                "Sócios atuando diretamente em cada caso",
                "Mais de duas décadas de tradição jurídica"
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

      {/* Faixa de marca */}
      <BrandBand />

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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nucleos.map(({ slug, title, image }) => (
              <NucleoCard
                key={slug}
                slug={slug}
                title={title}
                image={image}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark py-20 gradient-hero">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-foreground">
          {[
            { n: "20+", l: "Anos de atuação" },
            { n: "1.200+", l: "Casos conduzidos" },
            { n: "20", l: "Profissionais" },
            { n: "18", l: "Núcleos" }
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-5xl md:text-6xl font-medium text-gold">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest opacity-80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Compromisso Social — ODS */}
      <CompromissoOds />

      {/* Últimas Notícias */}
      <LatestNews noticias={latestNoticias} />

      <NewsletterSection />

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
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 rounded-full inline-flex items-center gap-2 hover:bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider hover:text-background transition-all bg-gold text-gold-foreground shadow-elegant"
          >
            Agende um contato <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
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
