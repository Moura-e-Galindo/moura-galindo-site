import { createFileRoute } from "@tanstack/react-router";
import { CalendarioSection } from "@/components/landing-escala-5x2/CalendarioSection";
import { ContatoSection } from "@/components/landing-escala-5x2/ContatoSection";
import { CoordenacaoSection } from "@/components/landing-escala-5x2/CoordenacaoSection";
import { DuvidasSection } from "@/components/landing-escala-5x2/DuvidasSection";
import { EtapasSection } from "@/components/landing-escala-5x2/EtapasSection";
import { GeradorSection } from "@/components/landing-escala-5x2/GeradorSection";
import { MarcaTopo } from "@/components/landing-escala-5x2/MarcaTopo";
import { PontosSection } from "@/components/landing-escala-5x2/PontosSection";
import { RodapeSection } from "@/components/landing-escala-5x2/RodapeSection";
import { Separador } from "@/components/landing-escala-5x2/Separador";
import { TopoSection } from "@/components/landing-escala-5x2/TopoSection";
import { WhatsAppFlutuante } from "@/components/landing-escala-5x2/WhatsAppFlutuante";
import { LANDING_URL, OG_IMAGE_ALT, OG_IMAGE_URL } from "@/data/escala-5x2";
import { buildOgImageMeta } from "@/lib/seo";

const TITLE = "Escala 5x2: o que muda com a EC 141/2026 · Moura & Galindo";
const DESCRIPTION =
  "Orientações básicas sobre a Emenda Constitucional nº 141/2026: calendário da transição, os cinco pontos que decidem a adequação e dúvidas frequentes. Moura & Galindo Advogados Associados.";

const SHARE_DESCRIPTION =
  "O essencial da EC 141/2026: jornada, quadro de pessoal e custo da folha na transição.";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap";

export const Route = createFileRoute("/escala-5x2")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SHARE_DESCRIPTION },
      { property: "og:url", content: LANDING_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: SHARE_DESCRIPTION },
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
  return (
    <div className="bg-white font-roboto leading-[1.62] text-trab-tinta antialiased [color-scheme:light]">
      <MarcaTopo />
      <main>
        <TopoSection />
        <CalendarioSection />
        <Separador />
        <PontosSection />
        <GeradorSection />
        <DuvidasSection />
        <Separador />
        <CoordenacaoSection />
        <EtapasSection />
        <ContatoSection />
      </main>
      <RodapeSection />
      <WhatsAppFlutuante />
    </div>
  );
}
