import { Mail } from "lucide-react";
import { NewsletterSignupForm } from "./NewsletterSignupForm";

export function NewsletterSection() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Mail className="h-4 w-4" /> Newsletter
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground">
            Conteúdo jurídico direto no seu e-mail.
          </h2>
          <div className="gold-divider mt-6" />
          <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-muted-foreground">
            Receba análises, mudanças na legislação e novidades do escritório, escritas por quem
            atua todos os dias nas nossas áreas de especialidade.
          </p>
        </div>

        <NewsletterSignupForm />
      </div>
    </section>
  );
}
