import { useRef, useEffect, useCallback } from "react";
import { Move } from "lucide-react";

export interface FocalPoint {
  x: number;
  y: number;
}

interface Props {
  src: string;
  focal: FocalPoint;
  onChange: (f: FocalPoint) => void;
}

/**
 * Seletor interativo de ponto focal da imagem.
 * O usuário clica ou arrasta para definir qual parte da imagem deve
 * permanecer visível quando ela é recortada em diferentes proporções.
 * O valor resultante é `"x% y%"` — compatível com CSS `object-position`.
 */
export function FocalPointPicker({ src, focal, onChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const posFromEvent = useCallback(
    (e: MouseEvent | React.MouseEvent): FocalPoint | null => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return null;
      return {
        x: clamp(Math.round(((e.clientX - rect.left) / rect.width) * 100)),
        y: clamp(Math.round(((e.clientY - rect.top) / rect.height) * 100))
      };
    },
    []
  );

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    dragging.current = true;
    const pos = posFromEvent(e);
    if (pos) onChange(pos);
  }

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!dragging.current) return;
      const pos = posFromEvent(e);
      if (pos) onChange(pos);
    }
    function onUp() {
      dragging.current = false;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [posFromEvent, onChange]);

  return (
    <div className="space-y-2">
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        className="relative aspect-[16/10] overflow-hidden cursor-crosshair select-none border border-border"
        title="Clique ou arraste para escolher o ponto focal"
      >
        <img
          src={src}
          alt="Preview ponto focal"
          draggable={false}
          className="pointer-events-none h-full w-full object-cover"
          style={{ objectPosition: `${focal.x}% ${focal.y}%` }}
        />

        {/* Grade de terços */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)"
            ].join(","),
            backgroundSize: "33.333% 33.333%"
          }}
        />

        {/* Crosshair no ponto focal */}
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${focal.x}%`, top: `${focal.y}%` }}
        >
          <div
            className="h-8 w-8 rounded-full border-2 border-white"
            style={{
              boxShadow: "0 0 0 1.5px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(0,0,0,0.6)"
            }}
          />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/70" />
          <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-white/70" />
        </div>
      </div>

      <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
        <Move className="h-3 w-3" />
        Clique ou arraste para definir o ponto focal.
        <span className="ml-auto font-mono">
          {focal.x}% {focal.y}%
        </span>
      </p>
    </div>
  );
}
