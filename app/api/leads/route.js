import { NextResponse } from 'next/server';
import airtable from '@/lib/airtable';

export async function POST(req) {
  try {
    const { email, source = 'homepage' } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is verplicht' }, { status: 400 });
    }

    // Capture the lead with source and date tracking
    await airtable('Leads').create([
      {
        fields: {
          'Lead naam': email.split('@')[0],
          'E-mail': email,
          'Bron': source,
          'Datum aanvraag': new Date().toISOString(),
          'Status': 'Nieuw', // Ensure there is a status field in Airtable
        },
      },
    ]);

    return NextResponse.json({ 
      success: true, 
      message: 'Lead succesvol toegevoegd' 
    }, { status: 200 });

  } catch (error) {
    console.error('Airtable Lead Submission Error:', error);
    
    // Check if it's a specific Airtable error (like missing field)
    const errorMessage = error.message || 'Kon lead niet toevoegen';
    
    return NextResponse.json({ 
      success: false, 
      error: errorMessage 
    }, { status: 500 });
  }
}
