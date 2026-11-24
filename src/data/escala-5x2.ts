/**
 * Conteúdo da landing da Escala 5x2 (Núcleo Trabalhista Empresarial).
 * Textos centralizados aqui para que os componentes de seção fiquem só com a apresentação.
 */

export const LANDING_PATH = "/escala-5x2";
export const LANDING_URL = `https://mouraegalindoadvogados.com.br${LANDING_PATH}`;

/** Imagem de pré-visualização do link (1200x630), servida de /public/og. */
export const OG_IMAGE_URL = "https://mouraegalindoadvogados.com.br/og/escala-5x2.jpg?v=2";
export const OG_IMAGE_ALT =
  "Escala 5x2: o que muda na jornada, no quadro de pessoal e no custo da folha. Núcleo Trabalhista Empresarial do Moura & Galindo.";

/** Mensagens pré-preenchidas dos botões de WhatsApp desta landing. */
export const WHATSAPP_MENSAGEM = "Olá! Tenho uma dúvida sobre a escala 5x2.";
export const WHATSAPP_MENSAGEM_GERADOR =
  "Olá! Gostaria de solicitar o Gerador de Escalas para a minha empresa.";
export const WHATSAPP_MENSAGEM_COORDENACAO =
  "Olá! Gostaria de falar com a coordenação do Núcleo Trabalhista Empresarial sobre a escala 5x2.";

export interface Destaque {
  valor: string;
  legenda: string;
}

export interface MarcoCalendario {
  periodo: string;
  horas: string;
  descricao: string;
  atual: boolean;
}

export interface PontoEssencial {
  titulo: string;
  texto: string;
}

export type DiaEscala = "T" | "F";

export interface LinhaEscala {
  equipe: string;
  dias: DiaEscala[];
}

export interface Pergunta {
  pergunta: string;
  respostas: string[];
}

export interface EtapaMetodo {
  titulo: string;
  texto: string;
}

export const destaques: Destaque[] = [
  { valor: "42h", legenda: "Teto semanal na 1ª etapa" },
  { valor: "2", legenda: "Repousos semanais remunerados" },
  { valor: "16.12.2026", legenda: "Início da primeira etapa" }
];

export const calendario: MarcoCalendario[] = [
  {
    periodo: "Até 15/12/2026",
    horas: "44h",
    descricao: "Jornada semanal atual, com um dia de repouso. Nada muda até essa data.",
    atual: false
  },
  {
    periodo: "De 16/12/2026",
    horas: "42h",
    descricao:
      "Primeira etapa. Teto de 42 horas semanais e dois dias de repouso remunerado, sem redução salarial.",
    atual: true
  },
  {
    periodo: "De 16/12/2027",
    horas: "40h",
    descricao: "Segunda etapa. Teto de 40 horas semanais, mantidos os dois dias de repouso.",
    atual: false
  }
];

export const pontosEssenciais: PontoEssencial[] = [
  {
    titulo: "Jornada e horário de funcionamento",
    texto:
      "A Emenda limita a jornada do empregado, e não o horário em que o estabelecimento abre. A loja pode continuar funcionando como funciona hoje, desde que a escala da equipe respeite o novo teto e os dois repousos."
  },
  {
    titulo: "A escala e os dois repousos",
    texto:
      "Cada empregado passa a ter dois dias de repouso de vinte e quatro horas, um deles preferencialmente no domingo. A escala precisa ser definida com antecedência e garantir a cobertura da operação em todos os dias."
  },
  {
    titulo: "A compensação de jornada",
    texto:
      "A legislação sobre compensação continua em vigor e permite distribuir as horas ao longo da semana e do mês. A distribuição dos repousos em regime compensatório, porém, depende de convenção ou acordo coletivo."
  },
  {
    titulo: "As normas coletivas",
    texto:
      "As cláusulas de convenções e acordos que tratam de jornada e repouso precisam ser revistas. As incompatíveis com a Emenda deixam de produzir efeitos quando as novas obrigações se tornam exigíveis, e podem ser renegociadas."
  },
  {
    titulo: "Documentação e registro",
    texto:
      "Escala em quadro de horário, aditivo contratual, controle de jornada e registro da escala de revezamento. É a documentação que demonstra a adequação em caso de fiscalização ou de reclamação trabalhista."
  }
];

export const entregasGerador: string[] = [
  "Distribuição dos cinco dias de trabalho e dos dois repousos, por empregado.",
  "Cobertura da abertura e do fechamento em todos os dias de funcionamento.",
  "Rodízio do repouso aos domingos, na forma exigida para a atividade.",
  "Intervalo para refeição e descanso entre jornadas, escalonados por equipe.",
  "Quadro de horário pronto para afixação e para a fiscalização.",
  "Indicação dos aditivos contratuais e dos ajustes de norma coletiva necessários."
];

export const diasSemana: string[] = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

/** Grade meramente ilustrativa exibida no Gerador de Escalas. */
export const escalaIlustrativa: LinhaEscala[] = [
  { equipe: "A", dias: ["F", "T", "T", "T", "T", "T", "F"] },
  { equipe: "B", dias: ["T", "F", "F", "T", "T", "T", "T"] },
  { equipe: "C", dias: ["T", "T", "T", "F", "F", "T", "T"] },
  { equipe: "D", dias: ["T", "T", "T", "T", "T", "F", "F"] }
];

