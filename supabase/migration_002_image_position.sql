-- =============================================================
-- Migration 002 — Adiciona posição focal da imagem
-- Execute no SQL Editor do Supabase caso já tenha rodado a migration 001.
-- =============================================================

ALTER TABLE public.noticias
  ADD COLUMN IF NOT EXISTS image_position text NOT NULL DEFAULT '50% 50%';