import { cn } from "@/lib/utils";

/** Balão de conversa usado nos botões de WhatsApp. */
export function WhatsAppIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("flex-none", className)}
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  );
}
