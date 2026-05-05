import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PersonAvatar } from "@/components/PersonAvatar";
import { slugifyName } from "@/lib/slugify-name";
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

interface Socio {
  name: string;
  role: string;
  area: string;
  bio: string;
  initials: string;
  image?: string;
}

const socios: Socio[] = [
  {
    name: "Jean Bezerra de Moura",
    role: "Sócio",
    area: "Direito Empresarial, Direito Civil e Direito Tributário",
    bio: "Advogado do escritório Moura & Galindo Advogados Associados, com experiência de 28 anos nas áreas cível, empresarial e tributária. Bacharelado em Direito pelo Centro Universitário Asces-Unita, pós-graduação em Direito Processual Civil pela UFPE/Instituto Apolônio Sales/Asces-Unita. Mestrado em Gestão Empresarial pela UNIFBV. Pós-graduação em Direito Processual Civil pela Escola Superior da Magistratura de Pernambuco – ESMAPE. Graduando em Psicologia, pela Unifavip / Wyden. Assessor Jurídico do Centro Universitário Asces-Unita e do Colégio Diocesano de Caruaru. Professor Universitário das disciplinas de Direito Empresarial e Direito Processual Civil.",
    initials: "JB",
    image: "/jean-bezerra.jpg"
  },
  {
    name: "Kilma Galindo do Nascimento",
    role: "Sócia",
    area: "Direito da Moda",
    bio: "Advogada do escritório Moura & Galindo Advogados Associados, com experiência de 18 anos na área trabalhista. Assessora Jurídica Trabalhista e Sindical. Mestrado em Gestão Empresarial/ Relações de Trabalho, pela UNIFBV. Pós-graduação/Especialização em Direito Material e Processual do Trabalho, pela UCAM-RJ. Especialização em Direito Constitucional, pela UNIDERP/LFG. Especialização em Psicologia Organizacional, pela Unifavip/Wyden. Especialização em Direito da Moda, pela UNICESUMAR. Bacharelado em Direito pelo Centro Universitário ASCES-UNITA. Habilitação em Negociação, Mediação e Arbitragem, pela FGV. Professora Universitária de Graduação e Pós-graduação, nas disciplinas de Legislação Trabalhista, Direito e Processo do Trabalho, Saúde e Segurança do Trabalho e Qualidade de Vida no Trabalho. Presidente da Comissão de Direito da Moda da Subseção OAB Caruaru – PE e membro da Comissão de Direito da Moda da OAB-PE.",
    initials: "KG",
    image: "/kilma-galindo.jpg"
  },
  {
    name: "Janini Fernandes",
    role: "Sócia",
    area: "Direito Previdenciário",
    bio: "Sócia e coordenadora da equipe de previdenciário do Escritório Moura & Galindo Advogados Associados. Bacharel em Direito pelo Centro Universitário Tabosa de Almeida – Asces/Unita. Pós-graduada em Direito Processual Civil pela Escola Superior de Advocacia- ESA. Pós-graduada em Direito Previdenciário pela Legale Educacional S/A.",
    initials: "JF",
    image: "/janini-fernandes.jpg"
  },
  {
    name: "Daniele Medeiros",
    role: "Coordenadora",
    area: "Direito de Família",
    bio: "Advogada e coordenadora do Núcleo de Direito de Família do Escritório Moura & Galindo Advogados Associados. Doutoranda (bolsista Facepe) pela Unicap. Escritora e presidenta da Comissão de Direitos Humanos da OAB Caruaru.",
    initials: "DM",
    image: "/daniele-medeiros.png"
  },
  {
    name: "Perpétua Dantas",
    role: "Coordenadora",
    area: "Direito Penal",
    bio: "Advogada Criminalista, professora de Direito Penal (Asces/Unita), cientista política (UFPE) e coordenadora do Núcleo de Direito Criminal e do Núcleo de Direito Público do Escritório Moura & Galindo. ",
    initials: "PD",
    image: "/perpetua-dantas.png"
  },
];

function Equipe() {
  return (
    <>
      <PageHero
        eyebrow="Equipe"
        title="Profissionais"
        subtitle="Conheça os sócios e coordenadores que conduzem pessoalmente as estratégias do escritório, ao lado de uma equipe de advogados altamente especializados."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-px border border-border md:grid-cols-2 lg:grid-cols-3">
            {socios.map((p) => (
              <article key={p.name} className="bg-background border border-border p-10 group hover:bg-card transition-colors">
                <PersonAvatar image={p.image} initials={p.initials} alt={p.name} />
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
