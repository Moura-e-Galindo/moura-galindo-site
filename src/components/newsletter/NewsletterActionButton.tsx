import { Loader2 } from "lucide-react";

interface Props {
  label: string;
  loadingLabel: string;
  loading: boolean;
  onClick: () => void;
}

export function NewsletterActionButton({ label, loadingLabel, loading, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wider text-gold-foreground shadow-elegant transition-all hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {loading ? loadingLabel : label}
    </button>
  );
}
