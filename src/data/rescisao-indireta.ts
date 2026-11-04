/**
 * Conteúdo da landing de Rescisão Indireta (Direito do Trabalho).
 * Textos centralizados aqui para que os componentes de seção fiquem só com a apresentação.
 */

export const LANDING_PATH = "/rescisao-indireta";
export const LANDING_URL = `https://mouraegalindoadvogados.com.br${LANDING_PATH}`;

/** Mensagem pré-preenchida dos botões de WhatsApp desta landing. */
export const WHATSAPP_MENSAGEM =
  "Olá! Li o conteúdo sobre rescisão indireta e gostaria de esclarecer uma dúvida.";

export const CONTEUDO_ATUALIZADO_EM = "outubro de 2026";

export interface PontoPrincipal {
  rotulo: string;
  titulo: string;
  texto: string;
}

export interface Hipotese {
  letra: string;
  titulo: string;
  texto: string;
  /** Destaca o card (usado no § 3º). */
  destaque?: boolean;
}

/** Variação visual dos cards de tese. */
export type TomTese = "ouro" | "petroleo" | "tinta";

export interface Tese {
  tom: TomTese;
  selo: string;
  tema: string;
  assunto: string;
  enunciado: string;
  referencia: string;
  link?: string;
}

/** Variação visual dos cards de súmula e tema pendente. */
export type TomPrecedente = "vigente" | "pendente";

export interface Precedente {
  tom: TomPrecedente;
  rotulo: string;
  titulo: string;
  texto: string;
  link?: { href: string; label: string };
}

export interface Faq {
  question: string;
  answer: string;
}

export interface LinkFonte {
  label: string;
  href: string;
}

export const pontosPrincipais: PontoPrincipal[] = [
  {
    rotulo: "Conceito",
    titulo: "O que é",
    texto:
      "Ruptura do contrato por iniciativa do empregado, em razão de falta grave praticada pelo empregador. É conhecida como justa causa patronal e depende de reconhecimento pela Justiça do Trabalho."
  },
  {
    rotulo: "Base legal",
    titulo: "Art. 483 da CLT",
    texto:
      "Sete alíneas descrevem as faltas graves do empregador. O § 3º permite, nas alíneas d e g, que o empregado permaneça ou não no serviço até a decisão final."
  },
  {
    rotulo: "Prova",
    titulo: "Gravidade da falta",
    texto:
      "Não basta qualquer irregularidade. A conduta precisa ser comprovada e grave o suficiente para tornar insustentável a continuidade do vínculo."
  },
  {
    rotulo: "Efeitos",
    titulo: "Verbas rescisórias",
    texto:
      "Reconhecida a rescisão indireta, as verbas equivalem às da dispensa sem justa causa, com a multa do art. 477, § 8º, da CLT (Tema 52 do TST)."
  }
];

export const hipoteses: Hipotese[] = [
  {
    letra: "a",
    titulo: "Serviços indevidos",
    texto:
      "Exigência de serviços superiores às forças do empregado, proibidos por lei, contrários aos bons costumes ou alheios ao contrato."
  },
  {
    letra: "b",
    titulo: "Rigor excessivo",
    texto: "Tratamento com rigor excessivo pelo empregador ou por superiores hierárquicos."
  },
  {
    letra: "c",
    titulo: "Perigo manifesto",
    texto: "Exposição do empregado a perigo manifesto de mal considerável."
  },
  {
    letra: "d",
    titulo: "Descumprimento do contrato",
    texto:
      "O empregador deixa de cumprir as obrigações do contrato, como o pagamento de salários e o recolhimento do FGTS. Os Temas 70 e 85 do TST tratam desta alínea."
  },
  {
    letra: "e",
    titulo: "Ofensa à honra",
    texto:
      "Ato lesivo da honra e boa fama praticado pelo empregador ou por seus prepostos contra o empregado ou pessoas de sua família."
  },
  {
    letra: "f",
    titulo: "Ofensa física",
    texto:
      "Agressão física pelo empregador ou por seus prepostos, salvo em caso de legítima defesa, própria ou de outrem."
  },
  {
    letra: "g",
    titulo: "Redução por peça ou tarefa",
    texto:
      "Redução do trabalho remunerado por peça ou tarefa, de modo a afetar sensivelmente o valor dos salários."
  },
  {
    letra: "§ 3º",
    titulo: "Permanência no serviço",
    texto:
      "Nas hipóteses das alíneas d e g, o empregado pode pleitear a rescisão permanecendo ou não no serviço até a decisão final do processo.",
    destaque: true
  }
];

export const FONTE_CLT: LinkFonte = {
  label: "Consolidação das Leis do Trabalho, art. 483 (Planalto)",
  href: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"
};

