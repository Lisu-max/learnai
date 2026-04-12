import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { hasAccessToCourse } from "@/lib/access";

const ALLOWED_SLUGS = [
  "maitriser-outils-ia",
  "creer-avec-ia",
  "prompt-engineering-pro",
  "ia-pour-votre-business",
  "ia-de-a-a-z",
  "pack-complet-ia-2026",
];

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Validate slug — prevent path traversal
  if (!ALLOWED_SLUGS.includes(slug)) {
    return NextResponse.json({ error: "PDF introuvable" }, { status: 404 });
  }

  // Check access: pack-complet grants access to any pro or all-purchased user
  const courseSlug = slug === "pack-complet-ia-2026" ? "pack-complet-ia-2026" : slug;
  const { hasAccess } = await hasAccessToCourse(courseSlug);

  if (!hasAccess) {
    return NextResponse.json(
      { error: "Accès non autorisé. Veuillez acheter cette formation." },
      { status: 403 }
    );
  }

  try {
    const filePath = path.join(process.cwd(), "public", "pdfs", `${slug}.pdf`);
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${slug}.pdf"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Fichier non disponible" }, { status: 404 });
  }
}
