export default function CourseDetailLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-4 h-5 w-32 animate-pulse rounded bg-muted" />
      <div className="mb-6 h-10 w-3/4 animate-pulse rounded-lg bg-muted" />
      <div className="mb-2 h-5 w-full animate-pulse rounded bg-muted" />
      <div className="mb-8 h-5 w-2/3 animate-pulse rounded bg-muted" />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-lg bg-muted/30" />
          ))}
        </div>
        <div className="card-glass h-72 animate-pulse rounded-xl bg-muted/30" />
      </div>
    </div>
  );
}
