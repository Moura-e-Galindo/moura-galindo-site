import { Panel } from "./Panel";

const ITENS: ReadonlyArray<{ titulo: string; texto: string }> = [
  {
    titulo: "Jornada diária.",
    texto: "Saída menos entrada, descontado o intervalo intrajornada. Informando a jornada, a saída é sugerida pelo caminho inverso."
  },
  {
    titulo: "Teto semanal.",
    texto: "44h até 15/12/2026, 42h a partir dessa data e 40h a partir de 16/12/2027, conforme o art. 6º da Emenda."
  },
  {
    titulo: "Teto aplicável.",
    texto: "Na primeira etapa, sem norma coletiva que amplie a jornada diária, a semana fica limitada a 40h, porque cinco dias de oito horas não alcançam 42h. O excedente é tratado como hora extraordinária."
  },
  {
    titulo: "Limite diário.",
    texto: "Oito horas, pelo inciso XIII do art. 7º da Constituição. Na primeira etapa, o art. 7º da Emenda permite ampliá-lo por convenção ou acordo coletivo. Na segunda, a ampliação depende de regime de compensação, também coletivo."
  },
  {
    titulo: "Repousos.",
    texto: "Dois dias por semana, pelo inciso XV. O § 2º do art. 7º admite semana com um único repouso, desde que a média de dois seja assegurada dentro do mês-calendário e nunca haja semana sem repouso."
  },
  {
    titulo: "Divisor mensal.",
    texto: "Jornada normal semanal dividida por seis e multiplicada por trinta: 220 para 44h, 210 para 42h e 200 para 40h."
  },
  {
    titulo: "Horas extras.",
    texto: "O excedente semanal é convertido em mensal pelo fator 30/7. O limite de duas horas suplementares por dia é o do art. 59 da CLT."
  },
  {
    titulo: "Repouso sobre horas extras.",
    texto: "Valor das extras dividido pelos dias úteis do mês e multiplicado pelos dias de repouso, na forma da Lei 605 de 1949."
  }
];

export function MetodologiaPanel() {
  return (
    <Panel title="Como a verificação é feita">
      <div className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
        {ITENS.map((item) => (
          <p key={item.titulo}>
            <strong className="font-semibold text-foreground">{item.titulo}</strong> {item.texto}
          </p>
        ))}
      </div>
    </Panel>
  );
}
