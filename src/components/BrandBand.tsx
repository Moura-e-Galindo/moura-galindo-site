import logoBrand from "@/assets/logo-brand.png";

export function BrandBand() {
  return (
    <section className="surface-dark gradient-hero relative overflow-hidden py-20 md:py-28">
      {/* Textura sutil de pontos */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <img
          src={logoBrand}
          alt="Moura & Galindo Advogados Associados"
          loading="lazy"
          className="w-64 md:w-80 select-none"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="gold-divider mt-6" />
        <p className="mt-8 max-w-xl text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Tradição e excelência a serviço da justiça
        </p>
      </div>
    </section>
  );
}
