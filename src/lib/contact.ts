/**
 * Configuração centralizada dos canais de contato do escritório.
 * Mantenha este arquivo como única fonte de verdade — qualquer botão
 * de contato (Hero, Footer, CTA, etc.) deve consumir destas constantes.
 */

/** Número do WhatsApp no formato internacional (apenas dígitos). */
export const WHATSAPP_NUMBER = "5581999290552";

/** Versão formatada para exibição (ex.: "+55 (81) 99929-0552"). */
export const WHATSAPP_DISPLAY = "+55 (81) 99929-0552";

/** Mensagem padrão pré-preenchida ao abrir a conversa via site. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vi o site do escritório e me interessei pelos serviços. Gostaria de receber um atendimento para mais informações.";

/**
 * Monta a URL de abertura do WhatsApp (api.whatsapp.com/send) com o número
 * e a mensagem pré-preenchida. Use `message` para personalizar o texto
 * em CTAs específicos; caso contrário, é usado o texto padrão do site.
 */
export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const params = new URLSearchParams({
    phone: WHATSAPP_NUMBER,
    text: message,
  });
  return `https://api.whatsapp.com/send?${params.toString()}`;
}
