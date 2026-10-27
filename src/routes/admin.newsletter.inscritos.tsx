import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { AdminError, AdminLoading } from "@/components/newsletter/admin/AdminFeedback";
import { AdminPageHeader } from "@/components/newsletter/admin/AdminPageHeader";
import { SubscriberStatusBadge } from "@/components/newsletter/admin/StatusBadges";
import { deleteSubscriber, fetchSubscribers } from "@/lib/newsletter/admin-api";
import { formatDateTime, pluralize } from "@/lib/newsletter/format";
import type { SubscriberRow, SubscriberStatus } from "@/lib/newsletter/types";

export const Route = createFileRoute("/admin/newsletter/inscritos")({
  component: AdminNewsletterInscritos
});

type Filter = SubscriberStatus | "all";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "confirmed", label: "Confirmados" },
  { value: "pending", label: "Pendentes" },
  { value: "unsubscribed", label: "Descadastrados" }
];

function AdminNewsletterInscritos() {
  const [filter, setFilter] = useState<Filter>("all");
  const [subscribers, setSubscribers] = useState<SubscriberRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSubscribers(null);
    fetchSubscribers(filter === "all" ? undefined : filter)
      .then(setSubscribers)
      .catch((err) => setError(err instanceof Error ? err.message : "Erro ao carregar inscritos."));
  }, [filter]);

  async function handleDelete(subscriber: SubscriberRow) {
    const message = `Remover ${subscriber.email} da lista? Os dados do inscrito serão apagados.`;
    if (!confirm(message)) return;
    try {
      await deleteSubscriber(subscriber.id);
      setSubscribers((prev) => prev?.filter((item) => item.id !== subscriber.id) ?? null);
    } catch {
      alert("Erro ao remover o inscrito.");
    }
  }

  return (
    <>
      <AdminPageHeader
        title="Inscritos"
        subtitle={subscribers ? pluralize(subscribers.length, "registro", "registros") : undefined}
        backTo="/admin/newsletter"
      />

      <div className="mb-6 flex flex-wrap gap-1">
        {FILTERS.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors rounded ${
              filter === item.value
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {error && <AdminError message={error} />}
      {!error && !subscribers && <AdminLoading />}

      {subscribers && subscribers.length === 0 && (
        <div className="border border-border py-20 text-center text-sm text-muted-foreground">
          Nenhum inscrito nesta lista.
        </div>
      )}

      {subscribers && subscribers.length > 0 && (
        <div className="border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <HeaderCell>Inscrito</HeaderCell>
                <HeaderCell>Status</HeaderCell>
                <HeaderCell className="hidden md:table-cell">Inscrição</HeaderCell>
                <HeaderCell className="hidden lg:table-cell">Confirmação</HeaderCell>
                <HeaderCell className="text-right">Ações</HeaderCell>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-4">
                    <span className="font-medium text-foreground">{subscriber.name}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{subscriber.email}</span>
                  </td>
                  <td className="px-4 py-4">
                    <SubscriberStatusBadge status={subscriber.status} />
                  </td>
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground">
                    {formatDateTime(subscriber.created_at)}
                  </td>
                  <td className="hidden lg:table-cell px-4 py-4 text-muted-foreground">
                    {formatDateTime(subscriber.confirmed_at)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleDelete(subscriber)}
                        title="Remover inscrito"
                        className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
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

function HeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground ${className}`}>
      {children}
    </th>
  );
}
