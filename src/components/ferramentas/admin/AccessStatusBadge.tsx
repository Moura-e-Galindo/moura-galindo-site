import type { FaseAcesso } from "@/lib/ferramentas/types";

const BASE_CLASS =
  "inline-flex items-center px-2 py-1 text-[10px] font-medium uppercase tracking-wider";

const FASES: Record<FaseAcesso, { label: string; className: string }> = {
  aberta: { label: "Disponível", className: "bg-green-500/10 text-green-600" },
  antes: { label: "Agendada", className: "bg-gold/15 text-gold" },
  encerrada: { label: "Encerrada", className: "bg-muted text-muted-foreground" },
  desativada: { label: "Desativada", className: "bg-red-500/10 text-red-600" }
};

export function AccessStatusBadge({ fase }: { fase: FaseAcesso }) {
  const { label, className } = FASES[fase];
  return <span className={`${BASE_CLASS} ${className}`}>{label}</span>;
}
