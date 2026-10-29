import type { ReactNode } from "react";
import { panelClass, panelTitleClass } from "./classes";

interface Props {
  title: string;
  children: ReactNode;
}

export function Panel({ title, children }: Props) {
  return (
    <section className={panelClass}>
      <h2 className={panelTitleClass}>{title}</h2>
      {children}
    </section>
  );
}
