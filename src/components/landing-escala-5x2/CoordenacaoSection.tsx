import fotoKilma from "@/assets/escala-5x2/kilma-galindo.webp";
import { WHATSAPP_MENSAGEM_COORDENACAO, coordenadora } from "@/data/escala-5x2";
import { buildWhatsAppUrl } from "@/lib/contact";
import { SectionIntro } from "./SectionIntro";
import { buttonPreto, containerClass, marcadorLosango, sectionClass } from "./classes";

/** Cartão escuro com a foto e os dados da coordenadora. */
function CartaoCoordenadora() {
  return (
    <div className="max-w-80 overflow-hidden rounded-[22px] rounded-tr-[52px] bg-black text-center text-white">
      <div className="relative bg-trab-papel-foto after:absolute after:inset-x-0 after:bottom-0 after:h-0.75 after:bg-gold after:content-['']">
        <img
          src={fotoKilma}
          alt={`${coordenadora.nome}, coordenadora do Núcleo Trabalhista Empresarial`}
          width={720}
          height={900}
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>
      <div className="px-5 pt-6 pb-7">
        <div className="mx-auto mb-4 size-2.75 rotate-45 bg-gold" />
        <div className="mb-2 font-playfair text-[21px] font-bold leading-[1.22]">{coordenadora.nome}</div>
        <div className="text-[13px] font-bold tracking-[0.12em] text-gold">{coordenadora.oab}</div>
        <div className="mt-3.25 text-[13.5px] leading-normal text-trab-pedra">
          {coordenadora.funcao}
          <br />
          {coordenadora.escritorio}
        </div>
      </div>
    </div>
  );
}

export function CoordenacaoSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionIntro rotulo="Coordenação do Núcleo" title="Quem responde por este conteúdo" />

        <div className="mt-7.5 grid items-start gap-9.5 min-[981px]:grid-cols-[0.62fr_1.38fr]">
          <CartaoCoordenadora />
          <div>
            <ul>
              {coordenadora.curriculo.map((item) => (
                <li
                  key={item}
                  className={`relative border-b border-trab-linha py-2.75 pl-7 text-[15.2px] text-trab-cinza last:border-b-0 before:top-4.75 before:size-2.25 ${marcadorLosango}`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6.5 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl(WHATSAPP_MENSAGEM_COORDENACAO)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonPreto}
              >
                Falar com a coordenação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
