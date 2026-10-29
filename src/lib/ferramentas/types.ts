/** Linha exata da tabela `ferramentas` no Supabase. */
export interface FerramentaRow {
  slug: string;
  title: string;
  description: string;
  enabled: boolean;
  available_from: string | null;
  available_until: string | null;
  created_at: string;
  updated_at: string;
}

/** Campos da janela de acesso editáveis pelo painel. */
export interface JanelaAcesso {
  enabled: boolean;
  available_from: string | null;
  available_until: string | null;
}

/**
 * Situação da ferramenta em um instante:
 * - `desativada`: suspensa manualmente no painel;
 * - `antes`: ainda não chegou a data de liberação;
 * - `aberta`: dentro da janela de acesso;
 * - `encerrada`: a data de encerramento já passou.
 */
export type FaseAcesso = "desativada" | "antes" | "aberta" | "encerrada";
