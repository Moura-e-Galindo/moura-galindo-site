/**
 * Conteúdo da landing da Escala 5x2 (Núcleo Trabalhista Empresarial).
 * Textos centralizados aqui para que os componentes de seção fiquem só com a apresentação.
 */

export const LANDING_PATH = "/escala-5x2";
export const LANDING_URL = `https://mouraegalindoadvogados.com.br${LANDING_PATH}`;

/** Imagem de pré-visualização do link (1200x630), servida de /public/og. */
export const OG_IMAGE_URL = "https://mouraegalindoadvogados.com.br/og/escala-5x2.jpg";
export const OG_IMAGE_ALT =
  "Escala 5x2: o que muda na jornada, no quadro de pessoal e no custo da folha. Núcleo Trabalhista Empresarial do Moura & Galindo.";

/** Slug da calculadora na tabela `ferramentas` (rota /ferramentas/<slug>). */
export const CALCULADORA_SLUG = "calculadora-escala-5x2";

/** Página do núcleo responsável, em /areas/<slug>. */
export const NUCLEO_SLUG = "direito-trabalhista-empresarial";

/** Mensagens pré-preenchidas dos botões de WhatsApp desta landing. */
export const WHATSAPP_MENSAGEM = "Olá! Tenho uma dúvida sobre a escala 5x2.";
export const WHATSAPP_MENSAGEM_CALCULADORA =
  "Olá! Tenho uma dúvida sobre a Calculadora da Escala 5x2.";
export const WHATSAPP_MENSAGEM_SIMULACAO =
  "Olá! Gostaria de uma simulação da escala 5x2 da minha empresa.";

/** Tom de cor de cada bloco (acentos de apoio da marca). */
export type Tom = "ouro" | "azul" | "verde" | "vinho" | "grafite";

export interface EtapaCalendario {
  horas: string;
  periodo: string;
  descricao: string;
  destaque: boolean;
}

export interface PontoEssencial {
  tom: Tom;
  rotulo: string;
  titulo: string;
  texto: string;
  largo?: boolean;
}

export interface Pergunta {
  pergunta: string;
  respostas: string[];
  base: string;
}

export interface PerfilDuvidas {
  id: string;
  rotulo: string;
  tom: Tom;
  perguntas: Pergunta[];
}

export interface ItemCurriculo {
  destaque: string;
  texto: string;
}

export interface EtapaProjeto {
  tom: Tom;
  titulo: string;
  texto: string;
}

export const calendario: EtapaCalendario[] = [
  {
    horas: "44h",
    periodo: "até 15/12/2026",
    descricao: "Regra atual, com um repouso semanal. Janela para diagnóstico e negociação coletiva.",
    destaque: false
  },
  {
    horas: "42h",
    periodo: "de 16/12/2026",
    descricao: "Dois repousos passam a ser devidos e cláusulas coletivas incompatíveis perdem eficácia.",
    destaque: true
  },
  {
    horas: "40h",
    periodo: "de 16/12/2027",
    descricao: "Teto definitivo. O divisor cai para 200 e o valor da hora sobe cerca de dez por cento.",
    destaque: true
  }
];

export const pontosEssenciais: PontoEssencial[] = [
  {
    tom: "azul",
    rotulo: "Funcionamento",
    titulo: "Jornada não é horário de funcionamento",
    texto: "A emenda regula a jornada de cada empregado, não a abertura do estabelecimento. A loja pode continuar funcionando nos sete dias da semana, desde que organize as folgas em revezamento. O horário segue a legislação municipal e a convenção coletiva."
  },
  {
    tom: "ouro",
    rotulo: "Primeira etapa",
    titulo: "Na prática, o teto real é de 40 horas",
    texto: "O limite de oito horas diárias permanece na Constituição, e cinco dias de oito horas somam quarenta. Sem cláusula coletiva que amplie a jornada diária, as duas horas que faltam para fechar as 42 são extraordinárias, e não normais."
  },
  {
    tom: "verde",
    rotulo: "Salário",
    titulo: "O salário não cai, mas a hora encarece",
    texto: "A irredutibilidade alcança a remuneração e os pisos da categoria. Mantido o salário e reduzidas as horas contratadas, o divisor cai de 220 para 210 e depois para 200, elevando o valor da hora em cerca de dez por cento."
  },
  {
    tom: "vinho",
    rotulo: "Hora extra",
    titulo: "A hora extraordinária encarece duas vezes",
    texto: "Além da elevação da base de cálculo, o reflexo das extras no repouso semanal sobe de cerca de quinze para cerca de quarenta por cento, porque a razão entre dias de descanso e dias úteis se altera com o segundo repouso."
  },
  {
    tom: "grafite",
    rotulo: "Prazo",
    titulo: "Em 16 de dezembro de 2026, cláusulas coletivas incompatíveis perdem eficácia",
    texto: "O prazo de dois meses contados da promulgação encerra-se na mesma data em que os dois repousos passam a ser devidos. A empresa que estiver contando com cláusula de jornada já pactuada pode descobrir, naquele dia, que a cláusula deixou de existir. A revisão dos instrumentos vigentes é, por isso, tarefa de curto prazo.",
    largo: true
  }
];

