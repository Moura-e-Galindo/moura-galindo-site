import { useEscala5x2 } from "@/hooks/use-escala-5x2";
import { ApuracaoPanel } from "./ApuracaoPanel";
import { HorariosPanel } from "./HorariosPanel";
import { MetodologiaPanel } from "./MetodologiaPanel";
import { ParametrosPanel } from "./ParametrosPanel";
import { SemanaPanel } from "./SemanaPanel";

/**
 * Calculadora da escala 5x2 (EC 141/2026): parâmetros e ponto da semana à
 * esquerda, apuração à direita; coluna única em telas menores.
 */
export function Calculadora5x2() {
  const { parametros, semana, apuracao, ...actions } = useEscala5x2();

  return (
    <>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-6">
          <ParametrosPanel
            parametros={parametros}
            onChange={actions.atualizarParametros}
            onEtapaChange={actions.alterarEtapa}
          />
          <SemanaPanel semana={semana} actions={actions} />
          <HorariosPanel semana={semana} />
        </div>

        <div className="min-w-0 space-y-6 lg:sticky lg:top-28">
          <ApuracaoPanel apuracao={apuracao} />
          <MetodologiaPanel />
        </div>
      </div>

      <p className="mt-10 border-t-2 border-gold pt-5 text-xs leading-relaxed text-muted-foreground">
        <strong className="font-semibold text-foreground">Assessoria Jurídica Trabalhista.</strong>{" "}
        Ferramenta de apoio ao planejamento de escalas. Os resultados são estimativas e não
        substituem a análise do caso concreto nem a convenção coletiva aplicável à categoria.
      </p>
    </>
  );
}
