import iconeWhatsApp from "@/assets/escala-5x2/whatsapp.webp";
import {
  WHATSAPP_MENSAGEM_GERADOR,
  diasSemana,
  entregasGerador,
  escalaIlustrativa,
  type DiaEscala
} from "@/data/escala-5x2";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/contact";
import { SectionIntro } from "./SectionIntro";
import {
  buttonZap,
  containerClass,
  h3Class,
  marcadorLosango,
  notaClass,
  sectionClass
} from "./classes";

const celulaClasses: Record<DiaEscala, string> = {
  T: "bg-gold font-bold text-black",
  F: "bg-trab-creme-2 font-bold text-trab-ouro-escuro"
};

/** Grade ilustrativa de escala por equipe, com a legenda. */
function GradeEscala() {
  return (
    <>
      <div className="mt-5 overflow-hidden rounded-[14px] border border-trab-linha bg-white text-trab-tinta">
        <table className="w-full border-collapse text-[12.5px]">
          <thead>
            <tr>
              {["Equipe", ...diasSemana].map((dia) => (
                <th
                  key={dia}
                  scope="col"
                  className="border-b border-trab-linha bg-trab-creme-2 px-0.5 py-2 text-center text-[11.5px] font-bold uppercase tracking-[0.04em] text-trab-ouro-escuro"
                >
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&_tr:last-child>*]:border-b-0">
            {escalaIlustrativa.map((linha) => (
              <tr key={linha.equipe}>
                <th
                  scope="row"
                  className="w-19 border-b border-trab-linha bg-trab-creme-tabela py-2 pl-3 text-left font-bold"
                >
                  {linha.equipe}
                </th>
                {linha.dias.map((dia, indice) => (
                  <td
                    key={diasSemana[indice]}
                    className={`border-b border-trab-linha px-0.5 py-2 text-center ${celulaClasses[dia]}`}
                  >
                    {dia}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap gap-4.5 text-[12.5px] text-graphite">
        <span className="inline-flex items-center gap-1.75">
          <i className="inline-block size-3.5 rounded-[4px] bg-gold" /> T · dia de trabalho
        </span>
        <span className="inline-flex items-center gap-1.75">
          <i className="inline-block size-3.5 rounded-[4px] bg-trab-creme-2" /> F · repouso semanal
        </span>
        <span>Exemplo meramente ilustrativo.</span>
      </div>
    </>
  );
}

export function GeradorSection() {
  return (
    <section id="gerador" className={`${sectionClass} scroll-mt-16 bg-trab-carvao text-trab-nevoa`}>
      <div className={containerClass}>
        <SectionIntro rotulo="Apoio à adequação" title="Gerador de Escalas" escuro>
          Um trabalho de montagem da escala da sua equipe nos novos limites, feito sobre o
          horário real de funcionamento do seu estabelecimento e sobre a convenção coletiva
          aplicável.
        </SectionIntro>

        <div className="mt-8.5 grid items-start gap-8.5 min-[981px]:grid-cols-[1.1fr_0.9fr]">
          <div>
            <ul>
              {entregasGerador.map((entrega) => (
                <li
                  key={entrega}
                  className={`relative border-b border-trab-linha-escura py-3.25 pl-7.5 text-[15.2px] text-trab-pedra-clara last:border-b-0 before:top-5.25 before:size-2.5 ${marcadorLosango}`}
                >
                  {entrega}
                </li>
              ))}
            </ul>
            <GradeEscala />
          </div>

          <div className="rounded-[22px] rounded-tr-[52px] bg-trab-creme px-6.5 py-7 text-trab-tinta">
            <h3 className={h3Class}>Como solicitar</h3>
            <p className="mb-3.75 text-[14.8px] text-trab-cinza">
              Envie uma mensagem com o ramo de atividade, o horário de funcionamento e o número de
              empregados do estabelecimento. A partir desses dados, apresentamos as opções de
              escala possíveis e os documentos que cada uma exige.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl(WHATSAPP_MENSAGEM_GERADOR)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonZap}
              >
                <img src={iconeWhatsApp} alt="" width={160} height={160} className="size-5 rounded-[5px]" />
                Falar no WhatsApp
              </a>
            </div>
            <p className={`${notaClass} mt-4.5`}>
              {WHATSAPP_DISPLAY} &nbsp;·&nbsp; Núcleo Trabalhista Empresarial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