export const recursosCalculadora: string[] = [
  "Preenche o ponto dia a dia, com entrada, intervalo e saída, e calcula a jornada sozinha",
  "Aponta o teto que de fato se aplica em cada etapa da transição",
  "Apura as horas excedentes e o custo das extraordinárias com o adicional da convenção",
  "Calcula o divisor, o valor da hora e o reflexo no repouso semanal",
  "Compara repor a diferença com hora extra ou com contratação",
  "Sinaliza intervalos, repousos e limites diários fora da regra"
];

export const perfisDuvidas: PerfilDuvidas[] = [
  {
    id: "empresas",
    rotulo: "Empresas",
    tom: "azul",
    perguntas: [
      {
        pergunta: "Minha empresa é obrigada a adotar a escala 5x2?",
        respostas: [
          "A obrigação constitucional é conceder dois repousos semanais remunerados e respeitar o teto de horas. A escala 5x2 é a forma mais direta de cumpri-la, mas não é a única, porque o regime compensatório excepcional admite distribuição diferente dos descansos mediante convenção ou acordo coletivo."
        ],
        base: "CF, art. 7º, XIII e XV, e § 2º, na redação da EC nº 141/2026."
      },
      {
        pergunta: "Preciso fechar o estabelecimento dois dias por semana?",
        respostas: [
          "Não. A obrigação é de cada contrato de trabalho, e não do estabelecimento. Com revezamento adequado, a empresa funciona nos sete dias e todos os empregados gozam dois repousos. Em uma equipe de oito pessoas, a cobertura pode ser mantida sem nenhum dia abaixo de seis presentes."
        ],
        base: "CF, art. 7º, XV. Lei nº 10.101/2000."
      },
      {
        pergunta: "Posso reduzir salários proporcionalmente à redução da jornada?",
        respostas: [
          "Não. A emenda veda expressamente a redução de salários em razão da diminuição da jornada, e estende a proteção aos pisos salariais. Também afasta a redução proporcional para quem já cumpre jornada igual ou inferior a quarenta horas."
        ],
        base: "EC nº 141/2026, arts. 2º e 4º."
      },
      {
        pergunta: "Serei obrigado a contratar mais empregados?",
        respostas: [
          "Não há obrigação legal de contratação. A necessidade depende do déficit de cobertura apurado no diagnóstico. Operações com ociosidade em determinados turnos frequentemente absorvem a redução por reorganização, enquanto equipes dimensionadas no limite tendem a precisar de reforço, que pode vir em tempo parcial ou em contrato intermitente."
        ],
        base: "CLT, arts. 58-A e 443, § 3º."
      }
    ]
  },
  {
    id: "contadores",
    rotulo: "Contadores",
    tom: "ouro",
    perguntas: [
      {
        pergunta: "Qual divisor devo aplicar em cada etapa?",
        respostas: [
          "O divisor acompanha a jornada normal contratada, e não a efetivamente trabalhada: 220 para 44 horas, 210 para 42 e 200 para 40. Atenção à primeira etapa, porque sem cláusula coletiva a jornada normal é de quarenta horas e o divisor é 200, ainda que a empresa trabalhe quarenta e duas.",
          "Desde outubro de 2026, o TST fixou tese vinculante admitindo que a norma coletiva fixe o divisor 220 para a jornada de quarenta horas, hipótese em que o valor da hora permanece no patamar atual."
        ],
        base: "TST, Súmula nº 431. TST, Tema 316, julgado em 23 de outubro de 2026."
      },
      {
        pergunta: "Como fica o reflexo das horas extras no repouso?",
        respostas: [
          "O fator aumenta de modo expressivo. Com um repouso, a proporção girava em torno de quinze por cento. Com dois repousos, aproxima-se de quarenta por cento, porque a razão entre dias de repouso e dias úteis do mês se altera."
        ],
        base: "Lei nº 605/1949, art. 7º, alínea \"a\"."
      },
      {
        pergunta: "Quanto sobe o custo efetivo da hora extraordinária?",
        respostas: [
          "Cerca de um terço entre o regime atual e a segunda etapa, somando os dois efeitos. A base de cálculo sobe aproximadamente dez por cento e o reflexo no repouso mais que dobra. Por isso, cobrir déficit permanente com hora extra tende a ser a opção mais cara no médio prazo."
        ],
        base: "CF, art. 7º, XVI. Lei nº 605/1949. Adicional conforme a convenção coletiva."
      }
    ]
  },
  {
    id: "departamento-pessoal",
    rotulo: "Departamento pessoal e RH",
    tom: "verde",
    perguntas: [
      {
        pergunta: "Mudou alguma coisa nas férias?",
        respostas: [
          "Mudou a janela de início. A CLT veda o início das férias nos dois dias que antecedem feriado ou repouso. Com folga no fim de semana, quinta e sexta passam a estar vedadas, restando segunda, terça e quarta-feira. Calendários de férias já montados precisam de revisão."
        ],
        base: "CLT, art. 134, § 3º, combinado com a CF, art. 7º, XV."
      },
      {
        pergunta: "Como fica o desconto por falta injustificada?",
        respostas: [
          "O ponto ainda não está pacificado. A regra foi redigida quando havia um único repouso por semana, e a leitura literal levaria à perda dos dois repousos. A leitura sistemática defende a perda de apenas um. Enquanto não houver consolidação, recomenda-se tratar o critério na convenção coletiva."
        ],
        base: "Lei nº 605/1949, art. 6º."
      },
      {
        pergunta: "Quando preciso ter a nova escala pronta?",
        respostas: [
          "Até 15 de dezembro de 2026, para que entre em vigor no dia 16. Essa mesma data encerra o prazo de dois meses para que percam eficácia as cláusulas coletivas incompatíveis com o novo regime, o que recomenda antecipação. O quadro de horários passa a funcionar como prova do cumprimento."
        ],
        base: "EC nº 141/2026, arts. 3º e 6º."
      }
    ]
  },
  {
    id: "direito",
    rotulo: "Profissionais do Direito",
    tom: "vinho",
    perguntas: [
      {
        pergunta: "A escala 12x36 continua válida?",
        respostas: [
          "Em um ciclo de quatorze dias, a 12x36 corresponde a quarenta e duas horas semanais em média, compatível com a primeira etapa, mas não com o teto de quarenta horas da segunda, salvo pelo regime compensatório da emenda. O acordo individual continua servindo para pactuar a duração do plantão, não para organizar os repousos fora do padrão constitucional."
        ],
        base: "CLT, art. 59-A. CF, art. 7º, XV e § 2º."
      },
      {
        pergunta: "O que depende de norma coletiva?",
        respostas: [
          "A ampliação da jornada diária durante a primeira etapa, o regime compensatório de repousos e a compensação de horários. A negociação coletiva pode organizar a aplicação dos novos direitos, nos termos do Tema 1046 do STF, mas não suprimi-los, porque esbarraria no texto constitucional e no rol do art. 611-B da CLT."
        ],
        base: "EC nº 141/2026, art. 7º. CF, art. 7º, XIII e § 2º. STF, Tema 1046."
      },
      {
        pergunta: "O decreto anunciado pelo governo resolve o problema?",
        respostas: [
          "Não para o comércio. As atividades mencionadas são de operação contínua, e o comércio não está entre elas. Além disso, a emenda reserva a matéria à lei, de modo que um decreto que criasse regime novo exorbitaria do poder regulamentar e ficaria exposto à sustação pelo Congresso e ao controle incidental. Planejar contando com essa norma é assumir risco retroativo."
        ],
        base: "CF, arts. 49, V, e 84, IV e VI. EC nº 141/2026, arts. 5º e 7º, § 3º."
      }
    ]
  }
];

