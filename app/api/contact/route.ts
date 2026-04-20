import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  if (!resend) {
    throw new Error('Resend API key not configured');
  }
  return resend;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateFormData(data: unknown): data is ContactFormData {
  if (typeof data !== 'object' || data === null) return false;

  const form = data as Record<string, unknown>;

  return (
    typeof form.name === 'string' &&
    form.name.trim().length > 0 &&
    form.name.trim().length <= 100 &&
    typeof form.email === 'string' &&
    validateEmail(form.email) &&
    typeof form.subject === 'string' &&
    form.subject.trim().length > 0 &&
    form.subject.trim().length <= 200 &&
    typeof form.message === 'string' &&
    form.message.trim().length > 0 &&
    form.message.trim().length <= 5000
  );
}

export async function POST(request: NextRequest) {
  // Add CORS headers
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Service email non configuré. Veuillez contacter l\'administrateur.' },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Validate form data
    if (!validateFormData(body)) {
      return NextResponse.json(
        { error: 'Données invalides. Veuillez vérifier tous les champs.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Rate limiting (basic check - in production use a proper rate limiter)
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    console.log(`[Contact Form] Submission from IP: ${clientIp}`);

    // Send email to Joël
    const adminResponse = await getResend().emails.send({
      from: 'contact@joel-cameroun.com',
      to: process.env.CONTACT_EMAIL || 'joel@joel-cameroun.com',
      replyTo: email,
      subject: `Nouveau message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Sujet:</strong> ${escapeHtml(subject)}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #ff6b35;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">Message envoyé depuis le formulaire de contact</p>
        </div>
      `,
    });

    if (adminResponse.error) {
      console.error('Error sending admin email:', adminResponse.error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userResponse = await getResend().emails.send({
      from: 'noreply@joel-cameroun.com',
      to: email,
      subject: 'Nous avons reçu votre message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Merci de nous avoir contacté!</h2>
          <p>Bonjour ${escapeHtml(name)},</p>
          <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #ff6b35;">
            <p><strong>Récapitulatif:</strong></p>
            <p><strong>Sujet:</strong> ${escapeHtml(subject)}</p>
            <p style="white-space: pre-wrap;"><strong>Message:</strong> ${escapeHtml(message)}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666;">Cordialement,<br/>Joël Cameroun</p>
        </div>
      `,
    });

    if (userResponse.error) {
      console.error('Error sending confirmation email:', userResponse.error);
      // Don't fail the entire request if confirmation email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a été envoyé avec succès!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
