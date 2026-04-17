export default function CompteLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 h-8 w-56 animate-pulse rounded-lg bg-muted" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="card-glass h-28 animate-pulse rounded-xl bg-muted/30" />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="card-glass h-32 animate-pulse rounded-xl bg-muted/30" />
          ))}
        </div>
        <div className="space-y-4">
          {[0, 1].map((i) => (
            <div key={i} className="card-glass h-40 animate-pulse rounded-xl bg-muted/30" />
          ))}
        </div>
      </div>
    </div>
  );
}
