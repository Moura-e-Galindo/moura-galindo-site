import type { CampaignStatus, SubscriberStatus } from "@/lib/newsletter/types";

const BASE_CLASS =
  "inline-flex items-center px-2 py-1 text-[10px] font-medium uppercase tracking-wider";

const CAMPAIGN_STATUS: Record<CampaignStatus, { label: string; className: string }> = {
  draft: { label: "Rascunho", className: "bg-muted text-muted-foreground" },
  sending: { label: "Enviando", className: "bg-gold/15 text-gold" },
  sent: { label: "Enviada", className: "bg-green-500/10 text-green-600" },
  failed: { label: "Falhou", className: "bg-red-500/10 text-red-600" }
};

const SUBSCRIBER_STATUS: Record<SubscriberStatus, { label: string; className: string }> = {
  confirmed: { label: "Confirmado", className: "bg-green-500/10 text-green-600" },
  pending: { label: "Pendente", className: "bg-gold/15 text-gold" },
  unsubscribed: { label: "Descadastrado", className: "bg-muted text-muted-foreground" }
};

export function CampaignStatusBadge({ status }: { status: CampaignStatus }) {
  const { label, className } = CAMPAIGN_STATUS[status];
  return <span className={`${BASE_CLASS} ${className}`}>{label}</span>;
}

export function SubscriberStatusBadge({ status }: { status: SubscriberStatus }) {
  const { label, className } = SUBSCRIBER_STATUS[status];
  return <span className={`${BASE_CLASS} ${className}`}>{label}</span>;
}
