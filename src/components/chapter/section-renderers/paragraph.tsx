export function Paragraph({ content }: { content: string }) {
  return (
    <p className="mb-4 text-base leading-relaxed text-muted-foreground">
      {content}
    </p>
  );
}
