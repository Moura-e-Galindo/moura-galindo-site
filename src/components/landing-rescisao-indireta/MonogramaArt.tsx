/**
 * Monograma da marca (M + G) em relevo, com camadas empilhadas que simulam profundidade.
 * Os tons abaixo formam a rampa de sombreamento de cada forma, da camada mais funda à frente.
 */

const M_PATH =
  "M53 319 L90 282 L237 429 L384 282 L421 319 L237 503 Z M53 349 L105 401 L105 446 L53 446 Z M421 349 L369 401 L369 446 L421 446 Z";

const G_PATH =
  "M318 120 L300 120 L213 207 L250 244 L309 185 L345 221 L237 329 L129 221 L267 83 L267 69 L237 39 L55 221 L237 403 L419 221 Z";

const M_RAMPA = [
  "#1A1917", "#1F1E1B", "#242220", "#282724", "#2D2C28", "#32302C",
  "#373531", "#3C3A35", "#403F39", "#45433E", "#4A4842"
];

const G_RAMPA = [
  "#5A4919", "#5F4D1B", "#64521E", "#695620", "#6E5A22", "#735E24",
  "#786327", "#7D6729", "#826B2B", "#87702E", "#8C7430"
];

const FRENTE_M = "#111110";
const FRENTE_G = "#BD9D3F";

function Camadas({ href, rampa, frente }: { href: string; rampa: string[]; frente: string }) {
  return (
    <>
      {rampa.map((cor, index) => (
        <use key={cor} href={href} fill={cor} transform={`translate(0 ${(rampa.length - index) * 2})`} />
      ))}
      <use href={href} fill={frente} />
    </>
  );
}

export function MonogramaArt() {
  return (
    <div className="relative mx-auto h-[280px] w-full max-w-[340px] md:h-[470px] md:max-w-none">
      <div className="absolute inset-0 [transform:perspective(1100px)_rotateX(12deg)] [transform-origin:50%_70%] motion-safe:animate-resc-flutua">
        <svg viewBox="20 20 440 540" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" className="block overflow-visible">
          <defs>
            <path id="resc-m-forma" d={M_PATH} />
            <path id="resc-g-forma" d={G_PATH} />
            <filter id="resc-sombra-suave" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
          <ellipse cx="237" cy="548" rx="180" ry="13" fill={FRENTE_M} opacity="0.16" filter="url(#resc-sombra-suave)" />
          <Camadas href="#resc-m-forma" rampa={M_RAMPA} frente={FRENTE_M} />
          <Camadas href="#resc-g-forma" rampa={G_RAMPA} frente={FRENTE_G} />
        </svg>
      </div>
    </div>
  );
}
