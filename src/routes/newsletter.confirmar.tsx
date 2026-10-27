import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { AlertCircle, CheckCircle2, MailCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { NewsletterActionButton } from "@/components/newsletter/NewsletterActionButton";
import { NewsletterStatusPanel } from "@/components/newsletter/NewsletterStatusPanel";
import { confirmSubscription } from "@/server/newsletter/subscription.functions";

const searchSchema = z.object({
  token: z.string().optional().catch(undefined)
});

type Status = "idle" | "loading" | "confirmed" | "invalid" | "error";

export const Route = createFileRoute("/newsletter/confirmar")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Confirmar inscrição — Moura & Galindo" },
      { name: "robots", content: "noindex, nofollow" }
    ]
  }),
  component: ConfirmarInscricao
});

function ConfirmarInscricao() {
  const { token } = Route.useSearch();
  const [status, setStatus] = useState<Status>(token ? "idle" : "invalid");

  async function handleConfirm() {
    if (!token) return;
    setStatus("loading");
    try {
      setStatus(await confirmSubscription({ data: { token } }));
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero eyebrow="Newsletter" title="Confirmação de inscrição" />

      {(status === "idle" || status === "loading") && (
        <NewsletterStatusPanel
          icon={MailCheck}
          title="Falta só um passo"
          description="Clique no botão abaixo para confirmar que deseja receber a newsletter da Moura & Galindo."
        >
          <NewsletterActionButton
            label="Confirmar inscrição"
            loadingLabel="Confirmando..."
            loading={status === "loading"}
            onClick={handleConfirm}
          />
        </NewsletterStatusPanel>
      )}

      {status === "confirmed" && (
        <NewsletterStatusPanel
          icon={CheckCircle2}
          title="Inscrição confirmada!"
          description="A partir de agora você receberá nossos conteúdos no seu e-mail. Obrigado pela confiança."
        >
          <Link to="/" className="text-sm font-medium uppercase tracking-wider text-gold hover:underline">
            Voltar ao site
          </Link>
        </NewsletterStatusPanel>
      )}

      {status === "invalid" && (
        <NewsletterStatusPanel
          icon={AlertCircle}
          title="Link inválido"
          description="Este link de confirmação não é válido ou a inscrição foi cancelada. Faça uma nova inscrição pelo site."
        >
          <Link to="/" className="text-sm font-medium uppercase tracking-wider text-gold hover:underline">
            Ir para a página inicial
          </Link>
        </NewsletterStatusPanel>
      )}

      {status === "error" && (
        <NewsletterStatusPanel
          icon={AlertCircle}
          title="Algo deu errado"
          description="Não foi possível confirmar agora. Tente novamente em instantes."
        >
          <NewsletterActionButton
            label="Tentar novamente"
            loadingLabel="Confirmando..."
            loading={false}
            onClick={handleConfirm}
          />
        </NewsletterStatusPanel>
      )}
    </>
  );
}
