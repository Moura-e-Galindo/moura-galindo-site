/**
 * Conteúdo da landing de Regularização de Imóveis (Núcleo de Direito Imobiliário).
 * Textos centralizados aqui para que os componentes de seção fiquem só com a apresentação.
 */

export const LANDING_PATH = "/regularizacao-de-imoveis";
export const LANDING_URL = `https://mouraegalindoadvogados.com.br${LANDING_PATH}`;

/** Mensagem pré-preenchida dos botões de WhatsApp desta landing. */
export const WHATSAPP_LANDING_MESSAGE = "Olá, vim pela página de regularização de imóveis.";

export interface LandingItem {
  title: string;
  description: string;
}

export interface Procedimento {
  nome: string;
  indicacao: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Advogado {
  nome: string;
  oab: string;
}

export const situacoes: LandingItem[] = [
  {
    title: "Comprei com recibo ou contrato de gaveta",
    description:
      "O negócio foi feito de boa-fé, o dinheiro foi pago, mas a escritura nunca saiu e o imóvel segue em nome de outra pessoa."
  },
  {
    title: "Herdei, mas não houve inventário",
    description:
      "A casa era dos pais ou dos avós, a família mora nela, mas ninguém formalizou a partilha depois do falecimento."
  },
  {
    title: "O vendedor sumiu ou faleceu",
    description:
      "Você pagou tudo e agora não encontra quem vendeu para assinar a escritura, ou ele faleceu e os herdeiros não resolvem."
  },
  {
    title: "Moro há muitos anos sem documento",
    description:
      "A posse é antiga, conhecida pelos vizinhos, com contas e reformas no seu nome, mas não existe nenhum título do imóvel."
  },
  {
    title: "Tenho escritura, mas não registrei",
    description:
      "A escritura foi lavrada no tabelionato, mas nunca chegou ao Registro de Imóveis, e por isso a matrícula continua em nome do antigo dono."
  },
  {
    title: "A matrícula não bate com a realidade",
    description:
      "A área é diferente da medida real, a construção não foi averbada ou o terreno é de um sítio que nunca teve matrícula própria."
  }
];

export const confusoes: LandingItem[] = [
  {
    title: "Pagar o IPTU não torna ninguém dono",
    description:
      "O carnê no seu nome ajuda a mostrar que você está no imóvel, mas sozinho não prova propriedade."
  },
  {
    title: "Escritura não é a mesma coisa que registro",
    description:
      "A escritura formaliza o negócio. É o registro na matrícula, feito no Registro de Imóveis, que transfere a propriedade."
  },
  {
    title: "Ter contrato não garante usucapião",
    description:
      "A usucapião depende de requisitos próprios, como o tempo e a forma da posse. Às vezes o caminho certo é outro."
  }
];

export const procedimentos: Procedimento[] = [
  {
    nome: "Usucapião em cartório",
    indicacao:
      "Posse antiga e tranquila, sem disputa, com documentos que permitem ao Registro de Imóveis reconhecer a propriedade sem processo judicial. Exige acompanhamento de advogado."
  },
  {
    nome: "Usucapião na Justiça",
    indicacao:
      "Quando há discordância de vizinhos, herdeiros ou do antigo dono, ou quando a via em cartório não é possível no caso concreto."
  },
  {
    nome: "Adjudicação compulsória",
    indicacao:
      "Quem comprou e pagou, mas não recebe a escritura do vendedor. Pode ser feita em cartório ou na Justiça, conforme os documentos."
  },
  {
    nome: "Inventário e partilha",
    indicacao:
      "Imóvel que ficou de herança. Às vezes é o primeiro passo antes de qualquer outra providência."
  },
  {
    nome: "Registro, retificação e averbação",
    indicacao:
      "Escritura que falta registrar, área divergente na matrícula ou construção que precisa ser averbada."
  }
];

export const BASE_LEGAL =
  "Base legal principal: arts. 216-A e 216-B da Lei de Registros Públicos (Lei nº 6.015 de 1973), Código Civil e Código de Processo Civil.";

export const etapas: LandingItem[] = [
  {
    title: "Conversa e documentos",
    description:
      "Ouvimos a história do imóvel e indicamos o que separar. Quem quiser pode trazer um filho ou parente para acompanhar."
  },
  {
    title: "Estudo da matrícula",
    description:
      "Pesquisamos a situação do imóvel no Registro de Imóveis e em outros órgãos, e identificamos as pessoas envolvidas."
  },
  {
    title: "Caminho por escrito",
    description:
      "Explicamos qual procedimento parece adequado, quais são as etapas e os riscos, antes de qualquer pedido."
  },
  {
    title: "Acompanhamento",
    description:
      "Se você decidir seguir conosco, conduzimos o procedimento e damos notícia de cada etapa sem você precisar cobrar."
  }
];

export const documentos: string[] = [
  "Documento de identidade de quem mora no imóvel",
  "Recibos, contratos ou escrituras da compra",
  "Carnês de IPTU e contas antigas de água ou energia",
  "Certidão de óbito, se o imóvel veio de herança",
  "Fotos antigas, notas de material de construção e reformas",
  "Nome de vizinhos antigos que conhecem a sua história no lugar"
];

export const faqs: Faq[] = [
  {
    question: "Contrato de compra e venda substitui o registro?",
    answer:
      "Não. O contrato prova que houve um negócio, mas a propriedade só passa para o seu nome com o registro na matrícula do imóvel. O contrato, porém, é um documento importante para escolher o caminho da regularização."
  },
  {
    question: "Usucapião é a única forma de regularizar?",
    answer:
      "Não. Dependendo da situação, o caminho pode ser a adjudicação compulsória, o inventário, o registro de uma escritura já feita ou a retificação da matrícula. A usucapião é uma entre várias possibilidades."
  },
  {
    question: "Quanto tempo de moradia é preciso para a usucapião?",
    answer:
      "Depende da modalidade. A lei prevê prazos que variam de 2 a 15 anos, conforme o tamanho e o uso do imóvel, a existência de documento e outras circunstâncias. Por isso a análise do caso vem antes de qualquer conclusão."
  },
  {
    question: "O IPTU em nome de outra pessoa impede a análise?",
    answer:
      "Não impede. É uma situação comum, e outros documentos e testemunhas podem ajudar a demonstrar a posse. O cadastro na Prefeitura também pode ser atualizado depois."
  },
  {
    question: "A via em cartório é sempre possível?",
    answer:
      "Nem sempre. Ela costuma depender de concordância ou ausência de oposição dos envolvidos e de documentação suficiente. Quando não é possível, o caminho passa a ser judicial."
  }
];

export const advogados: Advogado[] = [
  { nome: "Jean Moura", oab: "OAB-PE 16.686" },
  { nome: "Kilma Galindo", oab: "OAB-PE 24.214" },
  { nome: "Filipe Maciel", oab: "OAB-PE 56.124" }
];

/** Opções do campo "Qual é a situação principal?" do formulário. */
export const situacaoOptions: string[] = [
  "Comprei com recibo ou contrato de gaveta",
  "Tenho escritura, mas não registrei",
  "Herdei e não houve inventário",
  "Moro há muitos anos sem documento",
  "Preciso vender ou financiar",
  "Outra situação"
];

export const escritorio = {
  nome: "Moura & Galindo Advogados Associados",
  registroOab: "5.532",
  endereco: {
    logradouro: "Avenida Aracati, nº 382",
    bairro: "Bairro Universitário",
    cidade: "Caruaru",
    uf: "PE",
    cep: "55016-590"
  },
  instagram: {
    display: "@mouraegalindoadv",
    href: "https://www.instagram.com/mouraegalindoadv"
  },
  site: {
    display: "mouraegalindoadvogados.com.br",
    href: "https://mouraegalindoadvogados.com.br"
  }
} as const;
