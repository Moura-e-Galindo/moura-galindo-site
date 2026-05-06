import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-semibold text-foreground">404</h1>
        <div className="gold-divider mx-auto mt-6" />
        <h2 className="mt-6 font-serif text-2xl text-foreground">Página não encontrada</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-wide uppercase text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Moura & Galindo — Advogados Associados" },
      { name: "description", content: "Escritório de advocacia com tradição e excelência. Soluções jurídicas estratégicas em direito empresarial, tributário, trabalhista e mais." },
      { name: "author", content: "Moura & Galindo" },
      { property: "og:title", content: "Moura & Galindo — Advogados Associados" },
      { property: "og:description", content: "Escritório de advocacia com tradição e excelência. Soluções jurídicas estratégicas em direito empresarial, tributário, trabalhista e mais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Moura & Galindo — Advogados Associados" },
      { name: "twitter:description", content: "Escritório de advocacia com tradição e excelência. Soluções jurídicas estratégicas em direito empresarial, tributário, trabalhista e mais." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b931bae2-caab-455c-856d-1f7b2b12c8fc/id-preview-2b574724--bad6df25-4cdc-4346-aea6-a25b3a39dcf6.lovable.app-1776526215825.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b931bae2-caab-455c-856d-1f7b2b12c8fc/id-preview-2b574724--bad6df25-4cdc-4346-aea6-a25b3a39dcf6.lovable.app-1776526215825.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}
