/**
 * Monta a mensagem de WhatsApp a partir do formulário da landing de
 * Regularização de Imóveis. O formulário não grava dados: ele abre a
 * conversa com o escritório já preenchida.
 */

export interface LeadFormData {
  nome: string;
  contato: string;
  cidade: string;
  situacao: string;
  mensagem: string;
}

/** Lê os campos do formulário pelo atributo `name` de cada input. */
export function readLeadFormData(form: HTMLFormElement): LeadFormData {
  const data = new FormData(form);
  const field = (name: keyof LeadFormData) => String(data.get(name) ?? "").trim();

  return {
    nome: field("nome"),
    contato: field("contato"),
    cidade: field("cidade"),
    situacao: field("situacao"),
    mensagem: field("mensagem")
  };
}

export function buildLeadWhatsAppMessage(lead: LeadFormData): string {
  const lines = [
    "Olá, vim pela página de regularização de imóveis e gostaria de solicitar a análise da documentação.",
    "",
    `Nome: ${lead.nome}`,
    `Contato para resposta: ${lead.contato}`,
    `Cidade do imóvel: ${lead.cidade}`,
    `Situação principal: ${lead.situacao}`
  ];

  if (lead.mensagem) {
    lines.push(`Mais detalhes: ${lead.mensagem}`);
  }

  return lines.join("\n");
}
