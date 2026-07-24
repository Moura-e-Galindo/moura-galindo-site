import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

/**
 * Em Node.js < 22 (ambiente SSR do Vite), o `@supabase/realtime-js` tenta
 * detectar o WebSocket global e lança erro ao não encontrá-lo.
 * Como não usamos Realtime neste projeto, passamos um stub vazio como
 * transport — ele nunca é instanciado, mas satisfaz a inicialização.
 * No browser, `import.meta.env.SSR` é `false`, então o WebSocket nativo
 * é usado normalmente.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const realtimeTransport = import.meta.env.SSR ? (class {} as any) : undefined;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: { transport: realtimeTransport }
});
