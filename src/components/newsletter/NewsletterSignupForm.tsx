import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { subscribeSchema, type SubscribeInput } from "@/lib/newsletter/schemas";
import { subscribeToNewsletter } from "@/server/newsletter/subscription.functions";

interface Props {
  tone?: "default" | "card";
}

const INPUT_CLASS =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors";

export function NewsletterSignupForm({ tone = "default" }: Props) {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { name: "", email: "", consent: false, website: "" }
  });

  const [name, email, consent] = useWatch({ control, name: ["name", "email", "consent"] });
  const isComplete = name.trim() !== "" && email.trim() !== "" && consent;

  async function onSubmit(values: SubscribeInput) {
    setServerError(null);
    try {
      await subscribeToNewsletter({ data: values });
      setSubmittedEmail(values.email.trim().toLowerCase());
    } catch {
      setServerError("Não foi possível concluir a inscrição agora. Tente novamente em instantes.");
    }
  }

  if (submittedEmail) {
    return (
      <div className="flex items-start gap-4 border border-gold/40 bg-gold/5 p-6">
        <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
        <div>
          <p className="font-serif text-lg font-medium text-foreground">Quase lá!</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Enviamos um link de confirmação para{" "}
            <span className="font-medium text-foreground">{submittedEmail}</span>. Abra o e-mail
            e clique em confirmar para começar a receber nossos conteúdos. Não encontrou? Verifique
            a caixa de spam.
          </p>
        </div>
      </div>
    );
  }

  const inputClass = tone === "card" ? INPUT_CLASS : INPUT_CLASS.replace("bg-background", "bg-card");

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="newsletter-name" className="sr-only">Nome</label>
          <input
            id="newsletter-name"
            {...register("name")}
            autoComplete="name"
            placeholder="Seu nome"
            className={inputClass}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="newsletter-email" className="sr-only">E-mail</label>
          <input
            id="newsletter-email"
            type="email"
            {...register("email")}
            autoComplete="email"
            placeholder="Seu melhor e-mail"
            className={inputClass}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="newsletter-website">Site</label>
        <input id="newsletter-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-gold)]"
          />
          <span>
            Autorizo a Moura &amp; Galindo a me enviar conteúdos por e-mail. Posso cancelar a
            inscrição a qualquer momento pelo link presente em cada mensagem.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-destructive">{errors.consent.message}</p>
        )}
      </div>

      {serverError && <p className="text-xs text-destructive">{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting || !isComplete}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-gold-foreground transition-all hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Enviando..." : "Quero receber"}
      </button>
    </form>
  );
}
