import { getServerEnv } from "./env.server";
import { NEWSLETTER_REPLY_TO, NEWSLETTER_SENDER } from "@/lib/newsletter/sender";

const BREVO_API_URL = "https://api.brevo.com/v3";

export const BREVO_BATCH_LIMIT = 100;

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
}

interface BrevoErrorBody {
  code?: string;
  message?: string;
}

async function postToBrevo(body: unknown): Promise<void> {
  const env = getServerEnv();

  const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: "POST",
    headers: {
      "api-key": env.brevoApiKey,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const detail = (await response.json().catch(() => ({}))) as BrevoErrorBody;
    throw new Error(`Falha no envio (Brevo ${response.status}): ${detail.message ?? response.statusText}`);
  }
}

function baseEnvelope() {
  return {
    sender: NEWSLETTER_SENDER,
    replyTo: NEWSLETTER_REPLY_TO
  };
}

export async function sendEmail(message: EmailMessage): Promise<void> {
  await postToBrevo({
    ...baseEnvelope(),
    to: [{ email: message.to }],
    subject: message.subject,
    htmlContent: message.html,
    textContent: message.text,
    ...(message.headers ? { headers: message.headers } : {})
  });
}

export async function sendEmailBatch(messages: EmailMessage[]): Promise<void> {
  if (messages.length === 0) return;
  if (messages.length > BREVO_BATCH_LIMIT) {
    throw new Error(`Um lote aceita no máximo ${BREVO_BATCH_LIMIT} e-mails.`);
  }

  const [first] = messages;

  await postToBrevo({
    ...baseEnvelope(),
    subject: first.subject,
    htmlContent: first.html,
    textContent: first.text,
    messageVersions: messages.map((message) => ({
      to: [{ email: message.to }],
      subject: message.subject,
      htmlContent: message.html,
      textContent: message.text
    }))
  });
}
