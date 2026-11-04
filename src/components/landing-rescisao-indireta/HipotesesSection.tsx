import { FONTE_CLT, hipoteses, type Hipotese } from "@/data/rescisao-indireta";
import { cn } from "@/lib/utils";
import { PlusIcon } from "./PlusIcon";
import { containerClass, eyebrowClass, focusRing, linkClass, sectionTitleClass, summaryReset } from "./classes";

function HipoteseCard({ hipotese }: { hipotese: Hipotese }) {
  const { destaque } = hipotese;

  return (
    <details
      className={cn(
        "group rounded-2xl border",
        destaque
          ? "border-resc-petroleo bg-resc-petroleo text-white"
          : "border-resc-creme-linha bg-resc-creme"
      )}
    >
      <summary className={cn(summaryReset, "flex min-h-24 items-center gap-3.5 px-5 py-4.5", focusRing)}>
        <span
          className={cn(
            "inline-flex size-10 flex-none items-center justify-center rounded-xl font-playfair font-bold",
            destaque ? "bg-gold text-[16px] text-resc-tinta" : "bg-resc-tinta text-[22px] text-gold"
          )}
        >
          {hipotese.letra}
        </span>
        <span className="flex-1 text-[15px] font-semibold leading-[1.35]">{hipotese.titulo}</span>
        <PlusIcon />
      </summary>
      <p
        className={cn(
          "pr-5 pb-5 pl-[74px] text-[14px] leading-[1.6]",
          destaque ? "text-resc-petroleo-nevoa" : "text-resc-texto"
        )}
      >
        {hipotese.texto}
      </p>
    </details>
  );
}

export function HipotesesSection() {
  return (
    <section id="hipoteses" className="scroll-mt-28 border-t border-resc-linha bg-white">
      <div className={cn(containerClass, "py-20")}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div className="flex min-w-0 max-w-[680px] flex-col gap-2.5">
            <p className={eyebrowClass}>O que diz a lei</p>
            <h2 className={sectionTitleClass}>As hipóteses do art. 483 da CLT</h2>
          </div>
          <p className="text-[15px] text-resc-apoio">Toque em cada letra para ler a previsão legal.</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {hipoteses.map((hipotese) => (
            <HipoteseCard key={hipotese.letra} hipotese={hipotese} />
          ))}
        </div>

        <p className="mt-5 text-[13px] text-resc-apoio">
          Fonte:{" "}
          <a href={FONTE_CLT.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {FONTE_CLT.label}
          </a>
        </p>
      </div>
    </section>
  );
}
