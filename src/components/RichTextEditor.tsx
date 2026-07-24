import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapLink from "@tiptap/extension-link";
import { Bold, Italic, Link2, Link2Off } from "lucide-react";

interface Props {
  initialValue?: string;
  onChange: (html: string) => void;
  minHeight?: string;
}

/**
 * Editor de texto rico (TipTap) com suporte a negrito, itálico e links inline.
 * Para adicionar um link: selecione o texto e clique em "Inserir link".
 * Para remover: coloque o cursor no link e clique em "Remover link".
 */
export function RichTextEditor({ initialValue = "", onChange, minHeight = "280px" }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        codeBlock: false,
        blockquote: false,
        code: false,
        horizontalRule: false
      }),
      TiptapLink.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "rich-link",
          rel: "noopener noreferrer",
          target: "_blank"
        }
      })
    ],
    content: initialValue,
    onUpdate: ({ editor: e }) => {
      const html = e.getHTML();
      // Normaliza conteúdo vazio
      onChange(html === "<p></p>" ? "" : html);
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none"
      }
    }
  });

  if (!editor) return null;

  function handleLinkToggle() {
    if (editor!.isActive("link")) {
      editor!.chain().focus().unsetLink().run();
      return;
    }

    const { from, to } = editor!.state.selection;
    const hasSelection = from !== to;

    if (!hasSelection) {
      alert("Selecione o texto que deseja transformar em link.");
      return;
    }

    const prev = editor!.getAttributes("link").href as string | undefined;
    const url = window.prompt("URL do link:", prev ?? "https://");

    if (url === null) return; // cancelado
    if (url.trim() === "") {
      editor!.chain().focus().unsetLink().run();
      return;
    }

    editor!.chain().focus().setLink({ href: url.trim() }).run();
  }

  const isLink = editor.isActive("link");

  return (
    <div className="border border-border bg-card focus-within:border-gold transition-colors">
      {/* Barra de ferramentas */}
      <div className="flex items-center gap-1 border-b border-border px-3 py-2">
        <ToolButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Negrito (Ctrl+B)"
        >
          <Bold className="h-3.5 w-3.5" />
        </ToolButton>

        <ToolButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Itálico (Ctrl+I)"
        >
          <Italic className="h-3.5 w-3.5" />
        </ToolButton>

        <div className="mx-1 h-4 w-px bg-border" />

        <ToolButton
          active={isLink}
          onClick={handleLinkToggle}
          title={isLink ? "Remover link" : "Inserir link (selecione o texto primeiro)"}
        >
          {isLink ? <Link2Off className="h-3.5 w-3.5" /> : <Link2 className="h-3.5 w-3.5" />}
          <span className="text-[10px] ml-1 font-medium">
            {isLink ? "Remover link" : "Inserir link"}
          </span>
        </ToolButton>

        {isLink && (
          <span className="ml-auto text-[10px] text-gold truncate max-w-[160px]">
            {editor.getAttributes("link").href}
          </span>
        )}
      </div>

      {/* Área de edição */}
      <EditorContent
        editor={editor}
        className="rich-editor px-4 py-3 text-sm text-foreground"
        style={{ minHeight }}
      />
    </div>
  );
}

// ─── Botão de toolbar ─────────────────────────────────────────────────────────

function ToolButton({
  children,
  active,
  onClick,
  title
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault(); // Evita perder o foco do editor
        onClick();
      }}
      title={title}
      className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs transition-colors ${
        active
          ? "bg-gold/20 text-gold"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
