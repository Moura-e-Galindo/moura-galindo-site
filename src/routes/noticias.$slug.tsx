import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { fetchNoticiaBySlug, fetchAllNoticias, type NoticiaCard } from "@/lib/noticias-api";
import { formatNoticiaDate } from "@/lib/format-date";
import { buildWhatsAppUrl } from "@/lib/contact";

/**
 * Página individual de uma notícia: foto, data/hora e texto completo.
 */
export const Route = createFileRoute("/noticias/$slug")({
  loader: async ({ params }) => {
    const [noticia, todas] = await Promise.all([
      fetchNoticiaBySlug(params.slug),
      fetchAllNoticias()
    ]);
    if (!noticia) throw notFound();
    return { noticia, todas };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.noticia?.title ?? "Notícia";
    return {
      meta: [
        { title: `${title} — Moura & Galindo` },
        {
          name: "description",
          content: loaderData?.noticia?.excerpt ?? "Notícias e publicações do escritório Moura & Galindo."
        },
        { property: "og:title", content: `${title} — Moura & Galindo` },
        { property: "og:description", content: loaderData?.noticia?.excerpt ?? "" }
      ]
    };
  },
  component: NoticiaPage
});

function NoticiaPage() {
  const { noticia, todas } = Route.useLoaderData();
  const sugestoes = todas.filter((n) => n.slug !== noticia.slug).slice(0, 3);

  return (
    <>
      <section className="relative -mt-20 md:-mt-24 h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {noticia.image_url ? (
            <img
              src={noticia.image_url}
              alt={noticia.title}
              className="h-full w-full object-cover"
              style={{ objectPosition: noticia.image_position }}
            />
          ) : (
            <div className="h-full w-full gradient-hero" />
          )}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-background" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pb-16 w-full">
          <span className="inline-block bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-foreground">
            {noticia.category}
          </span>
          <h1 className="mt-6 font-serif text-3xl md:text-5xl font-medium leading-[1.1] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            {noticia.title}
          </h1>
          <div className="mt-6 flex items-center gap-6 text-sm text-white/85">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold" /> {formatNoticiaDate(noticia.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> {noticia.time}
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Todas as notícias
          </Link>

          <div className="gold-divider mt-8 mb-8" />

          {noticia.content && (
            <div
              className="rich-content text-base leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: noticia.content }}
            />
          )}

          <p className="mt-10 text-sm text-foreground">
            Por <span className="font-medium">{noticia.author}</span>
          </p>

          <div className="mt-16 border-l-2 border-gold pl-8">
            <h4 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-snug">
              Precisa de orientação sobre esse tema?
            </h4>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nossa equipe está pronta para uma conversa preliminar e confidencial sobre sua demanda jurídica.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider text-background transition-all hover:bg-gold hover:text-gold-foreground shadow-elegant"
            >
              Agendar atendimento <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {sugestoes.length > 0 && (
        <section className="py-24 md:py-32 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  Continue lendo
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground">
                  Outras notícias.
                </h2>
                <div className="gold-divider mt-6" />
              </div>
              <Link
                to="/noticias"
                className="text-sm font-medium uppercase tracking-wider text-gold inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Ver todas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {sugestoes.map((s) => (
                <Link
                  key={s.slug}
                  to="/noticias/$slug"
                  params={{ slug: s.slug }}
                  className="group flex flex-col bg-background border border-border hover:border-gold/60 shadow-card transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    {s.image_url ? (
                      <img
                        src={s.image_url}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: s.image_position }}
                      />
                    ) : (
                      <div className="h-full w-full gradient-hero" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                      <span className="text-gold">{s.category}</span>
                      <span className="text-muted-foreground">{formatNoticiaDate(s.date)}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-medium leading-snug text-foreground group-hover:text-gold transition-colors">
                      {s.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
