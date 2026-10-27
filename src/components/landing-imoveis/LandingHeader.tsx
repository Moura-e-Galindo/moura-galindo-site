import logoClaro from "@/assets/regularizacao-imoveis/logo-horizontal-claro.webp";
import { cn } from "@/lib/utils";
import { escritorio } from "@/data/regularizacao-imoveis";
import { LandingContainer } from "./LandingContainer";
import { BrandChevrons } from "./icons";
import { focusRing } from "./classes";

export function LandingHeader() {
  return (
    <header className="border-b border-sand-line bg-white">
      <LandingContainer className="flex flex-wrap items-center justify-between gap-4 py-4.5">
        <a href="#topo" className={cn("flex items-center rounded-[2px]", focusRing)}>
          <img
            src={logoClaro}
            alt={escritorio.nome}
            width={195}
            height={46}
            className="block h-[46px] w-auto"
          />
        </a>

        <div className="flex items-center gap-4 border-l-2 border-gold pl-5">
          <BrandChevrons />
          <p className="flex flex-col leading-[1.15]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-ink">
              Núcleo de
            </span>
            <span className="font-playfair text-[20px] font-bold tracking-[0.01em] text-black">
              Direito Imobiliário
            </span>
          </p>
        </div>
      </LandingContainer>
    </header>
  );
}
