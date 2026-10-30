import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { CalculadoraSection } from "@/components/landing-escala-5x2/CalculadoraSection";
import { ContatoSection } from "@/components/landing-escala-5x2/ContatoSection";
import { CoordenacaoSection } from "@/components/landing-escala-5x2/CoordenacaoSection";
import { DuvidasSection } from "@/components/landing-escala-5x2/DuvidasSection";
import { EtapasSection } from "@/components/landing-escala-5x2/EtapasSection";
import { MarcaTopo } from "@/components/landing-escala-5x2/MarcaTopo";
import { PontosSection } from "@/components/landing-escala-5x2/PontosSection";
import { RodapeSection } from "@/components/landing-escala-5x2/RodapeSection";
import { TopoSection } from "@/components/landing-escala-5x2/TopoSection";
import { WhatsAppFlutuante } from "@/components/landing-escala-5x2/WhatsAppFlutuante";
import { CALCULADORA_SLUG, LANDING_URL, OG_IMAGE_ALT, OG_IMAGE_URL } from "@/data/escala-5x2";
import { useNow } from "@/hooks/use-now";
import { fetchFerramenta } from "@/lib/ferramentas/api";
import { buildOgImageMeta } from "@/lib/seo";

const TITLE = "Escala 5x2: o que muda com a EC 141/2026 · Moura & Galindo";
const DESCRIPTION =
  "Jornada, quadro de pessoal e custo da folha na transição para a escala 5x2. O essencial da Emenda Constitucional 141/2026 e as dúvidas de empresas, contadores, RH e advogados, pelo Núcleo Trabalhista Empresarial do Moura & Galindo.";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Spectral:wght@400;500;600&display=swap";

export const Route = createFileRoute("/escala-5x2")({
  loader: async () => {
    // A landing continua no ar mesmo se a janela da calculadora não puder ser consultada.
    const ferramenta = await fetchFerramenta(CALCULADORA_SLUG).catch(() => null);
    return { ferramenta, loadedAt: Date.now() };
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: LANDING_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      ...buildOgImageMeta(OG_IMAGE_URL, OG_IMAGE_ALT)
    ],
    links: [
      { rel: "canonical", href: LANDING_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS_URL }
    ]
  }),
  component: Escala5x2Page
});

function Escala5x2Page() {
  const { ferramenta, loadedAt } = Route.useLoaderData();
  const now = useNow(60_000, loadedAt);

  return (
    <div className="bg-trab-papel font-montserrat text-[17px] leading-[1.7] text-neutral-900 antialiased [color-scheme:light]">
      <Header />
      <MarcaTopo />
      <main>
        <TopoSection />
        <PontosSection />
        <CalculadoraSection ferramenta={ferramenta} now={now} />
        <DuvidasSection />
        <CoordenacaoSection />
        <EtapasSection />
        <ContatoSection />
      </main>
      <RodapeSection />
      <WhatsAppFlutuante />
    </div>
  );
}
