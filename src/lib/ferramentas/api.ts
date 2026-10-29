import { supabase } from "@/lib/supabase";
import type { FerramentaRow } from "./types";

/** Caminho público de uma ferramenta a partir do seu slug. */
export function getFerramentaPath(slug: string): string {
  return `/ferramentas/${slug}`;
}

/** Busca uma ferramenta pelo slug (leitura pública da janela de acesso). */
export async function fetchFerramenta(slug: string): Promise<FerramentaRow | null> {
  const { data, error } = await supabase
    .from("ferramentas")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return (data as FerramentaRow | null) ?? null;
}
