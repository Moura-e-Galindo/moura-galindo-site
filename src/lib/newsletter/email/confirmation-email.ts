import { escapeHtml } from "./html";
import { renderEmailLayout } from "./layout";
import { EMAIL_COLORS, EMAIL_FONT } from "./theme";
import type { RenderedEmail } from "./newsletter-email";

export const CONFIRMATION_SUBJECT = "Confirme sua inscrição na newsletter";

export interface ConfirmationEmailInput {
  siteUrl: string;
  recipientName: string;
  confirmUrl: string;
}

export function renderConfirmationEmail(input: ConfirmationEmailInput): RenderedEmail {
  const c = EMAIL_COLORS;
  const firstName = escapeHtml(input.recipientName.trim().split(/\s+/)[0] ?? "");
  const paragraph = `margin:0 0 16px;font-family:${EMAIL_FONT};font-size:16px;line-height:1.7;color:${c.inkSoft};`;

  const bodyHtml = `<h1 style="margin:0 0 24px;font-family:${EMAIL_FONT};font-size:26px;line-height:1.3;font-weight:500;color:${c.ink};">Olá, ${firstName}!</h1>
<p style="${paragraph}">Recebemos seu pedido para receber a newsletter da Moura &amp; Galindo, com conteúdos jurídicos e novidades do escritório.</p>
<p style="${paragraph}">Para concluir, confirme seu e-mail no botão abaixo:</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:32px 0;">
<tr><td style="background:${c.gold};border-radius:999px;">
<a href="${input.confirmUrl}" style="display:inline-block;padding:14px 32px;font-family:${EMAIL_FONT};font-size:14px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${c.ink};text-decoration:none;">Confirmar inscrição</a>
</td></tr>
</table>
<p style="${paragraph}font-size:14px;color:${c.muted};">Se o botão não funcionar, copie e cole este endereço no navegador:<br>
<a href="${input.confirmUrl}" style="color:${c.goldDeep};word-break:break-all;">${input.confirmUrl}</a></p>`;

  const footerNoteHtml = "Se você não fez esta inscrição, ignore este e-mail. Nenhum outro e-mail será enviado.";

  const html = renderEmailLayout({
    siteUrl: input.siteUrl,
    title: CONFIRMATION_SUBJECT,
    preheader: "Falta só um clique para receber nossos conteúdos.",
    bodyHtml,
    footerNoteHtml
  });

  const text = `Olá, ${input.recipientName}!

Recebemos seu pedido para receber a newsletter da Moura & Galindo.
Para concluir, confirme seu e-mail acessando o link abaixo:

${input.confirmUrl}

Se você não fez esta inscrição, ignore este e-mail.`;

  return { html, text };
}
