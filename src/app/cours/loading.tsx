export default function CoursLoading() {
  return (
    <div className="relative overflow-x-hidden">
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
          <div className="mx-auto mb-4 h-7 w-48 animate-pulse rounded-full bg-muted" />
          <div className="mx-auto mb-4 h-12 w-96 animate-pulse rounded-lg bg-muted" />
          <div className="mx-auto mb-10 h-6 w-80 animate-pulse rounded bg-muted" />
          <div className="mx-auto grid max-w-lg grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="card-glass px-4 py-3">
                <div className="mx-auto mb-1 h-7 w-12 animate-pulse rounded bg-muted" />
                <div className="mx-auto h-4 w-16 animate-pulse rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 h-8 w-48 animate-pulse rounded bg-muted" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="card-glass h-64 animate-pulse rounded-xl bg-muted/30" />
          ))}
        </div>
      </section>
    </div>
  );
}
