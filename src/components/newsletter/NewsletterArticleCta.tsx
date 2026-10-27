import { NewsletterSignupForm } from "./NewsletterSignupForm";

export function NewsletterArticleCta() {
  return (
    <div className="mt-16 border border-border bg-card p-8 md:p-10">
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Newsletter</span>
      <h4 className="mt-4 font-serif text-2xl md:text-3xl font-medium leading-snug text-foreground">
        Gostou deste conteúdo?
      </h4>
      <p className="mt-3 mb-8 text-base leading-relaxed text-muted-foreground">
        Inscreva-se e receba as próximas publicações do escritório no seu e-mail.
      </p>
      <NewsletterSignupForm tone="card" />
    </div>
  );
}
