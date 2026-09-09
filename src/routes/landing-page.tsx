import { createFileRoute } from "@tanstack/react-router";

import { LandingHero } from "@/components/landing/LandingHero";
import { QuemPodeSection } from "@/components/landing/QuemPodeSection";
import { SituacoesSection } from "@/components/landing/SituacoesSection";
import { ComoAjudarSection } from "@/components/landing/ComoAjudarSection";
import { PorQueSection } from "@/components/landing/PorQueSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaFinalSection } from "@/components/landing/CtaFinalSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

/**
 * URL canônica da landing de captação — servida em produção por um Worker
 * dedicado do Cloudflare. Esta rota (/landing-page) é apenas uma prévia/espelho
 * dentro do site principal, então aponta o canonical para a URL oficial e
 * pede noindex para NÃO competir com ela na busca (evita conteúdo duplicado).
 */
const LANDING_CANONICAL =
  "https://mouraegalindoadvogados.com.br/salario-maternidade/";

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
      // Evita que esta prévia interna concorra com a landing oficial na busca.
      { name: "robots", content: "noindex, follow" },
      {
        property: "og:title",
        content: "Salário-Maternidade INSS | Moura & Galindo",
      },
      {
        property: "og:description",
        content:
          "Análise do seu caso e orientação sobre o recebimento do Salário-Maternidade, com atendimento humanizado para todo o Brasil.",
      },
      { property: "og:url", content: LANDING_CANONICAL },
    ],
    links: [{ rel: "canonical", href: LANDING_CANONICAL }],
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
