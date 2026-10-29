import { Link } from "@tanstack/react-router";
import logoNegativo from "@/assets/escala-5x2/logo-negativo.webp";
import { NUCLEO_SLUG } from "@/data/escala-5x2";
import { focusRing } from "./classes";

/** Topo escuro com a marca centralizada entre filetes dourados e a régua de cores. */
export function MarcaTopo() {
  return (
    <>
      <header className="relative -mt-20 overflow-hidden bg-ink-deep md:-mt-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(880px_300px_at_50%_-45%,rgba(189,157,63,0.24),transparent_70%),repeating-linear-gradient(90deg,rgba(255,255,255,0.045)_0_1px,transparent_1px_46px)]"
        />
        <div className="relative mx-auto max-w-[1120px] px-4 pt-28 pb-6 sm:px-6 md:pt-32">
          <div className="flex items-center gap-[clamp(14px,3vw,34px)]">
            <span className="h-px min-w-0 flex-1 bg-linear-to-r from-transparent to-gold/80" />
            <Link
              to="/"
              aria-label="Página inicial de Moura e Galindo Advogados Associados"
              className={`shrink-0 leading-none ${focusRing}`}
            >
              <img
                src={logoNegativo}
                alt="Moura e Galindo Advogados Associados"
                width={600}
                height={326}
                className="w-[clamp(176px,25vw,236px)]"
              />
            </Link>
            <span className="h-px min-w-0 flex-1 bg-linear-to-r from-gold/80 to-transparent" />
          </div>

          <Link
            to="/areas/$slug"
            params={{ slug: NUCLEO_SLUG }}
            className={`mt-4.5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-soft sm:text-[11px] sm:tracking-[0.26em] ${focusRing}`}
          >
            <span className="h-px w-4 bg-gold/55 sm:w-6.5" />
            Núcleo Trabalhista Empresarial
            <span className="h-px w-4 bg-gold/55 sm:w-6.5" />
          </Link>
        </div>
      </header>
      <div
        aria-hidden="true"
        className="h-1.25 bg-[linear-gradient(90deg,var(--color-gold)_0_62%,var(--color-trab-azul)_62%_80%,var(--color-trab-vinho)_80%_92%,var(--color-trab-verde)_92%_100%)]"
      />
    </>
  );
}
