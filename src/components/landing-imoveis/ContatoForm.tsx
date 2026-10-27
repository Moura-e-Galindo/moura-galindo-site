import { useId, useState, type FormEvent, type ReactNode } from "react";
import { buildWhatsAppUrl } from "@/lib/contact";
import { buildLeadWhatsAppMessage, readLeadFormData } from "@/lib/regularizacao-imoveis/lead-message";
import { situacaoOptions } from "@/data/regularizacao-imoveis";
import { cn } from "@/lib/utils";
import { buttonGold, focusRing, inputBase } from "./classes";
import { CheckMark } from "./icons";

const DISCLAIMER = "O envio não cria, por si só, relação entre advogado e cliente.";

interface FieldProps {
  id: string;
  label: string;
  children: ReactNode;
}

function Field({ id, label, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[15px] font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContatoEnviado({ whatsAppUrl }: { whatsAppUrl: string }) {
  return (
    <div role="status" className="py-6">
      <CheckMark size={44} strokeWidth={2.2} className="text-gold-ink" />
      <h3 className="mt-4 mb-2.5 font-playfair text-[24px] font-bold">Abrimos o WhatsApp com a sua mensagem</h3>
      <p className="text-neutral-600">
        Confira os dados e toque em enviar para falar com a nossa equipe, que responde em
        horário comercial. Se a conversa não abriu, use o botão abaixo.
      </p>
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonGold, "mt-6 min-h-12 px-6 text-[15px]")}
      >
        Abrir o WhatsApp
      </a>
      <p className="mt-6 text-[13px] text-neutral-600">{DISCLAIMER}</p>
    </div>
  );
}

export function ContatoForm() {
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);
  const idPrefix = useId();
  const fieldId = (name: string) => `${idPrefix}-${name}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lead = readLeadFormData(event.currentTarget);
    const url = buildWhatsAppUrl(buildLeadWhatsAppMessage(lead));

    window.open(url, "_blank", "noopener,noreferrer");
    setWhatsAppUrl(url);
  }

  if (whatsAppUrl) {
    return <ContatoEnviado whatsAppUrl={whatsAppUrl} />;
  }

  const textInput = cn(inputBase, "min-h-12 px-3.5");

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
      <Field id={fieldId("nome")} label="Seu nome">
        <input id={fieldId("nome")} name="nome" type="text" required autoComplete="name" className={textInput} />
      </Field>

      <Field id={fieldId("contato")} label="WhatsApp ou e-mail para resposta">
        <input id={fieldId("contato")} name="contato" type="text" required autoComplete="tel" className={textInput} />
      </Field>

      <Field id={fieldId("cidade")} label="Cidade do imóvel">
        <input id={fieldId("cidade")} name="cidade" type="text" required className={textInput} />
      </Field>

      <Field id={fieldId("situacao")} label="Qual é a situação principal?">
        <select
          id={fieldId("situacao")}
          name="situacao"
          required
          defaultValue=""
          className={cn(inputBase, "min-h-12 px-3")}
        >
          <option value="">Escolha uma opção</option>
          {situacaoOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>

      <Field id={fieldId("mensagem")} label="Quer contar mais alguma coisa? (opcional)">
        <textarea
          id={fieldId("mensagem")}
          name="mensagem"
          rows={3}
          maxLength={400}
          className={cn(inputBase, "resize-y px-3.5 py-3")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id={fieldId("consentimento")}
          name="consentimento"
          type="checkbox"
          required
          className="mt-0.5 size-5.5 flex-none accent-black"
        />
        <label htmlFor={fieldId("consentimento")} className="text-[14px] leading-normal text-neutral-600">
          Autorizo o uso destes dados apenas para que o escritório responda ao meu contato, conforme a{" "}
          <a href="#privacidade" className={cn("text-black underline hover:text-gold-ink", focusRing)}>
            política de privacidade
          </a>
          .
        </label>
      </div>

      <button type="submit" className={cn(buttonGold, "min-h-[54px] cursor-pointer border-0 text-[16px]")}>
        Solicitar análise da documentação
      </button>
      <p className="text-[13px] text-neutral-600">{DISCLAIMER}</p>
    </form>
  );
}
