import { buildWhatsAppUrl } from "@/lib/contact";

/**
 * Mensagem pré-preenchida específica da campanha de Salário-Maternidade.
 * Centraliza o texto usado por todos os CTAs desta landing page.
 */
export const SALARIO_MATERNIDADE_MESSAGE =
  "Olá! Vi a página sobre Salário-Maternidade e gostaria de saber se tenho direito ao benefício.";

/** URL do WhatsApp já com a mensagem da campanha. */
export const salarioMaternidadeWhatsAppUrl = () =>
  buildWhatsAppUrl(SALARIO_MATERNIDADE_MESSAGE);
