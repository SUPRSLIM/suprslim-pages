import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Team Config (Pas deze aan met de echte mailadressen)
    const team = {
      'sandervandenbaart@outlook.com': { name: 'Sander', role: 'admin', token: 'sander_boss_mode_2026', path: '/dashboard/sander' },
      'km_opperman@hotmail.com': { name: 'Kirsten', role: 'creative', token: 'kirsten_creative_hub_2026', path: '/dashboard/kirsten' },
      'ljlvdbaart@gmail.com': { name: 'Lizzy', role: 'lifestyle', token: 'lizzy_lifestyle_hub_2026', path: '/dashboard/team' },
    };

    console.log('Login attempt for:', email.trim().toLowerCase());
    const user = team[email.trim().toLowerCase()];

    if (!user) {
      console.log('User not found in team:', Object.keys(team));
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const magicLink = `https://suprslim.nl${user.path}?token=${user.token}`;

    // Verzend de mail via Resend
    await resend.emails.send({
      from: 'SUPRSLIM Hub <noreply@suprslim.nl>',
      to: [email.toLowerCase()],
      subject: 'Je magische link voor de SUPRSLIM Hub',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #eeebe3; border-radius: 24px; background-color: #f8f6f2;">
          <h1 style="color: #3d4a40; margin-bottom: 20px;">Hoi ${user.name}!</h1>
          <p style="color: #6a7a6e; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Klik op de onderstaande knop om direct in te loggen op je persoonlijke SUPRSLIM Dashboard.
          </p>
          <a href="${magicLink}" style="display: inline-block; padding: 16px 32px; background-color: #3d4a40; color: white; text-decoration: none; border-radius: 12px; font-weight: bold;">
            Direct Inloggen →
          </a>
          <p style="color: #999; font-size: 12px; margin-top: 40px; border-top: 1px solid #eeebe3; pt: 20px;">
            Deze link is persoonlijk en geeft direct toegang tot jouw account.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Magic Link Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
