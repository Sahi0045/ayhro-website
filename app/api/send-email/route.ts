import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'ayhrotech@gmail.com'; // The business email
const FROM_EMAIL = 'onboarding@resend.dev'; // Sender email (verified domain in Resend)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Email content
    const enhancedMessage = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    console.log('Attempting to send email with Resend API');
    
    // Send email using Resend
    const data = await resend.emails.send({
      from: `Ayhro Contact <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: enhancedMessage,
      replyTo: email || ADMIN_EMAIL,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Detailed error sending email:', {
      error: error.message,
      stack: error.stack,
      details: error
    });
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 