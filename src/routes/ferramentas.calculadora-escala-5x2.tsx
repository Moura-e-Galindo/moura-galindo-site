import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Calculadora5x2 } from "@/components/escala-5x2/Calculadora5x2";
import { AccessBanner } from "@/components/ferramentas/AccessBanner";
import { AccessGate } from "@/components/ferramentas/AccessGate";
import { useNow } from "@/hooks/use-now";
import { fetchFerramenta } from "@/lib/ferramentas/api";
import { getFaseAcesso } from "@/lib/ferramentas/availability";

const SLUG = "calculadora-escala-5x2";
const TITLE = "Calculadora da escala 5x2 — Moura & Galindo";
const DESCRIPTION =
  "Apuração de jornada, horas extras e custo mensal da escala 5x2 pela Emenda Constitucional 141/2026.";

const MENSAGEM_ENCERRADA =
  "O período de disponibilização desta ferramenta se encerrou. Para solicitar novo acesso ou esclarecer dúvidas sobre a adequação das escalas à Emenda Constitucional 141/2026, procure a assessoria jurídica do sindicato.";

export const Route = createFileRoute("/ferramentas/calculadora-escala-5x2")({
  loader: async () => {
    const ferramenta = await fetchFerramenta(SLUG);
    if (!ferramenta) throw notFound();
    // Instante da carga: base comum do relógio no servidor e no navegador.
    return { ferramenta, loadedAt: Date.now() };
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION }
    ]
  }),
  component: CalculadoraEscalaPage
});

function CalculadoraEscalaPage() {
  const { ferramenta, loadedAt } = Route.useLoaderData();
  const now = useNow(30_000, loadedAt);
  const fase = getFaseAcesso(ferramenta, now);

  return (
    <>
      <PageHero
        eyebrow="Emenda Constitucional 141/2026"
        title="Calculadora da escala 5x2"
        subtitle={
          fase === "aberta"
            ? "Preencha o ponto de cada dia e a jornada se calcula sozinha. Ou informe a jornada e o horário de saída é sugerido. A apuração indica o excedente semanal e o custo das horas extraordinárias."
            : undefined
        }
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/escala-5x2"
            className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Entenda o que muda com a escala 5x2
          </Link>

          {fase === "aberta" ? (
            <>
              <AccessBanner ferramenta={ferramenta} now={now} />
              <Calculadora5x2 />
            </>
          ) : (
            <AccessGate
              ferramenta={ferramenta}
              fase={fase}
              now={now}
              mensagemEncerrada={MENSAGEM_ENCERRADA}
              rodape={
                <>
                  <strong className="font-semibold text-foreground">
                    Moura &amp; Galindo Advogados Associados.
                  </strong>{" "}
                  Assessoria Jurídica Trabalhista do SINDLOJA. Ferramenta disponibilizada à
                  diretoria por prazo determinado. Horários referidos ao fuso de Brasília.
                </>
              }
            />
          )}
        </div>
      </section>
    </>
  );
}
