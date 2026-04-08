import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // In production, this should send to an email service (Resend, Postmark, etc.)
    // For now we just log and return success.
    console.log("Contact form submission:", data);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
