export function buildConfirmUrl(siteUrl: string, token: string): string {
  return `${siteUrl}/newsletter/confirmar?token=${encodeURIComponent(token)}`;
}

export function buildUnsubscribeUrl(siteUrl: string, token: string): string {
  return `${siteUrl}/newsletter/descadastrar?token=${encodeURIComponent(token)}`;
}
