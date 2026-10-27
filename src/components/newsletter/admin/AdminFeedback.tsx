export function AdminLoading() {
  return (
    <div className="py-20 text-center text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
      Carregando...
    </div>
  );
}

export function AdminError({ message }: { message: string }) {
  return <div className="py-20 text-center text-sm text-destructive">{message}</div>;
}
