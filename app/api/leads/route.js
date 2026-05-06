import { NextResponse } from 'next/server';
import airtable from '@/lib/airtable';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Write to Airtable (using only basic fields to avoid select-option errors)
    await airtable('Leads').create([
      {
        fields: {
          'Lead naam': email.split('@')[0],
          'E-mail': email,
          // Removed 'Interesse' and 'Bron' to ensure write success
          // These can be added back once the exact options are confirmed in Airtable
        },
      },
    ]);

    return NextResponse.json({ message: 'Lead added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Airtable Error:', error);
    return NextResponse.json({ error: 'Failed to add lead' }, { status: 500 });
  }
}
