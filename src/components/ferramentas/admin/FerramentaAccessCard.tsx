import { useState, type FormEvent } from "react";
import { ExternalLink } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { updateJanelaAcesso } from "@/lib/ferramentas/admin-api";
import { getFerramentaPath } from "@/lib/ferramentas/api";
import { formatDuracao, getFaseAcesso, getTempoRestante } from "@/lib/ferramentas/availability";
import { fromBrasiliaInputValue, toBrasiliaInputValue } from "@/lib/ferramentas/format";
import type { FerramentaRow, JanelaAcesso } from "@/lib/ferramentas/types";
import { AccessStatusBadge } from "./AccessStatusBadge";

const UM_DIA_MS = 24 * 60 * 60 * 1000;

const labelClass = "block text-xs font-medium uppercase tracking-wider text-foreground mb-2";
const inputClass =
  "w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors dark:[color-scheme:dark]";
const linkButtonClass =
  "text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors";

interface Props {
  ferramenta: FerramentaRow;
  now: number;
  onSaved: (ferramenta: FerramentaRow) => void;
}

/** Cartão do painel para definir por quanto tempo uma ferramenta fica disponível. */
export function FerramentaAccessCard({ ferramenta, now, onSaved }: Props) {
  const [enabled, setEnabled] = useState(ferramenta.enabled);
  const [inicio, setInicio] = useState(toBrasiliaInputValue(ferramenta.available_from));
  const [fim, setFim] = useState(toBrasiliaInputValue(ferramenta.available_until));
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ tipo: "ok" | "erro"; texto: string } | null>(null);

  const fase = getFaseAcesso(ferramenta, now);
  const restante = getTempoRestante(ferramenta, now);
  const agoraInput = () => toBrasiliaInputValue(new Date().toISOString());

  function prorrogarUmDia() {
    const base = Math.max(Date.parse(fromBrasiliaInputValue(fim) ?? "") || 0, Date.now());
    setFim(toBrasiliaInputValue(new Date(base + UM_DIA_MS).toISOString()));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFeedback(null);

    const janela: JanelaAcesso = {
      enabled,
      available_from: fromBrasiliaInputValue(inicio),
      available_until: fromBrasiliaInputValue(fim)
    };

    if (
      janela.available_from
      && janela.available_until
      && Date.parse(janela.available_until) <= Date.parse(janela.available_from)
    ) {
      setFeedback({ tipo: "erro", texto: "O encerramento precisa ser posterior à liberação." });
      return;
    }

    setSaving(true);
    try {
      const salva = await updateJanelaAcesso(ferramenta.slug, janela);
      onSaved(salva);
      setFeedback({ tipo: "ok", texto: "Janela de acesso salva." });
    } catch (err) {
      setFeedback({
        tipo: "erro",
        texto: err instanceof Error ? err.message : "Erro ao salvar a janela de acesso."
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-serif text-xl font-medium text-foreground">{ferramenta.title}</h2>
            <AccessStatusBadge fase={fase} />
          </div>
          {ferramenta.description && (
            <p className="mt-1 text-sm text-muted-foreground">{ferramenta.description}</p>
          )}
          {restante !== null && (
            <p className="mt-2 text-xs text-muted-foreground">
              {fase === "antes" ? "Liberação em " : "Encerra em "}
              <span className="font-medium text-foreground">{formatDuracao(restante)}</span>
            </p>
          )}
        </div>
        <a
          href={getFerramentaPath(ferramenta.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" /> Ver no site
        </a>
      </div>

      <div className="mt-6 flex items-center gap-3 border-y border-border py-4">
        <Switch
          id={`${ferramenta.slug}-enabled`}
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <label htmlFor={`${ferramenta.slug}-enabled`} className="text-sm text-foreground cursor-pointer">
          {enabled ? "Ativa — segue a janela abaixo" : "Desativada — bloqueada para o público"}
        </label>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor={`${ferramenta.slug}-inicio`} className={labelClass}>Liberação</label>
          <input
            id={`${ferramenta.slug}-inicio`}
            type="datetime-local"
            value={inicio}
            onChange={(event) => setInicio(event.target.value)}
            className={inputClass}
          />
          <div className="mt-2 flex gap-4">
            <button type="button" onClick={() => setInicio(agoraInput())} className={linkButtonClass}>
              Liberar agora
            </button>
            <button type="button" onClick={() => setInicio("")} className={linkButtonClass}>
              Sem data
            </button>
          </div>
        </div>

        <div>
          <label htmlFor={`${ferramenta.slug}-fim`} className={labelClass}>Encerramento</label>
          <input
            id={`${ferramenta.slug}-fim`}
            type="datetime-local"
            value={fim}
            onChange={(event) => setFim(event.target.value)}
            className={inputClass}
          />
          <div className="mt-2 flex gap-4">
            <button type="button" onClick={() => setFim(agoraInput())} className={linkButtonClass}>
              Encerrar agora
            </button>
            <button type="button" onClick={prorrogarUmDia} className={linkButtonClass}>
              +24h
            </button>
            <button type="button" onClick={() => setFim("")} className={linkButtonClass}>
              Sem data
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[11px] text-muted-foreground">
        Horário de Brasília. Sem data de liberação, a ferramenta fica disponível de imediato; sem
        data de encerramento, fica disponível por tempo indeterminado.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-gold-foreground disabled:opacity-50"
        >
          {saving ? "Salvando..." : "Salvar"}
        </button>
        {feedback && (
          <span
            className={`text-xs ${feedback.tipo === "ok" ? "text-green-600" : "text-destructive"}`}
            role="status"
          >
            {feedback.texto}
          </span>
        )}
      </div>
    </form>
  );
}
