import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminError, AdminLoading } from "@/components/newsletter/admin/AdminFeedback";
import { AdminPageHeader } from "@/components/newsletter/admin/AdminPageHeader";
import { FerramentaAccessCard } from "@/components/ferramentas/admin/FerramentaAccessCard";
import { useNow } from "@/hooks/use-now";
import { fetchFerramentasAdmin } from "@/lib/ferramentas/admin-api";
import type { FerramentaRow } from "@/lib/ferramentas/types";

export const Route = createFileRoute("/admin/ferramentas")({
  component: AdminFerramentas
});

function AdminFerramentas() {
  const [ferramentas, setFerramentas] = useState<FerramentaRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const now = useNow(30_000, Date.now());

  useEffect(() => {
    fetchFerramentasAdmin()
      .then(setFerramentas)
      .catch((err) => setError(err instanceof Error ? err.message : "Erro ao carregar."))
      .finally(() => setLoading(false));
  }, []);

  function handleSaved(salva: FerramentaRow) {
    setFerramentas((prev) => prev.map((item) => (item.slug === salva.slug ? salva : item)));
  }

  if (loading) return <AdminLoading />;
  if (error) return <AdminError message={error} />;

  return (
    <>
      <AdminPageHeader
        title="Ferramentas"
        subtitle="Defina por quanto tempo cada ferramenta fica disponível no site."
      />

      {ferramentas.length === 0 ? (
        <div className="border border-border py-20 text-center">
          <p className="text-sm text-muted-foreground">Nenhuma ferramenta cadastrada.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {ferramentas.map((ferramenta) => (
            <FerramentaAccessCard
              key={ferramenta.slug}
              ferramenta={ferramenta}
              now={now}
              onSaved={handleSaved}
            />
          ))}
        </div>
      )}
    </>
  );
}
