import { NextResponse } from 'next/server';
import { generateWeekMenu } from '@/lib/ai';
import airtable from '@/lib/airtable';

export async function POST(request) {
  try {
    const { token, targetGroup } = await request.json();

    // Veiligheidscheck
    if (token !== 'sander_boss_mode_2026' && token !== 'kirsten_creative_hub_2026') {
      return NextResponse.json({ error: 'Niet geautoriseerd' }, { status: 401 });
    }

    // 1. AI aan het werk zetten
    const aiOutput = await generateWeekMenu(targetGroup || 'Gezin');

    // 2. Direct opslaan in Airtable
    const record = await airtable('Slimme Weeklijsten').create({
      'Weeklijst titel': aiOutput.titel,
      'Doelgroep': targetGroup || 'Gezin',
      'Ontbijt': aiOutput.ontbijt,
      'Lunch': aiOutput.lunch,
      'Avondeten': aiOutput.avondeten,
      'Snacks': aiOutput.snacks,
      'Prepmaaltijden': aiOutput.prepmaaltijden,
      'Boodschappenlijst': aiOutput.boodschappenlijst,
      'Bespaartips': aiOutput.bespaartips,
      'Status': 'AI output klaar' // Direct klaar voor Kirsten!
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Weekmenu succesvol gegenereerd en naar Airtable gepusht!',
      recordId: record.id 
    });

  } catch (error) {
    console.error('AI Generation Error:', error);
    return NextResponse.json({ 
      error: 'Er ging iets mis bij het genereren. Controleer of de API-key is ingesteld.' 
    }, { status: 500 });
  }
}
