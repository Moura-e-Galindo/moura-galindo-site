import type { SupabaseClient } from "@supabase/supabase-js";

export async function requireAdmin(supabaseAdmin: SupabaseClient, accessToken: string) {
  const { data, error } = await supabaseAdmin.auth.getUser(accessToken);

  if (error || !data.user) {
    throw new Error("Acesso não autorizado. Faça login novamente.");
  }

  return data.user;
}