export const coordenadora = {
  nome: "Kilma Galindo",
  apresentacao:
    "Advogada trabalhista empresarial e sindical. Conduz a adequação de jornadas, a negociação coletiva e a prevenção de passivos.",
  curriculo: [
    {
      destaque: "OAB/PE nº 24.214.",
      texto: "Sócia do escritório e coordenadora do Núcleo Trabalhista Empresarial."
    },
    {
      destaque: "Mestra",
      texto: "em Gestão Empresarial e Relações de Trabalho pela UNIFBV."
    },
    {
      destaque: "Especialista",
      texto: "em Direito Material e Processual do Trabalho, em Direito Constitucional e em Psicologia Organizacional."
    },
    {
      destaque: "Especialista",
      texto: "em Mediação e Arbitragem pela Fundação Getulio Vargas."
    },
    {
      destaque: "Professora universitária",
      texto: "e assessora jurídica do Sindicato dos Lojistas do Comércio de Caruaru."
    }
  ] satisfies ItemCurriculo[]
};

export const etapasProjeto: EtapaProjeto[] = [
  {
    tom: "azul",
    titulo: "Auditoria",
    texto: "Levantamento das jornadas contratuais e efetivas, escalas, controles de ponto, regimes especiais, horas extraordinárias e cláusulas da convenção aplicável."
  },
  {
    tom: "ouro",
    titulo: "Diagnóstico",
    texto: "Apuração do déficit de cobertura em cada etapa, simulação comparada dos cenários de custo e identificação do que depende de norma coletiva."
  },
  {
    tom: "verde",
    titulo: "Implementação",
    texto: "Desenho das escalas, ajuste do divisor e dos parâmetros de folha e ponto, formalização dos instrumentos e orientação das lideranças."
  },
  {
    tom: "vinho",
    titulo: "Monitoramento",
    texto: "Acompanhamento da aderência entre escala e ponto, do volume de horas extraordinárias e do cumprimento dos repousos, com correção dos desvios."
  }
];

export const contato = {
  enderecoLinha1: "Avenida Aracati, 382",
  enderecoLinha2: "Bairro Universitário, Caruaru, Pernambuco",
  mapaUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Aracati+382+Caruaru+PE",
  instagram: {
    display: "@mouraegalindoadv",
    href: "https://instagram.com/mouraegalindoadv"
  }
};
