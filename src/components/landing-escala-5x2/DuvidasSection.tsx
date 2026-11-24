import simboloNegativo from "@/assets/escala-5x2/simbolo-negativo.webp";
import { BASE_NORMATIVA, WHATSAPP_MENSAGEM, duvidas, type Pergunta } from "@/data/escala-5x2";
import { buildWhatsAppUrl } from "@/lib/contact";
import { SectionIntro } from "./SectionIntro";
import { buttonOuro, containerClass, focusRing, notaClass, sectionClass } from "./classes";

function PerguntaItem({ item, aberta }: { item: Pergunta; aberta: boolean }) {
  return (
    <details
      open={aberta}
      className="group mb-2.75 rounded-2xl border border-trab-linha bg-white transition-all duration-180 open:border-gold open:shadow-[0_8px_26px_rgba(0,0,0,0.05)]"
    >
      <summary
        className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5.5 py-4.75 text-[16.5px] font-bold [&::-webkit-details-marker]:hidden ${focusRing}`}
      >
        {item.pergunta}
        <span
          aria-hidden="true"
          className="size-6.5 flex-none rounded-full bg-trab-ouro-veu text-center text-[17px] font-black leading-6 text-trab-ouro-escuro group-open:bg-gold group-open:text-black"
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <div className="px-5.5 pb-5 text-[15.2px] text-trab-cinza">
        {item.respostas.map((resposta) => (
          <p key={resposta} className="mb-3.75 last:mb-0">
            {resposta}
          </p>
        ))}
      </div>
    </details>
  );
}

/** Chamada final para quem ainda tem dúvida, com o símbolo da marca ao fundo. */
function ChamadaDuvida() {
  return (
    <div className="relative mt-7.5 overflow-hidden rounded-[22px] rounded-tl-[52px] bg-black px-8 py-8.5 text-white">
      <img
        src={simboloNegativo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-7.5 -right-7.5 size-52.5 object-contain opacity-[0.07]"
      />
      <h3 className="relative z-[2] mb-2 font-playfair text-[24px] font-bold leading-[1.3] text-white">
        Ainda com dúvida?
      </h3>
      <p className="relative z-[2] mb-3.75 max-w-[70ch] text-trab-pedra-clara">
        Se a dúvida for sobre como montar a escala da equipe, redigir os aditivos contratuais,
        ajustar cláusulas de compensação ou organizar a gestão da jornada de trabalho, o Núcleo
        Trabalhista Empresarial pode esclarecer.
      </p>
      <div className="relative z-[2] mt-7 flex flex-wrap gap-3">
        <a
          href={buildWhatsAppUrl(WHATSAPP_MENSAGEM)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonOuro}
        >
          Enviar mensagem
        </a>
      </div>
    </div>
  );
}

export function DuvidasSection() {
  return (
    <section id="duvidas" className={`${sectionClass} scroll-mt-16`}>
      <div className={containerClass}>
        <SectionIntro rotulo="Orientações" title="Dúvidas frequentes">
          Respostas gerais, de caráter informativo. A solução de cada caso depende da atividade,
          da convenção coletiva aplicável e da forma como a jornada é organizada na empresa.
        </SectionIntro>

        <div className="mt-8">
          {duvidas.map((item, indice) => (
            <PerguntaItem key={item.pergunta} item={item} aberta={indice === 0} />
          ))}
        </div>

        <p className={`${notaClass} mt-5.5 max-w-[92ch]`}>{BASE_NORMATIVA}</p>

        <ChamadaDuvida />
      </div>
    </section>
  );
}
