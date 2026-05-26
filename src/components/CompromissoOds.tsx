import odsSelo from "@/assets/ods-selo.jpeg";

/**
 * Seção de compromisso social.
 *
 * Apresenta o selo "Juntos pelos ODS" ao lado de um texto institucional
 * sobre a adesão do escritório aos Objetivos de Desenvolvimento
 * Sustentável da ONU. Posicionada entre os indicadores (Stats) e o CTA.
 */
export function CompromissoOds() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Selo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={odsSelo}
            alt="Selo Juntos pelos ODS — Moura & Galindo, signatário desde 2024"
            loading="lazy"
            className="w-[300px] md:w-[400px] rounded-2xl shadow-elegant"
          />
        </div>

        {/* Texto */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Compromisso Social
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground">
            Juntos pelos Objetivos de Desenvolvimento Sustentável
          </h2>
          <div className="gold-divider mt-6" />
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            Desde 2024, o Moura &amp; Galindo é signatário dos Objetivos de
            Desenvolvimento Sustentável (ODS) da Organização das Nações Unidas.
            Assumimos o compromisso de pautar nossa atuação jurídica pela ética,
            pela responsabilidade social e pelo respeito ao meio ambiente.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            Acreditamos que o exercício da advocacia também é um instrumento de
            transformação social — e por isso integramos esses princípios à
            rotina do escritório e ao relacionamento com nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
