import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { isAdmin } from "@/lib/admin";

const UuidSchema = z.string().uuid();

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user)) {
    return NextResponse.json({ error: "Accès refusé." }, { status: 403 });
  }

  const { id } = await params;
  if (!UuidSchema.safeParse(id).success) {
    return NextResponse.json({ error: "Identifiant invalide." }, { status: 400 });
  }

  const db = getServiceSupabase();
  const { error } = await db.from("contact_messages").delete().eq("id", id);

  if (error) {
    console.error("Admin delete error:", error);
    return NextResponse.json({ error: "Suppression impossible." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
