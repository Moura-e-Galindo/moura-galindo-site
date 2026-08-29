import {
  Scale,
  HomeIcon,
  Briefcase,
  Stethoscope,
  Users2,
  Handshake,
  Gavel,
  Shirt,
  Baby,
  ScrollText,
  Landmark,
  ShoppingCart,
  PiggyBank,
  Building2,
  Leaf,
  Banknote,
  HardHat,
  Vote,
  type LucideIcon,
} from "lucide-react";

// Banners tematicos de cada nucleo (identidade dourado/preto/cinza)
import imgDireitoCivilEContratual from "@/assets/nucleos/direito-civil-e-contratual.webp";
import imgDireitoImobiliario from "@/assets/nucleos/direito-imobiliario.webp";
import imgDireitoCriminal from "@/assets/nucleos/direito-criminal.webp";
import imgDireitoTrabalhistaEmpresarial from "@/assets/nucleos/direito-trabalhista-empresarial.webp";
import imgDireitoDaCriancaEAdolescente from "@/assets/nucleos/direito-da-crianca-e-adolescente.webp";
import imgDireitoSucessorio from "@/assets/nucleos/direito-sucessorio.webp";
import imgDireitoMedicoEDaSaude from "@/assets/nucleos/direito-medico-e-da-saude.webp";
import imgDireitoDaFamilia from "@/assets/nucleos/direito-da-familia.webp";
import imgDireitoTributario from "@/assets/nucleos/direito-tributario.webp";
import imgDireitoEmpresarialESocietario from "@/assets/nucleos/direito-empresarial-e-societario.webp";
import imgDireitoDoConsumidor from "@/assets/nucleos/direito-do-consumidor.webp";
import imgDireitoDaModa from "@/assets/nucleos/direito-da-moda.webp";
import imgDireitoPrevidenciario from "@/assets/nucleos/direito-previdenciario.webp";
import imgDireitoPublicoAdministrativo from "@/assets/nucleos/direito-publico-administrativo.webp";
import imgDireitoAmbiental from "@/assets/nucleos/direito-ambiental.webp";
import imgDireitoBancario from "@/assets/nucleos/direito-bancario.webp";
import imgContenciosoTrabalhista from "@/assets/nucleos/contencioso-trabalhista.webp";
import imgDireitoEleitoral from "@/assets/nucleos/direito-eleitoral.webp";

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
  /** Banner exibido no topo do card (imagem tematica). */
  image: string;
  title: string;
  shortDesc: string;
  subtitle: string;
  description: string[];
  services: string[];
}

