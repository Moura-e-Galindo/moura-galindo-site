import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { formatDuracao, getTempoRestante } from "@/lib/ferramentas/availability";
import { formatDataHoraExtenso } from "@/lib/ferramentas/format";
import type { FaseAcesso, FerramentaRow } from "@/lib/ferramentas/types";
import { buildWhatsAppUrl } from "@/lib/contact";

type FaseBloqueada = Exclude<FaseAcesso, "aberta">;

const TEXTOS: Record<FaseBloqueada, { estado: string; texto: string }> = {
  antes: {
    estado: "Acesso ainda não liberado",
    texto: "Esta ferramenta ficará disponível no período indicado abaixo. Guarde este endereço e retorne no horário de liberação."
  },
  encerrada: {
    estado: "Prazo de acesso encerrado",
    texto: "O período de disponibilização desta ferramenta se encerrou. Para solicitar novo acesso ou esclarecer dúvidas, fale com o escritório."
  },
  desativada: {
    estado: "Ferramenta indisponível",
    texto: "Esta ferramenta está temporariamente indisponível. Para solicitar acesso ou esclarecer dúvidas, fale com o escritório."
  }
};

interface Props {
  ferramenta: FerramentaRow;
  fase: FaseBloqueada;
  now: number;
  /** Texto específico da ferramenta para quando o prazo se encerra. */
  mensagemEncerrada?: string;
  rodape?: ReactNode;
}

/** Tela exibida no lugar da ferramenta fora da janela de acesso. */
export function AccessGate({ ferramenta, fase, now, mensagemEncerrada, rodape }: Props) {
  const { estado, texto } = TEXTOS[fase];
  const mensagem = fase === "encerrada" && mensagemEncerrada ? mensagemEncerrada : texto;
  const restante = fase === "antes" ? getTempoRestante(ferramenta, now) : null;
  const mostrarJanela = fase !== "desativada"
    && (ferramenta.available_from || ferramenta.available_until);

  return (
    <div className="mx-auto max-w-xl border border-border border-t-4 border-t-gold bg-card p-8 shadow-elegant md:p-10">
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{estado}</span>
      <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-foreground">
        {ferramenta.title}
      </h2>
      <div className="gold-divider mt-5" />
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">{mensagem}</p>

      {mostrarJanela && (
        <dl className="mt-6 space-y-3 border border-gold/40 bg-gold/10 p-4">
          {ferramenta.available_from && (
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-gold-deep dark:text-gold">
                Liberação
              </dt>
              <dd className="mt-0.5 font-mono text-sm text-foreground">
                {formatDataHoraExtenso(ferramenta.available_from)}
              </dd>
            </div>
          )}
          {ferramenta.available_until && (
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-gold-deep dark:text-gold">
                Encerramento
              </dt>
              <dd className="mt-0.5 font-mono text-sm text-foreground">
                {formatDataHoraExtenso(ferramenta.available_until)}
              </dd>
            </div>
          )}
        </dl>
      )}

      {restante !== null && (
        <p className="mt-4 font-mono text-sm font-semibold text-gold-deep dark:text-gold" aria-live="polite">
          Liberação em {formatDuracao(restante)}.
        </p>
      )}

      {fase !== "antes" && (
        <a
          href={buildWhatsAppUrl(`Olá! Gostaria de solicitar acesso à ferramenta "${ferramenta.title}".`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-wider text-gold-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          <MessageCircle className="h-4 w-4" /> Falar com o escritório
        </a>
      )}

      {rodape && (
        <p className="mt-8 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
          {rodape}
        </p>
      )}
    </div>
  );
}
