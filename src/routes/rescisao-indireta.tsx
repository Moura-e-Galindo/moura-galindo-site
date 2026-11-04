import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/landing-rescisao-indireta/HeroSection";
import { PontosSection } from "@/components/landing-rescisao-indireta/PontosSection";
import { HipotesesSection } from "@/components/landing-rescisao-indireta/HipotesesSection";
import { RequisitosSection } from "@/components/landing-rescisao-indireta/RequisitosSection";
import { TesesSection } from "@/components/landing-rescisao-indireta/TesesSection";
import { FaqSection } from "@/components/landing-rescisao-indireta/FaqSection";
import { ContatoSection } from "@/components/landing-rescisao-indireta/ContatoSection";
import { LandingFooter } from "@/components/landing-rescisao-indireta/LandingFooter";
import { WhatsAppFlutuante } from "@/components/landing-rescisao-indireta/WhatsAppFlutuante";
import { LANDING_URL } from "@/data/rescisao-indireta";
import { buildRescisaoStructuredData } from "@/lib/rescisao-indireta/structured-data";

const TITLE = "Rescisão indireta: principais pontos · Moura & Galindo";
const DESCRIPTION =
  "Principais pontos sobre rescisão indireta: hipóteses do art. 483 da CLT, requisitos, perguntas frequentes e teses vinculantes do TST.";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&display=swap";

export const Route = createFileRoute("/rescisao-indireta")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: LANDING_URL },
      { property: "og:type", content: "website" },
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
        children: JSON.stringify(buildRescisaoStructuredData())
      }
    ]
  }),
  component: RescisaoIndiretaPage
});

function RescisaoIndiretaPage() {
  return (
    <div className="bg-white font-montserrat text-resc-tinta antialiased [color-scheme:light]">
      <Header />
      <main>
        <HeroSection />
        <PontosSection />
        <HipotesesSection />
        <RequisitosSection />
        <TesesSection />
        <FaqSection />
        <ContatoSection />
      </main>
      <LandingFooter />
      <WhatsAppFlutuante />
    </div>
  );
}
