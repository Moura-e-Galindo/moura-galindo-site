-- =============================================================
-- Migration 004 — Newsletter (inscritos e campanhas)
-- Execute no SQL Editor do Supabase.
-- =============================================================

-- 1. Inscritos
CREATE TABLE public.newsletter_subscribers (
  id                    uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name                  text        NOT NULL,
  email                 text        NOT NULL UNIQUE CHECK (email = lower(email)),
  status                text        NOT NULL DEFAULT 'pending'
                                    CHECK (status IN ('pending', 'confirmed', 'unsubscribed')),
  token                 uuid        NOT NULL UNIQUE DEFAULT gen_random_uuid(),
  consent_at            timestamptz NOT NULL DEFAULT now(),
  confirmation_sent_at  timestamptz,
  confirmed_at          timestamptz,
  unsubscribed_at       timestamptz,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX newsletter_subscribers_status_idx
  ON public.newsletter_subscribers (status);

-- 2. Campanhas (e-mails enviados ou em rascunho)
CREATE TABLE public.newsletter_campaigns (
  id                uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  subject           text        NOT NULL,
  preheader         text        NOT NULL DEFAULT '',
  content           text        NOT NULL DEFAULT '',
  status            text        NOT NULL DEFAULT 'draft'
                                CHECK (status IN ('draft', 'sending', 'sent', 'failed')),
  recipients_count  integer     NOT NULL DEFAULT 0,
  error_message     text,
  sent_at           timestamptz,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now()
);

-- 3. RLS
-- Visitantes não acessam as tabelas diretamente: inscrição, confirmação,
-- descadastro e envio passam pelo servidor do site (service role).
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_campaigns   ENABLE ROW LEVEL SECURITY;

CREATE POLICY "auth_read_subscribers"
  ON public.newsletter_subscribers FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "auth_delete_subscribers"
  ON public.newsletter_subscribers FOR DELETE TO authenticated
  USING (true);

CREATE POLICY "auth_read_campaigns"
  ON public.newsletter_campaigns FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "auth_insert_draft_campaigns"
  ON public.newsletter_campaigns FOR INSERT TO authenticated
  WITH CHECK (status = 'draft');

-- Só rascunhos podem ser editados pelo painel; o status de envio é
-- alterado apenas pelo servidor.
CREATE POLICY "auth_update_draft_campaigns"
  ON public.newsletter_campaigns FOR UPDATE TO authenticated
  USING (status = 'draft') WITH CHECK (status = 'draft');

CREATE POLICY "auth_delete_unsent_campaigns"
  ON public.newsletter_campaigns FOR DELETE TO authenticated
  USING (status IN ('draft', 'failed'));

-- 4. updated_at automático (função criada na migration 001)
CREATE TRIGGER newsletter_subscribers_updated_at
  BEFORE UPDATE ON public.newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER newsletter_campaigns_updated_at
  BEFORE UPDATE ON public.newsletter_campaigns
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
