import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Layout do segmento /areas.
 *
 * Funciona apenas como container para as rotas filhas:
 *   - /areas        -> areas.index.tsx (listagem dos núcleos)
 *   - /areas/:slug  -> areas.$slug.tsx (página de cada núcleo)
 */
export const Route = createFileRoute("/areas")({
  component: AreasLayout,
});

function AreasLayout() {
  return <Outlet />;
}
