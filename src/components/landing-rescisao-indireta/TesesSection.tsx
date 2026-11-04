import {
  FONTE_TST,
  precedentes,
  teses,
  type Precedente,
  type Tese,
  type TomPrecedente,
  type TomTese
} from "@/data/rescisao-indireta";
import { cn } from "@/lib/utils";
import { PlusIcon } from "./PlusIcon";
import { SectionHeading } from "./SectionHeading";
import {
  containerClass,
  focusRing,
  focusRingDark,
  linkClass,
  linkDarkClass,
  summaryReset
} from "./classes";

const tomTese: Record<
  TomTese,
  { card: string; selo: string; icone: string; tema: string; referencia: string; escuro: boolean }
> = {
  ouro: {
    card: "bg-gold text-resc-tinta",
    selo: "bg-resc-tinta text-white",
    icone: "text-resc-tinta",
    tema: "",
    referencia: "",
    escuro: false
  },
  petroleo: {
    card: "bg-resc-petroleo text-white",
    selo: "bg-gold text-resc-tinta",
    icone: "text-white",
    tema: "",
    referencia: "text-resc-petroleo-nevoa",
    escuro: true
  },
  tinta: {
    card: "bg-resc-tinta text-white",
    selo: "bg-white text-resc-tinta",
    icone: "text-gold",
    tema: "text-gold",
    referencia: "text-resc-apoio-escuro",
    escuro: true
  }
};

const tomPrecedente: Record<
  TomPrecedente,
  { card: string; rotulo: string; texto: string; link: string }
> = {
  vigente: {
    card: "border-resc-petroleo-linha bg-resc-petroleo-fundo",
    rotulo: "text-resc-petroleo",
    texto: "text-resc-petroleo-texto",
    link: "text-resc-petroleo"
  },
  pendente: {
    card: "border-resc-terracota-linha bg-resc-terracota-fundo",
    rotulo: "text-resc-terracota",
    texto: "text-resc-terracota-texto",
    link: "text-resc-terracota"
  }
};

function TeseCard({ tese }: { tese: Tese }) {
  const tom = tomTese[tese.tom];

  return (
    <details className={cn("group rounded-[22px]", tom.card)}>
      <summary className={cn(summaryReset, "flex flex-col gap-3 p-6.5", tom.escuro ? focusRingDark : focusRing)}>
        <span className="flex items-center justify-between gap-3">
          <span className={cn("rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]", tom.selo)}>
            {tese.selo}
          </span>
          <PlusIcon size={22} strokeWidth={2.2} className={tom.icone} />
        </span>
        <span className={cn("font-playfair text-[48px] font-extrabold leading-none", tom.tema)}>{tese.tema}</span>
        <span className="text-[17px] font-semibold leading-[1.4]">{tese.assunto}</span>
      </summary>

      <div className="flex flex-col gap-3.5 px-6.5 pb-6.5">
        <p className="font-playfair text-[16.5px] italic leading-[1.6]">{tese.enunciado}</p>
        <p className={cn("text-[13px] leading-[1.6]", tom.referencia)}>{tese.referencia}</p>
        {tese.link && (
          <a
            href={tese.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-[13px] font-semibold", tom.escuro ? linkDarkClass : linkClass)}
          >
            Ver acórdão
          </a>
        )}
      </div>
    </details>
  );
}

function PrecedenteCard({ precedente }: { precedente: Precedente }) {
  const tom = tomPrecedente[precedente.tom];

  return (
    <details className={cn("group rounded-[18px] border", tom.card)}>
      <summary className={cn(summaryReset, "flex items-center gap-4 px-5.5 py-5", focusRing)}>
        <span className="flex flex-1 flex-col gap-1.5">
          <span className={cn("text-[11px] font-bold uppercase tracking-[0.14em]", tom.rotulo)}>
            {precedente.rotulo}
          </span>
          <span className="font-playfair text-[22px] font-bold leading-[1.25]">{precedente.titulo}</span>
        </span>
        <PlusIcon className={tom.rotulo} />
      </summary>

      <div className="flex flex-col gap-2.5 px-5.5 pb-5.5">
        <p className={cn("text-[14.5px] leading-[1.6]", tom.texto)}>{precedente.texto}</p>
        {precedente.link && (
          <a
            href={precedente.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-[13px] font-semibold underline underline-offset-2", tom.link, focusRing)}
          >
            {precedente.link.label}
          </a>
        )}
      </div>
    </details>
  );
}

export function TesesSection() {
  return (
    <section id="teses" className="scroll-mt-28 bg-white">
      <div className={cn(containerClass, "py-22")}>
        <SectionHeading
          className="mb-8"
          eyebrow="Tribunal Superior do Trabalho"
          title="Teses vinculantes sobre rescisão indireta"
          description="Fixadas pelo Tribunal Pleno em incidentes de recursos repetitivos, são de observância obrigatória pela Justiça do Trabalho."
        />

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
          {teses.map((tese) => (
            <TeseCard key={tese.tema} tese={tese} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
          {precedentes.map((precedente) => (
            <PrecedenteCard key={precedente.titulo} precedente={precedente} />
          ))}
        </div>

        <p className="mt-5 text-[13px] text-resc-apoio">
          Consulta oficial:{" "}
          <a href={FONTE_TST.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {FONTE_TST.label}
          </a>
        </p>
      </div>
    </section>
  );
}
