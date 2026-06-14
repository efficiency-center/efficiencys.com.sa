import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, phone } = await req.json();

  if (!email || !phone) {
    return NextResponse.json({ error: "Email and phone are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Efficiency Center Website" <${process.env.SMTP_USER}>`,
      to: "contact@efficiencys.com.sa",
      subject: "New Contact Form Submission",
      text: `New lead from the website:\n\nEmail: ${email}\nPhone: (+966) ${phone}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> (+966) ${phone}</p>
        <hr />
        <p style="color:#888;font-size:12px;">Sent from efficiencys.com.sa contact form</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
