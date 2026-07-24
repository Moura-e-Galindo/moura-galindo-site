-- =============================================================
-- Moura & Galindo — Supabase Migration
-- Execute este script no SQL Editor do seu projeto Supabase.
-- =============================================================

-- 1. Tabela de notícias
CREATE TABLE public.noticias (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text        UNIQUE NOT NULL,
  category    text        NOT NULL,
  title       text        NOT NULL,
  excerpt     text        NOT NULL DEFAULT '',
  content     text        NOT NULL DEFAULT '',
  date        date        NOT NULL,
  time        text        NOT NULL DEFAULT '09:00',
  image_url       text,
  image_position  text        NOT NULL DEFAULT '50% 50%',
  author      text        NOT NULL DEFAULT '',
  published   boolean     NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

-- 2. RLS (Row Level Security)
ALTER TABLE public.noticias ENABLE ROW LEVEL SECURITY;

-- Qualquer visitante pode ler notícias publicadas
CREATE POLICY "anon_read_published"
  ON public.noticias FOR SELECT TO anon
  USING (published = true);

-- Usuários autenticados têm acesso total
CREATE POLICY "auth_full_access"
  ON public.noticias FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- 3. Bucket de imagens (público para leitura)
INSERT INTO storage.buckets (id, name, public)
VALUES ('noticias-imagens', 'noticias-imagens', true)
ON CONFLICT (id) DO NOTHING;

-- Leitura pública das imagens
CREATE POLICY "public_read_images"
  ON storage.objects FOR SELECT TO anon
  USING (bucket_id = 'noticias-imagens');

-- Upload por usuários autenticados
CREATE POLICY "auth_upload_images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'noticias-imagens');

-- Exclusão por usuários autenticados
CREATE POLICY "auth_delete_images"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'noticias-imagens');

-- 4. Trigger para updated_at automático
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER noticias_updated_at
  BEFORE UPDATE ON public.noticias
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
