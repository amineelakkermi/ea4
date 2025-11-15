import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string
      email?: string
      projectType?: string
      budget?: string
      message?: string
    }

    const { name, email, projectType, budget, message } = body

    if (!name || !email || !projectType || !budget) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!host || !user || !pass) {
      return NextResponse.json({ message: 'Email service not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const toAddress = 'amineelakkermi37@gmail.com'

    const subject = `New contact from ${name} – ${projectType}`

    const text = `New contact request from your portfolio website:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project type: ${projectType}\n` +
      `Budget: ${budget}\n` +
      `Message: ${message || 'No message provided.'}`

    await transporter.sendMail({
      from: `Portfolio Contact <${user}>`,
      to: toAddress,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 })
  }
}
