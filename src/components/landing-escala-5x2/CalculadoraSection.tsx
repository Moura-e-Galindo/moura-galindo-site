import { Link } from "@tanstack/react-router";
import {
  WHATSAPP_MENSAGEM_CALCULADORA,
  WHATSAPP_MENSAGEM_SIMULACAO,
  recursosCalculadora
} from "@/data/escala-5x2";
import { buildWhatsAppUrl } from "@/lib/contact";
import { getFaseAcesso } from "@/lib/ferramentas/availability";
import { formatDataHoraExtenso } from "@/lib/ferramentas/format";
import type { FaseAcesso, FerramentaRow } from "@/lib/ferramentas/types";
import { buttonPill, focusRing } from "./classes";

interface Props {
  /** Janela de acesso da calculadora; `null` quando não foi possível consultá-la. */
  ferramenta: FerramentaRow | null;
  now: number;
}

interface EstadoAcesso {
  selo: string;
  texto: string;
  disponivel: boolean;
}

function getEstadoAcesso(ferramenta: FerramentaRow | null, fase: FaseAcesso | null): EstadoAcesso {
  if (fase === "encerrada" || fase === "desativada") {
    return {
      selo: "Prazo de acesso encerrado",
      texto: "A calculadora não está mais no ar. Para uma simulação da escala da sua empresa, fale com o Núcleo Trabalhista Empresarial.",
      disponivel: false
    };
  }
  if (fase === "antes" && ferramenta?.available_from) {
    return {
      selo: "Em breve",
      texto: `A calculadora será liberada em ${formatDataHoraExtenso(ferramenta.available_from)}.`,
      disponivel: true
    };
  }
  const prazo = ferramenta?.available_until
    ? ` Disponível até ${formatDataHoraExtenso(ferramenta.available_until)}.`
    : "";
  return {
    selo: "Disponível por tempo limitado",
    texto: `Faça a simulação da escala da sua empresa enquanto a ferramenta estiver no ar.${prazo}`,
    disponivel: true
  };
}

function Tique() {
  return (
    <span className="mt-px inline-flex size-6.25 shrink-0 items-center justify-center rounded-full bg-gold">
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="size-3.25 fill-none stroke-ink-deep stroke-[2.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M3 8.5 6.4 12 13 4.5" />
      </svg>
    </span>
  );
}

export function CalculadoraSection({ ferramenta, now }: Props) {
  const fase = ferramenta ? getFaseAcesso(ferramenta, now) : null;
  const estado = getEstadoAcesso(ferramenta, fase);
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MENSAGEM_CALCULADORA);

  return (
    <section
      id="calculadora"
      className="relative overflow-hidden border-y border-gold/45 bg-trab-creme text-ink before:absolute before:-bottom-47.5 before:-left-20 before:size-90 before:rounded-full before:border-[1.5px] before:border-gold/45 after:absolute after:-top-37.5 after:-right-30 after:size-117.5 after:rounded-full after:border-[1.5px] after:border-gold/45"
    >
      <div className="relative mx-auto max-w-[1120px] px-4 py-[clamp(40px,6vw,74px)] sm:px-6">
        <div className="grid items-center gap-7 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:gap-10">
          <div>
            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-trab-ouro-texto">
              Ferramenta do escritório
            </span>
            <h2 className="mb-3 font-spectral text-[clamp(26px,3.7vw,38px)] font-semibold leading-[1.1] text-balance">
              Calculadora Inteligente da Escala 5x2
            </h2>
            <p className="max-w-[50ch] font-spectral text-[19px] leading-[1.45] text-ink-soft">
              Monte a semana da sua equipe e veja, na hora, o que a nova jornada faz com o seu
              quadro de pessoal e com a sua folha.
            </p>
          </div>

          <div className="rounded-[28px] bg-linear-160 from-trab-azul to-trab-noite px-6.5 py-8 text-center text-white shadow-[0_16px_40px_rgba(18,38,47,0.3)]">
            <span className="mb-4.5 inline-block rounded-full bg-gold-soft px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-deep">
              {estado.selo}
            </span>
            <p className="mb-5 text-[15px] leading-[1.55] text-white/75">{estado.texto}</p>

            {estado.disponivel ? (
              <Link
                to="/ferramentas/calculadora-escala-5x2"
                className={`${buttonPill} w-full px-5 py-4.25 text-[16px]`}
              >
                Abrir a calculadora
              </Link>
            ) : (
              <a
                href={buildWhatsAppUrl(WHATSAPP_MENSAGEM_SIMULACAO)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonPill} w-full px-5 py-4.25 text-[16px]`}
              >
                Solicitar simulação pelo WhatsApp
              </a>
            )}

            <p className="mt-4.5 text-[12.8px] leading-[1.55] text-white/60">
              Em caso de dúvidas sobre o preenchimento ou sobre o resultado,{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/90 underline decoration-gold underline-offset-3 hover:text-white ${focusRing}`}
              >
                fale com o Núcleo Trabalhista Empresarial pelo WhatsApp
              </a>
              .
            </p>
          </div>
        </div>

        <ul className="mt-7.5 grid gap-3.25 sm:grid-cols-2 lg:grid-cols-3">
          {recursosCalculadora.map((recurso) => (
            <li
              key={recurso}
              className="flex min-w-0 items-start gap-3 rounded-[14px] border border-gold/45 bg-white/70 px-4 py-3.75 text-[14.6px] leading-normal text-ink-soft"
            >
              <Tique />
              <span>{recurso}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
