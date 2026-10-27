import { escapeHtml, htmlToText } from "./html";
import { renderEmailLayout } from "./layout";
import { inlineRichContentStyles } from "./rich-content";
import { EMAIL_COLORS, EMAIL_FONT } from "./theme";

export const NAME_PLACEHOLDER = "{{nome}}";

export interface NewsletterEmailInput {
  siteUrl: string;
  subject: string;
  preheader: string;
  contentHtml: string;
  recipientName: string;
  unsubscribeUrl: string;
}

export interface RenderedEmail {
  html: string;
  text: string;
}

export function renderNewsletterEmail(input: NewsletterEmailInput): RenderedEmail {
  const firstName = escapeHtml(input.recipientName.trim().split(/\s+/)[0] ?? "");
  const content = inlineRichContentStyles(input.contentHtml)
    .split(NAME_PLACEHOLDER)
    .join(firstName);

  const bodyHtml = `<h1 style="margin:0 0 24px;font-family:${EMAIL_FONT};font-size:26px;line-height:1.3;font-weight:500;color:${EMAIL_COLORS.ink};">${escapeHtml(input.subject)}</h1>
${content}`;

  const footerNoteHtml = `Você recebe este e-mail porque se inscreveu na newsletter do escritório.<br>
<a href="${input.unsubscribeUrl}" style="color:${EMAIL_COLORS.muted};text-decoration:underline;">Cancelar inscrição</a>`;

  const html = renderEmailLayout({
    siteUrl: input.siteUrl,
    title: input.subject,
    preheader: input.preheader,
    bodyHtml,
    footerNoteHtml
  });

  const text = `${input.subject}\n\n${htmlToText(content)}\n\n---\nCancelar inscrição: ${input.unsubscribeUrl}`;

  return { html, text };
}
