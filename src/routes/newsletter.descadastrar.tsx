import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { AlertCircle, CheckCircle2, MailX } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { NewsletterActionButton } from "@/components/newsletter/NewsletterActionButton";
import { NewsletterStatusPanel } from "@/components/newsletter/NewsletterStatusPanel";
import { unsubscribeFromNewsletter } from "@/server/newsletter/subscription.functions";

const searchSchema = z.object({
  token: z.string().optional().catch(undefined)
});

type Status = "idle" | "loading" | "unsubscribed" | "invalid" | "error";

export const Route = createFileRoute("/newsletter/descadastrar")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Cancelar inscrição — Moura & Galindo" },
      { name: "robots", content: "noindex, nofollow" }
    ]
  }),
  component: CancelarInscricao
});

function CancelarInscricao() {
  const { token } = Route.useSearch();
  const [status, setStatus] = useState<Status>(token ? "idle" : "invalid");

  async function handleUnsubscribe() {
    if (!token) return;
    setStatus("loading");
    try {
      setStatus(await unsubscribeFromNewsletter({ data: { token } }));
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero eyebrow="Newsletter" title="Cancelar inscrição" />

      {(status === "idle" || status === "loading") && (
        <NewsletterStatusPanel
          icon={MailX}
          title="Deseja sair da lista?"
          description="Ao confirmar, você deixará de receber a newsletter da Moura & Galindo."
        >
          <NewsletterActionButton
            label="Cancelar inscrição"
            loadingLabel="Cancelando..."
            loading={status === "loading"}
            onClick={handleUnsubscribe}
          />
        </NewsletterStatusPanel>
      )}

      {status === "unsubscribed" && (
        <NewsletterStatusPanel
          icon={CheckCircle2}
          title="Inscrição cancelada"
          description="Você não receberá mais nossos e-mails. Se mudar de ideia, basta se inscrever novamente pelo site."
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
          description="Não encontramos uma inscrição para este link."
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
          description="Não foi possível cancelar agora. Tente novamente em instantes."
        >
          <NewsletterActionButton
            label="Tentar novamente"
            loadingLabel="Cancelando..."
            loading={false}
            onClick={handleUnsubscribe}
          />
        </NewsletterStatusPanel>
      )}
    </>
  );
}
