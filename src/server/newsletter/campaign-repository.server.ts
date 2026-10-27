import type { SupabaseClient } from "@supabase/supabase-js";
import type { CampaignRow } from "@/lib/newsletter/types";

const TABLE = "newsletter_campaigns";

export async function claimDraftForSending(
  db: SupabaseClient,
  id: string
): Promise<CampaignRow | null> {
  const { data, error } = await db
    .from(TABLE)
    .update({ status: "sending", error_message: null })
    .eq("id", id)
    .eq("status", "draft")
    .select()
    .maybeSingle();

  if (error) throw new Error(error.message);
  return (data as CampaignRow | null) ?? null;
}

export async function revertToDraft(db: SupabaseClient, id: string): Promise<void> {
  const { error } = await db.from(TABLE).update({ status: "draft" }).eq("id", id);
  if (error) throw new Error(error.message);
}

export async function markSent(
  db: SupabaseClient,
  id: string,
  recipientsCount: number
): Promise<void> {
  const { error } = await db
    .from(TABLE)
    .update({
      status: "sent",
      recipients_count: recipientsCount,
      sent_at: new Date().toISOString()
    })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function markFailed(
  db: SupabaseClient,
  id: string,
  recipientsCount: number,
  message: string
): Promise<void> {
  const { error } = await db
    .from(TABLE)
    .update({
      status: "failed",
      recipients_count: recipientsCount,
      error_message: message,
      sent_at: recipientsCount > 0 ? new Date().toISOString() : null
    })
    .eq("id", id);

  if (error) throw new Error(error.message);
}
