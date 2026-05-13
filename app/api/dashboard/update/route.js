import { NextResponse } from 'next/server';
import airtable from '@/lib/airtable';

export async function POST(request) {
  try {
    const { recordId, table, newStatus, token } = await request.json();

    // Basic Security Check
    const validTokens = [
      'sander_boss_mode_2026',
      'kirsten_creative_hub_2026',
      'lizzy_lifestyle_hub_2026'
    ];

    if (!validTokens.includes(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Update Airtable
    await airtable(table).update([
      {
        id: recordId,
        fields: {
          'Status': newStatus
        }
      }
    ]);

    return NextResponse.json({ success: true, message: `Status updated to ${newStatus}` });
  } catch (error) {
    console.error('Dashboard Update Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
