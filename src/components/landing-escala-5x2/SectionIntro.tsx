import type { ReactNode } from "react";
import { eyebrowClass, h2Class, paragraphClass } from "./classes";

interface Props {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

/** Abertura de seção: olho, título e texto de apoio em coluna estreita. */
export function SectionIntro({ eyebrow, title, children }: Props) {
  return (
    <div className="max-w-[62ch]">
      <span className={eyebrowClass}>{eyebrow}</span>
      <h2 className={h2Class}>{title}</h2>
      {children && <p className={paragraphClass}>{children}</p>}
    </div>
  );
}
