import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  children?: ReactNode;
}

export function NewsletterStatusPanel({ icon: Icon, title, description, children }: Props) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-xl px-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
        </span>
        <h2 className="mt-8 font-serif text-3xl md:text-4xl font-medium text-foreground">{title}</h2>
        <div className="gold-divider mx-auto mt-6" />
        <div className="mt-6 text-base leading-relaxed text-muted-foreground">{description}</div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
