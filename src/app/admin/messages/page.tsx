import type { Metadata } from "next";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { Mail, Clock, User } from "lucide-react";
import { DeleteButton } from "./delete-button";

export const metadata: Metadata = {
  title: "Messages de contact",
  robots: { index: false, follow: false },
};

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export default async function AdminMessagesPage() {
  const db = getServiceSupabase();
  const { data, error } = await db
    .from("contact_messages")
    .select("id, name, email, subject, message, created_at")
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    console.error("Admin messages fetch error:", error);
  }

  const messages: ContactMessage[] = data ?? [];

  return (
    <div className="bg-grid min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
            <Mail className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Messages de contact</h1>
            <p className="text-sm text-muted-foreground">
              {messages.length} message{messages.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="card-glass rounded-2xl p-12 text-center">
            <p className="text-muted-foreground">Aucun message pour le moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <article
                key={msg.id}
                className="card-glass rounded-2xl p-6"
              >
                <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-lg font-semibold">{msg.subject}</h2>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {msg.name}
                      </span>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-purple-400 hover:underline"
                      >
                        {msg.email}
                      </a>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {new Date(msg.created_at).toLocaleString("fr-FR", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </span>
                    </div>
                  </div>
                  <DeleteButton id={msg.id} />
                </header>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