export const requisitos: string[] = [
  "Falta do empregador comprovada",
  "Gravidade que inviabilize o vínculo",
  "Enquadramento no art. 483 da CLT",
  "Relação entre a falta e a ruptura",
  "Prova documental e testemunhal consistente"
];

export const teses: Tese[] = [
  {
    tom: "ouro",
    selo: "Caracteriza a falta",
    tema: "Tema 70",
    assunto: "FGTS ausente ou irregular",
    enunciado:
      "“A ausência ou irregularidade no recolhimento dos depósitos de FGTS caracteriza descumprimento de obrigação contratual, nos termos do art. 483, ‘d’, da CLT, suficiente para configurar a rescisão indireta do contrato de trabalho, sendo desnecessário o requisito da imediatidade.”",
    referencia: "RRAg-1000063-90.2024.5.02.0032 · publicado em 14/03/2025"
  },
  {
    tom: "petroleo",
    selo: "Caracteriza a falta",
    tema: "Tema 85",
    assunto: "Horas extras e intervalo intrajornada",
    enunciado:
      "“O descumprimento contratual contumaz relativo à ausência do pagamento de horas extraordinárias e a não concessão do intervalo intrajornada autoriza a rescisão indireta do contrato de trabalho, na forma do art. 483, ‘d’, da CLT.”",
    referencia: "RRAg-1000642-07.2023.5.02.0086 · publicado em 08/04/2025",
    link: "https://portal.trt3.jus.br/internet/jurisprudencia/incidentes-suscitados-irr-iac-arginc-tst/downloads/acordao-merito-tema-85-tst-rrag-1000642-07-2023-5-02-0086.pdf"
  },
  {
    tom: "tinta",
    selo: "Efeito financeiro",
    tema: "Tema 52",
    assunto: "Multa do art. 477, § 8º, da CLT",
    enunciado:
      "“Reconhecida em juízo a rescisão indireta do contrato de trabalho é devida a multa prevista no artigo 477, § 8º, da CLT.”",
    referencia: "RRAg-0000367-98.2023.5.17.0008 · acórdão de 24/02/2025",
    link: "https://portal.trt3.jus.br/internet/jurisprudencia/incidentes-suscitados-irr-iac-arginc-tst/downloads/tema-52-acordao-tst-rrag-0000367-98-2023-5-17-0008.pdf"
  }
];

export const precedentes: Precedente[] = [
  {
    tom: "vigente",
    rotulo: "Súmula vigente",
    titulo: "Súmula 13 · Mora salarial",
    texto:
      "O simples pagamento dos salários atrasados em audiência não afasta a mora capaz de determinar a rescisão do contrato de trabalho."
  },
  {
    tom: "pendente",
    rotulo: "Em julgamento no TST",
    titulo: "Tema 212 · Adicional de insalubridade",
    texto:
      "O TST vai definir se a falta de pagamento do adicional de insalubridade autoriza a rescisão indireta. O tema está afetado ao rito dos recursos repetitivos e ainda não tem tese fixada.",
    link: {
      label: "Ver a questão afetada (TST)",
      href: "https://www.tst.jus.br/documents/10157/0/IRR212+(1).pdf/207f31d3-0937-b819-c882-cd206291f582?t=1751483779588"
    }
  }
];

export const FONTE_TST: LinkFonte = {
  label: "Índice temático de precedentes qualificados do TST",
  href: "https://www.tst.jus.br/indice-tematico-precedentes-qualificados-tst"
};

