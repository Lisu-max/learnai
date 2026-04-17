import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Service email non configuré" }, { status: 503 });
  }

  const body = await req.json();
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "LearnAI Contact <contact@learn-ai.fr>",
    to: ["contact@learn-ai.fr"],
    replyTo: email,
    subject: `[Contact] ${subject}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#7c3aed">Nouveau message de contact</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:100px">Nom</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Sujet</td><td style="padding:8px 0">${subject}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0">
        <p style="white-space:pre-wrap;line-height:1.6">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
