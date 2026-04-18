import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/institucional", label: "Institucional" },
  { to: "/equipe", label: "Equipe" },
  { to: "/areas", label: "Áreas" },
  { to: "/noticias", label: "Notícias" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contato" className="hidden lg:inline-flex">
            <Button variant="outline" className="border-gold/60 text-foreground hover:bg-gold hover:text-gold-foreground hover:border-gold">
              Contato
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
                className="py-3 text-sm font-medium border-b border-border/60 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-gold">
              Contato
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
