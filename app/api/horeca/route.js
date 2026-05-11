import { NextResponse } from 'next/server';
import airtable from '@/lib/airtable';

export async function POST(req) {
  try {
    const { restaurant, email, website, goal } = await req.json();

    if (!email || !restaurant) {
      return NextResponse.json({ error: 'Email and Restaurant name are required' }, { status: 400 });
    }

    // Write to Airtable 'Leads' table
    // We map Horeca-specific data to the 'Bericht' and 'Interesse' fields
    await airtable('Leads').create([
      {
        fields: {
          'Lead naam': restaurant,
          'E-mail': email,
          'Bericht': `Website: ${website}\nHoofddoel: ${goal}`,
          'Bron': 'Website',
          'Interesse': 'Horeca Engine',
          'Status': 'Nieuw'
        },
      },
    ]);

    return NextResponse.json({ message: 'Horeca lead added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Airtable Horeca Error:', error);
    return NextResponse.json({ error: 'Failed to add horeca lead' }, { status: 500 });
  }
}
