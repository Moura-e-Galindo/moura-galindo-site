import { supabase } from "./supabase";

// ─── Tipos ────────────────────────────────────────────────────────────────────

/** Linha exata da tabela `noticias` no Supabase. */
export interface NoticiaRow {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  time: string;
  image_url: string | null;
  image_position: string;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

/** Formato usado nos cards (home e listagem). */
export interface NoticiaCard {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  image_url: string | null;
  image_position: string;
  author: string;
}

/** Notícia completa — usada na página individual. `content` é HTML renderizável. */
export interface NoticiaFull extends NoticiaCard {
  content: string;
  published: boolean;
}

// ─── Helpers internos ─────────────────────────────────────────────────────────

function toFull(row: NoticiaRow): NoticiaFull {
  return {
    id: row.id,
    slug: row.slug,
    category: row.category,
    title: row.title,
    excerpt: row.excerpt,
    date: row.date,
    time: row.time.substring(0, 5),
    image_url: row.image_url,
    image_position: row.image_position ?? "50% 50%",
    author: row.author,
    content: row.content,
    published: row.published
  };
}

function toCard(
  row: Pick<
    NoticiaRow,
    "id" | "slug" | "category" | "title" | "excerpt" | "date" | "time" | "image_url" | "image_position" | "author"
  >
): NoticiaCard {
  return {
    ...row,
    time: row.time.substring(0, 5),
    image_position: row.image_position ?? "50% 50%"
  };
}

// ─── API pública (sem autenticação, apenas publicadas) ─────────────────────

/**
 * Retorna as `count` notícias mais recentes (publicadas).
 * Usada na seção de últimas notícias da home.
 */
export async function fetchLatestNoticias(count: number = 3): Promise<NoticiaCard[]> {
  const { data, error } = await supabase
    .from("noticias")
    .select("id, slug, category, title, excerpt, date, time, image_url, image_position, author")
    .eq("published", true)
    .order("date", { ascending: false })
    .order("time", { ascending: false })
    .limit(count);

  if (error) {
    console.error("fetchLatestNoticias:", error.message);
    return [];
  }
  return (data ?? []).map(toCard);
}

/**
 * Retorna todas as notícias publicadas ordenadas por data desc.
 * Usada na página /noticias.
 */
export async function fetchAllNoticias(): Promise<NoticiaCard[]> {
  const { data, error } = await supabase
    .from("noticias")
    .select("id, slug, category, title, excerpt, date, time, image_url, image_position, author")
    .eq("published", true)
    .order("date", { ascending: false })
    .order("time", { ascending: false });

  if (error) {
    console.error("fetchAllNoticias:", error.message);
    return [];
  }
  return (data ?? []).map(toCard);
}

/**
 * Busca uma notícia publicada pelo slug.
 * Retorna null quando não encontrada (dispara 404 no loader).
 */
export async function fetchNoticiaBySlug(slug: string): Promise<NoticiaFull | null> {
  const { data, error } = await supabase
    .from("noticias")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) return null;
  return toFull(data as NoticiaRow);
}

// ─── API admin (requer autenticação via Supabase Auth) ───────────────────────

/** Lista todas as notícias (incluindo rascunhos) para o painel admin. */
export async function fetchAllNoticiasAdmin(): Promise<NoticiaRow[]> {
  const { data, error } = await supabase
    .from("noticias")
    .select("*")
    .order("date", { ascending: false })
    .order("time", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as NoticiaRow[];
}

/** Busca uma notícia pelo ID para edição no admin (inclui rascunhos). */
export async function fetchNoticiaByIdAdmin(id: string): Promise<NoticiaRow | null> {
  const { data, error } = await supabase
    .from("noticias")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !data) return null;
  return data as NoticiaRow;
}

/** Atualiza uma notícia existente. */
export async function updateNoticia(
  id: string,
  input: Partial<Omit<NoticiaRow, "id" | "created_at" | "updated_at">>
): Promise<NoticiaRow> {
  const { data, error } = await supabase
    .from("noticias")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as NoticiaRow;
}

/** Cria uma nova notícia. */
export async function createNoticia(
  input: Omit<NoticiaRow, "id" | "created_at" | "updated_at">
): Promise<NoticiaRow> {
  const { data, error } = await supabase
    .from("noticias")
    .insert(input)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as NoticiaRow;
}

/** Alterna o estado de publicação de uma notícia. */
export async function togglePublished(id: string, published: boolean): Promise<void> {
  const { error } = await supabase
    .from("noticias")
    .update({ published })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

/** Remove uma notícia permanentemente. */
export async function deleteNoticia(id: string): Promise<void> {
  const { error } = await supabase.from("noticias").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

/**
 * Faz upload de uma imagem para o bucket `noticias-imagens`
 * e retorna a URL pública.
 */
export async function uploadNoticiaImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("noticias-imagens")
    .upload(path, file, { upsert: false });

  if (uploadError) throw new Error(uploadError.message);

  const { data } = supabase.storage.from("noticias-imagens").getPublicUrl(path);
  return data.publicUrl;
}
