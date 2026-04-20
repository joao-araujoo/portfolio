import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(10).max(5000),
})

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO_EMAIL"] as const

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key])
}

export async function POST(request: Request) {
  try {
    const missingEnvVars = getMissingEnvVars()
    if (missingEnvVars.length > 0) {
      console.error("Missing contact email environment variables:", missingEnvVars)
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
    }

    const json = await request.json()
    const parsed = contactSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid contact form data." }, { status: 400 })
    }

    const { name, email, message } = parsed.data
    const smtpPort = Number(process.env.SMTP_PORT)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nova mensagem do portfólio - ${name}`,
      text: [
        "Nova mensagem recebida pelo formulário do portfólio.",
        "",
        `Nome: ${name}`,
        `Email: ${email}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #171717;">
          <h2>Nova mensagem recebida pelo formulário do portfólio</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-line;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact form email:", error)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}
