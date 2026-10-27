import { useEffect, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { getAccessToken, getCurrentUserEmail } from "@/lib/newsletter/admin-api";
import type { CampaignDraft } from "@/lib/newsletter/types";
import { sendTestNewsletter } from "@/server/newsletter/campaign.functions";

interface Props {
  getValidDraft: () => Promise<CampaignDraft | null>;
}

type Feedback = { type: "success" | "error"; message: string } | null;

export function SendTestPanel({ getValidDraft }: Props) {
  const [to, setTo] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  useEffect(() => {
    getCurrentUserEmail().then(setTo);
  }, []);

  async function handleSendTest() {
    setFeedback(null);
    const draft = await getValidDraft();
    if (!draft) return;

    setSending(true);
    try {
      const accessToken = await getAccessToken();
      await sendTestNewsletter({ data: { ...draft, accessToken, to } });
      setFeedback({ type: "success", message: `Teste enviado para ${to}.` });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Erro ao enviar o teste."
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="border border-border bg-card p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-foreground">Envio de teste</p>
      <p className="mt-1 text-[11px] text-muted-foreground">
        Receba o e-mail na sua caixa antes de enviar para todos.
      </p>
      <div className="mt-4 flex gap-2">
        <input
          type="email"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          placeholder="seu@email.com"
          className="min-w-0 flex-1 border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
        />
        <button
          type="button"
          onClick={handleSendTest}
          disabled={sending || !to}
          className="inline-flex items-center gap-1.5 border border-border px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
          Testar
        </button>
      </div>
      {feedback && (
        <p className={`mt-2 text-xs ${feedback.type === "success" ? "text-green-600" : "text-destructive"}`}>
          {feedback.message}
        </p>
      )}
    </div>
  );
}
