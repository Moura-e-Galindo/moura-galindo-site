import { createServerFn } from "@tanstack/react-start";
import type { z } from "zod";
import { sendCampaignSchema, sendTestSchema } from "@/lib/newsletter/schemas";
import { renderNewsletterEmail } from "@/lib/newsletter/email/newsletter-email";
import { buildUnsubscribeUrl } from "@/lib/newsletter/urls";
import { requireAdmin } from "../auth.server";
import { getServerEnv } from "../env.server";
import { BREVO_BATCH_LIMIT, sendEmail, sendEmailBatch, type EmailMessage } from "../brevo.server";
import { createSupabaseAdmin } from "../supabase-admin.server";
import {
  claimDraftForSending,
  markFailed,
  markSent,
  revertToDraft
} from "./campaign-repository.server";
import { fetchConfirmedSubscribers } from "./subscriber-repository.server";

const PAUSE_BETWEEN_BATCHES_MS = 600;
const TEST_SUBJECT_PREFIX = "[TESTE] ";

export interface SendCampaignResult {
  recipientsCount: number;
}

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size));
  return chunks;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const sendTestNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: z.input<typeof sendTestSchema>) => sendTestSchema.parse(input))
  .handler(async ({ data }) => {
    const db = createSupabaseAdmin();
    await requireAdmin(db, data.accessToken);

    const { siteUrl } = getServerEnv();
    const email = renderNewsletterEmail({
      siteUrl,
      subject: data.subject,
      preheader: data.preheader,
      contentHtml: data.content,
      recipientName: "Leitor",
      unsubscribeUrl: `${siteUrl}/newsletter/descadastrar`
    });

    await sendEmail({
      to: data.to,
      subject: `${TEST_SUBJECT_PREFIX}${data.subject}`,
      html: email.html,
      text: email.text
    });

    return { ok: true };
  });

export const sendNewsletterCampaign = createServerFn({ method: "POST" })
  .inputValidator((input: z.input<typeof sendCampaignSchema>) => sendCampaignSchema.parse(input))
  .handler(async ({ data }): Promise<SendCampaignResult> => {
    const db = createSupabaseAdmin();
    await requireAdmin(db, data.accessToken);

    const campaign = await claimDraftForSending(db, data.campaignId);
    if (!campaign) {
      throw new Error("Esta newsletter já foi enviada ou está sendo enviada.");
    }

    const subscribers = await fetchConfirmedSubscribers(db);
    if (subscribers.length === 0) {
      await revertToDraft(db, campaign.id);
      throw new Error("Não há inscritos confirmados para receber a newsletter.");
    }

    const { siteUrl } = getServerEnv();
    let sentCount = 0;

    try {
      const batches = chunk(subscribers, BREVO_BATCH_LIMIT);

      for (const [index, batch] of batches.entries()) {
        const messages: EmailMessage[] = batch.map((subscriber) => {
          const unsubscribeUrl = buildUnsubscribeUrl(siteUrl, subscriber.token);
          const email = renderNewsletterEmail({
            siteUrl,
            subject: campaign.subject,
            preheader: campaign.preheader,
            contentHtml: campaign.content,
            recipientName: subscriber.name,
            unsubscribeUrl
          });

          return {
            to: subscriber.email,
            subject: campaign.subject,
            html: email.html,
            text: email.text,
            headers: { "List-Unsubscribe": `<${unsubscribeUrl}>` }
          };
        });

        await sendEmailBatch(messages);
        sentCount += batch.length;

        if (index < batches.length - 1) await wait(PAUSE_BETWEEN_BATCHES_MS);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro desconhecido no envio.";
      await markFailed(db, campaign.id, sentCount, message);
      throw new Error(`${message} Enviados antes da falha: ${sentCount}.`);
    }

    await markSent(db, campaign.id, sentCount);
    return { recipientsCount: sentCount };
  });
