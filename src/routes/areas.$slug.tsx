import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { findNucleoBySlug, nucleos } from "@/data/nucleos";
import { buildWhatsAppUrl } from "@/lib/contact";

export const Route = createFileRoute("/areas/$slug")({
  // Garante 404 quando o slug nao existe
  loader: ({ params }) => {
    const nucleo = findNucleoBySlug(params.slug);
    if (!nucleo) throw notFound();
    return { nucleo };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.nucleo?.title ?? "Núcleo";
    return {
      meta: [
        { title: `${title} — Moura & Galindo` },
        {
          name: "description",
          content:
            loaderData?.nucleo?.shortDesc ??
            "Conheça a área de atuação do escritório Moura & Galindo.",
        },
        { property: "og:title", content: `${title} — Moura & Galindo` },
        {
          property: "og:description",
          content: loaderData?.nucleo?.shortDesc ?? "",
        },
      ],
    };
  },
  component: NucleoPage,
});

function NucleoPage() {
  const { nucleo } = Route.useLoaderData();
  const Icon = nucleo.icon;

  // Sugestoes: outros nucleos (excluindo o atual), no maximo 3
  const sugestoes = nucleos.filter((n) => n.slug !== nucleo.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Núcleos"
        title={nucleo.title}
        subtitle={nucleo.subtitle}
      />

      {/* Conteúdo principal */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Voltar */}
          <Link
            to="/areas"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Todas as áreas
          </Link>

          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            {/* Coluna do ícone/identidade da área */}
            <aside className="lg:col-span-4">
              <div className="border border-border bg-card p-10 shadow-card">
                <div className="flex h-16 w-16 items-center justify-center border border-gold/40 bg-gold/5">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                </div>
                <h2 className="mt-8 font-serif text-3xl font-medium text-foreground leading-tight">
                  {nucleo.title}
                </h2>
                <div className="gold-divider mt-4" />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {nucleo.shortDesc}
                </p>
              </div>
            </aside>

            {/* Coluna do conteúdo descritivo */}
            <div className="lg:col-span-8">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Sobre a área
              </span>
              <h3 className="mt-6 font-serif text-3xl md:text-4xl font-medium text-foreground leading-snug">
                Como atuamos em {nucleo.title}.
              </h3>
              <div className="gold-divider mt-6" />

              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
                {nucleo.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Lista de serviços */}
              {nucleo.services.length > 0 && (
                <div className="mt-12">
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                    O que oferecemos
                  </span>
                  <h4 className="mt-4 font-serif text-2xl font-medium text-foreground">
                    Principais serviços
                  </h4>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {nucleo.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border border-border bg-background px-5 py-4 hover:border-gold transition-colors"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 border border-gold">
                          <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="mt-16 border-l-2 border-gold pl-8">
                <h4 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-snug">
                  Precisa de orientação em {nucleo.title}?
                </h4>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Nossa equipe está pronta para uma conversa preliminar e
                  confidencial sobre sua demanda jurídica.
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
          </div>
        </div>
      </section>

      {/* Outros núcleos */}
      {sugestoes.length > 0 && (
        <section className="py-24 md:py-32 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  Outras áreas
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground">
                  Conheça também.
                </h2>
                <div className="gold-divider mt-6" />
              </div>
              <Link
                to="/areas"
                className="text-sm font-medium uppercase tracking-wider text-gold inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sugestoes.map(({ slug, icon: SugIcon, title, shortDesc }) => (
                <article
                  key={slug}
                  className="group bg-background border border-border p-8 hover:border-gold transition-colors flex flex-col"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-muted group-hover:bg-gold/10 transition-colors">
                    <SugIcon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-medium text-foreground leading-snug">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {shortDesc}
                  </p>
                  <Link
                    to="/areas/$slug"
                    params={{ slug }}
                    className="mt-6 inline-flex items-center justify-center self-start rounded-full bg-gold px-5 py-2 text-xs font-medium uppercase tracking-wider text-gold-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    Saiba +
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
