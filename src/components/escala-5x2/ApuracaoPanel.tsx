import { formatBRL, formatHm } from "@/lib/escala-5x2/format";
import type { Apuracao } from "@/lib/escala-5x2/types";
import { getExplicacaoTeto, getNotaRepouso, getVeredito } from "@/lib/escala-5x2/veredito";
import { AvisosList } from "./AvisosList";
import { Panel } from "./Panel";
import { StatBox } from "./StatBox";
import { ValoresTable } from "./ValoresTable";
import { VereditoBox } from "./VereditoBox";
import { helpClass, subtitleClass } from "./classes";

export function ApuracaoPanel({ apuracao }: { apuracao: Apuracao }) {
  const percentualAdicional = Math.round(apuracao.adicional * 100);
  const divisor = apuracao.divisor ? String(Math.round(apuracao.divisor)) : "—";
  const custoComHoraExtra = apuracao.custoHorasExtras + apuracao.custoRepouso;

  return (
    <Panel title="Apuração">
      <VereditoBox veredito={getVeredito(apuracao)} />

      <p className="mb-4 border border-border bg-background px-3.5 py-2.5 text-sm leading-relaxed text-muted-foreground">
        <b className="font-semibold text-foreground">
          Teto aplicável: {apuracao.tetoAplicavel}h por semana.{" "}
        </b>
        {getExplicacaoTeto(apuracao)}
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        <StatBox
          value={apuracao.totalMin ? formatHm(apuracao.totalMin) : "—"}
          label="total de horas na semana"
        />
        <StatBox value={formatHm(apuracao.excedenteSemanal)} label="horas extras na semana" highlight />
        <StatBox
          value={formatBRL(apuracao.valorHora)}
          label={`valor da hora normal (divisor ${divisor})`}
        />
        <StatBox
          value={formatBRL(apuracao.valorHoraExtra)}
          label={`valor da hora extra (${percentualAdicional}%)`}
          highlight
        />
        <StatBox value={String(apuracao.repousos)} label="dias de repouso" />
        <StatBox value={formatHm(apuracao.horasExtrasMesMin)} label="horas extras no mês" highlight />
      </div>

      <h3 className={subtitleClass}>Custo mensal</h3>
      <ValoresTable
        linhas={[
          { rotulo: "Salário contratual", valor: formatBRL(apuracao.salario) },
          {
            rotulo: `Horas extras no mês (${formatHm(apuracao.horasExtrasMesMin)})`,
            valor: formatBRL(apuracao.custoHorasExtras)
          },
          { rotulo: "Repouso sobre as horas extras", valor: formatBRL(apuracao.custoRepouso) }
        ]}
        total={{ rotulo: "Total", valor: formatBRL(apuracao.total) }}
      />
      <p className={helpClass}>{getNotaRepouso(apuracao)}</p>

      <h3 className={subtitleClass}>Comparação das formas de reposição</h3>
      <ValoresTable
        linhas={[
          { rotulo: "Repondo com hora extra", valor: formatBRL(custoComHoraExtra) },
          { rotulo: "Repondo com contratação", valor: formatBRL(apuracao.reposicaoContratacao) }
        ]}
        total={{
          rotulo: "Diferença no mês",
          valor: formatBRL(custoComHoraExtra - apuracao.reposicaoContratacao)
        }}
      />
      <p className={helpClass}>
        A reposição por contratação considera as mesmas horas remuneradas sem adicional e sem
        reflexo no repouso. Não inclui encargos, que incidem proporcionalmente sobre as duas
        hipóteses.
      </p>

      <AvisosList avisos={apuracao.avisos} />
    </Panel>
  );
}
