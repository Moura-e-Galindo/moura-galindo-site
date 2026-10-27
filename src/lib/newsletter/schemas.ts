import { z } from "zod";

export const subscribeSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(120, "Nome muito longo"),
  email: z.string().trim().toLowerCase().email("Informe um e-mail válido").max(254),
  consent: z.boolean().refine((value) => value, {
    message: "É preciso autorizar o recebimento"
  }),
  website: z.string().optional()
});

export type SubscribeInput = z.input<typeof subscribeSchema>;

export const tokenSchema = z.object({
  token: z.string().uuid()
});

export const campaignDraftSchema = z.object({
  subject: z.string().trim().min(3, "Assunto muito curto").max(150, "Assunto muito longo"),
  preheader: z.string().trim().max(150, "Pré-cabeçalho muito longo"),
  content: z.string().refine((html) => stripTags(html).trim().length > 0, {
    message: "Escreva o conteúdo do e-mail"
  })
});

export const sendTestSchema = campaignDraftSchema.extend({
  accessToken: z.string().min(1),
  to: z.string().trim().toLowerCase().email("Informe um e-mail válido")
});

export const sendCampaignSchema = z.object({
  accessToken: z.string().min(1),
  campaignId: z.string().uuid()
});

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
