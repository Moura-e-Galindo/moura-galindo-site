import type { SVGProps } from "react";

/** Ícones da landing: o chevron remete ao símbolo da marca (setas do monograma). */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function baseProps({ size = 24, ...props }: IconProps): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props
  };
}

export function ChevronMark(props: IconProps) {
  return (
    <svg strokeWidth={2.4} {...baseProps(props)}>
      <polyline points="8,4 16,12 8,20" />
    </svg>
  );
}

export function ChevronMarkLarge(props: IconProps) {
  return (
    <svg strokeWidth={2.6} {...baseProps(props)}>
      <polyline points="7,3 16,12 7,21" />
    </svg>
  );
}

export function CheckMark(props: IconProps) {
  return (
    <svg strokeWidth={2.4} {...baseProps(props)}>
      <polyline points="4,12 10,18 20,6" />
    </svg>
  );
}

export function ChatBubble(props: IconProps) {
  return (
    <svg strokeWidth={2} {...baseProps(props)}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 20.5l1.6-5.3A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  );
}

export function WhatsAppGlyph(props: IconProps) {
  return (
    <svg strokeWidth={2} {...baseProps(props)}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 20.5l1.6-5.3A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M9 9.2c.3 1.6 1.9 3.6 3.9 4.6l1.1-1.1 1.6.7-.4 1.5c-2.8.1-6.5-3-6.9-6.3l1.5-.4.7 1.6z" />
    </svg>
  );
}
