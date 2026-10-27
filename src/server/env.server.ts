const DEFAULT_SITE_URL = "https://mouraegalindoadvogados.com.br";

export interface ServerEnv {
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
  brevoApiKey: string;
  siteUrl: string;
}

type EnvSource = Record<string, string | undefined>;

function readEnvSource(): EnvSource {
  const runtime = globalThis as { process?: { env?: EnvSource } };
  return runtime.process?.env ?? {};
}

function required(source: EnvSource, key: string): string {
  const value = source[key]?.trim();
  if (!value) {
    throw new Error(`Variável de ambiente ${key} não configurada no servidor.`);
  }
  return value;
}

export function getServerEnv(): ServerEnv {
  const source = readEnvSource();

  return {
    supabaseUrl: source.SUPABASE_URL?.trim() || import.meta.env.VITE_SUPABASE_URL || "",
    supabaseServiceRoleKey: required(source, "SUPABASE_SERVICE_ROLE_KEY"),
    brevoApiKey: required(source, "BREVO_API_KEY"),
    siteUrl: (source.SITE_URL?.trim() || DEFAULT_SITE_URL).replace(/\/+$/, "")
  };
}
