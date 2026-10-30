export const SITE_URL = "https://mouraegalindoadvogados.com.br";

/** Imagem de pré-visualização padrão (1200x630), usada quando a página não define a sua. */
export const DEFAULT_OG_IMAGE_URL = `${SITE_URL}/og/site.jpg`;
export const DEFAULT_OG_IMAGE_ALT =
  "Moura & Galindo Advogados Associados: defesa com excelência, ética e mais de 20 anos de experiência jurídica.";

/**
 * Meta tags da imagem de pré-visualização de links (Open Graph e Twitter).
 * As imagens devem ser JPEG de 1200x630 servidas em /public/og, com URL absoluta.
 * Uma rota que usa este helper substitui a imagem padrão definida no layout raiz.
 */
export function buildOgImageMeta(url: string, alt: string) {
  return [
    { property: "og:image", content: url },
    { property: "og:image:secure_url", content: url },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: url },
    { name: "twitter:image:alt", content: alt }
  ];
}
