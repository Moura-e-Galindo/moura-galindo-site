import logoHorizontal from "@/assets/escala-5x2/logo-horizontal-negativo.webp";
import { ATUALIZADO_EM } from "@/data/escala-5x2";
import { containerClass } from "./classes";

export function RodapeSection() {
  return (
    <footer className="bg-black pt-10 pb-11.5 text-[13.5px] text-trab-rodape-texto">
      <div className={containerClass}>
        <img
          src={logoHorizontal}
          alt="Moura & Galindo Advogados Associados"
          width={763}
          height={130}
          loading="lazy"
          className="mb-5.5 h-14.5 w-auto"
        />
        <p className="mb-2">
          <b className="font-medium text-trab-rodape-destaque">Moura &amp; Galindo Advogados Associados</b>{" "}
          · Avenida Aracati, 382, bairro Universitário, Caruaru, Pernambuco.
        </p>
        <p>
          Conteúdo de caráter informativo, elaborado pelo Núcleo Trabalhista Empresarial. Não
          substitui a análise do caso concreto nem a leitura da convenção coletiva aplicável à
          atividade.
        </p>
        <p className="mt-4.5 border-t border-trab-linha-escura pt-4">
          Informações atualizadas em{" "}
          <b className="font-medium text-trab-rodape-destaque">{ATUALIZADO_EM}</b>. A regulamentação
          da Emenda Constitucional nº 141/2026 segue em edição, e esta página é revista a cada nova
          publicação.
        </p>
      </div>
    </footer>
  );
}
