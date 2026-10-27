import type { SupabaseClient } from "@supabase/supabase-js";
import type { SubscriberRow } from "@/lib/newsletter/types";

const TABLE = "newsletter_subscribers";

export async function findSubscriberByEmail(
  db: SupabaseClient,
  email: string
): Promise<SubscriberRow | null> {
  const { data, error } = await db.from(TABLE).select("*").eq("email", email).maybeSingle();
  if (error) throw new Error(error.message);
  return (data as SubscriberRow | null) ?? null;
}

export async function findSubscriberByToken(
  db: SupabaseClient,
  token: string
): Promise<SubscriberRow | null> {
  const { data, error } = await db.from(TABLE).select("*").eq("token", token).maybeSingle();
  if (error) throw new Error(error.message);
  return (data as SubscriberRow | null) ?? null;
}

export async function insertPendingSubscriber(
  db: SupabaseClient,
  name: string,
  email: string
): Promise<SubscriberRow> {
  const now = new Date().toISOString();
  const { data, error } = await db
    .from(TABLE)
    .insert({ name, email, status: "pending", consent_at: now, confirmation_sent_at: now })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as SubscriberRow;
}

export async function resetToPending(
  db: SupabaseClient,
  id: string,
  name: string,
  renewToken: boolean
): Promise<SubscriberRow> {
  const now = new Date().toISOString();
  const { data, error } = await db
    .from(TABLE)
    .update({
      name,
      status: "pending",
      consent_at: now,
      confirmation_sent_at: now,
      unsubscribed_at: null,
      ...(renewToken ? { token: crypto.randomUUID() } : {})
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as SubscriberRow;
}

export async function markConfirmed(db: SupabaseClient, id: string): Promise<void> {
  const { error } = await db
    .from(TABLE)
    .update({ status: "confirmed", confirmed_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function markUnsubscribed(db: SupabaseClient, id: string): Promise<void> {
  const { error } = await db
    .from(TABLE)
    .update({ status: "unsubscribed", unsubscribed_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function fetchConfirmedSubscribers(
  db: SupabaseClient
): Promise<Pick<SubscriberRow, "name" | "email" | "token">[]> {
  const pageSize = 1000;
  const subscribers: Pick<SubscriberRow, "name" | "email" | "token">[] = [];

  for (let from = 0; ; from += pageSize) {
    const { data, error } = await db
      .from(TABLE)
      .select("name, email, token")
      .eq("status", "confirmed")
      .order("created_at", { ascending: true })
      .range(from, from + pageSize - 1);

    if (error) throw new Error(error.message);
    subscribers.push(...(data ?? []));
    if (!data || data.length < pageSize) break;
  }

  return subscribers;
}
