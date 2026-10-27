import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save, Send } from "lucide-react";
import { RichTextEditor } from "@/components/RichTextEditor";
import {
  createCampaign,
  getAccessToken,
  updateCampaign
} from "@/lib/newsletter/admin-api";
import { NAME_PLACEHOLDER } from "@/lib/newsletter/email/newsletter-email";
import { formatDateTime, pluralize } from "@/lib/newsletter/format";
import { campaignDraftSchema } from "@/lib/newsletter/schemas";
import type { CampaignDraft, CampaignRow } from "@/lib/newsletter/types";
import { sendNewsletterCampaign } from "@/server/newsletter/campaign.functions";
import { EmailPreview } from "./EmailPreview";
import { SendTestPanel } from "./SendTestPanel";

interface Props {
  campaign?: CampaignRow;
  confirmedCount: number;
  onSaved: (campaign: CampaignRow) => void;
  onSendFinished: (campaignId: string) => void;
}

type Busy = "saving" | "sending" | null;

const LABEL_CLASS = "block text-xs font-medium uppercase tracking-wider text-foreground mb-2";
const INPUT_CLASS =
  "w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors";

export function CampaignEditor({ campaign, confirmedCount, onSaved, onSendFinished }: Props) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(campaign?.updated_at ?? null);
  const [campaignId, setCampaignId] = useState<string | null>(campaign?.id ?? null);

  const {
    register,
    setValue,
    watch,
    trigger,
    getValues,
    formState: { errors }
  } = useForm<CampaignDraft>({
    resolver: zodResolver(campaignDraftSchema),
    defaultValues: {
      subject: campaign?.subject ?? "",
      preheader: campaign?.preheader ?? "",
      content: campaign?.content ?? ""
    }
  });

  const [subject, preheader, content] = watch(["subject", "preheader", "content"]);

  async function getValidDraft(): Promise<CampaignDraft | null> {
    const valid = await trigger();
    return valid ? getValues() : null;
  }

  async function persist(draft: CampaignDraft): Promise<CampaignRow> {
    const saved = campaignId
      ? await updateCampaign(campaignId, draft)
      : await createCampaign(draft);
    setCampaignId(saved.id);
    setSavedAt(saved.updated_at);
    return saved;
  }

  async function handleSave() {
    setError(null);
    const draft = await getValidDraft();
    if (!draft) return;

    setBusy("saving");
    try {
      onSaved(await persist(draft));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao salvar o rascunho.");
    } finally {
      setBusy(null);
    }
  }

  async function handleSend() {
    setError(null);
    const draft = await getValidDraft();
    if (!draft) return;

    const audience = pluralize(confirmedCount, "inscrito confirmado", "inscritos confirmados");
    if (!confirm(`Enviar "${draft.subject}" para ${audience}? Esta ação não pode ser desfeita.`)) {
      return;
    }

    setBusy("sending");
    let savedId: string | null = null;
    try {
      savedId = (await persist(draft)).id;
      const accessToken = await getAccessToken();
      await sendNewsletterCampaign({ data: { accessToken, campaignId: savedId } });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar a newsletter.");
    } finally {
      setBusy(null);
      if (savedId) onSendFinished(savedId);
    }
  }

  return (
    <div className="grid gap-8 xl:grid-cols-2">
      <div className="space-y-6">
        <div>
          <label className={LABEL_CLASS}>Assunto *</label>
          <input
            {...register("subject")}
            className={INPUT_CLASS}
            placeholder="Ex.: Novidades na legislação trabalhista"
          />
          {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
        </div>

        <div>
          <label className={LABEL_CLASS}>Pré-cabeçalho</label>
          <input
            {...register("preheader")}
            className={INPUT_CLASS}
            placeholder="Frase curta exibida ao lado do assunto na caixa de entrada"
          />
          {errors.preheader && (
            <p className="mt-1 text-xs text-destructive">{errors.preheader.message}</p>
          )}
        </div>

        <div>
          <label className={LABEL_CLASS}>Conteúdo *</label>
          <p className="mb-2 text-[10px] text-muted-foreground">
            Use <code className="text-foreground">{NAME_PLACEHOLDER}</code> para inserir o primeiro
            nome do inscrito. Listas: comece a linha com “- ” ou “1. ”.
          </p>
          <RichTextEditor
            initialValue={campaign?.content ?? ""}
            onChange={(html) => setValue("content", html, { shouldValidate: !!errors.content })}
            minHeight="360px"
          />
          {errors.content && <p className="mt-1 text-xs text-destructive">{errors.content.message}</p>}
        </div>

        <SendTestPanel getValidDraft={getValidDraft} />

        <div className="border border-border bg-card p-5">
          <p className="text-sm text-foreground">
            Será enviada para{" "}
            <span className="font-medium text-gold">
              {pluralize(confirmedCount, "inscrito confirmado", "inscritos confirmados")}
            </span>
            .
          </p>
          {savedAt && (
            <p className="mt-1 text-[11px] text-muted-foreground">
              Rascunho salvo em {formatDateTime(savedAt)}
            </p>
          )}

          {error && <p className="mt-3 text-xs text-destructive">{error}</p>}

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleSave}
              disabled={busy !== null}
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy === "saving" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              Salvar rascunho
            </button>
            <button
              type="button"
              onClick={handleSend}
              disabled={busy !== null || confirmedCount === 0}
              className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-gold-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy === "sending" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
              {busy === "sending" ? "Enviando..." : "Enviar para todos"}
            </button>
          </div>
        </div>
      </div>

      <div className="xl:sticky xl:top-6 xl:self-start">
        <EmailPreview subject={subject} preheader={preheader} content={content} />
      </div>
    </div>
  );
}
