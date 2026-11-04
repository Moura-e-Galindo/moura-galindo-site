import { requisitos } from "@/data/rescisao-indireta";
import { cn } from "@/lib/utils";
import { containerClass } from "./classes";

export function RequisitosSection() {
  return (
    <section className="bg-resc-noite text-white">
      <div className={cn(containerClass, "flex flex-col gap-5 py-11")}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <h2 className="font-playfair text-[28px] font-bold leading-[1.2]">
            O que costuma ser examinado em juízo
          </h2>
          <p className="text-[14px] text-resc-apoio-escuro">Vale para quem alega e para quem se defende.</p>
        </div>

        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {requisitos.map((requisito, index) => (
            <li
              key={requisito}
              className="flex flex-col gap-2.5 rounded-[14px] border border-resc-borda-escura p-4"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "size-2.5 rounded-full",
                  index % 2 === 0 ? "bg-gold" : "bg-resc-petroleo-claro"
                )}
              />
              <span className="text-[14px] font-medium leading-[1.45]">{requisito}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
