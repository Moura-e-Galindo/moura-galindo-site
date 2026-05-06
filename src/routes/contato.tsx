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

const contactInfo = [
  {
    icon: MapPin,
    title: "Caruaru",
    lines: ["Av. Aracati, nº 382", "Bairro Universitário, Caruaru / PE", "CEP 55016-590"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["+55 (81) 99929-0552", "+55 (81) 2103-4353"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["atendimento@mouraegalindoadvogados.com.br"],
  },
  {
    icon: Clock,
    title: "Atendimento",
    lines: ["Segunda a sexta, 9h às 19h"],
  },
];

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso."
        subtitle="Nossa equipe atende com confidencialidade e disponibilidade. Fale conosco diretamente pelos canais abaixo — retornaremos em até um dia útil."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground mt-1">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
