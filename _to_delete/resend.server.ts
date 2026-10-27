import { getServerEnv } from "./env.server";

const RESEND_API_URL = "https://api.resend.com";

export const RESEND_BATCH_LIMIT = 100;

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
}

interface ResendErrorBody {
  message?: string;
  name?: string;
}

async function postToResend(path: string, body: unknown): Promise<void> {
  const env = getServerEnv();

  const response = await fetch(`${RESEND_API_URL}${path}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const detail = (await response.json().catch(() => ({}))) as ResendErrorBody;
    throw new Error(`Falha no envio (Resend ${response.status}): ${detail.message ?? response.statusText}`);
  }
}

function toResendPayload(message: EmailMessage) {
  const env = getServerEnv();

  return {
    from: env.newsletterFrom,
    to: [message.to],
    subject: message.subject,
    html: message.html,
    text: message.text,
    ...(env.newsletterReplyTo ? { reply_to: env.newsletterReplyTo } : {}),
    ...(message.headers ? { headers: message.headers } : {})
  };
}

export async function sendEmail(message: EmailMessage): Promise<void> {
  await postToResend("/emails", toResendPayload(message));
}

export async function sendEmailBatch(messages: EmailMessage[]): Promise<void> {
  if (messages.length === 0) return;
  if (messages.length > RESEND_BATCH_LIMIT) {
    throw new Error(`Um lote aceita no máximo ${RESEND_BATCH_LIMIT} e-mails.`);
  }
  await postToResend("/emails/batch", messages.map(toResendPayload));
}
