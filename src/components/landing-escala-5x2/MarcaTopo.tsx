import { Link } from "@tanstack/react-router";
import logoHorizontal from "@/assets/escala-5x2/logo-horizontal-negativo.webp";
import { containerClass, focusRing } from "./classes";

/** Barra superior fixa com a marca e o atalho para o site do escritório. */
export function MarcaTopo() {
  return (
    <header className="sticky top-0 z-[60] border-b border-trab-linha-escura bg-black">
      <div className={`${containerClass} flex items-center justify-between gap-4.5 py-2.75`}>
        <Link
          to="/"
          aria-label="Página inicial de Moura e Galindo Advogados Associados"
          className={`leading-none ${focusRing}`}
        >
          <img
            src={logoHorizontal}
            alt="Moura & Galindo Advogados Associados"
            width={763}
            height={130}
            className="h-8.5 w-auto min-[561px]:h-11"
          />
        </Link>
        <nav className="flex items-center gap-5.5">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-gold px-3.75 py-2 text-[12.5px] font-bold tracking-[0.02em] text-trab-ouro-claro no-underline transition-colors hover:bg-gold hover:text-black min-[561px]:px-5 min-[561px]:py-2.25 min-[561px]:text-[13.5px] ${focusRing}`}
          >
            Nosso site
          </Link>
        </nav>
      </div>
    </header>
  );
}