export const duvidas: Pergunta[] = [
  {
    pergunta: "O que a Constituição passou a exigir?",
    respostas: [
      "A Emenda Constitucional nº 141/2026 alterou o art. 7º da Constituição para reduzir a duração normal do trabalho e assegurar dois dias de repouso semanal remunerado. A redução ocorre em duas etapas, e a implementação não pode gerar redução salarial, inclusive dos pisos das categorias."
    ]
  },
  {
    pergunta: "Minha empresa é obrigada a adotar a escala 5x2?",
    respostas: [
      "A Constituição não impõe um modelo único de escala. O que ela fixa é o teto de horas semanais e o direito a dois dias de repouso. A expressão escala 5x2 descreve o arranjo mais comum para cumprir essas duas exigências, mas outras organizações de jornada são possíveis, desde que respeitem os mesmos limites."
    ]
  },
  {
    pergunta: "Preciso fechar o estabelecimento dois dias por semana?",
    respostas: [
      "Não. O limite é da jornada de cada empregado, e não do funcionamento da empresa. O estabelecimento pode manter o seu horário, organizando a equipe em escalas de modo que cada pessoa tenha os seus dois repousos."
    ]
  },
  {
    pergunta: "Posso reduzir salários proporcionalmente à redução da jornada?",
    respostas: [
      "Não. A própria Emenda veda a redução salarial decorrente da implementação, em qualquer modalidade, e preserva os pisos salariais vigentes. A remuneração mensal contratada deve ser mantida."
    ]
  },
  {
    pergunta: "O que muda no divisor do salário-hora?",
    respostas: [
      "A redução da jornada semanal se reflete no divisor usado para apurar o valor da hora, que é a base das horas extras, do adicional noturno e das demais parcelas calculadas por hora. A regulamentação federal fixou os divisores aplicáveis a cada etapa e preservou divisores mais favoráveis já previstos em norma coletiva, contrato ou regulamento de empresa.",
      "O salário mensal contratado permanece com o mesmo valor nominal. O ajuste do divisor é uma adequação de cálculo, e não um reajuste."
    ]
  },
  {
    pergunta: "As convenções e os acordos coletivos continuam valendo?",
    respostas: [
      "Sim, com uma ressalva. Perdem eficácia as cláusulas que tratam de duração do trabalho e de repouso semanal em desacordo com os novos limites e garantias, a partir do momento em que as obrigações correspondentes se tornam exigíveis. As demais cláusulas do instrumento permanecem, e a renegociação das alcançadas é permitida.",
      "É recomendável levantar, desde já, quais cláusulas da sua convenção serão atingidas, para que a renegociação não seja feita sob pressão de prazo."
    ]
  },
  {
    pergunta: "É possível compensar jornada e distribuir os repousos ao longo do mês?",
    respostas: [
      "A compensação de jornada continua prevista na legislação trabalhista e permite distribuir as horas entre os dias da semana e do mês, observados os instrumentos exigidos em cada hipótese.",
      "A distribuição dos próprios repousos em regime compensatório é excepcional e depende de convenção ou acordo coletivo, que deve assegurar a média de dois repousos por semana no mês e um intervalo máximo de dias consecutivos de trabalho sem descanso."
    ]
  },
  {
    pergunta: "Como ficam as faltas e os feriados?",
    respostas: [
      "A falta injustificada continua a afetar o direito à remuneração do repouso da semana, nos termos da legislação específica, e as ausências legalmente justificadas preservam esse direito. O feriado que recai no próprio dia de repouso não gera pagamento em dobro, porque não houve trabalho a remunerar."
    ]
  },
  {
    pergunta: "A regulamentação já está completa?",
    respostas: [
      "Não. A aplicação da Emenda vem sendo detalhada por decreto e por portarias do Ministério do Trabalho e Emprego, e parte das questões ainda está submetida ao Supremo Tribunal Federal. Por isso, decisões de folha e de escala devem ser tomadas com registro da fundamentação adotada e com acompanhamento das publicações."
    ]
  }
];

export const BASE_NORMATIVA =
  "Base normativa geral: Constituição Federal, art. 7º, com a redação da Emenda Constitucional nº 141/2026; Consolidação das Leis do Trabalho; Lei nº 605/1949; regulamentação federal editada por decreto e por portarias do Ministério do Trabalho e Emprego; convenções e acordos coletivos da categoria.";

export const coordenadora = {
  nome: "Kilma Galindo do Nascimento",
  oab: "OAB/PE Nº 24.214",
  funcao: "Coordenadora do Núcleo Trabalhista Empresarial",
  escritorio: "Moura & Galindo Advogados Associados",
  curriculo: [
    "Advogada trabalhista, empresarial e sindical.",
    "Mestre em Gestão Empresarial e Relações de Trabalho.",
    "Especialista em Direito Material e Processual do Trabalho, em Direito Constitucional e em Psicologia Organizacional.",
    "Professora em cursos de graduação e de pós-graduação.",
    "Atuação em auditoria trabalhista, gestão de jornada e adequação de contratos de trabalho em empresas do comércio e da indústria."
  ]
};

export const etapasMetodo: EtapaMetodo[] = [
  {
    titulo: "Auditoria",
    texto: "Análise documental, coleta de informações e leitura da convenção coletiva aplicável à atividade."
  },
  {
    titulo: "Diagnóstico",
    texto: "Resultado da auditoria, grau de exposição a passivo e medidas corretivas, com parecer e recomendações."
  },
  {
    titulo: "Implementação",
    texto: "Aplicação das medidas, organização documental, escalas, aditivos e treinamento das equipes quando necessário."
  },
  {
    titulo: "Monitoramento",
    texto: "Acompanhamento das medidas implementadas, consultoria e correção diante de novas publicações."
  }
];

export const contato = {
  endereco: ["Avenida Aracati, 382", "Bairro Universitário", "Caruaru, Pernambuco"],
  instagram: {
    display: "@mouraegalindoadv",
    href: "https://instagram.com/mouraegalindoadv"
  }
};

/** Mês de referência das informações, exibido no rodapé. */
export const ATUALIZADO_EM = "novembro de 2026";
