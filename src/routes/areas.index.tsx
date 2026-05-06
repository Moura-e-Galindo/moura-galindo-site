import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { nucleos } from "@/data/nucleos";

/**
 * Página de listagem das áreas de atuação ("Núcleos").
 * Renderiza-se em /areas e exibe um card por núcleo,
 * com link para a página detalhada de cada um.
 */
export const Route = createFileRoute("/areas/")({
  head: () => ({
    meta: [
      { title: "Núcleos — Moura & Galindo" },
      {
        name: "description",
        content:
          "Conheça as áreas de prática do escritório Moura & Galindo: civil, imobiliário, trabalhista, médico, família, empresarial, tributário e direito da moda.",
      },
      { property: "og:title", content: "Núcleos — Moura & Galindo" },
      {
        property: "og:description",
        content:
          "Atuação multidisciplinar com profundidade técnica em oito áreas do Direito.",
      },
    ],
  }),
  component: Areas,
});

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Núcleos"
        title="Áreas de Atuação."
        subtitle="Somos um escritório dinâmico, cuja principal marca é a atuação moderna, compromissada com a ética e soluções jurídicas responsáveis, adaptadas aos anseios e as necessidades dos nossos clientes."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {nucleos.map(({ slug, icon: Icon, title, shortDesc }) => (
              <article
                key={slug}
                className="group relative border border-border bg-card p-10 hover:border-gold transition-colors shadow-card flex flex-col"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/40 group-hover:border-gold group-hover:bg-gold/5 transition-colors">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium text-foreground">
                      {title}
                    </h3>
                    <div className="gold-divider mt-3" />
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {shortDesc}
                    </p>

                    <Link
                      to="/areas/$slug"
                      params={{ slug }}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold hover:gap-3 transition-all"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
