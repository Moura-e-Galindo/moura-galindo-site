import { supabase } from "@/lib/supabase";
import type {
  CampaignDraft,
  CampaignRow,
  SubscriberCounts,
  SubscriberRow,
  SubscriberStatus
} from "./types";

export async function getAccessToken(): Promise<string> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("Sessão expirada. Faça login novamente.");
  return token;
}

export async function getCurrentUserEmail(): Promise<string> {
  const { data } = await supabase.auth.getSession();
  return data.session?.user.email ?? "";
}

export async function fetchCampaigns(): Promise<CampaignRow[]> {
  const { data, error } = await supabase
    .from("newsletter_campaigns")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as CampaignRow[];
}

export async function fetchCampaignById(id: string): Promise<CampaignRow | null> {
  const { data, error } = await supabase
    .from("newsletter_campaigns")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return (data as CampaignRow | null) ?? null;
}

export async function createCampaign(draft: CampaignDraft): Promise<CampaignRow> {
  const { data, error } = await supabase
    .from("newsletter_campaigns")
    .insert({ ...draft, status: "draft" })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as CampaignRow;
}

export async function updateCampaign(id: string, draft: CampaignDraft): Promise<CampaignRow> {
  const { data, error } = await supabase
    .from("newsletter_campaigns")
    .update(draft)
    .eq("id", id)
    .eq("status", "draft")
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as CampaignRow;
}

export async function deleteCampaign(id: string): Promise<void> {
  const { error } = await supabase.from("newsletter_campaigns").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function fetchSubscribers(status?: SubscriberStatus): Promise<SubscriberRow[]> {
  let query = supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("created_at", { ascending: false });

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data ?? []) as SubscriberRow[];
}

export async function deleteSubscriber(id: string): Promise<void> {
  const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function fetchSubscriberCounts(): Promise<SubscriberCounts> {
  const statuses: SubscriberStatus[] = ["confirmed", "pending", "unsubscribed"];

  const results = await Promise.all(
    statuses.map((status) =>
      supabase
        .from("newsletter_subscribers")
        .select("id", { count: "exact", head: true })
        .eq("status", status)
    )
  );

  const [confirmed, pending, unsubscribed] = results.map((result) => {
    if (result.error) throw new Error(result.error.message);
    return result.count ?? 0;
  });

  return { confirmed, pending, unsubscribed };
}
