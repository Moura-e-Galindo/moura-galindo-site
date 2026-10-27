import { WHATSAPP_NUMBER } from "@/lib/contact";
import { LANDING_URL, escritorio, faqs } from "@/data/regularizacao-imoveis";

/**
 * JSON-LD da landing (LegalService + FAQPage) para resultados ricos
 * nos buscadores.
 */
export function buildRegularizacaoStructuredData() {
  const { endereco } = escritorio;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        name: `${escritorio.nome} · Núcleo de Direito Imobiliário`,
        url: LANDING_URL,
        telephone: `+${WHATSAPP_NUMBER}`,
        areaServed: ["Caruaru", "Agreste de Pernambuco"],
        address: {
          "@type": "PostalAddress",
          streetAddress: endereco.logradouro,
          addressLocality: endereco.cidade,
          addressRegion: endereco.uf,
          postalCode: endereco.cep,
          addressCountry: "BR"
        },
        sameAs: [escritorio.instagram.href, escritorio.site.href]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }
    ]
  };
}
