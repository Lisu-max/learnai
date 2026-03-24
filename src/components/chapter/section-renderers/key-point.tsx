export function KeyPoint({ content }: { content: string }) {
  return (
    <div className="my-4 border-l-2 border-purple-500/50 bg-purple-500/5 py-2 pl-4">
      <p className="text-sm font-medium text-purple-300/90">{content}</p>
    </div>
  );
}
