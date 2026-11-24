/** Filete horizontal que esmaece nas pontas, usado entre seções claras. */
export function Separador() {
  return (
    <div
      aria-hidden="true"
      className="h-px bg-[linear-gradient(90deg,transparent,var(--color-trab-linha)_18%,var(--color-trab-linha)_82%,transparent)]"
    />
  );
}
