import { createFileRoute } from "@tanstack/react-router";

import { LandingHero } from "@/components/landing/LandingHero";
import { QuemPodeSection } from "@/components/landing/QuemPodeSection";
import { SituacoesSection } from "@/components/landing/SituacoesSection";
import { ComoAjudarSection } from "@/components/landing/ComoAjudarSection";
import { PorQueSection } from "@/components/landing/PorQueSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaFinalSection } from "@/components/landing/CtaFinalSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export const Route = createFileRoute("/landing-page")({
  head: () => ({
    meta: [
      {
        title:
          "Salário-Maternidade INSS | Moura & Galindo Advogados Associados",
      },
      {
        name: "description",
        content:
          "Descubra se você tem direito ao Salário-Maternidade do INSS. Análise do caso e atendimento rápido e especializado em Direito Previdenciário. Fale conosco pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Salário-Maternidade INSS | Moura & Galindo",
      },
      {
        property: "og:description",
        content:
          "Análise do seu caso e orientação sobre o recebimento do Salário-Maternidade, com atendimento humanizado para todo o Brasil.",
      },
    ],
  }),
  component: LandingPage,
});

/**
 * Landing page de captação — Salário-Maternidade.
 * Página independente: não usa o Header/Footer do site (ver __root.tsx),
 * mantendo o foco total em conversão pelo WhatsApp.
 */
function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero />
      <QuemPodeSection />
      <SituacoesSection />
      <ComoAjudarSection />
      <PorQueSection />
      <FaqSection />
      <CtaFinalSection />
      <LandingFooter />
    </div>
  );
}
