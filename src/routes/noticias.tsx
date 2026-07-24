import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Layout do segmento /noticias.
 *
 * Funciona apenas como container para as rotas filhas:
 *   - /noticias        -> noticias.index.tsx (listagem das notícias)
 *   - /noticias/:slug  -> noticias.$slug.tsx (página de cada notícia)
 */
export const Route = createFileRoute("/noticias")({
  component: NoticiasLayout
});

function NoticiasLayout() {
  return <Outlet />;
}
