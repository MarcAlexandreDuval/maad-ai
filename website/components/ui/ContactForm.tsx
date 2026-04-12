"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-flat p-10 text-center">
        <div className="text-display text-3xl mb-4 text-emerald">Bien reçu.</div>
        <p className="text-muted">
          On te répond dans les 24 prochaines heures. Check ton inbox — et ton dossier
          courriel indésirable au cas où.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="field">
          <label className="field-label" htmlFor="name">
            Nom *
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="field-input"
            placeholder="Jean Tremblay"
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="email">
            Courriel *
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="field-input"
            placeholder="toi@entreprise.com"
          />
        </div>
      </div>

      <div className="field">
        <label className="field-label" htmlFor="company">
          Entreprise
        </label>
        <input type="text" id="company" name="company" className="field-input" placeholder="Ton entreprise" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="field">
          <label className="field-label" htmlFor="service">
            Service d&apos;intérêt
          </label>
          <select id="service" name="service" className="field-select" defaultValue="">
            <option value="" disabled>
              Choisis un service
            </option>
            <option value="intelligence-artificielle">Intelligence artificielle</option>
            <option value="visibilite-web">Visibilité web</option>
            <option value="pack-complet">Pack complet (IA + Visibilité)</option>
            <option value="unknown">Je ne sais pas encore</option>
          </select>
        </div>
        <div className="field">
          <label className="field-label" htmlFor="budget">
            Budget approximatif
          </label>
          <select id="budget" name="budget" className="field-select" defaultValue="">
            <option value="" disabled>
              Choisis une tranche
            </option>
            <option value="sub-2k">Moins de 2 000 $</option>
            <option value="2-5k">2 000 $ — 5 000 $</option>
            <option value="5-10k">5 000 $ — 10 000 $</option>
            <option value="10-25k">10 000 $ — 25 000 $</option>
            <option value="25k+">25 000 $ +</option>
            <option value="unknown">Je ne sais pas encore</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="field-label" htmlFor="message">
          Ton message *
        </label>
        <textarea
          required
          id="message"
          name="message"
          className="field-textarea"
          placeholder="Parle-nous de ton contexte, ton problème, ce que tu aimerais régler..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary justify-center mt-2 disabled:opacity-50"
      >
        {status === "sending" ? "Envoi..." : "Envoyer le message"}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3.5 8H12.5M12.5 8L8 3.5M12.5 8L8 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Oups, un problème. Écris-nous directement à{" "}
          <a href="mailto:contact@maad-ai.com" className="text-emerald underline">
            contact@maad-ai.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
