import { createFileRoute } from "@tanstack/react-router";
import { LANDING_URL } from "@/data/regularizacao-imoveis";
import { buildRegularizacaoStructuredData } from "@/lib/regularizacao-imoveis/structured-data";
import { LandingHeader } from "@/components/landing-imoveis/LandingHeader";
import { HeroSection } from "@/components/landing-imoveis/HeroSection";
import { SituacoesSection } from "@/components/landing-imoveis/SituacoesSection";
import { ConfusoesSection } from "@/components/landing-imoveis/ConfusoesSection";
import { CaminhosSection } from "@/components/landing-imoveis/CaminhosSection";
import { EtapasSection } from "@/components/landing-imoveis/EtapasSection";
import { DestaquesSection } from "@/components/landing-imoveis/DestaquesSection";
import { DocumentosSection } from "@/components/landing-imoveis/DocumentosSection";
import { FaqSection } from "@/components/landing-imoveis/FaqSection";
import { QuemAtendeSection } from "@/components/landing-imoveis/QuemAtendeSection";
import { ContatoSection } from "@/components/landing-imoveis/ContatoSection";
import { LandingFooter } from "@/components/landing-imoveis/LandingFooter";
import { WhatsAppFloatingButton } from "@/components/landing-imoveis/WhatsAppFloatingButton";

const TITLE = "Regularização de imóveis em Caruaru · Moura & Galindo";
const DESCRIPTION =
  "Contrato de gaveta, herança sem inventário, vendedor que sumiu ou anos sem escritura? O Núcleo de Direito Imobiliário do Moura & Galindo analisa seus documentos e indica o caminho para regularizar o imóvel.";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap";

export const Route = createFileRoute("/regularizacao-de-imoveis")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: LANDING_URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION }
    ],
    links: [
      { rel: "canonical", href: LANDING_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS_URL }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildRegularizacaoStructuredData())
      }
    ]
  }),
  component: RegularizacaoImoveisPage
});

function RegularizacaoImoveisPage() {
  return (
    <div className="bg-white font-inter text-[17px] leading-[1.6] text-neutral-900 [color-scheme:light]">
      <LandingHeader />
      <main>
        <HeroSection />
        <SituacoesSection />
        <ConfusoesSection />
        <CaminhosSection />
        <EtapasSection />
        <DestaquesSection />
        <DocumentosSection />
        <FaqSection />
        <QuemAtendeSection />
        <ContatoSection />
      </main>
      <LandingFooter />
      <WhatsAppFloatingButton />
    </div>
  );
}
