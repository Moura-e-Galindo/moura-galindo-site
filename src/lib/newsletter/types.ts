export type SubscriberStatus = "pending" | "confirmed" | "unsubscribed";

export type CampaignStatus = "draft" | "sending" | "sent" | "failed";

export interface SubscriberRow {
  id: string;
  name: string;
  email: string;
  status: SubscriberStatus;
  token: string;
  consent_at: string;
  confirmation_sent_at: string | null;
  confirmed_at: string | null;
  unsubscribed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CampaignRow {
  id: string;
  subject: string;
  preheader: string;
  content: string;
  status: CampaignStatus;
  recipients_count: number;
  error_message: string | null;
  sent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CampaignDraft {
  subject: string;
  preheader: string;
  content: string;
}

export interface SubscriberCounts {
  confirmed: number;
  pending: number;
  unsubscribed: number;
}
