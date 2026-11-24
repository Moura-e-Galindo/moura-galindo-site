import type { ReactNode } from "react";
import { h2Class, ledeClass, ledeEscuroClass, rotuloClaroClass, rotuloClass } from "./classes";

interface Props {
  rotulo: string;
  title: string;
  /** Usa as cores das seções de fundo escuro. */
  escuro?: boolean;
  children?: ReactNode;
}

/** Abertura de seção: rótulo com losango, título e texto de apoio. */
export function SectionIntro({ rotulo, title, escuro = false, children }: Props) {
  return (
    <>
      <p className={escuro ? rotuloClaroClass : rotuloClass}>{rotulo}</p>
      <h2 className={`${h2Class} ${escuro ? "text-white" : ""}`}>{title}</h2>
      {children && <p className={escuro ? ledeEscuroClass : ledeClass}>{children}</p>}
    </>
  );
}
