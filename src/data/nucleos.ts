import {
  Scale,
  HomeIcon,
  Briefcase,
  Syringe,
  Users2,
  Handshake,
  Gavel,
  Shirt,
  type LucideIcon,
} from "lucide-react";

/**
 * Estrutura de dados de cada núcleo (área de atuação) do escritório.
 *
 * - `slug`        : identificador na URL (ex.: /areas/direito-civil-e-contratual)
 * - `icon`        : ícone exibido nos cards e no hero
 * - `title`       : nome da área
 * - `shortDesc`   : descrição curta usada nos cards (página /areas)
 * - `description` : parágrafos detalhados exibidos na página individual
 * - `services`    : tópicos/serviços oferecidos dentro da área
 * - `subtitle`    : texto que aparece no hero da página individual
 */
export interface Nucleo {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  subtitle: string;
  description: string[];
  services: string[];
}

export const nucleos: Nucleo[] = [
  {
    slug: "direito-civil-e-contratual",
    icon: Scale,
    title: "Direito Civil e Contratual",
    shortDesc:
      "Atuação preventiva e contenciosa em relações jurídicas entre pessoas e suas propriedades, com profundidade técnica em contratos e litígios.",
    subtitle:
      "Atuação preventiva e contenciosa em todas as relações jurídicas decorrentes do Código Civil e da legislação correlata.",
    description: [
      "O Direito Civil e Contratual é uma área do Direito que trata das relações jurídicas entre as pessoas e suas propriedades. O Escritório Moura & Galindo Advogados Associados atua com profissionais qualificados e experientes nas relações contratuais e de Direito Civil, seja na parte preventiva, por meio da revisão, formalização e celebração dos contratos, seja no contencioso diante dos litígios decorrentes de negócios jurídicos.",
      "Nosso atendimento é orientado pela análise criteriosa de riscos e pelo cuidado na elaboração de cláusulas que reflitam, com precisão, a vontade das partes — assegurando a estabilidade da relação contratual e a defesa dos interesses do cliente em qualquer cenário.",
    ],
    services: [
      "Elaboração, revisão e negociação de contratos",
      "Contratos de compra e venda, prestação de serviços e locação",
      "Responsabilidade civil e indenizações",
      "Direitos reais, posse e propriedade",
      "Resolução de litígios contratuais",
      "Consultoria preventiva em negócios jurídicos",
    ],
  },
  {
    slug: "direito-imobiliario",
    icon: HomeIcon,
    title: "Direito Imobiliário",
    shortDesc:
      "Consultoria e contencioso em relações de propriedade e posse, com atuação em todas as fases do negócio imobiliário.",
    subtitle:
      "Soluções judiciais e extrajudiciais para todas as relações que envolvem propriedade e posse de bens imóveis.",
    description: [
      "O Direito Imobiliário envolve a regulação de diversos aspectos inerentes às relações de propriedade e posse de bens imóveis, na forma estabelecida no Código Civil Brasileiro e legislação extravagante. O Escritório Moura & Galindo Advogados Associados atua na prestação de serviços judiciais, a exemplo da ação de usucapião, reintegração de posse, manutenção de posse e interdito proibitório.",
      "Realiza, ainda, Ação de Adjudicação Compulsória, Ação de Consignação de Chaves do Imóvel, Ação de Despejo, Ação de Imissão na Posse, Ação Revisional de Contrato de Aluguel e Ação Revisional de Contrato de Financiamento Imobiliário.",
      "No âmbito extrajudicial, o escritório atua prestando consultoria sobre a negociação em compra e venda de imóvel, elaborando e analisando cláusulas e condições do contrato de compra e venda, auxiliando o cliente na lavratura da escritura pública, realizando termo de compromisso de compra e venda, dentre outras atividades.",
    ],
    services: [
      "Ação de usucapião",
      "Reintegração e manutenção de posse",
      "Ações de despejo e revisional de aluguel",
      "Adjudicação compulsória e imissão na posse",
      "Análise e elaboração de contratos imobiliários",
      "Assessoria em escrituras e registros",
      "Revisão de contratos de financiamento imobiliário",
    ],
  },
  {
    slug: "direito-trabalhista-empresarial",
    icon: Briefcase,
    title: "Direito Trabalhista Empresarial",
    shortDesc:
      "Defesa estratégica de empregadores em litígios trabalhistas e consultoria preventiva em gestão de pessoas.",
    subtitle:
      "Assessoria e defesa de empresas em todas as relações de trabalho — da prevenção ao contencioso.",
    description: [
      "O Núcleo de Direito Trabalhista Empresarial atua na defesa dos interesses de empregadores, oferecendo soluções jurídicas que conciliam a observância da legislação trabalhista com as necessidades operacionais e estratégicas das empresas.",
      "O escritório presta consultoria preventiva em rotinas de Recursos Humanos, elaboração de políticas internas, análise de riscos e adequação à legislação trabalhista, sindical e previdenciária, além de atuar com excelência no contencioso judicial, em todas as instâncias da Justiça do Trabalho.",
    ],
    services: [
      "Defesa em reclamações trabalhistas",
      "Auditoria e compliance trabalhista",
      "Negociação coletiva e relações sindicais",
      "Elaboração de contratos e políticas internas",
      "Assessoria em demissões e acordos",
      "Treinamentos e consultoria em SST",
    ],
  },
  {
    slug: "direito-medico",
    icon: Syringe,
    title: "Direito Médico",
    shortDesc:
      "Consultoria e defesa para profissionais e instituições da saúde em questões éticas, contratuais e judiciais.",
    subtitle:
      "Atuação especializada na proteção jurídica de médicos, clínicas, hospitais e operadoras de saúde.",
    description: [
      "O Núcleo de Direito Médico do escritório Moura & Galindo presta assessoria a profissionais e instituições da área da saúde, com olhar técnico voltado tanto à prevenção de litígios quanto à defesa qualificada em processos administrativos e judiciais.",
      "Atuamos em demandas de responsabilidade civil médica, processos ético-disciplinares perante os Conselhos Regionais e Federal de Medicina, elaboração de termos de consentimento informado, contratos hospitalares e auditorias documentais, sempre com sigilo absoluto e profundo respeito ao exercício da medicina.",
    ],
    services: [
      "Defesa em ações de erro médico",
      "Processos ético-disciplinares (CRM/CFM)",
      "Termos de consentimento informado",
      "Contratos hospitalares e de plantão",
      "Consultoria a clínicas e hospitais",
      "Defesa em demandas de planos de saúde",
    ],
  },
  {
    slug: "direito-de-familia-e-sucessorio",
    icon: Users2,
    title: "Direito de Família e Sucessório",
    shortDesc:
      "Atuação humanizada em questões de família e sucessões, com cuidado, sigilo e estratégia em cada caso.",
    subtitle:
      "Cuidado, técnica e sensibilidade em cada relação familiar e em cada partilha de patrimônio.",
    description: [
      "O Núcleo de Direito de Família e Sucessório do escritório é coordenado por profissionais com sólida formação acadêmica e ampla experiência prática, e atua com sensibilidade às particularidades de cada núcleo familiar.",
      "Conduzimos demandas envolvendo divórcio, dissolução de união estável, guarda e regulamentação de visitas, alimentos, partilha de bens, inventários, planejamento sucessório e testamentos — sempre com foco em preservar relações e patrimônio, priorizando soluções consensuais sempre que possível.",
    ],
    services: [
      "Divórcio e dissolução de união estável",
      "Guarda, visitas e alimentos",
      "Partilha de bens e meações",
      "Inventários judiciais e extrajudiciais",
      "Planejamento sucessório e testamentos",
      "Reconhecimento de paternidade",
      "Mediação familiar",
    ],
  },
  {
    slug: "direito-empresarial-e-societario",
    icon: Handshake,
    title: "Direito Empresarial e Societário",
    shortDesc:
      "Consultoria estratégica para empresas em todas as fases — da constituição à reorganização societária.",
    subtitle:
      "Soluções jurídicas estratégicas para a estruturação, operação e crescimento de empresas.",
    description: [
      "O Núcleo de Direito Empresarial e Societário oferece assessoria completa para sociedades empresárias, desde a constituição da empresa até operações complexas de reorganização societária, planejamento sucessório empresarial e governança.",
      "Atuamos com profissionais que aliam formação jurídica de excelência ao conhecimento das dinâmicas de gestão empresarial, prestando atendimento próximo, estratégico e voltado à longevidade dos negócios dos nossos clientes.",
    ],
    services: [
      "Constituição e reorganização societária",
      "Elaboração de contratos sociais e acordos de sócios",
      "Fusões, aquisições e cisões (M&A)",
      "Governança corporativa e compliance",
      "Recuperação judicial e extrajudicial",
      "Planejamento sucessório empresarial",
      "Consultoria contratual contínua",
    ],
  },
  {
    slug: "direito-tributario",
    icon: Gavel,
    title: "Direito Tributário",
    shortDesc:
      "Consultoria preventiva e defesa em discussões tributárias administrativas e judiciais.",
    subtitle:
      "Planejamento tributário e defesa em todas as esferas — federal, estadual e municipal.",
    description: [
      "O Núcleo de Direito Tributário atua na consultoria preventiva e no contencioso administrativo e judicial em todas as esferas, oferecendo soluções para reduzir a carga tributária e mitigar riscos fiscais dentro dos limites da legislação.",
      "Acompanhamos de perto as constantes alterações da legislação tributária, em especial as decorrentes da Reforma Tributária, e oferecemos pareceres, planejamentos e teses tributárias adaptadas à realidade de cada cliente.",
    ],
    services: [
      "Planejamento tributário",
      "Defesa em execuções fiscais",
      "Recuperação de créditos tributários",
      "Consultoria em ICMS, ISS, PIS, COFINS, IRPJ e CSLL",
      "Acompanhamento em processos administrativos",
      "Pareceres e teses tributárias",
      "Adequação à Reforma Tributária",
    ],
  },
  {
    slug: "direito-da-moda",
    icon: Shirt,
    title: "Direito da Moda",
    shortDesc:
      "Consultoria jurídica especializada para a cadeia da moda — da criação à comercialização.",
    subtitle:
      "Atendimento jurídico exclusivo para todos os elos da cadeia produtiva da moda.",
    description: [
      "O Núcleo de Direito da Moda (Fashion Law) é coordenado por profissional com especialização específica na área e presença ativa em comissões da OAB, atendendo estilistas, marcas, indústrias têxteis, lojistas e influenciadores digitais.",
      "Atuamos em todas as etapas da cadeia produtiva da moda — proteção de marcas e desenhos industriais, contratos com fornecedores, compliance trabalhista e ambiental, contratos com modelos e influenciadores, e‑commerce, sustentabilidade e combate à contrafação.",
    ],
    services: [
      "Registro e proteção de marcas e desenhos industriais",
      "Contratos com modelos, influenciadores e estilistas",
      "Combate à contrafação e concorrência desleal",
      "Compliance trabalhista e ambiental na cadeia da moda",
      "Contratos com fornecedores e franquias",
      "Assessoria em e‑commerce e marketplaces",
      "Sustentabilidade e moda circular",
    ],
  },
];

/**
 * Localiza um núcleo pelo seu slug.
 * Retorna `undefined` quando não encontrado.
 */
export function findNucleoBySlug(slug: string): Nucleo | undefined {
  return nucleos.find((n) => n.slug === slug);
}
