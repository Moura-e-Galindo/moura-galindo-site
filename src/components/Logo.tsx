import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center border border-gold/60 bg-transparent">
        <span className="font-serif text-xl font-semibold text-gold">M</span>
        <span className="font-serif text-xl font-semibold text-gold -ml-1">G</span>
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground transition-colors group-hover:text-gold">
            Moura <span className="text-gold">&</span> Galindo
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
            Sociedade de Advogados
          </span>
        </div>
      )}
    </Link>
  );
}
