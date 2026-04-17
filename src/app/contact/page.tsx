"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <div className="bg-grid min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
            <Mail className="h-7 w-7 text-purple-400" />
          </div>
          <h1 className="mb-2 text-3xl font-bold">
            Nous <span className="gradient-text-animated">contacter</span>
          </h1>
          <p className="text-muted-foreground">
            Une question, une suggestion ? On vous répond sous 24h.
          </p>
        </div>

        {status === "success" ? (
          <div className="card-glass animate-fade-in rounded-2xl p-10 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-400" />
            <h2 className="mb-2 text-xl font-bold">Message envoyé !</h2>
            <p className="text-muted-foreground">
              Merci pour votre message. Nous vous répondrons à <strong>{form.email}</strong> dans les 24h.
            </p>
            <button
              onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setStatus("idle"); }}
              className="mt-6 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-accent"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-glass animate-fade-in-delay-1 space-y-5 rounded-2xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Nom</label>
                <input
                  type="text"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-border/60 bg-background/50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="votre@email.com"
                  className="w-full rounded-lg border border-border/60 bg-background/50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">Sujet</label>
              <input
                type="text"
                required
                minLength={3}
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                placeholder="Ex : Question sur un cours premium"
                className="w-full rounded-lg border border-border/60 bg-background/50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                required
                minLength={10}
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Décrivez votre demande..."
                className="w-full resize-none rounded-lg border border-border/60 bg-background/50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-sm text-red-400">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                Erreur lors de l&apos;envoi. Réessayez ou écrivez directement à contact@learn-ai.fr.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gradient flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-opacity disabled:opacity-60"
            >
              {status === "loading" ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Ou directement par email :{" "}
              <a href="mailto:contact@learn-ai.fr" className="text-purple-400 hover:underline">
                contact@learn-ai.fr
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
