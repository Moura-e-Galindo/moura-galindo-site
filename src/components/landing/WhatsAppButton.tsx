import { MessageCircle } from "lucide-react";
import { salarioMaternidadeWhatsAppUrl } from "./whatsapp";

interface WhatsAppButtonProps {
  /** Texto do botão. Padrão: "Fale conosco agora pelo WhatsApp". */
  label?: string;
  /** Classe adicional para ajustes pontuais de largura/margem. */
  className?: string;
  /** Quando verdadeiro, ocupa a largura total do container. */
  fullWidth?: boolean;
}

/**
 * CTA verde padrão da landing page. Todos os botões de conversão desta
 * página devem usar este componente para manter consistência visual e
 * apontar sempre para a mesma conversa de WhatsApp.
 */
export function WhatsAppButton({
  label = "Fale conosco agora pelo WhatsApp",
  className = "",
  fullWidth = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={salarioMaternidadeWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-3 rounded-full",
        "bg-[#25D366] px-8 py-4 text-base font-semibold text-white",
        "shadow-lg shadow-[#25D366]/30 transition-all",
        "hover:bg-[#1ebe5a] hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
        fullWidth ? "w-full" : "",
        className,
      ].join(" ").trim()}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} />
      {label}
    </a>
  );
}
