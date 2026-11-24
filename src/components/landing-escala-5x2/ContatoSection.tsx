import type { ReactNode } from "react";
import { WHATSAPP_MENSAGEM, contato } from "@/data/escala-5x2";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/contact";
import { SectionIntro } from "./SectionIntro";
import { containerClass, focusRing, sectionClass } from "./classes";

const linkClass = `text-[17px] font-medium text-white no-underline hover:text-trab-ouro-claro ${focusRing}`;

function Canal({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <div className="rounded-[22px] border border-trab-linha-escura bg-trab-carvao-2 px-6 py-6.5">
      <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[0.18em] text-gold">{rotulo}</div>
      {children}
    </div>
  );
}

export function ContatoSection() {
  return (
    <section id="contato" className={`${sectionClass} scroll-mt-16 bg-trab-carvao text-trab-nevoa`}>
      <div className={containerClass}>
        <SectionIntro rotulo="Contato" title="Fale com o Núcleo Trabalhista Empresarial" escuro>
          Atendimento a empresas, contadores e departamentos de pessoal.
        </SectionIntro>

        <div className="mt-7.5 grid gap-4 min-[681px]:grid-cols-3">
          <Canal rotulo="WhatsApp">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MENSAGEM)}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {WHATSAPP_DISPLAY}
            </a>
          </Canal>
          <Canal rotulo="Endereço">
            <p className="text-[15px] text-trab-pedra">
              {contato.endereco.map((linha, indice) => (
                <span key={linha}>
                  {indice > 0 && <br />}
                  {linha}
                </span>
              ))}
            </p>
          </Canal>
          <Canal rotulo="Instagram">
            <a href={contato.instagram.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {contato.instagram.display}
            </a>
          </Canal>
        </div>
      </div>
    </section>
  );
}