export const nucleos: Nucleo[] = [
  {
    slug: "direito-civil-e-contratual",
    image: imgDireitoCivilEContratual,
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
    image: imgDireitoImobiliario,
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
    slug: "direito-criminal",
    image: imgDireitoCriminal,
    icon: Gavel,
    title: "Direito Criminal",
    shortDesc:
      "Defesa técnica e estratégica em todas as fases da persecução penal, com sigilo absoluto e respeito às garantias fundamentais.",
    subtitle:
      "Defesa criminal qualificada em inquéritos, ações penais e medidas cautelares, em todas as instâncias.",
    description: [
      "O Núcleo de Direito Criminal do escritório Moura & Galindo Advogados Associados atua em defesa de pessoas físicas e jurídicas investigadas ou processadas criminalmente, com foco na preservação das garantias constitucionais, da presunção de inocência e da ampla defesa.",
      "A atuação compreende desde a fase pré-processual — em investigações, inquéritos policiais e procedimentos administrativos — até o acompanhamento integral da ação penal, recursos em tribunais superiores e execução penal, sempre com sigilo absoluto e estratégia técnica orientada ao caso concreto.",
    ],
    services: [
      "Defesa em inquéritos policiais e investigações",
      "Acompanhamento de audiências de custódia",
      "Defesa em ações penais e recursos",
      "Habeas corpus e medidas cautelares",
      "Crimes contra a ordem econômica e tributária",
      "Crimes empresariais e compliance criminal",
      "Execução penal e progressão de regime",
    ],
  },
  {
    slug: "direito-trabalhista-empresarial",
    image: imgDireitoTrabalhistaEmpresarial,
    icon: Briefcase,
    title: "Direito Trabalhista Empresarial",
    shortDesc:
      "Consultoria preventiva e estratégica para empregadores em rotinas trabalhistas, compliance e relações sindicais.",
    subtitle:
      "Assessoria jurídica preventiva voltada à gestão de pessoas e à adequação das empresas à legislação trabalhista.",
    description: [
      "O Núcleo de Direito Trabalhista Empresarial atua na assessoria de empregadores, oferecendo soluções jurídicas que conciliam a observância da legislação trabalhista com as necessidades operacionais e estratégicas das empresas.",
      "Prestamos consultoria preventiva em rotinas de Recursos Humanos, elaboração de políticas internas, análise de riscos, adequação à legislação trabalhista, sindical e previdenciária, além de apoio em negociações coletivas e em processos de reestruturação organizacional.",
    ],
    services: [
      "Consultoria preventiva e auditoria trabalhista",
      "Elaboração de contratos e políticas internas",
      "Compliance trabalhista e LGPD aplicada ao RH",
      "Negociação coletiva e relações sindicais",
      "Assessoria em demissões, acordos e PDVs",
      "Treinamentos e consultoria em SST",
    ],
  },
  {
    slug: "direito-da-crianca-e-adolescente",
    image: imgDireitoDaCriancaEAdolescente,
    icon: Baby,
    title: "Direito da Criança e Adolescente",
    shortDesc:
      "Atuação especializada na proteção integral de crianças e adolescentes, com base no ECA e em tratados internacionais.",
    subtitle:
      "Defesa dos direitos de crianças e adolescentes, com atuação humanizada e em estrita observância ao princípio da proteção integral.",
    description: [
      "O Núcleo de Direito da Criança e Adolescente atua na defesa dos direitos fundamentais previstos na Constituição Federal e no Estatuto da Criança e do Adolescente (ECA), assegurando a proteção integral em todas as suas dimensões — pessoal, familiar, social e patrimonial.",
      "Conduzimos demandas envolvendo guarda, adoção, medidas protetivas, atos infracionais, alienação parental, regulamentação de convivência e questões relacionadas à educação e à saúde de menores, sempre com sensibilidade, sigilo e respeito ao melhor interesse da criança.",
    ],
    services: [
      "Processos de adoção nacional e internacional",
      "Guarda e regulamentação de convivência",
      "Defesa em atos infracionais",
      "Medidas protetivas e judiciais",
      "Alienação parental",
      "Acompanhamento em conselhos tutelares e Varas da Infância",
    ],
  },
  {
    slug: "direito-sucessorio",
    image: imgDireitoSucessorio,
    icon: ScrollText,
    title: "Direito Sucessório",
    shortDesc:
      "Planejamento sucessório e condução de inventários, partilhas e testamentos com técnica, sigilo e segurança patrimonial.",
    subtitle:
      "Soluções jurídicas para a transmissão de patrimônio entre gerações, com foco em prevenção de litígios e eficiência fiscal.",
    description: [
      "O Núcleo de Direito Sucessório atua no planejamento e na execução da transmissão de patrimônio entre gerações, oferecendo soluções que aliam segurança jurídica, redução de carga tributária e preservação do interesse familiar.",
      "Conduzimos inventários judiciais e extrajudiciais, partilhas, testamentos, doações e estruturações patrimoniais — sempre com a preocupação de antecipar conflitos e proteger o legado dos clientes ao longo do tempo.",
    ],
    services: [
      "Inventários judiciais e extrajudiciais",
      "Partilha de bens e sobrepartilha",
      "Testamentos e codicilos",
      "Planejamento sucessório familiar",
      "Doações e usufrutos",
      "Holding patrimonial e proteção de bens",
    ],
  },
  {
    slug: "direito-medico-e-da-saude",
    image: imgDireitoMedicoEDaSaude,
    icon: Stethoscope,
    title: "Direito Médico e da Saúde",
    shortDesc:
      "Consultoria e defesa para profissionais e instituições da saúde em questões éticas, contratuais e judiciais.",
    subtitle:
      "Atuação especializada na proteção jurídica de médicos, clínicas, hospitais, operadoras e pacientes.",
    description: [
      "O Núcleo de Direito Médico e da Saúde do escritório Moura & Galindo presta assessoria a profissionais e instituições da área da saúde, com olhar técnico voltado tanto à prevenção de litígios quanto à defesa qualificada em processos administrativos e judiciais.",
      "Atuamos em demandas de responsabilidade civil médica, processos ético-disciplinares perante os Conselhos Regionais e Federal de Medicina, elaboração de termos de consentimento informado, contratos hospitalares, demandas contra planos de saúde e auditorias documentais — sempre com sigilo absoluto e profundo respeito ao exercício das profissões da saúde.",
    ],
    services: [
      "Defesa em ações de erro médico",
      "Processos ético-disciplinares (CRM/CFM e demais conselhos)",
      "Termos de consentimento informado",
      "Contratos hospitalares e de plantão",
      "Consultoria a clínicas, hospitais e operadoras",
      "Demandas contra planos de saúde",
      "Judicialização de medicamentos e tratamentos",
    ],
  },
  {
    slug: "direito-da-familia",
    image: imgDireitoDaFamilia,
    icon: Users2,
    title: "Direito da Família",
    shortDesc:
      "Atuação humanizada em questões familiares, com cuidado, sigilo e estratégia em cada caso.",
    subtitle:
      "Cuidado, técnica e sensibilidade em cada relação familiar e em cada decisão que envolve o núcleo afetivo.",
    description: [
      "O Núcleo de Direito da Família é conduzido por profissionais com sólida formação acadêmica e ampla experiência prática, atuando com sensibilidade às particularidades de cada núcleo familiar.",
      "Conduzimos demandas envolvendo divórcio, dissolução de união estável, guarda e regulamentação de convivência, alimentos, partilha de bens, reconhecimento de paternidade e mediação familiar — sempre com foco em preservar relações e patrimônio, priorizando soluções consensuais sempre que possível.",
    ],
    services: [
      "Divórcio e dissolução de união estável",
      "Guarda, convivência e alimentos",
      "Partilha de bens e meações",
      "Reconhecimento e dissolução de uniões",
      "Reconhecimento de paternidade",
      "Pactos antenupciais e contratos de convivência",
      "Mediação familiar",
    ],
  },
  {
    slug: "direito-tributario",
    image: imgDireitoTributario,
    icon: Landmark,
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
    slug: "direito-empresarial-e-societario",
    image: imgDireitoEmpresarialESocietario,
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
    slug: "direito-do-consumidor",
    image: imgDireitoDoConsumidor,
    icon: ShoppingCart,
    title: "Direito do Consumidor",
    shortDesc:
      "Atuação na defesa de consumidores e fornecedores, com foco em relações equilibradas e na prevenção de litígios.",
    subtitle:
      "Soluções jurídicas para todas as relações de consumo — judiciais, extrajudiciais e administrativas.",
    description: [
      "O Núcleo de Direito do Consumidor atua tanto na defesa de consumidores quanto na assessoria de fornecedores de produtos e serviços, sempre orientado pelos princípios do Código de Defesa do Consumidor e pela busca de soluções equilibradas e eficientes.",
      "Conduzimos demandas envolvendo cobranças indevidas, vícios e defeitos em produtos e serviços, contratos de adesão, práticas abusivas, planos de saúde, transporte aéreo e responsabilidade civil — além de prestar consultoria preventiva para empresas que desejam adequar suas práticas comerciais.",
    ],
    services: [
      "Ações por vícios e defeitos em produtos e serviços",
      "Cobranças indevidas e negativações",
      "Revisão de contratos de adesão",
      "Defesa em PROCON e órgãos administrativos",
      "Indenizações por danos morais e materiais",
      "Compliance consumerista para empresas",
    ],
  },
  {
    slug: "direito-da-moda",
    image: imgDireitoDaModa,
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
  {
    slug: "direito-previdenciario",
    image: imgDireitoPrevidenciario,
    icon: PiggyBank,
    title: "Direito Previdenciário",
    shortDesc:
      "Assessoria em benefícios previdenciários, revisões e planejamento da aposentadoria nos regimes geral e próprio.",
    subtitle:
      "Atuação técnica em benefícios do INSS, regimes próprios e planejamento previdenciário.",
    description: [
      "O Núcleo de Direito Previdenciário atua na orientação de segurados do Regime Geral de Previdência Social (RGPS) e dos Regimes Próprios (RPPS), tanto na via administrativa quanto na judicial, com foco na obtenção e revisão de benefícios e na elaboração de planejamentos previdenciários personalizados.",
      "Acompanhamos as constantes mudanças legislativas — em especial as Reformas da Previdência — para oferecer ao cliente a melhor estratégia de concessão, revisão ou complementação de benefícios.",
    ],
    services: [
      "Aposentadoria por idade, tempo de contribuição e especial",
      "Benefícios por incapacidade (auxílio-doença e aposentadoria)",
      "Pensão por morte e auxílio-reclusão",
      "Revisão de benefícios e RMI",
      "Planejamento previdenciário personalizado",
      "Recursos administrativos junto ao INSS",
      "Ações judiciais previdenciárias",
    ],
  },
  {
    slug: "direito-publico-administrativo",
    image: imgDireitoPublicoAdministrativo,
    icon: Building2,
    title: "Direito Público/Administrativo",
    shortDesc:
      "Atuação em licitações, contratos administrativos e demandas contra o Poder Público, com técnica e celeridade.",
    subtitle:
      "Defesa de direitos e interesses em relações com a Administração Pública direta e indireta.",
    description: [
      "O Núcleo de Direito Público e Administrativo atua na defesa de pessoas físicas, empresas privadas e entes públicos em suas relações com a Administração Pública, abrangendo procedimentos licitatórios, contratos administrativos, servidores públicos, processos disciplinares e responsabilização do Estado.",
      "Oferecemos atuação consultiva e contenciosa pautada pela observância dos princípios constitucionais que regem a Administração — legalidade, impessoalidade, moralidade, publicidade e eficiência — e pela busca de soluções tecnicamente sólidas.",
    ],
    services: [
      "Licitações e contratos administrativos",
      "Mandado de segurança e ações contra o Poder Público",
      "Direitos de servidores públicos",
      "Processos administrativos disciplinares (PAD)",
      "Responsabilidade civil do Estado",
      "Improbidade administrativa (defesa)",
      "Concursos públicos",
    ],
  },
  {
    slug: "direito-ambiental",
    image: imgDireitoAmbiental,
    icon: Leaf,
    title: "Direito Ambiental",
    shortDesc:
      "Consultoria e defesa em licenciamento, responsabilidade ambiental e compliance, com olhar técnico e estratégico.",
    subtitle:
      "Assessoria preventiva e contenciosa em todas as dimensões do Direito Ambiental, com foco em sustentabilidade e conformidade legal.",
    description: [
      "O Núcleo de Direito Ambiental atua na consultoria preventiva e na defesa em processos administrativos e judiciais envolvendo licenciamento, responsabilidade civil ambiental, infrações e termos de ajustamento de conduta (TACs).",
      "Auxiliamos empresas, produtores rurais e empreendimentos a se adequarem às normas ambientais aplicáveis, mitigando riscos regulatórios e estruturando políticas internas de sustentabilidade alinhadas às melhores práticas de ESG.",
    ],
    services: [
      "Licenciamento ambiental",
      "Defesa em autos de infração ambiental",
      "Termos de ajustamento de conduta (TAC)",
      "Responsabilidade civil ambiental",
      "Compliance ambiental e ESG",
      "Consultoria para o agronegócio",
      "Defesa em ações civis públicas",
    ],
  },
  {
    slug: "direito-bancario",
    image: imgDireitoBancario,
    icon: Banknote,
    title: "Direito Bancário",
    shortDesc:
      "Atuação em revisões contratuais, defesa em execuções e relações com instituições financeiras.",
    subtitle:
      "Defesa qualificada em discussões com instituições financeiras e consultoria em operações bancárias.",
    description: [
      "O Núcleo de Direito Bancário atua na defesa de clientes pessoa física e jurídica em discussões envolvendo contratos bancários, financiamentos, cédulas de crédito, execuções de dívida e relações com instituições financeiras.",
      "Oferecemos análise técnica de cláusulas contratuais, revisão de juros e encargos abusivos, defesa em ações de busca e apreensão, execuções e renegociação de dívidas — sempre orientados pela busca de soluções equilibradas e juridicamente sustentáveis.",
    ],
    services: [
      "Revisão de contratos bancários e financiamentos",
      "Defesa em ações de busca e apreensão",
      "Defesa em execuções de cédulas de crédito",
      "Discussão de juros e encargos abusivos",
      "Renegociação e repactuação de dívidas",
      "Recuperação de crédito (lado credor)",
      "Consultoria em operações bancárias",
    ],
  },
  {
    slug: "contencioso-trabalhista",
    image: imgContenciosoTrabalhista,
    icon: HardHat,
    title: "Contencioso Trabalhista",
    shortDesc:
      "Defesa estratégica de empresas em reclamações trabalhistas, em todas as instâncias da Justiça do Trabalho.",
    subtitle:
      "Atuação contenciosa qualificada em todas as fases e instâncias do processo do trabalho.",
    description: [
      "O Núcleo de Contencioso Trabalhista atua exclusivamente na defesa de empresas em reclamações trabalhistas, conduzindo audiências, recursos e execuções com técnica processual aprofundada e visão estratégica sobre cada demanda.",
      "Acompanhamos os processos desde a fase inicial até os tribunais superiores, com elaboração de defesas, recursos ordinários e extraordinários, embargos e ações rescisórias, sempre alinhados à política de gestão de passivo trabalhista do cliente.",
    ],
    services: [
      "Defesa em reclamações trabalhistas",
      "Acompanhamento de audiências em todo o país",
      "Recursos ordinários, de revista e extraordinários",
      "Execuções trabalhistas e cálculos",
      "Ações rescisórias",
      "Gestão de passivo e provisionamento",
      "Acordos judiciais e extrajudiciais",
    ],
  },
  {
    slug: "direito-eleitoral",
    image: imgDireitoEleitoral,
    icon: Vote,
    title: "Direito Eleitoral",
    shortDesc:
      "Assessoria a candidatos, partidos e coligações em todas as fases do processo eleitoral.",
    subtitle:
      "Atuação técnica e estratégica em campanhas, prestação de contas e contencioso eleitoral.",
    description: [
      "O Núcleo de Direito Eleitoral presta assessoria a candidatos, partidos políticos, coligações e federações partidárias em todas as fases do processo eleitoral, atuando de forma preventiva e contenciosa perante a Justiça Eleitoral.",
      "Conduzimos prestações de contas, registros de candidatura, propaganda eleitoral, ações de impugnação, investigações judiciais eleitorais (AIJE), ações de investigação de mandato eletivo (AIME) e recursos junto aos Tribunais Regionais Eleitorais e ao Tribunal Superior Eleitoral.",
    ],
    services: [
      "Registro de candidatura e propaganda eleitoral",
      "Prestação de contas de campanha e partidária",
      "Ações de impugnação de candidatura",
      "AIJE e AIME",
      "Recursos eleitorais",
      "Consultoria a partidos e coligações",
      "Defesa em ações por captação ilícita de sufrágio",
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
