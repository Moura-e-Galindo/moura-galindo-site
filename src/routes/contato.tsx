import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Moura & Galindo" },
      { name: "description", content: "Entre em contato com o escritório Moura & Galindo. Atendimento em São Paulo e Brasília." },
      { property: "og:title", content: "Contato — Moura & Galindo" },
      { property: "og:description", content: "Fale com nossa equipe. Atendimento em São Paulo e Brasília." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso."
        subtitle="Nossa equipe atende com confidencialidade e disponibilidade. Envie sua mensagem ou ligue diretamente — retornaremos em até um dia útil."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-10">
            {[
              { icon: MapPin, title: "Caruaru", lines: ["Av. Aracati, 1000 — 18º andar", "Bela Vista, São Paulo / SP", "CEP 01310-100"] },
              { icon: Phone, title: "Telefone", lines: ["+55 (11) 3000-0000", "+55 (61) 3000-0000"] },
              { icon: Mail, title: "E-mail", lines: ["contato@mouragalindo.adv.br"] },
              { icon: Clock, title: "Atendimento", lines: ["Segunda a sexta, 9h às 19h"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground mt-1">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form className="lg:col-span-3 bg-card border border-border p-10 space-y-6 shadow-card">
            <h2 className="font-serif text-3xl text-foreground">Envie uma mensagem</h2>
            <div className="gold-divider" />

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nome completo" id="name" />
              <Field label="E-mail" id="email" type="email" />
              <Field label="Telefone" id="phone" />
              <Field label="Empresa" id="company" />
            </div>
            <Field label="Área de interesse" id="area" />
            <div>
              <label htmlFor="msg" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Mensagem</label>
              <textarea
                id="msg"
                rows={5}
                className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              Enviar mensagem
            </button>
            <p className="text-xs text-muted-foreground">
              Suas informações são tratadas com total confidencialidade conforme nossa Política de Privacidade.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input
        id={id}
        type={type}
        className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
