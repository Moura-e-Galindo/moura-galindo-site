import { escapeHtml } from "./html";
import { EMAIL_COLORS, EMAIL_FONT, OFFICE_INFO } from "./theme";

export interface EmailLayoutOptions {
  siteUrl: string;
  title: string;
  preheader?: string;
  bodyHtml: string;
  footerNoteHtml: string;
}

export function renderEmailLayout({
  siteUrl,
  title,
  preheader = "",
  bodyHtml,
  footerNoteHtml
}: EmailLayoutOptions): string {
  const c = EMAIL_COLORS;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${c.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${c.page};">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
<tr><td align="center" style="background:${c.ink};padding:32px 24px 28px;">
<a href="${siteUrl}" style="text-decoration:none;">
<img src="${siteUrl}/email/logo.png" width="180" alt="${OFFICE_INFO.name}" style="display:block;width:180px;max-width:100%;height:auto;border:0;">
</a>
</td></tr>
<tr><td style="background:${c.gold};height:3px;line-height:3px;font-size:0;">&nbsp;</td></tr>
<tr><td style="background:${c.surface};padding:40px 40px 24px;font-family:${EMAIL_FONT};">
${bodyHtml}
</td></tr>
<tr><td style="background:${c.surface};padding:0 40px 40px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="border-top:1px solid ${c.border};padding-top:24px;font-family:${EMAIL_FONT};font-size:13px;line-height:1.6;color:${c.muted};">
<strong style="color:${c.ink};font-weight:600;">${OFFICE_INFO.name}</strong><br>
${OFFICE_INFO.address}<br>
<a href="mailto:${OFFICE_INFO.email}" style="color:${c.muted};">${OFFICE_INFO.email}</a>
</td></tr>
</table>
</td></tr>
<tr><td align="center" style="padding:24px 16px 0;font-family:${EMAIL_FONT};font-size:12px;line-height:1.6;color:${c.muted};">
${footerNoteHtml}
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
