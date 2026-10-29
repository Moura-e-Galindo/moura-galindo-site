import type { Aviso } from "@/lib/escala-5x2/types";
import { toneClass } from "./classes";

export function AvisosList({ avisos }: { avisos: Aviso[] }) {
  if (avisos.length === 0) return null;

  return (
    <div className="mt-5 grid gap-2.5">
      {avisos.map((aviso) => {
        const tone = toneClass[aviso.tipo];
        return (
          <div key={aviso.titulo} className={`border p-3 text-sm leading-relaxed text-foreground ${tone.box}`}>
            <b className={`mb-0.5 block text-[13px] font-semibold ${tone.text}`}>{aviso.titulo}</b>
            {aviso.texto}
          </div>
        );
      })}
    </div>
  );
}
