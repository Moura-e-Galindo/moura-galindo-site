import { faqs } from "@/data/regularizacao-imoveis";
import { cn } from "@/lib/utils";
import { LandingContainer } from "./LandingContainer";
import { SectionHeading } from "./SectionHeading";
import { focusRing } from "./classes";

export function FaqSection() {
  return (
    <section className="bg-white">
      <LandingContainer narrow className="py-24">
        <SectionHeading
          size="md"
          className="mb-9"
          eyebrow="Perguntas frequentes"
          title="Dúvidas que ouvimos com frequência"
        />

        {faqs.map((faq) => (
          <details key={faq.question} className="group border-t border-sand-line py-5.5 last:border-b">
            <summary
              className={cn(
                "flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 rounded-[2px] text-[18px] font-bold [&::-webkit-details-marker]:hidden",
                focusRing
              )}
            >
              {faq.question}
              <span
                aria-hidden="true"
                className="flex-none text-[28px] text-gold-ink transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-neutral-600">{faq.answer}</p>
          </details>
        ))}
      </LandingContainer>
    </section>
  );
}