export const faqs: Faq[] = [
  {
    question: "Qualquer irregularidade trabalhista autoriza a rescisão indireta?",
    answer:
      "Não. A conduta do empregador deve ser grave o bastante para tornar insustentável a continuidade do vínculo e precisa ser comprovada. Sem essa prova, o pedido pode ser julgado improcedente e o término do contrato recebe outro enquadramento, com efeitos financeiros diferentes."
  },
  {
    question: "Quais verbas são devidas quando ela é reconhecida?",
    answer:
      "As mesmas da dispensa sem justa causa, conforme o caso: saldo de salário, aviso prévio (art. 487, § 4º, da CLT), 13º salário proporcional, férias vencidas e proporcionais com um terço, liberação do FGTS com a indenização de 40% (Lei nº 8.036/1990), guias do seguro-desemprego ou indenização substitutiva e a multa do art. 477, § 8º, da CLT (Tema 52)."
  },
  {
    question: "É preciso continuar trabalhando durante o processo?",
    answer:
      "Nas alíneas d e g do art. 483, a lei permite permanecer ou não no serviço até a decisão final (§ 3º). Nas demais hipóteses, não há essa previsão. Em qualquer caso, deixar o trabalho sem formalizar os motivos pode gerar discussão sobre abandono de emprego."
  },
  {
    question: "Atraso de salário autoriza a rescisão indireta?",
    answer:
      "O atraso reiterado pode ser enquadrado no art. 483, d, da CLT. O Decreto-Lei nº 368/1968 considera mora contumaz o atraso por período igual ou superior a três meses, sem motivo grave e relevante. Pela Súmula 13 do TST, pagar os salários atrasados em audiência não afasta a mora. Atrasos pontuais tendem a receber análise mais cautelosa."
  },
  {
    question: "A falta de depósitos do FGTS é suficiente?",
    answer:
      "Sim. Pelo Tema 70 do TST, a ausência, a insuficiência ou a irregularidade dos recolhimentos caracteriza descumprimento contratual suficiente para a rescisão indireta. O extrato analítico do FGTS é a prova central."
  },
  {
    question: "Ter continuado trabalhando significa que a falta foi perdoada?",
    answer:
      "Para o FGTS, o TST dispensou expressamente a imediatidade (Tema 70). Nas demais hipóteses, a jurisprudência tem relativizado essa exigência diante de faltas reiteradas e da dependência econômica do emprego, com exame caso a caso. Agir sem demora excessiva reduz discussões."
  },
  {
    question: "Horas extras não pagas e intervalo suprimido também contam?",
    answer:
      "Sim, quando o descumprimento é contumaz, ou seja, reiterado ou habitual (Tema 85). Uma ocorrência isolada pode não ser suficiente. Cartões de ponto, escalas e contracheques costumam ser decisivos."
  },
  {
    question: "Que outras situações já foram analisadas pelo TST?",
    answer:
      "Decisões de Turmas do TST, sem efeito vinculante, já reconheceram a rescisão indireta, conforme a prova, em casos de falta de anotação na CTPS, férias não concedidas, assédio moral e ofensas reiteradas, ausência de equipamentos de proteção e redução de jornada com redução salarial."
  },
  {
    question: "Assédio moral pode fundamentar o pedido?",
    answer:
      "Sim. Condutas abusivas são examinadas à luz das alíneas b (rigor excessivo) e e (ato lesivo da honra e boa fama) do art. 483 da CLT. O enquadramento depende de prova consistente, como mensagens, documentos e testemunhas."
  },
  {
    question: "Um pedido de demissão pode ser convertido em rescisão indireta?",
    answer:
      "Em determinadas situações, a jurisprudência admite a conversão quando fica comprovada falta grave do empregador anterior ao pedido. O resultado depende das circunstâncias e da prova de cada caso."
  },
  {
    question: "Quais documentos costumam ser analisados?",
    answer:
      "Extrato analítico do FGTS, contracheques, cartões de ponto, CTPS, comprovantes de entrega de EPI, mensagens, e-mails e comunicações formais, além de testemunhas. Os mesmos registros servem tanto para comprovar a falta quanto para demonstrar o cumprimento das obrigações."
  },
  {
    question: "Qual é o prazo para buscar esses direitos?",
    answer:
      "A Constituição Federal fixa prazo prescricional de cinco anos para os créditos trabalhistas, até o limite de dois anos após a extinção do contrato (art. 7º, XXIX)."
  },
  {
    question: "Como as empresas podem prevenir esse tipo de conflito?",
    answer:
      "Manter salários e FGTS em dia, controlar corretamente jornada e intervalos, pagar as horas extras, fornecer e registrar a entrega de EPI e adotar políticas de prevenção ao assédio. A revisão periódica das rotinas de pessoal ajuda a identificar pontos de atenção."
  }
];

/** Quantidade de perguntas exibidas na primeira coluna do FAQ. */
export const FAQ_PRIMEIRA_COLUNA = 7;

export const fontesOficiais: LinkFonte[] = [
  { label: "CLT", href: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm" },
  { label: "Lei nº 8.036/1990", href: "https://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm" },
  {
    label: "Decreto-Lei nº 368/1968",
    href: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0368.htm"
  },
  {
    label: "Constituição Federal",
    href: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },
  { label: "Precedentes do TST", href: FONTE_TST.href }
];

export const escritorio = {
  nome: "Moura & Galindo Advogados Associados",
  endereco: {
    logradouro: "Avenida Aracati, 382",
    bairro: "Bairro Universitário",
    cidade: "Caruaru",
    uf: "PE",
    cep: "55016-590"
  },
  instagram: {
    display: "@mouraegalindoadv",
    href: "https://www.instagram.com/mouraegalindoadv/"
  },
  site: {
    display: "mouraegalindoadvogados.com.br",
    href: "https://mouraegalindoadvogados.com.br"
  }
} as const;
