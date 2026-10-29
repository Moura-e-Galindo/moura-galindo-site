import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import fotoKilma from "@/assets/escala-5x2/kilma-galindo.webp";
import { NUCLEO_SLUG, coordenadora } from "@/data/escala-5x2";
import { containerClass, eyebrowClass, focusRing, h2Class, paragraphClass } from "./classes";

const linkClass = `inline-flex items-center gap-1.5 text-[14px] font-semibold text-trab-ouro-texto underline decoration-gold underline-offset-4 hover:text-neutral-900 ${focusRing}`;

export function CoordenacaoSection() {
  return (
    <section className="border-t border-trab-linha bg-white">
      <div className={containerClass}>
        <div className="grid items-start gap-6.5 md:grid-cols-[minmax(0,0.52fr)_minmax(0,1.48fr)] md:gap-10">
          <div className="relative ml-2.75 mt-2.75 max-w-[218px]">
            <span aria-hidden="true" className="absolute -top-2.75 right-5.5 bottom-5.5 -left-2.75 rounded-[3px] bg-gold" />
            <img
              src={fotoKilma}
              alt="Kilma Galindo, coordenadora do Núcleo Trabalhista Empresarial"
              width={456}
              height={570}
              loading="lazy"
              className="relative block w-full rounded-[3px]"
            />
          </div>

          <div>
            <span className={eyebrowClass}>Coordenação do Núcleo</span>
            <h2 className={h2Class}>{coordenadora.nome}</h2>
            <p className={paragraphClass}>{coordenadora.apresentacao}</p>
            <ul className="mt-4.5 grid gap-2.5">
              {coordenadora.curriculo.map((item) => (
                <li
                  key={item.texto}
                  className="relative pl-5 text-[14.2px] leading-[1.55] text-neutral-600 before:absolute before:top-2.25 before:left-0 before:h-0.5 before:w-2.25 before:bg-gold"
                >
                  <b className="font-semibold text-neutral-900">{item.destaque}</b> {item.texto}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Link to="/areas/$slug" params={{ slug: NUCLEO_SLUG }} className={linkClass}>
                Conheça o Núcleo Trabalhista Empresarial <ArrowRight className="size-4" />
              </Link>
              <Link to="/equipe" className={linkClass}>
                Ver a equipe do escritório <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
