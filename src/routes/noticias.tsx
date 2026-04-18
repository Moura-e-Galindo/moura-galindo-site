import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias e Publicações — Moura & Galindo" },
      { name: "description", content: "Análises, artigos e atualizações jurídicas produzidas pelos advogados do escritório Moura & Galindo." },
      { property: "og:title", content: "Notícias e Publicações — Moura & Galindo" },
      { property: "og:description", content: "Análises e atualizações jurídicas dos especialistas Moura & Galindo." },
    ],
  }),
  component: Noticias,
});

const posts = [
  {
    cat: "Tributário",
    date: "12 de abril, 2026",
    title: "Reforma Tributária: o que muda para empresas do Lucro Real em 2026",
    excerpt: "Análise dos principais impactos da regulamentação aprovada e os primeiros passos para adaptação dos modelos fiscais corporativos.",
    author: "Helena Galindo",
  },
  {
    cat: "Empresarial",
    date: "28 de março, 2026",
    title: "M&A no setor de saúde: tendências do primeiro trimestre",
    excerpt: "Crescimento das operações envolvendo hospitais regionais e laboratórios de diagnóstico aponta consolidação acelerada do setor.",
    author: "Ricardo Moura",
  },
  {
    cat: "LGPD",
    date: "15 de março, 2026",
    title: "Novas diretrizes da ANPD sobre transferência internacional de dados",
    excerpt: "ANPD publica regulamento que altera obrigações para controladores em operações com terceiros fora do Brasil.",
    author: "Carolina Vasques",
  },
  {
    cat: "Trabalhista",
    date: "02 de março, 2026",
    title: "Trabalho híbrido e o novo entendimento do TST sobre controle de jornada",
    excerpt: "Decisão recente da Corte traz reflexões importantes para empresas que adotaram modelos flexíveis no pós-pandemia.",
    author: "Bruno Cavalcanti",
  },
  {
    cat: "Penal Empresarial",
    date: "18 de fevereiro, 2026",
    title: "Investigações internas: limites probatórios e proteção de dados",
    excerpt: "Como conduzir apurações corporativas em conformidade com a LGPD e preservando o valor probatório das evidências.",
    author: "Felipe Dantas",
  },
  {
    cat: "Civil",
    date: "30 de janeiro, 2026",
    title: "Holdings familiares: planejamento sucessório após a Reforma",
    excerpt: "Impactos tributários e estruturais nas estratégias de organização patrimonial para famílias empresárias.",
    author: "Mariana Albuquerque",
  },
];

function Noticias() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Notícias & Publicações"
        title="Análises que orientam decisões."
        subtitle="Artigos, comentários e atualizações sobre os temas que movimentam o cenário jurídico e empresarial brasileiro."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Destaque */}
          <article className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border p-10 md:p-14 mb-20 hover:border-gold/60 transition-colors group cursor-pointer">
            <div className="surface-dark aspect-[4/3] gradient-hero flex items-center justify-center">
              <span className="font-serif text-7xl text-gold/80">M&G</span>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em]">
                <span className="text-gold">{featured.cat}</span>
                <span className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> {featured.date}
                </span>
              </div>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl font-medium leading-tight text-foreground group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <div className="gold-divider mt-6" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Por <span className="text-foreground">{featured.author}</span></span>
                <ArrowRight className="h-5 w-5 text-gold group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>

          {/* Lista */}
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.title} className="bg-background p-8 hover:bg-card transition-colors group cursor-pointer">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-gold">{p.cat}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium leading-snug text-foreground group-hover:text-gold transition-colors min-h-[5rem]">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.excerpt}</p>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{p.author}</span>
                  <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
