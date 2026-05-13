import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Team Config (Pas deze aan met de echte mailadressen)
    const team = {
      'sander@suprslim.nl': { name: 'Sander', role: 'admin', token: 'sander_boss_mode_2026', path: '/dashboard/sander' },
      'kirsten@suprslim.nl': { name: 'Kirsten', role: 'creative', token: 'kirsten_creative_hub_2026', path: '/dashboard/kirsten' },
      'lizzy@suprslim.nl': { name: 'Lizzy', role: 'lifestyle', token: 'lizzy_lifestyle_hub_2026', path: '/dashboard/team' },
    };

    const user = team[email.toLowerCase()];

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // De Magic Link die gestuurd moet worden
    const magicLink = `https://suprslim.nl${user.path}?token=${user.token}`;

    // VOOR NU: We loggen de link in de console zodat je hem kunt kopiëren
    // TODO: Koppelen aan MailerLite of Resend API
    console.log(`MAGIC LINK VOOR ${user.name}: ${magicLink}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Magic Link Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
