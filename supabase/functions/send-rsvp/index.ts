import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';

const BodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  attending: z.string().trim().min(1).max(60),
  guests: z.string().trim().max(4).optional().default('1'),
  dietary: z.string().trim().max(300).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
});

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error('Email credentials are not configured');
    }

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const d = parsed.data;

    const html = `
      <div style="font-family:Georgia,serif;color:#2b2724;line-height:1.7">
        <h2 style="font-weight:400;letter-spacing:.04em">New RSVP</h2>
        <p><strong>Name:</strong> ${esc(d.name)}</p>
        <p><strong>Email:</strong> ${esc(d.email)}</p>
        <p><strong>Attending:</strong> ${esc(d.attending)}</p>
        <p><strong>Guests:</strong> ${esc(d.guests)}</p>
        <p><strong>Dietary notes:</strong> ${esc(d.dietary) || '—'}</p>
        <p><strong>Message:</strong><br/>${esc(d.message).replace(/\n/g, '<br/>') || '—'}</p>
      </div>`;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'Wedding RSVP <onboarding@resend.dev>',
        to: [d.email],
        reply_to: d.email,
        subject: `RSVP — ${d.name} (${d.attending})`,
        html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend request failed [${response.status}]: ${errorBody}`);
      return new Response(
        JSON.stringify({ error: 'Email sending failed', status: response.status, details: errorBody }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify({ ok: true, id: data?.id ?? null }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('send-rsvp error:', e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
