import { MapPin, Phone, Instagram } from "lucide-react";
import logoDarkFull from "@/assets/footer-dark-full.png";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * Rodapé próprio da landing page (independente do rodapé do site):
 * identidade, contato do escritório e último CTA de WhatsApp.
 */
export function LandingFooter() {
  return (
    <footer className="bg-[#4a2032] py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <img
          src={logoDarkFull}
          alt="Moura & Galindo Advogados Associados"
          width={220}
          height={73}
          className="mx-auto h-auto w-48 object-contain"
        />

        <div className="mx-auto my-8 h-0.5 w-16 bg-gold" />

        <ul className="mx-auto flex max-w-xl flex-col items-center gap-4 text-sm text-white/85">
          <li className="flex items-start gap-3 text-left">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e8b5c4]" strokeWidth={1.5} />
            <span>
              Avenida Aracati, nº 382, Bairro Universitário, Caruaru - PE
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-[#e8b5c4]" strokeWidth={1.5} />
            <a href="tel:+5581999290552" className="transition-colors hover:text-[#e8b5c4]">
              (81) 99929-0552
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Instagram className="h-5 w-5 shrink-0 text-[#e8b5c4]" strokeWidth={1.5} />
            <a
              href="https://www.instagram.com/mouraegalindoadv"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#e8b5c4]"
            >
              @mouraegalindoadv
            </a>
          </li>
        </ul>

        <div className="mt-10">
          <WhatsAppButton />
        </div>

        <p className="mt-12 text-xs text-white/50">
          © {new Date().getFullYear()} Moura &amp; Galindo Advogados Associados.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
