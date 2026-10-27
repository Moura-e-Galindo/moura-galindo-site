import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Logo } from "@/components/Logo";
import { LogOut, Plus, List, Mail } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout
});

function AdminLayout() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    supabase.auth.getSession().then((result: any) => {
      if (!result.data?.session) {
        navigate({ to: "/login" });
      } else {
        setChecking(false);
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: listener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      if (!session) navigate({ to: "/login" });
    });

    return () => listener.subscription.unsubscribe();
  }, [navigate]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
          Verificando acesso...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin top bar */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo compact height={28} />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Admin
            </span>
            <nav className="flex items-center gap-1">
              <Link
                to="/admin"
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-accent text-foreground" }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent transition-colors rounded"
              >
                <List className="h-3.5 w-3.5" /> Notícias
              </Link>
              <Link
                to="/admin/nova"
                activeProps={{ className: "bg-accent text-foreground" }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent transition-colors rounded"
              >
                <Plus className="h-3.5 w-3.5" /> Nova
              </Link>
              <Link
                to="/admin/newsletter"
                activeProps={{ className: "bg-accent text-foreground" }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent transition-colors rounded"
              >
                <Mail className="h-3.5 w-3.5" /> Newsletter
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Ver site
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" /> Sair
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
