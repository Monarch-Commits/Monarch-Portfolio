'use server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is missing in environment variables!');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendContact(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  try {
    await resend.emails.send({
      from: 'Monarch Portfolio <onboarding@resend.dev>',
      to: 'monarchpagcas@gmail.com',
      subject: `New Contact Message from ${name}`,
      html: `
  <div style="
    font-family: 'Segoe UI', sans-serif;
    background-color: #f3f4f6;
    padding: 30px;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    ">
      <h1 style="color: #f97316;">📮 New Contact Message</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
     <p style="
    background-color: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  ">${message}</p>
      <footer style="margin-top: 20px; font-size: 12px; color: #6b7280;">
        Sent from your Portfolio Contact Form
      </footer>
    </div>
  </div>
`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
