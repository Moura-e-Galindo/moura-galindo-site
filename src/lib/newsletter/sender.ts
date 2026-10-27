export interface EmailContact {
  name?: string;
  email: string;
}

export const NEWSLETTER_SENDER: EmailContact = {
  name: "Moura & Galindo",
  email: "newsletter@mouraegalindoadvogados.com.br"
};

export const NEWSLETTER_REPLY_TO: EmailContact = {
  email: "mouraegalindoadv@gmail.com"
};
