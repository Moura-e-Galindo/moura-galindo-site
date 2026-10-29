import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import logoNegativo from "@/assets/escala-5x2/logo-negativo.webp";
import qrSite from "@/assets/escala-5x2/qr-site.png";
import { WhatsAppGlyph } from "@/components/landing-imoveis/icons";
import { WHATSAPP_MENSAGEM, contato } from "@/data/escala-5x2";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/contact";
import { buttonPill, focusRing } from "./classes";

const linkClass = `text-white underline decoration-gold/60 underline-offset-4 hover:text-gold-soft ${focusRing}`;

function Dado({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <li className="border-b border-neutral-800 py-3.5 text-[15px] leading-[1.55] text-white">
      <span className="mb-1.25 block text-[10.5px] font-bold uppercase tracking-[0.16em] text-gold">
        {rotulo}
      </span>
      {children}
    </li>
  );
}

export function ContatoSection() {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MENSAGEM);

  return (
    <section id="contato" className="scroll-mt-24 bg-black text-white">
      <div className="mx-auto grid max-w-[1120px] items-start gap-7.5 px-4 py-[clamp(40px,6vw,74px)] sm:px-6 md:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] md:gap-11">
        <div>
          <img
            src={logoNegativo}
            alt="Moura e Galindo Advogados Associados"
            width={600}
            height={326}
            loading="lazy"
            className="mb-6 block w-56"
          />
          <span className="mb-3.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            Em caso de dúvidas
          </span>
          <h2 className="mb-3 font-spectral text-[clamp(25px,3.7vw,37px)] font-semibold leading-[1.18] text-balance">
            Fale com o Núcleo Trabalhista Empresarial
          </h2>
          <p className="mb-3.5 text-neutral-400">
            Dúvidas sobre a aplicação da emenda a uma operação concreta podem ser encaminhadas
            pelo WhatsApp. O atendimento é pessoal e a orientação considera a convenção coletiva
            da categoria e a realidade da empresa.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-2 inline-flex items-center gap-2.5 rounded-[3px] bg-whatsapp px-5.5 py-3 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-whatsapp-deep ${focusRing}`}
          >
            <WhatsAppGlyph size={20} /> Enviar dúvida pelo WhatsApp
          </a>

          <ul className="mt-6">
            <Dado rotulo="WhatsApp">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {WHATSAPP_DISPLAY}
              </a>
            </Dado>
            <Dado rotulo="Endereço">
              <a href={contato.mapaUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {contato.enderecoLinha1}
                <br />
                {contato.enderecoLinha2}
              </a>
            </Dado>
            <Dado rotulo="Instagram">
              <a href={contato.instagram.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {contato.instagram.display}
              </a>
            </Dado>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-44.5 overflow-hidden rounded-2xl border-2 border-gold/60 bg-white leading-none">
            <img
              src={qrSite}
              alt="QR code que abre o site de Moura e Galindo Advogados Associados"
              width={468}
              height={468}
              loading="lazy"
              className="block w-full"
            />
          </div>
          <Link to="/" className={`${buttonPill} px-6.5 py-3.5 text-[14.5px]`}>
            Acessar o site do escritório
          </Link>
          <Link to="/contato" className={`text-[13px] ${linkClass}`}>
            Outros canais de contato
          </Link>
        </div>
      </div>
    </section>
  );
}
