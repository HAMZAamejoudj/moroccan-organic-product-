import { NextResponse } from 'next/server';
import { businessFacts } from '@/config/businessFacts';

const clean = (value: unknown, max = 2000): string =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.contactName || body.fullName || body.name, 200);
    const email = clean(body.contactEmail || body.email, 200);
    const company = clean(body.contactCompany || body.company, 200);
    const country = clean(body.contactCountry || body.country, 100);
    const whatsapp = clean(body.contactPhone || body.contactWhatsapp || body.phone, 50);
    const interest = clean(body.contactSubject || body.contactInterest || body.subject, 100);
    const quantity = clean(body.contactQuantity || body.quantity, 200);
    const message = clean(body.contactMessage || body.message, 5000);
    const source = clean(body.contactSource || body.source || 'Contact Page', 100);

    if (!name || !email) {
      return NextResponse.json({ type: 'error', text: 'Some input fields are empty.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ type: 'error', text: 'Email is not valid.' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || businessFacts.email;
    const from = process.env.CONTACT_FROM_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    // In local development or preview without API keys, simulate successful submission
    if (!apiKey || !from || !to) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Contact form [Dev Mode simulation]:', { name, email, company, whatsapp, interest, message });
        return NextResponse.json({
          type: 'message',
          text: `Thank you, ${name}. Your request has been received.`,
        });
      }

      console.error('Contact form: RESEND_API_KEY, CONTACT_FROM_EMAIL or recipient is not configured.');
      return NextResponse.json(
        {
          type: 'error',
          text: `Our form is temporarily unavailable. Please email us${to ? ` at ${to}` : ''}.`,
        },
        { status: 503 },
      );
    }

    const lines: [string, string][] = [
      ['Name', name],
      ['Company', company],
      ['Email', email],
      ['Country', country],
      ['WhatsApp', whatsapp],
      ['Interested in', interest],
      ['Quantity', quantity],
      ['Source page', source],
    ];
    const text = [...lines.map(([k, v]) => `${k}: ${v || '-'}`), '', 'Message:', message].join('\n');
    const html = `<table>${lines
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v || '-')}</td></tr>`)
      .join('')}</table><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Quote request${interest ? ` - ${interest}` : ''} - ${name}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      console.error('Contact form: email provider error', response.status, await response.text());
      return NextResponse.json(
        { type: 'error', text: `We could not send your request. Please email us${to ? ` at ${to}` : ''}.` },
        { status: 502 },
      );
    }

    return NextResponse.json({
      type: 'message',
      text: `Thank you, ${name}. Your request has been sent.`,
    });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ type: 'error', text: 'Sorry, something went wrong. Please try again.' }, { status: 500 });
  }
}
