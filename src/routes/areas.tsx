import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import {
  Building2, Scale, Users, Gavel, Shield, Database, Home, Landmark
} from "lucide-react";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação — Moura & Galindo" },
      { name: "description", content: "Conheça as áreas de prática do escritório Moura & Galindo: empresarial, tributário, trabalhista, penal e mais." },
      { property: "og:title", content: "Áreas de Atuação — Moura & Galindo" },
      { property: "og:description", content: "Atuação multidisciplinar com profundidade técnica em oito áreas do Direito." },
    ],
  }),
  component: Areas,
});

const areas = [
  { icon: Building2, title: "Direito Empresarial", desc: "Estruturação societária, fusões e aquisições, governança corporativa, contratos comerciais complexos e operações internacionais." },
  { icon: Scale, title: "Direito Tributário", desc: "Planejamento tributário, defesa em contencioso administrativo e judicial, recuperação de créditos e consultoria em operações." },
  { icon: Users, title: "Direito Trabalhista", desc: "Consultoria preventiva, compliance trabalhista, defesa em ações individuais e coletivas, negociações sindicais." },
  { icon: Gavel, title: "Direito Penal Empresarial", desc: "Defesa em crimes econômicos, contra a administração pública, investigações internas e programas de integridade." },
  { icon: Home, title: "Cível e Família", desc: "Planejamento sucessório, holdings familiares, contratos, responsabilidade civil e litígios complexos." },
  { icon: Database, title: "Direito Digital e LGPD", desc: "Adequação à LGPD, contratos de tecnologia, governança de dados, propriedade intelectual e regulação digital." },
  { icon: Landmark, title: "Direito Imobiliário", desc: "Incorporações, due diligence, regularização, contratos de locação e desenvolvimento imobiliário." },
  { icon: Shield, title: "Compliance e Investigações", desc: "Implementação de programas de integridade, investigações internas, auditorias e treinamentos corporativos." },
];

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de Atuação"
        title="Soluções jurídicas em oito frentes de prática."
        subtitle="Cada área é liderada por sócios com formação acadêmica de excelência e décadas de experiência prática. Atuamos de forma integrada quando o caso exige."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {areas.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group relative border border-border bg-card p-10 hover:border-gold transition-colors shadow-card">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/40 group-hover:border-gold group-hover:bg-gold/5 transition-colors">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium text-foreground">{title}</h3>
                    <div className="gold-divider mt-3" />
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
