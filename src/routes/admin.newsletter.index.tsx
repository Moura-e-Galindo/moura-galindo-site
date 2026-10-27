import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Eye, Pencil, Plus, Trash2, Users } from "lucide-react";
import { AdminError, AdminLoading } from "@/components/newsletter/admin/AdminFeedback";
import { AdminPageHeader } from "@/components/newsletter/admin/AdminPageHeader";
import { CampaignStatusBadge } from "@/components/newsletter/admin/StatusBadges";
import {
  deleteCampaign,
  fetchCampaigns,
  fetchSubscriberCounts
} from "@/lib/newsletter/admin-api";
import { formatDateTime } from "@/lib/newsletter/format";
import type { CampaignRow, SubscriberCounts } from "@/lib/newsletter/types";

export const Route = createFileRoute("/admin/newsletter/")({
  component: AdminNewsletter
});

function AdminNewsletter() {
  const [campaigns, setCampaigns] = useState<CampaignRow[]>([]);
  const [counts, setCounts] = useState<SubscriberCounts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchCampaigns(), fetchSubscriberCounts()])
      .then(([campaignList, subscriberCounts]) => {
        setCampaigns(campaignList);
        setCounts(subscriberCounts);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Erro ao carregar."))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(campaign: CampaignRow) {
    if (!confirm(`Excluir "${campaign.subject}"? Esta ação não pode ser desfeita.`)) return;
    try {
      await deleteCampaign(campaign.id);
      setCampaigns((prev) => prev.filter((item) => item.id !== campaign.id));
    } catch {
      alert("Erro ao excluir a newsletter.");
    }
  }

  if (loading) return <AdminLoading />;
  if (error || !counts) return <AdminError message={error ?? "Erro ao carregar."} />;

  return (
    <>
      <AdminPageHeader
        title="Newsletter"
        subtitle="Monte e envie e-mails para os inscritos confirmados."
        actions={
          <>
            <Link
              to="/admin/newsletter/inscritos"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <Users className="h-3.5 w-3.5" /> Inscritos
            </Link>
            <Link
              to="/admin/newsletter/nova"
              className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Plus className="h-3.5 w-3.5" /> Nova newsletter
            </Link>
          </>
        }
      />

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <StatCard label="Confirmados" value={counts.confirmed} highlight />
        <StatCard label="Aguardando confirmação" value={counts.pending} />
        <StatCard label="Descadastrados" value={counts.unsubscribed} />
      </div>

      {campaigns.length === 0 ? (
        <div className="border border-border py-20 text-center">
          <p className="text-sm text-muted-foreground">Nenhuma newsletter criada ainda.</p>
          <Link
            to="/admin/newsletter/nova"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            <Plus className="h-4 w-4" /> Criar a primeira
          </Link>
        </div>
      ) : (
        <div className="border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <HeaderCell>Assunto</HeaderCell>
                <HeaderCell>Status</HeaderCell>
                <HeaderCell className="hidden md:table-cell">Destinatários</HeaderCell>
                <HeaderCell className="hidden md:table-cell">Data</HeaderCell>
                <HeaderCell className="text-right">Ações</HeaderCell>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-4">
                    <span className="font-medium text-foreground line-clamp-1">{campaign.subject}</span>
                  </td>
                  <td className="px-4 py-4">
                    <CampaignStatusBadge status={campaign.status} />
                  </td>
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground">
                    {campaign.status === "draft" ? "—" : campaign.recipients_count}
                  </td>
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground">
                    {formatDateTime(campaign.sent_at ?? campaign.updated_at)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to="/admin/newsletter/$id"
                        params={{ id: campaign.id }}
                        title={campaign.status === "draft" ? "Editar" : "Visualizar"}
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {campaign.status === "draft" ? <Pencil className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Link>
                      {(campaign.status === "draft" || campaign.status === "failed") && (
                        <button
                          onClick={() => handleDelete(campaign)}
                          title="Excluir"
                          className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  highlight?: boolean;
}

function StatCard({ label, value, highlight = false }: StatCardProps) {
  return (
    <div className="border border-border bg-card p-5">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`mt-2 font-serif text-4xl font-medium ${highlight ? "text-gold" : "text-foreground"}`}>
        {value}
      </p>
    </div>
  );
}

function HeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground ${className}`}>
      {children}
    </th>
  );
}
