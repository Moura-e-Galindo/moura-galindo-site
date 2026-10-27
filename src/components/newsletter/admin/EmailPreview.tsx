import { useEffect, useMemo, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import { renderNewsletterEmail } from "@/lib/newsletter/email/newsletter-email";

interface Props {
  subject: string;
  preheader: string;
  content: string;
}

type Viewport = "desktop" | "mobile";

const VIEWPORT_WIDTH: Record<Viewport, string> = {
  desktop: "100%",
  mobile: "375px"
};

export function EmailPreview({ subject, preheader, content }: Props) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [siteUrl, setSiteUrl] = useState("");

  useEffect(() => setSiteUrl(window.location.origin), []);

  const html = useMemo(
    () =>
      renderNewsletterEmail({
        siteUrl,
        subject: subject || "Assunto da newsletter",
        preheader,
        contentHtml: content || "<p>O conteúdo do e-mail aparecerá aqui.</p>",
        recipientName: "Maria Silva",
        unsubscribeUrl: "#"
      }).html,
    [siteUrl, subject, preheader, content]
  );

  return (
    <div className="border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Prévia
        </span>
        <div className="flex items-center gap-1">
          <ViewportButton
            active={viewport === "desktop"}
            onClick={() => setViewport("desktop")}
            title="Computador"
          >
            <Monitor className="h-3.5 w-3.5" />
          </ViewportButton>
          <ViewportButton
            active={viewport === "mobile"}
            onClick={() => setViewport("mobile")}
            title="Celular"
          >
            <Smartphone className="h-3.5 w-3.5" />
          </ViewportButton>
        </div>
      </div>

      <div className="flex justify-center bg-muted/40 p-4">
        <iframe
          title="Prévia do e-mail"
          srcDoc={html}
          sandbox=""
          className="h-[720px] border-0 bg-white transition-[width]"
          style={{ width: VIEWPORT_WIDTH[viewport] }}
        />
      </div>
    </div>
  );
}

function ViewportButton({
  active,
  onClick,
  title,
  children
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`rounded p-1.5 transition-colors ${
        active ? "bg-gold/20 text-gold" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
