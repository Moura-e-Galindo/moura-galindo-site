import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { fetchAllNoticiasAdmin, togglePublished, deleteNoticia, type NoticiaRow } from "@/lib/noticias-api";
import { formatNoticiaDate } from "@/lib/format-date";
import { Plus, Trash2, Eye, EyeOff, ExternalLink, Pencil } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminIndex
});

function AdminIndex() {
  const [noticias, setNoticias] = useState<NoticiaRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try {
      const data = await fetchAllNoticiasAdmin();
      setNoticias(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar notícias.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleToggle(id: string, current: boolean) {
    try {
      await togglePublished(id, !current);
      setNoticias((prev) =>
        prev.map((n) => (n.id === id ? { ...n, published: !current } : n))
      );
    } catch {
      alert("Erro ao alterar status da notícia.");
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Excluir "${title}"? Esta ação não pode ser desfeita.`)) return;
    try {
      await deleteNoticia(id);
      setNoticias((prev) => prev.filter((n) => n.id !== id));
    } catch {
      alert("Erro ao excluir a notícia.");
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
        Carregando...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-sm text-destructive">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="font-serif text-3xl font-medium text-foreground">Notícias</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {noticias.length} registro{noticias.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          to="/admin/nova"
          className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          <Plus className="h-3.5 w-3.5" /> Nova notícia
        </Link>
      </div>

      {noticias.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-sm text-muted-foreground">Nenhuma notícia cadastrada ainda.</p>
          <Link
            to="/admin/nova"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            <Plus className="h-4 w-4" /> Cadastrar primeira notícia
          </Link>
        </div>
      ) : (
        <div className="border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Título
                </th>
                <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Categoria
                </th>
                <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Data
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {noticias.map((n) => (
                <tr key={n.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-4">
                    <span className="font-medium text-foreground line-clamp-1">{n.title}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{n.slug}</span>
                  </td>
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground">
                    {n.category}
                  </td>
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground">
                    {formatNoticiaDate(n.date)}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleToggle(n.id, n.published)}
                      title={n.published ? "Publicada — clique para despublicar" : "Rascunho — clique para publicar"}
                      className={`inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider transition-colors ${
                        n.published
                          ? "bg-green-500/10 text-green-600 hover:bg-red-500/10 hover:text-red-600"
                          : "bg-muted text-muted-foreground hover:bg-green-500/10 hover:text-green-600"
                      }`}
                    >
                      {n.published ? (
                        <><Eye className="h-3 w-3" /> Publicada</>
                      ) : (
                        <><EyeOff className="h-3 w-3" /> Rascunho</>
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {n.published && (
                        <a
                          href={`/noticias/${n.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver no site"
                          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <Link
                        to="/admin/editar/$id"
                        params={{ id: n.id }}
                        title="Editar notícia"
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(n.id, n.title)}
                        title="Excluir notícia"
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
