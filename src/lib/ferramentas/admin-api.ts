import { supabase } from "@/lib/supabase";
import type { FerramentaRow, JanelaAcesso } from "./types";

export async function fetchFerramentasAdmin(): Promise<FerramentaRow[]> {
  const { data, error } = await supabase
    .from("ferramentas")
    .select("*")
    .order("title", { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as FerramentaRow[];
}

export async function updateJanelaAcesso(
  slug: string,
  janela: JanelaAcesso
): Promise<FerramentaRow> {
  const { data, error } = await supabase
    .from("ferramentas")
    .update(janela)
    .eq("slug", slug)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as FerramentaRow;
}
