import logoEscuro from "@/assets/regularizacao-imoveis/logo-horizontal-escuro.webp";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/contact";
import { advogados, escritorio } from "@/data/regularizacao-imoveis";
import { cn } from "@/lib/utils";
import { LandingContainer } from "./LandingContainer";
import { focusRing } from "./classes";

const footerLink = cn("text-white hover:text-gold", focusRing);

export function LandingFooter() {
  const { endereco } = escritorio;
  const listaAdvogados = advogados.map((a) => `${a.nome}, ${a.oab}`).join("; ");

  return (
    <footer id="privacidade" className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <LandingContainer className="flex flex-wrap justify-between gap-10 pt-14 pb-10">
        <div className="min-w-0 flex-[1_1_320px]">
          <img
            src={logoEscuro}
            alt={escritorio.nome}
            width={203}
            height={48}
            loading="lazy"
            className="block h-12 w-auto"
          />
          <address className="mt-5 text-[14px] not-italic leading-[1.7]">
            {endereco.logradouro}
            <br />
            {endereco.bairro}
            <br />
            {endereco.cidade}, {endereco.uf}, CEP {endereco.cep}
          </address>
        </div>

        <ul className="min-w-0 flex-[1_1_240px] text-[14px] leading-[1.9]">
          <li>
            <a href={escritorio.telefone.href} className={footerLink}>
              {escritorio.telefone.display}
            </a>
          </li>
          <li>
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={footerLink}>
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </li>
          <li>
            <a href={escritorio.instagram.href} target="_blank" rel="noopener noreferrer" className={footerLink}>
              Instagram {escritorio.instagram.display}
            </a>
          </li>
          <li>
            <a href="/" className={footerLink}>
              {escritorio.site.display}
            </a>
          </li>
        </ul>

        <div className="min-w-0 flex-[1_1_280px] text-[13px] leading-[1.7]">
          <p>
            Advogados: {listaAdvogados}. Sociedade de advogados registrada na OAB-PE sob o nº{" "}
            {escritorio.registroOab}.
          </p>
        </div>
      </LandingContainer>

      <LandingContainer className="pb-10">
        <p className="border-t border-neutral-800 pt-6 text-[12px] leading-[1.7] text-neutral-400">
          Conteúdo de caráter exclusivamente informativo, elaborado conforme o Código de Ética e
          Disciplina da OAB e o Provimento nº 205 de 2021 do Conselho Federal. As informações
          desta página não substituem a análise individual de cada caso e não representam
          promessa de resultado.
        </p>
      </LandingContainer>
    </footer>
  );
}
