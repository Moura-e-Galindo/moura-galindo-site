import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminError, AdminLoading } from "@/components/newsletter/admin/AdminFeedback";
import { AdminPageHeader } from "@/components/newsletter/admin/AdminPageHeader";
import { CampaignEditor } from "@/components/newsletter/admin/CampaignEditor";
import { fetchSubscriberCounts } from "@/lib/newsletter/admin-api";

export const Route = createFileRoute("/admin/newsletter/nova")({
  component: AdminNewsletterNova
});

function AdminNewsletterNova() {
  const navigate = useNavigate();
  const [confirmedCount, setConfirmedCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubscriberCounts()
      .then((counts) => setConfirmedCount(counts.confirmed))
      .catch((err) => setError(err instanceof Error ? err.message : "Erro ao carregar."));
  }, []);

  if (error) return <AdminError message={error} />;
  if (confirmedCount === null) return <AdminLoading />;

  return (
    <>
      <AdminPageHeader title="Nova newsletter" backTo="/admin/newsletter" />
      <CampaignEditor
        confirmedCount={confirmedCount}
        onSaved={(campaign) =>
          navigate({ to: "/admin/newsletter/$id", params: { id: campaign.id }, replace: true })
        }
        onSendFinished={(id) =>
          navigate({ to: "/admin/newsletter/$id", params: { id }, replace: true })
        }
      />
    </>
  );
}
