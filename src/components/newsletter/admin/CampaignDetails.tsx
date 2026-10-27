import { AlertTriangle } from "lucide-react";
import { formatDateTime, pluralize } from "@/lib/newsletter/format";
import type { CampaignRow } from "@/lib/newsletter/types";
import { EmailPreview } from "./EmailPreview";
import { CampaignStatusBadge } from "./StatusBadges";

interface Props {
  campaign: CampaignRow;
}

export function CampaignDetails({ campaign }: Props) {
  return (
    <div className="grid gap-8 xl:grid-cols-[320px_1fr]">
      <dl className="h-fit space-y-5 border border-border bg-card p-6 text-sm">
        <Detail label="Status">
          <CampaignStatusBadge status={campaign.status} />
        </Detail>
        <Detail label="Assunto">{campaign.subject}</Detail>
        {campaign.preheader && <Detail label="Pré-cabeçalho">{campaign.preheader}</Detail>}
        <Detail label="Destinatários">
          {pluralize(campaign.recipients_count, "e-mail enviado", "e-mails enviados")}
        </Detail>
        <Detail label="Enviada em">{formatDateTime(campaign.sent_at)}</Detail>
        <Detail label="Criada em">{formatDateTime(campaign.created_at)}</Detail>

        {campaign.error_message && (
          <div className="flex gap-2 border border-red-500/30 bg-red-500/5 p-3 text-xs text-red-600">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>{campaign.error_message}</span>
          </div>
        )}
      </dl>

      <EmailPreview
        subject={campaign.subject}
        preheader={campaign.preheader}
        content={campaign.content}
      />
    </div>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-foreground">{children}</dd>
    </div>
  );
}
