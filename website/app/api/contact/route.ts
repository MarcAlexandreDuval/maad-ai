import { NextResponse } from "next/server";
import { Resend } from "resend";

// Force dynamic rendering — never evaluate this route at build time
export const dynamic = "force-dynamic";

// Escape HTML to prevent injection in the email body
function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Map dropdown codes to readable labels
const SERVICE_LABELS: Record<string, string> = {
  "intelligence-artificielle": "Intelligence artificielle",
  "visibilite-web": "Visibilité web",
  "pack-complet": "Pack complet (IA + Visibilité)",
  unknown: "Pas encore décidé",
};

const BUDGET_LABELS: Record<string, string> = {
  "sub-2k": "Moins de 2 000 $",
  "2-5k": "2 000 $ — 5 000 $",
  "5-10k": "5 000 $ — 10 000 $",
  "10-25k": "10 000 $ — 25 000 $",
  "25k+": "25 000 $ +",
  unknown: "Pas encore décidé",
};

export async function POST(req: Request) {
  try {
    if (!(process.env.RESEND_API_KEY || process.env.resend_key)) {
      console.error("RESEND_API_KEY missing in env");
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Lazy instantiation — avoids build-time crash if env var isn't loaded yet
    const resend = new Resend((process.env.RESEND_API_KEY || process.env.resend_key));

    const data = await req.json();

    // Required fields
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalide" },
        { status: 400 }
      );
    }

    // Optional fields
    const company = String(data.company || "").trim();
    const serviceCode = String(data.service || "").trim();
    const budgetCode = String(data.budget || "").trim();
    const service = SERVICE_LABELS[serviceCode] || serviceCode;
    const budget = BUDGET_LABELS[budgetCode] || budgetCode;

    const subject = `Nouveau contact site — ${name}${company ? ` (${company})` : ""}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
          Nouveau contact via maad-ai.com
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Nom :</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Email :</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #10b981;">${escapeHtml(email)}</a></td></tr>
          ${company ? `<tr><td style="padding: 6px 0; font-weight: bold;">Entreprise :</td><td style="padding: 6px 0;">${escapeHtml(company)}</td></tr>` : ""}
          ${service ? `<tr><td style="padding: 6px 0; font-weight: bold;">Service :</td><td style="padding: 6px 0;">${escapeHtml(service)}</td></tr>` : ""}
          ${budget ? `<tr><td style="padding: 6px 0; font-weight: bold;">Budget :</td><td style="padding: 6px 0;">${escapeHtml(budget)}</td></tr>` : ""}
        </table>
        <h3 style="margin-top: 24px;">Message :</h3>
        <div style="background: #f5f5f5; padding: 16px; border-left: 3px solid #10b981; white-space: pre-wrap;">${escapeHtml(message)}</div>
        <p style="color: #888; font-size: 12px; margin-top: 32px;">
          Envoyé via le formulaire de contact de <a href="https://www.maad-ai.com" style="color: #10b981;">maad-ai.com</a><br>
          Réponds directement à cet email pour répondre au prospect.
        </p>
      </div>
    `;

    const text = [
      "Nouveau contact via maad-ai.com",
      "",
      `Nom : ${name}`,
      `Email : ${email}`,
      company ? `Entreprise : ${company}` : null,
      service ? `Service : ${service}` : null,
      budget ? `Budget : ${budget}` : null,
      "",
      "Message :",
      message,
      "",
      "---",
      "Envoyé via le formulaire de contact de maad-ai.com",
      "Réponds directement à cet email pour répondre au prospect.",
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await resend.emails.send({
      from: "MAAD-AI Contact <noreply@maad-ai.com>",
      to: ["contact@maad-ai.com"],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Email failed to send" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
