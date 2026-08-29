import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { NucleoCard } from "@/components/NucleoCard";
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
          "Conheça as áreas de prática do escritório Moura & Galindo: civil, imobiliário, criminal, trabalhista, família, sucessório, médico, tributário, empresarial, consumidor, moda, previdenciário, público, ambiental, bancário, eleitoral e mais.",
      },
      { property: "og:title", content: "Núcleos — Moura & Galindo" },
      {
        property: "og:description",
        content:
          "Atuação multidisciplinar com profundidade técnica em diversas áreas do Direito.",
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
            {nucleos.map(({ slug, title, shortDesc, image }) => (
              <NucleoCard
                key={slug}
                slug={slug}
                title={title}
                image={image}
                shortDesc={shortDesc}
                variant="full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
