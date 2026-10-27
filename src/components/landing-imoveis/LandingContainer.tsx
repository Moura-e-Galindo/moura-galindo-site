import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LandingContainerProps {
  children: ReactNode;
  className?: string;
  /** Largura reduzida para blocos de leitura (ex.: FAQ). */
  narrow?: boolean;
}

export function LandingContainer({ children, className, narrow = false }: LandingContainerProps) {
  return (
    <div className={cn("mx-auto px-6", narrow ? "max-w-[880px]" : "max-w-[1180px]", className)}>
      {children}
    </div>
  );
}
