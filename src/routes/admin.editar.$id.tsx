import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useRef, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fetchNoticiaByIdAdmin,
  updateNoticia,
  uploadNoticiaImage,
  type NoticiaRow
} from "@/lib/noticias-api";
import { FocalPointPicker, type FocalPoint } from "@/components/FocalPointPicker";
import { RichTextEditor } from "@/components/RichTextEditor";
import { ImagePlus, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/admin/editar/$id")({
  component: AdminEditar
});

const CATEGORIAS = [
  "Tributário",
  "Empresarial",
  "LGPD",
  "Trabalhista",
  "Penal Empresarial",
  "Civil",
  "Imobiliário",
  "Família e Sucessões",
  "Previdenciário",
  "Contratual",
  "Moda",
  "Geral"
] as const;

const schema = z.object({
  title: z.string().min(5, "Título muito curto"),
  slug: z
    .string()
    .min(3, "Slug inválido")
    .regex(/^[a-z0-9-]+$/, "Apenas letras minúsculas, números e hífens"),
  category: z.string().min(1, "Selecione uma categoria"),
  author: z.string().min(2, "Nome do autor obrigatório"),
  date: z.string().min(1, "Data obrigatória"),
  time: z.string().min(1, "Hora obrigatória"),
  excerpt: z.string().min(20, "Resumo muito curto (mínimo 20 caracteres)"),
  content: z.string(),
  published: z.boolean()
});

type FormData = z.infer<typeof schema>;
type ImageMode = "keep" | "replace" | "remove";

function parseFocal(pos: string): FocalPoint {
  const parts = pos.replace(/%/g, "").split(" ");
  return {
    x: Math.max(0, Math.min(100, parseInt(parts[0] ?? "50", 10))),
    y: Math.max(0, Math.min(100, parseInt(parts[1] ?? "50", 10)))
  };
}

// ─── Formulário ───────────────────────────────────────────────────────────────

