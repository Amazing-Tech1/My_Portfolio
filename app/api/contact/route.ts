import { Resend } from "resend";
import { profile } from "@/lib/data";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const normalizedName = typeof name === "string" ? name.trim() : "";
    const normalizedEmail = typeof email === "string" ? email.trim() : "";
    const normalizedMessage = typeof message === "string" ? message.trim() : "";

    if (
      !normalizedName ||
      normalizedName.length > 120 ||
      !emailPattern.test(normalizedEmail) ||
      normalizedEmail.length > 254 ||
      !normalizedMessage ||
      normalizedMessage.length > 5000
    ) {
      return Response.json(
        { error: "Please provide valid contact details and a message." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: profile.email,
      replyTo: normalizedEmail,
      subject: `Portfolio enquiry from ${normalizedName.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${normalizedName}
Email: ${normalizedEmail}

${normalizedMessage}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json({ error: "Email could not be sent." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json({ error: "Email could not be sent." }, { status: 500 });
  }
}
