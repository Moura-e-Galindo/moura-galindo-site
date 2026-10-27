import { createServerFn } from "@tanstack/react-start";
import {
  subscribeSchema,
  tokenSchema,
  type SubscribeInput
} from "@/lib/newsletter/schemas";
import {
  CONFIRMATION_SUBJECT,
  renderConfirmationEmail
} from "@/lib/newsletter/email/confirmation-email";
import { buildConfirmUrl } from "@/lib/newsletter/urls";
import type { SubscriberRow } from "@/lib/newsletter/types";
import { getServerEnv } from "../env.server";
import { sendEmail } from "../brevo.server";
import { createSupabaseAdmin } from "../supabase-admin.server";
import {
  findSubscriberByEmail,
  findSubscriberByToken,
  insertPendingSubscriber,
  markConfirmed,
  markUnsubscribed,
  resetToPending
} from "./subscriber-repository.server";

const RESEND_CONFIRMATION_COOLDOWN_MS = 2 * 60 * 1000;

export type ConfirmResult = "confirmed" | "invalid";
export type UnsubscribeResult = "unsubscribed" | "invalid";

function sentRecently(subscriber: SubscriberRow): boolean {
  if (!subscriber.confirmation_sent_at) return false;
  const elapsed = Date.now() - new Date(subscriber.confirmation_sent_at).getTime();
  return elapsed < RESEND_CONFIRMATION_COOLDOWN_MS;
}

async function sendConfirmation(subscriber: SubscriberRow): Promise<void> {
  const { siteUrl } = getServerEnv();
  const email = renderConfirmationEmail({
    siteUrl,
    recipientName: subscriber.name,
    confirmUrl: buildConfirmUrl(siteUrl, subscriber.token)
  });

  await sendEmail({
    to: subscriber.email,
    subject: CONFIRMATION_SUBJECT,
    html: email.html,
    text: email.text
  });
}

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: SubscribeInput) => subscribeSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };

    const db = createSupabaseAdmin();
    const existing = await findSubscriberByEmail(db, data.email);

    if (existing?.status === "confirmed") return { ok: true };
    if (existing?.status === "pending" && sentRecently(existing)) return { ok: true };

    const subscriber = existing
      ? await resetToPending(db, existing.id, data.name, existing.status === "unsubscribed")
      : await insertPendingSubscriber(db, data.name, data.email);

    await sendConfirmation(subscriber);
    return { ok: true };
  });

export const confirmSubscription = createServerFn({ method: "POST" })
  .inputValidator((input: { token: string }) => tokenSchema.parse(input))
  .handler(async ({ data }): Promise<ConfirmResult> => {
    const db = createSupabaseAdmin();
    const subscriber = await findSubscriberByToken(db, data.token);

    if (!subscriber || subscriber.status === "unsubscribed") return "invalid";
    if (subscriber.status === "pending") await markConfirmed(db, subscriber.id);
    return "confirmed";
  });

export const unsubscribeFromNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: { token: string }) => tokenSchema.parse(input))
  .handler(async ({ data }): Promise<UnsubscribeResult> => {
    const db = createSupabaseAdmin();
    const subscriber = await findSubscriberByToken(db, data.token);

    if (!subscriber) return "invalid";
    if (subscriber.status !== "unsubscribed") await markUnsubscribed(db, subscriber.id);
    return "unsubscribed";
  });
