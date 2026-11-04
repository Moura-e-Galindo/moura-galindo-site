import { cn } from "@/lib/utils";

interface PlusIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/** Ícone "+" dos acordeões: gira 45° quando o <details> pai (com `group`) está aberto. */
export function PlusIcon({ size = 20, strokeWidth = 2, className }: PlusIconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={cn(
        "flex-none transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none",
        className
      )}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
