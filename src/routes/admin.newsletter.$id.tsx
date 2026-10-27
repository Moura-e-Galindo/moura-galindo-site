import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AdminError, AdminLoading } from "@/components/newsletter/admin/AdminFeedback";
import { AdminPageHeader } from "@/components/newsletter/admin/AdminPageHeader";
import { CampaignDetails } from "@/components/newsletter/admin/CampaignDetails";
import { CampaignEditor } from "@/components/newsletter/admin/CampaignEditor";
import { fetchCampaignById, fetchSubscriberCounts } from "@/lib/newsletter/admin-api";
import type { CampaignRow } from "@/lib/newsletter/types";

export const Route = createFileRoute("/admin/newsletter/$id")({
  component: AdminNewsletterCampaign
});

function AdminNewsletterCampaign() {
  const { id } = Route.useParams();
  const [campaign, setCampaign] = useState<CampaignRow | null>(null);
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const [found, counts] = await Promise.all([fetchCampaignById(id), fetchSubscriberCounts()]);
      if (!found) {
        setError("Newsletter não encontrada.");
        return;
      }
      setCampaign(found);
      setConfirmedCount(counts.confirmed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar a newsletter.");
    }
  }, [id]);

  useEffect(() => {
    setCampaign(null);
    load();
  }, [load]);

  if (error) return <AdminError message={error} />;
  if (!campaign) return <AdminLoading />;

  const isDraft = campaign.status === "draft";

  return (
    <>
      <AdminPageHeader
        title={isDraft ? "Editar newsletter" : "Newsletter"}
        backTo="/admin/newsletter"
      />
      {isDraft ? (
        <CampaignEditor
          key={campaign.id}
          campaign={campaign}
          confirmedCount={confirmedCount}
          onSaved={setCampaign}
          onSendFinished={load}
        />
      ) : (
        <CampaignDetails campaign={campaign} />
      )}
    </>
  );
}
