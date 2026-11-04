import type { ReactNode } from "react";
import logo from "@/assets/rescisao-indireta/logo.webp";
import { CONTEUDO_ATUALIZADO_EM, escritorio, fontesOficiais } from "@/data/rescisao-indireta";
import { WHATSAPP_DISPLAY } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { containerClass, linkClass, linkDarkClass } from "./classes";

function Coluna({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 text-[14px] leading-[1.6] text-resc-texto">
      <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-resc-petroleo">{rotulo}</span>
      {children}
    </div>
  );
}

export function LandingFooter() {
  const { endereco } = escritorio;

  return (
    <footer className="border-t border-resc-linha bg-white">
      <div className={cn(containerClass, "grid grid-cols-1 items-start gap-8 pt-14 pb-11 sm:grid-cols-2 lg:grid-cols-3")}>
        <img
          src={logo}
          alt={escritorio.nome}
          width={364}
          height={220}
          loading="lazy"
          className="block h-auto w-[210px] max-w-full"
        />

        <Coluna rotulo="Endereço">
          <address className="not-italic">
            {endereco.logradouro}
            <br />
            {endereco.bairro}
            <br />
            {endereco.cidade}, {endereco.uf}
          </address>
        </Coluna>

        <Coluna rotulo="Contato">
          <span className="tabular-nums">WhatsApp {WHATSAPP_DISPLAY}</span>
          <a href={escritorio.instagram.href} target="_blank" rel="noopener noreferrer" className={cn(linkClass, "w-fit")}>
            {escritorio.instagram.display}
          </a>
          <a href="/" className={cn(linkClass, "w-fit")}>
            {escritorio.site.display}
          </a>
        </Coluna>
      </div>

      <div className="bg-resc-noite text-resc-apoio-escuro">
        <div className={cn(containerClass, "flex flex-col gap-2.5 py-5.5 text-[12.5px] leading-[1.65]")}>
          <p className="max-w-[115ch]">
            Conteúdo de caráter exclusivamente informativo, elaborado nos termos do Provimento nº
            205/2021 do Conselho Federal da OAB. Não constitui consulta jurídica nem promessa de
            resultado. Os dados enviados pelo WhatsApp serão utilizados apenas para responder ao seu
            contato, conforme a Lei nº 13.709/2018 (LGPD).
          </p>
          <p>
            Fontes oficiais:{" "}
            {fontesOficiais.map((fonte, index) => (
              <span key={fonte.href + fonte.label}>
                {index > 0 && " · "}
                <a href={fonte.href} target="_blank" rel="noopener noreferrer" className={linkDarkClass}>
                  {fonte.label}
                </a>
              </span>
            ))}
          </p>
          <p>
            © {new Date().getFullYear()} {escritorio.nome} · Conteúdo atualizado em{" "}
            {CONTEUDO_ATUALIZADO_EM}.
          </p>
        </div>
      </div>
    </footer>
  );
}
