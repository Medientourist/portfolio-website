import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!); // Das Ausrufezeichen erzwingt, dass der Wert definiert ist
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: fromEmail!,
      to: "medientourist@gmail.com",
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for your email!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
