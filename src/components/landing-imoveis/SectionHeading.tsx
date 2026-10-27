import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  /** "dark" para seções com fundo preto. */
  tone?: "light" | "dark";
  /** "md" para seções secundárias, "sm" para títulos dentro de cards. */
  size?: "lg" | "md" | "sm";
  className?: string;
}

const headingSizes = {
  lg: "text-[clamp(28px,3.2vw,38px)] leading-[1.25]",
  md: "text-[clamp(26px,3vw,34px)] leading-[1.25]",
  sm: "text-[28px] leading-[1.3]"
} as const;

export function SectionHeading({
  title,
  eyebrow,
  description,
  tone = "light",
  size = "lg",
  className
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3.5 text-[13px] font-semibold uppercase tracking-[0.14em]",
            tone === "dark" ? "text-gold" : "text-gold-ink"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "max-w-[760px] font-playfair font-bold",
          headingSizes[size]
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-[720px]",
            tone === "dark" ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