function AdminEditar() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [noticia, setNoticia] = useState<NoticiaRow | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  // "keep" = manter existente, "replace" = nova, "remove" = sem imagem
  const [imageMode, setImageMode] = useState<ImageMode>("keep");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [focal, setFocal] = useState<FocalPoint>({ x: 50, y: 50 });

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  // Carrega a notícia e preenche o formulário
  useEffect(() => {
    fetchNoticiaByIdAdmin(id)
      .then((data) => {
        if (!data) {
          setLoadError("Notícia não encontrada.");
          return;
        }
        setNoticia(data);

        reset({
          title: data.title,
          slug: data.slug,
          category: data.category,
          author: data.author,
          date: data.date,
          time: data.time.substring(0, 5),
          excerpt: data.excerpt,
          content: data.content,
          published: data.published
        });

        if (data.image_url) {
          setImagePreview(data.image_url);
          setFocal(parseFocal(data.image_position));
          setImageMode("keep");
        }
      })
      .catch(() => {
        setLoadError("Erro ao carregar a notícia.");
      });
  }, [id, reset]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setFocal({ x: 50, y: 50 });
    setImageMode("replace");
  }

  function handleRemoveImage() {
    setImageFile(null);
    setImagePreview(null);
    setFocal({ x: 50, y: 50 });
    setImageMode("remove");
  }

  function handleRestoreImage() {
    if (noticia?.image_url) {
      setImagePreview(noticia.image_url);
      setFocal(parseFocal(noticia.image_position));
      setImageMode("keep");
    }
  }

  const handleFocalChange = useCallback((f: FocalPoint) => setFocal(f), []);

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setServerError(null);

    try {
      let image_url: string | null | undefined = undefined;
      let image_position: string | undefined = undefined;

      if (imageMode === "replace" && imageFile) {
        image_url = await uploadNoticiaImage(imageFile);
        image_position = `${focal.x}% ${focal.y}%`;
      } else if (imageMode === "remove") {
        image_url = null;
        image_position = "50% 50%";
      } else {
        // keep — atualiza apenas ponto focal
        image_position = `${focal.x}% ${focal.y}%`;
      }

      await updateNoticia(id, {
        slug: data.slug,
        category: data.category,
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        date: data.date,
        time: data.time,
        ...(image_url !== undefined ? { image_url } : {}),
        ...(image_position !== undefined ? { image_position } : {}),
        author: data.author,
        published: data.published
      });

      navigate({ to: "/admin" });
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Erro ao salvar a notícia.");
      setSubmitting(false);
    }
  }

  if (loadError) {
    return (
      <div className="py-20 text-center text-sm text-destructive">{loadError}</div>
    );
  }

  if (!noticia) {
    return (
      <div className="py-20 text-center text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
        Carregando...
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate({ to: "/admin" })}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Voltar
        </button>
        <h1 className="font-serif text-3xl font-medium text-foreground">Editar Notícia</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 lg:grid-cols-3">
        {/* ── Coluna principal ── */}
        <div className="lg:col-span-2 space-y-6">
          {/* Título */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
              Título *
            </label>
            <input
              {...register("title")}
              className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
              placeholder="Título da notícia"
            />
            {errors.title && (
              <p className="mt-1 text-xs text-destructive">{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
              Slug (URL) *
            </label>
            <input
              {...register("slug")}
              className="w-full border border-border bg-muted px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
              placeholder="meu-artigo-juridico"
            />
            <p className="mt-1 text-[10px] text-muted-foreground">
              /noticias/
              <span className="text-foreground">{watch("slug") || "slug-da-noticia"}</span>
            </p>
            {errors.slug && (
              <p className="mt-1 text-xs text-destructive">{errors.slug.message}</p>
            )}
          </div>

          {/* Resumo */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
              Resumo *
            </label>
            <textarea
              {...register("excerpt")}
              rows={3}
              className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors resize-y"
              placeholder="Resumo curto exibido nos cards de notícia..."
            />
            {errors.excerpt && (
              <p className="mt-1 text-xs text-destructive">{errors.excerpt.message}</p>
            )}
          </div>

          {/* Conteúdo */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
              Conteúdo completo
            </label>
            <p className="mb-2 text-[10px] text-muted-foreground">
              Selecione o texto e use a barra de ferramentas para formatar ou inserir links.
            </p>
            {/* key força re-mount do editor com o conteúdo correto após carregar */}
            <RichTextEditor
              key={noticia.id}
              initialValue={noticia.content}
              onChange={(html) => setValue("content", html)}
              minHeight="320px"
            />
            {errors.content && (
              <p className="mt-1 text-xs text-destructive">{errors.content.message}</p>
            )}
          </div>
        </div>

        {/* ── Coluna lateral ── */}
        <div className="space-y-6">
          {/* Imagem de capa + Ponto focal */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
              Imagem de capa
            </label>

            {imagePreview ? (
              <>
                <FocalPointPicker
                  src={imagePreview}
                  focal={focal}
                  onChange={handleFocalChange}
                />
                <div className="mt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Trocar imagem
                  </button>
                  <span className="text-muted-foreground/40">·</span>
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                  >
                    Remover
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex w-full aspect-[16/10] flex-col items-center justify-center gap-2 border-2 border-dashed border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                >
                  <ImagePlus className="h-8 w-8" />
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Selecionar imagem
                  </span>
                  <span className="text-[10px]">JPG, PNG, WebP · Máx. 5 MB</span>
                </button>
                {noticia.image_url && imageMode === "remove" && (
                  <button
                    type="button"
                    onClick={handleRestoreImage}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ↩ Restaurar imagem original
                  </button>
                )}
              </div>
            )}

            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageChange}
              className="sr-only"
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
              Categoria *
            </label>
            <select
              {...register("category")}
              className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors"
            >
              <option value="">Selecione...</option>
              {CATEGORIAS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-destructive">{errors.category.message}</p>
            )}
          </div>

          {/* Autor */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
              Autor *
            </label>
            <input
              {...register("author")}
              className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
              placeholder="Nome do advogado(a)"
            />
            {errors.author && (
              <p className="mt-1 text-xs text-destructive">{errors.author.message}</p>
            )}
          </div>

          {/* Data e Hora */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                Data *
              </label>
              <input
                type="date"
                {...register("date")}
                className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors"
              />
              {errors.date && (
                <p className="mt-1 text-xs text-destructive">{errors.date.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                Hora *
              </label>
              <input
                type="time"
                {...register("time")}
                className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors"
              />
              {errors.time && (
                <p className="mt-1 text-xs text-destructive">{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* Publicar */}
          <div className="flex items-center gap-3 border border-border p-4">
            <input
              type="checkbox"
              id="published"
              {...register("published")}
              className="h-4 w-4 accent-gold"
            />
            <label htmlFor="published" className="text-sm font-medium text-foreground cursor-pointer">
              Publicada
            </label>
          </div>

          {serverError && (
            <p className="bg-destructive/10 px-4 py-3 text-xs text-destructive">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-foreground px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-background transition-all hover:bg-gold hover:text-gold-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Salvando..." : "Salvar alterações"}
          </button>
        </div>
      </form>
    </>
  );
}
