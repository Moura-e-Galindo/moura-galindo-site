-- =============================================================
-- Migration 005 — Ferramentas com acesso por prazo determinado
-- Execute no SQL Editor do Supabase.
-- =============================================================

-- 1. Ferramentas interativas do site
-- Cada ferramenta tem uma linha, identificada pelo slug da sua rota
-- (/ferramentas/<slug>). O painel define quando ela fica disponível.
-- Campos de data vazios significam "sem limite" naquela ponta.
CREATE TABLE public.ferramentas (
  slug             text        PRIMARY KEY,
  title            text        NOT NULL,
  description      text        NOT NULL DEFAULT '',
  enabled          boolean     NOT NULL DEFAULT true,
  available_from   timestamptz,
  available_until  timestamptz,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT ferramentas_janela_valida CHECK (
    available_from IS NULL
    OR available_until IS NULL
    OR available_until > available_from
  )
);

-- 2. RLS
ALTER TABLE public.ferramentas ENABLE ROW LEVEL SECURITY;

-- Visitantes leem a janela de acesso para saber se a ferramenta está aberta
CREATE POLICY "anon_read_ferramentas"
  ON public.ferramentas FOR SELECT TO anon
  USING (true);

CREATE POLICY "auth_read_ferramentas"
  ON public.ferramentas FOR SELECT TO authenticated
  USING (true);

-- O painel apenas ajusta a janela de acesso. Novas ferramentas entram
-- por migration, junto com o código da página.
CREATE POLICY "auth_update_ferramentas"
  ON public.ferramentas FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

-- 3. updated_at automático (função criada na migration 001)
CREATE TRIGGER ferramentas_updated_at
  BEFORE UPDATE ON public.ferramentas
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 4. Ferramentas existentes
INSERT INTO public.ferramentas (slug, title, description, enabled, available_from, available_until)
VALUES (
  'calculadora-escala-5x2',
  'Calculadora da escala 5x2',
  'Apuração de jornada, horas extras e custo mensal pela Emenda Constitucional 141/2026.',
  true,
  '2026-10-28 11:00:00-03',
  '2026-10-29 18:00:00-03'
)
ON CONFLICT (slug) DO NOTHING;
