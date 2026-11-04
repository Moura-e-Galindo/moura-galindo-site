import { cn } from "@/lib/utils";
import { eyebrowClass, sectionTitleClass } from "./classes";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex max-w-[760px] flex-col gap-2.5", className)}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className={sectionTitleClass}>{title}</h2>
      {description && <p className="text-[16px] leading-[1.6] text-resc-apoio">{description}</p>}
    </div>
  );
}
