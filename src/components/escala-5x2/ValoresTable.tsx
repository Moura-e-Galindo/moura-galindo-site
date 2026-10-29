interface Linha {
  rotulo: string;
  valor: string;
}

interface Props {
  linhas: Linha[];
  total: Linha;
}

/** Tabela de valores com uma linha de somatório em destaque. */
export function ValoresTable({ linhas, total }: Props) {
  return (
    <table className="w-full text-sm">
      <tbody>
        {linhas.map((linha) => (
          <tr key={linha.rotulo} className="border-b border-border">
            <td className="py-2 pr-2 text-foreground">{linha.rotulo}</td>
            <td className="py-2 text-right font-mono tabular-nums text-foreground">{linha.valor}</td>
          </tr>
        ))}
        <tr>
          <td className="pt-3 pr-2 text-base font-semibold text-foreground">{total.rotulo}</td>
          <td className="pt-3 text-right font-mono text-base font-semibold tabular-nums text-gold-deep dark:text-gold">
            {total.valor}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
