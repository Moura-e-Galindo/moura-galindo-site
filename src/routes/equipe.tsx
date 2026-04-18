import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Moura & Galindo" },
      { name: "description", content: "Conheça os sócios e advogados do escritório Moura & Galindo." },
      { property: "og:title", content: "Equipe — Moura & Galindo" },
      { property: "og:description", content: "Sócios e advogados do escritório Moura & Galindo." },
    ],
  }),
  component: Equipe,
});

const socios = [
  {
    name: "Ricardo Moura",
    role: "Sócio-fundador",
    area: "Direito Empresarial e M&A",
    bio: "Mestre em Direito Comercial pela USP. Mais de 30 anos de atuação em operações societárias complexas, governança e contratos internacionais.",
    initials: "RM",
  },
  {
    name: "Helena Galindo",
    role: "Sócia-fundadora",
    area: "Direito Tributário",
    bio: "Doutora em Direito Tributário pela PUC-SP. Conselheira do CARF entre 2014 e 2018. Reconhecida por publicações especializadas como referência em contencioso tributário.",
    initials: "HG",
  },
  {
    name: "Bruno Cavalcanti",
    role: "Sócio",
    area: "Direito Trabalhista",
    bio: "Especialista em relações sindicais e compliance trabalhista. Atua junto a grandes grupos industriais e do varejo nacional.",
    initials: "BC",
  },
  {
    name: "Mariana Albuquerque",
    role: "Sócia",
    area: "Direito Civil e Família",
    bio: "Mestre em Direito Civil pela USP. Atuação destacada em planejamento sucessório e patrimonial para famílias empresárias.",
    initials: "MA",
  },
  {
    name: "Felipe Dantas",
    role: "Sócio",
    area: "Direito Penal Empresarial",
    bio: "Pós-graduado em Direito Penal Econômico. Atua em investigações internas, defesa em crimes financeiros e contra a administração pública.",
    initials: "FD",
  },
  {
    name: "Carolina Vasques",
    role: "Sócia",
    area: "Direito Digital e Proteção de Dados",
    bio: "DPO certificada (IAPP). Lidera a prática de LGPD, contratos de tecnologia e governança de dados.",
    initials: "CV",
  },
];

function Equipe() {
  return (
    <>
      <PageHero
        eyebrow="Equipe"
        title="Profissionais que assinam cada caso."
        subtitle="Conheça os sócios que conduzem pessoalmente as estratégias do escritório, ao lado de uma equipe de advogados altamente especializados."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {socios.map((p) => (
              <article key={p.name} className="bg-background p-10 group hover:bg-card transition-colors">
                <div className="flex items-center justify-center h-32 w-32 rounded-full border border-gold/40 bg-card mx-auto group-hover:border-gold transition-colors">
                  <span className="font-serif text-4xl font-medium text-gold">{p.initials}</span>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="font-serif text-2xl font-medium text-foreground">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">{p.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground italic">{p.area}</p>
                  <div className="gold-divider mx-auto mt-5" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                  <div className="mt-6 flex justify-center gap-3">
                    <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-gold transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="E-mail" className="text-muted-foreground hover:text-gold transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
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
