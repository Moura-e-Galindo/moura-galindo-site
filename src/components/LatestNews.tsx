import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { type NoticiaCard } from "@/lib/noticias-api";
import { formatNoticiaDate } from "@/lib/format-date";

interface Props {
  noticias: NoticiaCard[];
}

/**
 * Seção "Últimas Notícias" exibida na home.
 * Recebe as notícias do loader da rota pai para evitar fetch duplo.
 */
export function LatestNews({ noticias }: Props) {
  if (noticias.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Fique por dentro
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl font-medium text-foreground">
              Últimas Notícias
            </h2>
            <div className="gold-divider mt-6" />
          </div>
          <Link
            to="/noticias"
            className="text-sm font-medium uppercase tracking-wider text-gold inline-flex items-center gap-2 hover:gap-4 transition-all"
          >
            Ver tudo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {noticias.map((noticia) => (
            <Link
              key={noticia.slug}
              to="/noticias/$slug"
              params={{ slug: noticia.slug }}
              className="group flex flex-col bg-card border border-border hover:border-gold/60 shadow-card transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                {noticia.image_url ? (
                  <img
                    src={noticia.image_url}
                    alt={noticia.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: noticia.image_position }}
                  />
                ) : (
                  <div className="h-full w-full gradient-hero" />
                )}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-gold">{noticia.category}</span>
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {formatNoticiaDate(noticia.date)}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium leading-snug text-foreground group-hover:text-gold transition-colors">
                  {noticia.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3 flex-1">
                  {noticia.excerpt}
                </p>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{noticia.author}</span>
                  <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
