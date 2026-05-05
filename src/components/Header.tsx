import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { to: "/institucional", label: "Escritório" },
  { to: "/areas", label: "Núcleos" },
  { to: "/equipe", label: "Equipe" },
  // { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 md:top-6 z-50 w-full px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-border bg-card/95 backdrop-blur-md pl-3 pr-3 py-2 shadow-card">
          <Link
            to="/"
            aria-label="Início"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gold hover:bg-gold/10 transition-colors"
          >
            <Home className="h-4 w-4" strokeWidth={1.75} />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-gold" }}
                className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden mt-2 rounded-2xl border border-border bg-card p-2 shadow-card">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold bg-accent" }}
                className="block px-4 py-3 text-sm font-medium rounded-xl hover:bg-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
