export function Heading({ content }: { content: string }) {
  return (
    <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
      {content}
    </h2>
  );
}
