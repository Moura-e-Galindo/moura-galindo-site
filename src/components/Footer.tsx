import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Há mais de duas décadas oferecendo soluções jurídicas estratégicas com a
              tradição que se constrói com tempo e a precisão que se exige no presente.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/institucional" as const, label: "Institucional" },
                { to: "/equipe" as const, label: "Equipe" },
                { to: "/areas" as const, label: "Áreas de Atuação" },
                { to: "/noticias" as const, label: "Notícias" },
                { to: "/contato" as const, label: "Contato" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Av. Paulista, 1000 — São Paulo, SP</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> +55 (11) 3000-0000</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> contato@mouragalindo.adv.br</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Moura & Galindo Sociedade de Advogados. Todos os direitos reservados.</p>
          <p className="tracking-wider uppercase">OAB/SP nº 00.000</p>
        </div>
      </div>
    </footer>
  );
}
