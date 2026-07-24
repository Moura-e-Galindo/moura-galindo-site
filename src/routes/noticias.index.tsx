import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Calendar, ArrowRight } from "lucide-react";
import { fetchAllNoticias, type NoticiaCard } from "@/lib/noticias-api";
import { formatNoticiaDate } from "@/lib/format-date";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias e Publicações — Moura & Galindo" },
      {
        name: "description",
        content: "Análises, artigos e atualizações jurídicas produzidas pelos advogados do escritório Moura & Galindo."
      },
      { property: "og:title", content: "Notícias e Publicações — Moura & Galindo" },
      {
        property: "og:description",
        content: "Análises e atualizações jurídicas dos especialistas Moura & Galindo."
      }
    ]
  }),
  loader: () => fetchAllNoticias(),
  component: Noticias
});

function NoticiaImage({ noticia }: { noticia: NoticiaCard }) {
  if (noticia.image_url) {
    return (
      <img
        src={noticia.image_url}
        alt={noticia.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: noticia.image_position }}
      />
    );
  }
  return <div className="h-full w-full gradient-hero" />;
}

function Noticias() {
  const noticias = Route.useLoaderData();

  if (noticias.length === 0) {
    return (
      <>
        <PageHero
          eyebrow="Notícias & Publicações"
          title="Análises que orientam decisões."
          subtitle="Artigos, comentários e atualizações sobre os temas que movimentam o cenário jurídico e empresarial brasileiro."
        />
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-muted-foreground">Nenhuma notícia publicada ainda.</p>
          </div>
        </section>
      </>
    );
  }

  const [featured, ...rest] = noticias;

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
          <Link
            to="/noticias/$slug"
            params={{ slug: featured.slug }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border p-10 md:p-14 mb-20 hover:border-gold/60 transition-colors group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <NoticiaImage noticia={featured} />
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em]">
                <span className="text-gold">{featured.category}</span>
                <span className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> {formatNoticiaDate(featured.date)}
                </span>
              </div>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl font-medium leading-tight text-foreground group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <div className="gold-divider mt-6" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Por <span className="text-foreground">{featured.author}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-gold group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Lista */}
          {rest.length > 0 && (
            <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to="/noticias/$slug"
                  params={{ slug: p.slug }}
                  className="bg-background hover:bg-card transition-colors group flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <NoticiaImage noticia={p} />
                  </div>
                  <div className="flex-1 p-8">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                      <span className="text-gold">{p.category}</span>
                      <span className="text-muted-foreground">{formatNoticiaDate(p.date)}</span>
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-medium leading-snug text-foreground group-hover:text-gold transition-colors min-h-[5rem]">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{p.author}</span>
                      <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
