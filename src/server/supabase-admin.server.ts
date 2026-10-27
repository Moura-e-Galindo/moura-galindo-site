import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getServerEnv } from "./env.server";

export function createSupabaseAdmin(): SupabaseClient {
  const env = getServerEnv();

  if (!env.supabaseUrl) {
    throw new Error("Variável de ambiente VITE_SUPABASE_URL não configurada.");
  }

  return createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    realtime: { transport: class {} as any }
  });
}
