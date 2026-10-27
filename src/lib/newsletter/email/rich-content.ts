import { EMAIL_COLORS, EMAIL_FONT } from "./theme";

const TAG_STYLES: Record<string, string> = {
  p: `margin:0 0 16px;font-family:${EMAIL_FONT};font-size:16px;line-height:1.7;color:${EMAIL_COLORS.inkSoft};`,
  ul: "margin:0 0 16px;padding-left:24px;",
  ol: "margin:0 0 16px;padding-left:24px;",
  li: `margin:0 0 6px;font-family:${EMAIL_FONT};font-size:16px;line-height:1.7;color:${EMAIL_COLORS.inkSoft};`,
  strong: `font-weight:600;color:${EMAIL_COLORS.ink};`,
  a: `color:${EMAIL_COLORS.goldDeep};text-decoration:underline;`
};

export function inlineRichContentStyles(html: string): string {
  return html
    .replace(/<(p|ul|ol|li|strong|a)(\s[^>]*)?>/gi, (_match, tag: string, attrs = "") => {
      const style = TAG_STYLES[tag.toLowerCase()];
      const cleaned = String(attrs).replace(/\s(class|style)="[^"]*"/gi, "");
      return `<${tag}${cleaned} style="${style}">`;
    })
    .replace(/<li([^>]*)>\s*<p[^>]*>(.*?)<\/p>\s*<\/li>/gi, "<li$1>$2</li>");
}
